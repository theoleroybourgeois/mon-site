import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { expertises } from "@/content/expertises";
import { PageHeader } from "@/components/sections/page-header";
import { ExpertiseGrid } from "@/components/sections/expertise-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Callout } from "@/components/ui/callout";

export const metadata: Metadata = {
  title: "Domaines d'expertise",
  description:
    "Trois domaines d'expertise médicale : responsabilité médicale, dommage corporel, protection des personnes. Mission judiciaire et conseil de victimes dans le ressort de la cour d'appel de Douai.",
};

export default function ExpertisesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Domaines d'expertise"
        title={
          <>
            Trois domaines,
            <br />
            une même méthode.
          </>
        }
        lede="Le cabinet conduit des expertises médicales dans trois domaines articulés autour d'une même exigence méthodologique : examen personnel, lecture intégrale du dossier, rapport motivé."
      />

      <ExpertiseGrid items={expertises} className="border-t border-hairline" />

      <CadresEtRessort />

      <CTABanner
        eyebrow="Saisine du cabinet"
        title="Un dossier à instruire, un avis à recueillir ?"
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

function CadresEtRessort() {
  return (
    <section className="border-t border-hairline bg-albatre/40 py-16 md:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <EyebrowLabel color="or">Cadres d&apos;intervention</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(28px,3.5vw,40px)] italic leading-[1.15] text-encre">
              Deux cadres,
              <br />
              des règles distinctes.
            </h2>
            <Hairline className="mt-6" />
            <div className="mt-7 space-y-5 text-base leading-[1.65] text-ardoise">
              <p>
                <strong className="font-display italic text-encre">Mission judiciaire.</strong> Sur ordonnance d&apos;une juridiction du ressort de la cour d&apos;appel de Douai. Honoraires taxés par le juge (art. 248 CPC).
              </p>
              <p>
                <strong className="font-display italic text-encre">Conseil de victimes.</strong> Médecin de recours, hors cadre judiciaire, en assistance amiable ou pré-contentieuse de la victime et de son conseil.
              </p>
              <Callout className="mt-2">
                Cette intervention de conseil ne constitue pas une expertise judiciaire au sens de la loi du 29&nbsp;juin&nbsp;1971. Le rapport rendu dans ce cadre n&apos;a pas la valeur d&apos;un rapport d&apos;expertise judiciaire.
              </Callout>
              <p>
                <Link href="/honoraires" className="border-b border-or pb-0.5 text-encre transition-colors hover:text-or">
                  Voir les honoraires
                </Link>
              </p>
            </div>
          </div>

          <div>
            <EyebrowLabel color="or">Ressort géographique</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(28px,3.5vw,40px)] italic leading-[1.15] text-encre">
              Cour d&apos;appel
              <br />
              de Douai.
            </h2>
            <Hairline className="mt-6" />
            <div className="mt-7 space-y-5 text-base leading-[1.65] text-ardoise">
              <p>
                Le cabinet intervient dans l&apos;ensemble du ressort de la cour d&apos;appel de Douai pour la responsabilité médicale et le dommage corporel — Arras, Lille, Douai, Cambrai, Béthune, Valenciennes et l&apos;ensemble des départements du Nord et du Pas-de-Calais.
              </p>
              <p>
                Pour la <Link href="/expertises/protection-des-personnes" className="border-b border-or pb-0.5 text-encre transition-colors hover:text-or">protection des personnes</Link>, l&apos;agrément du cabinet est limité aux ressorts des tribunaux judiciaires d&apos;Arras et de Cambrai.
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-3 font-display italic text-encre-soft">
                {site.ressort.slice(0, 8).map((lieu, i) => (
                  <li key={lieu} className="flex items-baseline gap-5">
                    {i > 0 && <span aria-hidden="true" className="h-px w-3 bg-or" />}
                    <span>{lieu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
