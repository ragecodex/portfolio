# Product Requirements Document (PRD)
## Ragib Smajic Portfolio Website

---

### Document Information
- **Version:** 1.1.0
- **Last Updated:** December 6, 2025
- **Product Owner:** Ragib Smajic
- **Status:** MVP Definition

### Version History
| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.1.0 | Dec 6, 2025 | Added navigation, background image, updated contact info | GitHub Copilot |
| 1.0.0 | Dec 6, 2025 | Initial PRD creation with user stories | GitHub Copilot |

---

## Table of Contents
1. [Product Vision](#product-vision)
2. [Target Audience](#target-audience)
3. [Core Value Proposition](#core-value-proposition)
4. [Epics & User Stories](#epics--user-stories)
5. [Non-Functional Requirements](#non-functional-requirements)
6. [Success Metrics](#success-metrics)
7. [Out of Scope (MVP)](#out-of-scope-mvp)
8. [Future Considerations](#future-considerations)

---

## Product Vision

Build a minimalist, high-performance portfolio website for Ragib Smajic (Senior Software Engineer) that effectively communicates professional value, experience, and technical expertise to recruiters, hiring managers, and potential clients through clear, visually appealing design.

**Mission Statement:** To create a digital representation that positions Ragib as a value-focused problem solver with an engineer mindset and technology enthusiasm, while maintaining optimal SEO performance and scalability for future content additions.

---

## Target Audience

### Primary Personas

#### 1. Technical Recruiter / Hiring Manager
- **Goals:** Quickly assess candidate qualifications, experience, and technical fit
- **Pain Points:** Too much information, unclear experience progression, hard to contact
- **Needs:** Clear role history, technology stack visibility, project outcomes

#### 2. Potential Client / Business Stakeholder
- **Goals:** Evaluate technical expertise, problem-solving capability, reliability
- **Pain Points:** Overly technical jargon, unclear value delivery, lack of business impact
- **Needs:** Understanding of delivered value, project complexity, communication capability

#### 3. Technical Peer / Collaborator
- **Goals:** Assess technical depth, architecture decisions, technology choices
- **Pain Points:** Surface-level descriptions, no technical challenges mentioned
- **Needs:** Deep-dive into problems solved, architectural decisions, tech stack rationale

---

## Core Value Proposition

**Ragib Smajic** is a value-focused problem solver with 8 years of software engineering experience, proven track record in technical leadership roles, and expertise across 10-15 modern technologies. This portfolio demonstrates an engineer mindset applied to real-world challenges with clear, measurable outcomes.

**Key Differentiators:**
- Value-focused engineering approach (business impact over tech novelty)
- Problem-solving expertise across diverse architectures
- Technology enthusiast with broad stack knowledge
- Technical leadership experience (Tech Lead, Project Tech Authority)

---

## Epics & User Stories

### Epic 1: Hero Section & Core Values

#### Story 1.1: First Impression
**As a** recruiter visiting the portfolio  
**I want** to immediately understand who Ragib is and what value he provides  
**So that** I can quickly determine if he matches my open positions

**Acceptance Criteria:**
- [ ] Hero section displays full name prominently
- [ ] Current role/title is clearly visible (e.g., "Senior Software Engineer")
- [ ] Tagline captures core value proposition in ≤15 words
- [ ] Visual hierarchy guides eye from name → title → value proposition
- [ ] Section loads within 1 second (FCP <1s)

**Technical Notes:**
- Use H1 for name (SEO primary heading)
- Implement fade-in animation on load (subtle, 300ms)
- Ensure text contrast ratio ≥4.5:1 for accessibility

---

#### Story 2.2: Core Values Display
**As a** hiring manager evaluating culture fit  
**I want** to see Ragib's core professional values highlighted  
**So that** I can assess alignment with our team culture

**Acceptance Criteria:**
- [ ] Four core values displayed: "Value-Focused", "Problem Solver", "Engineer Mindset", "Technology Enthusiast"
- [ ] Each value has a brief 1-sentence explanation
- [ ] Values are visually distinct (cards or grid layout)
- [ ] Responsive layout: 2x2 grid on desktop, stacked on mobile
- [ ] Subtle hover effects to indicate interactivity

**Technical Notes:**
- Use semantic HTML (`<section>`, `<article>`)
- Implement with CSS Grid for layout
- Add aria-labels for accessibility

---

### Epic 2: Professional Experience

#### Story 2.1: Experience Timeline
**As a** recruiter assessing experience level  
**I want** to see Ragib's work history in chronological order  
**So that** I can understand his career progression and tenure

**Acceptance Criteria:**
- [ ] Experience section displays 2 companies with roles
- [ ] Each entry shows: Company name, Role title(s), Duration (years/months), Location (optional)
- [ ] Current position clearly indicated (e.g., "Present" or badge)
- [ ] Timeline visual (line or cards) showing progression
- [ ] Total experience (8 years) highlighted somewhere
- [ ] Roles include: Senior Software Engineer, Tech Lead, Project Tech Authority

**Technical Notes:**
- Use `<time>` element with datetime attribute for dates
- Implement timeline with CSS or simple SVG
- Ensure mobile responsiveness (vertical timeline)

---

#### Story 2.2: Role Responsibilities
**As a** hiring manager evaluating leadership capability  
**I want** to see key responsibilities for each role  
**So that** I can assess fit for senior/lead positions

**Acceptance Criteria:**
- [ ] Each role has 2-4 bullet points of key responsibilities
- [ ] Leadership roles (Tech Lead, Project Tech Authority) clearly highlight leadership activities
- [ ] Responsibilities focus on impact and outcomes, not just tasks
- [ ] Technical and non-technical responsibilities balanced

**Technical Notes:**
- Use semantic lists (`<ul>`, `<li>`)
- Keep bullet points to ≤20 words each
- Consider expandable sections for roles with many details

---

### Epic 3: Education

#### Story 3.1: Educational Background
**As a** recruiter verifying qualifications  
**I want** to see Ragib's educational credentials  
**So that** I can confirm minimum requirements are met

**Acceptance Criteria:**
- [ ] Education section lists degree(s) with: Institution name, Degree type, Field of study, Graduation year (or expected)
- [ ] Section is clear but not overly prominent (education less critical for 8-year professional)
- [ ] Optional: Relevant coursework or honors if space permits

**Technical Notes:**
- Use structured data (JSON-LD) for Education schema
- Keep section concise (education less emphasized for experienced professionals)

---

### Epic 4: Languages

#### Story 4.1: Language Proficiency Display
**As a** recruiter evaluating international candidates  
**I want** to see which languages Ragib speaks and his proficiency level  
**So that** I can determine communication fit for global teams

**Acceptance Criteria:**
- [ ] Languages section displays 2 languages: Bosnian, English
- [ ] Each language shows: Language name, Proficiency level, Optional flag/icon
- [ ] Bosnian marked as "Native" proficiency
- [ ] English marked as "Full Professional Proficiency"
- [ ] Section is visually clean and simple (2-column layout or inline)
- [ ] Responsive layout on mobile devices

**Technical Notes:**
- Use simple card or badge design
- Consider using flag icons (optional, ensure proper licensing)
- Follow CEFR levels if expanding later (A1-C2) or simpler labels (Native, Fluent, Professional, Intermediate, Basic)

---

### Epic 5: Technologies & Cloud Providers

#### Story 5.1: Technology Stack Overview
**As a** technical recruiter matching candidates to job requirements  
**I want** to see all technologies Ragib has worked with  
**So that** I can quickly determine technical fit

**Acceptance Criteria:**
- [ ] Technology section displays 10-15 technologies/cloud providers
- [ ] Each technology shows icon/logo and name
- [ ] Technologies are grouped by category (e.g., Languages, Frameworks, Cloud, Tools)
- [ ] Visual grid layout, responsive (4-5 per row on desktop, 2-3 on mobile)
- [ ] Logos are high-quality and properly attributed
- [ ] Optional: Hover shows years of experience or proficiency level

**Technical Notes:**
- Use Next.js Image component for logo optimization
- Implement lazy loading for logos below fold
- Consider SVG logos for best quality and performance
- Group technologies logically: Languages, Frameworks, Cloud/Infrastructure, Databases, Tools

---

#### Story 5.2: Technology Filtering (Optional Enhancement)
**As a** recruiter looking for specific skills  
**I want** to filter technologies by category  
**So that** I can quickly find relevant expertise

**Acceptance Criteria:**
- [ ] Category filter buttons above technology grid
- [ ] Clicking category shows only those technologies
- [ ] "All" button resets filter
- [ ] Smooth animation when filtering

**Technical Notes:**
- Implement with client-side JavaScript (React state)
- Consider this lower priority for MVP

---

### Epic 6: Project Showcase

#### Story 6.1: Project List Display
**As a** hiring manager evaluating real-world experience  
**I want** to see 3-5 projects Ragib has delivered  
**So that** I can assess the complexity and quality of his work

**Acceptance Criteria:**
- [ ] Projects section displays 3-5 projects as cards or list items
- [ ] Each project shows: Project name, Brief 1-sentence description, Technologies used (tags/badges), Timeframe or year
- [ ] Projects are ordered by recency or importance
- [ ] Visual hierarchy emphasizes project names
- [ ] Responsive grid: 1 column mobile, 2-3 columns desktop

**Technical Notes:**
- Use card component pattern for consistency
- Implement with CSS Grid or Flexbox
- Ensure technology badges match design system colors

---

#### Story 6.2: Challenge & Solution Narrative
**As a** technical peer evaluating problem-solving skills  
**I want** to read about the specific challenges faced and solutions implemented  
**So that** I can assess technical depth and approach

**Acceptance Criteria:**
- [ ] Each project card expandable or links to detail view
- [ ] Challenge section (2-3 sentences): Describes the problem, constraints, or technical difficulty
- [ ] Solution section (2-4 sentences): Explains approach, architecture decisions, technologies chosen
- [ ] Optional: Outcome/Impact section with metrics or results
- [ ] Technologies mentioned in solution are highlighted/linked to tech stack

**Technical Notes:**
- Consider modal, expandable card, or dedicated route for details
- For MVP, expandable card within page (no routing) recommended
- Implement smooth expand/collapse animation
- Ensure accessibility (keyboard navigation, ARIA attributes)

---

#### Story 6.3: Project Visuals (Optional)
**As a** potential client evaluating professionalism  
**I want** to see screenshots or diagrams of projects  
**So that** I can visualize the work quality

**Acceptance Criteria:**
- [ ] Each project optionally includes 1-2 images (screenshots, architecture diagrams)
- [ ] Images are high-quality and properly optimized
- [ ] Clicking image opens larger view (lightbox or modal)
- [ ] Images have alt text for accessibility

**Technical Notes:**
- Use Next.js Image component with placeholder blur
- Implement lazy loading for images
- Consider this nice-to-have for MVP, not required

---

### Epic 7: Footer & Contact

#### Story 7.1: Contact Information
**As a** recruiter wanting to reach out  
**I want** to easily find Ragib's contact information  
**So that** I can initiate conversation without friction

**Acceptance Criteria:**
- [ ] Footer section includes email address (clickable mailto: link)
- [ ] Social media links displayed with icons: LinkedIn, GitHub (minimum)
- [ ] Optional: Twitter/X, Medium, or other relevant platforms
- [ ] Links open in new tab with proper security (rel="noopener noreferrer")
- [ ] Icons are accessible with aria-labels
- [ ] Email and social links are visually distinct and easy to click (min 44x44px touch target)

**Technical Notes:**
- Use SVG icons for social media (React Icons library recommended)
- Implement hover effects for visual feedback
- Ensure color contrast for accessibility

---

#### Story 7.2: Footer Metadata
**As a** site visitor at the bottom of the page  
**I want** to see relevant footer information  
**So that** I understand site currency and ownership

**Acceptance Criteria:**
- [ ] Copyright notice: "© 2025 Ragib Smajic. All rights reserved."
- [ ] Optional: "Built with Next.js" or similar attribution
- [ ] Footer is visually distinct from main content (background color change)

**Technical Notes:**
- Use current year dynamically in copyright (JavaScript Date)
- Keep footer minimal and uncluttered

---

### Epic 8: SEO & Performance

#### Story 8.1: Search Engine Optimization
**As a** recruiter searching for "Ragib Smajic" or "Senior Software Engineer"  
**I want** to find the portfolio in search results with clear information  
**So that** I can access the site and evaluate the candidate

**Acceptance Criteria:**
- [ ] All pages have unique, descriptive `<title>` tags (≤60 characters)
- [ ] All pages have meta descriptions (≤160 characters)
- [ ] Open Graph tags implemented for social sharing (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags implemented
- [ ] Favicon and apple-touch-icon present
- [ ] Canonical URLs set correctly
- [ ] Structured data (JSON-LD) for Person and ProfilePage schemas
- [ ] Sitemap.xml generated and submitted to search engines
- [ ] Robots.txt configured appropriately

**Technical Notes:**
- Use Next.js Metadata API (app router) for all meta tags
- Generate sitemap.xml automatically at build time
- Implement Person schema with name, jobTitle, url, sameAs (social links)

---

#### Story 8.2: Performance Optimization
**As a** mobile user on slower connection  
**I want** the portfolio to load quickly  
**So that** I can access information without frustration

**Acceptance Criteria:**
- [ ] Lighthouse Performance score ≥90 (mobile and desktop)
- [ ] First Contentful Paint (FCP) <1.5 seconds
- [ ] Largest Contentful Paint (LCP) <2.5 seconds
- [ ] Cumulative Layout Shift (CLS) <0.1
- [ ] Time to Interactive (TTI) <3.5 seconds
- [ ] All images optimized and lazy-loaded where appropriate
- [ ] Minimal JavaScript bundle size (code splitting implemented)
- [ ] Static generation (SSG) used for all MVP pages

**Technical Notes:**
- Use Next.js Image component exclusively for images
- Implement font optimization (next/font)
- Enable compression on hosting platform
- Use Vercel Analytics to monitor real-world performance

---

#### Story 8.3: Analytics & Monitoring
**As a** site owner (Ragib)  
**I want** to understand visitor behavior and traffic sources  
**So that** I can optimize the portfolio and track ROI of outreach efforts

**Acceptance Criteria:**
- [ ] Vercel Analytics integrated (privacy-friendly, no cookies)
- [ ] Page view tracking enabled
- [ ] Basic visitor metrics visible: Page views, Unique visitors, Top pages, Traffic sources
- [ ] Analytics respect user privacy (GDPR-compliant, no personal data collection)

**Technical Notes:**
- Use Vercel Analytics (free tier, built-in to Vercel hosting)
- No additional analytics library needed for MVP
- Consider Google Analytics later if more detailed tracking needed

---

## Non-Functional Requirements

### Design & User Experience
- **Design System:** Minimalist, modern aesthetic with gray/dark color palette (primary), accent colors for logos and CTAs
- **Typography:** Clean, readable sans-serif font (e.g., Inter, Geist, or system fonts)
- **Responsive Design:** Mobile-first approach, breakpoints at 640px, 768px, 1024px, 1280px
- **Animations:** Subtle, purposeful (fade-ins, hover effects), total duration ≤300ms, respect prefers-reduced-motion
- **Whitespace:** Generous spacing for clarity and breathing room
- **Accessibility:** WCAG 2.1 AA compliance minimum (color contrast ≥4.5:1, keyboard navigation, semantic HTML, ARIA labels)

### Technical Requirements
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Rendering:** Static Site Generation (SSG) for all MVP pages
- **Content Management:** JSON files with TypeScript interfaces for type safety
- **Image Optimization:** Next.js Image component with WebP/AVIF formats
- **Version Control:** Git, hosted on GitHub
- **CI/CD:** GitHub Actions (automatic deployment on push to main)

### Hosting & Infrastructure
- **Primary Host:** Vercel (free tier)
- **Domain:** ragibsmajic.com (purchased via Cloudflare)
- **DNS:** Cloudflare
- **SSL/TLS:** Automatic HTTPS via Vercel
- **CDN:** Global CDN via Vercel Edge Network
- **Cost:** $0/month (excluding domain ~$10/year)

### Browser Support
- **Desktop:** Latest 2 versions of Chrome, Firefox, Safari, Edge
- **Mobile:** iOS Safari 14+, Chrome Android 90+
- **No IE11 support required**

---

## Success Metrics

### Launch Goals (First 3 Months)
- **Performance:** Lighthouse score ≥90 on all metrics
- **SEO:** Indexed by Google within 1 week, ranking on page 1 for "Ragib Smajic"
- **Uptime:** 99.9% availability
- **Load Time:** Average FCP <1.5s across all visitors

### Engagement Goals (Qualitative)
- Portfolio successfully communicates value to 90%+ of reviewers (anecdotal feedback)
- Recruiters can find contact information within 10 seconds
- Technical peers find project details sufficiently detailed (feedback-based)

---

## Out of Scope (MVP)

The following features are **explicitly excluded** from MVP and planned for future iterations:

- ❌ Blog functionality (dynamic content)
- ❌ Contact form (using email/social links instead)
- ❌ Dark/Light mode toggle
- ❌ PDF resume download
- ❌ Testimonials or recommendations section
- ❌ Case study deep-dives (separate pages per project)
- ❌ Multi-language support (English only)
- ❌ Comments or interaction features
- ❌ Advanced analytics (GA4, heatmaps, etc.)
- ❌ CMS integration (using JSON files for MVP)
- ❌ Newsletter signup
- ❌ Project filtering/search functionality

---

## Future Considerations

### Phase 2: Content Expansion (3-6 Months Post-Launch)
- **Blog/Articles:** Dynamic blog functionality with MDX support, pagination, categories/tags, reading time estimates
- **Case Studies:** Dedicated pages for selected projects with deeper technical dive, architecture diagrams, code samples, lessons learned
- **Resume Download:** PDF generation or downloadable resume link

### Phase 3: Interactivity (6-12 Months Post-Launch)
- **Contact Form:** Custom form with spam protection (Turnstile, hCaptcha)
- **Dark/Light Mode:** Theme toggle with user preference persistence
- **Testimonials:** Section for client/colleague recommendations
- **Project Filtering:** Filter projects by technology, domain, or year

### Phase 4: Advanced Features (12+ Months)
- **CMS Integration:** Headless CMS (Sanity, Contentful, or Strapi) for easier content updates
- **Search Functionality:** Full-text search across all content
- **Newsletter:** Email subscription for blog updates (Buttondown, ConvertKit)
- **Multilingual:** Support for Bosnian/Serbian/Croatian if targeting local market

### Technical Debt & Improvements
- **Testing:** Unit tests (Jest, React Testing Library), E2E tests (Playwright)
- **Monitoring:** Error tracking (Sentry), performance monitoring (Vercel Speed Insights)
- **Optimization:** Further bundle size reduction, advanced caching strategies
- **Accessibility:** AAA compliance, screen reader testing

---

## Appendix

### Related Documents
- [Technical Architecture](./technical-architecture.md)
- [Design System](./design-system.md)
- [Content Structure](./content-structure.md)
- [SEO Strategy](./seo-strategy.md)

### References
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

**Document Status:** Ready for Implementation  
**Next Steps:** Review with stakeholder (Ragib), then proceed to technical architecture and design system definition.