# 🚀 Nouveau design — Mode d'emploi

## Ce qui a changé

Ton fichier `clean_nav.txt` contient maintenant le **nouveau design premium épuré** (style Apple, sombre et élégant) :

- **Une seule couleur d'accent** (bleu) au lieu du mélange cyan/violet/rose/orange → plus pro, plus lisible
- **Tes vraies photos de montages** enfin utilisées : dans le grand visuel d'accueil, sur les 3 cartes de configs, et dans une nouvelle section « Réalisations »
- **Photo de profil corrigée** : l'ancienne adresse pointait vers un fichier qui n'existe pas (`profile-photo.png` au lieu de `profile-photo.png.png`) — ta photo était cassée sur le site. C'est réparé.
- **Vraie carte Google Maps** intégrée (en mode sombre) à la place du faux encadré
- **Typographie Inter** (la police utilisée par les plus grands sites tech), boutons arrondis « pilule », espaces généreux
- Animations plus sobres et fluides (les effets gadgets ont été retirés : inclinaison 3D, orbes qui suivent la souris, barre de progression…)
- **Tout le contenu est conservé** : tarifs, textes, formulaire, avis, référencement Google (SEO), menu identique

L'ancienne version est sauvegardée dans **`clean_nav_ANCIEN.txt`** — tu peux revenir en arrière à tout moment.

---

## Étape 1 — Voir le résultat avant de publier

1. Ouvre ton dossier `DépannagePcGard`
2. Double-clique sur **`APERCU-nouveau-design.html`**
3. La page s'ouvre dans ton navigateur : c'est exactement ce que verront tes visiteurs (les photos se chargent depuis ton site en ligne, il faut donc être connecté à Internet)

## Étape 2 — Publier sur ton site

1. Double-clique sur **`copy_to_clipboard.bat`** (comme d'habitude) → le nouveau code est copié
2. Connecte-toi à ton WordPress : `https://www.depannagepcgard.fr/wp-admin`
3. Menu **Pages** → clique sur **Accueil** → **Modifier**
4. Ouvre ton bloc HTML personnalisé, **sélectionne tout l'ancien code** (Ctrl+A dans le bloc) et **colle** (Ctrl+V)
5. Clique sur **Mettre à jour** (bouton bleu en haut à droite)
6. **Vide le cache** : dans le menu de gauche, va dans **WP Fastest Cache** → onglet « Supprimer le cache » → **Vider tout le cache** (sinon les visiteurs verront encore l'ancienne version)
7. Ouvre ton site en navigation privée (Ctrl+Maj+N) pour vérifier

## En cas de problème

- Si quelque chose ne va pas : ouvre `clean_nav_ANCIEN.txt`, copie tout son contenu, et refais l'étape 2 avec — ton site redevient comme avant.

---

## 🎁 2 améliorations bonus à faire dans WordPress (5 min)

### 1. Corriger la description Google (important pour le référencement)

Actuellement, quand ton site apparaît sur Google/Facebook, la description affichée est… du code CSS (`body::before{content:...`). C'est parce que WordPress génère automatiquement l'extrait à partir du contenu de la page, qui commence par du code.

**Correction :** Pages → Accueil → Modifier → panneau de droite, section **Extrait** → colle ce texte :

> Dépannage PC rapide à domicile à Nîmes et dans le Gard. Montage PC gaming sur mesure, suppression virus, récupération données. Devis gratuit. Intervention sous 24h.

Puis **Mettre à jour**.

### 2. Masquer le double menu

Ta page affiche 2 menus : celui du thème Astra (en haut) + le tien (dans le code). Pour ne garder que le tien :

Pages → Accueil → Modifier → panneau de droite, cherche la section **Astra Settings** (ou l'icône réglages) → dans « Désactiver les sections », coche :
- **Désactiver l'en-tête** (Disable Header)
- **Désactiver le titre** (Disable Title)

Puis **Mettre à jour** et vide le cache. Résultat : une page 100 % propre, sans doublon.
