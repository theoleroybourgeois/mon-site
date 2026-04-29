# CLAUDE.md

Contexte projet pour Claude Code. À garder synchronisé avec les décisions du user.

## Projet

Site vitrine du **Docteur Benjamin Paule** — médecin urgentiste, **expert près la cour d'appel de Douai**, exerçant à Arras (Pas-de-Calais).

L'objectif est de valoriser son activité d'**expertise médicale**, pas une activité de cabinet. Les visiteurs cibles sont avocats, magistrats, victimes d'accident, compagnies d'assurance et familles.

## Trois domaines d'expertise

Ce sont les *sujets* sur lesquels le Dr Paule expertise.

1. Protection des personnes (curatelle, tutelle, sauvegarde de justice)
2. Dommage corporel
3. Responsabilité médicale

## Deux cadres d'intervention

Ce sont les *contextes* dans lesquels il intervient. À ne pas confondre avec les domaines.

1. Mission judiciaire (ordonnée par une juridiction du ressort de la cour d'appel de Douai)
2. Conseil de victimes (assistance et conseil aux victimes en dehors d'un cadre judiciaire)

L'emplacement UI des cadres d'intervention reste à arbitrer (page d'accueil, page Présentation, ou tag transversal sur chaque fiche).

## Stack et conventions

- **Framework** : Next.js (App Router) + TypeScript
- **Styles** : Tailwind CSS
- **Déploiement cible** : Vercel
- **Langue** : français uniquement (`lang="fr"`)
- **Édition** : contenu en dur dans le repo (pas de CMS). Toute modification passe par le développeur.
- **Contenu éditorial** : centralisé dans `content/` (fichiers TS pour les données structurées partagées — coordonnées, identité, expertises, cadres, ressort — et MDX pour les textes longs au cas par cas).

## Workflow Git

- **GitHub Flow simple** — pas de branche `dev` longue durée.
- Chaque travail part d'une branche dédiée (`feat/*`, `fix/*`, `chore/*`). Pas de commit direct sur `main`.
- Une PR par fonctionnalité, avec un test plan dans la description.
- **Squash-merge** dans `main` (historique propre).
- Branche feature supprimée des deux côtés après merge (`git push origin --delete <branche>` puis `git branch -D <branche>` localement, le `-D` étant nécessaire car le squash réécrit le hash).
- Vercel (à brancher) déploiera chaque PR sur une URL de preview qui servira d'environnement de dev.

## Arborescence

```
app/
  page.tsx                              ← accueil
  le-docteur-paule/                     ← bio, parcours, agréments
  expertises/
    page.tsx                            ← page mère
    protection-des-personnes/
    dommage-corporel/
    responsabilite-medicale/
  honoraires/                           ← modalités, tarifs, déroulé
  contact/                              ← formulaire + téléphone + adresse
  api/contact/                          ← endpoint d'envoi du formulaire
components/
  layout/                               ← header, footer
  sections/                             ← blocs de page réutilisables
  ui/                                   ← primitives (Button, Card, etc.)
content/
  site.ts                               ← identité, coordonnées, ressort, bandeaux
  expertises.ts                         ← les 3 domaines d'expertise
  cadres.ts                             ← les 2 cadres d'intervention
lib/                                    ← utilitaires (cn, validation, mailer, seo)
public/
  images/  fonts/  icons/
```

Architecture blog (`/actualites` ou `/publications`) à prévoir mais désactivée au lancement.

## Direction visuelle

- Ton **premium et éditorial** — typographie serif pour les titres, beaucoup d'air, hairlines sobres, accents discrets en or.
- **Charte livrée le 2026-04-29** — source dans `import/charte-graphique-paule.html`. Tokens intégrés dans `app/globals.css` :
  - Couleurs : `encre` (#0F1E33), `parchemin` (#F4ECDD), `albatre`, `or` (#B08D5A), `sceau` (#6B1F2A), `ardoise`, `brume`.
  - Polices : **Cormorant Garamond** (`font-display`, titres italiques), **Spectral** (`font-body`, corps), **Marcellus** (`font-inscr`, capitales/labels), **JetBrains Mono** (`font-mono`, références/fine print).
  - Effet "grain papier" appliqué globalement sur le `body`.
- **Logos** : `public/images/logos/logo-color.png` (couleur, fond transparent — pour fonds parchemin) et `logo-cream.png` (monochrome crème, fond transparent — pour fonds encre). Les fichiers `logo-clair.png`, `logo-sombre.png`, `logo-transparent.png`, `logo-monochrome.png` sont conservés mais non utilisés (planches de présentation).

## SEO

- Mettre l'agrément cour d'appel de Douai en avant : hero, header, meta, footer. C'est l'élément d'autorité n°1.
- Cibler le ressort géographique de la cour d'appel de Douai : Arras, Pas-de-Calais, Hauts-de-France, Lille, Douai, Béthune, Valenciennes.
- Mots-clés type : *médecin expert Arras*, *expert dommage corporel cour d'appel Douai*, *médecin conseil victime Pas-de-Calais*.
- Données structurées `Physician` / `LocalBusiness` à prévoir.

## Contact

- Pas de Doctolib (activité d'expertise, pas de consultation).
- Formulaire de contact + numéro de téléphone (à fournir par le user).
- Adresse cabinet à Arras (à fournir par le user).

## À ne pas faire

- Ne pas inventer de coordonnées, tarifs, ou éléments biographiques — utiliser des placeholders explicites (`{{À COMPLÉTER}}`) tant que le user n'a pas fourni les textes.
- Ne pas ajouter de Doctolib, ni de booking en ligne.
- Ne pas multiplier les langues.
- Ne pas brancher de CMS sans demande explicite.
- Ne pas inventer de wording de contenu sans valider avec le user (utiliser AskUserQuestion pour les libellés visibles : nav, CTA, taglines, titres de colonnes, etc.).

## Plan de développement

Approche choisie : **Ordre A — système d'abord, puis pages.**

### Phase 1 — Primitives UI (`components/ui/`) ✅ FAIT

10 composants tirés de la charte :

1. `Container` — wrapper `max-w-7xl` + padding standard
2. `EyebrowLabel` — petit label Marcellus capitales (variants `encre`, `or`, `brume`, `parchemin`)
3. `Hairline` — filet or 60 px
4. `SectionDivider` — séparateur full-width avec ornement italique central
5. `Button` — variants `primary` (encre), `secondary` (ghost), `gold`, `text` (lien souligné or)
6. `Badge` — variants `or`, `encre`, `sceau`, `filled`
7. `Card` — variant `simple` ou `elegant` (coins or top-left / bottom-right)
8. `Callout` — fond or transparent + filet or à gauche
9. `PullQuote` — citation italique Cormorant + filet or + attribution Marcellus
10. `Input` / `Textarea` / `FormField` — underline focus or, label Marcellus

Utilitaire associé : `lib/cn.ts` (concaténation de classes conditionnelles).

### Phase 2 — Blocs section (`components/sections/`) — À FAIRE

Composés des primitives Phase 1 :

- `PageHeader` — eyebrow + titre italique + lede + filet or (sur toutes les pages internes)
- `Hero` — variante home, plus chargée
- `AudienceGrid` — grille de cartes "publics cibles" (avocats, victimes, assureurs, magistrats)
- `ExpertiseGrid` — grille des 3 fiches d'expertise
- `ValuesList` — liste numérotée italique (parcours, valeurs, méthodes)
- `CTABanner` — bandeau encre invitation contact en bas de page

### Phase 3 — Pages — À FAIRE

Une page à la fois, en composant les blocs. Ordre à arbitrer le moment venu (probablement home → fiche pilote → réplication).

### Styleguide

Route `/styleguide` à créer après Phase 1 et Phase 2 — `noindex` + garde `notFound()` en production. Permet de visualiser toutes les primitives + blocs en un seul endroit pour validation visuelle.

### Décisions transversales en attente

- **Cadres d'intervention** (judiciaire / conseil de victimes) — emplacement UI à arbitrer (home, page Présentation, ou tag transversal sur chaque fiche).
- **Mailer pour `/contact`** — choix du service à faire (Resend, SMTP, autre).
- **Renommage éventuel** de la route `/le-docteur-paule` → `/presentation` (URL ne correspond plus au libellé).
- **Rédaction des contenus** — tous les textes de page sont en `{{À COMPLÉTER}}` aujourd'hui.
- **SEO** — données structurées `Physician` / `LocalBusiness`, `sitemap.ts`, `robots.ts`, image OG.
- **Branchement Vercel** + env vars + URLs de preview sur PR.
