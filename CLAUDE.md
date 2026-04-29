# CLAUDE.md

Contexte projet pour Claude Code. À garder synchronisé avec les décisions du user.

## Projet

Site vitrine du **Docteur Benjamin Paule** — médecin urgentiste, **expert près la cour d'appel de Douai**, exerçant à Arras (Pas-de-Calais).

L'objectif est de valoriser son activité d'**expertise médicale**, pas une activité de cabinet. Les visiteurs cibles sont avocats, magistrats, victimes d'accident, compagnies d'assurance et familles.

## Quatre domaines d'expertise

1. Expertise judiciaire
2. Dommage corporel
3. Expertise assurance
4. Protection des personnes (curatelle, tutelle, sauvegarde de justice)

## Stack et conventions

- **Framework** : Next.js (App Router) + TypeScript
- **Styles** : Tailwind CSS
- **Déploiement cible** : Vercel
- **Langue** : français uniquement (`lang="fr"`)
- **Édition** : contenu en dur dans le repo (pas de CMS). Toute modification passe par le développeur.
- **Contenu éditorial** : centralisé dans `content/` (TS ou MDX).

## Arborescence

```
app/
  page.tsx                              ← accueil
  le-docteur-paule/                     ← bio, parcours, agréments
  expertises/
    page.tsx                            ← page mère
    judiciaire/
    dommage-corporel/
    assurance/
    protection-des-personnes/
  honoraires/                           ← modalités, tarifs, déroulé
  contact/                              ← formulaire + téléphone + adresse
  api/contact/                          ← endpoint d'envoi du formulaire
components/
  layout/                               ← header, footer
  sections/                             ← blocs de page réutilisables
  ui/                                   ← primitives (Button, Card, etc.)
content/
  expertises/                           ← textes des 4 axes
lib/                                    ← utilitaires (validation, mailer, seo)
public/
  images/  fonts/  icons/
```

Architecture blog (`/actualites` ou `/publications`) à prévoir mais désactivée au lancement.

## Direction visuelle

- Ton **premium et éditorial** : typographie serif pour les titres, sans-serif lisible pour le corps, beaucoup d'air, photos en grand format.
- Charte graphique en cours d'élaboration côté user à la date du 2026-04-29 — utiliser une palette neutre par défaut (blanc cassé, anthracite, accent sobre) et **éviter de figer des choix de couleur forts** tant que la charte n'est pas reçue.

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
- Ne pas figer la charte graphique tant qu'elle n'est pas validée.
