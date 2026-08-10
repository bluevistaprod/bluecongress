import { Link } from 'wouter';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';
import { useSeo, SEO } from '@/lib/seo';
import { LEGAL } from '@/lib/legal';

const { societe, hebergeur } = LEGAL;

function Ligne({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-2 border-b border-white/5 last:border-0">
      <dt className="text-slate-400 text-sm sm:w-56 shrink-0">{label}</dt>
      <dd className="text-slate-200">{children}</dd>
    </div>
  );
}

export default function MentionsLegales() {
  useSeo(SEO.mentionsLegales);

  return (
    <LegalLayout
      title="Mentions légales"
      intro={
        <p>
          Informations légales relatives au site <strong>pulsecongress.com</strong>, conformément à
          l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
        </p>
      }
    >
      <LegalSection title="Éditeur du site">
        <dl className="not-prose">
          <Ligne label="Dénomination sociale">{societe.denomination}</Ligne>
          <Ligne label="Forme juridique">{societe.forme}</Ligne>
          <Ligne label="Capital social">{societe.capital}</Ligne>
          <Ligne label="Siège social">{societe.adresse}</Ligne>
          <Ligne label="RCS">{societe.rcs}</Ligne>
          <Ligne label="SIRET">{societe.siret}</Ligne>
          <Ligne label="TVA intracommunautaire">{societe.tva}</Ligne>
          <Ligne label="Activité">{societe.activite}</Ligne>
          <Ligne label="Téléphone">
            <a href={societe.telephoneLien} className="hover:text-[#00E5C8] transition-colors">
              {societe.telephone}
            </a>
          </Ligne>
          <Ligne label="Contact">
            <Link href={LEGAL.contactPath} className="text-[#00E5C8] hover:underline">
              Formulaire de contact
            </Link>
          </Ligne>
          <Ligne label="Directeur de la publication">{societe.directeurPublication}</Ligne>
        </dl>
        <p className="text-sm text-slate-400">
          <strong className="text-slate-300">Pulse Congress</strong> est un produit édité et exploité
          par {societe.denomination}.
        </p>
      </LegalSection>

      <LegalSection title="Hébergeur">
        <dl className="not-prose">
          <Ligne label="Société">{hebergeur.nom}</Ligne>
          <Ligne label="Adresse">{hebergeur.adresse}</Ligne>
          <Ligne label="Site">
            <a
              href={hebergeur.site}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00E5C8] hover:underline"
            >
              infomaniak.com
            </a>
          </Ligne>
        </dl>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          Le site et chacun des éléments qui le composent — marques, textes, graphismes,
          photographies, captures d'écran, vidéos, logos et code — relèvent de la législation
          française et internationale relative au droit d'auteur et à la propriété intellectuelle.
          La marque <strong>Pulse Congress</strong> et son logo, comme la marque{' '}
          <strong>Bluevista</strong> et son logo, sont la propriété de {societe.denomination}.
        </p>
        <p>
          Toute reproduction, représentation, publication, transmission ou plus généralement toute
          exploitation non autorisée du site et/ou de ses éléments engage votre responsabilité et est
          susceptible d'entraîner des poursuites judiciaires, notamment pour contrefaçon.
        </p>
        <p>
          Les marques, logos et noms de congrès cités sur ce site restent la propriété de leurs
          titulaires respectifs. Ils sont mentionnés à titre de référence, avec l'accord de leurs
          organisateurs.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          {societe.denomination} met tout en œuvre pour offrir des informations actualisées et
          exactes. Elle ne saurait toutefois être tenue pour responsable d'erreurs, d'omissions ou
          des résultats qui pourraient être obtenus par un mauvais usage de ces informations, et se
          réserve le droit de modifier à tout moment et sans préavis tout ou partie du site.
        </p>
        <p>
          Le site peut contenir des liens vers d'autres sites que {societe.denomination} n'exploite
          pas. Aucune responsabilité ne saurait être engagée quant au contenu, aux produits ou aux
          services accessibles depuis ces sites externes.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles et cookies">
        <p>
          Le traitement des données recueillies via ce site est décrit dans notre{' '}
          <Link href="/politique-de-confidentialite" className="text-[#00E5C8] hover:underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Droit applicable">
        <p>
          Le présent site est soumis au droit français et sa langue officielle est le français. Tout
          litige relatif à son utilisation relève de la compétence des tribunaux de Lyon, sous
          réserve des dispositions légales impératives applicables aux consommateurs.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
