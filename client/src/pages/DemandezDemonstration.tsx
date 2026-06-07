import { CheckCircle, Clock, Lock, Users, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DemandezDemonstration() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] via-[#003087] to-[#0A2540] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Découvrez Pulse Congress en 30 minutes
              </h1>
              <p className="text-xl text-gray-200 mb-10">
                Voyons ensemble comment simplifier l'organisation de votre congrès, améliorer l'expérience des participants et obtenir des données réellement exploitables.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#00C4B4] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition flex items-center justify-center gap-2">
                  Réserver une démonstration
                  <ChevronRight size={20} />
                </button>
                <Link href="/cas-clients" className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition border border-white/50 flex items-center justify-center gap-2">
                  Voir les cas clients
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reassurance Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Déploiement rapide</h3>
                <p className="text-gray-600">Application disponible en quelques jours.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Lock className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Conforme RGPD</h3>
                <p className="text-gray-600">Données sécurisées.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Support humain dédié</h3>
                <p className="text-gray-600">Accompagnement avant, pendant et après l'événement.</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">20+ ans d'expérience</h3>
                <p className="text-gray-600">Expertise événementielle et congrès médicaux.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Demo Works Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0A2540]">
              Comment se déroule la démo ?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00C4B4] text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      Compréhension de votre événement
                    </h3>
                    <p className="text-gray-600">
                      Nous discutons de vos objectifs, de votre contexte et de vos défis spécifiques.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00C4B4] text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      Présentation personnalisée de Pulse Congress
                    </h3>
                    <p className="text-gray-600">
                      Démonstration en direct adaptée à votre type de congrès et vos besoins.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00C4B4] text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      Questions / réponses
                    </h3>
                    <p className="text-gray-600">
                      Vous posez toutes vos questions, nous répondons avec transparence.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00C4B4] text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                      Recommandations adaptées à votre contexte
                    </h3>
                    <p className="text-gray-600">
                      Nous vous proposons une solution personnalisée basée sur votre événement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white rounded-xl p-8 border border-[#00C4B4]/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-[#0A2540] mb-2">
                      ⏱️ Durée moyenne : 30 minutes
                    </p>
                    <p className="text-gray-600">
                      ✓ Aucune obligation d'achat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-[#0A2540] to-[#003087] rounded-xl p-12 text-white text-center">
                <div className="mb-6 text-4xl">✨</div>
                <blockquote className="text-xl font-semibold mb-6 italic">
                  "Nous avons découvert en quelques minutes comment simplifier toute l'organisation de notre congrès. L'équipe a parfaitement compris nos besoins."
                </blockquote>
                <p className="text-gray-300 font-semibold">
                  Organisateur de congrès médical
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section - Main Focal Point */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-[#0A2540]">
                Choisissez votre créneau
              </h2>
              <p className="text-center text-gray-600 text-lg mb-12">
                Réservez directement une démonstration personnalisée de Pulse Congress. Durée : 30 minutes.
              </p>

              {/* Calendly Widget */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
                <iframe
                  src="https://calendly.com/contact-bluevistaprod/30min?hide_event_type_details=1&hide_gdpr_block=1"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  style={{ display: 'block' }}
                ></iframe>
              </div>

              {/* Reassurance Line */}
              <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 text-center">
                <div className="flex items-center gap-2">
                  <span className="text-[#00C4B4] font-bold">✓</span>
                  <p className="text-gray-700 font-semibold">Démonstration gratuite</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00C4B4] font-bold">✓</span>
                  <p className="text-gray-700 font-semibold">Sans engagement</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00C4B4] font-bold">✓</span>
                  <p className="text-gray-700 font-semibold">Réponse à toutes vos questions</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Quick FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0A2540]">
              Questions fréquentes
            </h2>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-[#0A2540] mb-3">
                  Combien dure la démonstration ?
                </h3>
                <p className="text-gray-600">
                  La démonstration dure en moyenne 30 minutes. Ce temps est optimisé pour vous présenter les fonctionnalités clés adaptées à votre congrès sans surcharge d'informations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-[#0A2540] mb-3">
                  La démonstration est-elle gratuite ?
                </h3>
                <p className="text-gray-600">
                  Oui, la démonstration est entièrement gratuite et sans engagement. C'est l'occasion de découvrir Pulse Congress et de voir comment nous pouvons vous aider.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-lg font-bold text-[#0A2540] mb-3">
                  Faut-il déjà avoir un congrès planifié ?
                </h3>
                <p className="text-gray-600">
                  Non, vous n'avez pas besoin d'avoir un congrès planifié. Nous pouvons discuter de votre contexte général, de vos besoins futurs et de comment Pulse Congress peut vous aider.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <section className="section-padding bg-gradient-to-r from-[#0A2540] to-[#003087] text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à voir Pulse Congress en action ?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Réservez votre démonstration gratuite et découvrez comment simplifier l'organisation de votre prochain congrès.
            </p>
            <button className="bg-[#00C4B4] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition inline-flex items-center gap-2">
              Réserver ma démonstration
              <ChevronRight size={20} />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Calendar Icon Component
function Calendar(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}
