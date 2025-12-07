# GitHub Copilot Instructions

## Architecture Overview

This is a **static-first Next.js 16 portfolio** using TypeScript content files as a type-safe CMS alternative. All content is pre-rendered at build time (SSG) - no runtime data fetching or external APIs.

**Tech Stack**: Next.js 16 (App Router) + TypeScript 5 (strict) + Tailwind CSS 4 + React 19

**Critical Pattern**: Content lives in `src/content/*.ts` files with corresponding type definitions in `src/types/*.ts`. This enables compile-time validation and IDE autocomplete while maintaining Git version control.

## Development Workflow

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Production build (must pass with 0 errors)
npm run type-check   # TypeScript validation only
npm run lint         # ESLint check
```

**Important**: Always run `npm run type-check` before committing content changes. TypeScript will catch missing fields or type mismatches in content files.

**Important**: Always run `npm run type-check` before committing content changes. TypeScript will catch missing fields or type mismatches in content files.

## Project Structure & Conventions

```
src/
├── app/
│   ├── layout.tsx          # Root layout: metadata, fonts, JSON-LD schemas
│   ├── page.tsx            # Home: component orchestration ONLY (no logic)
│   ├── globals.css         # Tailwind imports + custom utilities (@layer)
│   └── sitemap.ts/robots.ts # SEO config
├── components/
│   ├── layout/             # Navigation (sticky), Footer
│   └── sections/           # About, Experience, Technologies, Projects, Education, Languages
├── content/                # ⚠️ Content source of truth (TypeScript files)
│   ├── profile.ts          # Personal info, social links, core values
│   ├── experience.ts       # Work history with roles array
│   ├── technologies.ts     # Tech stack with categories
│   └── projects.ts         # Project showcase with expandable cards
├── types/                  # Type definitions matching content structure
└── lib/
    └── structuredData.ts   # JSON-LD generators (Person, ProfilePage schemas)
