# GitHub Copilot Instructions for Ragib Smajic Portfolio

## Project Overview

This is a professional portfolio website built with **Next.js 16**, **TypeScript 5**, and **Tailwind CSS 4**. The site showcases professional experience, projects, skills, and education using a static-first architecture for optimal performance and SEO.

### Key Characteristics
- **Static Site Generation (SSG)**: All content pre-rendered at build time
- **Type-Safe Content Management**: Content managed through TypeScript files with strict type definitions
- **Dark Minimalist Design**: Professional aesthetic with dark backgrounds, subtle animations
- **Mobile-First**: Responsive design with mobile hamburger menu, glassmorphism effects
- **Performance-Optimized**: Lighthouse scores 100/100, Core Web Vitals passing
- **SEO-First**: Comprehensive metadata, JSON-LD structured data, Open Graph tags

---

## Technology Stack

### Core Technologies
- **Framework**: Next.js 16 (App Router, React Server Components)
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS 4 (utility-first, no CSS modules)
- **Font**: Geist (Google Fonts via next/font)
- **Images**: Next.js Image component with optimization
- **Deployment**: Cloudflare Pages (recommended)

### Development Tools
- **Linting**: ESLint 9 with Next.js config
- **Type Checking**: TypeScript compiler (tsc)
- **Package Manager**: npm
- **Build Tool**: Turbopack (Next.js 16 default)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata, fonts, structured data
│   ├── page.tsx            # Home page (component orchestration)
│   ├── globals.css         # Global styles, Tailwind imports, custom utilities
│   ├── robots.txt          # SEO robots configuration
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Sticky nav with mobile hamburger, glassmorphism
│   │   └── Footer.tsx      # Footer with social links, copyright
│   └── sections/
│       ├── About.tsx       # Hero + Core Values (merged component)
│       ├── Experience.tsx  # Timeline of work experience
│       ├── Technologies.tsx # Tech stack grid by category
│       ├── Projects.tsx    # Expandable project cards
│       ├── Education.tsx   # Education timeline
│       └── Languages.tsx   # Language proficiency list
├── content/               # Content data files (TypeScript)
│   ├── profile.ts         # Personal info, contact, social links, core values
│   ├── experience.ts      # Work history with roles and responsibilities
│   ├── technologies.ts    # Technology stack with categories
│   ├── projects.ts        # Project showcase with details
│   ├── education.ts       # Academic background
│   └── languages.ts       # Languages spoken with proficiency
├── types/                 # TypeScript type definitions
│   ├── profile.ts         # Profile, SocialLinks, CoreValue interfaces
│   ├── experience.ts      # Experience, Role interfaces
│   ├── technology.ts      # Technology, TechnologyCategory enums
│   ├── project.ts         # Project, ProjectLink interfaces
│   ├── education.ts       # Education interface
│   └── language.ts        # Language, Proficiency interfaces
└── lib/
    └── structuredData.ts  # JSON-LD schema generators (Person, ProfilePage)

public/
├── bg-desk.jpg           # Background image with parallax effect
├── profile.jpg           # User profile photo
└── favicon.ico           # Site favicon
```

---

## Core Architectural Patterns

### 1. **Content Management Pattern**

**All content lives in TypeScript files** (`src/content/`) with corresponding type definitions (`src/types/`).

#### Why TypeScript over JSON/CMS?
- ✅ **Type safety at compile time** - catch content errors before deploy
- ✅ **IDE autocomplete** - easy to edit with IntelliSense
- ✅ **Version controlled** - all content changes tracked in Git
- ✅ **Zero dependencies** - no external CMS or API calls at build time
- ✅ **Easy migration path** - can move to CMS later without breaking changes

#### Content Update Workflow
1. Edit content file in `src/content/`
2. TypeScript compiler validates against type definitions
3. Import content into components
4. Content rendered at build time (SSG)

**Example:**
```typescript
// src/types/profile.ts
export interface Profile {
  name: string;
  title: string;
  email: string;
  // ...
}

