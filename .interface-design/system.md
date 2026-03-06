# Portfolio Design System - DEV VERSION 3.0
**Project**: Victor Rubia - Portfolio Développeur Full Stack
**Type**: Static HTML/CSS/JS
**Created**: 2026-02-16
**Updated**: 2026-02-16 (Dev version - VS Code theme)

---

## Direction & Feel

**Who**: Recruteurs tech, lead devs, startups cherchant dev junior full stack
**What**: Voir projets, comprendre stack (React/Next + Django/Python), évaluer niveau
**Feel**: Workspace de développeur - VS Code, terminal, code authentique

**Signature Systémique**: "Code Editor Workspace" - 5 éléments visibles
1. Terminal prompt header (`victor@dev:~/projects$`)
2. File tree sidebar (VS Code style)
3. Syntax highlighting colors (keywords, variables, strings)
4. Status bar (like VS Code bottom bar)
5. Code section headers (line numbers + comments)

---

## Color Palette - VS Code Dark Theme

### Editor Backgrounds
```css
--editor-bg: #1E1E1E           /* Main background */
--editor-surface: #252526      /* Cards, elevated */
--editor-surface-hover: #2D2D30
--sidebar-bg: #181818          /* Sidebar darker */
--sidebar-border: #2D2D30
```

### Text - VS Code Syntax Colors
```css
--text-primary: #D4D4D4        /* Default text */
--text-secondary: #9CDCFE      /* Secondary text */
--text-muted: #858585          /* Muted text */
--text-comment: #6A9955        /* Comments */
```

### Syntax Highlighting
```css
--syntax-keyword: #569CD6      /* const, let, import */
--syntax-variable: #9CDCFE     /* Variable names */
--syntax-string: #CE9178       /* Strings */
--syntax-function: #DCDCAA     /* Functions */
--syntax-operator: #D4D4D4     /* =, +, - */
--syntax-number: #B5CEA8       /* Numbers */
```

### Terminal Accents
```css
--terminal-green: #4AF626      /* Primary accent */
--terminal-blue: #3794FF       /* Links, active */
--terminal-orange: #FF9D00     /* Warnings */
--terminal-red: #F44747        /* Errors */
```

### UI Elements
```css
--border-default: #3E3E42      /* Standard borders */
--border-subtle: #2D2D30       /* Subtle dividers */
--selection-bg: #264F78        /* Selection highlight */
--hover-bg: #2A2D2E            /* Hover state */
```

---

## Typography - Monospace

**Fonts**:
- Monospace: `'JetBrains Mono', 'Consolas', monospace`
- Sans-serif: `'Inter', -apple-system, system-ui, sans-serif`

**Usage**:
- All code/terminal elements: JetBrains Mono
- Readable text (descriptions): Inter (rare)
- Consistent monospace for dev authenticity

**Sizes**:
- Name title: 32px
- Project title: 18px
- Body: 13-14px
- Labels/tags: 11-12px
- Status bar: 12px

---

## Spacing Scale

**Base**: 4px

```css
--space-xs: 4px
--space-sm: 8px
--space-md: 12px
--space-lg: 16px
--space-xl: 24px
--space-2xl: 32px
```

---

## Signature Elements

### 1. Terminal Prompt Header
```
victor@dev:~/projects$ ls --all _
```
- User: terminal-green
- Path: terminal-blue
- Command: syntax-function
- Cursor: blinking animation

### 2. File Tree Sidebar
```
📁 portfolio
  📄 about.md
  ⚛️ projects.tsx ← active
  📦 stack.json
  ✉️ contact.ts
```
- VS Code style explorer
- Active file highlighted (selection-bg)
- Icons for file types

### 3. Code Section Headers
```
12  // Projets
```
- Line numbers (muted)
- Comment style headers
- Syntax highlighting

### 4. Status Bar (Bottom)
```
⚡ 3 projets  📦 7 technologies  |  UTF-8  TypeScript  Ln 1, Col 1
```
- VS Code blue background
- White text
- Icons + counters

### 5. Project Cards with Code Accent
- Green left border on hover (3px)
- Elevated on hover (translateY -2px)
- Border turns blue
- Dark surface background

---

## Layout Structure

