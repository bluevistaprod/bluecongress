import { CheckCircle, Clock, Lock, Users, Zap, ArrowRight, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal } from '@/components/Reveal';

// TODO Calendly : remplacer par le lien de l'événement ROUND-ROBIN (Bertrand/Giz/Célestin)
// une fois créé dans le compte Calendly. Règles à régler côté Calendly (voir notes).
const CALENDLY_URL = 'https://calendly.com/contact-bluevistaprod/30min?hide_event_type_details=1&hide_gdpr_block=1&background_color=071a2f&text_color=e2e8f0&primary_color=00c4b4';

const REASSURANCE = [
  { icon: Zap, title: 'Déploiement rapide', desc: 'Application disponible en quelques jours.' },
  { icon: Lock, title: 'Conforme RGPD', desc: 'Données sécurisées.' },
  { icon: Users, title: 'Support humain dédié', desc: 'Accompagnement avant, pendant et après.' },
  { icon: CheckCircle, title: '20+ ans d\'expérience', desc: 'Expertise congrès médicaux et scientifiques.' },
];

const STEPS = [
  { n: 1, title: 'Compréhension de votre événement', desc: 'Nous discutons de vos objectifs, de votre contexte et de vos défis spécifiques.' },
  { n: 2, title: 'Présentation personnalisée de Pulse Congress', desc: 'Démonstration en direct adaptée à votre type de congrès et vos besoins.' },
  { n: 3, title: 'Questions / réponses', desc: 'Vous posez toutes vos questions, nous répondons avec transparence.' },
  { n: 4, title: 'Recommandations adaptées à votre contexte', desc: 'Nous vous proposons une solution personnalisée basée sur votre événement.' },
];

const FAQ = [
  { q: 'Combien dure la démonstration ?', a: 'En moyenne 30 minutes, optimisées pour vous présenter les fonctionnalités clés adaptées à votre congrès sans surcharge d\'informations.' },
  { q: 'La démonstration est-elle gratuite ?', a: 'Oui, entièrement gratuite et sans engagement. C\'est l\'occasion de découvrir Pulse Congress et de voir comment nous pouvons vous aider.' },
  { q: 'Faut-il déjà avoir un congrès planifié ?', a: 'Non. Nous pouvons discuter de votre contexte général, de vos besoins futurs et de comment Pulse Congress peut vous aider.' },
];

function scrollToCal() {
  document.getElementById('reserver')?.scrollIntoView({ behavior: 'smooth' });
}

export default function DemandezDemonstration() {
  return (
    <div className="min-h-screen flex flex-col bg-[#071A2F] text-white">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-20%] left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-[1.05]">
                  Découvrez Pulse Congress en 30 minutes
                </h1>
                <p className="text-lg text-slate-300 mb-10">
                  Voyons ensemble comment simplifier l'organisation de votre congrès, améliorer l'expérience des
                  participants et obtenir des données réellement exploitables.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={scrollToCal} className="group inline-flex items-center justify-center gap-2 bg-[#00E5C8] text-[#0A2540] px-7 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(0,229,200,0.35)] hover:shadow-[0_12px_40px_rgba(0,229,200,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                    Réserver une démonstration
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RÉASSURANCE */}
        <section className="py-16 md:py-20 border-y border-white/10 bg-white/[0.03]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {REASSURANCE.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title} delay={(i % 4) * 0.1}>
                    <div className="h-full rounded-2xl p-6 text-center bg-white/[0.04] border border-white/10">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-[#00C4B4]/10 border border-[#00C4B4]/20">
                        <Icon className="text-[#00E5C8]" size={26} />
                      </div>
                      <h3 className="font-display font-semibold mb-1">{r.title}</h3>
                      <p className="text-slate-400 text-sm">{r.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* DÉROULÉ */}
        <section className="py-20 md:py-28">
          <div className="container">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-14">Comment se déroule la démo ?</h2>
            </Reveal>
            <div className="max-w-3xl mx-auto space-y-6">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="flex gap-6 items-start rounded-2xl p-6 bg-white/[0.03] border border-white/10">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#0A2540] border border-[#00C4B4]/30 flex items-center justify-center text-[#00E5C8] font-display font-bold">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                      <p className="text-slate-400">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal>
                <div className="rounded-2xl p-6 bg-[#00C4B4]/10 border border-[#00C4B4]/20 text-center">
                  <p className="font-semibold">⏱️ Durée moyenne : 30 minutes · ✓ Aucune obligation d'achat</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGE */}
        <section className="py-16 md:py-20 bg-white/[0.02]">
          <div className="container">
            <Reveal>
              <div className="max-w-2xl mx-auto rounded-3xl p-10 bg-white/[0.04] border border-white/10 text-center">
                <Quote className="text-[#00C4B4] mx-auto mb-4" size={28} />
                <blockquote className="text-lg text-slate-200 italic mb-4">
                  « L'appli est aujourd'hui un outil quasi systématique en congrès : très facile d'utilisation,
                  au design parfaitement adapté à l'événement — conviviale, bienveillante et simple. »
                </blockquote>
                <p className="font-semibold">Pr Pierre Cornillon</p>
                <p className="text-sm text-slate-400">Oncologie, CHU de Saint-Étienne</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CALENDLY */}
        <section id="reserver" className="py-20 md:py-28 scroll-mt-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-3">Choisissez votre créneau</h2>
                <p className="text-center text-slate-400 text-lg mb-10">
                  Réservez directement une démonstration personnalisée. Durée : 30 minutes.
                </p>
              </Reveal>
              <Reveal>
                <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40 bg-[#071A2F]">
                  <iframe
                    src={CALENDLY_URL}
                    title="Réserver une démonstration"
                    width="100%"
                    height="820"
                    frameBorder="0"
                    style={{ display: 'block' }}
                  />
                </div>
              </Reveal>
              <Reveal>
                <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-center">
                  {['Démonstration gratuite', 'Sans engagement', 'Réponse à toutes vos questions'].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <span className="text-[#00E5C8] font-bold">✓</span>
                      <p className="text-slate-300 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white/[0.02]">
          <div className="container max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Questions fréquentes</h2>
            </Reveal>
            <div className="space-y-4">
              {FAQ.map((f) => (
                <Reveal key={f.q}>
                  <div className="rounded-2xl p-6 bg-white/[0.04] border border-white/10">
                    <h3 className="font-display font-semibold mb-2">{f.q}</h3>
                    <p className="text-slate-400">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="container text-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Prêt à voir Pulse Congress en action ?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Réservez votre démonstration gratuite — sans engagement, un membre de notre équipe vous répond sous 24 h.
              </p>
              <div className="flex justify-center">
                <button onClick={scrollToCal} className="group inline-flex items-center gap-2 bg-[#00E5C8] text-[#0A2540] px-7 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(0,229,200,0.35)] hover:shadow-[0_12px_40px_rgba(0,229,200,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                  Réserver ma démonstration
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
