# Améliorations Craft - Version 2.0

## 🎯 Problèmes Résolus

### 1. Token Test ✅
**AVANT** : Tokens génériques (`--fg-primary`, `--bg-canvas`)
**APRÈS** : Tokens évoquant l'ingénierie
```css
--ink-technical: #2a2e32
--paper-blueprint: #f7f9fb
--graphite-dark: #2c3338
--metal-border: rgba(42, 46, 50, 0.12)
--blueprint-blue: #2b5f8f
```

### 2. Signature Systémique ✅
**5 éléments techniques visibles** :
1. ✅ **Grille de mesure sous-jacente** - Background fixe avec lignes subtiles (8px grid)
2. ✅ **Corner markers** - Coins techniques sur les cards (style plans)
3. ✅ **Specs techniques** - REF + ANNÉE dans chaque card
4. ✅ **Header blueprint** - Grille technique double (20px + 100px)
5. ✅ **Navigation technique** - Préfixe "ING." + metadata (ES · Madrid)

### 3. Typography Motivée ✅
**AVANT** : Lora + Open Sans (safe mais générique)
**APRÈS** : Monospace pour précision technique
```css
--font-heading: 'IBM Plex Mono', monospace  /* Titres techniques */
--font-body: 'Inter', sans-serif            /* Clarté */
--font-data: 'JetBrains Mono', monospace    /* Specs/données */
```

### 4. Defaults Éliminés ✅
- **Navigation** : Plus "ING. Víctor Rubia" + contexte (localisation, rôle)
- **Header** : Titre uppercase + specs techniques + compteur projets
- **Grid** : 360px minmax (plus 340px standard)
- **Radius** : 2px/4px (plus 3px/6px) = plus technique/sharp
- **Cards** : Corner markers + specs techniques

---

## 🎨 Nouveautés Visuelles

### Grille de Mesure Globale
```css
body::before {
  /* Grille technique 8x8px sur toute la page */
  repeating-linear-gradient(0/90deg, transparent 7px, blue 8px)
  opacity: 0.6
}
```

### Header Blueprint
- Grille technique double (petite + grande)
- Specs techniques : SPÉCIALITÉ + PROJETS (avec compteur dynamique)
- Référence : PORTFOLIO · 2026
- Titre uppercase sur 2 lignes

### Cards avec Corner Markers
```css
.project-card::before, ::after {
  /* Coins en L comme sur plans techniques */
  border: 2px solid blueprint-blue
  opacity: 0.2 → 0.5 (hover)
}
```

### Specs Techniques dans Cards
```
REF    PRJ-001
ANNÉE  2024
```

### Navigation Contextuelle
```
ING. Víctor Rubia  |  ES · Madrid | Ingénieur Industriel
```

---

## 📊 Métriques Craft

| Check | Avant | Après |
|-------|-------|-------|
| **Token Test** | ❌ Générique | ✅ Technique |
| **Signature Test** | ❌ 1 élément | ✅ 5 éléments |
| **Swap Test** | ❌ Interchangeable | ✅ Unique |
| **Squint Test** | ✅ Hiérarchie OK | ✅ Hiérarchie++ |

---

## 🔧 Fichiers Modifiés

1. **index.html**
   - Fonts : IBM Plex Mono + Inter + JetBrains Mono
   - Navigation avec préfixe ING. + meta
   - Header avec specs techniques + compteur

2. **styles.css** (entièrement réécrit)
   - Tokens techniques (ink, paper, graphite, metal, blueprint)
   - Grille de mesure globale (body::before)
   - Corner markers (card::before/after)
   - Header blueprint grid
   - Typography monospace
   - Spacing 8px base (plus technique)
   - Radius sharp (2px/4px)

3. **script.js**
   - Fonction `formatProjectRef()` pour REF (PRJ-001)
   - Fonction `updateProjectCount()` pour compteur header
   - Specs techniques dans template card

---

## 🎯 Résultat

**Portfolio qui ressemble maintenant à un carnet de plans techniques d'ingénieur**

Chaque élément renforce la signature "Technical Drawing" :
- Grille sous-jacente = papier millimétré
- Corner markers = coins de plans
- Specs = fiches techniques
- Monospace = précision
- Metal borders = rigueur

**Plus aucun élément générique** - tout est motivé par le domaine de l'ingénierie industrielle.
