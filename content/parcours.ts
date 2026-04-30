export type Diplome = {
  intitule: string;
  etablissement?: string;
  annee?: number;
};

export type Etape = {
  poste: string;
  service: string;
  etablissement: string;
  ville?: string;
  periode: string;
  debut: number;
  fin: number | "présent";
};

export const diplomes: readonly Diplome[] = [
  {
    intitule: "Diplôme d'État de docteur en médecine",
    etablissement: "Faculté de médecine de Lille",
    annee: 2021,
  },
  {
    intitule: "Diplôme d'études spécialisées de médecine d'urgence",
    etablissement: "Faculté de médecine de Lille",
    annee: 2022,
  },
  {
    intitule: "D.U. d'expertises médicales",
    etablissement: "Université de Picardie Jules-Verne",
    annee: 2021,
  },
  {
    intitule: "D.I.U. d'expertises en accidents médicaux",
    etablissement: "Faculté de droit de Bordeaux et Université de Picardie Jules-Verne",
    annee: 2026,
  },
  {
    intitule: "D.U. de prise en charge du traumatisé sévère",
    etablissement: "Université de Lille",
    annee: 2022,
  },
  {
    intitule: "D.I.U. de ventilation artificielle",
    etablissement: "Université Paris-Est Créteil",
    annee: 2023,
  },
  {
    intitule: "D.I.U. de réanimation métabolique",
    etablissement: "Université Côte d'Azur (Nice)",
    annee: 2023,
  },
  {
    intitule: "D.U. d'insuffisance circulatoire aiguë",
    etablissement: "Université Paris-Saclay (Kremlin-Bicêtre)",
    annee: 2024,
  },
] as const;

export const titres: readonly string[] = [
  // Lauréat du concours, non nommé — forme prudente côté Conseil de l'Ordre.
  // À rebasculer sur "Praticien hospitalier" si nomination effective.
  "Lauréat du concours de praticien hospitalier",
  "Ancien interne des hôpitaux de Lille",
  "Expert près la cour d'appel de Douai",
  "Chevalier dans l'Ordre national du Mérite",
] as const;

export const carriere: readonly Etape[] = [
  {
    poste: "Assistant spécialiste",
    service: "Service des urgences",
    etablissement: "Centre hospitalier du Cateau-Cambrésis",
    ville: "Le Cateau-Cambrésis",
    periode: "2022 – 2024",
    debut: 2022,
    fin: 2024,
  },
  {
    poste: "Praticien contractuel",
    service: "Service de médecine intensive-réanimation",
    etablissement: "Centre hospitalier de Cambrai",
    ville: "Cambrai",
    periode: "2024 – 2026",
    debut: 2024,
    fin: 2026,
  },
] as const;

export const societesSavantes: readonly string[] = [
  "Compagnie des experts près la cour d'appel de Douai (CECAD)",
];

export const publications: readonly string[] = [
  // {{Publications ou interventions à compléter — optionnel}}
];
