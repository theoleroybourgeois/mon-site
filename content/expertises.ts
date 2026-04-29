import type { ExpertiseItem } from "@/components/sections/expertise-grid";

export const expertises: readonly ExpertiseItem[] = [
  {
    numero: "01",
    tag: "Curatelle · tutelle · sauvegarde",
    titre: "Protection des personnes",
    resume:
      "Évaluation médicale de l'altération des facultés en vue d'une mesure de protection juridique — sauvegarde de justice, curatelle, tutelle.",
    href: "/expertises/protection-des-personnes",
  },
  {
    numero: "02",
    tag: "Évaluation des préjudices",
    titre: "Dommage corporel",
    resume:
      "Examen clinique et analyse du dossier médical pour évaluer les préjudices selon la nomenclature en vigueur — déficit fonctionnel, souffrances endurées, préjudice esthétique, retentissement professionnel.",
    href: "/expertises/dommage-corporel",
  },
  {
    numero: "03",
    tag: "Faute · imputabilité",
    titre: "Responsabilité médicale",
    resume:
      "Expertise sur la conformité d'un acte médical aux règles de l'art et analyse de la chaîne de causalité entre l'acte allégué fautif et le dommage subi.",
    href: "/expertises/responsabilite-medicale",
  },
] as const;
