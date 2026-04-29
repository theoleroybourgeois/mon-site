import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { SectionDivider } from "@/components/ui/section-divider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Callout } from "@/components/ui/callout";
import { PullQuote } from "@/components/ui/pull-quote";
import { FormField, Input, Textarea } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

function Block({
  id,
  title,
  caption,
  children,
}: {
  id: string;
  title: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14">
      <div className="mb-8">
        <EyebrowLabel color="or">{id}</EyebrowLabel>
        <h2 className="mt-3 font-display text-3xl italic text-encre">
          {title}
        </h2>
        {caption && (
          <p className="mt-2 max-w-2xl text-sm italic text-ardoise">
            {caption}
          </p>
        )}
        <Hairline className="mt-5" />
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function Sample({
  label,
  background,
  children,
}: {
  label: string;
  background?: "parchemin" | "albatre" | "encre" | "sceau";
  children: React.ReactNode;
}) {
  const bg =
    background === "encre"
      ? "bg-encre"
      : background === "sceau"
        ? "bg-sceau"
        : background === "albatre"
          ? "bg-albatre"
          : "bg-parchemin";
  return (
    <div>
      <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.06em] text-brume">
        {label}
      </div>
      <div className={`border border-hairline ${bg} p-8`}>{children}</div>
    </div>
  );
}

export default function StyleguidePage() {
  if (process.env.VERCEL_ENV === "production") notFound();

  return (
    <main className="py-20">
      <Container>
        <header className="mb-16">
          <EyebrowLabel color="or">Interne · Validation visuelle</EyebrowLabel>
          <h1 className="mt-4 font-display text-6xl italic text-encre">
            Styleguide
          </h1>
          <Hairline className="mt-6" />
          <p className="mt-6 max-w-2xl text-base italic text-ardoise">
            Inventaire des primitives UI tirées de la charte graphique. Cette
            page est{" "}
            <code className="font-mono text-sm not-italic">noindex</code> et
            renvoie 404 en production.
          </p>
        </header>

        <nav className="mb-16 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-hairline py-6 md:grid-cols-5">
          {[
            ["01", "Container"],
            ["02", "EyebrowLabel"],
            ["03", "Hairline"],
            ["04", "SectionDivider"],
            ["05", "Button"],
            ["06", "Badge"],
            ["07", "Card"],
            ["08", "Callout"],
            ["09", "PullQuote"],
            ["10", "Form"],
          ].map(([num, name]) => (
            <a
              key={num}
              href={`#${num}-${name.toLowerCase()}`}
              className="font-inscr text-[10px] uppercase tracking-[0.22em] text-encre transition-colors hover:text-or"
            >
              <span className="text-or">{num}</span>
              <span className="ml-3">{name}</span>
            </a>
          ))}
        </nav>

        <Block
          id="01-container"
          title="Container"
          caption="Wrapper max-w-7xl + padding standard. La bordure pointillée n'apparaît que pour le styleguide."
        >
          <div className="border border-dashed border-or/40">
            <Container className="bg-albatre py-6">
              <p className="text-center font-inscr text-[10px] uppercase tracking-[0.28em] text-brume">
                max-w-7xl · px-6
              </p>
            </Container>
          </div>
        </Block>

        <Block
          id="02-eyebrowlabel"
          title="EyebrowLabel"
          caption="Petit label Marcellus capitales. 4 couleurs."
        >
          <Sample label="color=encre">
            <EyebrowLabel color="encre">Mission judiciaire</EyebrowLabel>
          </Sample>
          <Sample label="color=or">
            <EyebrowLabel color="or">Mission judiciaire</EyebrowLabel>
          </Sample>
          <Sample label="color=brume">
            <EyebrowLabel color="brume">Mission judiciaire</EyebrowLabel>
          </Sample>
          <Sample label="color=parchemin" background="encre">
            <EyebrowLabel color="parchemin">Mission judiciaire</EyebrowLabel>
          </Sample>
        </Block>

        <Block
          id="03-hairline"
          title="Hairline"
          caption="Filet or de 60 px. Pas de margin par défaut."
        >
          <Sample label="default">
            <Hairline />
          </Sample>
          <Sample label="centered (className)">
            <Hairline className="mx-auto" />
          </Sample>
        </Block>

        <Block
          id="04-sectiondivider"
          title="SectionDivider"
          caption="Séparateur full-width avec ornement central. Margin asymétrique : 80 px en haut, 50 px en bas."
        >
          <Sample label="default ornament=·">
            <SectionDivider className="!my-0" />
          </Sample>
          <Sample label="ornament=❦">
            <SectionDivider ornament="❦" className="!my-0" />
          </Sample>
        </Block>

        <Block
          id="05-button"
          title="Button"
          caption="4 variants. Rendu en `a` quand `href` est fourni, sinon `button`."
        >
          <Sample label="variant=primary">
            <Button>Demander une mission</Button>
          </Sample>
          <Sample label="variant=secondary">
            <Button variant="secondary">En savoir plus</Button>
          </Sample>
          <Sample label="variant=gold">
            <Button variant="gold">Télécharger le CV</Button>
          </Sample>
          <Sample label="variant=text">
            <Button variant="text">Lire la suite</Button>
          </Sample>
          <Sample label="as Link (href)">
            <Button href="#05-button">Voir la fiche</Button>
          </Sample>
        </Block>

        <Block
          id="06-badge"
          title="Badge"
          caption="Étiquette inscriptionnelle. 4 variants."
        >
          <Sample label="variant=or">
            <Badge>Inscrit cour d'appel de Douai</Badge>
          </Sample>
          <Sample label="variant=encre">
            <Badge variant="encre">Médecine légale</Badge>
          </Sample>
          <Sample label="variant=sceau">
            <Badge variant="sceau">Mission judiciaire</Badge>
          </Sample>
          <Sample label="variant=filled">
            <Badge variant="filled">Conseil de victime</Badge>
          </Sample>
        </Block>

        <Block
          id="07-card"
          title="Card"
          caption="2 variants — `simple` et `elegant` (coins or top-left / bottom-right)."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.06em] text-brume">
                variant=simple
              </div>
              <Card>
                <h4 className="font-display text-2xl italic text-encre">
                  Dommage corporel
                </h4>
                <p className="mt-2 text-sm text-ardoise">
                  Évaluation des préjudices selon la nomenclature Dintilhac, en
                  mission judiciaire ou en conseil de victime.
                </p>
              </Card>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.06em] text-brume">
                variant=elegant + tag
              </div>
              <Card variant="elegant" tag="Domaine III">
                <h4 className="font-display text-2xl italic text-encre">
                  Responsabilité médicale
                </h4>
                <p className="mt-2 text-sm text-ardoise">
                  Analyse de la conformité aux règles de l'art médical et
                  identification des manquements.
                </p>
              </Card>
            </div>
          </div>
        </Block>

        <Block
          id="08-callout"
          title="Callout"
          caption="Encart d'attention sur fond or transparent + filet or à gauche."
        >
          <Sample label="title + body">
            <Callout title="Ressort géographique">
              Cour d'appel de Douai — Arras, Lille, Douai, Béthune,
              Valenciennes.
            </Callout>
          </Sample>
          <Sample label="body only">
            <Callout>
              Pour toute mission hors ressort, contacter directement le
              cabinet.
            </Callout>
          </Sample>
        </Block>

        <Block
          id="09-pullquote"
          title="PullQuote"
          caption="Citation italique Cormorant + filet or + attribution Marcellus."
        >
          <Sample label="with attribution" background="albatre">
            <PullQuote
              attribution="Article 232 du Code de procédure civile"
              className="!my-0"
            >
              Le juge peut commettre toute personne de son choix pour l'éclairer
              par des constatations, par une consultation ou par une expertise
              sur une question de fait.
            </PullQuote>
          </Sample>
        </Block>

        <Block
          id="10-form"
          title="Form"
          caption="Underline focus or, label Marcellus en capitales."
        >
          <Sample label="FormField + Input + Textarea" background="albatre">
            <form className="grid gap-6 md:grid-cols-2">
              <FormField label="Nom et prénom" htmlFor="sg-nom">
                <Input id="sg-nom" placeholder="Maître Dupont" />
              </FormField>
              <FormField label="Adresse email" htmlFor="sg-email">
                <Input
                  id="sg-email"
                  type="email"
                  placeholder="contact@cabinet.fr"
                />
              </FormField>
              <FormField
                label="Objet de la demande"
                htmlFor="sg-msg"
                className="md:col-span-2"
              >
                <Textarea
                  id="sg-msg"
                  placeholder="Décrivez brièvement la mission envisagée…"
                />
              </FormField>
            </form>
          </Sample>
        </Block>
      </Container>
    </main>
  );
}
