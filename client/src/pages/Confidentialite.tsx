import { Link } from 'wouter';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';
import { useSeo, SEO } from '@/lib/seo';
import { LEGAL } from '@/lib/legal';
import { ANALYTICS_ACTIF } from '@/lib/analytics';

const { societe } = LEGAL;

/**
 * Politique de confidentialité.
 *
 * ⛔ Ce texte décrit ce que le site fait RÉELLEMENT. Si un traitement est ajouté
 * (mesure d'audience, publicité, base de données…), il doit être ajouté ici dans le
 * même geste — sinon la page devient fausse, ce qui est pire que son absence.
 * La section « mesure d'audience » s'affiche automatiquement dès qu'un identifiant
 * de mesure est configuré (voir client/src/lib/analytics.ts).
 */

function Tableau({
  entetes,
  lignes,
}: {
  entetes: string[];
  lignes: (string | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto -mx-2 px-2">
      <table className="w-full text-sm border-collapse min-w-[34rem]">
        <thead>
          <tr>
            {entetes.map((e) => (
              <th
                key={e}
                className="text-left font-semibold text-slate-200 pb-3 pr-4 border-b border-white/10"
              >
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((l, i) => (
            <tr key={i} className="align-top">
              {l.map((c, j) => (
                <td key={j} className="py-3 pr-4 border-b border-white/5 text-slate-300">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Confidentialite() {
  useSeo(SEO.confidentialite);

  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro={
        <p>
          {societe.denomination} attache de l'importance à la protection de vos données personnelles.
          Cette page explique quelles données le site <strong>pulsecongress.com</strong> collecte,
          pourquoi, combien de temps elles sont conservées et comment exercer vos droits, conformément
          au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
        </p>
      }
    >
      <LegalSection title="Responsable du traitement">
        <p>
          {societe.denomination}, {societe.forme} au capital de {societe.capital}, dont le siège est
          situé {societe.adresse}, immatriculée sous le numéro {societe.rcs}.
        </p>
        <p>
          Pour toute question relative à vos données, utilisez notre{' '}
          <Link href={LEGAL.contactPath} className="text-[#00E5C8] hover:underline">
            formulaire de contact
          </Link>{' '}
          ou écrivez-nous par courrier à l'adresse du siège.
        </p>
      </LegalSection>

      <LegalSection title="Les données que nous collectons, et pourquoi">
        <Tableau
          entetes={['Traitement', 'Données', 'Base légale', 'Conservation']}
          lignes={[
            [
              'Formulaire de contact',
              'Nom, adresse email, organisation et téléphone (facultatifs), contenu du message',
              'Intérêt légitime : répondre à une demande qui nous est adressée',
              '3 ans à compter du dernier échange',
            ],
            [
              'Demande de démonstration (Calendly)',
              'Nom, adresse email, créneau réservé et informations que vous saisissez dans le formulaire de réservation',
              'Mesures précontractuelles prises à votre demande',
              '3 ans à compter du dernier échange',
            ],
            [
              'Journaux techniques du serveur',
              "Adresse IP, date et heure, pages consultées, type de navigateur",
              'Intérêt légitime : sécurité et bon fonctionnement du site',
              '12 mois maximum',
            ],
          ]}
        />
        <p className="text-sm text-slate-400">
          Aucun champ n'est obligatoire au-delà de ce qui est nécessaire pour vous répondre : sur le
          formulaire de contact, seuls le nom, l'email et le message le sont.
        </p>
      </LegalSection>

      <LegalSection title="Ce que nous ne faisons pas">
        <ul className="list-disc pl-5 space-y-2">
          <li>Nous ne vendons, ne louons et n'échangeons aucune donnée personnelle.</li>
          <li>Nous n'utilisons vos données à aucune fin publicitaire.</li>
          <li>Aucune décision automatisée ni aucun profilage n'est réalisé à partir de ces données.</li>
          <li>
            Le site ne collecte aucune donnée de santé. Les applications de congrès que nous livrons à
            nos clients font l'objet de traitements distincts, décrits ci-dessous.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Destinataires et sous-traitants">
        <p>
          Vos données sont accessibles aux seules personnes de {societe.denomination} chargées de
          traiter votre demande. Nous faisons appel aux prestataires suivants, chacun encadré par un
          contrat conforme à l'article 28 du RGPD :
        </p>
        <Tableau
          entetes={['Prestataire', 'Rôle', 'Localisation des données']}
          lignes={[
            [
              'Infomaniak Network SA',
              'Hébergement du site et acheminement des emails du formulaire de contact',
              'Suisse (pays reconnu adéquat par la Commission européenne)',
            ],
            [
              'Calendly LLC',
              'Prise de rendez-vous pour les démonstrations, sur la page dédiée uniquement',
              'États-Unis (clauses contractuelles types de la Commission européenne)',
            ],
            [
              'Google LLC (Google Fonts)',
              'Fourniture des polices de caractères du site ; votre adresse IP est transmise lors du chargement',
              'États-Unis / réseau de diffusion mondial',
            ],
            ...(ANALYTICS_ACTIF
              ? [
                  [
                    'Google LLC (Google Analytics)',
                    "Mesure d'audience, uniquement si vous y avez consenti ; adresse IP anonymisée",
                    'États-Unis (clauses contractuelles types de la Commission européenne)',
                  ],
                ]
              : []),
          ]}
        />
      </LegalSection>

      <LegalSection title="Cookies et traceurs">
        <p>
          {ANALYTICS_ACTIF ? (
            <>
              Ce site utilise un outil de mesure d'audience (Google Analytics) afin de comprendre
              comment ses pages sont consultées et de les améliorer. Ces traceurs ne sont déposés
              qu'<strong>après votre consentement</strong>, exprimé via le bandeau affiché à votre
              première visite. Aucune donnée n'est transmise si vous refusez, et refuser est aussi
              simple qu'accepter. Vous pouvez revenir sur votre choix à tout moment avec le lien{' '}
              <strong>« Cookies »</strong> en bas de chaque page. L'adresse IP est anonymisée et les
              signaux publicitaires de Google sont désactivés.
            </>
          ) : (
            <>
              Le site ne dépose <strong>aucun cookie de mesure d'audience ni de publicité</strong>. Il
              n'y a donc pas de bandeau de consentement à afficher. Si un outil de mesure d'audience
              est ajouté à l'avenir, un bandeau de consentement sera mis en place et cette page sera
              mise à jour.
            </>
          )}
        </p>
        <p>
          <strong className="text-slate-200">Exception, sur une seule page :</strong> la page{' '}
          <Link href="/demander-une-demonstration" className="text-[#00E5C8] hover:underline">
            Demander une démonstration
          </Link>{' '}
          intègre l'agenda Calendly. Calendly dépose ses propres cookies lorsque cet agenda se charge,
          et affiche à ce moment-là sa propre information sur les données qu'il traite. Aucun cookie
          Calendly n'est déposé si vous ne consultez pas cette page.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et
          d'opposition au traitement de vos données, ainsi que d'un droit à la portabilité et du droit
          de définir des directives relatives à leur sort après votre décès.
        </p>
        <p>
          Pour les exercer, utilisez notre{' '}
          <Link href={LEGAL.contactPath} className="text-[#00E5C8] hover:underline">
            formulaire de contact
          </Link>
          . Nous répondons dans un délai d'un mois. Une preuve d'identité peut vous être demandée en
          cas de doute raisonnable sur l'identité du demandeur.
        </p>
        <p>
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
          pouvez adresser une réclamation à la CNIL —{' '}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E5C8] hover:underline"
          >
            www.cnil.fr
          </a>{' '}
          — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          Le site est intégralement servi en HTTPS. Les messages envoyés depuis le formulaire de
          contact sont acheminés par une connexion authentifiée et chiffrée vers la boîte
          professionnelle de {societe.denomination}. L'accès aux demandes reçues est limité aux
          personnes qui en ont besoin.
        </p>
      </LegalSection>

      <LegalSection title="Données traitées dans les applications de congrès">
        <p>
          Cette page couvre le site <strong>pulsecongress.com</strong>. Lorsque{' '}
          {societe.denomination} réalise l'application mobile d'un congrès, les données des
          participants, des intervenants et des exposants sont traitées{' '}
          <strong>pour le compte de l'organisateur</strong>, qui en est le responsable de traitement.{' '}
          {societe.denomination} intervient alors comme sous-traitant, dans le cadre du contrat conclu
          avec l'organisateur, et ne réutilise ces données à aucune autre fin.
        </p>
      </LegalSection>

      <LegalSection title="Modification de cette politique">
        <p>
          Cette politique peut évoluer, notamment si de nouveaux traitements sont mis en place. La
          date de dernière mise à jour figure en haut de cette page.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
