import { router, protectedProcedure } from '../_core/trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { getAllOffers, updateOfferPrice, updateFeature, addFeature, removeFeature } from '../db';

/**
 * Router tRPC pour la gestion des offres
 * Accessible uniquement aux administrateurs
 */

/**
 * Procédure protégée pour les administrateurs uniquement
 */
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'admin') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Admin access required' });
  }
  return next({ ctx });
});

export const offersRouter = router({
  /**
   * Récupérer toutes les offres (publique)
   */
  getAll: protectedProcedure.query(async () => {
    return getAllOffers();
  }),

  /**
   * Mettre à jour le prix d'une offre
   */
  updatePrice: adminProcedure
    .input(
      z.object({
        packId: z.string(),
        newPrice: z.number().positive(),
      })
    )
    .mutation(async ({ input }: { input: { packId: string; newPrice: number } }) => {
      const result = await updateOfferPrice(input.packId, input.newPrice);
      return { success: true, packs: result };
    }),

  /**
   * Mettre à jour une fonctionnalité d'une offre
   */
  updateFeature: adminProcedure
    .input(
      z.object({
        packId: z.string(),
        featureId: z.string(),
        updates: z.object({
          name: z.string().optional(),
          description: z.string().optional(),
          included: z.boolean().optional(),
        }),
      })
    )
    .mutation(async ({ input }: any) => {
      // Convert boolean to int for database
      const updates = {
        ...input.updates,
        included: input.updates.included !== undefined ? (input.updates.included ? 1 : 0) : undefined,
      };
      const result = await updateFeature(input.featureId, updates);
      return { success: true, packs: result };
    }),

  /**
   * Ajouter une fonctionnalité à une offre
   */
  addFeature: adminProcedure
    .input(
      z.object({
        packId: z.string(),
        feature: z.object({
          id: z.string(),
          name: z.string(),
          description: z.string(),
          included: z.boolean(),
        }),
      })
    )
    .mutation(async ({ input }: any) => {
      const feature = {
        ...input.feature,
        offerId: input.packId,
        included: input.feature.included ? 1 : 0,
      };
      const result = await addFeature(input.packId, feature);
      return { success: true, packs: result };
    }),

  /**
   * Supprimer une fonctionnalité d'une offre
   */
  removeFeature: adminProcedure
    .input(
      z.object({
        packId: z.string(),
        featureId: z.string(),
      })
    )
    .mutation(async ({ input }: { input: { packId: string; featureId: string } }) => {
      const result = await removeFeature(input.featureId);
      return { success: true, packs: result };
    }),
});
