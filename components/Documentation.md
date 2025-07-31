# 🌟 Portfolio Christiane - Développeuse Web Full-Stack

Un portfolio professionnel, moderne et responsive créé avec **Next.js**, **TypeScript** et **Tailwind CSS** pour mettre en valeur les compétences et projets d'une développeuse web.

![Portfolio Preview](/placeholder.svg?height=400&width=800&query=modern portfolio website preview)

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Technologies utilisées](#-technologies-utilisées)
- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Configuration](#-configuration)
- [Personnalisation](#-personnalisation)
- [Déploiement](#-déploiement)
- [Maintenance](#-maintenance)
- [FAQ](#-faq)
- [Support](#-support)

---

## 🎯 Aperçu

Ce portfolio a été conçu pour :

- **Attirer de nouveaux clients**
- **Présenter les compétences techniques**
- **Mettre en valeur les projets réalisés**
- **Faciliter la prise de contact**
- **Optimiser le référencement (SEO)**

### 🎨 Design

- Interface **moderne et élégante**
- Palette de couleurs **professionnelle** (violet/rose)
- Animations **fluides et subtiles**
- **Responsive design** (mobile-first)
- Expérience utilisateur optimisée

---

## 🛠 Technologies utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes
- **shadcn/ui** - Composants UI réutilisables

### Outils de développement
- **ESLint** et **Prettier** - Qualité et formatage du code
- **Git** - Contrôle de version

### Déploiement
- **Vercel** (recommandé)
- **Netlify** ou **GitHub Pages** en alternative

---

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- **Hero section** personnalisée
- Navigation fluide (smooth scroll)
- Liens sociaux (GitHub, LinkedIn, Email)
- Call-to-action vers les projets et le contact

### 👤 À propos
- Présentation détaillée
- Statistiques (projets, expérience, satisfaction)
- Points forts avec icônes
- Parcours et expertise

### 🎯 Compétences
- Catégories interactives (Frontend, Backend, Outils)
- Barres de progression animées
- Niveaux de maîtrise (en %)

### 💼 Projets
- Galerie de projets avec images et détails
- Badges de technologies utilisées
- Liens vers démos et code source

### 🔧 Services
- Liste des services avec détails et icônes
- Appels à l'action pour devis

### 📞 Contact
- Formulaire fonctionnel avec validation
- Informations de contact claires
- Messages d'erreur et de confirmation

### 🎨 Fonctionnalités techniques
- Responsive design (mobile, tablette, desktop)
- Optimisation des performances
- SEO-friendly
- Accessibilité (ARIA labels, navigation clavier)

---

## 🚀 Installation

### Prérequis
- Node.js **18+**
- npm, yarn, pnpm ou bun
- Git installé

### Étapes

1. Créer le projet :
   ```bash
   npx create-next-app@latest portfolio-christiane --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
````

2. Aller dans le dossier :

   ```bash
   cd portfolio-christiane
   ```

3. Installer les dépendances :

   ```bash
   npm install lucide-react
   ```

4. Copier les fichiers du projet :

   * Remplacer le contenu de `app/page.tsx`
   * Créer le dossier `components/`
   * Mettre à jour `app/globals.css`

5. Lancer le serveur de développement :

   ```bash
   npm run dev
   ```

6. Ouvrir le projet :

   ```
   http://localhost:3000
   ```

---

## 📁 Structure du projet

```bash
portfolio-christiane/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/ (composants shadcn/ui)
│   ├── about.tsx
│   ├── contact.tsx
│   ├── hero.tsx
│   ├── navigation.tsx
│   ├── projects.tsx
│   ├── services.tsx
│   └── skills.tsx
├── public/
│   └── placeholder.svg
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Configuration

### 1. Personnalisation du contenu

Dans `components/hero.tsx` :

```tsx
<h1>Bonjour, je suis <span>Votre Nom</span></h1>
<p>Votre description professionnelle...</p>
```

Dans `components/contact.tsx` :

```tsx
<p>votre-email@example.com</p>
<p>+33 X XX XX XX XX</p>
<p>Votre ville, Pays</p>
```

### 2. Formulaire de contact

* **Option A (recommandée) : EmailJS**

  ```bash
  npm install @emailjs/browser
  ```
* **Option B : API Route avec Nodemailer**

  ```bash
  npm install nodemailer
  ```

### 3. Ajouter vos projets

Dans `components/projects.tsx` :

```tsx
const projects = [
  {
    title: "Nom du projet",
    description: "Description détaillée...",
    image: "/image.jpg",
    technologies: ["React", "Node.js"],
    liveUrl: "https://projet.com",
    githubUrl: "https://github.com/user/projet",
  },
];
```

### 4. Couleurs personnalisées

Dans `tailwind.config.ts` :

```ts
extend: {
  colors: {
    primary: {
      50: '#faf5ff',
      600: '#9333ea',
      700: '#7c3aed',
    }
  }
}
```

---

## 🎨 Personnalisation rapide

* **Couleurs** : changer les classes Tailwind (`bg-purple-600` → `bg-blue-600`)
* **Sections** : ajouter de nouveaux composants dans `components/`
* **Animations** : éditer `globals.css` ou utiliser `animate-bounce`, `transition-all`, etc.
* **Images** : mettre vos images dans `public/` et utiliser `next/image`

---

## 🚀 Déploiement

### Sur **Vercel** (recommandé)

1. Pousser sur GitHub :

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```

2. Se connecter sur [vercel.com](https://vercel.com) et importer le repo.

### Sur Netlify

1. Builder le projet :

   ```bash
   npm run build
   ```
2. Déployer le dossier `out/` ou connecter le repo GitHub.

---

## 🔧 Maintenance

### Mises à jour

```bash
npm outdated
npm update
npm install next@latest react@latest react-dom@latest
```

### Optimisations

* Utiliser `next/image`
* Ajouter les métadonnées SEO
* Activer le lazy-loading des images

---

## ❓ FAQ

**Q : Comment ajouter un blog ?**
R : Intégrer un CMS (Sanity, Strapi) ou utiliser des fichiers Markdown.

**Q : Mode sombre ?**
R : Installer `next-themes` et utiliser les classes `dark:` de Tailwind.

**Q : Le formulaire ne fonctionne pas ?**
R : Vérifier les variables d’environnement EmailJS/Nodemailer.

---

## 📞 Support

### Ressources utiles

* [Next.js](https://nextjs.org/docs)
* [Tailwind CSS](https://tailwindcss.com/docs)
* [shadcn/ui](https://ui.shadcn.com)
* [Lucide Icons](https://lucide.dev)

### Problèmes courants

1. Styles non appliqués → Vérifier Tailwind
2. Images manquantes → Vérifier les chemins
3. Erreur de build → Vérifier les imports/exports

---

## 📄 Licence

Ce projet est sous licence **MIT**.
Vous pouvez l’utiliser, le modifier et le distribuer librement.

---

## 🙏 Remerciements

* **Next.js** pour le framework
* **Tailwind CSS** pour le styling
* **shadcn/ui** pour les composants
* **Lucide** pour les icônes

---

**Créé avec ❤️ par Christiane - Développeuse Web Full-Stack**
*Pour toute question ou suggestion, contactez-moi !*

```

lien de deployement sur vercel : https://portfolio-christiane.vercel.app/
 