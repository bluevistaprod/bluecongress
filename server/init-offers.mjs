import { drizzle } from 'drizzle-orm/mysql2';
import { offers, features } from '../drizzle/schema.js';

const db = drizzle(process.env.DATABASE_URL);

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
  // Essential pack features
  { id: 'essential-programme', offerId: 'essential', name: 'Programme Complet / Design Personnalisé', description: 'Affichage dynamique des sessions par jour et par salle + intégration de votre logo et de vos couleurs', included: 1 },
  { id: 'essential-fiches', offerId: 'essential', name: 'Fiches Intervenants', description: 'Biographies et photos des orateurs', included: 1 },
  { id: 'essential-favoris', offerId: 'essential', name: 'Système de Favoris', description: 'Permet aux participants de composer leur propre agenda', included: 1 },
  { id: 'essential-notifications', offerId: 'essential', name: 'Notifications Push', description: 'Alertes en temps réel pour les changements de programme', included: 1 },
  { id: 'essential-plan', offerId: 'essential', name: 'Plan du Salon', description: 'Carte interactive pour orienter les visiteurs', included: 1 },
  { id: 'essential-app-1year', offerId: 'essential', name: 'Application Disponible 1 an', description: 'Accès complet à l\'application pendant 12 mois après l\'événement', included: 1 },
  
  // Premium pack features
  { id: 'premium-programme', offerId: 'premium', name: 'Programme Complet / Design Personnalisé', description: 'Affichage dynamique des sessions par jour et par salle + intégration de votre logo et de vos couleurs', included: 1 },
  { id: 'premium-fiches', offerId: 'premium', name: 'Fiches Intervenants', description: 'Biographies et photos des orateurs', included: 1 },
  { id: 'premium-favoris', offerId: 'premium', name: 'Système de Favoris', description: 'Permet aux participants de composer leur propre agenda', included: 1 },
  { id: 'premium-notifications', offerId: 'premium', name: 'Notifications Push', description: 'Alertes en temps réel pour les changements de programme', included: 1 },
  { id: 'premium-plan', offerId: 'premium', name: 'Plan du Salon', description: 'Carte interactive pour orienter les visiteurs', included: 1 },
  { id: 'premium-app-1year', offerId: 'premium', name: 'Application Disponible 1 an', description: 'Accès complet à l\'application pendant 12 mois après l\'événement', included: 1 },
  { id: 'premium-accompagnement', offerId: 'premium', name: 'Accompagnement Data', description: 'Envoyez-nous vos fichiers bruts, nous les intégrons', included: 1 },
  { id: 'premium-votes', offerId: 'premium', name: 'Votes en Direct', description: 'Dynamisez vos sessions avec sondages en temps réel', included: 1 },
  { id: 'premium-fiches-exposants', offerId: 'premium', name: 'Fiches Exposants Détaillées', description: 'Mise en avant de vos partenaires et sponsors', included: 1 },
  { id: 'premium-liens-sponsors', offerId: 'premium', name: 'Liens Directs pour vos Sponsors', description: 'Intégration directe des ressources et sites web des sponsors', included: 1 },
  { id: 'premium-stats', offerId: 'premium', name: 'Statistiques Post-Événement', description: 'Rapport détaillé sur l\'engagement post-événement', included: 1 },
];

async function initOffers() {
  try {
    console.log('Initializing offers...');
    
    // Check if offers already exist
    const existingOffers = await db.select().from(offers);
    if (existingOffers.length > 0) {
      console.log('Offers already exist, skipping initialization');
      return;
    }
    
    // Insert offers
    await db.insert(offers).values(defaultOffers);
    console.log('Offers inserted');
    
    // Insert features
    await db.insert(features).values(defaultFeatures);
    console.log('Features inserted');
    
    console.log('Initialization complete!');
  } catch (error) {
    console.error('Error initializing offers:', error);
    process.exit(1);
  }
}

initOffers();
