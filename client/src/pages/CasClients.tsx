import { Clock, MessageSquare, Zap, TrendingUp, BarChart3, Users, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGalleryPreview from '@/components/ImageGalleryPreview';
import { niceShoulderCourseGallery, congreEspoirGallery } from '@/data/galleryData';
import { Reveal, Counter, DEMO_PATH } from '@/components/Reveal';

const TRUST = [
  { n: 20, s: '+', label: "années d'expérience" },
  { n: 5, s: '', label: 'applications livrées' },
  { n: 945, s: '', label: 'participants touchés' },
  { n: 134, s: '', label: 'intervenants valorisés' },
];

const WHY = [
  { icon: Clock, title: 'Déploiement rapide', desc: 'Application disponible en quelques jours, sans développement spécifique.' },
  { icon: MessageSquare, title: 'Notifications temps réel', desc: 'Communication instantanée avec les participants.' },
  { icon: Zap, title: 'Programme interactif', desc: 'Agenda personnalisé et favoris pour chaque participant.' },
  { icon: TrendingUp, title: 'Votes et interactions', desc: 'Engagement accru pendant les sessions.' },
  { icon: BarChart3, title: 'Statistiques post-événement', desc: "Mesure de l'impact et du ROI de votre événement." },
  { icon: Users, title: 'Support humain', desc: 'Accompagnement avant, pendant et après le congrès.' },
];

function KpiGrid({ stats }: { stats: { n: string; l: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      {stats.map((s) => (
        <div key={s.l} className="rounded-xl p-4 text-center bg-[#00C4B4]/10 border border-[#00C4B4]/20">
          <p className="font-display text-2xl font-bold text-[#00E5C8]">{s.n}</p>
          <p className="text-xs text-slate-400 mt-1">{s.l}</p>
        </div>
      ))}
    </div>
  );
}

function CaseContent({
  sector, title, kpis, defi, solution, quote, author, role,
}: {
  sector: string; title: string; kpis: { n: string; l: string }[];
  defi: string; solution: string; quote: string; author: string; role: string;
}) {
  return (
    <div>
      <p className="text-[#00C4B4] font-semibold mb-2 uppercase tracking-wide text-sm">Étude de cas</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      <p className="text-slate-400 mb-8"><span className="font-semibold text-slate-200">Secteur :</span> {sector}</p>
      <KpiGrid stats={kpis} />
      <h3 className="font-display text-lg font-semibold mb-2">Le défi</h3>
      <p className="text-slate-400 mb-6">{defi}</p>
      <h3 className="font-display text-lg font-semibold mb-2">La solution Pulse Congress</h3>
      <p className="text-slate-400 mb-8">{solution}</p>
      <div className="rounded-2xl p-6 bg-white/[0.04] border border-white/10 mb-8">
        <Quote className="text-[#00C4B4] mb-3" size={22} />
        <p className="text-slate-200 italic leading-relaxed mb-4">« {quote} »</p>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
      <Link href={DEMO_PATH} className="group inline-flex items-center gap-2 bg-[#00E5C8] text-[#0A2540] px-6 py-3 rounded-xl font-semibold hover:shadow-[0_8px_30px_rgba(0,229,200,0.45)] hover:-translate-y-0.5 transition-all duration-300">
        Réserver une démonstration
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export default function CasClients() {
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
                Des congrès réels. Des résultats mesurables.
              </h1>
              <p className="text-center text-slate-300 text-lg max-w-3xl mx-auto">
                Découvrez comment des organisateurs de congrès médicaux et scientifiques utilisent Pulse Congress
                pour améliorer l'expérience des participants, simplifier l'organisation et obtenir des données exploitables.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TRUST BAND */}
        <section className="py-12 border-y border-white/10 bg-white/[0.03]">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {TRUST.map((t, i) => (
                <Reveal key={t.label} delay={i * 0.1}>
                  <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#00E5C8] to-[#00C4B4] bg-clip-text text-transparent">
                    <Counter to={t.n} suffix={t.s} />
                  </div>
                  <p className="text-slate-400 text-sm mt-2">{t.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CAS 1 — NSC */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Reveal className="order-2 lg:order-1 flex justify-center">
                <ImageGalleryPreview images={niceShoulderCourseGallery} maxImages={3} />
              </Reveal>
              <Reveal delay={0.1} className="order-1 lg:order-2">
                <CaseContent
                  sector="Médical — Chirurgie de l'épaule"
                  title="Nice Shoulder Course"
                  kpis={[{ n: '800+', l: 'Participants' }, { n: '74', l: 'Pays' }, { n: '89', l: 'Intervenants' }, { n: '93', l: 'Sessions' }]}
                  defi="Référence internationale de la chirurgie de l'épaule (présidé par le Pr Pascal Boileau), le congrès réunit des chirurgiens de plus de 70 pays, avec chirurgies en direct, ateliers et sessions denses. Gérer un tel programme sur papier — et informer tout le monde des changements en temps réel — devenait ingérable."
                  solution="Une application mobile personnalisée : programme interactif, fiches des 89 intervenants, système de favoris pour composer son agenda, et notifications push pour les mises à jour en temps réel."
                  quote="Application fonctionnelle, avec des mises à jour rapides. Fluidité au rendez-vous."
                  author="Martin Rolland"
                  role="Dirigeant, Tamar'ana Production"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CAS 2 — ESPOIR */}
        <section className="py-20 md:py-28 bg-white/[0.02]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Reveal>
                <CaseContent
                  sector="Médical — Oncologie"
                  title="Congrès ESPOIR Oncologie"
                  kpis={[{ n: '145', l: 'Participants' }, { n: '45', l: 'Intervenants' }, { n: '25', l: 'Sessions' }, { n: '28', l: 'Partenaires' }]}
                  defi="Le congrès ESPOIR (« Ensemble Sein et Prostate pour une Oncologie Innovante et Responsable ») réunit à Lyon experts et professionnels autour des cancers hormonodépendants, avec un programme dense sur 2 jours, des symposiums et de nombreux partenaires. L'intégration et la mise à jour des données étaient particulièrement chronophages."
                  solution="Pulse Congress Premium avec accompagnement complet : notre équipe a pris en charge l'intégration de toutes les données (programme, intervenants, partenaires), permettant à l'organisateur de se concentrer sur le contenu scientifique."
                  quote="Je ne mets jamais 10 car on peut toujours s'améliorer, mais l'appli est aujourd'hui un outil quasi systématique en congrès. Celle-ci est très facile d'utilisation, au design parfaitement adapté à la dimension de l'événement : conviviale, bienveillante et simple."
                  author="Pr Pierre Cornillon"
                  role="Oncologie, CHU de Saint-Étienne"
                />
              </Reveal>
              <Reveal delay={0.1} className="flex justify-center">
                <ImageGalleryPreview images={congreEspoirGallery} maxImages={3} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* POURQUOI */}
        <section className="py-20 md:py-28">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">
                Pourquoi les organisateurs choisissent Pulse Congress
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal key={w.title} delay={(i % 3) * 0.1}>
                    <div className="h-full rounded-2xl p-8 bg-white/[0.04] border border-white/10 hover:border-[#00C4B4]/40 transition-colors">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#00C4B4]/10 border border-[#00C4B4]/20">
                        <Icon className="text-[#00E5C8]" size={26} />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3">{w.title}</h3>
                      <p className="text-slate-400">{w.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-30%] left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container text-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                Voyons si Pulse Congress est adapté à votre prochain congrès
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Demandez une démonstration personnalisée et découvrez en moins de 30 minutes comment simplifier
                l'organisation de votre événement.
              </p>
              <div className="flex justify-center">
                <Link href={DEMO_PATH} className="group inline-flex items-center gap-2 bg-[#00E5C8] text-[#0A2540] px-7 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(0,229,200,0.35)] hover:shadow-[0_12px_40px_rgba(0,229,200,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                  Demander une démonstration
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
