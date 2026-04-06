import { Link } from 'wouter';
import { CheckCircle2, Zap, Leaf, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGalleryPreview from '@/components/ImageGalleryPreview';
import { niceShoulderCourseGallery, congreEspoirGallery } from '@/data/galleryData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Votre Congrès, <span className="gradient-text">Notre Application</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transformez chaque événement en une expérience inoubliable pour vos participants. Simple, intuitive et personnalisable, notre application mobile est la solution clé en main pour des congrès zéro stress.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/offres" className="btn-primary text-center">
                    Découvrez nos Packs
                  </Link>
                  <Link href="/contact" className="btn-outline text-center">
                    Demander une Démo
                  </Link>
                </div>
              </div>
              <ImageGalleryPreview images={niceShoulderCourseGallery} maxImages={3} />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Pourquoi Choisir Bluevista ?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Simplicité */}
              <div className="bg-card rounded-xl p-8 card-hover">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Simplicité Radicale</h3>
                <p className="text-muted-foreground mb-4">
                  Votre application prête en 7 jours. Utilisez nos gabarits, envoyez-nous vos données, nous nous occupons du reste. Aucune complexité, aucun stress.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Mise en place rapide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Support complet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Zéro configuration</span>
                  </li>
                </ul>
              </div>

              {/* Expérience Participant */}
              <div className="bg-card rounded-xl p-8 card-hover">
                <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-secondary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expérience Participant</h3>
                <p className="text-muted-foreground mb-4">
                  Une interface intuitive conçue pour engager vos participants. Programme interactif, favoris, notifications en temps réel, sondages et questions en direct.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Programme personnalisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Notifications push</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Plan interactif</span>
                  </li>
                </ul>
              </div>

              {/* Éco-Responsable */}
              <div className="bg-card rounded-xl p-8 card-hover">
                <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Engagement Écologique</h3>
                <p className="text-muted-foreground mb-4">
                  Dites adieu au papier. Réduisez drastiquement votre empreinte écologique et offrez une image moderne à votre événement.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Zéro papier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Écologique</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Image responsable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Preview Section */}
        <section className="section-padding bg-card">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-4">Choisissez la Formule Qui Vous Ressemble</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Que vous organisiez un séminaire modeste ou un grand congrès médical international, nous avons le pack adapté à vos besoins et à votre budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pack Essentiel */}
              <div className="bg-background rounded-xl p-8 border-2 border-border hover:border-primary transition">
                <h3 className="text-2xl font-bold mb-2">Pack Essentiel</h3>
                <p className="text-muted-foreground mb-6">Pour les événements de 50 à 300 participants</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">950€</span>
                  <span className="text-muted-foreground ml-2">HT</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span>Programme complet / design personnalisé</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span>Fiches intervenants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span>Système de favoris</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span>Notifications push</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span>Plan du salon</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span>Application disponible 1 an</span>
                  </li>
                </ul>
                <Link href="/offres" className="btn-outline w-full text-center">
                  Découvrir le Pack Essentiel
                </Link>
              </div>

              {/* Pack Premium */}
              <div className="bg-background rounded-xl p-8 border-2 border-primary shadow-lg">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold">
                  Recommandé
                </div>
                <h3 className="text-2xl font-bold mb-2">Pack Premium</h3>
                <p className="text-muted-foreground mb-6">Pour les congrès de 300 à 1000+ participants</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">2 850€</span>
                  <span className="text-muted-foreground ml-2">HT</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-primary" />
                    <span>Tout du Pack Essentiel +</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-primary" />
                    <span>Accompagnement data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-primary" />
                    <span>Votes en direct</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-primary" />
                    <span>Fiches exposants détaillées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-primary" />
                    <span>Liens directs pour vos sponsors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-primary" />
                    <span>Statistiques post-évènement</span>
                  </li>
                </ul>
                <Link href="/offres" className="btn-primary w-full text-center">
                  Découvrir le Pack Premium
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Ils Nous Font Confiance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <p className="text-lg font-semibold mb-4">Nice Shoulder Course</p>
                <p className="text-muted-foreground mb-6">
                  "L'application Bluevista a transformé notre congrès. Nos participants adorent les notifications en temps réel et le système de vote."
                </p>
                <p className="text-sm text-muted-foreground">Dr. Dupont, Organisateur</p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <p className="text-lg font-semibold mb-4">Congrès ESPOIR Oncologie</p>
                <p className="text-muted-foreground mb-6">
                  "Une solution clé en main qui nous a fait gagner un temps précieux et donné de la visibilité à nos sponsors. L'équipe a géré tous les détails techniques."
                </p>
                <p className="text-sm text-muted-foreground">Pr. Martin, Directeur Scientifique</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Réinventer Votre Congrès ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contactez notre équipe pour une démonstration personnalisée et découvrez comment notre application peut simplifier l'organisation de votre congrès.
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
