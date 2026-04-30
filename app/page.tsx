import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { expertises } from "@/content/expertises";
import { audiences } from "@/content/audiences";
import { Hero } from "@/components/sections/hero";
import { ExpertiseGrid } from "@/components/sections/expertise-grid";
import { AudienceGrid } from "@/components/sections/audience-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Button } from "@/components/ui/button";
import { PullQuote } from "@/components/ui/pull-quote";

export const metadata: Metadata = {
  description:
    "Docteur Benjamin Paule, médecin expert près la cour d'appel de Douai. Protection des personnes, dommage corporel, responsabilité médicale — missions judiciaires et conseil de victimes dans les Hauts-de-France.",
};

const ressortHero = [
  "Arras",
  "Douai",
  "Lille",
  "Cambrai",
  "Pas-de-Calais",
  "Nord",
] as const;

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Arras · Hauts-de-France"
        title={
          <>
            Médecin expert
            <br />
            près la cour d&apos;appel de Douai.
          </>
        }
        lede="Mission judiciaire et conseil de victimes — protection des personnes, dommage corporel, responsabilité médicale, dans le ressort de la cour d'appel."
        primaryCta={{ label: "Prendre contact", href: "/contact" }}
        ressort={ressortHero}
        media={<HeroPortrait />}
      />

      <ExpertiseGrid
        eyebrow="Domaines d'expertise"
        title={
          <>
            Trois domaines,
            <br />
            une même méthode.
          </>
        }
        lede="Examen personnel, lecture intégrale du dossier, recherche bibliographique, rapport motivé — quel que soit le cadre d'intervention."
        items={expertises}
        className="border-t border-hairline"
      />

      <AudienceGrid
        eyebrow="À l'attention des"
        title="Avocats, victimes, assureurs et magistrats."
        lede="Une même méthode pour quatre interlocuteurs : examen clinique conduit personnellement, analyse documentaire complète, rapport motivé."
        items={audiences}
        className="border-t border-hairline bg-albatre/40"
      />

      <PresentationTeaser />

      <section className="border-t border-hairline py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <PullQuote attribution={site.identite.nomLong} className="my-0">
              «&nbsp;L&apos;examen est conduit personnellement. Le rapport est motivé. Le contradictoire est respecté.&nbsp;»
            </PullQuote>
          </div>
        </Container>
      </section>

      <CTABanner
        eyebrow="Prise de contact"
        title="Une mission, un dossier, un conseil ?"
        body="Le cabinet répond aux saisines des juridictions, aux sollicitations des conseils des parties, et aux demandes des victimes et de leurs proches."
        primaryCta={{ label: "Prendre contact", href: "/contact" }}
        secondaryCta={{
          label: site.coordonnees.telephone.affichage,
          href: `tel:${site.coordonnees.telephone.tel}`,
        }}
      />
    </>
  );
}

function HeroPortrait() {
  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline-or bg-parchemin-deep">
        {/* Fichier temporaire — à remplacer par le portrait définitif (même chemin ou nouveau, à brancher ici). */}
        <Image
          src="/images/portrait-test.jpg"
          alt={`Portrait du ${site.identite.nomLong}`}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-[center_20%]"
        />
        <span
          aria-hidden="true"
          className="absolute left-2 top-2 h-5 w-5 border-l border-t border-or"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 h-5 w-5 border-b border-r border-or"
        />
      </div>
      <figcaption className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ardoise">
        {site.identite.nom} · {site.identite.qualification}
      </figcaption>
    </figure>
  );
}

function PresentationTeaser() {
  return (
    <section className="border-t border-hairline py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Le médecin</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Le Docteur Paule
            </h2>
            <Hairline className="mt-6" />
          </header>
          <div className="lg:col-span-8">
            <p className="font-display text-2xl italic leading-[1.4] text-encre-soft">
              Médecin urgentiste exerçant à Arras, le Docteur Benjamin Paule est inscrit comme expert près la cour d&apos;appel de Douai depuis 2025 (rubrique Médecine). Membre de la Compagnie des experts près la cour d&apos;appel de Douai, il intervient pour les juridictions du ressort et en conseil des victimes.
            </p>
            <div className="mt-8">
              <Button variant="text" href="/presentation">
                Lire la présentation complète
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
