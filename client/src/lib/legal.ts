/**
 * Identité juridique — source unique du site.
 *
 * ⛔ Ne jamais recopier ces valeurs en dur dans une page : un fait vit à un seul endroit.
 *
 * Sources (toutes vérifiées, aucune valeur déduite) :
 * - Extrait Kbis du 19/04/2026 (Greffe du Tribunal des Activités Économiques de Lyon)
 *   → forme juridique, capital, RCS, adresse du siège, activité, date d'immatriculation
 * - Facture Bluevista F26070086 → SIRET du siège, n° de TVA intracommunautaire, téléphone
 * - Mentions légales publiées sur bluevistaprod.com → directeur de la publication
 */

export const LEGAL = {
  /** L'éditeur du site. */
  societe: {
    denomination: 'Bluevista Production',
    forme: 'Société par actions simplifiée (SAS)',
    capital: '20 000 €',
    rcs: '451 786 388 R.C.S. Lyon',
    siret: '451 786 388 00020',
    tva: 'FR01 451 786 388',
    activite:
      'Conception, production et diffusion de produits audiovisuels et multimédias',
    adresse: '8 rue Jean Élysée Dupuy, 69410 Champagne-au-Mont-d’Or, France',
    telephone: '+33 (0)4 72 34 51 89',
    telephoneLien: 'tel:+33472345189',
    directeurPublication: 'Guillaume Martin',
  },

  /** L'hébergeur, à mentionner obligatoirement (article 6 III de la LCEN). */
  hebergeur: {
    nom: 'Infomaniak Network SA',
    adresse: 'Rue Eugène-Marziano 25, 1227 Les Acacias (Genève), Suisse',
    site: 'https://www.infomaniak.com',
  },

  /**
   * Contact « données personnelles ».
   * ⚠️ Volontairement PAS une adresse email en clair : la page renvoie vers /contact.
   * (Une adresse affichée se fait aspirer par les robots — c'est pour ça que le
   * formulaire de contact existe.)
   */
  contactPath: '/contact',

  /** Date de dernière mise à jour affichée en tête des pages légales. */
  miseAJour: '10 août 2026',
} as const;
