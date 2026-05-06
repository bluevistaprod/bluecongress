import { getDb } from "./db";
import { blogArticles } from "../drizzle/schema";
import { eq } from "drizzle-orm";

const defaultArticles = [
  {
    id: "article-1",
    title: "L'Engagement des Participants : La Clé du Succès des Congrès Modernes",
    slug: "engagement-participants-cle-succes",
    excerpt: "Découvrez comment les applications mobiles interactives transforment l'expérience des participants et augmentent l'engagement de 300%.",
    category: "engagement",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/blog_engagement_interactive-mMEGQYVzbqXE4G4HbPLynr.webp",
    content: "# L'Engagement des Participants...",
    author: "Bluevista Production",
    published: 1,
    publishedAt: new Date(),
  },
  {
    id: "article-2",
    title: "Maximiser le ROI des Congrès : La Visibilité des Sponsors au Cœur de la Stratégie",
    slug: "maximiser-roi-conges-visibilite-sponsors",
    excerpt: "Comment les applications mobiles augmentent la visibilité des sponsors et génèrent un ROI mesurable pour les partenaires de votre événement.",
    category: "roi",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/blog_roi_sponsors-BwrTGHPp69sfsgaEyV2rre.webp",
    content: "# Maximiser le ROI des Congrès...",
    author: "Bluevista Production",
    published: 1,
    publishedAt: new Date(),
  },
  {
    id: "article-3",
    title: "Gamification : Comment Transformer les Participants en Ambassadeurs",
    slug: "gamification-participants-ambassadeurs",
    excerpt: "Explorez comment les systèmes de gamification augmentent l'engagement et transforment les participants en ambassadeurs de votre événement.",
    category: "engagement",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/blog_gamification-ExNxv9vgGEEpF6oEPNRBoY.webp",
    content: "# Gamification : Comment Transformer...",
    author: "Bluevista Production",
    published: 1,
    publishedAt: new Date(),
  },
  {
    id: "article-4",
    title: "Réseautage Professionnel : Créer des Connexions Durables",
    slug: "reseautage-professionnel-connexions-durables",
    excerpt: "Découvrez comment les outils de réseautage numérique facilitent les connexions professionnelles et créent des relations durables.",
    category: "engagement",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/blog_networking_app-5gojFSyJQVHD7RJPHLa9QV.webp",
    content: "# Réseautage Professionnel...",
    author: "Bluevista Production",
    published: 1,
    publishedAt: new Date(),
  },
  {
    id: "article-5",
    title: "Analytics et Données : Mesurer le Succès de Votre Congrès",
    slug: "analytics-donnees-mesurer-succes",
    excerpt: "Comment utiliser les données et les analytics pour mesurer le succès de votre congrès et optimiser les éditions futures.",
    category: "roi",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/blog_data_analytics-c39feawY8f6HkcymmSzZAU.webp",
    content: "# Analytics et Données...",
    author: "Bluevista Production",
    published: 1,
    publishedAt: new Date(),
  },
  {
    id: "article-6",
    title: "Événements Hybrides : Étendre Votre Audience au-delà des Frontières",
    slug: "evenements-hybrides-audience-mondiale",
    excerpt: "Explorez comment les événements hybrides étendent votre audience et créent de nouvelles opportunités de ROI.",
    category: "roi",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/blog_hybrid_event-mobDaTx9RXdHKa4dfCZs25.webp",
    content: "# Événements Hybrides...",
    author: "Bluevista Production",
    published: 1,
    publishedAt: new Date(),
  },
  {
    id: "article-7",
    title: "Personnalisation de l'Expérience : Créer un Événement Unique pour Chaque Participant",
    slug: "personnalisation-experience-unique-chaque-participant",
    excerpt: "Découvrez comment la personnalisation crée une expérience unique pour chaque participant et augmente la satisfaction et le ROI.",
    category: "engagement",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/blog_personalization-L6aA6nWdG9nMS8kjGxe2Z4.webp",
    content: "# Personnalisation de l'Expérience...",
    author: "Bluevista Production",
    published: 1,
    publishedAt: new Date(),
  },
];

export async function initializeBlogArticles() {
  const db = await getDb();
  if (!db) {
    console.warn("[Blog] Cannot initialize articles: database not available");
    return;
  }

  try {
    // Check if articles already exist
    const existing = await db.select().from(blogArticles).limit(1);
    if (existing.length > 0) {
      console.log("[Blog] Articles already exist, skipping initialization");
      return;
    }

    // Insert default articles
    for (const article of defaultArticles) {
      await db.insert(blogArticles).values(article);
    }
    console.log("[Blog] Initialized 7 blog articles");
  } catch (error) {
    console.error("[Blog] Failed to initialize articles:", error);
  }
}

// Call initialization on module load
initializeBlogArticles();