// src/content/profile.ts
import { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Ragib Smajic",
  title: "Senior Software Engineer",
  email: "smajic.ragib@gmail.com",
  // TypeScript ensures all required fields present
};

// src/components/sections/About.tsx
import { profile } from "@/content/profile";

export default function About() {
  return <h1>{profile.name}</h1>; // Type-safe access
}
```

### 2. **Component Organization Pattern**

**Atomic Design Principles:**
- **Sections** (`components/sections/`): Full-page sections (About, Experience, Projects)
- **Layout** (`components/layout/`): Structural components (Navigation, Footer)
- **Pages** (`app/page.tsx`): Component orchestration only, no business logic

**Component Guidelines:**
- Use **Server Components** by default (faster, smaller bundle)
- Add `"use client"` directive only when needed (state, events, browser APIs)
- Keep components focused (single responsibility)
- Extract reusable logic into hooks or utilities
- Co-locate styles using Tailwind classes

**Current "use client" Components:**
- `Navigation.tsx` - uses `useState` for mobile menu, `useEffect` for Intersection Observer
- `Projects.tsx` - uses `useState` for expandable cards

### 3. **Styling Pattern**

**Tailwind CSS 4 with Standard Palette:**
- Use **standard Tailwind colors** (`gray-100`, `gray-400`, etc.) - NOT custom CSS variables
- Tailwind v4 has different configuration than v3 - prefer built-in utilities
- Custom utilities defined in `globals.css` using `@layer utilities`
- No CSS modules - all styling through Tailwind classes

**Key Utility Classes:**
```css
.section-container  /* Standard section wrapper with padding */
.card              /* Dark card with border, hover effect */
.animate-fade-in   /* Simple fade-in animation */
```

**Background Image Pattern:**
```css
body {
  background-image: url('/bg-desk.jpg');
  background-attachment: fixed; /* Parallax effect */
  background-size: cover;
}

body::before {
  background: rgba(0, 0, 0, 0.5); /* 50% overlay for text contrast */
}
```

**Glassmorphism Pattern (Navigation):**
```tsx
<div className="bg-black/50 backdrop-blur-md rounded-full px-4 py-2">
  {/* Semi-transparent with blur effect */}
</div>
```

### 4. **SEO & Metadata Pattern**

**Comprehensive SEO Setup in `layout.tsx`:**
- Metadata object with title, description, keywords, authors
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD structured data (Person + ProfilePage schemas)
- Canonical URLs, robots directives

**Structured Data:**
```typescript
// lib/structuredData.ts
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    // ... full schema
  };
}
```

**Image Optimization:**
- Use Next.js `Image` component for all images
- Add `priority` prop for above-the-fold images (profile photo, hero)
- Use `width` and `height` props (required for optimization)
- Provide descriptive `alt` text for accessibility

### 5. **Navigation & Scrolling Pattern**

**Smooth Scrolling with Active Section Detection:**
```typescript
// Navigation.tsx
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, { threshold: 0.3 });

  // Observe sections by ID
  navItems.forEach(({ href }) => {
    const element = document.querySelector(href);
    if (element) observer.observe(element);
  });

  return () => observer.disconnect();
}, []);
```

**Mobile Menu Pattern:**
- Hamburger icon on mobile (`md:hidden`)
- Toggle state with `useState`
- Close menu on section click
- Smooth scroll to section with `scrollIntoView({ behavior: "smooth" })`

### 6. **Page Section Order**

**Current section sequence in `page.tsx`:**
1. **About** (Hero + Core Values)
2. **Experience** (Work history)
3. **Technologies** (Tech stack)
4. **Projects** (Featured projects)
5. **Education** (Academic background)
6. **Languages** (Language proficiency)
7. **Footer** (Social links, copyright)

**Navigation items match this order** (excluding Education and Languages for cleaner nav).

---

## Best Practices

### Next.js 16 Specific

#### App Router Conventions
- **`layout.tsx`**: Root layout, shared across all pages (metadata, fonts, global styles)
- **`page.tsx`**: Route pages (e.g., `/` renders `app/page.tsx`)
- **Server Components default**: All components are Server Components unless `"use client"` directive
- **Metadata API**: Use `export const metadata` for static metadata, `generateMetadata()` for dynamic

#### Performance Optimization
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactStrictMode: true, // Catch common bugs in development
  // Future: Add image domains if using external images
  // images: {
  //   domains: ['example.com'],
  // },
};
```

