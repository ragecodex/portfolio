# Technical Architecture
## Ragib Smajic Portfolio Website

---

### Document Information
- **Version:** 1.0.0
- **Last Updated:** December 6, 2025
- **Status:** Architecture Definition

---

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Rendering Strategy](#rendering-strategy)
5. [Content Management](#content-management)
6. [Routing & Navigation](#routing--navigation)
7. [Styling Architecture](#styling-architecture)
8. [Image Optimization](#image-optimization)
9. [Performance Optimization](#performance-optimization)
10. [Deployment Pipeline](#deployment-pipeline)
11. [Future Extensibility](#future-extensibility)

---

## Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Browser                         │
│  (Static HTML + Hydrated React Components)                  │
└──────────────────┬──────────────────────────────────────────┘
                   │ HTTPS
                   ↓
┌─────────────────────────────────────────────────────────────┐
│           Cloudflare Edge Network (CDN)                     │
│  • Global edge caching (300+ locations)                     │
│  • Automatic HTTPS/SSL                                      │
│  • DDoS protection + WAF                                    │
│  • Bot management                                           │
│  • Zero Trust security                                      │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────────┐
│              Static Assets (Pre-built)                      │
│  • HTML pages (SSG)                                         │
│  • Optimized images (WebP/AVIF)                             │
│  • JavaScript bundles (code-split)                          │
│  • CSS (Tailwind, minified)                                 │
└─────────────────────────────────────────────────────────────┘

Build Time:
┌─────────────────────────────────────────────────────────────┐
│              GitHub Repository                              │
│  • Source code                                              │
│  • Content (JSON files)                                     │
│  • Assets (images)                                          │
└──────────────────┬──────────────────────────────────────────┘
                   │ Push to main
                   ↓
┌─────────────────────────────────────────────────────────────┐
│         GitHub Actions (CI/CD Pipeline)                     │
│  • Install dependencies                                     │
│  • Run ESLint (fail on errors)                              │
│  • Type checking (TypeScript)                               │
│  • Security vulnerability scan (npm audit)                  │
│  • Build Next.js app                                        │
│  • Run tests (if present)                                   │
└──────────────────┬──────────────────────────────────────────┘
                   │ Only if all checks pass ✅
                   ↓
┌─────────────────────────────────────────────────────────────┐
│        Cloudflare Pages Deployment                          │
│  • Deploy to Cloudflare Pages                               │
│  • Distribute to edge network                               │
│  • Invalidate CDN cache                                     │
│  • Generate sitemap                                         │
│  • Automatic preview deployments (PRs)                      │
└─────────────────────────────────────────────────────────────┘
```

### Architecture Principles

1. **Static-First:** All MVP content is pre-rendered at build time (SSG) for maximum performance and SEO
2. **Type Safety:** TypeScript enforces type safety across components, content, and configuration
3. **Component-Driven:** Modular, reusable components following atomic design principles
4. **Performance-Centric:** Optimizations at every layer (images, fonts, code splitting, caching)
5. **Future-Proof:** Architecture supports easy migration to dynamic content (blog) in future phases
6. **Cost-Optimized:** Zero runtime costs using JAMstack architecture and free-tier hosting

---

## Technology Stack

### Core Framework
- **Next.js 14.2+** (App Router)
  - Reason: Industry-standard React framework with excellent SSG support, built-in optimizations, and Vercel integration
  - App Router provides modern patterns for routing, layouts, and metadata

### Language
- **TypeScript 5.9+**
  - Reason: Type safety prevents runtime errors, improves developer experience, self-documenting code
  - Latest stable release with improved performance and type inference

### Styling
- **Tailwind CSS 4.1+**
  - Reason: Utility-first CSS framework for rapid UI development, excellent for design consistency, minimal CSS bundle size
  - Version 4.x brings performance improvements, better tree-shaking, and CSS-first configuration
- **PostCSS** (for Tailwind processing)
- **Autoprefixer** (for browser compatibility)

### Font Optimization
- **next/font** (built-in)
  - Using: `Geist` or `Inter` font family
  - Reason: Automatic font optimization, self-hosting, no external requests

### Image Optimization
- **next/image** (built-in)
  - Automatic WebP/AVIF conversion
  - Lazy loading
  - Responsive image sizing

### Content Management (MVP)
- **JSON files** with TypeScript interfaces
  - Location: `/content` directory
  - Reason: Simple, version-controlled, no external dependencies, easy to migrate to CMS later

### Development Tools
- **ESLint** (code linting)
- **Prettier** (code formatting)
- **Husky** (Git hooks for pre-commit checks) - Optional
- **VS Code** (recommended IDE with extensions)

### Hosting & Infrastructure
- **Cloudflare Pages** (hosting platform with edge network)
- **Cloudflare Workers** (serverless edge computing for future dynamic features)
- **Cloudflare** (DNS, domain registrar, CDN, security)
- **GitHub** (version control)
- **GitHub Actions** (CI/CD pipeline with security scanning)

### Analytics
- **Cloudflare Web Analytics** (privacy-friendly, built-in, GDPR-compliant)

---

## Project Structure

```
c:\Projects\MyPortfolio\
│
├── .github/
│   └── workflows/
│       └── ci.yml                  # CI/CD pipeline (optional, Vercel auto-deploys)
│
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.png               # Open Graph default image
│   ├── robots.txt
│   └── images/                    # Static images (logos, etc.)
│       ├── technologies/
│       │   ├── nextjs.svg
│       │   ├── typescript.svg
│       │   └── ...
│       └── projects/              # Project images (optional for MVP)
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Root layout with metadata
│   │   ├── page.tsx               # Home page (main portfolio)
│   │   ├── globals.css            # Global styles (Tailwind imports)
│   │   ├── sitemap.ts             # Sitemap generation
│   │   ├── robots.ts              # Robots.txt generation
│   │   └── not-found.tsx          # Custom 404 page
│   │
│   ├── components/                # React components
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Site header (if needed)
│   │   │   └── Footer.tsx         # Footer with contact/social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Hero section with intro
│   │   │   ├── Values.tsx         # Core values section
│   │   │   ├── Experience.tsx     # Experience timeline
│   │   │   ├── Education.tsx      # Education section
│   │   │   ├── Technologies.tsx   # Tech stack grid
│   │   │   └── Projects.tsx       # Projects showcase
│   │   ├── ui/
│   │   │   ├── Button.tsx         # Reusable button component
│   │   │   ├── Card.tsx           # Card component (projects, values)
│   │   │   ├── Badge.tsx          # Badge for tech tags
│   │   │   ├── Section.tsx        # Section wrapper component
│   │   │   └── ...
│   │   └── icons/
│   │       ├── SocialIcons.tsx    # Social media icon components
│   │       └── ...
│   │
│   ├── content/                   # Content data (JSON + TypeScript)
│   │   ├── profile.ts             # Personal info, contact, social links
│   │   ├── experience.ts          # Work experience data
│   │   ├── education.ts           # Education data
│   │   ├── technologies.ts        # Technologies list
│   │   ├── projects.ts            # Projects data
│   │   └── metadata.ts            # SEO metadata configuration
│   │
│   ├── types/                     # TypeScript type definitions
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── technology.ts
│   │   └── project.ts
│   │
│   ├── lib/                       # Utility functions
│   │   ├── utils.ts               # General utilities
│   │   └── structuredData.ts     # JSON-LD structured data generators
│   │
│   └── styles/                    # Additional styles (if needed)
│       └── animations.css         # Custom animations
│
├── content/                       # Alternative: JSON content files
│   ├── profile.json               # (If preferring JSON over TS files)
│   ├── experience.json
│   └── ...
│
├── docs/                          # Project documentation
│   ├── prd.md
│   ├── technical-architecture.md
│   ├── design-system.md
│   ├── content-structure.md
│   └── seo-strategy.md
│
├── .env.local                     # Environment variables (API keys, etc.)
├── .eslintrc.json                 # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── .gitignore
├── next.config.js                 # Next.js configuration
├── package.json
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
└── README.md                      # Project README

```

---

## Rendering Strategy

### Static Site Generation (SSG)

**All MVP pages use SSG** to pre-render HTML at build time.

#### Home Page (`/`)
```typescript
// src/app/page.tsx
import Hero from '@/components/sections/Hero'
import Values from '@/components/sections/Values'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Technologies from '@/components/sections/Technologies'
import Projects from '@/components/sections/Projects'

// All data imported from content files (SSG - no data fetching needed)
export default function Home() {
  return (
    <main>
      <Hero />
      <Values />
      <Experience />
      <Education />
      <Technologies />
      <Projects />
    </main>
  )
}
```

**Build Process:**
1. Next.js reads content from `/src/content` at build time
2. Generates static HTML for home page
3. Outputs optimized HTML, CSS, JS to `.next/` directory
4. Vercel serves static files from edge network

**Benefits:**
- ⚡ Instant page loads (no server processing)
- 🔍 Perfect SEO (fully rendered HTML for crawlers)
- 💰 Zero runtime costs
- 🌍 Global CDN distribution

---

## Content Management

### Content Strategy: TypeScript Files

**Approach:** Content stored as TypeScript files in `/src/content` with strongly-typed interfaces.

**Why TypeScript over JSON?**
- Type safety during development
- Better IDE autocomplete
- Easier to refactor
- Can include computed properties or logic
- Still easy to migrate to CMS later

### Content File Structure

#### Example: `/src/content/profile.ts`
```typescript
import { Profile } from '@/types/profile'

export const profile: Profile = {
  name: 'Ragib Smajic',
  title: 'Senior Software Engineer',
  tagline: 'Value-focused problem solver with 8 years of experience building scalable solutions',
  location: 'Bosnia and Herzegovina', // Optional
  email: 'ragib@example.com', // Replace with real email
  social: {
    linkedin: 'https://linkedin.com/in/ragibsmajic',
    github: 'https://github.com/ragibsmajic',
    // twitter: 'https://twitter.com/ragibsmajic', // Optional
  },
  coreValues: [
    {
      id: 'value-focused',
      title: 'Value-Focused',
      description: 'Prioritizing business impact and user outcomes over technical novelty.',
    },
    {
      id: 'problem-solver',
      title: 'Problem Solver',
      description: 'Breaking down complex challenges into elegant, maintainable solutions.',
    },
    {
      id: 'engineer-mindset',
      title: 'Engineer Mindset',
      description: 'Systematic approach to design, implementation, and optimization.',
    },
    {
      id: 'tech-enthusiast',
      title: 'Technology Enthusiast',
      description: 'Passionate about learning and applying cutting-edge technologies.',
    },
  ],
}
```

#### Example: `/src/types/profile.ts`
```typescript
export interface Profile {
  name: string
  title: string
  tagline: string
  location?: string
  email: string
  social: SocialLinks
  coreValues: CoreValue[]
}

export interface SocialLinks {
  linkedin: string
  github: string
  twitter?: string
  medium?: string
}

export interface CoreValue {
  id: string
  title: string
  description: string
}
```

### Content Update Workflow

1. **Edit Content:** Update TypeScript files in `/src/content`
2. **Type Check:** Run `npm run type-check` to verify types
3. **Preview Locally:** Run `npm run dev` to test changes
4. **Commit & Push:** Commit to Git and push to GitHub
5. **Auto Deploy:** Vercel automatically rebuilds and deploys

**Advantages:**
- Version-controlled content (Git history)
- No external dependencies or API calls
- Type safety prevents content errors
- Fast builds (no CMS API fetching)

---

## Routing & Navigation

### Route Structure (MVP)

```
/                   → Home page (all sections)
/sitemap.xml        → Automatically generated sitemap
/robots.txt         → SEO crawler instructions
/404                → Custom not-found page
```

**Single-Page Portfolio:**
- All content on home page (`/`)
- Smooth scroll navigation to sections (optional anchor links)
- No separate routes for projects (expandable cards on home page)

### Reserved Routes (Future)

```
/blog               → Blog listing page (Phase 2)
/blog/[slug]        → Individual blog post (Phase 2)
/projects/[slug]    → Individual project deep-dive (Phase 3)
```

### Navigation Implementation

**Option A: No Header Navigation (Minimalist)**
- Hero section is first, no persistent header
- Footer contains all contact links

**Option B: Minimal Header Navigation (Recommended)**
- Sticky header with logo/name on left
- Optional: Scroll-spy navigation links to sections
- CTA button: "Contact" (scrolls to footer or mailto link)

```typescript
// src/components/layout/Header.tsx (if implemented)
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Ragib Smajic</div>
        <a 
          href="mailto:ragib@example.com"
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  )
}
```

---

## Styling Architecture

### Tailwind CSS Configuration

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
        // Custom color palette (see design-system.md)
        background: {
          primary: '#0a0a0a',    // Near-black
          secondary: '#1a1a1a',  // Dark gray
          tertiary: '#2a2a2a',   // Medium gray
        },
        text: {
          primary: '#f5f5f5',    // Off-white
          secondary: '#a3a3a3',  // Light gray
          tertiary: '#737373',   // Medium gray
        },
        accent: {
          primary: '#3b82f6',    // Blue (CTAs)
          secondary: '#8b5cf6',  // Purple (hover states)
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Custom spacing scale if needed
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

### Global Styles

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-background-primary text-text-primary;
  }
  
  /* Custom scrollbar (optional) */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-background-secondary;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-text-tertiary rounded-full;
  }
}

@layer components {
  .section-container {
    @apply max-w-6xl mx-auto px-6 py-20;
  }
  
  .card {
    @apply bg-background-secondary rounded-xl p-6 border border-background-tertiary hover:border-text-tertiary transition-colors;
  }
}
```

### Component Styling Approach

- **Utility-First:** Use Tailwind utilities directly in JSX (80% of styling)
- **Component Classes:** Extract repeated patterns to `@layer components` (20%)
- **No CSS Modules:** Keep all styling in Tailwind for consistency
- **Responsive:** Mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`)

---

## Image Optimization

### Next.js Image Component

```typescript
import Image from 'next/image'

// Technology logos
<Image
  src="/images/technologies/nextjs.svg"
  alt="Next.js logo"
  width={48}
  height={48}
  className="w-12 h-12"
/>

// Project images (if used)
<Image
  src="/images/projects/project-name.png"
  alt="Project screenshot"
  width={600}
  height={400}
  className="rounded-lg"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // Generate with plaiceholder
/>
```

### Image Organization

- **Technology Logos:** `/public/images/technologies/` (SVG preferred)
- **Project Images:** `/public/images/projects/` (PNG/JPG optimized)
- **Profile/Avatar:** `/public/images/avatar.jpg` (if used)
- **OG Image:** `/public/og-image.png` (1200x630px for social sharing)

### Image Best Practices

1. **Use SVG for logos** (infinite scaling, small file size)
2. **Optimize PNGs/JPGs** before adding to repo (use tools like Squoosh, ImageOptim)
3. **Lazy load below-the-fold images** (automatic with next/image)
4. **Generate blur placeholders** for better UX during load
5. **Use WebP/AVIF** (next/image handles conversion automatically)

---

## Performance Optimization

### Build-Time Optimizations

1. **Code Splitting:**
   - Next.js automatically splits code by route
   - Use dynamic imports for large components (if needed in future)

2. **Tree Shaking:**
   - Import only what's needed: `import { Button } from '@/components/ui'` (not `import * as UI`)

3. **Font Optimization:**
   ```typescript
   // src/app/layout.tsx
   import { GeistSans } from 'geist/font/sans'
   
   export default function RootLayout({ children }) {
     return (
       <html lang="en" className={GeistSans.className}>
         <body>{children}</body>
       </html>
     )
   }
   ```

4. **Minification:**
   - JavaScript: Automatic via Next.js (Terser)
   - CSS: Automatic via PostCSS
   - HTML: Automatic compression

### Runtime Optimizations

1. **Static Assets:**
   - All pages pre-rendered (no server-side processing)
   - Served from Vercel Edge Network (global CDN)

2. **Caching:**
   - Static assets cached with long TTL (immutable)
   - HTML cached with shorter TTL (revalidate on redeploy)

3. **Critical CSS:**
   - Tailwind automatically extracts and inlines critical CSS

4. **Lazy Loading:**
   - Images: Automatic with next/image
   - JavaScript: Route-based splitting

### Performance Monitoring

- **Cloudflare Web Analytics:** Real-user monitoring (free, privacy-friendly, no cookies)
- **Cloudflare Speed Test:** Core Web Vitals tracking built into CF dashboard
- **Lighthouse CI:** Run on every deploy (optional GitHub Action)
- **Web Vitals:** Track FCP, LCP, CLS, FID, TTFB

**Performance Targets:**
- Lighthouse Performance: ≥90
- FCP: <1.5s
- LCP: <2.5s
- CLS: <0.1
- TTI: <3.5s
- TTFB: <600ms (Cloudflare edge typically <100ms)

---

## Deployment Pipeline

### Continuous Deployment via GitHub Actions + Cloudflare Pages

**Trigger:** Push to `main` branch or Pull Request

**Platform:** Cloudflare Pages via GitHub Actions

**Pipeline Features:**
- ✅ Automated linting and type checking
- ✅ Security vulnerability scanning
- ✅ Build validation
- ✅ Deployment only on passing checks
- ✅ Automatic preview deployments for PRs
- ✅ Rollback capability

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Build, Test & Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

# Cancel in-progress runs for the same workflow and branch
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  quality-checks:
    name: Quality Checks & Security Scan
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: '24'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run ESLint
        run: npm run lint
      
      - name: Run TypeScript type check
        run: npm run type-check
      
      - name: Security vulnerability scan (npm audit)
        run: |
          # Fail on high and critical vulnerabilities
          npm audit --audit-level=high
          
      - name: Security vulnerability scan (Snyk) [Optional]
        # Uncomment if using Snyk for deeper security scanning
        # uses: snyk/actions/node@master
        # env:
        #   SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        # with:
        #   args: --severity-threshold=high
        continue-on-error: false
      
      - name: Build Next.js application
        run: npm run build
        env:
          NODE_ENV: production
      
      # Optional: Run tests if present
      # - name: Run tests
      #   run: npm test

  deploy:
    name: Deploy to Cloudflare Pages
    needs: quality-checks
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' && github.event_name == 'push'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: '24'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build for production
        run: npm run build
        env:
          NODE_ENV: production
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ragibsmajic-portfolio
          directory: out  # Next.js static export output directory
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
          
      - name: Deployment summary
        run: |
          echo "✅ Deployment successful!"
          echo "🌐 Live at: https://ragibsmajic.com"

  preview-deployment:
    name: Preview Deployment (PR)
    needs: quality-checks
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: '24'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build for preview
        run: npm run build
        env:
          NODE_ENV: production
      
      - name: Deploy preview to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ragibsmajic-portfolio
          directory: out
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
          branch: ${{ github.head_ref }}
      
      - name: Comment PR with preview URL
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '✅ Preview deployment ready!\n\n🔗 Preview URL: Available in Cloudflare Pages dashboard'
            })
```

### Security Scanning Details

**npm audit:**
- Scans for known vulnerabilities in dependencies
- Fails build on HIGH or CRITICAL vulnerabilities
- Run locally: `npm audit`
- Fix automatically: `npm audit fix`

**Optional: Snyk Integration**
- More comprehensive security scanning
- Checks for vulnerabilities, license issues, and code quality
- Free tier available for open-source projects
- Setup: Add `SNYK_TOKEN` to GitHub Secrets

**Alternative: OWASP Dependency-Check**
```yaml
- name: OWASP Dependency Check
  uses: dependency-check/Dependency-Check_Action@main
  with:
    project: 'portfolio'
    path: '.'
    format: 'HTML'
    args: >
      --failOnCVSS 7
      --enableRetired
```

### Cloudflare Pages Configuration

**Initial Setup:**

1. **Purchase domain from Cloudflare**
   - Go to Cloudflare Dashboard → Domains → Register Domain
   - Purchase `ragibsmajic.com` (~$10/year)

2. **Create Cloudflare Pages Project**
   - Go to Workers & Pages → Create Application → Pages
   - Connect to GitHub repository
   - Project name: `ragibsmajic-portfolio`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Framework preset: `Next.js (Static HTML Export)`

3. **Configure Custom Domain**
   - In Cloudflare Pages project settings → Custom domains
   - Add `ragibsmajic.com` and `www.ragibsmajic.com`
   - DNS records are automatically created (no manual configuration needed!)
   - SSL certificate automatically provisioned

4. **Get API Tokens for GitHub Actions**
   - Cloudflare Dashboard → My Profile → API Tokens
   - Create API Token with "Cloudflare Pages - Edit" permissions
   - Add to GitHub repository secrets:
     - `CLOUDFLARE_API_TOKEN`: Your API token
     - `CLOUDFLARE_ACCOUNT_ID`: Found in Cloudflare dashboard URL

**DNS Configuration (Automatic):**
Cloudflare Pages automatically creates and manages DNS records:
```
CNAME ragibsmajic.com         ragibsmajic-portfolio.pages.dev
CNAME www.ragibsmajic.com     ragibsmajic-portfolio.pages.dev
```

**Benefits of Cloudflare Pages:**
- ✅ Zero DNS configuration (automatic when using CF domain)
- ✅ Instant SSL certificate provisioning
- ✅ Built-in DDoS protection and WAF
- ✅ Bot management and security rules
- ✅ Automatic redirects (www → apex or vice versa)
- ✅ Preview deployments for every PR
- ✅ Atomic deployments (instant rollback)
- ✅ No cold starts (static files on edge)

---

## Future Extensibility

### Preparing for Dynamic Content (Blog)

**Current Structure Supports:**

1. **Routing:** `/blog` route is reserved, no conflicts with MVP
2. **Content Folder:** `/src/content` separates static portfolio data from future blog posts
3. **Component Architecture:** Sections are isolated, blog components won't conflict

**Migration Path to Blog (Phase 2):**

```typescript
// Future: src/app/blog/page.tsx (blog listing)
export default async function BlogPage() {
  const posts = await getPosts() // Fetch from CMS or markdown files
  return <BlogList posts={posts} />
}

// Future: src/app/blog/[slug]/page.tsx (individual post)
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)
  return <BlogPostLayout post={post} />
}
```

**Content Management Options for Blog:**
- **Option A:** MDX files in `/content/blog` (simple, version-controlled)
- **Option B:** Headless CMS (Sanity, Contentful, Strapi) for non-technical editing
- **Option C:** Notion API (use Notion as CMS)
- **Option D:** Cloudflare Workers + KV storage (serverless, edge-native)

**Dynamic Features with Cloudflare Workers:**
For future blog or dynamic content, use Cloudflare Workers (serverless functions at the edge):
```typescript
// workers/api/views.ts - Example: Track blog post views
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const postId = url.searchParams.get('post')
    
    // Store view count in Cloudflare KV
    const views = await env.VIEWS_KV.get(postId) || 0
    await env.VIEWS_KV.put(postId, String(Number(views) + 1))
    
    return new Response(JSON.stringify({ views: Number(views) + 1 }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
```

**No architectural changes needed** for blog implementation—just add new routes and components. Cloudflare Workers handle any server-side logic at the edge.

---

## Configuration Files

### Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export (not needed with Vercel, but documents intent)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  // Strict mode for better error catching
  reactStrictMode: true,
  // Disable x-powered-by header for security
  poweredByHeader: false,
}

module.exports = nextConfig
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
    "audit": "npm audit --audit-level=high",
    "audit:fix": "npm audit fix",
    "security-check": "npm audit --audit-level=high && npm run lint && npm run type-check"
  }
}
```

---

## Security Considerations

### Content Security

- All content is static (no user input, no XSS risk)
- External links use `rel="noopener noreferrer"` to prevent tabnabbing
- No cookies or session storage (GDPR-compliant by default)

### Cloudflare Security Features

**Built-in Security (No Configuration Needed):**
- ✅ Automatic HTTPS/TLS with modern cipher suites
- ✅ DDoS protection (unlimited, unmetered)
- ✅ Web Application Firewall (WAF)
- ✅ Bot management and challenge pages
- ✅ Rate limiting (configurable)
- ✅ Always Online™ (serves cached version if origin down)
- ✅ Zero Trust network access
- ✅ Automatic security headers (HSTS, CSP, etc.)

**Additional Security Hardening:**
```javascript
// next.config.js - Security headers
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      }
    ]
  }
}
```

**CI/CD Security:**
- ✅ npm audit fails build on high/critical vulnerabilities
- ✅ Dependencies scanned before every deployment
- ✅ No deployment if security checks fail
- ✅ Automated security updates via Dependabot

### Future Security Additions

- **Blog/Comments (Phase 2):** Add CSRF protection, rate limiting, spam filtering via Cloudflare Workers
- **Contact Form (Phase 3):** Implement Cloudflare Turnstile (better than Captcha, privacy-friendly)

---

## Development Environment Setup

### Prerequisites

- Node.js 24+ (LTS v24.11.1 recommended)
- npm 10+ or pnpm 8+ (pnpm recommended for speed)
- Git
- VS Code (recommended) with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript + JavaScript

### Initial Setup Commands

```bash
# Clone repository
git clone https://github.com/ragibsmajic/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Environment Variables

