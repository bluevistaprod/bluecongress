import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { Reveal, DEMO_PATH } from '@/components/Reveal';

interface FAQItem { question: string; answer: string; }
interface FAQCategory { title: string; items: FAQItem[]; }

const faqData: FAQCategory[] = [
  {
    title: "Généralités sur l'Application",
    items: [
      { question: "Quelles sont les fonctionnalités incluses dans l'application ?", answer: "Pulse Congress Standard inclut un programme complet, des fiches intervenants, un système de favoris, des notifications push, un plan du salon interactif et un design personnalisé. Pulse Congress Premium ajoute l'accompagnement data, les votes en direct, les fiches exposants détaillées, la gestion des abstracts et les statistiques post-événement." },
      { question: "L'application est-elle disponible sur iOS et Android ?", answer: "Oui, nos applications sont développées avec FlutterFlow et sont disponibles sur les deux plateformes (iOS et Android). Elles offrent une expérience utilisateur cohérente et optimisée sur tous les appareils." },
      { question: "Puis-je personnaliser le design de l'application ?", answer: "Absolument ! Nous intégrons votre logo, vos couleurs institutionnelles et votre branding dans l'application. Chaque application est personnalisée pour refléter l'identité de votre événement." },
      { question: "Combien de temps faut-il pour créer l'application ?", answer: "Avec notre approche clé en main, votre application est généralement prête en 48 heures après réception de vos données. Pour les projets plus complexes, nous pouvons vous proposer un délai adapté." },
    ],
  },
  {
    title: "Fonctionnement et Données",
    items: [
      { question: "Comment vous fournissons-nous les données du congrès ?", answer: "Vous pouvez nous envoyer vos données sous forme de fichiers Excel, PDF ou tout autre format structuré. Pour Pulse Congress Premium, notre équipe prend en charge l'intégration complète des données. Pour Pulse Congress Standard, nous vous guidons dans le processus de structuration." },
      { question: "Quels formats de fichiers acceptez-vous ?", answer: "Nous acceptons les formats courants : Excel (.xlsx, .xls), PDF, CSV, et même des fichiers Word. Si vous avez un format spécifique, n'hésitez pas à nous contacter pour discuter des possibilités." },
      { question: "Comment les mises à jour sont-elles gérées pendant l'événement ?", answer: "Pendant l'événement, vous pouvez nous signaler les changements (modifications de programme, annulations, etc.) et nous les intégrons rapidement. Les participants reçoivent des notifications push pour les mises à jour importantes." },
      { question: "L'application fonctionne-t-elle hors ligne ?", answer: "Oui, l'application télécharge les données essentielles lors du premier lancement, permettant aux participants d'accéder au programme même sans connexion Internet. Les notifications push et les votes en direct nécessitent une connexion." },
    ],
  },
  {
    title: "Tarifs et Offres",
    items: [
      { question: "Quelle est la différence entre Pulse Congress Standard et Pulse Congress Premium ?", answer: "Pulse Congress Standard inclut les fonctionnalités de base pour un événement réussi. Pulse Congress Premium ajoute l'accompagnement complet de nos experts pour l'intégration des données, les votes en direct, et les statistiques détaillées post-événement. Les tarifs sont adaptés à votre événement et présentés lors de la démonstration." },
      { question: "Y a-t-il des coûts cachés ?", answer: "Non, nos tarifs sont transparents et tout-inclus. Chaque proposition est adaptée à votre événement et couvre tous les services mentionnés. Pas de frais supplémentaires, pas de surprises." },
      { question: "Proposez-vous des réductions pour les événements récurrents ?", answer: "Oui, nous proposons des tarifs préférentiels pour les clients qui organisent plusieurs événements par an. Contactez-nous pour discuter d'un tarif adapté à votre situation." },
      { question: "Que se passe-t-il après l'événement ? L'application reste-t-elle active ?", answer: "L'application reste active après l'événement et peut servir d'archive pour les participants. Vous pouvez la garder active indéfiniment ou la retirer de l'App Store selon vos besoins." },
    ],
  },
  {
    title: "Support et Accompagnement",
    items: [
      { question: "Quel type de support offrez-vous avant, pendant et après l'événement ?", answer: "Nous offrons un support complet : assistance avant l'événement pour la préparation, support en direct pendant l'événement pour résoudre les problèmes, et assistance post-événement pour les statistiques et les améliorations futures." },
      { question: "Pouvons-nous avoir une démo de l'application ?", answer: "Bien sûr ! Nous proposons des démonstrations personnalisées de nos applications existantes (Nice Shoulder Course, Congrès ESPOIR Oncologie) pour que vous puissiez voir exactement ce que nous offrons. Contactez-nous pour planifier une démo." },
      { question: "Qui contacte-t-on en cas de problème technique pendant l'événement ?", answer: "Vous aurez un point de contact dédié chez Bluevista Production qui sera disponible pendant votre événement. Nous vous fournirons les coordonnées directes et les numéros d'urgence." },
      { question: "Offrez-vous une formation pour utiliser l'application ?", answer: "Oui, nous proposons une formation pour votre équipe organisatrice et, si nécessaire, pour les participants. Nous créons aussi des guides d'utilisation et des tutoriels vidéo." },
    ],
  },
];

function FAQAccordion({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="mb-12">
      <h3 className="font-display text-xl md:text-2xl font-bold mb-6 text-[#00E5C8]">{category.title}</h3>
      <div className="space-y-3">
        {category.items.map((item, index) => (
          <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors text-left"
            >
              <span className="font-semibold text-slate-100">{item.question}</span>
              <ChevronDown size={22} className={`shrink-0 text-[#00C4B4] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 -mt-1">
                <p className="text-slate-400 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-[#071A2F] text-white">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-20%] left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container">
            <Reveal>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-6 leading-[1.05]">
                Questions fréquentes des organisateurs de congrès
              </h1>
              <p className="text-center text-slate-300 text-lg max-w-2xl mx-auto">
                Trouvez les réponses à vos questions sur notre application mobile pour congrès.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            {faqData.map((category, index) => (
              <Reveal key={index}>
                <FAQAccordion category={category} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="container text-center">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Votre question n'est pas ici ?</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Réservez une démonstration : notre équipe est là pour répondre à toutes vos questions.
              </p>
              <div className="flex justify-center">
                <Link href={DEMO_PATH} className="group inline-flex items-center gap-2 bg-[#00E5C8] text-[#0A2540] px-7 py-4 rounded-xl font-semibold shadow-[0_8px_30px_rgba(0,229,200,0.35)] hover:shadow-[0_12px_40px_rgba(0,229,200,0.55)] hover:-translate-y-0.5 transition-all duration-300">
                  Réserver une démonstration
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
