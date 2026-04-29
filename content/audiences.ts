import type { AudienceItem } from "@/components/sections/audience-grid";

export const audiences: readonly AudienceItem[] = [
  {
    tag: "Cabinets d'avocats",
    title: "Avocats",
    body: "Expertise médicale de partie pour étayer un dossier judiciaire ou amiable, en demande comme en défense.",
    cta: { label: "Saisir le cabinet", href: "/contact" },
  },
  {
    tag: "Juridictions",
    title: "Magistrats",
    body: "Missions ordonnées par une juridiction du ressort de la cour d'appel de Douai — protection des personnes, dommage corporel, responsabilité médicale.",
    cta: { label: "Voir les domaines", href: "/expertises" },
  },
  {
    tag: "Victimes & proches",
    title: "Victimes et familles",
    body: "Conseil et accompagnement médical des victimes en dehors d'un cadre judiciaire — préparation d'une expertise, relecture du dossier médical, second avis.",
    cta: { label: "Prendre contact", href: "/contact" },
  },
  {
    tag: "Compagnies d'assurance",
    title: "Assureurs",
    body: "Évaluation médicale dans le cadre amiable ou contentieux — examen clinique et analyse documentaire.",
    cta: { label: "Prendre contact", href: "/contact" },
  },
] as const;
