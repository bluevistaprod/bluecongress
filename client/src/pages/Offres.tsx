import { CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Offres() {
  const complementaryOptions = [
    { title: 'Networking participants', description: 'Faciliter les rencontres entre experts et visiteurs' },
    { title: 'Galerie photo événement', description: 'Partager et archiver les photos de votre congrès' },
    { title: 'Traductions multilingues', description: 'Supporter plusieurs langues pour une audience internationale' },
    { title: 'Assistance sur site', description: 'Équipe technique présente pendant votre événement' },
    { title: 'Notifications avancées', description: 'Campagnes de notifications personnalisées et ciblées' },
    { title: 'Personnalisations spécifiques', description: 'Adaptations sur mesure selon vos besoins uniques' },
  ];

  const includedInAll = [
    'Déploiement rapide',
    'Application native iOS et Android',
    'Conforme RGPD',
    'Accompagnement humain',
    'Support avant, pendant et après l\'événement',
    'Hébergement sécurisé',
    'Statistiques d\'utilisation',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] via-[#003087] to-[#0A2540] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Une solution adaptée à chaque congrès
              </h1>
              <p className="text-xl text-gray-100 mb-10 leading-relaxed">
                Chaque événement possède ses propres contraintes, son programme scientifique et ses objectifs. Pulse Congress s'adapte à votre organisation pour offrir une expérience fluide aux participants et aux organisateurs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#00E5C8] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00E5C8]/90 transition shadow-lg hover:shadow-xl"
              >
                Demander une démonstration
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 1: TWO OFFERS */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
                Deux niveaux d'accompagnement
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choisissez l'offre qui correspond à vos besoins et à la complexité de votre événement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* OFFER 1: STANDARD */}
              <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-[#00C4B4] transition">
                <h3 className="text-3xl font-bold text-[#0A2540] mb-3">
                  Pulse Congress Standard
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Pour les congrès et journées scientifiques souhaitant digitaliser leur événement avec une application professionnelle simple à déployer.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-[#0A2540] mb-4">Inclus :</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Application iOS et Android</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Programme interactif</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Intervenants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sponsors et partenaires</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Notifications push</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Statistiques d'utilisation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Support standard</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="w-full block text-center border-2 border-[#00C4B4] text-[#00C4B4] px-6 py-3 rounded-lg font-semibold hover:bg-[#00C4B4]/10 transition"
                >
                  Demander une démonstration
                </Link>
              </div>

              {/* OFFER 2: PREMIUM */}
              <div className="bg-gradient-to-br from-[#0A2540] to-[#003087] rounded-2xl p-10 text-white shadow-xl relative">
                <div className="absolute -top-4 -right-4 bg-[#00C4B4] text-[#0A2540] px-4 py-2 rounded-full text-sm font-bold">
                  Le plus choisi
                </div>

                <h3 className="text-3xl font-bold mb-3">
                  Pulse Congress Premium
                </h3>
                <p className="text-gray-100 mb-8 leading-relaxed">
                  Pour les congrès nécessitant des fonctionnalités scientifiques avancées et un accompagnement renforcé.
                </p>

                <div className="bg-white/10 rounded-xl p-6 mb-8 backdrop-blur">
                  <h4 className="font-semibold mb-4">Inclus :</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100">Toutes les fonctionnalités Standard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100">Gestion des abstracts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100">Gestion des e-posters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100">Contenus scientifiques avancés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100">Accompagnement renforcé</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100">Paramétrages spécifiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C4B4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100">Reporting avancé</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="w-full block text-center bg-[#00C4B4] text-[#0A2540] px-6 py-3 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition"
                >
                  Demander une démonstration
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPLEMENTARY OPTIONS */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
                Options complémentaires
              </h2>
              <p className="text-gray-600 text-lg">
                Les options sont activées selon les besoins de votre événement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {complementaryOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#00C4B4] transition">
                  <div className="flex items-start gap-3 mb-3">
                    <Zap size={24} className="text-[#00C4B4] flex-shrink-0" />
                    <h3 className="text-lg font-bold text-[#0A2540]">{option.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT'S INCLUDED IN ALL OFFERS */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
                Ce qui est inclus dans toutes les offres
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {includedInAll.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4">
                  <CheckCircle2 size={24} className="text-[#00C4B4] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PRICING CONSULTATIVE */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] via-[#003087] to-[#0A2540] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Combien coûte Pulse Congress ?
              </h2>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Chaque congrès est unique.
              </p>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed">
                Le tarif dépend notamment :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                  <p className="text-gray-100">• Du nombre de participants</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                  <p className="text-gray-100">• Du volume de contenu</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                  <p className="text-gray-100">• Des fonctionnalités souhaitées</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                  <p className="text-gray-100">• Du niveau d'accompagnement</p>
                </div>
              </div>

              <p className="text-lg text-gray-200 mb-10 leading-relaxed">
                Nous vous présentons une proposition adaptée lors de la démonstration.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-[#00E5C8] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00E5C8]/90 transition shadow-lg hover:shadow-xl"
              >
                Réserver une démonstration
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
