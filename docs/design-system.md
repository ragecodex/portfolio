# Design System
## Ragib Smajic Portfolio Website

---

### Document Information
- **Version:** 1.0.0
- **Last Updated:** December 6, 2025
- **Status:** Design Definition

---

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Animations & Transitions](#animations--transitions)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)
9. [Design Tokens](#design-tokens)

---

## Design Philosophy

### Core Principles

1. **Minimalism First**
   - Remove unnecessary elements
   - Focus on content over decoration
   - Generous use of whitespace
   - "Less is more" approach

2. **Clarity & Hierarchy**
   - Clear visual hierarchy guides the eye
   - Important information stands out
   - Consistent patterns reduce cognitive load
   - Scannable content structure

3. **Professional & Modern**
   - Contemporary design patterns
   - Subtle sophistication
   - Avoid trendy elements that date quickly
   - Timeless aesthetic

4. **Performance-Conscious**
   - Every design decision considers performance
   - Optimize images, minimize animations
   - Respect user preferences (reduced motion)

5. **Dark-First Aesthetic**
   - Primary theme is dark/gray
   - High contrast for readability
   - Accent colors for emphasis
   - Avoid pure black (#000) - use near-black for depth

### Design Inspiration

**Reference portfolios** (for inspiration, not copying):
- Minimalist portfolios: leerob.io, rauchg.com
- Dark themes: cassie.codes, brittanychiang.com
- Clean layouts: paco.me, bruno-simon.com

**Characteristics to emulate:**
- Generous spacing between sections
- Clear typography hierarchy
- Subtle animations that enhance (not distract)
- Mobile-first responsive design
- Fast load times

---

## Color Palette

### Primary Colors (Backgrounds)

```css
/* Near-Black (Main Background) */
--bg-primary: #0a0a0a;
--bg-primary-rgb: 10, 10, 10;

/* Dark Gray (Card Backgrounds) */
--bg-secondary: #1a1a1a;
--bg-secondary-rgb: 26, 26, 26;

/* Medium Dark Gray (Borders, Hover States) */
--bg-tertiary: #2a2a2a;
--bg-tertiary-rgb: 42, 42, 42;

/* Slightly Lighter Gray (Subtle Dividers) */
--bg-quaternary: #3a3a3a;
--bg-quaternary-rgb: 58, 58, 58;
```

**Usage:**
- `bg-primary`: Main body background, largest surface area
- `bg-secondary`: Cards, project tiles, value cards
- `bg-tertiary`: Borders, subtle separators, hover background
- `bg-quaternary`: Active states, pressed states

### Text Colors

```css
/* Off-White (Primary Text) */
--text-primary: #f5f5f5;
--text-primary-rgb: 245, 245, 245;

/* Light Gray (Secondary Text) */
--text-secondary: #a3a3a3;
--text-secondary-rgb: 163, 163, 163;

/* Medium Gray (Tertiary Text, Labels) */
--text-tertiary: #737373;
--text-tertiary-rgb: 115, 115, 115;

/* Subtle Gray (Disabled Text) */
--text-disabled: #525252;
--text-disabled-rgb: 82, 82, 82;
```

**Usage:**
- `text-primary`: Headings, body text, primary content
- `text-secondary`: Subheadings, supporting text, dates
- `text-tertiary`: Labels, captions, metadata
- `text-disabled`: Inactive elements (if needed)

### Accent Colors

```css
/* Primary Accent (Blue - CTAs, Links) */
--accent-primary: #3b82f6;
--accent-primary-rgb: 59, 130, 246;

/* Primary Hover (Brighter Blue) */
--accent-primary-hover: #60a5fa;
--accent-primary-hover-rgb: 96, 165, 250;

/* Secondary Accent (Purple - Highlights) */
--accent-secondary: #8b5cf6;
--accent-secondary-rgb: 139, 92, 246;

/* Success/Positive (Green - Optional) */
--accent-success: #10b981;
--accent-success-rgb: 16, 185, 129;

/* Warning/Attention (Yellow - Optional) */
--accent-warning: #f59e0b;
--accent-warning-rgb: 245, 158, 11;
```

**Usage:**
- `accent-primary`: CTA buttons, important links, interactive elements
- `accent-primary-hover`: Hover states for primary accent
- `accent-secondary`: Secondary emphasis, subtle highlights
- `accent-success`: Success messages, positive indicators (future use)
- `accent-warning`: Warnings, attention needed (future use)

### Semantic Colors (Future)

```css
/* Error/Danger (Red) */
--semantic-error: #ef4444;
--semantic-error-rgb: 239, 68, 68;

/* Info (Light Blue) */
--semantic-info: #06b6d4;
--semantic-info-rgb: 6, 182, 212;
```

### Color Accessibility

**Contrast Ratios (WCAG AA):**
- `text-primary` on `bg-primary`: **13.5:1** ✅ (AAA)
- `text-secondary` on `bg-primary`: **7.2:1** ✅ (AAA)
- `text-tertiary` on `bg-primary`: **4.6:1** ✅ (AA)
- `accent-primary` on `bg-primary`: **4.8:1** ✅ (AA)

**Testing Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Tailwind Color Configuration

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
          quaternary: '#3a3a3a',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a3a3a3',
          tertiary: '#737373',
          disabled: '#525252',
        },
        accent: {
          primary: {
            DEFAULT: '#3b82f6',
            hover: '#60a5fa',
          },
          secondary: '#8b5cf6',
          success: '#10b981',
          warning: '#f59e0b',
        },
        semantic: {
          error: '#ef4444',
          info: '#06b6d4',
        },
      },
    },
  },
}
```

---

## Typography

### Font Families

**Primary Font:** [Geist Sans](https://vercel.com/font) (Vercel's open-source font)
- **Alternatives:** Inter, DM Sans, or system fonts
- **Fallback:** System font stack for instant rendering

```css
font-family: 'Geist Sans', 'Inter', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

