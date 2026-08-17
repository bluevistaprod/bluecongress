import { useEffect, useRef, useState } from 'react';

/**
 * Animation du hero : l'appli se "construit" écran par écran dans un téléphone 3D.
 * Pensée pour tenir dans la colonne droite du hero, à côté du slogan.
 * - Muette (les navigateurs bloquent l'autoplay sonore, et du son sur un hero est intrusif).
 * - Aucune dépendance : CSS + un timer. Réutilise les captures déjà floutées de /public.
 */

type Beat = {
  k: string;
  t: string;
  img?: string;
  votes?: boolean;
  ry: string;
  rx: string;
};

const BEATS: Beat[] = [
  { k: 'Programme', t: 'Le bon programme, en temps réel.', img: '/realisations/nice-shoulder-course/programme.webp', ry: '-15deg', rx: '4deg' },
  { k: 'Intervenants', t: 'Vos experts mis en lumière.', img: '/realisations/nice-shoulder-course/intervenants.webp', ry: '-8deg', rx: '3deg' },
  { k: 'Votes & live', t: 'Votre salle devient actrice.', votes: true, ry: '-14deg', rx: '6deg' },
  { k: 'Agenda perso', t: 'Chacun a SON congrès.', img: '/realisations/nice-shoulder-course/favoris.webp', ry: '-19deg', rx: '3deg' },
  { k: 'Infos & plan', t: 'Zéro question à l\'accueil.', img: '/realisations/espoir-oncologie/infos-pratiques.webp', ry: '-11deg', rx: '5deg' },
];

const BEAT_MS = 2600;

/* Styles scopés (préfixe pcs-) : rien ne fuit sur le reste du site. */
const CSS = `
.pcs-wrap{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}
.pcs-phone{position:relative;flex:none;border-radius:34px;background:#0a1a2e;border:3px solid #22405f;padding:8px;
  width:186px;height:403px;
  transform:perspective(1300px) rotateY(var(--ry,-15deg)) rotateX(var(--rx,4deg));
  transition:transform 1.1s cubic-bezier(.3,.7,.2,1);
  box-shadow:26px 32px 60px rgba(0,0,0,.55), inset 0 0 0 1px rgba(255,255,255,.05), 0 0 70px rgba(0,229,200,.16)}
@media (min-width:768px){.pcs-phone{width:212px;height:459px;border-radius:38px}}
.pcs-bob{animation:pcs-bob 6s ease-in-out infinite}
@keyframes pcs-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.pcs-phone::after{content:"";position:absolute;inset:0;border-radius:34px;pointer-events:none;z-index:8;
  background:linear-gradient(115deg,rgba(255,255,255,.15),transparent 32%,transparent 70%,rgba(255,255,255,.05))}
.pcs-sweep{position:absolute;inset:-40% -120%;z-index:9;pointer-events:none;
  background:linear-gradient(78deg,transparent 42%,rgba(255,255,255,.14) 50%,transparent 58%);
  animation:pcs-sweep 7s ease-in-out infinite}
@keyframes pcs-sweep{0%,62%{transform:translateX(-62%)}100%{transform:translateX(62%)}}
.pcs-notch{position:absolute;top:10px;left:50%;transform:translateX(-50%);width:74px;height:16px;background:#05101c;
  border-radius:0 0 11px 11px;z-index:7}
.pcs-scr{position:relative;width:100%;height:100%;border-radius:27px;overflow:hidden;background:#0c1826}
@media (min-width:768px){.pcs-scr{border-radius:30px}}
/* Arrivée de l'écran : un fondu net avec un léger zoom, et un seul passage de lumière.
   (Pas de révélation par paliers : elle saccadait l'image.) */
.pcs-clip{position:absolute;inset:0;animation:pcs-build .8s cubic-bezier(.22,.75,.25,1) both}
.pcs-clip img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block}
@keyframes pcs-build{from{opacity:0;transform:scale(1.05)}to{opacity:1;transform:none}}
.pcs-edge{position:absolute;left:0;right:0;height:2px;background:#00E5C8;box-shadow:0 0 16px 3px rgba(0,229,200,.7);
  opacity:0;z-index:5;animation:pcs-edge .9s cubic-bezier(.3,.6,.25,1) both}
@keyframes pcs-edge{0%{top:0;opacity:0}12%{opacity:.95}88%{opacity:.7}100%{top:100%;opacity:0}}
.pcs-votes{position:absolute;inset:0;background:#0c1826;padding:20px 15px 16px;display:flex;flex-direction:column}
.pcs-vh{display:flex;align-items:center;gap:6px;font-weight:700;font-size:12px;color:#fff}
.pcs-live{display:inline-flex;align-items:center;gap:4px;font-size:8px;color:#ff5470;border:1px solid rgba(255,84,112,.45);
  border-radius:999px;padding:2px 7px;margin-left:auto;letter-spacing:.06em}
.pcs-live::before{content:"";width:5px;height:5px;border-radius:50%;background:#ff5470;box-shadow:0 0 7px #ff5470;
  animation:pcs-blink 1.1s ease-in-out infinite}
@keyframes pcs-blink{50%{opacity:.3}}
.pcs-q{color:#cfdded;font-size:10.5px;margin:12px 0 15px;line-height:1.4;font-weight:500}
.pcs-opt{margin-bottom:11px}
.pcs-ot{display:flex;justify-content:space-between;font-size:9.5px;color:#fff;margin-bottom:5px;font-weight:500}
.pcs-ot b{color:#00E5C8}
.pcs-bar{height:11px;border-radius:6px;background:rgba(255,255,255,.09);overflow:hidden}
.pcs-fill{height:100%;width:0;border-radius:6px;background:linear-gradient(90deg,#00E5C8,#00C4B4);
  box-shadow:0 0 12px rgba(0,229,200,.4);animation:pcs-grow 1.25s cubic-bezier(.2,.85,.25,1) .35s forwards}
@keyframes pcs-grow{to{width:var(--w)}}
.pcs-count{margin-top:auto;text-align:center;font-size:10px;color:#00E5C8;letter-spacing:.04em}
.pcs-label{margin-top:22px;text-align:center;min-height:52px;max-width:300px}
.pcs-k{display:inline-flex;align-items:center;gap:7px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;
  color:#00E5C8;margin-bottom:6px}
.pcs-k::before{content:"";width:18px;height:2px;background:#00E5C8;box-shadow:0 0 8px #00E5C8}
.pcs-t{font-weight:700;font-size:17px;line-height:1.2;color:#fff;letter-spacing:-.01em}
.pcs-in{animation:pcs-in .55s cubic-bezier(.16,.8,.3,1) both}
@keyframes pcs-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.pcs-dots{display:flex;gap:6px;margin-top:16px}
.pcs-dot{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.22);transition:all .4s ease}
.pcs-dot[data-on="true"]{background:#00E5C8;width:16px;border-radius:3px;box-shadow:0 0 10px rgba(0,229,200,.6)}
@media (prefers-reduced-motion:reduce){
  .pcs-bob,.pcs-sweep,.pcs-clip,.pcs-edge,.pcs-fill,.pcs-in,.pcs-live::before{animation:none!important}
  .pcs-clip{clip-path:none!important}
  .pcs-fill{width:var(--w)!important}
}
`;

