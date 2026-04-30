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
  title: "Protection des personnes",
  description:
    "Expertise médicale en protection juridique : sauvegarde de justice, curatelle, tutelle, habilitation familiale. Cabinet inscrit sur les listes des médecins agréés des tribunaux judiciaires d'Arras et de Cambrai.",
};

const sujets: readonly { titre: string; description: string }[] = [
  {
    titre: "Sauvegarde de justice",
    description:
      "Mesure d'urgence et temporaire (art. 433 et suivants du code civil) lorsque la personne nécessite une protection immédiate. Évaluation médicale de l'altération des facultés et de l'urgence.",
  },
  {
    titre: "Curatelle",
    description:
      "Mesure d'assistance (art. 440 du code civil) lorsque la personne, sans être hors d'état d'agir elle-même, a besoin d'être conseillée ou contrôlée dans les actes importants de la vie civile.",
  },
  {
    titre: "Tutelle",
    description:
      "Mesure de représentation (art. 440 du code civil) lorsque la personne doit être représentée de manière continue dans les actes de la vie civile, du fait d'une altération durable des facultés.",
  },
  {
    titre: "Habilitation familiale",
    description:
      "Mesure judiciaire confiée à un proche (art. 494-1 et suivants du code civil), nécessitant également un certificat médical circonstancié établi par un médecin inscrit sur la liste du procureur de la République.",
  },
];

const methode: readonly ValueItem[] = [
  {
    titre: "Saisine et vérification de compétence",
    description:
      "Vérification que la personne à protéger relève bien du ressort du tribunal judiciaire d'Arras ou de Cambrai, et que la mission entre dans le champ d'agrément du cabinet.",
  },
  {
    titre: "Examen médical de la personne",
    description:
      "Examen au cabinet à Arras ou au domicile lorsque l'état de la personne ne permet pas le déplacement. Évaluation des facultés mentales et corporelles.",
  },
  {
    titre: "Lecture des éléments médicaux",
    description:
      "Étude des éléments médicaux disponibles (comptes rendus hospitaliers, courriers de spécialistes, traitements en cours) qui éclairent le tableau clinique.",
  },
  {
    titre: "Certificat circonstancié",
    description:
      "Rédaction du certificat médical circonstancié destiné à la juridiction, conforme aux exigences de l'article 1219 du code de procédure civile.",
  },
];

export default function ProtectionDesPersonnesPage() {
  return (
    <>
      <PageHeader
        eyebrow="03 · Curatelle · tutelle · sauvegarde"
        title="Protection des personnes"
        lede="Évaluation médicale de l'altération des facultés mentales ou corporelles en vue d'une mesure de protection juridique — sauvegarde de justice, curatelle, tutelle, habilitation familiale."
      />

      <RestrictionGeographique />
      <Perimetre />

      <ValuesList
        eyebrow="Méthode"
        title={
          <>
            Quatre temps,
            <br />
            un certificat circonstancié.
          </>
        }
        items={methode}
        className="border-t border-hairline"
      />

      <CTABanner
        eyebrow="Saisine du cabinet"
        title="Une mesure de protection à instruire ?"
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

function RestrictionGeographique() {
  return (
    <section className="border-t border-hairline py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Compétence territoriale</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Tribunaux judiciaires
              <br />
              d&apos;Arras et de Cambrai.
            </h2>
            <Hairline className="mt-6" />
          </header>
          <div className="space-y-6 lg:col-span-8">
            <p className="text-lg leading-[1.65] text-ardoise">
              Pour les missions de protection juridique, le cabinet est inscrit sur les listes des médecins agréés des tribunaux judiciaires d&apos;Arras et de Cambrai.
            </p>
            <Callout title="Hors de ces deux ressorts">
              En dehors des ressorts d&apos;Arras et de Cambrai, le cabinet n&apos;est pas habilité à établir le certificat médical circonstancié exigé par l&apos;article 1219 du code de procédure civile. Il convient alors de saisir un médecin inscrit sur la liste du procureur de la République du tribunal compétent.
            </Callout>
            <p className="text-base leading-[1.65] text-ardoise">
              Les autres domaines d&apos;expertise du cabinet (
              <Link href="/expertises/responsabilite-medicale" className="border-b border-or pb-0.5 text-encre transition-colors hover:text-or">
                responsabilité médicale
              </Link>
              {" "}et{" "}
              <Link href="/expertises/dommage-corporel" className="border-b border-or pb-0.5 text-encre transition-colors hover:text-or">
                dommage corporel
              </Link>
              ) couvrent l&apos;ensemble du ressort de la cour d&apos;appel de Douai.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Perimetre() {
  return (
    <section className="border-t border-hairline bg-albatre/40 py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Périmètre couvert</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Quatre régimes
              <br />
              de protection.
            </h2>
            <Hairline className="mt-6" />
            <p className="mt-6 text-base leading-[1.65] text-ardoise">
              Chaque mesure répond à une situation médicale et juridique distincte. L&apos;évaluation médicale détermine la mesure la mieux adaptée à la personne.
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
