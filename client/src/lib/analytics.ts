/**
 * Mesure d'audience — dormante tant qu'aucun identifiant n'est configuré.
 *
 * ⭐ Le principe : le bandeau cookies et le script de mesure s'activent TOUT SEULS
 * le jour où `VITE_GA_ID` est renseigné dans le `.env` du site, et pas avant.
 * Aujourd'hui aucun identifiant n'est posé → aucun traceur, aucun bandeau, et la
 * politique de confidentialité l'affirme (c'est vrai, et ça doit le rester).
 *
 * Pour brancher Google Analytics 4 : renseigner `ID_MESURE` ci-dessous, pousser,
 * déclencher le build. Le bandeau de consentement apparaît, le script n'est chargé
 * qu'après un « Accepter », et la section « Cookies » de la politique de
 * confidentialité bascule d'elle-même.
 *
 * 💡 **L'identifiant de mesure n'est PAS un secret** — il est lisible dans le source de
 * toute page qui l'utilise. Il vit donc dans le dépôt, et pas dans le `.env` du serveur :
 * un déploiement ne demande alors ni console SSH ni navigateur, juste `git push` + build.
 * (`VITE_GA_ID` reste accepté pour neutraliser la mesure en local si besoin.)
 *
 * ⛔ Ne jamais charger le script en dur dans index.html : il déposerait un traceur
 * AVANT le consentement, ce qui est précisément ce que la CNIL sanctionne.
 */

/** Identifiant de mesure GA4 du site (format `G-XXXXXXXXXX`). Vide = mesure désactivée. */
const ID_MESURE = '';

export const GA_ID: string = (import.meta.env.VITE_GA_ID as string | undefined) ?? ID_MESURE;

/** Vrai seulement si un identifiant de mesure est réellement configuré. */
export const ANALYTICS_ACTIF = GA_ID.trim().length > 0;

const CLE_CONSENTEMENT = 'pc-consentement-mesure';

export type Consentement = 'accepte' | 'refuse' | null;

export function lireConsentement(): Consentement {
  try {
    const v = localStorage.getItem(CLE_CONSENTEMENT);
    return v === 'accepte' || v === 'refuse' ? v : null;
  } catch {
    // Navigation privée ou stockage bloqué : on se comporte comme un premier passage.
    return null;
  }
}

export function ecrireConsentement(valeur: Exclude<Consentement, null>) {
  try {
    localStorage.setItem(CLE_CONSENTEMENT, valeur);
  } catch {
    /* rien à faire : le choix vaudra pour cette visite seulement */
  }
}

let charge = false;

/** Charge le script de mesure. À n'appeler QU'APRÈS un consentement explicite. */
export function chargerMesureAudience() {
  if (!ANALYTICS_ACTIF || charge || typeof document === 'undefined') return;
  charge = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(s);

  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag('js', new Date());
  // Pas de cookie publicitaire, et IP anonymisée : le strict nécessaire à la mesure.
  w.gtag('config', GA_ID, { anonymize_ip: true, allow_google_signals: false });
}

/**
 * Signale une conversion à GA4.
 *
 * Ne fait rien si la mesure est désactivée ou si le visiteur n'a pas consenti —
 * c'est volontaire : une conversion n'est pas une raison de contourner le refus.
 *
 * Les deux événements du site, à marquer « événements clés » dans GA4 :
 * - `generate_lead`  → formulaire de contact envoyé
 * - `schedule_demo`  → créneau de démonstration réservé dans Calendly
 */
export function evenement(nom: string, parametres: Record<string, unknown> = {}) {
  if (!ANALYTICS_ACTIF || !charge) return;
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.('event', nom, parametres);
}
