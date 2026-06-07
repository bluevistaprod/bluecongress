import { Users, TrendingUp, Leaf, Zap, Award, MessageSquare, BarChart3, Clock } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGalleryMobile from '@/components/ImageGalleryMobile';
import { niceShoulderCourseGallery, congreEspoirGallery } from '@/data/galleryData';

export default function CasClients() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] via-[#003087] to-[#0A2540]">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6 text-white">
              Des congrès réels. Des résultats mesurables.
            </h1>
            <p className="text-center text-gray-200 text-xl max-w-3xl mx-auto">
              Découvrez comment des organisateurs de congrès médicaux et scientifiques utilisent Pulse Congress pour améliorer l'expérience des participants, simplifier l'organisation et obtenir des données exploitables.
            </p>
          </div>
        </section>

        {/* Trust Bar Section */}
        <section className="section-padding bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-[#00C4B4]">20+</p>
                <p className="text-sm text-gray-600 font-semibold">années d'expérience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00C4B4]">100+</p>
                <p className="text-sm text-gray-600 font-semibold">événements accompagnés</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00C4B4]">10 000+</p>
                <p className="text-sm text-gray-600 font-semibold">participants utilisateurs</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#0A2540]">⚡</p>
                <p className="text-sm text-gray-600 font-semibold">Déploiement en quelques jours</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#0A2540]">🔒</p>
                <p className="text-sm text-gray-600 font-semibold">Conforme RGPD</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#0A2540]">👥</p>
                <p className="text-sm text-gray-600 font-semibold">Support humain dédié</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="section-padding bg-gray-50 border-b border-gray-200">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#0A2540]">Ils nous font confiance</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Placeholder logos in monochrome gray */}
              <div className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Client 1</span>
              </div>
              <div className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Client 2</span>
              </div>
              <div className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Client 3</span>
              </div>
              <div className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Client 4</span>
              </div>
              <div className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-semibold text-sm">Client 5</span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 1: Nice Shoulder Course */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="w-full max-w-sm">
                  <ImageGalleryMobile images={niceShoulderCourseGallery} />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-[#00C4B4] font-semibold mb-2 uppercase tracking-wide">Étude de Cas</p>
                <h2 className="text-4xl font-bold mb-2 text-[#0A2540]">Nice Shoulder Course 2024</h2>
                <p className="text-gray-600 mb-8">
                  <span className="font-semibold text-[#0A2540]">Secteur :</span> Médical - Orthopédie
                </p>
                
                {/* KPI Section - Most Prominent */}
                <div className="bg-gradient-to-br from-[#00C4B4]/5 to-[#00C4B4]/10 rounded-xl p-8 mb-8 border border-[#00C4B4]/20">
                  <p className="text-sm font-semibold text-[#0A2540] mb-6 uppercase tracking-wide">Résultats Obtenus</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-[#00C4B4] mb-2">+35%</p>
                      <p className="text-sm font-semibold text-[#0A2540]">d'engagement</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-[#00C4B4] mb-2">95%</p>
                      <p className="text-sm font-semibold text-[#0A2540]">de satisfaction</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-[#00C4B4] mb-2">-2T</p>
                      <p className="text-sm font-semibold text-[#0A2540]">de papier</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#0A2540]">Le Défi</h3>
                <p className="text-gray-600 mb-6">
                  L'organisateur du Nice Shoulder Course faisait face à des défis majeurs : gestion manuelle du programme papier, difficulté à informer les participants en temps réel des changements de dernière minute, et manque d'interactivité pour engager les participants.
                </p>

                <h3 className="text-xl font-bold mb-4 text-[#0A2540]">La Solution Pulse Congress</h3>
                <p className="text-gray-600 mb-8">
                  Nous avons développé une application mobile personnalisée avec un programme interactif, un système de favoris permettant aux participants de composer leur propre agenda, et des notifications push pour les mises à jour en temps réel.
                </p>

                <blockquote className="border-l-4 border-[#00C4B4] pl-6 py-4 mb-8 italic text-gray-600">
                  "L'application Pulse Congress a transformé notre congrès. Nos participants adorent la facilité d'accès au programme et les notifications en temps réel. C'est devenu un incontournable !"
                  <p className="text-sm text-[#0A2540] font-semibold mt-2">— Dr. Dupont, Organisateur</p>
                </blockquote>

                <Link href="/contact" className="inline-block bg-[#00C4B4] text-[#0A2540] px-6 py-3 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition">
                  Demander une démo similaire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 2: Congrès ESPOIR */}
        <section className="section-padding bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#00C4B4] font-semibold mb-2 uppercase tracking-wide">Étude de Cas</p>
                <h2 className="text-4xl font-bold mb-2 text-[#0A2540]">Congrès ESPOIR Oncologie</h2>
                <p className="text-gray-600 mb-8">
                  <span className="font-semibold text-[#0A2540]">Secteur :</span> Médical - Oncologie
                </p>
                
                {/* KPI Section - Most Prominent */}
                <div className="bg-gradient-to-br from-[#0A2540]/5 to-[#0A2540]/10 rounded-xl p-8 mb-8 border border-[#0A2540]/20">
                  <p className="text-sm font-semibold text-[#0A2540] mb-6 uppercase tracking-wide">Résultats Obtenus</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-[#0A2540] mb-2">+50%</p>
                      <p className="text-sm font-semibold text-[#0A2540]">d'utilisation</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-[#0A2540] mb-2">98%</p>
                      <p className="text-sm font-semibold text-[#0A2540]">de satisfaction</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-[#0A2540] mb-2">-3.5T</p>
                      <p className="text-sm font-semibold text-[#0A2540]">de papier</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-[#0A2540]">Le Défi</h3>
                <p className="text-gray-600 mb-6">
                  Avec plus de 800 participants, le Congrès ESPOIR Oncologie avait besoin d'une solution robuste pour gérer un programme complexe, des abstracts scientifiques, et des sessions parallèles multiples. La gestion des données était particulièrement chronophage.
                </p>

                <h3 className="text-xl font-bold mb-4 text-[#0A2540]">La Solution Pulse Congress</h3>
                <p className="text-gray-600 mb-8">
                  Nous avons implémenté notre Pack Premium/Médical avec accompagnement complet. Notre équipe a pris en charge l'intégration de toutes les données (programme, intervenants, abstracts), permettant à l'organisateur de se concentrer sur le contenu scientifique.
                </p>

                <blockquote className="border-l-4 border-[#0A2540] pl-6 py-4 mb-8 italic text-gray-600">
                  "Une solution clé en main qui nous a fait gagner un temps précieux. L'équipe Pulse Congress a géré tous les détails techniques, nous permettant de nous concentrer sur la qualité scientifique du congrès."
                  <p className="text-sm text-[#0A2540] font-semibold mt-2">— Pr. Martin, Directeur Scientifique</p>
                </blockquote>

                <Link href="/contact" className="inline-block bg-[#00C4B4] text-[#0A2540] px-6 py-3 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition">
                  Demander une démo similaire
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  <ImageGalleryMobile images={congreEspoirGallery} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Pulse Congress Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#0A2540]">
              Pourquoi les organisateurs choisissent Pulse Congress ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Déploiement rapide</h3>
                <p className="text-gray-600">
                  Application disponible en quelques jours sans développement spécifique.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Notifications temps réel</h3>
                <p className="text-gray-600">
                  Communication instantanée avec les participants.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Programme interactif</h3>
                <p className="text-gray-600">
                  Agenda personnalisé et favoris pour chaque participant.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Votes et interactions</h3>
                <p className="text-gray-600">
                  Engagement accru pendant les sessions.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Statistiques post-événement</h3>
                <p className="text-gray-600">
                  Mesure de l'impact et du ROI de votre événement.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="bg-[#00C4B4]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-[#00C4B4]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Support humain</h3>
                <p className="text-gray-600">
                  Accompagnement avant, pendant et après le congrès.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-[#0A2540] to-[#003087] text-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Voyons si Pulse Congress est adapté à votre prochain congrès.</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Demandez une démonstration personnalisée et découvrez en moins de 30 minutes comment simplifier l'organisation de votre événement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-[#00C4B4] text-[#0A2540] px-8 py-4 rounded-lg font-semibold hover:bg-[#00C4B4]/90 transition">
                Demander une démonstration
              </Link>
              <Link href="/contact" className="inline-block bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition border border-white/50">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
