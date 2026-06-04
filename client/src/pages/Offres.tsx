import { CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { trpc } from '@/lib/trpc';

export default function Offres() {
  const { data: packs, isLoading } = trpc.offers.getAll.useQuery();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] via-[#003087] to-[#0A2540]">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6 text-white">
              Une solution adaptée à votre congrès
            </h1>
            <p className="text-center text-gray-200 text-xl max-w-3xl mx-auto">
              Chaque événement est unique. Nous proposons une base éprouvée que nous adaptons à vos besoins, votre programme et vos participants.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            {/* Disclaimer */}
            <div className="bg-[#00C4B4]/10 border-l-4 border-[#00C4B4] p-6 rounded mb-12 max-w-4xl mx-auto">
              <p className="text-gray-700">
                <span className="font-semibold text-[#00C4B4]">Tarif final établi selon votre événement, votre programme et vos besoins spécifiques.</span>
              </p>
            </div>

            {isLoading ? (
              <div className="text-center text-gray-600">Chargement des offres...</div>
            ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {packs?.map((pack: any, index: number) => (
                <div
                  key={pack.id}
                  className={
                    pack.recommended
                      ? 'bg-gradient-to-br from-[#0A2540] to-[#003087] rounded-2xl p-10 text-white shadow-xl'
                      : 'bg-white rounded-2xl p-10 border-2 border-gray-200'
                  }
                >
                  {pack.badge && (
                    <div
                      className={
                        pack.recommended
                          ? 'bg-[#00C4B4] text-[#0A2540] px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold'
                          : 'bg-[#00C4B4] text-white px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold'
                      }
                    >
                      {pack.badge}
                    </div>
                  )}

                  <h2 className="text-3xl font-bold mb-4">
                    {index === 0 ? 'Congrès jusqu\'à 300 participants' : 'Congrès de 300 à 1000+ participants'}
                  </h2>
                  <p className={pack.recommended ? 'text-gray-200 mb-8' : 'text-gray-600 mb-8'}>
                    {pack.description}
                  </p>

                  <div className="mb-8">
                    <p className={pack.recommended ? 'text-gray-300 mb-2' : 'text-gray-600 mb-2'}>
                      À partir de
                    </p>
                    <p className="text-5xl font-bold">
                      {pack.price}€{' '}
                      <span className={pack.recommended ? 'text-2xl text-gray-300' : 'text-2xl text-gray-600'}>
                        HT
                      </span>
                    </p>
                  </div>

                  <p className={pack.recommended ? 'text-gray-300 mb-8 text-sm' : 'text-gray-600 mb-8 text-sm'}>
                    {pack.targetAudience}
                  </p>

                  <h3 className="text-lg font-bold mb-6">
                    Fonctionnalités incluses :
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {pack.id === 'premium' && (
                      <li className="flex items-start gap-3">
                        <CheckCircle2
                          size={24}
                          className="text-[#00C4B4] flex-shrink-0 mt-1"
                        />
                        <div>
                          <p className="font-semibold">Contient tout du premier pack</p>
                          <p className="text-sm text-gray-300">
                            Toutes les fonctionnalités du pack essentiel, plus :
                          </p>
                        </div>
                      </li>
                    )}
                    {pack.features.filter((f: any) => pack.id !== 'premium' || !packs[0].features.some((ef: any) => ef.id === f.id)).map((feature: any) => (
                      <li key={feature.id} className="flex items-start gap-3">
                        <CheckCircle2
                          size={24}
                          className={
                            pack.recommended ? 'text-[#00C4B4] flex-shrink-0 mt-1' : 'text-[#00C4B4] flex-shrink-0 mt-1'
                          }
                        />
                        <div>
                          <p className="font-semibold">{feature.name}</p>
                          <p className={pack.recommended ? 'text-sm text-gray-300' : 'text-sm text-gray-600'}>
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={
                      pack.recommended
                        ? 'bg-[#00C4B4] text-[#0A2540] px-6 py-3 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition w-full text-center block'
                        : 'border-2 border-[#00C4B4] text-[#00C4B4] px-6 py-3 rounded-lg font-semibold hover:bg-[#00C4B4]/10 transition w-full text-center block'
                    }
                  >
                    Demander une démonstration
                  </Link>
                </div>
              ))}
            </div>
            )}

            {/* Benefits Section */}
            <div className="bg-white rounded-2xl p-12 border-2 border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-[#0A2540]">
                Inclus dans toutes nos offres
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <p className="font-semibold text-[#0A2540]">Conforme RGPD</p>
                    <p className="text-gray-600 text-sm">Données sécurisées et conformes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-[#00C4B4] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#0A2540]">Support avant, pendant et après</p>
                    <p className="text-gray-600 text-sm">Accompagnement complet de votre événement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0A2540]">Tableau Comparatif Complet</h2>

            {isLoading ? (
              <div className="text-center text-gray-600">Chargement du tableau comparatif...</div>
            ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-50">
                    <th className="text-left py-4 px-4 font-bold text-[#0A2540]">Fonctionnalités</th>
                    {packs?.map((pack: any, index: number) => (
                      <th key={pack.id} className="text-center py-4 px-4 font-bold text-[#0A2540]">
                        {index === 0 ? 'Jusqu\'à 300' : '300 à 1000+'}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Prix */}
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-semibold text-[#0A2540]">Prix (HT)</td>
                    {packs?.map((pack: any) => (
                      <td key={pack.id} className="text-center py-4 px-4 font-bold text-[#00C4B4]">
                        À partir de {pack.price}€
                      </td>
                    ))}
                  </tr>

                  {/* Features - Get unique features from all packs */}
                  {packs && (() => {
                    const uniqueFeatures = new Map();
                    packs.forEach((pack: any) => {
                      pack.features.forEach((feature: any) => {
                        if (!uniqueFeatures.has(feature.id)) {
                          uniqueFeatures.set(feature.id, feature);
                        }
                      });
                    });
                    return Array.from(uniqueFeatures.values()).map((feature: any, index: number) => (
                      <tr key={feature.id} className={index % 2 === 0 ? 'border-b border-gray-200 bg-gray-50' : 'border-b border-gray-200'}>
                        <td className="py-4 px-4 font-semibold text-[#0A2540]">{feature.name}</td>
                        {packs?.map((pack: any) => {
                          const packFeature = pack.features.find((f: any) => f.id === feature.id);
                          return (
                            <td key={pack.id} className="text-center py-4 px-4">
                              {packFeature && packFeature.included ? (
                                <CheckCircle2 className="mx-auto text-[#00C4B4]" size={24} />
                              ) : (
                                <XCircle className="mx-auto text-gray-300" size={24} />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ));
                  })()}
                </tbody>
              </table>
            </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0A2540]">Questions Fréquentes sur les Offres</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#0A2540]">Quel pack choisir ?</h3>
                <p className="text-gray-600">
                  Choisissez le pack "Jusqu'à 300 participants" pour les événements modestes, et le pack "300 à 1000+" pour les congrès plus importants avec besoin d'accompagnement complet.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#0A2540]">Puis-je ajouter des fonctionnalités ?</h3>
                <p className="text-gray-600">
                  Oui, nous proposons des options supplémentaires. Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#0A2540]">Quels sont les délais de mise en place ?</h3>
                <p className="text-gray-600">
                  Nous déployons votre application en quelques jours après réception de vos contenus et informations. Un accompagnement humain vous guide à chaque étape.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-[#0A2540]">Comment fonctionne le support ?</h3>
                <p className="text-gray-600">
                  Nous vous accompagnons avant votre événement (configuration), pendant (support en direct), et après (rapports et statistiques). Une équipe humaine est toujours disponible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
