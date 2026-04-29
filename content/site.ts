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
    rpps: "{{RPPS à demander}}",
    ordre: {
      numero: "{{N° d'inscription à l'Ordre à demander}}",
      conseil: "{{Conseil départemental à préciser — 62 ou 59}}",
    },
    expert: {
      anneeInscription: "{{Année d'inscription cour d'appel de Douai à compléter}}",
      numero: "{{N° d'expert à compléter (si applicable)}}",
    },
    siret: "{{SIRET à compléter}}",
    tvaIntra: "{{TVA intracommunautaire à compléter (si applicable)}}",
  },

  cabinet: {
    nom: "Cabinet Médical",
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
    delaiReponse: "{{Délai indicatif de réponse email à compléter}}",
  },

  liens: {
    linkedin: "{{LinkedIn à compléter (optionnel)}}",
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
