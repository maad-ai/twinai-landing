# Twin AI — Brand Kit

## Nom & Domaine
- **Nom**: Twin AI
- **Domaine**: twin.ai (achat via Hostinger)
- **Tagline**: "Your Voice. Their World. 24/7."

---

## Couleurs

### Palette principale (style TikTok — bold, vibrant, multi-color)
| Token | Hex | Usage |
|-------|-----|-------|
| **coral** | `#FF6B6B` | Accent chaud, CTAs influenceurs |
| **cyan** | `#00D4FF` | Accent froid, CTAs clients, tech |
| **violet** | `#A855F7` | Accent creatif, gradients, highlights |
| **lime** | `#84FF57` | Accent energie, success states |
| **gold** | `#FBBF24` | Accent premium, badges, pricing |
| **white** | `#FFFFFF` | Texte principal, fond clair |
| **off-white** | `#F8FAFC` | Fond sections alternees |
| **dark** | `#0F0F23` | Fond dark sections, hero |
| **dark-mid** | `#1A1A3E` | Fond cards dark mode |
| **gray** | `#94A3B8` | Texte secondaire |

### Gradients signatures
- **Hero gradient**: `linear-gradient(135deg, #FF6B6B, #A855F7, #00D4FF)`
- **CTA gradient**: `linear-gradient(90deg, #FF6B6B, #A855F7)`
- **Card shimmer**: `linear-gradient(135deg, rgba(168,85,247,0.1), rgba(0,212,255,0.1))`
- **Text gradient**: `linear-gradient(90deg, #FF6B6B, #00D4FF)` (pour titres hero)

### Regles
- Multi-color = signature du brand. Les gradients sont partout mais subtils (sauf hero).
- Mix de light mode (sections blanches) et dark mode (hero, sections features).
- Les couleurs individuelles servent de highlights — jamais de gros blocs de couleur plate.

---

## Typographie

### Fonts
| Font | Role | Poids | Usage |
|------|------|-------|-------|
| **Plus Jakarta Sans** | Titres | 700, 800 | h1-h6, titres, bold statements |
| **Inter** | Body/UI | 400, 500, 600 | Corps, navigation, boutons, formulaires |

### Tailles
- h1 : `clamp(3rem, 8vw, 5rem)` — hero, bold
- h2 : `clamp(2rem, 5vw, 3rem)`
- h3 : `clamp(1.25rem, 2.5vw, 1.5rem)`
- Body : `1rem / 1.125rem`, line-height `1.7`
- Small : `0.875rem`

### Style
- Titres en **gras** (700-800), parfois avec gradient text
- Lettres serrees sur h1 : `-0.02em`
- Body relax et lisible

---

## Composants

### Boutons
**Primaire (CTA)**:
- Fond : gradient `#FF6B6B → #A855F7`
- Texte : blanc
- Border-radius : `12px`
- Padding : `14px 28px`
- Hover : lift `-2px`, shadow colored `0 8px 30px rgba(168,85,247,0.4)`
- Transition : `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

**Secondaire**:
- Fond : transparent
- Bordure : `2px solid rgba(168,85,247,0.3)`
- Texte : dark ou white selon le fond
- Hover : bordure solide, fond subtle `rgba(168,85,247,0.05)`

### Cards
- Fond : blanc (light) ou `#1A1A3E` (dark)
- Bordure : `1px solid rgba(0,0,0,0.06)` (light) ou `rgba(255,255,255,0.08)` (dark)
- Border-radius : `16px`
- Shadow : `0 4px 24px rgba(0,0,0,0.06)`
- Hover : lift `-6px`, shadow plus forte, subtle gradient border

### Badges / Tags
- Fond : gradient subtle
- Border-radius : `999px` (pill)
- Font : Inter 500, `0.75rem`
- Padding : `6px 14px`

### Inputs
- Fond : `#F8FAFC` (light) ou `rgba(255,255,255,0.05)` (dark)
- Bordure : `1px solid rgba(0,0,0,0.1)`
- Border-radius : `12px`
- Focus : bordure gradient, shadow colored

---

## Hero & Fonds

### Hero (dark)
```css
background: linear-gradient(135deg, #0F0F23 0%, #1A1A3E 50%, #0F0F23 100%);
```
Avec des formes colorees floues en arriere-plan:
- Blob coral en haut gauche : `radial-gradient(ellipse at 20% 20%, rgba(255,107,107,0.15), transparent)`
- Blob violet au centre : `radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.12), transparent)`
- Blob cyan en bas droite : `radial-gradient(ellipse at 80% 80%, rgba(0,212,255,0.1), transparent)`

### Sections light
Fond blanc `#FFFFFF` ou off-white `#F8FAFC` en alternance.

### Grain/noise
Subtil, `opacity: 0.03`, pour texture.

---

## Animations

### Easing
`cubic-bezier(0.4, 0, 0.2, 1)` — smooth et naturel.

### Scroll reveal
- `translateY(30px)` + `opacity: 0` au depart
- Stagger `100ms` entre elements
- Duration `0.6s`

### Hover cards
- `translateY(-6px)`, shadow intensifiee
- Transition `0.3s`

### Gradient animate (hero)
- Gradient background en mouvement lent (20s infinite)
- Blobs qui driftent subtilement

### Accessibilite
`prefers-reduced-motion: reduce` — tout statique.

---

## Ton et voix

### Langue
- **Anglais** pour le brand (marche global)
- Direct, energique, Gen-Z friendly
- Mix de casual et professionnel

### Style
- Phrases courtes et percutantes
- Emojis OK dans le marketing (pas dans le UI)
- Oriente benefice : "Earn while you sleep" pas "We provide passive income solutions"
- Confiant et playful

### Exemples de copy
- Hero : "Your Voice. Their World. 24/7."
- Sub : "Create an AI twin of yourself. Let your audience connect with you — even when you're offline."
- CTA influenceur : "Create Your Twin"
- CTA client : "Explore Twins"
- How it works : "Upload. Train. Earn."

---

## Layout

- Container max : `1200px`
- Padding container : `clamp(1rem, 5vw, 2rem)`
- Sections : padding-block `clamp(4rem, 10vw, 8rem)`
- Grid gap : `1.5rem - 2rem`
- Mobile-first, breakpoints: `640px`, `768px`, `1024px`, `1280px`
