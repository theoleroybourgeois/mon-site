import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { ValuesList, type ValueItem } from "@/components/sections/values-list";
import { CTABanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Callout } from "@/components/ui/callout";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Responsabilité médicale",
  description:
    "Expertise médicale en responsabilité : conformité aux règles de l'art, analyse de la chaîne de causalité. Mission judiciaire et conseil de victimes dans le ressort de la cour d'appel de Douai.",
};

const sujets: readonly { titre: string; description: string }[] = [
  {
    titre: "Retard diagnostique et perte de chance",
    description:
      "Évaluation de la conformité de la prise en charge initiale aux données acquises de la science. Caractérisation, le cas échéant, de la perte d'une chance de meilleure évolution.",
  },
  {
    titre: "Indication thérapeutique ou chirurgicale",
    description:
      "Analyse de la décision médicale au regard des recommandations en vigueur (HAS, sociétés savantes) et des alternatives disponibles à la date de l'acte.",
  },
  {
    titre: "Information du patient et consentement",
    description:
      "Examen du processus d'information préalable (loi du 4 mars 2002, article L.1111-2 du code de la santé publique) et de la traçabilité du consentement éclairé.",
  },
  {
    titre: "Événements indésirables liés aux soins",
    description:
      "Infections associées aux soins, complications post-opératoires, accidents thérapeutiques, erreurs médicamenteuses. Analyse de la chaîne causale et de la part des facteurs évitables.",
  },
];

const methode: readonly ValueItem[] = [
  {
    titre: "Définition des questions médicales en jeu",
    description:
      "Lecture de la mission ou de la demande, identification des points techniques à trancher, périmètre des spécialités à mobiliser.",
  },
  {
    titre: "Lecture du dossier et recherche bibliographique",
    description:
      "Étude intégrale des pièces médicales, des recommandations applicables à la date des faits, et de la jurisprudence éventuellement pertinente.",
  },
  {
    titre: "Examen clinique",
    description:
      "Examen de la personne au cabinet à Arras ou en visioconférence, lorsque l'évaluation clinique est nécessaire à la mission.",
  },
  {
    titre: "Rapport motivé",
    description:
      "Rédaction d'un rapport répondant point par point aux questions posées, avec exposé des données médicales mobilisées et des conclusions.",
  },
];

export default function ResponsabiliteMedicalePage() {
  return (
    <>
      <PageHeader
        eyebrow="01 · Faute · imputabilité"
        title="Responsabilité médicale"
        lede="Expertise sur la conformité d'un acte médical aux règles de l'art et analyse de la chaîne de causalité entre l'acte allégué fautif et le dommage subi."
      />

      <Perimetre />
      <ChampTechnique />
      <Cadres />

      <ValuesList
        eyebrow="Méthode"
        title={
          <>
            Quatre temps,
            <br />
            un rapport motivé.
          </>
        }
        items={methode}
        className="border-t border-hairline"
      />

      <CTABanner
        eyebrow="Saisine du cabinet"
        title="Une question de responsabilité médicale ?"
        body="Le cabinet revient vers vous après un premier échange sans frais."
        primaryCta={{ label: "Prendre contact", href: "/contact" }}
        secondaryCta={{
          label: site.coordonnees.telephone.affichage,
          href: `tel:${site.coordonnees.telephone.tel}`,
        }}
      />
    </>
  );
}