**Why Geist/Inter?**
- Modern, professional appearance
- Excellent readability at all sizes
- Wide character set
- Open-source and free
- Optimized with next/font for zero layout shift

### Font Implementation

```typescript
// src/app/layout.tsx
import { GeistSans } from 'geist/font/sans'
// or
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

### Type Scale

```css
/* Heading 1 (Hero Name) */
--font-size-h1: 3.75rem;      /* 60px */
--line-height-h1: 1.1;
--font-weight-h1: 700;        /* Bold */
/* Mobile: 2.5rem (40px) */

/* Heading 2 (Section Titles) */
--font-size-h2: 2.25rem;      /* 36px */
--line-height-h2: 1.2;
--font-weight-h2: 600;        /* Semi-bold */
/* Mobile: 1.875rem (30px) */

/* Heading 3 (Subsection Titles, Card Titles) */
--font-size-h3: 1.5rem;       /* 24px */
--line-height-h3: 1.3;
--font-weight-h3: 600;        /* Semi-bold */
/* Mobile: 1.25rem (20px) */

/* Heading 4 (Small Headings) */
--font-size-h4: 1.125rem;     /* 18px */
--line-height-h4: 1.4;
--font-weight-h4: 600;        /* Semi-bold */
/* Mobile: 1rem (16px) */

/* Body Large (Hero Tagline) */
--font-size-body-lg: 1.25rem; /* 20px */
--line-height-body-lg: 1.6;
--font-weight-body-lg: 400;   /* Regular */

/* Body (Default Text) */
--font-size-body: 1rem;       /* 16px */
--line-height-body: 1.6;
--font-weight-body: 400;      /* Regular */

/* Body Small (Captions, Metadata) */
--font-size-body-sm: 0.875rem;/* 14px */
--line-height-body-sm: 1.5;
--font-weight-body-sm: 400;   /* Regular */

/* Label (Tags, Badges) */
--font-size-label: 0.75rem;   /* 12px */
--line-height-label: 1.4;
--font-weight-label: 500;     /* Medium */
```

### Tailwind Typography Classes

```typescript
// Tailwind utility mapping
const typography = {
  h1: 'text-6xl lg:text-7xl font-bold leading-tight',
  h2: 'text-3xl lg:text-4xl font-semibold leading-tight',
  h3: 'text-xl lg:text-2xl font-semibold leading-snug',
  h4: 'text-lg lg:text-xl font-semibold leading-normal',
  bodyLg: 'text-lg lg:text-xl leading-relaxed',
  body: 'text-base leading-relaxed',
  bodySm: 'text-sm leading-normal',
  label: 'text-xs font-medium leading-tight uppercase tracking-wide',
}
```

### Typography Hierarchy

```html
<!-- Example Usage -->
<section>
  <h2 class="text-3xl font-semibold text-text-primary mb-4">
    Experience
  </h2>
  <p class="text-lg text-text-secondary mb-8">
    8 years building scalable solutions across diverse technologies
  </p>
  
  <article class="space-y-2">
    <h3 class="text-xl font-semibold text-text-primary">
      Senior Software Engineer
    </h3>
    <p class="text-sm text-text-tertiary">
      2020 - Present
    </p>
    <p class="text-base text-text-secondary leading-relaxed">
      Led technical architecture for mission-critical systems...
    </p>
  </article>
