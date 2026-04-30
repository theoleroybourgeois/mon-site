export const QUALITES = [
  { value: "avocat", label: "Avocat" },
  { value: "magistrat", label: "Magistrat ou juridiction" },
  { value: "victime", label: "Victime ou ayant droit" },
  { value: "assureur", label: "Compagnie d'assurance" },
  { value: "mandataire", label: "Curateur, tuteur, mandataire judiciaire" },
  { value: "autre", label: "Autre" },
] as const;

export type Qualite = (typeof QUALITES)[number]["value"];

export type ContactPayload = {
  qualite: Qualite;
  nom: string;
  email: string;
  telephone?: string;
  objet: string;
  message: string;
  consentement: boolean;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const QUALITE_VALUES = QUALITES.map((q) => q.value) as readonly string[];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: unknown): ContactErrors {
  const errors: ContactErrors = {};
  const data = (input ?? {}) as Record<string, unknown>;

  if (typeof data.qualite !== "string" || !QUALITE_VALUES.includes(data.qualite)) {
    errors.qualite = "Champ requis.";
  }
  if (typeof data.nom !== "string" || data.nom.trim().length < 2) {
    errors.nom = "Indiquez vos nom et prénom.";
  }
  if (typeof data.email !== "string" || !EMAIL_RE.test(data.email)) {
    errors.email = "Adresse email invalide.";
  }
  if (
    data.telephone !== undefined &&
    data.telephone !== "" &&
    (typeof data.telephone !== "string" || data.telephone.length > 30)
  ) {
    errors.telephone = "Numéro invalide.";
  }
  if (typeof data.objet !== "string" || data.objet.trim().length < 3) {
    errors.objet = "Précisez l'objet de votre demande.";
  }
  if (typeof data.message !== "string" || data.message.trim().length < 10) {
    errors.message = "Message trop court.";
  }
  if (data.consentement !== true) {
    errors.consentement = "Consentement requis pour traiter votre demande.";
  }

  return errors;
}
