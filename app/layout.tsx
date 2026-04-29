import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
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
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-zinc-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
