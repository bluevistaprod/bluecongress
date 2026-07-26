/**
 * Logo Pulse Congress — version vectorielle (SVG inline).
 * Aplats stricts, net à n'importe quelle taille, aucune dépendance image.
 *
 * variant="dark"   -> fond sombre (lettrage blanc)
 * variant="light"  -> fond clair  (lettrage navy)
 * withText={false} -> monogramme seul (favicon, app icon…)
 *
 * Géométrie du monogramme (repère 0 0 100 116) :
 *   fût du P      : x = 34, y = 16 -> 104, trait 14  (occupe x 27-41)
 *   panse du P    : arc r = 24 centré (58,40)        (bord extérieur x = 82)
 *   contre-forme  : cercle utile x 41-75 / y 23-57   -> y loge l'écran
 *   ligne d'ECG   : sous la panse, traverse le fût
 */

const NAVY = '#0A2540';
const TURQ = '#00C4B4';
const TURQ_BRIGHT = '#00E5C8';

export default function PulseLogo({
  variant = 'dark',
  withText = true,
  className = '',
}: {
  variant?: 'dark' | 'light';
  withText?: boolean;
  className?: string;
}) {
  const ink = variant === 'dark' ? '#FFFFFF' : NAVY;
  const accent = variant === 'dark' ? TURQ_BRIGHT : TURQ;
  const faint = variant === 'dark' ? 'rgba(255,255,255,.65)' : 'rgba(10,37,64,.65)';

  return (
    <svg
      viewBox={withText ? '0 0 330 116' : '0 0 100 116'}
      className={className}
      role="img"
      aria-label="Pulse Congress"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ---------- Monogramme ---------- */}
      {/* Lettre P */}
      <path d="M34 16 V 104" stroke={ink} strokeWidth="14" strokeLinecap="round" />
      <path
        d="M34 16 H 58 a 24 24 0 0 1 0 48 H 34"
        stroke={ink}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Écran + audience, dans la contre-forme du P */}
      <rect x="45" y="28" width="26" height="19" rx="3.5" stroke={accent} strokeWidth="2.8" />
      <g fill={ink}>
        <circle cx="52.5" cy="37.5" r="2.5" />
        <path d="M49 45.4a3.5 3.5 0 0 1 7 0z" />
        <circle cx="58" cy="36.2" r="3" />
        <path d="M54 45.4a4 4 0 0 1 8 0z" />
        <circle cx="63.5" cy="37.5" r="2.5" />
        <path d="M60 45.4a3.5 3.5 0 0 1 7 0z" />
      </g>

      {/* Ligne d'ECG — passe devant le fût, sous la panse */}
      <path
        d="M1 82 H 14 l 4.5 -7 5 20 7.5 -46 8 58 5.5 -26 4 9 H 60"
        stroke={accent}
        strokeWidth="5.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ---------- Lettrage ---------- */}
      {withText && (
        <>
          <text
            x="96"
            y="58"
            fill={ink}
            style={{ font: '700 44px "Space Grotesk", Inter, sans-serif', letterSpacing: '0.005em' }}
          >
            PULSE
          </text>
          <text
            x="98"
            y="83"
            fill={accent}
            style={{ font: '500 19px "Space Grotesk", Inter, sans-serif', letterSpacing: '0.335em' }}
          >
            CONGRESS
          </text>

          {/* CONNECT · LEARN · ADVANCE, encadré de deux filets */}
          <path d="M98 98 H 116" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
          <text
            x="122"
            y="101.5"
            fill={faint}
            style={{ font: '500 9px "Space Grotesk", Inter, sans-serif', letterSpacing: '0.2em' }}
          >
            CONNECT · LEARN · ADVANCE
          </text>
          <path d="M307 98 H 325" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
