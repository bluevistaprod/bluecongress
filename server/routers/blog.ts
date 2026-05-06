import { router, publicProcedure, protectedProcedure } from "../_core/trpc";
import { z } from "zod";
import { getAllBlogArticles, getBlogArticleBySlug, getBlogArticlesByCategory, createBlogArticle, updateBlogArticle, deleteBlogArticle, publishBlogArticle, unpublishBlogArticle } from "../db";

export const blogRouter = router({
  // Public procedures
  getAll: publicProcedure.query(async () => {
    return await getAllBlogArticles();
  }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      return await getBlogArticleBySlug(input.slug);
    }),

  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ input }) => {
      return await getBlogArticlesByCategory(input.category);
    }),

  // Protected procedures (admin only)
  create: protectedProcedure
    .input(z.object({
      id: z.string(),
      title: z.string(),
      slug: z.string(),
      excerpt: z.string(),
      content: z.string(),
      imageUrl: z.string().optional(),
      category: z.string(),
      author: z.string().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await createBlogArticle({
        ...input,
        published: 0,
      });
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string(),
      title: z.string().optional(),
      slug: z.string().optional(),
      excerpt: z.string().optional(),
      content: z.string().optional(),
      imageUrl: z.string().optional(),
      category: z.string().optional(),
      author: z.string().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      const { id, ...data } = input;
      return await updateBlogArticle(id, data);
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await deleteBlogArticle(input.id);
    }),

  publish: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await publishBlogArticle(input.id);
    }),

  unpublish: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await unpublishBlogArticle(input.id);
    }),
});
