import { Link } from 'wouter';
import { Users, TrendingUp, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CasClients() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6">Ils Nous Font Confiance</h1>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Découvrez comment Bluevista Production a transformé l'expérience de congrès pour de nombreux organisateurs, du secteur médical aux événements corporate.
            </p>
          </div>
        </section>

        {/* Case Study 1: Nice Shoulder Course */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-primary/10 rounded-2xl h-96 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Captures d'écran</p>
                    <p className="text-lg font-semibold text-primary">Nice Shoulder Course</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-accent font-semibold mb-2">ÉTUDE DE CAS</p>
                <h2 className="text-4xl font-bold mb-6">Nice Shoulder Course 2024</h2>
                <p className="text-muted-foreground mb-6">
                  <span className="font-semibold text-foreground">Secteur :</span> Médical - Orthopédie
                </p>
                
                <h3 className="text-xl font-bold mb-4">Le Défi</h3>
                <p className="text-muted-foreground mb-6">
                  L'organisateur du Nice Shoulder Course faisait face à des défis majeurs : gestion manuelle du programme papier, difficulté à informer les participants en temps réel des changements de dernière minute, et manque d'interactivité pour engager les participants.
                </p>

                <h3 className="text-xl font-bold mb-4">La Solution Bluevista</h3>
                <p className="text-muted-foreground mb-6">
                  Nous avons développé une application mobile personnalisée avec un programme interactif, un système de favoris permettant aux participants de composer leur propre agenda, et des notifications push pour les mises à jour en temps réel.
                </p>

                <h3 className="text-xl font-bold mb-4">Les Résultats</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">+35% d'engagement</p>
                      <p className="text-sm text-muted-foreground">Participation accrue aux sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Users className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">95% de satisfaction</p>
                      <p className="text-sm text-muted-foreground">Feedback des participants</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Leaf className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">-2 tonnes de papier</p>
                      <p className="text-sm text-muted-foreground">Réduction de l'empreinte écologique</p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8 italic text-muted-foreground">
                  "L'application Bluevista a transformé notre congrès. Nos participants adorent la facilité d'accès au programme et les notifications en temps réel. C'est devenu un incontournable !"
                  <p className="text-sm text-foreground font-semibold mt-2">— Dr. Dupont, Organisateur</p>
                </blockquote>

                <Link href="/contact" className="btn-primary">
                  Découvrir Plus
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 2: Congrès ESPOIR */}
        <section className="section-padding bg-card">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent font-semibold mb-2">ÉTUDE DE CAS</p>
                <h2 className="text-4xl font-bold mb-6">Congrès ESPOIR Oncologie</h2>
                <p className="text-muted-foreground mb-6">
                  <span className="font-semibold text-foreground">Secteur :</span> Médical - Oncologie
                </p>
                
                <h3 className="text-xl font-bold mb-4">Le Défi</h3>
                <p className="text-muted-foreground mb-6">
                  Avec plus de 800 participants, le Congrès ESPOIR Oncologie avait besoin d'une solution robuste pour gérer un programme complexe, des abstracts scientifiques, et des sessions parallèles multiples. La gestion des données était particulièrement chronophage.
                </p>

                <h3 className="text-xl font-bold mb-4">La Solution Bluevista</h3>
                <p className="text-muted-foreground mb-6">
                  Nous avons implémenté notre Pack Premium/Médical avec accompagnement complet. Notre équipe a pris en charge l'intégration de toutes les données (programme, intervenants, abstracts), permettant à l'organisateur de se concentrer sur le contenu scientifique.
                </p>

                <h3 className="text-xl font-bold mb-4">Les Résultats</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">+50% d'utilisation</p>
                      <p className="text-sm text-muted-foreground">Adoption de l'app par les participants</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Users className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">98% de satisfaction</p>
                      <p className="text-sm text-muted-foreground">Évaluation post-congrès</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Leaf className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">-3.5 tonnes de papier</p>
                      <p className="text-sm text-muted-foreground">Impact écologique majeur</p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8 italic text-muted-foreground">
                  "Une solution clé en main qui nous a fait gagner un temps précieux. L'équipe Bluevista a géré tous les détails techniques, nous permettant de nous concentrer sur la qualité scientifique du congrès."
                  <p className="text-sm text-foreground font-semibold mt-2">— Pr. Martin, Directeur Scientifique</p>
                </blockquote>

                <Link href="/contact" className="btn-primary">
                  Découvrir Plus
                </Link>
              </div>
              <div>
                <div className="bg-primary/10 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Captures d'écran</p>
                    <p className="text-lg font-semibold text-primary">Congrès ESPOIR Oncologie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Ajouter Votre Succès à Notre Liste ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons transformer votre congrès.
            </p>
            <Link href="/contact" className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">
              Prendre Rendez-vous
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