#### Font Optimization
```typescript
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Apply in layout
<body className={geist.variable}>
```

### TypeScript Best Practices

#### Type Definitions
- **Centralize types** in `src/types/` directory
- **One type file per domain** (profile, experience, project, etc.)
- **Export interfaces, not types** for object shapes (easier to extend)
- **Use enums** for fixed value sets (TechnologyCategory, ProficiencyLevel)
- **Avoid `any`** - use `unknown` if type truly unknown, then narrow

#### Type Safety in Content
```typescript
// ✅ Good: Strongly typed content
import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Company Name",
    roles: [/* ... */],
  },
];

// ❌ Bad: No type annotation
export const experiences = [
  { id: "exp-1", company: "Company Name" },
];
```

### Tailwind CSS 4 Best Practices

#### Utility-First Approach
- **Avoid custom CSS** unless absolutely necessary
- **Use standard Tailwind classes** over custom variables
- **Compose with @apply** sparingly (prefer inline utilities)

#### Responsive Design
```tsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  {/* Small text on mobile, larger on desktop */}
</div>

<div className="hidden md:flex">
  {/* Hidden on mobile, flex on desktop */}
</div>
```

#### Color Palette
- **Gray scale**: `gray-100` (lightest) to `gray-900` (darkest)
- **Backgrounds**: `bg-black`, `bg-gray-900`, `bg-gray-800`
- **Text**: `text-gray-100` (light), `text-gray-400` (medium), `text-gray-500` (dim)
- **Borders**: `border-gray-700`, `border-gray-600`
- **Accent**: `bg-blue-600`, `text-blue-600` for CTAs and links

#### Custom Utilities
```css
/* globals.css */
@layer utilities {
  .section-container {
    max-width: 72rem;        /* 1152px */
    margin-left: auto;
    margin-right: auto;
    padding: 5rem 1.5rem;
  }
}
```

### Component Best Practices

#### Server vs. Client Components
```tsx
// ✅ Server Component (default, faster)
export default function About() {
  return <section>{/* Static content */}</section>;
}

// ✅ Client Component (only when needed)
"use client";

import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  return <section>{/* Interactive content */}</section>;
}
```

#### Semantic HTML
- Use **semantic elements**: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- Add **section IDs** for navigation: `<section id="about">`
- Include **aria-labels** for accessibility: `<button aria-label="Toggle menu">`

#### Accessibility
- **Keyboard navigation**: All interactive elements accessible via Tab
- **Screen reader support**: Descriptive alt text, aria-labels
- **Color contrast**: WCAG AA compliance (4.5:1 for normal text)
- **Focus states**: Visible focus indicators on interactive elements

### Performance Best Practices

#### Image Optimization
```tsx
import Image from "next/image";

<Image
  src="/profile.jpg"
  alt="Ragib Smajic profile photo"
  width={160}
  height={160}
  className="rounded-full"
  priority  // For above-the-fold images
/>
```

#### Code Splitting
- Next.js automatically code-splits by route
- Use dynamic imports for heavy components:
```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <p>Loading...</p>,
});
```

#### Bundle Size
- **Avoid large dependencies** unless essential
- **Tree-shake** unused code (automatic with ES modules)
- **Check bundle size**: `npm run build` shows bundle analysis

### Git Workflow Best Practices

