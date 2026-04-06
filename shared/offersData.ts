/**
 * Données centralisées des offres Bluevista
 * Source unique de vérité pour tous les prix et fonctionnalités
 * Utilisée par: Home.tsx, Offres.tsx, et le backoffice
 */

export interface Feature {
  id: string;
  name: string;
  description: string;
  included: boolean;
}

export interface Pack {
  id: string;
  name: string;
  price: number;
  description: string;
  targetAudience: string;
  badge?: string;
  features: Feature[];
  recommended?: boolean;
}

export interface OffersData {
  packs: Pack[];
  lastUpdated: string;
}

export const offersData: OffersData = {
  packs: [
    {
      id: 'essential',
      name: 'Pack Essentiel',
      price: 950,
      description: 'L\'indispensable pour un congrès réussi',
      targetAudience: 'Pour les événements de 50 à 300 participants',
      features: [
        {
          id: 'programme-complet',
          name: 'Programme Complet / Design Personnalisé',
          description: 'Affichage dynamique des sessions par jour et par salle + intégration de votre logo et de vos couleurs',
          included: true,
        },
        {
          id: 'fiches-intervenants',
          name: 'Fiches Intervenants',
          description: 'Biographies et photos des orateurs',
          included: true,
        },
        {
          id: 'favoris',
          name: 'Système de Favoris',
          description: 'Permet aux participants de composer leur propre agenda',
          included: true,
        },
        {
          id: 'notifications-push',
          name: 'Notifications Push',
          description: 'Alertes en temps réel pour les changements de programme',
          included: true,
        },
        {
          id: 'plan-salon',
          name: 'Plan du Salon',
          description: 'Carte interactive pour orienter les visiteurs',
          included: true,
        },
        {
          id: 'app-1-year',
          name: 'Application Disponible 1 an',
          description: 'Accès complet à l\'application pendant 12 mois après l\'événement',
          included: true,
        },
      ],
    },
    {
      id: 'premium',
      name: 'Pack Premium',
      price: 2850,
      description: 'L\'expérience complète pour les congrès exigeants',
      targetAudience: 'Pour les congrès de 300 à 1000+ participants',
      badge: 'Recommandé',
      recommended: true,
      features: [
        {
          id: 'programme-complet',
          name: 'Programme Complet / Design Personnalisé',
          description: 'Affichage dynamique des sessions par jour et par salle + intégration de votre logo et de vos couleurs',
          included: true,
        },
        {
          id: 'fiches-intervenants',
          name: 'Fiches Intervenants',
          description: 'Biographies et photos des orateurs',
          included: true,
        },
        {
          id: 'favoris',
          name: 'Système de Favoris',
          description: 'Permet aux participants de composer leur propre agenda',
          included: true,
        },
        {
          id: 'notifications-push',
          name: 'Notifications Push',
          description: 'Alertes en temps réel pour les changements de programme',
          included: true,
        },
        {
          id: 'plan-salon',
          name: 'Plan du Salon',
          description: 'Carte interactive pour orienter les visiteurs',
          included: true,
        },
        {
          id: 'app-1-year',
          name: 'Application Disponible 1 an',
          description: 'Accès complet à l\'application pendant 12 mois après l\'événement',
          included: true,
        },
        {
          id: 'accompagnement-data',
          name: 'Accompagnement Data',
          description: 'Envoyez-nous vos fichiers bruts, nous les intégrons',
          included: true,
        },
        {
          id: 'votes-direct',
          name: 'Votes en Direct',
          description: 'Dynamisez vos sessions avec sondages en temps réel',
          included: true,
        },
        {
          id: 'fiches-exposants',
          name: 'Fiches Exposants Détaillées',
          description: 'Mise en avant de vos partenaires et sponsors',
          included: true,
        },
        {
          id: 'liens-sponsors',
          name: 'Liens Directs pour vos Sponsors',
          description: 'Intégration directe des ressources et sites web des sponsors',
          included: true,
        },
        {
          id: 'statistiques',
          name: 'Statistiques Post-Événement',
          description: 'Rapport détaillé sur l\'engagement post-événement',
          included: true,
        },
      ],
    },
  ],
  lastUpdated: new Date().toISOString(),
};

/**
 * Utilitaires pour accéder aux données
 */

export const getPack = (packId: string): Pack | undefined => {
  return offersData.packs.find((p) => p.id === packId);
};

export const getAllPacks = (): Pack[] => {
  return offersData.packs;
};

export const getPackFeatures = (packId: string): Feature[] => {
  const pack = getPack(packId);
  return pack ? pack.features : [];
};

export const getRecommendedPack = (): Pack | undefined => {
  return offersData.packs.find((p) => p.recommended);
};

/**
 * Fonction pour mettre à jour les données (utilisée par le backoffice)
 * Cette fonction sera appelée via une API tRPC
 */
export const updateOfferPrice = (packId: string, newPrice: number): void => {
  const pack = getPack(packId);
  if (pack) {
    pack.price = newPrice;
    offersData.lastUpdated = new Date().toISOString();
  }
};

export const updateOfferFeature = (packId: string, featureId: string, updates: Partial<Feature>): void => {
  const pack = getPack(packId);
  if (pack) {
    const feature = pack.features.find((f) => f.id === featureId);
    if (feature) {
      Object.assign(feature, updates);
      offersData.lastUpdated = new Date().toISOString();
    }
  }
};

export const addFeatureToPack = (packId: string, feature: Feature): void => {
  const pack = getPack(packId);
  if (pack) {
    pack.features.push(feature);
    offersData.lastUpdated = new Date().toISOString();
  }
};

export const removeFeatureFromPack = (packId: string, featureId: string): void => {
  const pack = getPack(packId);
  if (pack) {
    pack.features = pack.features.filter((f) => f.id !== featureId);
    offersData.lastUpdated = new Date().toISOString();
  }
};
