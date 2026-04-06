import { CheckCircle2, Zap, Leaf, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGalleryPreview from '@/components/ImageGalleryPreview';
import { niceShoulderCourseGallery, congreEspoirGallery } from '@/data/galleryData';
import { trpc } from '@/lib/trpc';
import { Link } from 'wouter';

export default function Home() {
  const { data: offers, isLoading } = trpc.offers.getAll.useQuery();

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

        {/* Congress Visuals Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/congress_hero_audience_e87446c4.png" 
              alt="Medical Congress Audience" 
              className="w-full rounded-xl shadow-lg mb-16 object-cover h-96"
            />
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
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expérience Participant</h3>
                <p className="text-muted-foreground mb-4">
                  Une interface intuitive conçue pour engager vos participants. Programme interactif, favoris, notifications en temps réel, sondages et questions en direct.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Interface moderne</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Engagement accru</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-accent" />
                    <span>Fonctionnalités avancées</span>
                  </li>
                </ul>
              </div>

              {/* Écologie */}
              <div className="bg-card rounded-xl p-8 card-hover">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Responsabilité</h3>
                <p className="text-muted-foreground mb-4">
                  Réduisez votre empreinte carbone en éliminant les documents papier. Une solution numérique complète et respectueuse de l'environnement.
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
              {isLoading ? (
                <div className="col-span-2 text-center text-muted-foreground">Chargement des offres...</div>
              ) : (
                offers?.map((offer: any) => (
                  <div
                    key={offer.id}
                    className={`bg-background rounded-xl p-8 border-2 transition ${
                      offer.recommended ? 'border-primary shadow-lg' : 'border-border hover:border-primary'
                    }`}
                  >
                    {offer.badge && (
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full inline-block mb-4 text-sm font-semibold">
                        {offer.badge}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{offer.name}</h3>
                    <p className="text-muted-foreground mb-6">{offer.targetAudience}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{offer.price}€</span>
                      <span className="text-muted-foreground ml-2">HT</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {offer.features?.map((feature: any) => (
                        <li key={feature.id} className="flex items-center gap-2">
                          <CheckCircle2 size={20} className={offer.recommended ? 'text-primary' : 'text-accent'} />
                          <span>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/offres" className={`w-full text-center block py-2 px-4 rounded-lg font-semibold transition ${
                      offer.recommended ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border border-primary text-primary hover:bg-primary/10'
                    }`}>
                      Découvrir {offer.name}
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Features with Visuals Section */}
        <section className="section-padding bg-card">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Fonctionnalités Clés</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Programme Interactif</h4>
                      <p className="text-muted-foreground">Affichage dynamique des sessions avec favoris personnalisés</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Notifications en Temps Réel</h4>
                      <p className="text-muted-foreground">Alertes instantanées pour les changements de programme</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Engagement Accru</h4>
                      <p className="text-muted-foreground">Sondages, votes et questions en direct avec les participants</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Statistiques Détaillées</h4>
                      <p className="text-muted-foreground">Rapports post-événement pour mesurer le succès</p>
                    </div>
                  </li>
                </ul>
              </div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/congress_networking_2a89e37f.png" 
                alt="Networking" 
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/congress_speaker_866c82f3.png" 
                alt="Speaker" 
                className="w-full rounded-xl shadow-lg"
              />
              <div>
                <h2 className="text-4xl font-bold mb-6">Optimisé pour les Événements</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Design Personnalisé</h4>
                      <p className="text-muted-foreground">Intégration complète de votre branding et identité visuelle</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Fiches Détaillées</h4>
                      <p className="text-muted-foreground">Profils complets des intervenants et exposants</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Plan Interactif</h4>
                      <p className="text-muted-foreground">Navigation facile dans les salles et espaces d'exposition</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Support Complet</h4>
                      <p className="text-muted-foreground">Équipe dédiée pour l'intégration et la mise en place</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Témoignages de Nos Clients</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <p className="text-lg mb-6 italic">
                  "Une solution clé en main qui nous a fait gagner un temps précieux et donné de la visibilité à nos sponsors. L'équipe a géré tous les détails techniques."
                </p>
                <p className="font-semibold">Nice Shoulder Course 2024</p>
                <p className="text-muted-foreground">Organisateur de congrès médical</p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <p className="text-lg mb-6 italic">
                  "L'application Bluevista a transformé notre congrès. Nos participants adorent les notifications en temps réel et le système de vote."
                </p>
                <p className="font-semibold">Congrès ESPOIR Oncologie</p>
                <p className="text-muted-foreground">Coordinateur d'événement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-card">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Nos Réalisations</h2>
            
            <div className="space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-8">Nice Shoulder Course 2024</h3>
                <ImageGalleryPreview images={niceShoulderCourseGallery} maxImages={3} />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8">Congrès ESPOIR Oncologie</h3>
                <ImageGalleryPreview images={congreEspoirGallery} maxImages={3} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Congrès ?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Rejoignez les organisateurs qui font confiance à Bluevista pour créer des expériences mémorables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/offres" className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition">
                Voir nos Offres
              </Link>
              <Link href="/contact" className="border-2 border-current px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition">
                Demander une Démo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
