import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Spectral,
  Marcellus,
  JetBrains_Mono,
} from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Docteur Benjamin Paule — Médecin expert près la cour d'appel de Douai",
    template: "%s — Dr Benjamin Paule",
  },
  description:
    "Expertise médicale judiciaire, dommage corporel, expertise assurance et protection des personnes. Docteur Benjamin Paule, médecin expert près la cour d'appel de Douai, exerçant à Arras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${spectral.variable} ${marcellus.variable} ${jetbrains.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
