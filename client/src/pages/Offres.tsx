import { Link } from 'wouter';
import { CheckCircle2, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Offres() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6">Nos Offres</h1>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Deux formules conçues pour répondre aux besoins variés des organisateurs d'événements, du séminaire d'entreprise au congrès médical international.
            </p>
          </div>
        </section>

        {/* Detailed Packs Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Pack Essentiel */}
              <div className="bg-card rounded-2xl p-10 border-2 border-border">
                <h2 className="text-3xl font-bold mb-2">Pack Essentiel</h2>
                <p className="text-muted-foreground mb-8">L'indispensable pour un congrès réussi</p>
                
                <div className="mb-8">
                  <p className="text-muted-foreground mb-2">À partir de</p>
                  <p className="text-5xl font-bold">950€ <span className="text-2xl text-muted-foreground">HT</span></p>
                </div>

                <p className="text-muted-foreground mb-8">
                  Idéal pour les événements de 50 à 300 participants, les séminaires d'entreprise ou les journées thématiques.
                </p>

                <h3 className="text-lg font-bold mb-6">Fonctionnalités incluses :</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Programme Complet</p>
                      <p className="text-sm text-muted-foreground">Affichage dynamique des sessions par jour et par salle</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Fiches Intervenants</p>
                      <p className="text-sm text-muted-foreground">Biographies et photos des orateurs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Système de Favoris</p>
                      <p className="text-sm text-muted-foreground">Permet aux participants de composer leur propre agenda</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Notifications Push</p>
                      <p className="text-sm text-muted-foreground">Alertes en temps réel pour les changements de programme</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Plan du Salon</p>
                      <p className="text-sm text-muted-foreground">Carte interactive pour orienter les visiteurs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Design Personnalisé</p>
                      <p className="text-sm text-muted-foreground">Intégration de votre logo et de vos couleurs</p>
                    </div>
                  </li>
                </ul>

                <Link href="/contact" className="btn-outline w-full text-center">
                  Demander un Devis
                </Link>
              </div>

              {/* Pack Premium */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-primary-foreground shadow-xl">
                <div className="bg-primary-foreground text-primary px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold">
                  Recommandé pour les congrès
                </div>
                <h2 className="text-3xl font-bold mb-2">Pack Premium / Médical</h2>
                <p className="text-primary-foreground/80 mb-8">L'expérience complète pour les congrès exigeants</p>
                
                <div className="mb-8">
                  <p className="text-primary-foreground/80 mb-2">À partir de</p>
                  <p className="text-5xl font-bold">1 850€ <span className="text-2xl text-primary-foreground/80">HT</span></p>
                </div>

                <p className="text-primary-foreground/80 mb-8">
                  Spécifiquement conçu pour les congrès de 300 à 1000+ participants avec accompagnement complet.
                </p>

                <h3 className="text-lg font-bold mb-6">Tout du Pack Essentiel, plus :</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary-foreground flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Accompagnement Data</p>
                      <p className="text-sm text-primary-foreground/80">Envoyez-nous vos fichiers bruts, nous les intégrons</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary-foreground flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Votes en Direct</p>
                      <p className="text-sm text-primary-foreground/80">Dynamisez vos sessions avec sondages en temps réel</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary-foreground flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Fiches Exposants Détaillées</p>
                      <p className="text-sm text-primary-foreground/80">Mise en avant de vos partenaires et sponsors</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary-foreground flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Gestion des Abstracts</p>
                      <p className="text-sm text-primary-foreground/80">Consultation simplifiée des résumés scientifiques</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary-foreground flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Statistiques d'Utilisation</p>
                      <p className="text-sm text-primary-foreground/80">Rapport détaillé sur l'engagement post-événement</p>
                    </div>
                  </li>
                </ul>

                <Link href="/contact" className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition w-full text-center block">
                  Demander un Devis
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="section-padding bg-card">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Tableau Comparatif</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold">Fonctionnalités</th>
                    <th className="text-center py-4 px-4 font-bold">Pack Essentiel</th>
                    <th className="text-center py-4 px-4 font-bold">Pack Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-semibold">Prix (HT)</td>
                    <td className="text-center py-4 px-4">950€</td>
                    <td className="text-center py-4 px-4">1 850€</td>
                  </tr>
                  <tr className="border-b border-border bg-background">
                    <td className="py-4 px-4 font-semibold">Programme Interactif</td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-accent" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-semibold">Fiches Intervenants</td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-accent" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border bg-background">
                    <td className="py-4 px-4 font-semibold">Favoris & Agenda Perso</td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-accent" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-semibold">Notifications Push</td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-accent" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border bg-background">
                    <td className="py-4 px-4 font-semibold">Plan du Salon</td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-accent" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-semibold">Design Personnalisé</td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-accent" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border bg-background">
                    <td className="py-4 px-4 font-semibold">Votes & Quiz en Direct</td>
                    <td className="text-center py-4 px-4"><XCircle className="mx-auto text-muted" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-semibold">Fiches Exposants & Sponsors</td>
                    <td className="text-center py-4 px-4"><XCircle className="mx-auto text-muted" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border bg-background">
                    <td className="py-4 px-4 font-semibold">Intégration des Données par Bluevista</td>
                    <td className="text-center py-4 px-4"><XCircle className="mx-auto text-muted" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-semibold">Consultation des Abstracts</td>
                    <td className="text-center py-4 px-4"><XCircle className="mx-auto text-muted" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                  <tr className="bg-background">
                    <td className="py-4 px-4 font-semibold">Rapport Statistique Post-Event</td>
                    <td className="text-center py-4 px-4"><XCircle className="mx-auto text-muted" size={24} /></td>
                    <td className="text-center py-4 px-4"><CheckCircle2 className="mx-auto text-primary" size={24} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Commencer ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contactez notre équipe pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <Link href="/contact" className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">
              Demander un Devis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
