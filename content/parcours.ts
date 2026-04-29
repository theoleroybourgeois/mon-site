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
    // {{Faculté et année à compléter}}
  },
  {
    intitule: "D.U. de traumatisé sévère",
    // {{Faculté et année à compléter}}
  },
  {
    intitule: "D.I.U. de ventilation artificielle",
    // {{Faculté et année à compléter}}
  },
  {
    intitule: "D.I.U. de réanimation métabolique",
    // {{Faculté et année à compléter}}
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
  // {{Sociétés savantes à compléter (SFMU, ANAMEVA, AREDOC…) — optionnel}}
];

export const publications: readonly string[] = [
  // {{Publications ou interventions à compléter — optionnel}}
];
