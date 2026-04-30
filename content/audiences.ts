import type { AudienceItem } from "@/components/sections/audience-grid";

export const audiences: readonly AudienceItem[] = [
  {
    tag: "Cabinets d'avocats",
    title: "Avocats",
    body: "Médecin de recours pour les conseils des victimes — étude du dossier médical, évaluation préalable, assistance à expertise contradictoire en demande comme en défense.",
    cta: { label: "Saisir le cabinet", href: "/contact" },
  },
  {
    tag: "Victimes & proches",
    title: "Victimes et familles",
    body: "Accompagnement médical de la victime hors cadre judiciaire — accidents de la route, accidents domestiques, agressions, accidents médicaux. Préparation d'expertise, relecture du dossier, examen préalable.",
    cta: { label: "Prendre contact", href: "/contact" },
  },
  {
    tag: "Compagnies d'assurance",
    title: "Assureurs",
    body: "Évaluation médicale dans le cadre amiable ou contentieux — examen clinique et analyse documentaire.",
    cta: { label: "Prendre contact", href: "/contact" },
  },
  {
    tag: "Juridictions",
    title: "Magistrats",
    body: "Missions d'expertise ordonnées par une juridiction du ressort de la cour d'appel de Douai — protection des personnes, dommage corporel, responsabilité médicale.",
    cta: { label: "Voir les domaines", href: "/expertises" },
  },
] as const;
