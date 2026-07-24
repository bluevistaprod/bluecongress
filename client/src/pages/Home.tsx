import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, animate } from 'framer-motion';
import {
  Calendar, Users, MessageSquare, FileText, BarChart3, Award,
  ArrowRight, Sparkles, Zap, Lock, Headphones, Upload, Settings, Rocket,
  Smartphone, Quote, AlertTriangle, TrendingDown, FolderInput, Radio,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGalleryPreview from '@/components/ImageGalleryPreview';
import { niceShoulderCourseGallery, congreEspoirGallery } from '@/data/galleryData';
import { Link } from 'wouter';

/* Chemin canonique de prise de démo (vrai Calendly) — surtout PAS /contact (formulaire mort). */
const DEMO_PATH = '/demander-une-demonstration';

/* ---------- Helpers d'animation ---------- */

function Reveal({
  children, delay = 0, y = 28, className = '',
}: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
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

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* Bouton primaire réutilisable (turquoise à halo) */
function CtaPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-2 bg-[#00E5C8] text-[#0A2540] px-7 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(0,229,200,0.35)] hover:shadow-[0_12px_40px_rgba(0,229,200,0.55)] hover:-translate-y-0.5 transition-all duration-300"
    >
      {children}
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

function CtaGhost({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center border border-white/25 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
    >
      {children}
    </Link>
  );
}

/* ---------- Données ---------- */

const MOCKUPS = [
  '/realisations/nice-shoulder-course/accueil.webp',
  '/realisations/nice-shoulder-course/programme.webp',
  '/realisations/nice-shoulder-course/intervenants.webp',
];

// Chiffres réels (relevés dans les applis NSC + ESPOIR par Giz). Sommes des deux congrès.
const STATS = [
  { n: 945, s: '', label: 'Participants touchés' },
  { n: 118, s: '', label: 'Sessions gérées' },
  { n: 134, s: '', label: 'Intervenants valorisés' },
  { n: 5, s: '', label: 'Applications livrées' },
];

const PROBLEMS = [
  { icon: AlertTriangle, title: 'Changements de dernière minute', desc: "Les modifications de programme, les annulations d'orateurs, les changements de salles... Comment informer vos 500 participants en temps réel sans chaos ?" },
  { icon: TrendingDown, title: 'Faible engagement des participants', desc: "Les participants consultent le programme papier une fois et l'oublient. Comment créer une vraie interaction et mesurer l'engagement ?" },
  { icon: FolderInput, title: 'Gestion complexe des abstracts et e-posters', desc: "Centraliser les abstracts, les e-posters, les CV des orateurs... sans plateforme dédiée, c'est une usine à gaz administrative." },
  { icon: BarChart3, title: "Impossible de mesurer l'impact réel", desc: "Combien de participants ont assisté à chaque session ? Quel est le taux de satisfaction ? Quels sont les orateurs les plus appréciés ?" },
];

const FEATURES = [
  { icon: Calendar, title: 'Agenda Intelligent', desc: 'Planning dynamique avec favoris personnalisés, notifications en temps réel et gestion des changements de dernière minute.' },
  { icon: Users, title: 'Orateurs & Programme Scientifique', desc: 'Fiches complètes des intervenants, CV, photos, affiliations. Tout ce qu\'il faut pour valoriser vos experts.' },
  { icon: MessageSquare, title: 'Votes & Interactions en Live', desc: 'Sondages, votes en direct, questions des participants. Engagez votre audience et collectez du feedback en temps réel.' },
  { icon: FileText, title: 'Abstracts & E-Posters', desc: 'Plateforme centralisée pour les abstracts, e-posters et communications. Valorisez votre contenu scientifique.' },
  { icon: Award, title: 'Networking & Participants', desc: 'Système de favoris et facilitation des rencontres entre experts et visiteurs pour enrichir l\'expérience.' },
  { icon: BarChart3, title: 'Analytics & Rapports', desc: 'Statistiques détaillées post-événement pour mesurer l\'impact et optimiser les futures éditions.' },
];

const STEPS = [
  { icon: Upload, title: 'Vous nous transmettez votre programme et vos contenus', desc: 'Envoyez-nous votre programme, les informations sur les orateurs, les abstracts et tout contenu spécifique. On s\'occupe du reste.' },
  { icon: Settings, title: 'Nous configurons votre application', desc: 'Notre équipe personnalise l\'application avec votre branding, vos couleurs et votre contenu.' },
  { icon: Rocket, title: 'Nous publions votre application', desc: 'L\'application est publiée sur l\'App Store et Google Play, prête à être téléchargée.' },
  { icon: Smartphone, title: 'Vos participants la téléchargent', desc: 'Les participants reçoivent un lien ou QR code pour télécharger l\'application et accéder à tous les contenus.' },
  { icon: Radio, title: 'Vous pilotez votre événement sereinement', desc: 'Gérez les mises à jour en temps réel, suivez l\'engagement et accédez aux statistiques en direct.' },
];

// Vrais témoignages clients (source : temoignages-2026-06-22.csv). [à confirmer : accord de publication du nom]
const CASES = [
  {
    key: 'nsc',
    title: 'Nice Shoulder Course',
    tagline: "Un des congrès majeurs de la chirurgie de l'épaule en Europe — 800+ participants venus de 74 pays.",
    stats: [{ n: '800+', l: 'Participants' }, { n: '89', l: 'Intervenants' }, { n: '93', l: 'Sessions' }],
    gallery: niceShoulderCourseGallery,
    quote: 'Application fonctionnelle, avec des mises à jour rapides. Fluidité au rendez-vous.',
    author: 'Martin Rolland',
    role: 'Dirigeant, Tamar\'ana Production',
    rating: 5,
    results: ['Adoption élevée par les participants', 'Réduction du support papier', 'Visibilité renforcée pour les sponsors'],
  },
  {
    key: 'espoir',
    title: 'Congrès ESPOIR Oncologie',
    tagline: '« Ensemble Sein et Prostate pour une Oncologie Innovante et Responsable » — un congrès dédié aux cancers hormonodépendants.',
    stats: [{ n: '145', l: 'Participants' }, { n: '45', l: 'Intervenants' }, { n: '25', l: 'Sessions' }],
    gallery: congreEspoirGallery,
    quote: "Je ne mets jamais 10 car on peut toujours s'améliorer, mais l'appli est aujourd'hui un outil quasi systématique en congrès. Celle-ci est très facile d'utilisation, au design parfaitement adapté à la dimension de l'événement : conviviale, bienveillante et simple.",
    author: 'Pr Pierre Cornillon',
    role: 'Oncologie, CHU de Saint-Étienne',
    rating: 5,
    results: ['Engagement accru des participants', 'Feedback en temps réel capturé', 'Taux de satisfaction élevé'],
  },
];

const WHY = [
  { icon: Award, title: 'Conçu pour les congrès médicaux et scientifiques', desc: 'Une solution pensée pour les contraintes spécifiques des congrès scientifiques, médicaux et associatifs.' },
  { icon: Zap, title: 'Déploiement rapide', desc: 'Votre application peut être prête en quelques jours après réception des contenus.' },
  { icon: Lock, title: 'Aucun développement spécifique', desc: 'Nous adaptons une plateforme éprouvée. Pas de projet informatique complexe.' },
  { icon: Headphones, title: 'Accompagnement humain', desc: 'Une équipe vous accompagne avant, pendant et après votre événement.' },
];

/* ---------- Page ---------- */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const mockupsY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="min-h-screen flex flex-col bg-[#071A2F] text-white">
      <Header />

      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section ref={heroRef} className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-10%] right-[-5%] w-[38rem] h-[38rem] rounded-full bg-[#00C4B4]/20 blur-[120px]" />
          <div className="absolute -z-10 bottom-[-20%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-[#003087]/50 blur-[120px]" />
          <div className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '54px 54px' }} />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.img
                  src="/brand/pulse-logo-dark.png"
                  alt="Pulse Congress"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                  className="h-20 md:h-28 w-auto mb-8"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
                  className="inline-flex items-center gap-2 bg-white/5 border border-[#00C4B4]/40 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
                >
                  <Sparkles size={15} className="text-[#00E5C8]" />
                  <span className="text-[#8feee2] text-sm font-medium">Déjà utilisée sur plusieurs congrès médicaux et scientifiques</span>
                </motion.div>

                {/* Accroche conservée telle quelle (choix Giz) */}
                <motion.h1
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] mb-6"
                >
                  La solution digitale{' '}
                  <span className="bg-gradient-to-r from-[#00E5C8] to-[#00C4B4] bg-clip-text text-transparent">clé en main</span>{' '}
                  pour les congrès médicaux et scientifiques
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl"
                >
                  Simplifiez l'organisation de votre congrès, améliorez l'expérience des participants et centralisez toutes les informations de votre événement dans une plateforme moderne et intuitive.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <CtaPrimary href={DEMO_PATH}>Réserver une démonstration</CtaPrimary>
                  <CtaGhost href="/cas-clients">Voir les cas clients</CtaGhost>
                </motion.div>
              </div>

              {/* Mockups flottants + parallax */}
              <motion.div style={{ y: mockupsY }} className="relative flex justify-center items-end h-[460px] md:h-[520px]">
                {MOCKUPS.map((src, i) => {
                  const positions = [
                    'z-20 translate-y-0',
                    'z-10 -translate-x-[58%] translate-y-8 scale-90 hidden sm:block',
                    'z-10 translate-x-[58%] translate-y-8 scale-90 hidden sm:block',
                  ];
                  return (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 60, rotate: i === 0 ? 0 : i === 1 ? -6 : 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                      className={`absolute ${positions[i]}`}
                      style={{ animation: `v2-float ${6 + i}s ease-in-out ${i * 0.6}s infinite` }}
                    >
                      <img src={src} alt="" className="w-[220px] md:w-[250px] rounded-[2rem] border-[6px] border-slate-800 shadow-2xl shadow-black/50" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== BANDE STATS ===== */}
        <section className="border-y border-white/10 bg-white/[0.03] py-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.1}>
                  <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#00E5C8] to-[#00C4B4] bg-clip-text text-transparent">
                    <Counter to={stat.n} suffix={stat.s} />
                  </div>
                  <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROBLÈMES ===== */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
                Vous organisez un congrès médical ?<br className="hidden md:block" /> Vous connaissez ces frustrations…
              </h2>
              <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
                Des défis complexes que nous avons résolus pour d'autres organisateurs comme vous.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROBLEMS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={(i % 2) * 0.1}>
                    <div className="h-full rounded-2xl p-8 bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-[#00C4B4]/10 border border-[#00C4B4]/20 flex items-center justify-center">
                        <Icon className="text-[#00E5C8]" size={22} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== FONCTIONNALITÉS ===== */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-white/[0.02]">
          <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[#00C4B4]/5 blur-[120px]" />
          <div className="container">
            <Reveal>
              <p className="text-center text-[#00C4B4] font-semibold mb-3 tracking-wide uppercase text-sm">Une plateforme complète</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">Tout ce dont votre congrès a besoin</h2>
              <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
                Pulse Congress regroupe l'ensemble des outils nécessaires au bon déroulement d'un congrès scientifique ou médical.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} delay={(i % 3) * 0.1}>
                    <motion.div
                      whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="group h-full rounded-2xl p-8 bg-white/[0.04] border border-white/10 hover:border-[#00C4B4]/50 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06]"
                    >
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#00C4B4]/10 border border-[#00C4B4]/20 group-hover:bg-[#00C4B4]/20 transition-colors">
                        <Icon className="text-[#00E5C8]" size={26} />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== ON S'OCCUPE DE TOUT (process) ===== */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Reveal>
              <p className="text-center text-[#00C4B4] font-semibold mb-3 tracking-wide uppercase text-sm">On s'occupe de tout</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">De votre programme à une application prête à l'emploi</h2>
              <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
                Nous adaptons Pulse Congress à votre événement sans projet informatique complexe ni développement spécifique.
              </p>
            </Reveal>
            <div className="max-w-3xl mx-auto relative">
              {/* ligne verticale */}
              <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00C4B4]/60 to-transparent hidden sm:block" />
              <div className="space-y-6">
                {STEPS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={s.title} delay={i * 0.08}>
                      <div className="flex gap-6 items-start">
                        <div className="relative shrink-0 w-14 h-14 rounded-xl bg-[#0A2540] border border-[#00C4B4]/30 flex items-center justify-center">
                          <Icon className="text-[#00E5C8]" size={24} />
                        </div>
                        <div className="pt-1.5">
                          <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                          <p className="text-slate-400 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===== RÉALISATIONS ===== */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container">
            <Reveal>
              <p className="text-center text-[#00C4B4] font-semibold mb-3 tracking-wide uppercase text-sm">Ils nous font confiance</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">Nos réalisations</h2>
            </Reveal>
            <div className="space-y-10">
              {CASES.map((c) => (
                <Reveal key={c.key}>
                  <div className="rounded-3xl p-8 md:p-10 bg-white/[0.04] border border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">{c.title}</h3>
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {c.stats.map((st) => (
                            <div key={st.l} className="rounded-xl p-4 text-center bg-[#00C4B4]/10 border border-[#00C4B4]/20">
                              <p className="font-display text-2xl md:text-3xl font-bold text-[#00E5C8]">{st.n}</p>
                              <p className="text-xs text-slate-400 mt-1">{st.l}</p>
                            </div>
                          ))}
                        </div>
                        <p className="text-slate-300 mb-6">{c.tagline}</p>
                        <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10">
                          <Quote className="text-[#00C4B4] mb-3" size={22} />
                          <p className="text-slate-200 italic leading-relaxed mb-4">« {c.quote} »</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-white">{c.author}</p>
                              <p className="text-sm text-slate-400">{c.role}</p>
                            </div>
                            <div className="text-[#00E5C8] tracking-widest" aria-label={`${c.rating} sur 5`}>
                              {'★'.repeat(c.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <ImageGalleryPreview images={c.gallery} maxImages={3} />
                      </div>
                    </div>
                    <div className="mt-8 rounded-2xl p-6 bg-gradient-to-r from-[#0A2540] to-[#003087] border border-white/10">
                      <h4 className="font-semibold mb-4 text-[#00E5C8]">✓ Résultats obtenus</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {c.results.map((r) => (
                          <div key={r} className="flex items-start gap-3">
                            <span className="text-[#00E5C8] font-bold">✓</span>
                            <p className="text-slate-200 text-sm">{r}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== POURQUOI + OFFRES teaser ===== */}
        <section className="py-24 md:py-32">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">Pourquoi Pulse Congress</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {WHY.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal key={w.title} delay={(i % 4) * 0.1}>
                    <div className="h-full text-center rounded-2xl p-8 bg-white/[0.04] border border-white/10">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#00C4B4]/10 border border-[#00C4B4]/20">
                        <Icon className="text-[#00E5C8]" size={30} />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-3">{w.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal>
              <div className="rounded-3xl p-10 text-center bg-white/[0.04] border border-white/10 max-w-3xl mx-auto">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Une solution adaptée à chaque congrès</h3>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Chaque événement possède ses propres contraintes, son programme scientifique et ses objectifs. Pulse Congress s'adapte à votre contexte.
                </p>
                <CtaGhost href="/offres">Découvrir les offres</CtaGhost>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-30%] left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container relative z-10 text-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                Voyons ensemble comment simplifier votre prochain congrès
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Réservez une démonstration personnalisée de 30 minutes. Sans engagement — un membre de notre équipe vous répond sous 24 h.
              </p>
              <div className="flex justify-center">
                <CtaPrimary href={DEMO_PATH}>Réserver une démonstration</CtaPrimary>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
