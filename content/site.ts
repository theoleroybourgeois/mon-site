export const site = {
  identite: {
    nom: "Dr Benjamin Paule",
    titre: "Médecin expert",
    qualification: "Médecin urgentiste",
    agrement: {
      court: "Cour d'appel de Douai",
      long: "Expert près la cour d'appel de Douai",
    },
  },
  coordonnees: {
    adresse: {
      rue: "{{Adresse à compléter}}",
      codePostal: "{{Code postal à compléter}}",
      ville: "Arras",
    },
    telephone: "{{Téléphone à compléter}}",
    email: "{{Email à compléter}}",
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
