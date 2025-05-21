# PCT - Plateforme de gestion d'actes d'état civil

## Prérequis

-   Node.js (version recommandée : 18+)
-   pnpm (ou npm/yarn)
-   PostgreSQL (utilisé via NeonDB dans ce projet)
-   Un fichier `.env.local` à la racine du projet

## Installation

1. **Cloner le dépôt :**

    ```bash
    git clone <url-du-repo>
    cd etat-civil-groupe-17
    ```

2. **Installer les dépendances :**

    ```bash
    pnpm install
    ```

    ou

    ```bash
    npm install
    ```

3. **Configurer les variables d'environnement :**

    Crée un fichier `.env.local` à la racine du projet et ajoute les variables suivantes (exemple issu du projet) :

    ```
    DATABASE_URL="postgresql://utilisateur:motdepasse@localhost:5432/nom_de_la_base?schema=public"
    CITOYEN_SESSION_SECRET=ton_secret_session
    ADMIN_SESSION_SECRET=ton_secret_session
    PUBLIC_KEY=ton_PUBLIC_KEY
    ```

4. **Configurer la base de données :**

    ```
    npx prisma generate
    NB: Au besoin, pour reinisialiser la BD, executer npx prisma migrate reset
    npx prisma migrate dev --name initial

    Pour visualiser et modifier les données de votre base
    npx prisma studio
    ```

## Scripts disponibles

-   `pnpm dev` : Démarre le serveur de développement Next.js
-   `pnpm build` : Build l'application pour la production
-   `pnpm start` : Lance l'application en mode production
-   `pnpm lint` : Lint le code

ou 

-   npm run dev

## Structure du projet

-   `app/` : Pages et routes Next.js
-   `components/` : Composants React réutilisables
-   `public/` : Fichiers statiques (icônes, images)
-   `utils/`, `types/`, `validation/` : Utilitaires, types TypeScript, schémas de validation

## Technologies principales

-   Next.js
-   React
-   prisma
-   PostgreSQL
-   TailwindCSS
-   Radix UI
-   React Hook Form, Zod

## Lancement du projet

1. Démarre la base de données PostgreSQL (ou assure-toi que NeonDB est accessible).
2. Lance le serveur de développement :

    ```bash
    pnpm dev ou npm run dev
    ```

    L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## Notes

-   Les routes protégées utilisent un middleware pour la gestion des sessions.
-   Les secrets doivent rester confidentiels et ne jamais être commit dans le dépôt.
