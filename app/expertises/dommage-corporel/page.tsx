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
  title: "Dommage corporel",
  description:
    "Expertise médicale en dommage corporel : examen clinique, évaluation des préjudices selon la nomenclature en vigueur, analyse de l'imputabilité et de la consolidation. Mission judiciaire et conseil de victimes.",
};

const sujets: readonly { titre: string; description: string }[] = [
  {
    titre: "Imputabilité médicale",
    description:
      "Analyse du lien entre l'événement (accident, agression, acte médical) et les séquelles présentées par la victime. Distinction entre lésions imputables et lésions sans rapport direct avec le fait générateur.",
  },
  {
    titre: "État antérieur",
    description:
      "Appréciation de l'état de santé préexistant et de son rôle éventuel dans la survenue ou l'aggravation du dommage. Caractérisation, le cas échéant, d'une décompensation d'état antérieur.",
  },
  {
    titre: "Date de consolidation",
    description:
      "Détermination du moment où les lésions sont stabilisées et où l'évaluation des séquelles peut être conduite. Distinction entre les préjudices temporaires (avant consolidation) et permanents (à compter de la consolidation).",
  },
  {
    titre: "Évaluation des préjudices",
    description:
      "Application de la nomenclature en vigueur — déficit fonctionnel temporaire et permanent, souffrances endurées, préjudice esthétique temporaire et permanent, préjudice d'agrément, préjudice sexuel, retentissement professionnel, et autres postes selon les circonstances.",
  },
];

const methode: readonly ValueItem[] = [
  {
    titre: "Lecture du dossier médical",
    description:
      "Étude intégrale des pièces — comptes rendus hospitaliers, certificats initiaux, comptes rendus opératoires, imageries, rééducation. Reconstitution chronologique du parcours de soins.",
  },
  {
    titre: "Examen clinique de la victime",
    description:
      "Examen approfondi au cabinet à Arras, ou en visioconférence à défaut. Recueil des doléances, examen physique, évaluation fonctionnelle.",
  },
  {
    titre: "Discussion médico-légale",
    description:
      "Mise en cohérence du dossier et de l'examen, application de la nomenclature, motivation de chaque poste de préjudice retenu.",
  },
  {
    titre: "Rapport motivé",
    description:
      "Rédaction d'un rapport répondant point par point aux questions posées, avec exposé des données médicales mobilisées et discussion des préjudices.",
  },
];

export default function DommageCorporelPage() {
  return (
    <>
      <PageHeader
        eyebrow="02 · Évaluation des préjudices"
        title="Dommage corporel"
        lede="Examen clinique et analyse du dossier médical pour évaluer les préjudices selon la nomenclature en vigueur — accident de la route, accident domestique, agression, accident médical."
      />

      <Perimetre />
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
        title="Une évaluation des préjudices à conduire ?"
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
              Quatre questions
              <br />
              à trancher.
            </h2>
            <Hairline className="mt-6" />
            <p className="mt-6 text-base leading-[1.65] text-ardoise">
              L&apos;évaluation du dommage corporel s&apos;articule autour de quatre questions techniques, abordées de manière distincte mais articulée dans le rapport.
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

function Cadres() {
  return (
    <section className="border-t border-hairline bg-albatre/40 py-16 md:py-20">
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
