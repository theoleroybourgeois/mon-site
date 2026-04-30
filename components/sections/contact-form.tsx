"use client";

import { useState } from "react";
import {
  FormField,
  Input,
  Textarea,
  Select,
  Checkbox,
} from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  QUALITES,
  validateContact,
  type ContactErrors,
  type ContactPayload,
  type Qualite,
} from "@/lib/contact-schema";

type Status = "idle" | "submitting" | "success" | "error";

const initialPayload: ContactPayload = {
  qualite: "" as Qualite,
  nom: "",
  email: "",
  telephone: "",
  objet: "",
  message: "",
  consentement: false,
};

export function ContactForm() {
  const [payload, setPayload] = useState<ContactPayload>(initialPayload);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof ContactPayload>(
    key: K,
    value: ContactPayload[K],
  ) {
    setPayload((p) => ({ ...p, [key]: value }));
    if (errors[key]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const validation = validateContact(payload);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data?.fields) setErrors(data.fields);
        setServerError(data?.error ?? "Une erreur est survenue.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setPayload(initialPayload);
    } catch {
      setServerError("Impossible d'envoyer le message. Réessayez plus tard.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-l border-or bg-or/[0.07] px-7 py-8">
        <p className="font-display text-2xl italic text-encre">
          Message reçu.
        </p>
        <p className="mt-3 text-base leading-[1.65] text-ardoise">
          Le cabinet revient vers vous après lecture de votre demande, à l&apos;adresse indiquée.
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <FormField label="Qualité du demandeur" htmlFor="qualite">
        <Select
          id="qualite"
          name="qualite"
          required
          value={payload.qualite}
          onChange={(e) => update("qualite", e.target.value as Qualite)}
          aria-invalid={Boolean(errors.qualite)}
        >
          <option value="" disabled>
            Sélectionner…
          </option>
          {QUALITES.map((q) => (
            <option key={q.value} value={q.value}>
              {q.label}
            </option>
          ))}
        </Select>
        {errors.qualite && <FieldError>{errors.qualite}</FieldError>}
      </FormField>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Nom et prénom" htmlFor="nom">
          <Input
            id="nom"
            name="nom"
            type="text"
            required
            autoComplete="name"
            value={payload.nom}
            onChange={(e) => update("nom", e.target.value)}
            aria-invalid={Boolean(errors.nom)}
          />
          {errors.nom && <FieldError>{errors.nom}</FieldError>}
        </FormField>

        <FormField label="Adresse email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={payload.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <FieldError>{errors.email}</FieldError>}
        </FormField>
      </div>

      <FormField label="Téléphone (optionnel)" htmlFor="telephone">
        <Input
          id="telephone"
          name="telephone"
          type="tel"
          autoComplete="tel"
          value={payload.telephone ?? ""}
          onChange={(e) => update("telephone", e.target.value)}
          aria-invalid={Boolean(errors.telephone)}
        />
        {errors.telephone && <FieldError>{errors.telephone}</FieldError>}
      </FormField>

      <FormField label="Objet" htmlFor="objet">
        <Input
          id="objet"
          name="objet"
          type="text"
          required
          value={payload.objet}
          onChange={(e) => update("objet", e.target.value)}
          aria-invalid={Boolean(errors.objet)}
        />
        {errors.objet && <FieldError>{errors.objet}</FieldError>}
      </FormField>

      <FormField label="Votre message" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          required
          rows={7}
          value={payload.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <FieldError>{errors.message}</FieldError>}
      </FormField>

      <Checkbox
        name="consentement"
        checked={payload.consentement}
        onChange={(e) => update("consentement", e.target.checked)}
        label={
          <>
            J&apos;accepte que les informations transmises soient utilisées par le cabinet pour traiter ma demande. Conformément au RGPD, je dispose d&apos;un droit d&apos;accès, de rectification et de suppression — voir la{" "}
            <a
              href="/confidentialite"
              className="border-b border-or pb-px text-encre hover:text-or"
            >
              politique de confidentialité
            </a>
            .
          </>
        }
      />
      {errors.consentement && <FieldError>{errors.consentement}</FieldError>}

      {serverError && (
        <p className="border-l border-sceau bg-sceau/5 px-5 py-3 text-sm text-sceau">
          {serverError}
        </p>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          disabled={submitting}
          className={submitting ? "opacity-60 cursor-not-allowed" : ""}
        >
          {submitting ? "Envoi en cours…" : "Envoyer la demande"}
        </Button>
      </div>
    </form>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1 font-mono text-[12px] text-sceau">{children}</span>
  );
}
