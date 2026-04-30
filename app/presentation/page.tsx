import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import {
  diplomes,
  titres,
  carriere,
  societesSavantes,
} from "@/content/parcours";
import { PageHeader } from "@/components/sections/page-header";
import { CTABanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";

export const metadata: Metadata = {
  title: "Présentation",
  description:
    "Docteur Benjamin Paule, médecin urgentiste à Arras, expert près la cour d'appel de Douai depuis 2025. Parcours hospitalier, diplômes universitaires, société savante.",
};

export default function PresentationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Présentation"
        title={
          <>
            Le Docteur
            <br />
            Benjamin Paule.
          </>
        }
        lede={`Médecin urgentiste exerçant à ${site.cabinet.adresse.ville}, ${site.identite.agrement.long.toLowerCase()} depuis ${site.identifiants.expert.anneeInscription} (rubrique ${site.identifiants.expert.rubrique}).`}
      />

      <Profil />
      <Titres />
      <CarriereSection />
      <Diplomes />
      <SocieteSavante />

      <CTABanner
        eyebrow="Saisine du cabinet"
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

function Profil() {
  return (
    <section className="border-t border-hairline py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline-or bg-parchemin-deep">
              <Image
                src="/images/portrait-test.jpg"
                alt={`Portrait du ${site.identite.nomLong}`}
                fill
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

          <div className="lg:col-span-7">
            <EyebrowLabel color="or">Profil</EyebrowLabel>
            <Hairline className="mt-6" />
            <p className="mt-8 font-display text-2xl italic leading-[1.4] text-encre-soft">
              Médecin urgentiste de formation lilloise, le Docteur Benjamin Paule exerce en réanimation au centre hospitalier de Cambrai et tient son cabinet d&apos;expertise à Arras.
            </p>
            <p className="mt-6 text-base leading-[1.7] text-ardoise">
              Inscrit en {site.identifiants.expert.anneeInscription} sur la liste des experts près la cour d&apos;appel de Douai (rubrique {site.identifiants.expert.rubrique}), il intervient pour les juridictions du ressort et en conseil des victimes — protection des personnes, dommage corporel, responsabilité médicale.
            </p>
            <p className="mt-5 text-base leading-[1.7] text-ardoise">
              Sa formation associe la médecine d&apos;urgence, la réanimation et la prise en charge du traumatisé sévère à un parcours universitaire dédié à l&apos;expertise médicale et aux accidents médicaux. Il est membre de la Compagnie des experts près la cour d&apos;appel de Douai.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Titres() {
  return (
    <section className="border-t border-hairline bg-albatre/40 py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Titres</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Titres et qualités.
            </h2>
            <Hairline className="mt-6" />
          </header>
          <ul className="lg:col-span-8">
            {titres.map((titre, i) => (
              <li
                key={titre}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-8 border-t border-hairline py-6 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="font-mono text-[12px] tracking-[0.2em] text-or-fonce">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl italic leading-[1.25] text-encre">
                  {titre}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function CarriereSection() {
  return (
    <section className="border-t border-hairline py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Carrière hospitalière</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Parcours
              <br />
              hospitalier.
            </h2>
            <Hairline className="mt-6" />
            <p className="mt-6 text-base leading-[1.65] text-ardoise">
              De la médecine d&apos;urgence à la réanimation, dans deux centres hospitaliers du Nord.
            </p>
          </header>
          <ol className="lg:col-span-8">
            {carriere.map((etape) => (
              <li
                key={`${etape.etablissement}-${etape.debut}`}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 border-t border-hairline py-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="pt-1 font-mono text-[12px] tracking-[0.2em] text-or-fonce">
                  {etape.periode}
                </span>
                <h3 className="font-display text-2xl italic leading-[1.25] text-encre">
                  {etape.poste}
                </h3>
                <p className="col-start-2 max-w-2xl text-base leading-[1.7] text-ardoise">
                  {etape.service} — {etape.etablissement}
                  {etape.ville ? `, ${etape.ville}` : ""}.
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function Diplomes() {
  const tries = [...diplomes].sort((a, b) => (b.annee ?? 0) - (a.annee ?? 0));
  return (
    <section className="border-t border-hairline bg-albatre/40 py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Diplômes</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Formation
              <br />
              universitaire.
            </h2>
            <Hairline className="mt-6" />
            <p className="mt-6 text-base leading-[1.65] text-ardoise">
              Diplôme d&apos;État, spécialité, et diplômes universitaires successifs en expertise médicale, accidents médicaux, traumato-réanimation.
            </p>
          </header>
          <ol className="lg:col-span-8">
            {tries.map((d, i) => (
              <li
                key={`${d.intitule}-${d.annee ?? i}`}
                className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 border-t border-hairline py-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="pt-1 font-mono text-[12px] tracking-[0.2em] text-or-fonce">
                  {d.annee ?? "—"}
                </span>
                <h3 className="font-display text-2xl italic leading-[1.25] text-encre">
                  {d.intitule}
                </h3>
                {d.etablissement && (
                  <p className="col-start-2 max-w-2xl text-base leading-[1.7] text-ardoise">
                    {d.etablissement}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function SocieteSavante() {
  return (
    <section className="border-t border-hairline py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <EyebrowLabel color="or">Société savante</EyebrowLabel>
            <h2 className="mt-4 font-display text-[clamp(32px,4.5vw,52px)] italic leading-[1.1] text-encre">
              Affiliation.
            </h2>
            <Hairline className="mt-6" />
          </header>
          <ul className="lg:col-span-8">
            {societesSavantes.map((s) => (
              <li
                key={s}
                className="border-t border-hairline py-6 font-display text-2xl italic leading-[1.25] text-encre first:border-t-0 first:pt-0 last:pb-0"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