```

**Component Organization**:
- **Server Components by default** - Use `"use client"` ONLY when needed (hooks, browser APIs)
- **Current client components**: `Navigation.tsx` (useState for mobile menu, useEffect for IntersectionObserver), `Projects.tsx` (useState for expand/collapse)
- **Section IDs required**: Each `<section>` must have `id` attribute matching navigation `href` (e.g., `id="about"` → `href="#about"`)

## Content Management Pattern (Core Concept)

**Flow**: Edit `src/content/*.ts` → TypeScript validates → Import into components → Render at build time

**Example - Adding new experience**:
```typescript
// 1. Edit src/content/experience.ts
import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "exp-new",
    company: "Company Name",
    companyUrl: "https://...",
    location: "City, Country",
    roles: [{
      id: "role-1",
      title: "Senior Engineer",
      startDate: "2024-01-01",
      endDate: "present",              // Use "present" for current roles
      responsibilities: [
        "Led development of X",
        "Improved Y by 50%"
      ],
      technologies: ["React", "AWS"]
    }]
  }
];

// 2. Component auto-imports and renders (no changes needed)
// src/components/sections/Experience.tsx already imports experiences array
```

**Type Safety Rules**:
- All content exports MUST have type annotations (e.g., `export const experiences: Experience[]`)
- Use enums for fixed values (TechnologyCategory, LanguageProficiency)
- Dates can be `Date | string | "present"` (handle all formats)

## Styling Conventions (Tailwind CSS 4)

**Critical**: Tailwind v4 differs from v3 - use **standard color names** (`gray-100`, `gray-400`) NOT custom CSS variables.

**Custom utilities** (defined in `globals.css` @layer utilities):
```css
.section-container  /* Standard section wrapper: max-w-6xl, py-20, px-6 */
.card              /* Dark card: bg-[#1a1a1a], border, hover effect */
.animate-fade-in   /* Simple 0.5s fade-in animation */
```

**Dark theme palette**:
- Background: `bg-black` (body), `bg-[#1a1a1a]` (cards), `bg-gray-800` (tags)
- Text: `text-gray-100` (primary), `text-gray-400` (secondary), `text-gray-500` (dim)
- Borders: `border-gray-700` (default), `border-gray-600` (hover)
- Accent: `text-blue-600`, `bg-blue-600` (CTAs, links)

**Background image pattern** (fixed parallax):
```css
/* globals.css - body has fixed bg-desk.jpg with 50% dark overlay */
body {
  background-image: url('/bg-desk.jpg');
  background-attachment: fixed;  /* Parallax scroll effect */
}
body::before {
  background: rgba(0, 0, 0, 0.5);  /* Dark overlay for text contrast */
}
```

**Glassmorphism** (Navigation):
```tsx
<div className="bg-black/50 backdrop-blur-md rounded-full">
  {/* Semi-transparent with blur */}
</div>
```

## Component Patterns

**Navigation active state** (IntersectionObserver):
```tsx
// Navigation.tsx uses observer to highlight active section
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setActiveSection(entry.target.id);  // Updates nav highlight
    }
  });
}, { threshold: 0.3 });  // Trigger when 30% visible
```

**Expandable cards** (Projects):
```tsx
// Projects.tsx - single expanded state, click toggles
const [expandedId, setExpandedId] = useState<string | null>(null);
const toggleExpand = (id: string) => {
  setExpandedId(expandedId === id ? null : id);  // Toggle or collapse
};
```

**Image optimization**:
```tsx
import Image from "next/image";
<Image
  src="/profile.jpg"
  alt="Descriptive alt text"
  width={160}
  height={160}
  priority  // Add for above-fold images only
/>
```

## SEO & Metadata Strategy

**Structured data** (JSON-LD schemas in `layout.tsx`):
- `getPersonSchema()` - Person schema with name, jobTitle, sameAs (social links)
- `getProfilePageSchema()` - ProfilePage schema wrapping Person schema
- Embedded in `<script type="application/ld+json">` in layout

**Metadata object** (`layout.tsx`):
```typescript
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "...", template: "%s | Ragib Smajic" },
  openGraph: { type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630 }] },
  // ... full config in layout.tsx
};
```

**Image config** (`next.config.ts`):
```typescript
images: {
  remotePatterns: [{
    protocol: "https",
    hostname: "cdn.jsdelivr.net",  // For devicons
    pathname: "/gh/devicons/devicon/**"
  }]
}
```

## Common Tasks

**Add new section**:
1. Create `src/components/sections/NewSection.tsx`
2. Create type in `src/types/newSection.ts`
3. Create content in `src/content/newSection.ts`
4. Import and add to `src/app/page.tsx` (order matters for scroll)
5. Add nav item to `Navigation.tsx` navItems array if needed
6. Ensure section has `id` attribute matching nav `href`

**Update personal info**: Edit `src/content/profile.ts` (name, email, social links, core values)

**Add technology**: Edit `src/content/technologies.ts`, use TechnologyCategory enum

**Add project**: Edit `src/content/projects.ts`, include challenge/solution/outcome for expandable cards

**Change background**: Replace `public/bg-desk.jpg`, adjust overlay opacity in `globals.css` body::before

## Troubleshooting

**Build fails with type errors**: Run `npm run type-check` to see full error list. Check content files match type definitions.

**Navigation not scrolling**: Verify section `id` matches `href` in navItems. Check `scroll-behavior: smooth` in globals.css.

**Styles not applying**: Tailwind v4 doesn't support v3 custom variables. Use standard colors (`gray-100`, not custom CSS vars).

**"use client" errors**: Add directive at top if using hooks/browser APIs. Server components can't use useState, useEffect, etc.

## Key Files to Reference

- `src/app/layout.tsx` - Metadata, fonts, JSON-LD structured data
- `src/app/globals.css` - Custom utilities, global styles, background pattern
- `src/components/layout/Navigation.tsx` - IntersectionObserver pattern, mobile menu
- `src/content/profile.ts` - Example of typed content export
- `src/lib/structuredData.ts` - JSON-LD schema generators

## Performance Targets

- Lighthouse: 100/100 Performance, Accessibility, SEO
- Static generation: All pages pre-rendered (no runtime fetching)
- Image optimization: Next.js Image component with width/height
- Bundle size: Check with `npm run build` output

---

**Last Updated**: December 7, 2025  
**Next.js**: 16.0.0 | **React**: 19.0.0 | **TypeScript**: 5+ | **Tailwind**: 4.0.0
