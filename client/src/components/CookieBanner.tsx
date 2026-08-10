import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import {
  ANALYTICS_ACTIF,
  chargerMesureAudience,
  ecrireConsentement,
  lireConsentement,
} from '@/lib/analytics';

/**
 * Bandeau de consentement.
 *
 * Ne s'affiche QUE si un outil de mesure d'audience est réellement configuré
 * (voir client/src/lib/analytics.ts). Tant qu'il n'y en a pas, ce composant ne
 * rend rien : un bandeau qui demande d'accepter des cookies inexistants est au
 * mieux inutile, au pire faux.
 *
 * Règles respectées : refuser est aussi simple qu'accepter (deux boutons de même
 * niveau), rien n'est déposé avant le choix, et le choix est révocable.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ANALYTICS_ACTIF) return;
    const choix = lireConsentement();
    if (choix === 'accepte') chargerMesureAudience();
    else if (choix === null) setVisible(true);
  }, []);

  if (!ANALYTICS_ACTIF || !visible) return null;

  const repondre = (valeur: 'accepte' | 'refuse') => {
    ecrireConsentement(valeur);
    if (valeur === 'accepte') chargerMesureAudience();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement à la mesure d'audience"
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#0A2540]/95 backdrop-blur-md p-5 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <p className="text-sm text-slate-300 leading-relaxed flex-1">
            Nous aimerions mesurer l'audience de ce site pour l'améliorer. Aucun traceur n'est déposé
            sans votre accord, et nous n'utilisons pas vos données à des fins publicitaires.{' '}
            <Link href="/politique-de-confidentialite" className="text-[#00E5C8] hover:underline">
              En savoir plus
            </Link>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={() => repondre('refuse')}
              className="px-5 py-2.5 rounded-xl border border-white/20 text-slate-200 text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={() => repondre('accepte')}
              className="px-5 py-2.5 rounded-xl bg-[#00E5C8] text-[#0A2540] text-sm font-semibold hover:shadow-[0_8px_24px_rgba(0,229,200,0.4)] transition-all"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
