# SEO Strategy
## Ragib Smajic Portfolio Website

---

### Document Information
- **Version:** 1.0.0
- **Last Updated:** December 6, 2025
- **Status:** SEO Planning

---

## Table of Contents
1. [SEO Goals & KPIs](#seo-goals--kpis)
2. [Keyword Strategy](#keyword-strategy)
3. [Meta Tags & Metadata](#meta-tags--metadata)
4. [Structured Data (JSON-LD)](#structured-data-json-ld)
5. [Open Graph & Social Sharing](#open-graph--social-sharing)
6. [Sitemap & Robots.txt](#sitemap--robotstxt)
7. [Performance Optimization](#performance-optimization)
8. [Analytics & Monitoring](#analytics--monitoring)
9. [Implementation Checklist](#implementation-checklist)

---

## SEO Goals & KPIs

### Primary SEO Objectives

1. **Brand Visibility**
   - Rank #1 for "Ragib Smajic" on Google (personal brand)
   - Appear in search results for "Ragib Smajic software engineer"
   - Indexed by Google within 7 days of launch

2. **Professional Discovery**
   - Rank for relevant technical terms: "Senior Software Engineer [location]", "[Technology] developer"
   - Appear in recruiter searches for specific skill combinations
   - High-quality backlink profile (LinkedIn, GitHub, professional networks)

3. **Technical Excellence**
   - Lighthouse SEO score: 100/100
   - All Core Web Vitals passing (green)
   - Zero critical SEO issues

### Key Performance Indicators (KPIs)

| Metric | Target | Timeline |
|--------|--------|----------|
| Google indexing | Within 7 days | Launch week |
| Search Console impressions | 100+/month | Month 3 |
| Organic traffic | 50+ visitors/month | Month 6 |
| Lighthouse SEO score | 100/100 | Launch |
| Core Web Vitals | All green | Launch |
| Branded search ranking (#1 for "Ragib Smajic") | Position 1 | Month 1 |

---

## Keyword Strategy

### Primary Keywords (Branded)

- **"Ragib Smajic"** - Priority #1
- **"Ragib Smajic software engineer"**
- **"Ragib Smajic portfolio"**

### Secondary Keywords (Professional)

- **"Senior Software Engineer [Location]"** - Replace with actual location if relevant
- **"Full-stack developer [Location]"**
- **"Software engineer portfolio"** - Competitive but valuable
- **"Tech lead portfolio"**

### Long-Tail Keywords (Technical)

- **"[Technology] + [Technology] developer"** (e.g., "React Node.js developer")
- **"Software engineer specializing in [domain]"** (e.g., "cloud architecture")
- **"[Problem] solutions [technology]"** (e.g., "scalable web applications Next.js")

### Keyword Implementation

```html
<!-- Title tag includes primary keyword -->
<title>Ragib Smajic - Senior Software Engineer | Full-Stack Developer</title>

<!-- H1 includes name (primary keyword) -->
<h1>Ragib Smajic</h1>

<!-- H2 includes role/keywords naturally -->
<h2>Senior Software Engineer specializing in scalable web applications</h2>

<!-- Body content includes keywords naturally -->
<p>
  With 8 years of experience as a software engineer, I've delivered 
  value-focused solutions across React, Node.js, and AWS...
</p>
```

**Keyword Density:** Natural usage, avoid keyword stuffing. Aim for 1-2% density for primary keywords.

---

## Meta Tags & Metadata

### Homepage Meta Tags

```typescript
// src/app/layout.tsx (Next.js App Router Metadata API)
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: 'Ragib Smajic - Senior Software Engineer | Full-Stack Developer',
    template: '%s | Ragib Smajic', // For future pages: "Blog | Ragib Smajic"
  },
  description: 
    'Portfolio of Ragib Smajic, Senior Software Engineer with 8 years of experience building scalable web applications. Specializing in React, Node.js, AWS, and cloud architecture.',
  
  // Keywords (less important for modern SEO, but doesn't hurt)
  keywords: [
    'Ragib Smajic',
    'Senior Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Node.js Developer',
    'AWS Cloud Engineer',
    'Software Engineer Portfolio',
    'Tech Lead',
  ],
  
  // Author & Creator
  authors: [{ name: 'Ragib Smajic' }],
  creator: 'Ragib Smajic',
  publisher: 'Ragib Smajic',
  
  // Language & Region
  alternates: {
    canonical: 'https://ragibsmajic.com',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add after claiming in Google Search Console)
  verification: {
    google: 'your-google-verification-code', // Add after GSC setup
    // yandex: 'your-yandex-verification-code', // Optional
    // bing: 'your-bing-verification-code', // Optional
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest (PWA - optional for MVP)
  // manifest: '/site.webmanifest',
}
```

### Meta Description Best Practices

- **Length:** 150-160 characters (ideal for Google display)
- **Include primary keyword** naturally
- **Compelling copy** that encourages clicks
- **Unique** for each page (future blog posts)
- **Active voice**, direct to user

**Good Example:**
```
Portfolio of Ragib Smajic, Senior Software Engineer with 8 years of experience building scalable web applications. Specializing in React, Node.js, AWS, and cloud architecture.
```

**Bad Example (avoid):**
```
This is my portfolio website where you can see my projects and skills.
```

---

## Structured Data (JSON-LD)

### Person Schema

```typescript
// src/lib/structuredData.ts
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ragib Smajic',
    jobTitle: 'Senior Software Engineer',
    description: 'Senior Software Engineer with 8 years of experience building scalable web applications',
    url: 'https://ragibsmajic.com',
    image: 'https://ragibsmajic.com/images/ragib-smajic.jpg', // Profile photo
    sameAs: [
      'https://www.linkedin.com/in/ragibsmajic',
      'https://github.com/ragibsmajic',
      // Add other social profiles
    ],
    email: 'ragib@example.com', // Replace with real email
    knowsAbout: [
      'Software Engineering',
      'React',
      'Node.js',
      'TypeScript',
      'AWS',
      'Cloud Architecture',
      'Full-Stack Development',
      // Add more technologies
    ],
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'Bosnian',
        alternateName: 'bs',
      },
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'University Name', // Replace with actual university
    },
    // Optional: Address if you want to target local searches
    // address: {
    //   '@type': 'PostalAddress',
    //   addressCountry: 'BA',
    //   addressLocality: 'City Name',
    // },
  }
}
```

### ProfilePage Schema

```typescript
export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2025-12-06T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: 'Ragib Smajic',
      jobTitle: 'Senior Software Engineer',
      url: 'https://ragibsmajic.com',
      sameAs: [
        'https://www.linkedin.com/in/ragibsmajic',
        'https://github.com/ragibsmajic',
      ],
    },
  }
}
```

### Implementation in Next.js

```tsx
// src/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProfilePageSchema()),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**Benefits:**
- Rich snippets in search results (may show job title, photo, links)
- Knowledge Graph eligibility (Google may create knowledge panel)
- Better understanding of page content by search engines

---

## Open Graph & Social Sharing

### Open Graph Tags (Facebook, LinkedIn)

```typescript
// src/app/layout.tsx (Next.js Metadata API)
export const metadata: Metadata = {
  // ... previous metadata
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ragibsmajic.com',
    title: 'Ragib Smajic - Senior Software Engineer | Full-Stack Developer',
    description: 
      'Portfolio of Ragib Smajic, Senior Software Engineer with 8 years of experience building scalable web applications.',
    siteName: 'Ragib Smajic Portfolio',
    images: [
      {
        url: 'https://ragibsmajic.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ragib Smajic - Senior Software Engineer',
      },
    ],
  },
}
```

### Twitter Card Tags

```typescript
export const metadata: Metadata = {
  // ... previous metadata
  
  twitter: {
    card: 'summary_large_image',
    title: 'Ragib Smajic - Senior Software Engineer',
    description: 
      'Portfolio of Ragib Smajic, Senior Software Engineer with 8 years of experience building scalable web applications.',
    creator: '@ragibsmajic', // Replace with actual Twitter handle if exists
    images: ['https://ragibsmajic.com/og-image.png'],
  },
}
```

### Open Graph Image Design

**Specifications:**
- **Dimensions:** 1200x630px (Facebook/LinkedIn recommended)
- **File format:** PNG or JPG
- **File size:** <1MB (ideally <300KB)
- **Safe zone:** Keep important content within 1200x600px center (avoid edges)

**Content:**
- Name: "Ragib Smajic"
- Title: "Senior Software Engineer"
- Brief tagline or tech stack icons
- Minimal, professional design matching portfolio aesthetic
- High contrast for readability

**Tools to create:**
- Figma, Canva, Photoshop
- Online OG image generators (e.g., og-image.vercel.app)

---

## Sitemap & Robots.txt

### Sitemap.xml (Next.js App Router)

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ragibsmajic.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Future: Add blog posts dynamically
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ]
}
```

**Generated sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ragibsmajic.com</loc>
    <lastmod>2025-12-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Robots.txt (Next.js App Router)

```typescript
// src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [], // No disallowed pages for MVP
    },
    sitemap: 'https://ragibsmajic.com/sitemap.xml',
  }
}
```

**Generated robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://ragibsmajic.com/sitemap.xml
```

### Submit to Search Engines

**After launch:**

1. **Google Search Console**
   - Create account at search.google.com/search-console
   - Add property: ragibsmajic.com
   - Verify ownership (DNS or HTML file verification)
   - Submit sitemap: `https://ragibsmajic.com/sitemap.xml`
   - Request indexing for homepage

2. **Bing Webmaster Tools**
   - Create account at bing.com/webmasters
   - Add site: ragibsmajic.com
   - Verify ownership
   - Submit sitemap

3. **Manual Indexing Request**
   - Use "Request Indexing" in Google Search Console
   - Typically indexed within 24-48 hours

---

## Performance Optimization

### Core Web Vitals Targets

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| **LCP** (Largest Contentful Paint) | <2.5s | Measures loading performance |
| **FID** (First Input Delay) | <100ms | Measures interactivity |
| **CLS** (Cumulative Layout Shift) | <0.1 | Measures visual stability |
| **FCP** (First Contentful Paint) | <1.5s | User perception of load speed |
| **TTFB** (Time to First Byte) | <600ms | Server response time |

### Performance Budget

```javascript
// Performance budgets (enforce in Lighthouse CI)
{
  "performance": 90,      // Lighthouse Performance score minimum
  "accessibility": 100,   // Lighthouse Accessibility score minimum
  "best-practices": 100,  // Lighthouse Best Practices score minimum
  "seo": 100,             // Lighthouse SEO score minimum
  
  "budgets": [
    {
      "resourceSizes": [
        { "resourceType": "script", "budget": 200 },      // 200KB JS max
        { "resourceType": "stylesheet", "budget": 50 },   // 50KB CSS max
        { "resourceType": "image", "budget": 500 },       // 500KB images max
        { "resourceType": "document", "budget": 50 },     // 50KB HTML max
        { "resourceType": "total", "budget": 800 }        // 800KB total max
      ]
    }
  ]
}
```

### Optimization Strategies

1. **Image Optimization**
   - Use next/image for automatic WebP/AVIF conversion
   - Lazy load images below the fold
   - Compress images before upload (Squoosh, ImageOptim)
   - Use appropriate image sizes (no oversized images)

2. **Font Optimization**
   - Use next/font for automatic font optimization
   - Subset fonts (Latin characters only if sufficient)
   - Preload critical fonts
   - Use system fonts as fallback

3. **JavaScript Optimization**
   - Code splitting (automatic with Next.js)
   - Tree shaking (remove unused code)
   - Minimize third-party scripts
   - Defer non-critical JavaScript

4. **CSS Optimization**
   - Tailwind CSS purges unused styles automatically
   - Inline critical CSS (Next.js handles automatically)
   - Minify CSS in production

5. **Caching & CDN**
   - Vercel Edge Network caches static assets globally
   - Long cache TTL for immutable assets (images, fonts)
   - Shorter TTL for HTML (revalidate on redeploy)

---

## Analytics & Monitoring

### Vercel Analytics (Primary - MVP)

**Setup:**
```bash
npm install @vercel/analytics
```

```tsx
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

**Metrics Tracked:**
- Page views
- Unique visitors
- Top pages
- Traffic sources (referrers)
- Geographic distribution
- Device types (mobile, desktop, tablet)

**Benefits:**
- Privacy-friendly (no cookies, GDPR-compliant)
- Zero configuration
- Real-time data
- Integrated with Vercel dashboard

### Google Search Console (SEO Monitoring)

**Metrics to Monitor:**
- **Impressions:** How often your site appears in search results
- **Clicks:** How often users click through from search
- **CTR (Click-Through Rate):** Clicks / Impressions
- **Average Position:** Average ranking position in search results
- **Search Queries:** What keywords bring traffic
- **Index Coverage:** Pages successfully indexed
- **Core Web Vitals:** Real-user performance data
- **Mobile Usability:** Mobile-specific issues

**Action Items:**
- Weekly check for new search queries
- Monitor impressions growth
- Identify low-CTR pages (improve titles/descriptions)
- Fix indexing errors promptly

### Lighthouse CI (Performance Monitoring)

**Optional: Automate Lighthouse audits on every deploy**

```yaml
# .github/workflows/lighthouse-ci.yml
name: Lighthouse CI

on:
  push:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://ragibsmajic.com
          uploadArtifacts: true
```

**Alerts for:**
- Performance score drops below 90
- Accessibility issues
- SEO score drops below 100
- Core Web Vitals failing

---

## Implementation Checklist

### Pre-Launch SEO Checklist

#### Meta Tags & Metadata
- [ ] Title tag set (≤60 characters, includes primary keyword)
- [ ] Meta description set (150-160 characters, compelling)
- [ ] Meta keywords set (optional, but included)
- [ ] Canonical URL set
- [ ] Language attribute set (`<html lang="en">`)
- [ ] Viewport meta tag set (mobile-friendly)
- [ ] Favicon and apple-touch-icon added

#### Structured Data
- [ ] Person schema implemented
- [ ] ProfilePage schema implemented
- [ ] Validated with Google Rich Results Test

#### Open Graph & Social
- [ ] Open Graph tags implemented (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags implemented
- [ ] OG image created (1200x630px) and uploaded
- [ ] Tested with Facebook Debugger and Twitter Card Validator

#### Sitemap & Robots
- [ ] Sitemap.xml generated and accessible at /sitemap.xml
- [ ] Robots.txt generated and accessible at /robots.txt
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap submitted to Bing Webmaster Tools

#### Content & On-Page SEO
- [ ] H1 tag used once per page (name on homepage)
- [ ] Heading hierarchy logical (H1 > H2 > H3)
- [ ] Alt text for all images
- [ ] Internal links use descriptive anchor text
- [ ] External links use rel="noopener noreferrer"
- [ ] Content includes primary keywords naturally
- [ ] No duplicate content

#### Performance
- [ ] Lighthouse Performance score ≥90
- [ ] Lighthouse SEO score = 100
- [ ] Core Web Vitals all green (LCP, FID, CLS)
- [ ] Images optimized and lazy-loaded
- [ ] Fonts optimized with next/font

#### Accessibility
- [ ] Lighthouse Accessibility score = 100
- [ ] Color contrast ≥4.5:1 (WCAG AA)
- [ ] Keyboard navigation functional
- [ ] ARIA labels for icons/links
- [ ] Skip links implemented
- [ ] Focus indicators visible

#### Technical
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Mobile-friendly (responsive design)
- [ ] 404 page created and styled
- [ ] No console errors in production
- [ ] No broken links (use broken-link-checker tool)

### Post-Launch SEO Tasks

#### Week 1
- [ ] Submit homepage to Google Search Console for indexing
- [ ] Verify site ownership in Google Search Console
- [ ] Verify site ownership in Bing Webmaster Tools
- [ ] Check indexing status (Google "site:ragibsmajic.com")
- [ ] Share portfolio on LinkedIn, GitHub, social media (backlinks)

#### Week 2-4
- [ ] Monitor Google Search Console for impressions/clicks
- [ ] Check for indexing errors
- [ ] Analyze Core Web Vitals data
- [ ] Add portfolio link to LinkedIn profile
- [ ] Add portfolio link to GitHub profile README

#### Month 2-3
- [ ] Analyze top search queries in GSC
- [ ] Optimize meta descriptions for low-CTR pages (if applicable in future)
- [ ] Monitor keyword rankings (branded search: "Ragib Smajic")
- [ ] Build quality backlinks (guest posts, interviews, directory listings)

#### Ongoing
- [ ] Monthly GSC review (impressions, clicks, queries)
- [ ] Quarterly Lighthouse audits
- [ ] Update content as experience/projects change
- [ ] Monitor and maintain performance scores

---

## SEO Tools Reference

### Free SEO Tools

| Tool | Purpose | URL |
|------|---------|-----|
| **Google Search Console** | Search performance, indexing, Core Web Vitals | search.google.com/search-console |
| **Bing Webmaster Tools** | Bing search performance, indexing | bing.com/webmasters |
| **Google Lighthouse** | Performance, SEO, accessibility audits | Built into Chrome DevTools |
| **Google Rich Results Test** | Structured data validation | search.google.com/test/rich-results |
| **Facebook Debugger** | Open Graph tag testing | developers.facebook.com/tools/debug |
| **Twitter Card Validator** | Twitter Card tag testing | cards-dev.twitter.com/validator |
| **PageSpeed Insights** | Real-world performance data | pagespeed.web.dev |
| **Vercel Analytics** | Privacy-friendly web analytics | vercel.com/analytics |

### Paid SEO Tools (Optional)

| Tool | Purpose | Cost |
|------|---------|------|
| **Ahrefs** | Backlink analysis, keyword research | $99+/month |
| **SEMrush** | Comprehensive SEO toolkit | $119+/month |
| **Moz Pro** | Keyword tracking, site audits | $99+/month |

**For personal portfolio:** Free tools are sufficient for MVP and beyond.

---

## SEO Maintenance Schedule

### Daily (Automated)
- Vercel Analytics tracking (automatic)
- Performance monitoring (automatic)

### Weekly
- Check Google Search Console for new impressions/clicks (5 min)
- Review Vercel Analytics for traffic trends (5 min)

### Monthly
- Detailed GSC analysis (queries, pages, CTR) (15 min)
- Lighthouse audit (10 min)
- Check for broken links (5 min)
- Review and update content if needed (30 min)

### Quarterly
- Comprehensive SEO audit (Lighthouse, GSC, performance) (1 hour)
- Update structured data if role/skills change (15 min)
- Analyze backlink profile (Ahrefs free backlink checker) (15 min)
- Revisit keyword strategy (15 min)

---

**Document Status:** Ready for Implementation  
**Next Steps:** Implement SEO best practices during development, validate with tools before launch, submit to search engines post-launch.