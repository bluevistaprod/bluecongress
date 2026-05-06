import { eq, desc, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, offers, features, blogArticles, type Offer, type Feature, type InsertOffer, type InsertFeature, type BlogArticle, type InsertBlogArticle } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

// Offers queries
export async function getAllOffers() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get offers: database not available");
    return [];
  }

  try {
    const allOffers = await db.select().from(offers);
    
    // Get features for each offer
    const offersWithFeatures = await Promise.all(
      allOffers.map(async (offer) => {
        let offerFeatures = await db.select().from(features).where(eq(features.offerId, offer.id));
        
        // If this is the premium pack, also include essential pack features
        if (offer.id === 'premium') {
          const essentialFeatures = await db.select().from(features).where(eq(features.offerId, 'essential'));
          // Combine: essential first, then premium-only features
          offerFeatures = [...essentialFeatures, ...offerFeatures];
        }
        
        return {
          ...offer,
          features: offerFeatures,
          recommended: offer.recommended === 1,
        };
      })
    );
    
    return offersWithFeatures;
  } catch (error) {
    console.error("[Database] Failed to get offers:", error);
    return [];
  }
}

export async function updateOfferPrice(offerId: string, newPrice: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update offer: database not available");
    return null;
  }

  try {
    await db.update(offers).set({ price: newPrice }).where(eq(offers.id, offerId));
    return getAllOffers();
  } catch (error) {
    console.error("[Database] Failed to update offer price:", error);
    throw error;
  }
}

export async function updateFeature(featureId: string, updates: Partial<Feature>) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update feature: database not available");
    return null;
  }

  try {
    await db.update(features).set(updates).where(eq(features.id, featureId));
    return getAllOffers();
  } catch (error) {
    console.error("[Database] Failed to update feature:", error);
    throw error;
  }
}

export async function removeFeature(featureId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot remove feature: database not available");
    return null;
  }

  try {
    await db.delete(features).where(eq(features.id, featureId));
    return getAllOffers();
  } catch (error) {
    console.error("[Database] Failed to remove feature:", error);
    throw error;
  }
}

export async function addFeature(offerId: string, feature: InsertFeature) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot add feature: database not available");
    return null;
  }

  try {
    await db.insert(features).values(feature);
    return getAllOffers();
  } catch (error) {
    console.error("[Database] Failed to add feature:", error);
    throw error;
  }
}


// Blog Articles Helpers
export async function getAllBlogArticles() {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(blogArticles).where(eq(blogArticles.published, 1)).orderBy(desc(blogArticles.publishedAt));
}

export async function getBlogArticleBySlug(slug: string) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(blogArticles).where(eq(blogArticles.slug, slug)).limit(1);
  return result[0] || null;
}

export async function getBlogArticlesByCategory(category: string) {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(blogArticles).where(and(eq(blogArticles.category, category), eq(blogArticles.published, 1))).orderBy(desc(blogArticles.publishedAt));
}

export async function createBlogArticle(article: InsertBlogArticle) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.insert(blogArticles).values(article);
}

export async function updateBlogArticle(id: string, article: Partial<InsertBlogArticle>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(blogArticles).set(article).where(eq(blogArticles.id, id));
}

export async function deleteBlogArticle(id: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.delete(blogArticles).where(eq(blogArticles.id, id));
}

export async function publishBlogArticle(id: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(blogArticles).set({ published: 1, publishedAt: new Date() }).where(eq(blogArticles.id, id));
}

export async function unpublishBlogArticle(id: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.update(blogArticles).set({ published: 0 }).where(eq(blogArticles.id, id));
}
