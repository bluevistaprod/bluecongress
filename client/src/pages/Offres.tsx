import { CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal, DEMO_PATH } from '@/components/Reveal';

const STANDARD = [
  'Application iOS et Android',
  'Programme interactif permettant aux participants de retrouver facilement leurs sessions',
  'Intervenants',
  'Sponsors et partenaires',
  'Notifications push pour informer instantanément les participants des changements',
  "Statistiques d'utilisation pour mesurer l'engagement",
  'Support standard',
];

const PREMIUM = [
  'Toutes les fonctionnalités Standard',
  'Gestion des abstracts',
  'Gestion des e-posters',
  'Contenus scientifiques avancés',
  'Accompagnement renforcé',
  'Paramétrages spécifiques',
  'Reporting avancé',
];

const OPTIONS = [
  { title: 'Networking participants', description: 'Faciliter les rencontres entre experts et visiteurs' },
  { title: 'Galerie photo événement', description: 'Partager et archiver les photos de votre congrès' },
  { title: 'Traductions multilingues', description: 'Supporter plusieurs langues pour une audience internationale' },
  { title: 'Assistance sur site', description: 'Équipe technique présente pendant votre événement' },
  { title: 'Notifications avancées', description: 'Campagnes de notifications personnalisées et ciblées' },
  { title: 'Personnalisations spécifiques', description: 'Adaptations sur mesure selon vos besoins uniques' },
];

const INCLUDED = [
  'Déploiement rapide',
  'Application native iOS et Android',
  'Conforme RGPD',
  'Accompagnement humain',
  "Support avant, pendant et après l'événement",
  'Hébergement sécurisé',
  "Statistiques d'utilisation",
];

const PRICING_FACTORS = [
  'Du nombre de participants',
  'Du volume de contenu',
  'Des fonctionnalités souhaitées',
  "Du niveau d'accompagnement",
];

export default function Offres() {
  return (
    <div className="min-h-screen flex flex-col bg-[#071A2F] text-white">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-20%] left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
                  Une solution adaptée à chaque congrès
                </h1>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                  Chaque événement possède ses propres contraintes, son programme scientifique et ses objectifs.
                  Pulse Congress s'adapte à votre organisation pour offrir une expérience fluide aux participants
                  et aux organisateurs.
                </p>
                <div className="flex justify-center">
                  <Link href={DEMO_PATH} className="group inline-flex items-center gap-2 bg-[#00E5C8] text-[#0A2540] px-7 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(0,229,200,0.35)] hover:shadow-[0_12px_40px_rgba(0,229,200,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                    Demander une démonstration
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* DEUX OFFRES */}
        <section className="py-20 md:py-28">
          <div className="container">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Deux niveaux d'accompagnement</h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Choisissez l'offre qui correspond à vos besoins et à la complexité de votre événement.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* STANDARD */}
              <Reveal>
                <div className="h-full rounded-3xl p-10 bg-white/[0.04] border border-white/10 hover:border-[#00C4B4]/40 transition-colors">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Pulse Congress Standard</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Pour les congrès et journées scientifiques souhaitant digitaliser leur événement avec une
                    application professionnelle simple à déployer.
                  </p>
                  <div className="rounded-2xl p-6 mb-8 bg-white/[0.03] border border-white/10">
                    <h4 className="font-semibold mb-4 text-slate-200">Inclus :</h4>
                    <ul className="space-y-3">
                      {STANDARD.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#00E5C8] shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={DEMO_PATH} className="block text-center border border-[#00C4B4]/60 text-[#00E5C8] px-6 py-3 rounded-xl font-semibold hover:bg-[#00C4B4]/10 transition-colors">
                    Réserver une démonstration
                  </Link>
                </div>
              </Reveal>

              {/* PREMIUM */}
              <Reveal delay={0.1}>
                <div className="relative h-full rounded-3xl p-10 bg-gradient-to-br from-[#0A2540] to-[#062038] border border-[#00C4B4]/40 shadow-[0_0_60px_rgba(0,196,180,0.15)]">
                  <div className="absolute -top-3 right-6 bg-[#00E5C8] text-[#0A2540] px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    Le plus choisi
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Pulse Congress Premium</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    Pour les congrès nécessitant des fonctionnalités scientifiques avancées et un accompagnement renforcé.
                  </p>
                  <div className="rounded-2xl p-6 mb-8 bg-white/[0.06] border border-white/10 backdrop-blur">
                    <h4 className="font-semibold mb-4">Inclus :</h4>
                    <ul className="space-y-3">
                      {PREMIUM.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#00E5C8] shrink-0 mt-0.5" />
                          <span className="text-slate-200 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={DEMO_PATH} className="block text-center bg-[#00E5C8] text-[#0A2540] px-6 py-3 rounded-xl font-semibold hover:shadow-[0_8px_30px_rgba(0,229,200,0.45)] hover:-translate-y-0.5 transition-all duration-300">
                    Réserver une démonstration
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* OPTIONS COMPLÉMENTAIRES */}
        <section className="py-20 md:py-28 bg-white/[0.02]">
          <div className="container">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Options complémentaires</h2>
                <p className="text-slate-400 text-lg">Les options sont activées selon les besoins de votre événement.</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {OPTIONS.map((o, i) => (
                <Reveal key={o.title} delay={(i % 3) * 0.1}>
                  <div className="h-full rounded-2xl p-6 bg-white/[0.04] border border-white/10 hover:border-[#00C4B4]/40 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <Zap size={22} className="text-[#00E5C8] shrink-0" />
                      <h3 className="font-display text-lg font-semibold">{o.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm">{o.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUS DANS TOUTES LES OFFRES */}
        <section className="py-20 md:py-28">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
                Ce qui est inclus dans toutes les offres
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {INCLUDED.map((item, i) => (
                <Reveal key={item} delay={(i % 2) * 0.08}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <CheckCircle2 size={22} className="text-[#00E5C8] shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TARIF CONSULTATIF */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-30%] left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Combien coûte Pulse Congress ?</h2>
                <p className="text-xl text-slate-200 mb-2">Chaque congrès est unique.</p>
                <p className="text-slate-400 mb-10">Le tarif dépend notamment :</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
                  {PRICING_FACTORS.map((f) => (
                    <div key={f} className="rounded-xl p-5 bg-white/[0.05] border border-white/10 backdrop-blur flex items-center gap-3">
                      <span className="text-[#00E5C8]">•</span>
                      <p className="text-slate-200">{f}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-300 mb-10">Nous vous présentons une proposition adaptée lors de la démonstration.</p>
                <div className="flex justify-center">
                  <Link href={DEMO_PATH} className="group inline-flex items-center gap-2 bg-[#00E5C8] text-[#0A2540] px-7 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(0,229,200,0.35)] hover:shadow-[0_12px_40px_rgba(0,229,200,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                    Réserver une démonstration
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
