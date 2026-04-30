import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { EyebrowLabel } from "@/components/ui/eyebrow-label";
import { Hairline } from "@/components/ui/hairline";
import { Callout } from "@/components/ui/callout";

export const metadata: Metadata = {
  title: "Contacter le cabinet",
  description:
    "Demande d'expertise judiciaire, mandat de conseil de victime, ou échange préalable. Formulaire de contact, téléphone et adresse du cabinet à Arras.",
};

export default function ContactPage() {
  const { telephone, email } = site.coordonnees;
  const { adresse, nom: cabinetNom } = site.cabinet;
  const { plageHoraire } = site.accueil;
  const plageRenseignee = !plageHoraire.startsWith("{{");

  return (
    <>
      <PageHeader
        eyebrow="Premier contact"
        title="Contacter le cabinet"
        lede="Pour une demande d'expertise judiciaire, un mandat de conseil de victime ou tout échange préalable. Le cabinet revient vers vous après lecture de votre message."
      />

      <section className="border-t border-hairline py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <EyebrowLabel color="or">Formulaire</EyebrowLabel>
              <h2 className="mt-4 font-display text-[clamp(28px,3.5vw,40px)] italic leading-[1.15] text-encre">
                Décrivez votre demande.
              </h2>
              <Hairline className="mt-6" />
              <p className="mt-6 mb-10 max-w-xl text-base leading-[1.65] text-ardoise">
                Plus le contexte est précis (qualité, juridiction concernée,
                nature de l&apos;affaire), plus la réponse pourra l&apos;être.
              </p>

              <ContactForm />
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-10">
                <div>
                  <EyebrowLabel color="or">Coordonnées</EyebrowLabel>
                  <h2 className="mt-4 font-display text-[clamp(28px,3.5vw,40px)] italic leading-[1.15] text-encre">
                    Le cabinet.
                  </h2>
                  <Hairline className="mt-6" />
                </div>

                <div>
                  <EyebrowLabel color="encre">Adresse</EyebrowLabel>
                  <address className="mt-3 not-italic text-base leading-[1.65] text-ardoise">
                    <span className="block font-display italic text-encre">
                      {cabinetNom}
                    </span>
                    {adresse.rue}
                    <br />
                    {adresse.codePostal} {adresse.ville}
                  </address>
                </div>

                <div>
                  <EyebrowLabel color="encre">Téléphone</EyebrowLabel>
                  <p className="mt-3">
                    <a
                      href={`tel:${telephone.tel}`}
                      className="font-display text-2xl italic text-encre transition-colors hover:text-or"
                    >
                      {telephone.affichage}
                    </a>
                  </p>
                  {plageRenseignee && (
                    <p className="mt-2 text-sm text-ardoise">{plageHoraire}</p>
                  )}
                </div>

                <div>
                  <EyebrowLabel color="encre">Courriel</EyebrowLabel>
                  <p className="mt-3">
                    <a
                      href={`mailto:${email}`}
                      className="border-b border-or pb-px font-body text-base text-encre transition-colors hover:text-or"
                    >
                      {email}
                    </a>
                  </p>
                </div>

                <div>
                  <EyebrowLabel color="encre">Ressort d&apos;intervention</EyebrowLabel>
                  <p className="mt-3 font-inscr text-[12px] uppercase tracking-[0.18em] text-ardoise">
                    Cour d&apos;appel de Douai · Arras · Pas-de-Calais · Hauts-de-France
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-hairline bg-albatre/40 py-14 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <Callout title="Transmission de pièces médicales">
              Le formulaire de contact n&apos;est pas un canal sécurisé. Pour
              toute pièce médicale (dossier hospitalier, certificat,
              imagerie), attendre la confirmation du cabinet et utiliser la
              voie d&apos;envoi indiquée en réponse — courrier postal ou
              plateforme de transfert chiffré.
            </Callout>
          </div>
        </Container>
      </section>
    </>
  );
}
