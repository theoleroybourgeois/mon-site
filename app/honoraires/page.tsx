import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { ValuesList, type ValueItem } from "@/components/sections/values-list";
import { CTABanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Callout } from "@/components/ui/callout";

export const metadata: Metadata = {
  title: "Honoraires",
  description:
    "Mission judiciaire : honoraires taxés par le juge (art. 248 CPC). Conseil de victimes : 250 € HT/heure ajustable selon complexité, paiement échelonné possible.",
};

const etapes: readonly ValueItem[] = [
  {
    titre: "Premier contact",
    description:
      "Échange par mail ou téléphone, sans frais, pour vérifier la compétence technique du cabinet et sa couverture géographique sur le ressort de la cour d'appel de Douai.",
  },
  {
    titre: "Transmission du dossier",
    description:
      "Envoi des pièces médicales (dossier hospitalier, certificats, comptes rendus, imageries) par voie électronique sécurisée ou par courrier.",
  },
  {
    titre: "Étude du dossier et devis",
    description:
      "Lecture intégrale des pièces, recherches bibliographiques sur les questions médicales en jeu, estimation du temps de travail nécessaire. Un devis est adressé avant tout engagement.",
  },
  {
    titre: "Évaluation préalable",
    description:
      "Examen clinique de la personne au cabinet à Arras, ou en visioconférence lorsque le déplacement n'est pas possible. Mise en cohérence du dossier médical et de l'examen.",
  },
  {
    titre: "Assistance à expertise",
    description:
      "Préparation des pièces, présence aux opérations d'expertise contradictoire, dires techniques. Déplacement possible dans le ressort de la cour d'appel.",
  },
];

export default function HonorairesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs · paiement"
        title="Honoraires"
        lede="Le cadre tarifaire dépend de la nature de l'intervention. Mission judiciaire et conseil de victimes obéissent à des règles distinctes."
      />

      <CadreJudiciaire />
      <CadreConseil />

      <ValuesList
        eyebrow="Méthode"
        title={
          <>
            Le déroulé
            <br />
            d&apos;une mission.
          </>
        }
        lede="Cinq étapes, du premier contact à l'assistance en expertise. Chaque étape est documentée par écrit."
        items={etapes}
        className="border-t border-hairline"
      />

      <CTABanner
        eyebrow="Premier contact"
        title="Une situation à évaluer ?"
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

function CadreJudiciaire() {
  return (
    <section className="border-t border-hairline py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Cadre 1</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Mission judiciaire
            </h2>
            <Hairline className="mt-6" />
          </header>
          <div className="space-y-6 lg:col-span-8">
            <p className="text-lg leading-[1.65] text-ardoise">
              Lorsque l&apos;intervention résulte d&apos;une décision de justice — ordonnance d&apos;un juge des contentieux de la protection, d&apos;un juge de la mise en état, d&apos;un tribunal judiciaire ou d&apos;une cour d&apos;appel —, les honoraires obéissent au régime des experts judiciaires.
            </p>
            <Callout title="Honoraires taxés par le juge">
              Conformément à l&apos;article 248 du code de procédure civile, les honoraires de l&apos;expert sont taxés par le magistrat à l&apos;issue du dépôt du rapport. Aucune négociation directe avec les parties n&apos;a lieu, et aucun tarif n&apos;est affiché sur ce site dans ce cadre.
            </Callout>
            <p className="text-base leading-[1.65] text-ardoise">
              La consignation initiale, lorsqu&apos;elle est exigée par la juridiction, est versée à la régie du tribunal par la partie la plus diligente, indépendamment du cabinet.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CadreConseil() {
  return (
    <section className="border-t border-hairline bg-albatre/40 py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Cadre 2</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Conseil de victimes
            </h2>
            <Hairline className="mt-6" />
            <p className="mt-6 text-base leading-[1.65] text-ardoise">
              Médecin de recours, hors cadre judiciaire — pour les victimes et leurs conseils.
            </p>
          </header>

          <div className="space-y-10 lg:col-span-8">
            <Callout title="Nature de l’intervention">
              Cette intervention ne constitue pas une expertise judiciaire au sens de la loi du 29&nbsp;juin&nbsp;1971. Le rapport rendu dans ce cadre n&apos;a pas la valeur d&apos;un rapport d&apos;expertise judiciaire.
            </Callout>

            <div>
              <EyebrowLabel color="encre">Tarif horaire</EyebrowLabel>
              <p className="mt-3 font-display text-4xl italic leading-[1.1] text-encre">
                250&nbsp;€ HT par heure de travail.
              </p>
              <p className="mt-3 text-base leading-[1.65] text-ardoise">
                Tarif de référence, ajustable selon la complexité du dossier (volume des pièces, nature des questions médicales, déplacements). Un devis détaillé est adressé après examen préalable des pièces, avant tout engagement.
              </p>
            </div>

            <div>
              <EyebrowLabel color="encre">Modalités de prise en charge</EyebrowLabel>
              <ul className="mt-4 space-y-4 text-base leading-[1.65] text-ardoise">
                <li className="border-l border-or/40 pl-5">
                  <strong className="font-display italic text-encre">Protection juridique de la victime.</strong> Lorsque la garantie le prévoit, la compagnie d&apos;assurance prend en charge tout ou partie des honoraires sur présentation du devis et du rapport.
                </li>
                <li className="border-l border-or/40 pl-5">
                  <strong className="font-display italic text-encre">Frais inclus dans les indemnisations.</strong> Dans certaines procédures, les honoraires d&apos;un médecin de recours peuvent être imputés à la partie adverse et remboursés a posteriori à la victime, selon la décision du juge ou les termes de la transaction.
                </li>
                <li className="border-l border-or/40 pl-5">
                  <strong className="font-display italic text-encre">Paiement direct par la victime.</strong> En l&apos;absence de prise en charge, les honoraires sont réglés par la victime. Un paiement échelonné est possible, à convenir au moment du devis.
                </li>
              </ul>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <EyebrowLabel color="encre">Modes de paiement</EyebrowLabel>
                <ul className="mt-3 space-y-2 text-base text-ardoise">
                  <li>Virement bancaire</li>
                  <li>Chèque</li>
                </ul>
              </div>
              <div>
                <EyebrowLabel color="encre">Premier contact</EyebrowLabel>
                <p className="mt-3 text-base leading-[1.65] text-ardoise">
                  Sans frais. Échange par mail ou téléphone pour vérifier la compétence technique et géographique du cabinet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
