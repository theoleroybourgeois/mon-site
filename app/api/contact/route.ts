import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact-schema";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Format invalide." }, { status: 400 });
  }

  const fields = validateContact(raw);
  if (Object.keys(fields).length > 0) {
    return NextResponse.json(
      { error: "Champs invalides.", fields },
      { status: 400 },
    );
  }

  // TODO Resend : brancher l'envoi vers site.coordonnees.email une fois la clé
  // RESEND_API_KEY et le domaine d'envoi vérifiés (variables d'env CONTACT_EMAIL_FROM,
  // CONTACT_EMAIL_TO).
  if (process.env.NODE_ENV !== "production") {
    console.log("[contact] reçu:", raw);
  }

  return NextResponse.json({ ok: true });
}