#### Commit Messages
Follow **Conventional Commits** format:
```
feat: add mobile hamburger menu to navigation
fix: correct profile image border color
docs: update README with deployment instructions
refactor: merge Hero and Values into About component
style: adjust navigation glassmorphism transparency
perf: optimize background image for faster load
```

#### Branch Strategy
- **`main`**: Production-ready code only
- **Feature branches**: `feature/mobile-nav`, `feature/projects-section`
- **PR workflow**: Create PR, review, merge to main

---

## Content Update Guidelines

### Adding New Experience
1. Open `src/content/experience.ts`
2. Add new `Experience` object to array:
```typescript
{
  id: "exp-3",
  company: "New Company",
  companyUrl: "https://company.com",
  location: "City, Country",
  roles: [
    {
      id: "role-3-1",
      title: "Software Engineer",
      startDate: "2024-01-01",
      endDate: "present",
      responsibilities: [
        "Led development of X",
        "Improved performance by Y%",
      ],
      technologies: ["React", "Node.js", "AWS"],
    },
  ],
}
```
3. TypeScript validates structure automatically
4. Experience appears in timeline on next build

### Adding New Project
1. Open `src/content/projects.ts`
2. Add `Project` object:
```typescript
{
  id: "project-4",
  name: "Project Name",
  description: "Brief description",
  challenge: "What problem did this solve?",
  solution: "How did you solve it?",
  outcome: "What were the results?",
  technologies: ["Tech1", "Tech2"],
  timeframe: "Jan 2024 - Mar 2024",
  links: [
    { type: "github", url: "https://github.com/..." },
    { type: "live", url: "https://demo.com" },
  ],
}
```

### Adding New Technology
1. Open `src/content/technologies.ts`
2. Add `Technology` object:
```typescript
{
  id: "nextjs",
  name: "Next.js",
  category: TechnologyCategory.Framework,
  logo: "/images/technologies/nextjs.svg",
  proficiency: ProficiencyLevel.Expert,
}
```
3. Ensure logo exists in `public/images/technologies/`

### Updating Personal Info
Edit `src/content/profile.ts`:
```typescript
export const profile: Profile = {
  name: "Ragib Smajic",
  title: "Senior Software Engineer",
  tagline: "Value-focused problem solver...",
  email: "smajic.ragib@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/ragib-smajic",
    github: "https://github.com/ragecodex",
  },
  coreValues: [/* ... */],
};
```

---

## Common Tasks

### Adding a New Section
1. Create component in `src/components/sections/NewSection.tsx`
2. Define content type in `src/types/newSection.ts`
3. Add content data in `src/content/newSection.ts`
4. Import and render in `src/app/page.tsx`:
```tsx
import NewSection from "@/components/sections/NewSection";

export default function Home() {
  return (
    <main>
      {/* ... existing sections */}
      <NewSection />
    </main>
  );
}
```
5. Add navigation link if needed in `src/components/layout/Navigation.tsx`

### Adding Navigation Item
1. Open `src/components/layout/Navigation.tsx`
2. Add to `navItems` array:
```typescript
const navItems = [
  // ... existing items
  { label: "New Section", href: "#new-section" },
];
```
3. Ensure section has matching `id` attribute: `<section id="new-section">`

### Updating Styles
1. **Global styles**: Edit `src/app/globals.css`
2. **Component styles**: Add Tailwind classes directly in JSX
3. **Custom utility**: Add to `@layer utilities` in `globals.css`

### Changing Background Image
1. Replace `public/bg-desk.jpg` with new image
2. Optimize image (WebP/AVIF format, ~100-200KB)
3. Adjust overlay in `globals.css`:
```css
body::before {
  background: rgba(0, 0, 0, 0.5); /* Adjust opacity 0-1 */
}
```

### Updating Profile Image
1. Save new image as `public/profile.jpg`
2. Optimize for web (160x160px minimum, ~50KB)
3. Image automatically used in `About.tsx`

---

## Testing & Validation

### Type Checking
```bash
npm run type-check
```
Validates all TypeScript without emitting files.

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js config. Fix issues before committing.

