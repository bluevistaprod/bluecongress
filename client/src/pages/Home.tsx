import { CheckCircle2, Calendar, Users, MessageSquare, FileText, BarChart3, Award, Lock, Zap, Headphones } from 'lucide-react';
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
        {/* ===== HERO SECTION ===== */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] via-[#003087] to-[#0A2540] text-white relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C4B4]/10 rounded-full blur-3xl -z-0"></div>
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#00C4B4]/20 border border-[#00C4B4]/50 rounded-full px-4 py-2 mb-6">
                  <span className="text-[#00E5C8] text-sm font-semibold">Déjà utilisée sur plusieurs congrès médicaux et scientifiques</span>
                </div>
                
                <div className="mb-8">
                  <img 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663405351247/6nnyUPh6Mg74pJbVKFbCeZ/pulse_congress_logo_hero_transparent-SJAKRFsEnEci3TbqcJhLD7.png" 
                    alt="Pulse Congress" 
                    className="h-48 md:h-56 w-auto mb-8"
                  />
                </div>
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                    La solution digitale clé en main pour les congrès médicaux et scientifiques
                  </h1>
                </div>
                
                <p className="text-lg text-gray-100 mb-10 leading-relaxed max-w-xl">
                  Simplifiez l'organisation de votre congrès, améliorez l'expérience des participants et centralisez toutes les informations de votre événement dans une plateforme moderne et intuitive.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-[#00E5C8] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00E5C8]/90 transition text-center shadow-lg hover:shadow-xl">
                    Réserver une démonstration
                  </Link>
                  <Link href="/cas-clients" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-center">
                    Voir les cas clients
                  </Link>
                </div>
              </div>
              
              {/* Mockups */}
              <div className="flex justify-center">
                <ImageGalleryPreview images={niceShoulderCourseGallery} maxImages={3} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRUST BAND SECTION ===== */}
        <section className="bg-[#0A2540] text-white py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex items-center gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="font-semibold">Déploiement rapide</p>
                  <p className="text-sm text-gray-300">En quelques jours seulement</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="font-semibold">Conforme RGPD</p>
                  <p className="text-sm text-gray-300">Données sécurisées</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="font-semibold">Support humain</p>
                  <p className="text-sm text-gray-300">Disponible pour vous</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">✓</div>
                <div>
                  <p className="font-semibold">Expertise congrès médicaux</p>
                  <p className="text-sm text-gray-300">Spécialistes du secteur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROBLEMS SECTION ===== */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#0A2540]">
              Vous organisez un congrès médical ? Vous connaissez ces frustrations…
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Des défis complexes que nous avons résolus pour d'autres organisateurs comme vous.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem 1 */}
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#00C4B4]">
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Changements de dernière minute</h3>
                <p className="text-gray-700">
                  Les modifications de programme, les annulations d'orateurs, les changements de salles... Comment informer vos 500 participants en temps réel sans chaos ?
                </p>
              </div>
              
              {/* Problem 2 */}
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#00C4B4]">
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Faible engagement des participants</h3>
                <p className="text-gray-700">
                  Les participants consultent le programme papier une fois et l'oublient. Comment créer une vraie interaction et mesurer l'engagement ?
                </p>
              </div>
              
              {/* Problem 3 */}
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#00C4B4]">
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Gestion complexe des abstracts et e-posters</h3>
                <p className="text-gray-700">
                  Centraliser les abstracts, les e-posters, les CV des orateurs... sans plateforme dédiée, c'est une usine à gaz administrative.
                </p>
              </div>
              
              {/* Problem 4 */}
              <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#00C4B4]">
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Impossible de mesurer l'impact réel</h3>
                <p className="text-gray-700">
                  Combien de participants ont assisté à chaque session ? Quel est le taux de satisfaction ? Quels sont les orateurs les plus appréciés ?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SOLUTION SECTION ===== */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#0A2540]">
              Tout ce dont votre congrès a besoin
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Pulse Congress regroupe l'ensemble des outils nécessaires au bon déroulement d'un congrès scientifique ou médical.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Calendar className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Agenda Intelligent</h3>
                <p className="text-gray-700">
                  Planning dynamique avec favoris personnalisés, notifications en temps réel et gestion des changements de dernière minute.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Orateurs & Programme Scientifique</h3>
                <p className="text-gray-700">
                  Fiches complètes des intervenants, CV, photos, affiliations. Tout ce qu'il faut pour valoriser vos experts.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Votes & Interactions en Live</h3>
                <p className="text-gray-700">
                  Sondages, votes en direct, questions des participants. Engagez votre audience et collectez du feedback en temps réel.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Abstracts & E-Posters</h3>
                <p className="text-gray-700">
                  Plateforme centralisée pour les abstracts, e-posters et communications. Valorisez votre contenu scientifique.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Award className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Networking & Participants</h3>
                <p className="text-gray-700">
                  Système de favoris et facilitation des rencontres entre experts et visiteurs pour enrichir l'expérience.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#0A2540]">Analytics & Rapports</h3>
                <p className="text-gray-700">
                  Statistiques détaillées post-événement pour mesurer l'impact et optimiser les futures éditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS SECTION ===== */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#0A2540]">
              De votre programme à une application prête à l'emploi
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Nous adaptons Pulse Congress à votre événement sans projet informatique complexe ni développement spécifique.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00E5C8] text-[#0A2540] font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Vous nous transmettez votre programme et vos contenus</h3>
                    <p className="text-gray-700">Envoyez-nous votre programme, les informations sur les orateurs, les abstracts et tout contenu spécifique.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00E5C8] text-[#0A2540] font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Nous configurons votre application</h3>
                    <p className="text-gray-700">Notre équipe personnalise l'application avec votre branding, vos couleurs et votre contenu.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00E5C8] text-[#0A2540] font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Nous publions votre application</h3>
                    <p className="text-gray-700">L'application est publiée sur l'App Store et Google Play, prête à être téléchargée.</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00E5C8] text-[#0A2540] font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Vos participants la téléchargent</h3>
                    <p className="text-gray-700">Les participants reçoivent un lien ou QR code pour télécharger l'application et accéder à tous les contenus.</p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#00E5C8] text-[#0A2540] font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Vous piloter votre événement sereinement</h3>
                    <p className="text-gray-700">Gérez les mises à jour en temps réel, suivez l'engagement et accédez aux statistiques en direct.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== OFFERS SECTION ===== */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4 text-[#0A2540]">
                Une solution adaptée à chaque congrès
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Chaque événement possède ses propres contraintes, son programme scientifique et ses objectifs. Pulse Congress s'adapte à votre contexte et à vos besoins.
              </p>
              <Link href="/offres" className="inline-block bg-[#00C4B4] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition shadow-lg hover:shadow-xl">
                Découvrir les offres
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CASE STUDIES SECTION ===== */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#0A2540]">
              Nos Réalisations
            </h2>
            
            <div className="space-y-20">
              {/* Nice Shoulder Course */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-[#0A2540]">Nice Shoulder Course 2024</h3>
                    
                    {/* Chiffres clés */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-gradient-to-br from-[#00C4B4]/10 to-[#00C4B4]/5 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-[#00C4B4]">800+</p>
                        <p className="text-sm text-gray-600 mt-2">Participants</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#00C4B4]/10 to-[#00C4B4]/5 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-[#00C4B4]">40+</p>
                        <p className="text-sm text-gray-600 mt-2">Sessions</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#00C4B4]/10 to-[#00C4B4]/5 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-[#00C4B4]">3</p>
                        <p className="text-sm text-gray-600 mt-2">Jours</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      Un des congrès majeurs de la chirurgie de l'épaule en Europe.
                    </p>
                    <blockquote className="border-l-4 border-[#00C4B4] pl-6 mb-8">
                      <p className="text-lg text-gray-700 italic mb-3">
                        "Une solution clé en main qui nous a fait gagner un temps précieux et donné de la visibilité à nos sponsors. L'équipe a géré tous les détails techniques."
                      </p>
                      <p className="font-semibold text-[#0A2540]">Organisateur de congrès médical</p>
                    </blockquote>
                  </div>
                  <ImageGalleryPreview images={niceShoulderCourseGallery} maxImages={3} />
                </div>
                
                {/* Résultats */}
                <div className="bg-gradient-to-r from-[#0A2540] to-[#003087] rounded-lg p-6 text-white">
                  <h4 className="text-lg font-bold mb-4">✓ Résultats Obtenus</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[#00C4B4] font-bold text-lg">✓</span>
                      <p>Adoption élevée par les participants</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#00C4B4] font-bold text-lg">✓</span>
                      <p>Réduction du support papier</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#00C4B4] font-bold text-lg">✓</span>
                      <p>Visibilité renforcée pour les sponsors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ESPOIR Oncologie */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-6 text-[#0A2540]">Congrès ESPOIR Oncologie</h3>
                    
                    {/* Chiffres clés */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-gradient-to-br from-[#00C4B4]/10 to-[#00C4B4]/5 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-[#00C4B4]">600+</p>
                        <p className="text-sm text-gray-600 mt-2">Participants</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#00C4B4]/10 to-[#00C4B4]/5 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-[#00C4B4]">15+</p>
                        <p className="text-sm text-gray-600 mt-2">Sessions</p>
                      </div>
                      <div className="bg-gradient-to-br from-[#00C4B4]/10 to-[#00C4B4]/5 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-[#00C4B4]">2</p>
                        <p className="text-sm text-gray-600 mt-2">Jours</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">
                      Un congrès médical spécialisé en oncologie avec un focus sur les dernières avancées thérapeutiques.
                    </p>
                    <blockquote className="border-l-4 border-[#00C4B4] pl-6 mb-8">
                      <p className="text-lg text-gray-700 italic mb-3">
                        "L'application Pulse Congress a transformé notre congrès. Nos participants adorent les notifications en temps réel et le système de vote."
                      </p>
                      <p className="font-semibold text-[#0A2540]">Coordinateur d'événement</p>
                    </blockquote>
                  </div>
                  <ImageGalleryPreview images={congreEspoirGallery} maxImages={3} />
                </div>
                
                {/* Résultats */}
                <div className="bg-gradient-to-r from-[#0A2540] to-[#003087] rounded-lg p-6 text-white">
                  <h4 className="text-lg font-bold mb-4">✓ Résultats Obtenus</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[#00C4B4] font-bold text-lg">✓</span>
                      <p>Engagement accru des participants</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#00C4B4] font-bold text-lg">✓</span>
                      <p>Feedback en temps réel capturé</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#00C4B4] font-bold text-lg">✓</span>
                      <p>Taux de satisfaction élevé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY BLUECONGRESS SECTION ===== */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#0A2540]">
              Pourquoi Pulse Congress
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Bénéfice 1 */}
              <div className="text-center">
                <div className="bg-[#00C4B4]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-[#00C4B4]" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#0A2540]">Conçu pour les congrès médicaux et scientifiques</h3>
                <p className="text-gray-700">
                  Une solution pensée pour les contraintes spécifiques des congrès scientifiques, médicaux et associatifs.
                </p>
              </div>
              
              {/* Bénéfice 2 */}
              <div className="text-center">
                <div className="bg-[#00C4B4]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-[#00C4B4]" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#0A2540]">Déploiement rapide</h3>
                <p className="text-gray-700">
                  Votre application peut être prête en quelques jours après réception des contenus.
                </p>
              </div>
              
              {/* Bénéfice 3 */}
              <div className="text-center">
                <div className="bg-[#00C4B4]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="text-[#00C4B4]" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#0A2540]">Aucun développement spécifique</h3>
                <p className="text-gray-700">
                  Nous adaptons une plateforme éprouvée. Pas de projet informatique complexe.
                </p>
              </div>
              
              {/* Bénéfice 4 */}
              <div className="text-center">
                <div className="bg-[#00C4B4]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="text-[#00C4B4]" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#0A2540]">Accompagnement humain</h3>
                <p className="text-gray-700">
                  Une équipe vous accompagne avant, pendant et après votre événement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA SECTION ===== */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] to-[#003087] text-white relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#00C4B4]/10 rounded-full blur-3xl -z-0"></div>
          
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Voyons ensemble comment simplifier votre prochain congrès
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Réservez une démonstration personnalisée et découvrez comment Pulse Congress peut s'adapter à votre événement.
            </p>
            <Link href="/contact" className="inline-block bg-[#00C4B4] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition shadow-lg hover:shadow-xl">
              Réserver une démonstration
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
