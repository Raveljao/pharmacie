# 🔧 Guide de Configuration - Pharmacie Nouvelle Ville

## Configuration rapide avant mise en production

### 1. 📞 Numéro WhatsApp

**Fichiers à modifier** :

Rechercher et remplacer `261340000000` par votre numéro WhatsApp dans :

- `components/BottomNav.tsx` (ligne ~56)
- `components/WhatsAppButton.tsx` (ligne ~6)
- `components/ProductCard.tsx` (ligne ~18)
- `app/panier/page.tsx` (ligne ~55)
- `app/conseil/page.tsx` (ligne ~35)
- `app/promos/page.tsx` (ligne ~13)
- `app/contact/page.tsx` (ligne ~11)

**Format du numéro** : `261XXXXXXXXX` (sans espaces, sans +)

Exemple : Si votre numéro est +261 34 12 345 67, utilisez `261341234567`

### 2. 🏪 Informations de la pharmacie

**Fichier** : `lib/translations.ts`

Modifier les sections suivantes :

```typescript
// Horaires
hoursDetail: "Lun-Sam: 8h-19h, Dim: 9h-13h",

// Adresse
addressDetail: "Nouvelle Ville, Antananarivo",

// Téléphone
phoneNumber: "+261 34 00 000 00",
```

### 3. 💊 Produits

**Fichier** : `lib/products.json`

Structure d'un produit :

```json
{
  "id": "1",
  "nom": "Nom du produit en français",
  "nom_mg": "Nom du produit en malagasy",
  "prix": 2000,
  "categorie": "Catégorie",
  "disponible": true,
  "ordonnance_requise": false,
  "description": "Description du produit"
}
```

**Catégories disponibles** :
- Antidouleur
- Anti-inflammatoire
- Antibiotique
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

**Ajouter un produit** :
1. Copier un produit existant
2. Changer l'ID (unique)
3. Modifier les informations
4. Sauvegarder le fichier

### 4. 🚚 Zones et tarifs de livraison

**Fichier** : `app/livraison/page.tsx`

Modifier la liste des zones (ligne ~10) :

```typescript
const deliveryZones = [
  'Votre zone 1',
  'Votre zone 2',
  // ... ajoutez vos zones
];
```

Modifier les tarifs (ligne ~60) :

```typescript
<div className="flex justify-between">
  <span>Centre-ville (0-3 km)</span>
  <span className="font-semibold">2 000 Ar</span>
</div>
```

### 5. 🎨 Couleurs et branding

**Fichier** : `app/globals.css`

Couleur principale (vert emerald) :
- Rechercher `#059669` ou `emerald-600`
- Remplacer par votre couleur

**Fichier** : `components/Header.tsx`

Logo et nom (ligne ~13) :

```typescript
<span className="font-bold text-lg text-gray-900">Nouvelle Ville</span>
```

### 6. 🌍 Traductions

**Fichier** : `lib/translations.ts`

Ajouter ou modifier des traductions :

```typescript
export const translations = {
  fr: {
    nouveauTexte: "Nouveau texte en français",
    // ...
  },
  mg: {
    nouveauTexte: "Nouveau texte en malagasy",
    // ...
  }
};
```

Utiliser dans un composant :

```typescript
const { t } = useLanguage();
<p>{t('nouveauTexte')}</p>
```

### 7. 📍 Lien Google Maps

**Fichier** : `app/contact/page.tsx`

Modifier le lien (ligne ~16) :

```typescript
const handleMap = () => {
  window.open('https://maps.google.com/?q=VOTRE_ADRESSE', '_blank');
};
```

### 8. 📧 Métadonnées SEO

**Fichier** : `app/layout.tsx`

Modifier les métadonnées (ligne ~15) :

```typescript
export const metadata: Metadata = {
  title: "Votre titre",
  description: "Votre description",
  keywords: "vos, mots, clés",
};
```

### 9. 🎯 Message WhatsApp personnalisé

**Fichier** : `app/panier/page.tsx`

Modifier le format du message (ligne ~25) :

```typescript
let message = `🛒 *NOUVELLE COMMANDE*\n\n`;
// Personnaliser le format selon vos besoins
```

### 10. 💰 Modes de paiement

**Fichier** : `app/panier/page.tsx`

Modifier les options de paiement (ligne ~245) :

```typescript
{['on-site', 'mvola', 'orange', 'airtel', 'cash'].map((method) => (
  // Ajouter ou retirer des méthodes
))}
```

## 🎨 Personnalisation avancée

### Changer la police

**Fichier** : `app/layout.tsx`

```typescript
import { VotrePolice } from "next/font/google";

const votrePolice = VotrePolice({
  subsets: ["latin"],
  display: "swap",
});
```

### Ajouter une nouvelle page

1. Créer `app/nouvelle-page/page.tsx`
2. Ajouter le lien dans la navigation si nécessaire
3. Ajouter les traductions dans `lib/translations.ts`

### Modifier le Bottom Nav

**Fichier** : `components/BottomNav.tsx`

Ajouter/modifier les items (ligne ~12) :

```typescript
const navItems = [
  {
    href: '/nouvelle-page',
    label: t('nouveauLabel'),
    icon: <svg>...</svg>,
  },
  // ...
];
```

## ✅ Checklist avant déploiement

- [ ] Numéro WhatsApp mis à jour
- [ ] Adresse de la pharmacie correcte
- [ ] Horaires d'ouverture corrects
- [ ] Produits réels ajoutés
- [ ] Zones de livraison configurées
- [ ] Tarifs de livraison corrects
- [ ] Traductions vérifiées (FR + MG)
- [ ] Lien Google Maps fonctionnel
- [ ] Métadonnées SEO remplies
- [ ] Test sur mobile effectué
- [ ] Test de commande WhatsApp effectué
- [ ] Couleurs et logo personnalisés (optionnel)

## 🚀 Déploiement

### Option 1 : Vercel (Recommandé)

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Installer Vercel CLI : `npm i -g vercel`
3. Dans le dossier du projet : `vercel`
4. Suivre les instructions

### Option 2 : Netlify

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Glisser-déposer le dossier `.next` après `npm run build`

### Option 3 : Serveur personnel

```bash
# Build
npm run build

# Démarrer
npm start
```

## 📱 Test final

Avant le déploiement, tester :

1. ✅ Navigation entre toutes les pages
2. ✅ Ajout de produits au panier
3. ✅ Modification des quantités
4. ✅ Changement de langue FR/MG
5. ✅ Validation de commande WhatsApp
6. ✅ Envoi d'ordonnance pour produits Rx
7. ✅ Filtres du catalogue
8. ✅ Recherche de produits
9. ✅ Responsive sur mobile
10. ✅ Persistance du panier (recharger la page)

## 🆘 Problèmes courants

### Le panier ne se sauvegarde pas
- Vérifier que localStorage est activé dans le navigateur
- Vider le cache et réessayer

### WhatsApp ne s'ouvre pas
- Vérifier le format du numéro (sans espaces, sans +)
- Tester sur mobile (WhatsApp doit être installé)

### Les traductions ne s'affichent pas
- Vérifier que la clé existe dans `lib/translations.ts`
- Vérifier l'import de `useLanguage()`

### Erreur de compilation
- Supprimer `.next` et `node_modules`
- Relancer `npm install` puis `npm run dev`

---

**Configuration terminée!** 🎉

Votre pharmacie est prête à être déployée!