### Build Validation
```bash
npm run build
```
Compiles production build. Must pass with zero errors.

### Local Preview
```bash
npm run build
npm start
```
Test production build locally on `localhost:3000`.

### Performance Audit
1. Run `npm run build`
2. Open Chrome DevTools > Lighthouse
3. Run audit on production build
4. Target: 100/100 Performance, Accessibility, SEO

---

## Deployment

### Cloudflare Pages (Recommended)
1. Connect GitHub repository to Cloudflare Pages
2. Build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `.next`
   - **Framework preset**: Next.js
3. Environment variables: None required for MVP
4. Deploy on push to `main` branch
5. Automatic preview deployments for PRs

### Manual Deployment
```bash
npm run build
# Upload .next/ folder to static hosting
```

---

## Troubleshooting

### Build Fails with TypeScript Errors
- Run `npm run type-check` to see all errors
- Ensure all content files match type definitions
- Check for missing required fields in content

### Images Not Loading
- Verify image exists in `public/` directory
- Check file path (case-sensitive on production)
- Ensure Next.js Image component used with correct props

### Navigation Not Scrolling
- Verify section has `id` attribute matching `href` in navItems
- Check smooth scroll CSS: `html { scroll-behavior: smooth; }`
- Ensure Intersection Observer threshold appropriate (0.3)

### Styles Not Applied
- Tailwind v4 doesn't support custom CSS variables like v3
- Use standard Tailwind colors (`gray-100`, not `bg-background-primary`)
- Check `tailwind.config.ts` content paths include all component files

### "use client" Errors
- Add `"use client"` directive at top of file if using React hooks
- Server Components can't use `useState`, `useEffect`, browser APIs
- Move client-only logic to separate client component

---

## Future Enhancements

### Phase 2: Blog
- Add `/blog` route with MDX support
- Create blog post type definitions
- Implement RSS feed
- Add search functionality

### Phase 3: CMS Migration
- Integrate headless CMS (Sanity, Contentful)
- Migrate content from TypeScript files to CMS
- Add Incremental Static Regeneration (ISR)
- Implement webhook-triggered rebuilds

### Phase 4: Analytics
- Add Google Analytics 4
- Implement PostHog for user behavior tracking
- Monitor Core Web Vitals with web-vitals library
- Track conversion goals (contact form submissions)

---

## Key Documentation Files

Reference these documents for detailed information:

- **`docs/prd.md`**: Product Requirements Document (features, user stories)
- **`docs/technical-architecture.md`**: Detailed architecture, tech decisions
- **`docs/design-system.md`**: Color palette, typography, component specs
- **`docs/content-structure.md`**: Content type definitions, examples
- **`docs/seo-strategy.md`**: SEO keywords, metadata, structured data
- **`CHANGELOG.md`**: Version history and feature additions

---

## Support & Maintenance

### Regular Maintenance Tasks
- **Monthly**: Update npm dependencies (`npm outdated`, `npm update`)
- **Quarterly**: Review Lighthouse scores, fix performance regressions
- **Annually**: Update content (experience, projects, technologies)

### Dependency Updates
```bash
# Check outdated packages
npm outdated

# Update minor/patch versions
npm update

# Update major versions (test thoroughly)
npm install next@latest
```

### Security
- Run `npm audit` regularly
- Fix high/critical vulnerabilities immediately
- Keep Next.js, React, TypeScript up to date

---

## Contact & Ownership

**Project Owner**: Ragib Smajic  
**Email**: smajic.ragib@gmail.com  
**LinkedIn**: [linkedin.com/in/ragib-smajic](https://linkedin.com/in/ragib-smajic)  
**GitHub**: [github.com/ragecodex](https://github.com/ragecodex)

---

**Last Updated**: December 7, 2025  
**Document Version**: 1.0.0  
**Next.js Version**: 16.0.7  
**Node Version**: 18+ (LTS recommended)
