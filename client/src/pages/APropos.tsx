import { CheckCircle2, Zap, Award, Users, Briefcase, Shield } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function APropos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] via-[#003087] to-[#0A2540]">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6 text-white">
              20 ans d'expérience au service des événements professionnels
            </h1>
            <p className="text-center text-gray-200 text-xl max-w-3xl mx-auto">
              Depuis 2004, Bluevista accompagne les organisateurs d'événements avec des solutions audiovisuelles, digitales et interactives conçues pour améliorer l'expérience des participants.
            </p>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#00C4B4] mb-2">20+</div>
                <p className="text-gray-700 font-semibold">années d'expérience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#00C4B4] mb-2">100+</div>
                <p className="text-gray-700 font-semibold">événements accompagnés</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#00C4B4] mb-2">10000+</div>
                <p className="text-gray-700 font-semibold">participants utilisateurs</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0A2540] mb-2">✓</div>
                <p className="text-gray-700 font-semibold">Support avant, pendant et après</p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section - Simplified */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#0A2540]">Notre Histoire</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00C4B4] text-white font-bold">
                      2004
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Création de Bluevista</h3>
                    <p className="text-gray-600">
                      Fondation de l'entreprise avec une vision : apporter l'excellence audiovisuelle à l'événementiel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00C4B4] text-white font-bold">
                      2010
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Développement des activités événementielles</h3>
                    <p className="text-gray-600">
                      Expansion au-delà de la production audiovisuelle avec intégration de solutions technologiques.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00C4B4] text-white font-bold">
                      2020
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Lancement des solutions digitales et applications événementielles</h3>
                    <p className="text-gray-600">
                      Développement de Pulse Congress, notre plateforme propriétaire pour applications mobiles événementielles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00C4B4] text-white font-bold">
                      2024
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Expertise audiovisuelle + solutions digitales pour congrès et événements professionnels</h3>
                    <p className="text-gray-600">
                      Acteur reconnu du secteur événementiel avec une expertise unique combinant audiovisuel et technologie mobile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0A2540]">Notre Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
                <div className="bg-[#00C4B4]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="text-[#00C4B4]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Audiovisuel événementiel</h3>
                <p className="text-gray-600">
                  Production, montage, captation et diffusion audiovisuelle pour vos événements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
                <div className="bg-[#00C4B4]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-[#00C4B4]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Applications mobiles événementielles</h3>
                <p className="text-gray-600">
                  Développement et déploiement d'applications mobiles pour congrès et événements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
                <div className="bg-[#00C4B4]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Award className="text-[#00C4B4]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Contenus digitaux</h3>
                <p className="text-gray-600">
                  Création de contenus interactifs, infographies et ressources digitales pour vos événements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
                <div className="bg-[#00C4B4]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-[#00C4B4]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Support et accompagnement terrain</h3>
                <p className="text-gray-600">
                  Équipe dédiée avant, pendant et après votre événement pour assurer son succès.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0A2540]">
              Pourquoi les organisateurs nous choisissent ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#00C4B4] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540]">Déploiement rapide</p>
                  <p className="text-gray-600 text-sm">Votre application prête en quelques jours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#00C4B4] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540]">Accompagnement humain</p>
                  <p className="text-gray-600 text-sm">Une équipe dédiée à votre succès</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#00C4B4] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540]">Expertise du secteur événementiel</p>
                  <p className="text-gray-600 text-sm">20 ans de savoir-faire reconnu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#00C4B4] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540]">Solutions éprouvées sur le terrain</p>
                  <p className="text-gray-600 text-sm">100+ événements accompagnés</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#00C4B4] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540]">Conforme RGPD</p>
                  <p className="text-gray-600 text-sm">Données sécurisées et conformes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-[#00C4B4] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-[#0A2540]">Support réactif</p>
                  <p className="text-gray-600 text-sm">Disponible avant, pendant et après</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-[#0A2540] to-[#003087] text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à transformer votre congrès ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Contactez-nous pour discuter de votre prochain événement et découvrir comment Pulse Congress peut vous aider.
            </p>
            <Link href="/contact" className="inline-block bg-[#00C4B4] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition">
              Demander une démonstration
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
