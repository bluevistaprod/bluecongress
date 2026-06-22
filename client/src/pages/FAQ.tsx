import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Généralités sur l'Application",
    items: [
      {
        question: "Quelles sont les fonctionnalités incluses dans l'application ?",
        answer: "Pulse Congress Standard inclut un programme complet, des fiches intervenants, un système de favoris, des notifications push, un plan du salon interactif et un design personnalisé. Pulse Congress Premium ajoute l'accompagnement data, les votes en direct, les fiches exposants détaillées, la gestion des abstracts et les statistiques post-événement."
      },
      {
        question: "L'application est-elle disponible sur iOS et Android ?",
        answer: "Oui, nos applications sont développées avec FlutterFlow et sont disponibles sur les deux plateformes (iOS et Android). Elles offrent une expérience utilisateur cohérente et optimisée sur tous les appareils."
      },
      {
        question: "Puis-je personnaliser le design de l'application ?",
        answer: "Absolument ! Nous intégrons votre logo, vos couleurs institutionnelles et votre branding dans l'application. Chaque application est personnalisée pour refléter l'identité de votre événement."
      },
      {
        question: "Combien de temps faut-il pour créer l'application ?",
        answer: "Avec notre approche clé en main, votre application est généralement prête en 48 heures après réception de vos données. Pour les projets plus complexes, nous pouvons vous proposer un délai adapté."
      }
    ]
  },
  {
    title: "Fonctionnement et Données",
    items: [
      {
        question: "Comment vous fournissons-nous les données du congrès ?",
        answer: "Vous pouvez nous envoyer vos données sous forme de fichiers Excel, PDF ou tout autre format structuré. Pour Pulse Congress Premium, notre équipe prend en charge l'intégration complète des données. Pour Pulse Congress Standard, nous vous guidons dans le processus de structuration."
      },
      {
        question: "Quels formats de fichiers acceptez-vous ?",
        answer: "Nous acceptons les formats courants : Excel (.xlsx, .xls), PDF, CSV, et même des fichiers Word. Si vous avez un format spécifique, n'hésitez pas à nous contacter pour discuter des possibilités."
      },
      {
        question: "Comment les mises à jour sont-elles gérées pendant l'événement ?",
        answer: "Pendant l'événement, vous pouvez nous signaler les changements (modifications de programme, annulations, etc.) et nous les intégrons rapidement. Les participants reçoivent des notifications push pour les mises à jour importantes."
      },
      {
        question: "L'application fonctionne-t-elle hors ligne ?",
        answer: "Oui, l'application télécharge les données essentielles lors du premier lancement, permettant aux participants d'accéder au programme même sans connexion Internet. Les notifications push et les votes en direct nécessitent une connexion."
      }
    ]
  },
  {
    title: "Tarifs et Offres",
    items: [
      {
        question: "Quelle est la différence entre Pulse Congress Standard et Pulse Congress Premium ?",
        answer: "Pulse Congress Standard inclut les fonctionnalités de base pour un événement réussi. Pulse Congress Premium ajoute l'accompagnement complet de nos experts pour l'intégration des données, les votes en direct, et les statistiques détaillées post-événement. Les tarifs sont adaptés à votre événement et présentés lors de la démonstration."
      },
      {
        question: "Y a-t-il des coûts cachés ?",
        answer: "Non, nos tarifs sont transparents et tout-inclus. Chaque proposition est adaptée à votre événement et couvre tous les services mentionnés. Pas de frais supplémentaires, pas de surprises."
      },
      {
        question: "Proposez-vous des réductions pour les événements récurrents ?",
        answer: "Oui, nous proposons des tarifs préférentiels pour les clients qui organisent plusieurs événements par an. Contactez-nous pour discuter d'un tarif adapté à votre situation."
      },
      {
        question: "Que se passe-t-il après l'événement ? L'application reste-t-elle active ?",
        answer: "L'application reste active après l'événement et peut servir d'archive pour les participants. Vous pouvez la garder active indéfiniment ou la retirer de l'App Store selon vos besoins."
      }
    ]
  },
  {
    title: "Support et Accompagnement",
    items: [
      {
        question: "Quel type de support offrez-vous avant, pendant et après l'événement ?",
        answer: "Nous offrons un support complet : assistance avant l'événement pour la préparation, support en direct pendant l'événement pour résoudre les problèmes, et assistance post-événement pour les statistiques et les améliorations futures."
      },
      {
        question: "Pouvons-nous avoir une démo de l'application ?",
        answer: "Bien sûr ! Nous proposons des démonstrations personnalisées de nos applications existantes (Nice Shoulder Course, Congrès ESPOIR Oncologie) pour que vous puissiez voir exactement ce que nous offrons. Contactez-nous pour planifier une démo."
      },
      {
        question: "Qui contacte-t-on en cas de problème technique pendant l'événement ?",
        answer: "Vous aurez un point de contact dédié chez Bluevista Production qui sera disponible pendant votre événement. Nous vous fournirons les coordonnées directes et les numéros d'urgence."
      },
      {
        question: "Offrez-vous une formation pour utiliser l'application ?",
        answer: "Oui, nous proposons une formation pour votre équipe organisatrice et, si nécessaire, pour les participants. Nous créons aussi des guides d'utilisation et des tutoriels vidéo."
      }
    ]
  }
];

function FAQAccordion({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
      <div className="space-y-4">
        {category.items.map((item, index) => (
          <div key={index} className="bg-background rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-card transition"
            >
              <span className="text-left font-semibold">{item.question}</span>
              <ChevronDown
                size={24}
                className={`flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-card border-t border-border">
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6">Questions fréquentes des organisateurs de congrès</h1>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Trouvez les réponses à vos questions sur notre application mobile pour congrès.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background">
          <div className="container max-w-3xl">
            {faqData.map((category, index) => (
              <FAQAccordion key={index} category={category} />
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-card">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Votre Question n'est Pas Ici ?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter directement. Notre équipe est là pour répondre à toutes vos questions.
            </p>
            <Link href="/contact" className="btn-primary">
              Nous Contacter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
