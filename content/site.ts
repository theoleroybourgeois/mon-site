export const site = {
  identite: {
    nom: "Dr Benjamin Paule",
    nomLong: "Docteur Benjamin Paule",
    titre: "Médecin expert",
    qualification: "Médecin urgentiste · médecin expert",
    agrement: {
      court: "Cour d'appel de Douai",
      long: "Médecin expert près la cour d'appel de Douai",
    },
  },

  identifiants: {
    rpps: "10101638343",
    ordre: {
      numero: "{{N° d'inscription à l'Ordre à demander}}",
      conseil: "62",
    },
    expert: {
      anneeInscription: "2025",
      rubrique: "Médecine",
      numero: "{{N° d'expert à compléter (si applicable)}}",
    },
    siret: "{{SIRET à compléter}}",
    tvaIntra: "{{TVA intracommunautaire à compléter (si applicable)}}",
  },

  cabinet: {
    nom: "Pôle Santé",
    adresse: {
      rue: "46 B avenue Fernand Lobbedez",
      codePostal: "62000",
      ville: "Arras",
    },
  },

  coordonnees: {
    telephone: {
      affichage: "06 18 97 90 44",
      tel: "+33618979044",
    },
    email: "expert@cabinetpaule.fr",
  },

  accueil: {
    plageHoraire: "{{Plage horaire de prise de contact à compléter}}",
    // Choix Dr Paule : pas d'engagement chiffré sur le délai.
    // Reformuler en accroche sobre côté UI (ex. « réponse personnalisée à chaque demande »),
    // sans superlatif type « réponse rapide / sous X heures ».
    delaiReponse: null,
  },

  liens: {
    linkedin: "https://www.linkedin.com/in/benjamin-paule-b59a74406",
    iban: "{{IBAN à compléter (utile pour consignations judiciaires)}}",
  },

  ressort: [
    "Arras",
    "Douai",
    "Lille",
    "Cambrai",
    "Valenciennes",
    "Pas-de-Calais",
    "Nord",
    "Hauts-de-France",
    "Paris",
    "Île-de-France",
  ],

  bandeauAutorite: {
    gauche: "Médecin expert · Cour d'appel de Douai",
    droite: "Arras · 62",
  },

  description:
    "Médecin expert près la cour d'appel de Douai. Protection des personnes, dommage corporel, responsabilité médicale — en mission judiciaire ou en conseil de victimes.",
} as const;

export type Site = typeof site;
