import { Link } from 'wouter';
import { CheckCircle2, XCircle } from 'lucide-react';
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
        <section className="section-padding bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6">Nos Offres</h1>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Deux formules conçues pour répondre aux besoins variés des organisateurs d'événements, du séminaire modeste au congrès médical international.
            </p>
          </div>
        </section>

        {/* Detailed Packs Section */}
        <section className="section-padding bg-background">
          <div className="container">
            {isLoading ? (
              <div className="text-center text-muted-foreground">Chargement des offres...</div>
            ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {packs?.map((pack: any) => (
                <div
                  key={pack.id}
                  className={
                    pack.recommended
                      ? 'bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-primary-foreground shadow-xl'
                      : 'bg-card rounded-2xl p-10 border-2 border-border'
                  }
                >
                  {pack.badge && (
                    <div
                      className={
                        pack.recommended
                          ? 'bg-primary-foreground text-primary px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold'
                          : 'bg-primary text-primary-foreground px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold'
                      }
                    >
                      {pack.badge}
                    </div>
                  )}

                  <h2 className="text-3xl font-bold mb-2">{pack.name}</h2>
                  <p className={pack.recommended ? 'text-primary-foreground/80 mb-8' : 'text-muted-foreground mb-8'}>
                    {pack.description}
                  </p>

                  <div className="mb-8">
                    <p className={pack.recommended ? 'text-primary-foreground/80 mb-2' : 'text-muted-foreground mb-2'}>
                      À partir de
                    </p>
                    <p className="text-5xl font-bold">
                      {pack.price}€{' '}
                      <span className={pack.recommended ? 'text-2xl text-primary-foreground/80' : 'text-2xl text-muted-foreground'}>
                        HT
                      </span>
                    </p>
                  </div>

                  <p className={pack.recommended ? 'text-primary-foreground/80 mb-8' : 'text-muted-foreground mb-8'}>
                    {pack.targetAudience}
                  </p>

                  <h3 className="text-lg font-bold mb-6">
                    {pack.id === 'essential' ? 'Fonctionnalités incluses :' : 'Tout du Pack Essentiel, plus :'}
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {pack.features.map((feature: any) => (
                      <li key={feature.id} className="flex items-start gap-3">
                        <CheckCircle2
                          size={24}
                          className={
                            pack.recommended ? 'text-primary-foreground flex-shrink-0 mt-1' : 'text-accent flex-shrink-0 mt-1'
                          }
                        />
                        <div>
                          <p className="font-semibold">{feature.name}</p>
                          <p className={pack.recommended ? 'text-sm text-primary-foreground/80' : 'text-sm text-muted-foreground'}>
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
                        ? 'bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition w-full text-center block'
                        : 'btn-outline w-full text-center'
                    }
                  >
                    Demander un Devis
                  </Link>
                </div>
              ))}
            </div>
            )}
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="section-padding bg-card">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Tableau Comparatif Complet</h2>

            {isLoading ? (
              <div className="text-center text-muted-foreground">Chargement du tableau comparatif...</div>
            ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Fonctionnalités</th>
                    {packs?.map((pack: any) => (
                      <th key={pack.id} className="text-center py-4 px-4 font-bold">
                        {pack.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Prix */}
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-semibold">Prix (HT)</td>
                    {packs?.map((pack: any) => (
                      <td key={pack.id} className="text-center py-4 px-4">
                        {pack.price}€
                      </td>
                    ))}
                  </tr>

                  {/* Features */}
                  {packs?.[0]?.features?.map((feature: any, index: number) => (
                    <tr key={feature.id} className={index % 2 === 0 ? 'border-b border-border bg-background' : 'border-b border-border'}>
                      <td className="py-4 px-4 font-semibold">{feature.name}</td>
                      {packs?.map((pack: any) => {
                        const packFeature = pack.features.find((f: any) => f.id === feature.id);
                        return (
                          <td key={pack.id} className="text-center py-4 px-4">
                            {packFeature && packFeature.included ? (
                              <CheckCircle2 className="mx-auto text-primary" size={24} />
                            ) : (
                              <XCircle className="mx-auto text-muted" size={24} />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Questions Fréquentes sur les Offres</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-4">Quel pack choisir ?</h3>
                <p className="text-muted-foreground">
                  Choisissez le Pack Essentiel pour les événements jusqu'à 300 participants, et le Pack Premium pour les congrès plus importants avec besoin d'accompagnement
                  complet.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-4">Puis-je ajouter des fonctionnalités ?</h3>
                <p className="text-muted-foreground">
                  Oui, nous proposons des options supplémentaires. Contactez-nous pour discuter de vos besoins spécifiques.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-4">Combien de temps pour mettre en place ?</h3>
                <p className="text-muted-foreground">
                  Votre application est prête en 7 jours. Utilisez nos gabarits, envoyez-nous vos données, nous nous occupons du reste.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-4">Quel support après l'événement ?</h3>
                <p className="text-muted-foreground">
                  L'application reste accessible pendant 1 an après l'événement pour permettre aux participants de consulter le programme et les ressources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Démarrer ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contactez notre équipe pour une démonstration personnalisée et découvrez comment notre application peut simplifier l'organisation de votre congrès.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Prendre Rendez-vous
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
