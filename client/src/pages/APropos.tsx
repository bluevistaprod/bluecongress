import { CheckCircle2, Zap, Award, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal, Counter, DEMO_PATH } from '@/components/Reveal';

const METRICS = [
  { n: 20, s: '+', label: "années d'expérience" },
  { n: 100, s: '+', label: 'événements accompagnés' },
  { n: 10000, s: '+', label: 'participants' },
];

const HISTORY = [
  { year: '2004', title: 'Création de Bluevista', desc: "Fondation de l'entreprise avec une vision : apporter l'excellence audiovisuelle à l'événementiel." },
  { year: '2010', title: 'Développement des activités événementielles', desc: 'Expansion au-delà de la production audiovisuelle avec intégration de solutions technologiques.' },
  { year: '2020', title: 'Lancement de Pulse Congress', desc: 'Développement de Pulse Congress, notre solution propriétaire pour applications mobiles de congrès.' },
  { year: "Aujourd'hui", title: 'Audiovisuel + solutions digitales pour congrès', desc: 'Acteur reconnu du secteur événementiel, avec une expertise unique combinant audiovisuel et technologie mobile.' },
];

const EXPERTISE = [
  { icon: Briefcase, title: 'Audiovisuel événementiel', desc: 'Production, montage, captation et diffusion audiovisuelle pour vos événements.' },
  { icon: Zap, title: 'Applications mobiles pour congrès', desc: 'Développement et déploiement d\'applications mobiles pour congrès médicaux et scientifiques.' },
  { icon: Award, title: 'Contenus digitaux', desc: 'Création de contenus interactifs, infographies et ressources digitales pour vos événements.' },
  { icon: Users, title: 'Support et accompagnement terrain', desc: 'Équipe dédiée avant, pendant et après votre événement pour assurer son succès.' },
];

const WHY = [
  { title: 'Déploiement rapide', desc: 'Votre application prête en quelques jours' },
  { title: 'Accompagnement humain', desc: 'Une équipe dédiée à votre succès' },
  { title: 'Expertise du secteur événementiel', desc: '20 ans de savoir-faire reconnu' },
  { title: 'Solutions éprouvées sur le terrain', desc: '100+ événements accompagnés' },
  { title: 'Conforme RGPD', desc: 'Données sécurisées et conformes' },
  { title: 'Support réactif', desc: 'Disponible avant, pendant et après' },
];

export default function APropos() {
  return (
    <div className="min-h-screen flex flex-col bg-[#071A2F] text-white">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-20%] left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container">
            <Reveal>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-6 leading-[1.05]">
                20 ans d'expérience au service des événements professionnels
              </h1>
              <p className="text-center text-slate-300 text-lg max-w-3xl mx-auto">
                Depuis 2004, Bluevista accompagne les organisateurs de congrès médicaux et scientifiques.
                Forts de cette expertise, nous avons créé Pulse Congress, une solution digitale clé en main
                pour transformer vos événements.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MÉTRIQUES */}
        <section className="py-12 border-y border-white/10 bg-white/[0.03]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {METRICS.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.1}>
                  <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#00E5C8] to-[#00C4B4] bg-clip-text text-transparent">
                    <Counter to={m.n} suffix={m.s} />
                  </div>
                  <p className="text-slate-400 text-sm mt-2">{m.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HISTOIRE */}
        <section className="py-20 md:py-28">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-14 text-center">Notre histoire</h2>
            </Reveal>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00C4B4]/60 to-transparent hidden sm:block" />
              <div className="space-y-6">
                {HISTORY.map((h, i) => (
                  <Reveal key={h.year} delay={i * 0.08}>
                    <div className="flex gap-6 items-start">
                      <div className="shrink-0 min-w-14 h-14 px-2 rounded-xl bg-[#0A2540] border border-[#00C4B4]/30 flex items-center justify-center text-[#00E5C8] font-display font-bold text-sm">
                        {h.year}
                      </div>
                      <div className="pt-1.5">
                        <h3 className="font-display text-lg font-semibold mb-1">{h.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-20 md:py-28 bg-white/[0.02]">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">Notre expertise</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {EXPERTISE.map((e, i) => {
                const Icon = e.icon;
                return (
                  <Reveal key={e.title} delay={(i % 2) * 0.1}>
                    <div className="h-full rounded-2xl p-8 bg-white/[0.04] border border-white/10 hover:border-[#00C4B4]/40 transition-colors">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#00C4B4]/10 border border-[#00C4B4]/20">
                        <Icon className="text-[#00E5C8]" size={28} />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3">{e.title}</h3>
                      <p className="text-slate-400">{e.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* POURQUOI */}
        <section className="py-20 md:py-28">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
                Pourquoi les organisateurs nous choisissent
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={(i % 2) * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl p-5 bg-white/[0.03] border border-white/10">
                    <CheckCircle2 size={24} className="text-[#00E5C8] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-100">{w.title}</p>
                      <p className="text-slate-400 text-sm">{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-30%] left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container text-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Prêt à transformer votre congrès ?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Réservez une démonstration et découvrez comment Pulse Congress peut vous aider sur votre prochain événement.
              </p>
              <div className="flex justify-center">
                <Link href={DEMO_PATH} className="group inline-flex items-center gap-2 bg-[#00E5C8] text-[#0A2540] px-7 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(0,229,200,0.35)] hover:shadow-[0_12px_40px_rgba(0,229,200,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                  Réserver une démonstration
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
