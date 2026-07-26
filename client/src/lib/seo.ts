import { useEffect } from 'react';

/**
 * Métadonnées par page.
 *
 * Le site est une SPA : sans ça, les 7 pages partagent le titre et la description
 * de index.html — Google les voit comme des doublons et n'en indexe correctement
 * qu'une seule. Ce hook met à jour title / description / canonical / Open Graph
 * à chaque changement de page.
 *
 * (Volontairement sans dépendance : react-helmet n'apporterait rien de plus ici.)
 */

const SITE = 'https://pulsecongress.com';
const SUFFIX = 'Pulse Congress';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSeo({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  useEffect(() => {
    const fullTitle = title.includes(SUFFIX) ? title : `${title} — ${SUFFIX}`;
    const url = `${SITE}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', description);

    // URL canonique : évite que /offres et / soient vus comme la même page
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;

    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [title, description, path]);
}

/** Métadonnées de chaque page, au même endroit pour rester cohérentes. */
export const SEO = {
  home: {
    title: 'Application mobile pour congrès médicaux et scientifiques',
    description:
      "Application mobile clé en main pour vos congrès médicaux et scientifiques : programme interactif, fiches intervenants, notifications en temps réel, votes en direct. Prête en quelques jours, conforme RGPD.",
    path: '/',
  },
  offres: {
    title: 'Offres et tarifs',
    description:
      "Deux niveaux d'accompagnement pour votre congrès : Standard (programme, intervenants, notifications) et Premium (abstracts, e-posters, accompagnement renforcé). Tarif adapté à votre événement.",
    path: '/offres',
  },
  casClients: {
    title: 'Cas clients — congrès médicaux et scientifiques',
    description:
      "Nice Shoulder Course (800+ participants, 74 pays) et Congrès ESPOIR Oncologie : comment des organisateurs utilisent Pulse Congress pour simplifier leur événement et engager leurs participants.",
    path: '/cas-clients',
  },
  demo: {
    title: 'Réserver une démonstration (30 min, gratuite)',
    description:
      "Découvrez Pulse Congress en 30 minutes : démonstration personnalisée, adaptée à votre congrès. Gratuite et sans engagement.",
    path: '/demander-une-demonstration',
  },
  faq: {
    title: 'Questions fréquentes des organisateurs de congrès',
    description:
      "Fonctionnalités, délais de déploiement, formats de données acceptés, tarifs, support pendant l'événement : les réponses aux questions des organisateurs de congrès.",
    path: '/faq',
  },
  aPropos: {
    title: 'À propos — 20 ans au service des événements professionnels',
    description:
      "Depuis 2004, Bluevista accompagne les organisateurs de congrès médicaux et scientifiques : audiovisuel événementiel, applications mobiles, contenus digitaux et accompagnement terrain.",
    path: '/a-propos',
  },
  contact: {
    title: 'Contact',
    description:
      "Une question sur votre congrès ? Écrivez-nous : notre équipe vous répond sous 24 h ouvrées. Vous pouvez aussi réserver directement une démonstration.",
    path: '/contact',
  },
} as const;