export default function HeroAppShowcase() {
  const [i, setI] = useState(0);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % BEATS.length), BEAT_MS);
    return () => window.clearInterval(id);
  }, []);

  const beat = BEATS[i];

  // Compteur de votes : ne tourne que pendant le plan "Votes".
  const raf = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!beat.votes) return;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / 1250);
      setVotes(Math.round((1 - Math.pow(1 - p, 3)) * 428));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [beat.votes, i]);

  return (
    <div className="pcs-wrap">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="pcs-bob">
        <div className="pcs-phone" style={{ ['--ry' as string]: beat.ry, ['--rx' as string]: beat.rx }}>
          <div className="pcs-notch" />
          <div className="pcs-sweep" />
          <div className="pcs-scr">
            {/* key={i} : remonte le noeud à chaque plan pour rejouer l'animation de construction */}
            <div className="pcs-clip" key={i}>
              {beat.votes ? (
                <div className="pcs-votes">
                  <div className="pcs-vh">
                    Vote <span className="pcs-live">EN DIRECT</span>
                  </div>
                  <div className="pcs-q">Quelle stratégie privilégier en 2026 ?</div>
                  {[
                    { l: 'Désescalade', v: 52 },
                    { l: 'Chirurgie', v: 31 },
                    { l: 'Surveillance', v: 17 },
                  ].map((o) => (
                    <div className="pcs-opt" key={o.l}>
                      <div className="pcs-ot"><span>{o.l}</span><b>{o.v}%</b></div>
                      <div className="pcs-bar">
                        <div className="pcs-fill" style={{ ['--w' as string]: `${o.v}%` }} />
                      </div>
                    </div>
                  ))}
                  <div className="pcs-count">◉ {votes} votes en direct</div>
                </div>
              ) : (
                <img
                  src={beat.img}
                  alt={`${beat.k} — écran de l'application Pulse Congress`}
                  width={480}
                  height={1040}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
            <div className="pcs-edge" key={`e${i}`} />
          </div>
        </div>
      </div>

      <div className="pcs-label">
        <div key={`l${i}`} className="pcs-in">
          <div className="pcs-k font-display">{beat.k}</div>
          <div className="pcs-t font-display">{beat.t}</div>
        </div>
      </div>

      <div className="pcs-dots" role="presentation">
        {BEATS.map((b, n) => (
          <span className="pcs-dot" key={b.k} data-on={n === i} />
        ))}
      </div>
    </div>
  );
}
