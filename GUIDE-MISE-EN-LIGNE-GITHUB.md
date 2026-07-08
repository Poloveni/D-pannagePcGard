# 🚀 Mise en ligne du nouveau site sur GitHub Pages

> ⚠️ Ce guide remplace l'ancien `MODE-EMPLOI-nouveau-design.md` (qui expliquait comment publier sur WordPress). **On ne publie plus rien sur WordPress : il est piraté.** Le nouveau site complet est dans le dossier **`docs/`**.

## Ce qui a été construit

Un site complet, sans WordPress, impossible à pirater de la même façon (il n'y a plus ni base de données ni code exécuté sur le serveur) :

| Page | Adresse |
|---|---|
| Accueil | `/` |
| Tarifs complets | `/tarifs/` |
| Montages réalisés (galerie photos) | `/montage-pc/` |
| Devis / RDV (formulaire détaillé) | `/formulaire-rdv/` |
| FAQ (10 questions, optimisée Google) | `/faq/` |
| Confidentialité, CGV, Remboursement, Accessibilité | pages légales réécrites |

Les adresses sont **identiques à l'ancien site** pour conserver ton référencement. Le configurateur a été supprimé comme convenu. Les formulaires continuent d'envoyer les messages sur ta boîte mail via Web3Forms. Un plan de site (`sitemap.xml`) est inclus pour aider Google à réindexer proprement.

---

## Étape 1 — Envoyer le site sur GitHub (5 min)

1. Ouvre **GitHub Desktop** (l'application avec laquelle ce dossier est synchronisé)
2. Tu vas voir tous les nouveaux fichiers dans la colonne de gauche
3. En bas à gauche, dans « Summary », écris : `Nouveau site statique` puis clique **Commit to main**
4. Clique **Push origin** en haut (ça envoie les fichiers sur GitHub.com)

## Étape 2 — Activer GitHub Pages (3 min)

1. Va sur **github.com** et connecte-toi
2. Ouvre ton dépôt (repository) `DépannagePcGard`
3. Onglet **Settings** (roue dentée) → menu de gauche → **Pages**
4. Section « Build and deployment » :
   - Source : **Deploy from a branch**
   - Branch : **main** — Folder : **/docs** → **Save**
5. Attends 2-3 minutes. La page affichera l'adresse de ton site.

⚠️ Si ton dépôt est **privé**, GitHub Pages gratuit exige qu'il soit **public**. Pour le rendre public : Settings → tout en bas « Danger Zone » → « Change visibility » → Public. (Ton site étant destiné au public, il n'y a rien de secret dedans — j'ai vérifié qu'aucun mot de passe ne traîne dans le dossier `docs/`.)

## Étape 3 — Brancher ton nom de domaine (10 min)

Ton domaine `depannagepcgard.fr` est géré chez ton **registrar** (l'endroit où tu as acheté le domaine — probablement ton hébergeur actuel : OVH, o2switch, Ionos…). Connecte-toi à son espace client et ouvre la **gestion DNS** (la « carte d'orientation » qui dit où pointe ton domaine).

1. **Modifie/crée l'enregistrement `www`** :
   - Type : `CNAME` — Nom : `www` — Valeur : `TON-PSEUDO-GITHUB.github.io.`
   - (remplace TON-PSEUDO-GITHUB par ton nom d'utilisateur GitHub, visible en haut à droite sur github.com)
   - S'il existe déjà un enregistrement `www` (type A ou CNAME) → supprime l'ancien
2. **Modifie les enregistrements du domaine nu** (`depannagepcgard.fr` sans www), type `A` :
   - Supprime les anciens enregistrements A, et crée ces 4 :
   - `185.199.108.153` · `185.199.109.153` · `185.199.110.153` · `185.199.111.153`
3. 🚨 **NE TOUCHE À RIEN D'AUTRE — surtout pas aux enregistrements `MX`** : ce sont eux qui font fonctionner ton adresse email `contact@depannagepcgard.fr`. Tant que tu ne résilies pas ton hébergement et ne touches pas aux MX, tes emails continuent de fonctionner normalement.
4. Retourne sur GitHub → Settings → Pages → « Custom domain » : tape `www.depannagepcgard.fr` → **Save**
5. Attends que GitHub affiche une coche verte (la propagation DNS peut prendre de 15 min à quelques heures), puis coche **Enforce HTTPS** (cadenas de sécurité)

✅ À ce moment-là, ton nouveau site est en ligne et **le WordPress piraté n'est plus accessible par personne** via ton domaine.

## Étape 4 — Dire à Google de réindexer (5 min)

1. Va sur **Google Search Console** (search.google.com/search-console) — tu y as déjà accès via Site Kit
2. Menu « Sitemaps » → ajoute : `https://www.depannagepcgard.fr/sitemap.xml` → Envoyer
3. Menu « Inspection de l'URL » → tape ton adresse d'accueil → « Demander une indexation ». Refais-le pour `/tarifs/` et `/faq/`
4. Les pages de spam du pirate renverront désormais une erreur 404 et disparaîtront des résultats Google en quelques semaines

## Étape 5 — Faire le ménage (quand tout fonctionne)

- **Change tous tes mots de passe** si ce n'est pas déjà fait (hébergeur, WordPress, email)
- Préviens ton hébergeur que le site WordPress a été piraté (ils peuvent nettoyer le serveur)
- **Ne résilie PAS l'hébergement tout de suite** : ton adresse email en dépend. Quand tu voudras résilier, il faudra d'abord migrer l'email (on pourra le faire ensemble — la plupart des registrars proposent l'email pour quelques euros/an)
- Garde le dossier `www/` local : c'est ta sauvegarde de l'ancien site

---

## Modifier le site à l'avenir

C'est devenu simple : modifie les fichiers dans `docs/` (ou demande-moi), puis dans GitHub Desktop : **Commit** → **Push**. Le site se met à jour en 1-2 minutes. Plus de cache à vider, plus de plugins, plus de mises à jour de sécurité.