### Grid System
```
Terminal Header (sticky top)
├─ Tabs (portfolio.tsx)
└─ Prompt (victor@dev:~/projects$ ls --all)

VS Code Layout (flex)
├─ Sidebar (260px)
│  ├─ File Tree
│  └─ Stack Badges
└─ Editor Content (flex: 1)
   ├─ About Section
   ├─ Projects Section
   ├─ Status Bar (sticky bottom)
   └─ Footer
```

### Responsive
- **Desktop**: Sidebar + editor side-by-side
- **Tablet/Mobile**: Sidebar top, editor below
- Sidebar becomes horizontal scrolling file tree

---

## Components

### Terminal Tabs
- Background: editor-surface
- Active: editor-bg
- Icon: terminal-green dot
- Title: 13px mono

### Sidebar
- Width: 260px desktop
- Background: sidebar-bg (darker)
- File tree with hover states
- Stack badges at bottom

### Project Card
```css
.project-card {
  background: editor-surface
  border: 1px border-default
  border-radius: 6px
  padding: 16px

  /* Accent on hover */
  ::before { left: 3px green bar }
  :hover { border: terminal-blue, lift -2px }
}
```

**Structure**:
1. Header: Type + links (GitHub/Demo icons)
2. Title: 18px mono
3. Description: 13px, text-secondary
4. Tech tags: Small badges, hover-bg

### Stack Badges
```css
.badge {
  padding: 3px 8px
  font-size: 11px
  border-radius: 3px

  /* Colors per tech */
  .badge-react { bg: #61DAFB22, color: #61DAFB }
  .badge-django { bg: #0C4B3322, color: #44B78B }
  etc.
}
```

### Status Bar
- Sticky bottom
- Background: terminal-blue (#3794FF)
- Text: white
- Split left/right
- Icons + counters

---

## Data Structure

```javascript
{
  id: Number,
  title: String,
  description: String,
  type: "Full Stack" | "Frontend" | "Backend",
  github: String | null,
  demo: String | null,
  tech: Array<String>
}
```

---

## User Stack

**Frontend**:
- React
- Next.js
- TypeScript

**Backend**:
- Django
- Python
- Node.js

**Styling**:
- Tailwind CSS
- Bootstrap

**Tools**:
- VS Code (design inspiration)
- Git

---

## Animations

**Cursor Blink**:
```css
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
```

**Card Hover**:
- Transform: translateY(-2px)
- Border-color: terminal-blue
- Green left bar: opacity 0 → 1
- Transition: 200ms ease

**Smooth Scroll**:
- JS: `scrollIntoView({ behavior: 'smooth' })`
- Active section highlight in file tree

---

## Craft Principles Applied

**Token Test**: ✅ All tokens evoke VS Code/terminal world
- editor-bg, syntax-keyword, terminal-green, etc.

**Signature Test**: ✅ 5 visible code editor elements
- Terminal prompt, file tree, syntax colors, status bar, code headers

**Swap Test**: ✅ Can't swap for generic portfolio
- Layout is VS Code-specific, not adaptable to other themes

**Squint Test**: ✅ Hierarchy clear
- Sidebar vs editor, sections with headers, card elevation

---

## Consistency Rules

**When adding features**:
1. Use VS Code token names (editor-, syntax-, terminal-)
2. Monospace font for all code-related content
3. Syntax highlighting colors for code examples
4. Terminal accents for interactive elements
5. Status bar for dynamic info display

**Signature must appear**:
- File tree navigation (sidebar)
- Syntax colors (headings, text)
- Terminal style (prompt, footer)
- Code structure (line numbers, comments)
- Dark editor theme (all backgrounds)

**Avoid**:
- Light backgrounds (breaks VS Code theme)
- Sans-serif for code (use monospace)
- Bright neon colors (use subtle syntax colors)
- Marketing language (keep tech/dev authentic)
- Generic layouts (maintain VS Code structure)

---

## File Organization

```
portfolio-victor/
├── index.html          # Main page (dev version)
├── styles.css          # VS Code theme
├── script.js           # Projects + interactions
├── images/             # Project screenshots
├── README.md           # Dev-focused docs
└── .interface-design/
    └── system.md       # This file
```

---

**Design for developers, by understanding their world** - VS Code workspace, not generic template.
