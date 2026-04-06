import { getDb } from './db';
import { offers, features } from '../drizzle/schema';

const defaultOffers = [
  {
    id: 'essential',
    name: 'Pack Essentiel',
    price: 950,
    description: "L'indispensable pour un congrès réussi",
    targetAudience: 'Pour les événements de 50 à 300 participants',
    badge: null,
    recommended: 0,
  },
  {
    id: 'premium',
    name: 'Pack Premium',
    price: 2850,
    description: "L'expérience complète pour les congrès exigeants",
    targetAudience: 'Pour les congrès de 300 à 1000+ participants',
    badge: 'Recommandé',
    recommended: 1,
  },
];

const defaultFeatures = [
  // Shared features (available in both packs)
  { id: 'programme', offerId: 'essential', name: 'Programme Complet / Design Personnalisé', description: 'Affichage dynamique des sessions par jour et par salle + intégration de votre logo et de vos couleurs', included: 1 },
  { id: 'fiches', offerId: 'essential', name: 'Fiches Intervenants', description: 'Biographies et photos des orateurs', included: 1 },
  { id: 'favoris', offerId: 'essential', name: 'Système de Favoris', description: 'Permet aux participants de composer leur propre agenda', included: 1 },
  { id: 'notifications', offerId: 'essential', name: 'Notifications Push', description: 'Alertes en temps réel pour les changements de programme', included: 1 },
  { id: 'plan', offerId: 'essential', name: 'Plan du Salon', description: 'Carte interactive pour orienter les visiteurs', included: 1 },
  { id: 'app-1year', offerId: 'essential', name: 'Application Disponible 1 an', description: "Accès complet à l'application pendant 12 mois après l'événement", included: 1 },
  
  // Premium-only features
  { id: 'accompagnement', offerId: 'premium', name: 'Accompagnement Data', description: 'Envoyez-nous vos fichiers bruts, nous les intégrons', included: 1 },
  { id: 'votes', offerId: 'premium', name: 'Votes en Direct', description: 'Dynamisez vos sessions avec sondages en temps réel', included: 1 },
  { id: 'fiches-exposants', offerId: 'premium', name: 'Fiches Exposants Détaillées', description: 'Mise en avant de vos partenaires et sponsors', included: 1 },
  { id: 'liens-sponsors', offerId: 'premium', name: 'Liens Directs pour vos Sponsors', description: 'Intégration directe des ressources et sites web des sponsors', included: 1 },
  { id: 'stats', offerId: 'premium', name: 'Statistiques Post-Événement', description: 'Rapport détaillé sur l\'engagement post-événement', included: 1 },
];

export async function initializeOffers() {
  try {
    const db = await getDb();
    if (!db) {
      console.warn('[Init] Database not available');
      return;
    }

    console.log('[Init] Clearing existing offers and features...');
    // Clear existing data
    await db.delete(features);
    await db.delete(offers);
    console.log('[Init] Cleared old data');


    console.log('[Init] Inserting default offers...');
    await db.insert(offers).values(defaultOffers);
    
    console.log('[Init] Inserting default features...');
    await db.insert(features).values(defaultFeatures);
    
    console.log('[Init] Initialization complete!');
  } catch (error) {
    console.error('[Init] Error initializing offers:', error);
  }
}