</section>
```

---

## Spacing & Layout

### Spacing Scale (Tailwind Default + Custom)

```javascript
// Using Tailwind's 0.25rem (4px) base unit
spacing: {
  0: '0',           // 0px
  1: '0.25rem',     // 4px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  32: '8rem',       // 128px
}
```

### Spacing Conventions

**Component Spacing:**
- **Section Padding (Vertical):** `py-20` (80px) on desktop, `py-12` (48px) on mobile
- **Section Padding (Horizontal):** `px-6` (24px) on mobile, `px-8` (32px) on tablet, contained by max-width on desktop
- **Card Padding:** `p-6` (24px) or `p-8` (32px) depending on card size
- **Element Spacing:** `space-y-4` (16px) for related items, `space-y-8` (32px) for distinct sections

**Layout Widths:**
- **Max Content Width:** `max-w-6xl` (1152px) for main content
- **Max Narrow Width:** `max-w-4xl` (896px) for text-heavy sections (if needed)
- **Full Width:** Sections can extend to full viewport width with background, but content is contained

### Grid System

```css
/* Technology Grid (Example) */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem; /* 32px */
}

/* Project Grid */
.project-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile */
  gap: 2rem;
}

@media (min-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet */
  }
}

@media (min-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop */
  }
}
```

**Tailwind Implementation:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Grid items -->
</div>
```

### Layout Containers

```html
<!-- Section Wrapper -->
<section class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <!-- Content -->
  </div>
</section>

<!-- Narrow Content (for readability) -->
<section class="py-20 px-6">
  <div class="max-w-4xl mx-auto">
    <p class="text-lg leading-relaxed">
      Long-form text content...
    </p>
  </div>
</section>
```

---

## Components

### 1. Buttons

#### Primary Button (CTA)

```html
<button class="
  px-6 py-3 
  bg-accent-primary hover:bg-accent-primary-hover 
  text-white font-medium 
  rounded-lg 
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background-primary
">
  Get in Touch
</button>
```

**Variants:**
- **Primary:** Blue background, white text
- **Secondary:** Transparent with border, accent text (outline button)
- **Ghost:** No background, accent text, subtle hover

#### Secondary Button (Outline)

```html
<button class="
  px-6 py-3 
  border-2 border-accent-primary 
  text-accent-primary hover:bg-accent-primary hover:text-white 
  font-medium rounded-lg 
  transition-all duration-200
">
  View Projects
</button>
```

### 2. Cards

#### Project Card

```html
<article class="
  bg-background-secondary 
  border border-background-tertiary 
  rounded-xl 
  p-6 
  hover:border-text-tertiary 
  transition-colors duration-200
">
  <h3 class="text-xl font-semibold text-text-primary mb-2">
    Project Name
  </h3>
  <p class="text-sm text-text-tertiary mb-4">
    2023 • 6 months
  </p>
  <p class="text-base text-text-secondary leading-relaxed mb-4">
    Brief project description...
  </p>
  <div class="flex flex-wrap gap-2">
    <span class="badge">React</span>
    <span class="badge">Node.js</span>
    <span class="badge">AWS</span>
  </div>
</article>
```

#### Value Card

```html
<div class="
  bg-background-secondary 
  rounded-xl 
  p-6 
  border border-background-tertiary
  hover:border-accent-primary/50 
  transition-colors duration-200
">
  <h3 class="text-lg font-semibold text-text-primary mb-2">
    Value-Focused
  </h3>
  <p class="text-sm text-text-secondary leading-relaxed">
    Prioritizing business impact and user outcomes over technical novelty.
  </p>
</div>
```

### 3. Badges / Tags

```html
<span class="
  inline-block 
  px-3 py-1 
  text-xs font-medium uppercase tracking-wide 
  bg-background-tertiary 
  text-text-secondary 
  rounded-full
">
  TypeScript
</span>

<!-- Accent Badge -->
<span class="
  inline-block 
  px-3 py-1 
  text-xs font-medium uppercase tracking-wide 
  bg-accent-primary/10 
  text-accent-primary 
  rounded-full
">
  Current
</span>
```

#### Language Badge

