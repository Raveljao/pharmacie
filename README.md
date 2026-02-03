# Pharmacie Nouvelle Ville

Une application web ultra-légère, 100% mobile-first pour une pharmacie à Madagascar.

## 🎯 Objectif

Générer des commandes rapidement via un catalogue simple + WhatsApp, avec Click & Collect et Livraison.

## ✨ Fonctionnalités

### Pages principales

1. **Accueil (/)** - Page d'accueil avec hero, recherche, catégories, infos et promotions
2. **Catalogue (/catalogue)** - Recherche, filtres par catégorie et disponibilité, liste de produits
3. **Panier (/panier)** - Gestion du panier, formulaire client, validation via WhatsApp
4. **Click & Collect (/click-collect)** - Explication du service de retrait en pharmacie
5. **Livraison (/livraison)** - Zones de livraison, délais et tarifs
6. **Conseil (/conseil)** - Demande de conseils pharmaceutiques via WhatsApp
7. **Promotions (/promos)** - Liste des promotions en cours
8. **Contact (/contact)** - Horaires, adresse, téléphone, carte

### Caractéristiques techniques

- ✅ **Bilingue** : Français + Malagasy (toggle en haut à droite)
- ✅ **Panier localStorage** : Persistance des données
- ✅ **WhatsApp Integration** : Validation de commande avec message pré-rempli
- ✅ **Mobile-First** : Design optimisé pour mobile
- ✅ **Léger** : Pas d'images lourdes, chargement rapide
- ✅ **Offline-friendly** : Fonctionne avec connexion faible
- ✅ **Pas de compte requis** : Commande directe sans inscription

## 🛠️ Technologies

- **Next.js 16** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React Context API** (Language & Cart)
- **localStorage** pour la persistance

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 🏗️ Structure du projet

```
pharmacie/
├── app/
│   ├── layout.tsx              # Layout principal avec providers
│   ├── page.tsx                # Page d'accueil
│   ├── catalogue/page.tsx      # Page catalogue
│   ├── panier/page.tsx         # Page panier
│   ├── click-collect/page.tsx  # Page Click & Collect
│   ├── livraison/page.tsx      # Page livraison
│   ├── conseil/page.tsx        # Page conseil
│   ├── promos/page.tsx         # Page promotions
│   ├── contact/page.tsx        # Page contact
│   └── globals.css             # Styles globaux
├── components/
│   ├── Header.tsx              # En-tête avec logo et toggle langue
│   ├── BottomNav.tsx           # Navigation sticky en bas
│   ├── WhatsAppButton.tsx      # Bouton WhatsApp flottant
│   └── ProductCard.tsx         # Carte produit
├── contexts/
│   ├── LanguageContext.tsx     # Contexte pour la langue
│   └── CartContext.tsx         # Contexte pour le panier
├── lib/
│   ├── products.json           # Base de données produits (30 produits)
│   ├── translations.ts         # Traductions FR/MG
│   └── types.ts                # Types TypeScript
└── README.md
```

## 🎨 Design

- **Couleurs** : Blanc + Vert sobre (thème pharmacie)
- **Accessibilité** : Gros boutons, bon contraste
- **Mobile-first** : Optimisé pour petits écrans
- **Action-first** : Textes courts, appels à l'action clairs

## 📱 Navigation

### Bottom Navigation (sticky)
- 🏠 Accueil
- 📦 Catalogue
- 🛒 Panier (avec badge de compteur)
- 💬 WhatsApp

### Floating Button
- Bouton WhatsApp flottant en bas à droite

## 🛒 Flux de commande

1. Parcourir le catalogue
2. Ajouter des produits au panier
3. Choisir Click & Collect ou Livraison
4. Remplir les informations client
5. Choisir le mode de paiement
6. Valider → Ouvre WhatsApp avec le récapitulatif complet

## 💳 Modes de paiement

- Sur place
- MVola
- Orange Money
- Airtel Money
- Espèces

## 📦 Produits

30 produits de démonstration répartis en catégories :
- Antidouleur
- Anti-inflammatoire
- Antibiotique (ordonnance requise)
- Vitamines
- Respiratoire
- Digestif
- Dermatologie
- Ophtalmologie
- Diabète
- Cardiovasculaire
- Hygiène
- Matériel médical
- Allergie
- Bébé
- Contraception

## 🌍 Langues

- **FR** : Français (par défaut)
- **MG** : Malagasy

Le toggle de langue est en haut à droite du header.

## 📞 Contact

- **Téléphone** : +261 34 00 000 00
- **WhatsApp** : +261 34 00 000 00
- **Adresse** : Nouvelle Ville, Antananarivo
- **Horaires** : 
  - Lun-Sam : 8h-19h
  - Dim : 9h-13h

## 🚀 Déploiement

```bash
# Build de production
npm run build

# Démarrer en production
npm start
```

## 📝 Notes

- Les numéros de téléphone WhatsApp sont configurables dans chaque composant
- Les produits sont stockés dans `lib/products.json`
- Les traductions sont dans `lib/translations.ts`
- Le panier est sauvegardé dans localStorage
- La langue préférée est sauvegardée dans localStorage

## 🔧 Personnalisation

### Changer le numéro WhatsApp

Rechercher et remplacer `261340000000` par votre numéro dans tous les fichiers.

### Ajouter des produits

Modifier le fichier `lib/products.json` en suivant la structure existante.

### Modifier les traductions

Éditer le fichier `lib/translations.ts` pour ajouter ou modifier des traductions.

## 📄 Licence

Ce projet est créé pour la Pharmacie Nouvelle Ville.

---

Développé avec ❤️ pour Madagascar 🇲🇬
