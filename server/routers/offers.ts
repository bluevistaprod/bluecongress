import { router, protectedProcedure } from '../_core/trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { getAllPacks, updateOfferPrice, updateOfferFeature, addFeatureToPack, removeFeatureFromPack, type Pack, type Feature } from '@shared/offersData';

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
   * Récupérer toutes les offres
   */
  getAll: adminProcedure.query(async () => {
    return getAllPacks();
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
      updateOfferPrice(input.packId, input.newPrice);
      return getAllPacks();
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
      updateOfferFeature(input.packId, input.featureId, input.updates);
      return getAllPacks();
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
      addFeatureToPack(input.packId, input.feature);
      return getAllPacks();
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
      removeFeatureFromPack(input.packId, input.featureId);
      return getAllPacks();
    }),
});