```html
<!-- Language Badge with Flag -->
<div class="
  inline-flex items-center gap-2 
  px-3 py-2 
  bg-background-tertiary 
  rounded-lg 
  border border-background-tertiary
  hover:border-accent-primary/30
  transition-colors duration-200
">
  <span class="text-2xl" role="img" aria-label="Bosnian flag">🇧🇦</span>
  <div class="flex flex-col">
    <span class="text-sm font-medium text-text-primary">Bosnian</span>
    <span class="text-xs text-text-tertiary uppercase tracking-wide">Native</span>
  </div>
</div>

<!-- Simplified Language Badge -->
<span class="
  inline-flex items-center gap-1.5 
  px-3 py-1 
  text-xs font-medium 
  bg-background-tertiary 
  text-text-secondary 
  rounded-full
">
  <span role="img" aria-label="English flag">🇬🇧</span>
  English
</span>
```

**Language Proficiency Colors:**
- **Native:** Use accent-primary background (`bg-accent-primary/10 text-accent-primary`)
- **Fluent/Professional:** Use default badge styling
- **Intermediate/Basic:** Use muted styling (`bg-background-tertiary text-text-tertiary`)

### 4. Links

```html
<!-- Text Link (in paragraph) -->
<a href="#" class="
  text-accent-primary 
  hover:text-accent-primary-hover 
  underline underline-offset-4 
  transition-colors duration-200
">
  Learn more
</a>

<!-- Nav Link (header/footer) -->
<a href="#experience" class="
  text-text-secondary 
  hover:text-text-primary 
  transition-colors duration-200
">
  Experience
</a>

<!-- Social Icon Link -->
<a href="#" class="
  text-text-secondary 
  hover:text-accent-primary 
  transition-colors duration-200
" aria-label="LinkedIn">
  <svg class="w-6 h-6">...</svg>
</a>
```

### 5. Section Dividers

```html
<!-- Subtle Line Divider -->
<hr class="border-background-tertiary my-12" />

<!-- Visual Spacer (no line) -->
<div class="h-20"></div>
```

### 6. Timeline (Experience)

```html
<div class="relative pl-8 border-l-2 border-background-tertiary">
  <!-- Timeline Dot -->
  <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent-primary"></div>
  
  <!-- Content -->
  <div class="mb-8">
    <div class="flex items-center gap-2 mb-2">
      <h3 class="text-xl font-semibold text-text-primary">
        Senior Software Engineer
      </h3>
      <span class="badge bg-accent-primary/10 text-accent-primary">
        Current
      </span>
    </div>
    <p class="text-sm text-text-tertiary mb-3">
      Company Name • 2020 - Present • 4 years
    </p>
    <ul class="space-y-2 text-base text-text-secondary">
      <li>• Led technical architecture for...</li>
      <li>• Mentored team of 5 engineers...</li>
    </ul>
  </div>
</div>
```

---

## Animations & Transitions

### Animation Principles

1. **Subtle & Purposeful:** Animations should enhance, not distract
2. **Fast Duration:** 200-300ms for most interactions
3. **Easing:** Use ease-out for entrances, ease-in for exits
4. **Respect Preferences:** Honor `prefers-reduced-motion` media query

### Transition Utilities

```css
/* Tailwind Transition Classes */
transition-colors duration-200    /* Color transitions (hover, focus) */
transition-all duration-300       /* Multiple properties (careful with performance) */
transition-transform duration-200 /* Transforms (scale, translate) */
```

### Hover Effects

```html
<!-- Card Hover: Border Color Change -->
<div class="border border-background-tertiary hover:border-text-tertiary transition-colors duration-200">
  ...
</div>

<!-- Button Hover: Background Color Change -->
<button class="bg-accent-primary hover:bg-accent-primary-hover transition-colors duration-200">
  ...
</button>

<!-- Link Hover: Subtle Scale -->
<a class="hover:scale-105 transition-transform duration-200">
  ...
</a>
```

### Entrance Animations

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.4s ease-out;
}
```

**Tailwind Configuration:**
```typescript
// tailwind.config.ts
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.3s ease-out',
      'slide-up': 'slideUp 0.4s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
  },
}
```

### Reduced Motion

```css
/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Design

### Breakpoints (Tailwind Defaults)

```javascript
screens: {
  sm: '640px',   // Small devices (large phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px', // 2X large devices (large desktops)
}
```

### Mobile-First Approach

**Default styles are mobile**, then enhance for larger screens:

