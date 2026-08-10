import { Link } from 'wouter';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';
import { useSeo, SEO } from '@/lib/seo';
import { LEGAL } from '@/lib/legal';

const { societe } = LEGAL;

/**
 * Conditions générales de vente.
 *
 * Base : les CGV Bluevista Production en vigueur (identité juridique remise à jour —
 * la version PDF qui circulait portait encore « SARL » et l'ancien siège de Lyon 3e).
 * Les clauses propres à Pulse Congress — publication sur les stores, disponibilité de
 * l'application, sous-traitance des données de participants — sont spécifiques à ce
 * produit : elles doivent être validées avant d'être opposées à un client.
 */

export default function CGV() {
  useSeo(SEO.cgv);

  return (
    <LegalLayout
      title="Conditions générales de vente"
      intro={
        <p>
          Les présentes conditions régissent les prestations Pulse Congress fournies par{' '}
          {societe.denomination}. Elles s'adressent exclusivement à des clients professionnels
          — organisateurs de congrès, sociétés savantes, agences et institutions.
        </p>
      }
    >
      <LegalSection title="1. Objet et champ d'application">
        <p>
          Les présentes conditions générales de vente définissent les termes selon lesquels{' '}
          {societe.denomination} fournit au client les prestations regroupées sous la marque{' '}
          <strong>Pulse Congress</strong> : conception, réalisation, publication et exploitation
          d'une application mobile dédiée à un congrès, ainsi que les services associés.
        </p>
        <p>
          En validant son devis — sous forme de bon de commande ou de devis signé retourné par
          courrier ou par email valant bon pour accord — le client déclare accepter sans réserve les
          termes de la commande ainsi que l'intégralité des présentes conditions.
        </p>
        <p>
          Aucune condition particulière, telle qu'une mention portée sur un bon de commande ou les
          conditions générales d'achat du client, ne peut prévaloir sur les présentes ni s'appliquer
          concurremment avec elles, sauf acceptation préalable et écrite de {societe.denomination}.
        </p>
      </LegalSection>

      <LegalSection title="2. Prestations">
        <p>
          {societe.denomination} met à disposition du client ses compétences en matière de conception
          et de production de contenus et d'applications. La prestation comprend tout ce qui est
          explicitement listé dans le devis ; toute prestation qui n'y figure pas fait l'objet d'un
          devis complémentaire gratuit.
        </p>
        <p>
          Le périmètre exact — niveau d'offre, fonctionnalités, nombre d'événements couverts, durée
          d'exploitation — est celui du devis accepté. Toute modification du cahier des charges validé
          lors de la commande fait l'objet d'une facturation complémentaire.
        </p>
        <p>
          La commande est personnelle au client : elle ne peut être cédée ou transférée, même
          partiellement, sans accord préalable écrit de {societe.denomination}.
        </p>
      </LegalSection>

      <LegalSection title="3. Éléments fournis par le client">
        <p>
          Le client remet à {societe.denomination}, dans les délais convenus, l'ensemble des éléments
          nécessaires à la réalisation : programme, fiches des intervenants, résumés, plans, visuels,
          charte graphique et logos.
        </p>
        <p>
          Le client garantit détenir les droits nécessaires sur les éléments qu'il transmet — droits
          d'auteur, droits à l'image des personnes représentées, autorisations des exposants et
          partenaires — et fait son affaire de toute réclamation d'un tiers à ce sujet. Les textes
          fournis doivent être relus et corrigés par le client.
        </p>
        <p>
          En cas de remise tardive, {societe.denomination} se réserve le droit de décaler le début
          d'exécution ou, à défaut, de facturer la production déjà engagée.
        </p>
      </LegalSection>

      <LegalSection title="4. Délais">
        <p>
          Le délai de réalisation ne démarre qu'à compter de la réception de la commande, du règlement
          de l'acompte et de l'ensemble des éléments nécessaires à la production. Il suppose que le
          client valide les éléments transmis et réponde aux demandes d'informations dans le jour
          ouvré suivant.
        </p>
        <p>
          Compte tenu de la date fixe d'un congrès, les parties conviennent au devis d'un calendrier
          de remise des éléments. Le report d'un délai dû à un manque d'éléments, à une validation
          tardive ou à une demande restée sans réponse ne peut être considéré comme un motif de
          rupture du contrat.
        </p>
      </LegalSection>

      <LegalSection title="5. Publication sur les magasins d'applications">
        <p>
          Lorsque la prestation comprend la mise à disposition de l'application sur l'App Store
          d'Apple et/ou Google Play, le client est informé que la publication est soumise à la
          validation de ces plateformes, selon leurs propres règles et leurs propres délais.
        </p>
        <p>
          {societe.denomination} s'engage à déposer l'application dans les délais convenus et à
          traiter sans retard les demandes de correction des plateformes, mais ne peut garantir ni la
          date exacte de mise en ligne, ni l'acceptation d'une application dont le contenu relèverait
          d'une restriction propre à ces plateformes.
        </p>
      </LegalSection>

      <LegalSection title="6. Disponibilité, maintenance et support">
        <p>
          {societe.denomination} met en œuvre les moyens nécessaires pour assurer la disponibilité de
          l'application et de ses services associés pendant la durée d'exploitation prévue au devis.
          Les interruptions imputables aux réseaux, aux magasins d'applications ou aux hébergeurs
          tiers ne peuvent lui être imputées.
        </p>
        <p>
          Le niveau de support pendant l'événement, ainsi que la durée pendant laquelle l'application
          reste disponible après le congrès, sont ceux définis au devis.
        </p>
      </LegalSection>

      <LegalSection title="7. Prix et paiement">
        <p>
          Les prix sont fixés en accord avec le client lors de l'établissement du devis et exprimés en
          euros hors taxes. Le client s'engage à verser l'acompte prévu aux conditions de règlement du
          devis à la signature du bon de commande, et le solde à la livraison.
        </p>
        <p>
          Sauf mention contraire au devis, qui prévaut alors sur les présentes, les prestations sont
          réglées dans un délai de 30 jours à compter de la date d'émission de la facture, par
          virement bancaire.
        </p>
      </LegalSection>

      <LegalSection title="8. Retard de paiement">
        <p>
          Tout retard de paiement, à compter du lendemain de la date d'échéance figurant sur la
          facture, donne lieu de plein droit à des pénalités exigibles sans qu'aucun rappel ne soit
          nécessaire. Ces pénalités sont calculées sur le montant TTC de la facture, à un taux égal à
          trois fois le taux d'intérêt légal en vigueur.
        </p>
        <p>
          Tout professionnel en situation de retard est en outre redevable de plein droit d'une
          indemnité forfaitaire pour frais de recouvrement de 40 euros, conformément aux articles
          L. 441-10 et D. 441-5 du code de commerce. Lorsque les frais de recouvrement exposés sont
          supérieurs à ce montant, une indemnisation complémentaire peut être demandée sur
          justification.
        </p>
      </LegalSection>

      <LegalSection title="9. Propriété des contenus et droits d'utilisation">
        <p>
          Jusqu'au paiement intégral de la facture, tout élément objet de la commande reste la
          propriété de {societe.denomination}. Le client devient propriétaire des contenus produits
          pour lui une fois le paiement final effectué. Lorsque plusieurs propositions graphiques lui
          ont été présentées, le client n'est propriétaire que de celle qu'il a validée.
        </p>
        <p>
          Les contenus du congrès — programme, textes, visuels, données des intervenants — demeurent
          en toute hypothèse la propriété du client.
        </p>
        <p>
          En revanche, la <strong>plateforme technique Pulse Congress</strong> — son code source, son
          architecture, ses composants réutilisables et sa marque — demeure la propriété exclusive de{' '}
          {societe.denomination}. Le client bénéficie d'un droit d'utilisation non exclusif et non
          cessible, pour la durée et le périmètre prévus au devis.
        </p>
        <p>
          Le client autorise {societe.denomination} à citer son nom et à utiliser des visuels de
          l'application réalisée à des fins de démonstration et de référence commerciale. Cette
          autorisation peut être retirée à tout moment sur demande écrite du client.
        </p>
      </LegalSection>

      <LegalSection title="10. Données personnelles des participants">
        <p>
          Dans le cadre de l'exploitation de l'application, {societe.denomination} traite des données
          personnelles (participants, intervenants, exposants) <strong>pour le compte du client</strong>,
          qui en est le responsable de traitement. {societe.denomination} agit en qualité de
          sous-traitant au sens de l'article 28 du RGPD.
        </p>
        <p>
          À ce titre, {societe.denomination} s'engage à ne traiter ces données que sur instruction du
          client et pour les seules finalités du congrès, à en garantir la confidentialité, à mettre
          en œuvre des mesures de sécurité appropriées, à assister le client dans le traitement des
          demandes d'exercice des droits, et à supprimer ou restituer les données au terme de la
          prestation.
        </p>
        <p>
          Le traitement des données recueillies sur ce site est décrit dans la{' '}
          <Link href="/politique-de-confidentialite" className="text-[#00E5C8] hover:underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="11. Responsabilité">
        <p>
          Le client est prié de vérifier le travail dès réception. {societe.denomination} décline
          toute responsabilité en cas d'erreur ou d'omission, sur le fond comme sur la forme, après la
          validation finale. La validation peut être confirmée par email ou par signature.
        </p>
        <p>
          {societe.denomination} se dégage de toute responsabilité quant aux contenus fournis et
          publiés par le client, qu'il s'agisse de textes, d'images ou de sons. Les droits à l'image et
          les droits musicaux restent à la charge du diffuseur.
        </p>
        <p>
          {societe.denomination} n'est pas responsable des retards ou inexécutions résultant d'un cas
          de force majeure, notamment incendie, inondation, grève, guerre, panne généralisée des
          réseaux, ou annulation de l'événement par le client ou par un tiers.
        </p>
      </LegalSection>

      <LegalSection title="12. Clause d'entièreté et de non-renonciation">
        <p>
          Si une clause des présentes conditions devait être déclarée nulle, la validité des autres
          clauses n'en serait pas affectée. Le fait de ne pas se prévaloir d'une clause ne saurait
          s'analyser en une renonciation à s'en prévaloir ultérieurement.
        </p>
      </LegalSection>

      <LegalSection title="13. Réclamation, droit applicable et juridiction">
        <p>
          Toute réclamation du client concernant une prestation doit être adressée à{' '}
          {societe.denomination} par lettre recommandée avec accusé de réception dans un délai de 3
          jours ouvrés suivant la première livraison.
        </p>
        <p>
          Les présentes conditions sont soumises au droit français. Tout litige susceptible de
          s'élever entre {societe.denomination} et le client, découlant de la formation, de
          l'exécution ou de l'interprétation du contrat, relève de la compétence exclusive du tribunal
          de commerce de Lyon.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
