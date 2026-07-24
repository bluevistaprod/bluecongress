import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

/** Apparition au scroll (fade + rise), réutilisable sur toutes les pages. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Compteur qui s'incrémente jusqu'à `to` quand il entre dans le viewport. */
export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString('fr-FR')}{suffix}</span>;
}

/** Chemin canonique de prise de démo (vrai Calendly) — jamais /contact (formulaire mort). */
export const DEMO_PATH = '/demander-une-demonstration';
