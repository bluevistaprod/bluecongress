import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // Les fichiers de /assets portent un hash dans leur nom (index-CwLq9Xom.js) : leur contenu
  // ne change JAMAIS pour un nom donné, un nouveau build produit un nouveau nom. Ils peuvent
  // donc être gardés un an par le navigateur. Sans ça (max-age=0), chaque visite les revalide.
  app.use(
    "/assets",
    express.static(path.join(distPath, "assets"), {
      immutable: true,
      maxAge: "1y",
    })
  );

  // Le reste (favicons, images, sitemap…) n'a pas de hash : une journée, pas plus.
  // ⛔ `index.html` ne doit jamais être mis en cache, sinon une mise en ligne n'est pas vue.
  app.use(
    express.static(distPath, {
      maxAge: "1d",
      setHeaders: (res, filePath) => {
        if (filePath.endsWith("index.html")) {
          res.setHeader("Cache-Control", "no-cache");
        }
      },
    })
  );

  // Toute autre URL renvoie l'application (c'est une SPA : le routage se fait côté client).
  //
  // ⛔ MAIS le CODE HTTP doit dire la vérité. Servir la page d'accueil en `200` pour
  // /nimporte-quoi crée des « soft 404 » : Google indexe des URL fantômes et se méfie du site.
  // On renvoie donc l'app avec un `404` sur les chemins qui ne sont pas des routes connues —
  // le visiteur voit la belle page « introuvable », et les robots voient un vrai 404.
  const ROUTES = new Set([
    "/",
    "/offres",
    "/cas-clients",
    "/a-propos",
    "/faq",
    "/contact",
    "/demander-une-demonstration",
    "/mentions-legales",
    "/politique-de-confidentialite",
    "/cgv",
    "/admin",
  ]);

  app.use("*", (req, res) => {
    const chemin = (req.originalUrl.split("?")[0] || "/").replace(/\/+$/, "") || "/";
    res.status(ROUTES.has(chemin) ? 200 : 404);
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