function Perimetre() {
  return (
    <section className="border-t border-hairline py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Périmètre couvert</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Quatre angles
              <br />
              d&apos;analyse.
            </h2>
            <Hairline className="mt-6" />
            <p className="mt-6 text-base leading-[1.65] text-ardoise">
              La responsabilité médicale s&apos;apprécie au cas par cas. Les questions techniques le plus souvent rencontrées se rangent dans l&apos;un des quatre registres ci-contre.
            </p>
          </header>
          <dl className="lg:col-span-8">
            {sujets.map((s, i) => (
              <div
                key={s.titre}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 border-t border-hairline py-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <dt className="pt-1 font-mono text-[12px] tracking-[0.2em] text-or-fonce">
                  {String(i + 1).padStart(2, "0")}
                </dt>
                <dt className="font-display text-2xl italic leading-[1.2] text-encre">
                  {s.titre}
                </dt>
                <dd className="col-start-2 max-w-2xl text-base leading-[1.7] text-ardoise">
                  {s.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

function ChampTechnique() {
  return (
    <section className="border-t border-hairline bg-albatre/40 py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Champ technique</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Du socle hospitalier au réseau.
            </h2>
            <Hairline className="mt-6" />
          </header>
          <div className="space-y-6 lg:col-span-8">
            <p className="text-lg leading-[1.65] text-ardoise">
              Le cabinet couvre directement les questions relevant de la médecine d&apos;urgence, de la réanimation, de la médecine générale et de la médecine hospitalière.
            </p>
            <p className="text-base leading-[1.65] text-ardoise">
              Pour les questions techniques relevant d&apos;autres spécialités médicales ou chirurgicales — orthopédie, neurologie, gynéco-obstétrique, cardiologie, anesthésie, etc. —, l&apos;analyse est conduite avec l&apos;appui de praticiens consultants. Le cabinet ne sous-traite pas le rapport&nbsp;: la responsabilité éditoriale et la signature restent celles du Docteur Paule.
            </p>
            <p className="text-base leading-[1.65] text-ardoise">
              Avant tout engagement, la compétence technique du cabinet sur la spécialité concernée est vérifiée lors du premier contact. Le cas échéant, l&apos;orientation vers un confrère expert davantage spécialisé est proposée.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Cadres() {
  return (
    <section className="border-t border-hairline py-16 md:py-20">
      <Container>
        <header className="mb-10 max-w-2xl">
          <EyebrowLabel color="or">Cadres d&apos;intervention</EyebrowLabel>
          <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
            Mission judiciaire
            <br />
            ou conseil de victimes.
          </h2>
          <Hairline className="mt-6" />
        </header>

        <div className="grid gap-px bg-hairline md:grid-cols-2">
          <div className="bg-parchemin p-8">
            <EyebrowLabel color="encre">Cadre 1</EyebrowLabel>
            <h3 className="mt-3 font-display text-3xl italic text-encre">
              Mission judiciaire
            </h3>
            <p className="mt-4 text-base leading-[1.65] text-ardoise">
              Mission ordonnée par une juridiction du ressort de la cour d&apos;appel de Douai (art. 232 du code de procédure civile). Rapport déposé au greffe, opposable aux parties, soumis au principe du contradictoire.
            </p>
            <p className="mt-4 text-base leading-[1.65] text-ardoise">
              Honoraires taxés par le juge — voir{" "}
              <Link href="/honoraires" className="border-b border-or pb-0.5 text-encre transition-colors hover:text-or">
                Honoraires
              </Link>
              .
            </p>
          </div>
          <div className="bg-parchemin p-8">
            <EyebrowLabel color="encre">Cadre 2</EyebrowLabel>
            <h3 className="mt-3 font-display text-3xl italic text-encre">
              Conseil de victimes
            </h3>
            <p className="mt-4 text-base leading-[1.65] text-ardoise">
              Médecin de recours, en assistance amiable ou pré-contentieuse, aux côtés de la victime et de son conseil. Étude du dossier, examen préalable, présence en expertise contradictoire.
            </p>
            <Callout className="mt-5">
              Cette intervention ne constitue pas une expertise judiciaire au sens de la loi du 29&nbsp;juin&nbsp;1971. Le rapport rendu dans ce cadre n&apos;a pas la valeur d&apos;un rapport d&apos;expertise judiciaire.
            </Callout>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          <Button href="/honoraires" variant="text">
            Voir les honoraires
          </Button>
          <Button href="/expertises" variant="text">
            Voir tous les domaines
          </Button>
        </div>
      </Container>
    </section>
  );
}