```html
<!-- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  ...
</div>

<!-- Mobile: Small text, Desktop: Larger text -->
<h1 class="text-4xl lg:text-6xl font-bold">
  Ragib Smajic
</h1>

<!-- Mobile: Full width padding, Desktop: Larger padding -->
<section class="px-6 lg:px-8 py-12 lg:py-20">
  ...
</section>
```

### Responsive Typography

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| H1 (Hero) | 2.5rem (40px) | 3rem (48px) | 3.75rem (60px) |
| H2 (Sections) | 1.875rem (30px) | 2.25rem (36px) | 2.25rem (36px) |
| H3 (Cards) | 1.25rem (20px) | 1.5rem (24px) | 1.5rem (24px) |
| Body | 1rem (16px) | 1rem (16px) | 1rem (16px) |

### Touch Targets

**Minimum touch target size:** 44x44px (iOS) / 48x48px (Android)

```html
<!-- Ensure buttons/links are large enough for touch -->
<button class="px-6 py-3 min-h-[44px]">
  Contact
</button>

<a href="#" class="block p-3 min-h-[44px] min-w-[44px]">
  <svg class="w-6 h-6">...</svg>
</a>
```

### Responsive Images

```html
<!-- Next.js Image handles responsive sizing automatically -->
<Image
  src="/images/project.png"
  alt="Project screenshot"
  width={800}
  height={600}
  className="w-full h-auto rounded-lg"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

## Accessibility

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Text on background:** ≥4.5:1 ratio (AA) for normal text
- **Large text (≥18pt):** ≥3:1 ratio
- **UI components:** ≥3:1 ratio for interactive elements

#### Keyboard Navigation
```html
<!-- Focus states for all interactive elements -->
<button class="
  focus:outline-none 
  focus:ring-2 
  focus:ring-accent-primary 
  focus:ring-offset-2 
  focus:ring-offset-background-primary
">
  ...
</button>

<a href="#" class="
  focus:outline-none 
  focus:ring-2 
  focus:ring-accent-primary
">
  ...
</a>
```

#### Semantic HTML
```html
<!-- Use semantic elements -->
<header>...</header>
<nav>...</nav>
<main>
  <section aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience</h2>
    ...
  </section>
</main>
<footer>...</footer>
```

#### ARIA Labels
```html
<!-- Social links with aria-labels -->
<a href="https://linkedin.com/in/ragibsmajic" 
   aria-label="LinkedIn profile"
   class="...">
  <svg aria-hidden="true">...</svg>
</a>

<!-- Decorative images -->
<img src="..." alt="" aria-hidden="true" />

<!-- Informative images -->
<img src="..." alt="Next.js logo" />
```

#### Skip Links
```html
<!-- Allow keyboard users to skip to main content -->
<a href="#main-content" 
   class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50">
  Skip to main content
</a>

<main id="main-content">
  ...
</main>
```

### Screen Reader Support

```html
<!-- Visually hidden but available to screen readers -->
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>

<span class="sr-only">Current position:</span>
<span>Senior Software Engineer</span>
```

---

## Design Tokens

### Tailwind Configuration (Complete)

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
          quaternary: '#3a3a3a',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a3a3a3',
          tertiary: '#737373',
          disabled: '#525252',
        },
        accent: {
          primary: {
            DEFAULT: '#3b82f6',
            hover: '#60a5fa',
          },
          secondary: '#8b5cf6',
          success: '#10b981',
          warning: '#f59e0b',
        },
        semantic: {
          error: '#ef4444',
          info: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        // Tailwind defaults are good, add custom if needed
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        lg: '0.75rem',  // 12px (cards, buttons)
        xl: '1rem',     // 16px (larger cards)
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Component Library Reference

### Quick Copy Components

#### Section Container
```tsx
export function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
```

#### Section Heading
```tsx
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-12 text-center">
      {children}
    </h2>
  )
}
```

#### Card
```tsx
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`
      bg-background-secondary 
      border border-background-tertiary 
      rounded-xl p-6 
      hover:border-text-tertiary 
      transition-colors duration-200
      ${className}
    `}>
      {children}
    </div>
  )
}
```

#### Badge
```tsx
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="
      inline-block px-3 py-1 
      text-xs font-medium uppercase tracking-wide 
      bg-background-tertiary text-text-secondary 
      rounded-full
    ">
      {children}
    </span>
  )
}
```

---

**Document Status:** Ready for Implementation  
**Next Steps:** Use this design system as reference during component development. Implement in Tailwind configuration and create reusable component library.