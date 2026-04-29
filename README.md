# Site Dr Benjamin Paule

Site vitrine du **Docteur Benjamin Paule**, médecin urgentiste et **expert près la cour d'appel de Douai**, exerçant à Arras.

Le site présente son activité d'expertise médicale autour de quatre axes : expertise judiciaire, dommage corporel, expertise assurance, protection des personnes.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- Déploiement Vercel

## Démarrage

```bash
npm install
npm run dev
```

Le site est servi par défaut sur [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande            | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Serveur de développement (hot reload)        |
| `npm run build`     | Build de production                          |
| `npm run start`     | Serveur de production (après `build`)        |
| `npm run lint`      | Lint Next.js                                 |
| `npm run type-check`| Vérification TypeScript sans émission        |

## Workflow Git

- GitHub Flow simple, pas de branche `dev` longue durée.
- Chaque travail part d'une branche dédiée (`feat/*`, `fix/*`, `chore/*`).
- Une PR par fonctionnalité, squash-merge dans `main`, branche supprimée après merge.

## Structure

```
app/                     pages (App Router)
  le-docteur-paule/      bio, parcours, agréments
  expertises/            page mère + 4 sous-pages (axes d'expertise)
  honoraires/            modalités, tarifs, déroulé d'une expertise
  contact/               formulaire + téléphone + adresse
  api/contact/           endpoint du formulaire
components/              header, footer, sections, primitives UI
content/                 textes éditoriaux (bio, expertises)
lib/                     utilitaires (validation, mailer, SEO)
public/                  images, fonts, icônes
```

## Contenu

Le contenu est rédigé en dur dans le repo (pas de CMS). Les textes éditoriaux sont centralisés dans `content/`. Toute modification éditoriale passe par une mise à jour du code.

## Conventions

- Langue : français uniquement.
- Ton : premium et éditorial.
- Pas de Doctolib, pas de prise de rendez-vous en ligne.
- L'agrément cour d'appel de Douai est l'élément d'autorité principal du site et doit rester visible dans le header, le hero et le footer.

Voir [`CLAUDE.md`](./CLAUDE.md) pour le détail des règles projet.
