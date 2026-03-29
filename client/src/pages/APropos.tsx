import { Link } from 'wouter';
import { Award, Users, Zap, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function APropos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6">À Propos de Bluevista</h1>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              L'expertise audiovisuelle au service de vos événements depuis 2004.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">Notre Histoire</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">2004 - La Fondation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bluevista Production a été fondée en 2004 avec une vision claire : apporter l'excellence audiovisuelle à l'événementiel. Depuis nos débuts, nous nous sommes concentrés sur la production de contenu de haute qualité, les aftermovies et la capture d'événements pour les plus grands congrès et événements professionnels.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">2010-2019 - L'Expansion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Au cours de la décennie suivante, nous avons étendu nos services au-delà de la simple production audiovisuelle. Nous avons commencé à intégrer des solutions technologiques pour améliorer l'expérience des participants. Notre expertise s'est renforcée dans le secteur médical et scientifique, où nous avons développé une compréhension profonde des besoins spécifiques des congrès.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">2020-2024 - L'Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reconnaissant le besoin croissant d'applications mobiles pour les événements, nous avons développé notre solution propriétaire basée sur FlutterFlow. Cette plateforme combine notre expertise audiovisuelle avec la technologie mobile moderne, permettant aux organisateurs de créer des applications professionnelles rapidement et efficacement.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Aujourd'hui - L'Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bluevista Production est aujourd'hui un acteur reconnu du secteur événementiel, avec une équipe de 5 employés et un portefeuille de clients prestigieux. Nous continuons à innover et à améliorer nos solutions pour offrir la meilleure expérience possible aux organisateurs et aux participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-card">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Nos Valeurs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-xl p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Nous repoussons constamment les limites pour offrir des solutions avant-gardistes.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Fiabilité</h3>
                <p className="text-muted-foreground">
                  Nos solutions sont testées et éprouvées par des milliers de participants chaque année.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Service Client</h3>
                <p className="text-muted-foreground">
                  Votre satisfaction est notre priorité. Nous sommes là pour vous à chaque étape.
                </p>
              </div>

              <div className="bg-background rounded-xl p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Responsabilité</h3>
                <p className="text-muted-foreground">
                  Nous nous engageons pour un événementiel plus écologique et durable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-4">Notre Équipe</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Une équipe passionnée et expérimentée dédiée à l'excellence de vos événements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 text-center">
                <div className="bg-primary/10 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">GZ</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Giz</h3>
                <p className="text-accent font-semibold mb-4">Président & Fondateur</p>
                <p className="text-muted-foreground text-sm">
                  Audiovisuel, pré-projet, réalisation vidéo et gestion administrative. OPL long courrier à Air France.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 text-center">
                <div className="bg-secondary/10 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-secondary">AS</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Associé</h3>
                <p className="text-accent font-semibold mb-4">Responsable Commercial & Événementiel</p>
                <p className="text-muted-foreground text-sm">
                  Expertise en événementiel et développement commercial. Présent à temps plein chez Bluevista.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 text-center">
                <div className="bg-accent/10 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent">EQ</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Équipe</h3>
                <p className="text-accent font-semibold mb-4">5 Employés Talentueux</p>
                <p className="text-muted-foreground text-sm">
                  Production, montage, infographie et support client. Tous passionnés par l'excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-padding bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Notre Vision</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Simplifier l'organisation des congrès et enrichir l'expérience des participants grâce à des solutions mobiles intuitives et performantes, tout en respectant l'environnement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous croyons que la technologie doit servir l'humain, pas le contraire. Nos applications sont conçues pour être simples à utiliser, efficaces et accessibles à tous les organisateurs, quelle que soit leur taille ou leur budget.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Découvrez Nos Réalisations</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contactez-nous pour discuter de votre prochain événement et découvrir comment nous pouvons vous aider.
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