```bash
# .env.local (not committed to Git)
# None needed for MVP (no API keys)
# Future: Add CMS API keys, analytics tokens here
```

---

## Appendix: Technology Justifications

### Why Next.js over Other Frameworks?

| Framework | Pros | Cons | Verdict |
|-----------|------|------|---------|
| **Next.js** | Best-in-class SSG, Vercel integration, great DX, image optimization, built-in font optimization | React learning curve | ✅ **Chosen** |
| Astro | Even better performance, multi-framework | Less mature ecosystem, smaller community | ❌ Overkill for React-focused dev |
| Gatsby | Mature SSG, GraphQL | Slower builds, declining popularity | ❌ Next.js has surpassed |
| Plain React (CRA) | Simple | No SSR/SSG, manual optimization needed | ❌ Poor SEO without SSR |

### Why Cloudflare Pages over Other Hosts?

| Host | Cost (MVP) | Features | Security | Verdict |
|------|------------|----------|----------|---------|
| **Cloudflare Pages** | $0/month | Unlimited bandwidth, 500 builds/month, integrated with CF domain, Workers, excellent Next.js support | DDoS, WAF, bot protection, Zero Trust | ✅ **Chosen** |
| Vercel | $0/month | Great Next.js integration, analytics, 100 GB bandwidth | Basic DDoS, needs separate CF config | ⚠️ Extra DNS config, less security |
| Netlify | $0/month | 100 GB bandwidth, build minutes limited | Basic DDoS | ⚠️ Less bandwidth, separate domain |
| GitHub Pages | $0/month | Simple, integrated with GitHub | None | ❌ No Next.js SSG support, manual setup |
| AWS Amplify | $0/month (mostly) | AWS integration | AWS Shield (basic) | ❌ Complex setup, costs can scale |
| Self-hosted VPS | $5-10/month | Full control | Manual configuration | ❌ Maintenance, no edge network |

**Why Cloudflare Pages Wins:**
1. ✅ Already using Cloudflare for domain (zero DNS config)
2. ✅ Best-in-class security features (DDoS, WAF, bot protection) included free
3. ✅ Unlimited bandwidth (Vercel limits to 100 GB/month on free tier)
4. ✅ 300+ edge locations globally
5. ✅ Cloudflare Workers for future dynamic features
6. ✅ Better integration with CF ecosystem (analytics, images, stream)
7. ✅ No vendor lock-in concerns (can move to another host easily)

### Why TypeScript over JavaScript?

- **Type Safety:** Catches errors at compile-time, not runtime
- **Better IDE Support:** Autocomplete, inline documentation
- **Refactoring Confidence:** Rename symbols safely across entire codebase
- **Self-Documenting:** Types serve as inline documentation
- **Industry Standard:** Expected in modern professional projects

---

**Document Status:** Ready for Implementation  
**Next Steps:** Proceed to design system definition, then content structure, then implementation.