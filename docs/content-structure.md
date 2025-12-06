# Content Structure
## Ragib Smajic Portfolio Website

---

### Document Information
- **Version:** 1.0.0
- **Last Updated:** December 6, 2025
- **Status:** Content Model Definition

---

## Table of Contents
1. [Content Management Approach](#content-management-approach)
2. [TypeScript Type Definitions](#typescript-type-definitions)
3. [Content Data Structure](#content-data-structure)
4. [Example Content Data](#example-content-data)
5. [Content Update Workflow](#content-update-workflow)
6. [Future CMS Migration](#future-cms-migration)

---

## Content Management Approach

### Strategy: TypeScript + JSON Hybrid

For MVP, content is managed through **TypeScript files** with strongly-typed interfaces. This approach provides:

✅ **Type Safety:** Catch content errors at compile time  
✅ **Version Control:** All content tracked in Git  
✅ **Zero Dependencies:** No external CMS or API calls  
✅ **Fast Builds:** No content fetching during build  
✅ **Easy Migration:** Simple to move to CMS later  
✅ **Developer-Friendly:** Full IDE autocomplete and validation  

### Content Organization

```
src/
├── types/                  # TypeScript interface definitions
│   ├── profile.ts          # Profile, social links, core values
│   ├── experience.ts       # Work experience interfaces
│   ├── education.ts        # Education interfaces
│   ├── language.ts         # Language proficiency interfaces
│   ├── technology.ts       # Technology/tool interfaces
│   └── project.ts          # Project showcase interfaces
│
└── content/                # Actual content data
    ├── profile.ts          # Personal information
    ├── experience.ts       # Work history data
    ├── education.ts        # Education data
    ├── languages.ts        # Languages spoken
    ├── technologies.ts     # Technologies list
    ├── projects.ts         # Projects showcase data
    └── metadata.ts         # SEO metadata configuration
```

---

## TypeScript Type Definitions

### 1. Profile Types

```typescript
// src/types/profile.ts

export interface Profile {
  name: string
  title: string
  tagline: string
  location?: string
  email: string
  social: SocialLinks
  coreValues: CoreValue[]
  avatar?: string // Optional profile photo URL
}

export interface SocialLinks {
  linkedin: string
  github: string
  twitter?: string
  medium?: string
  stackoverflow?: string
  dev?: string
  [key: string]: string | undefined // Allow additional social links
}

export interface CoreValue {
  id: string
  title: string
  description: string
  icon?: string // Optional: icon name or path
}
```

---

### 2. Experience Types

```typescript
// src/types/experience.ts

export interface Experience {
  id: string
  company: string
  companyUrl?: string
  roles: Role[]
  location?: string
  description?: string // Brief company description
  logo?: string // Company logo path
}

export interface Role {
  id: string
  title: string
  startDate: Date | string // ISO date string or Date object
  endDate: Date | string | 'present' // 'present' for current role
  duration?: string // Auto-calculated or manual (e.g., "2 years 3 months")
  responsibilities: string[]
  technologies?: string[] // Technologies used in this role
  highlights?: string[] // Key achievements
}

// Helper type for duration calculation
export type DateRange = {
  start: Date
  end: Date | 'present'
}
```

---

### 3. Education Types

```typescript
// src/types/education.ts

export interface Education {
  id: string
  institution: string
  institutionUrl?: string
  degree: string
  fieldOfStudy: string
  startDate: Date | string
  endDate: Date | string
  gpa?: string | number
  honors?: string[]
  relevantCoursework?: string[]
  description?: string
  logo?: string
}
```

---

### 4. Language Types

```typescript
// src/types/language.ts

export interface Language {
  id: string
  name: string
  nativeName?: string // e.g., "Bosanski" for Bosnian
  proficiency: LanguageProficiency
  flag?: string // Path to flag icon (optional)
}

export enum LanguageProficiency {
  Native = 'native',
  Fluent = 'fluent',
  Professional = 'professional', // Full professional proficiency
  Intermediate = 'intermediate',
  Basic = 'basic',
}

// Display labels for proficiency levels
export const ProficiencyLabels: Record<LanguageProficiency, string> = {
  [LanguageProficiency.Native]: 'Native',
  [LanguageProficiency.Fluent]: 'Fluent',
  [LanguageProficiency.Professional]: 'Full Professional Proficiency',
  [LanguageProficiency.Intermediate]: 'Intermediate',
  [LanguageProficiency.Basic]: 'Basic',
}
```

---

### 5. Technology Types

```typescript
// src/types/technology.ts

export interface Technology {
  id: string
  name: string
  category: TechnologyCategory
  logo?: string // Path to logo image (SVG preferred)
  url?: string // Official website or documentation URL
  yearsOfExperience?: number
  proficiency?: ProficiencyLevel
}

export enum TechnologyCategory {
  Language = 'language',
  Framework = 'framework',
  CloudProvider = 'cloud',
  Database = 'database',
  Tool = 'tool',
  Other = 'other',
}

export enum ProficiencyLevel {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
  Expert = 'expert',
}

// For grouping technologies by category in UI
export interface TechnologyGroup {
  category: TechnologyCategory
  displayName: string
  technologies: Technology[]
}
```

---

### 6. Project Types

```typescript
// src/types/project.ts

export interface Project {
  id: string
  name: string
  tagline: string // Brief one-liner
  description: string // Longer description
  challenge: string // Problem/challenge section (2-3 sentences)
  solution: string // Solution approach (2-4 sentences)
  outcome?: string // Results/impact (optional)
  technologies: string[] // Technology IDs or names
  startDate?: Date | string
  endDate?: Date | string
  duration?: string // e.g., "6 months"
  images?: ProjectImage[]
  links?: ProjectLink[]
  featured?: boolean // Highlight featured projects
  order?: number // Display order
}

export interface ProjectImage {
  id: string
  url: string
  alt: string
  caption?: string
  type: 'screenshot' | 'diagram' | 'logo' | 'other'
}

export interface ProjectLink {
  type: 'live' | 'github' | 'demo' | 'case-study' | 'other'
  label: string
  url: string
}
```

---

### 7. Metadata Types (SEO)

```typescript
// src/types/metadata.ts

export interface SiteMetadata {
  title: string
  description: string
  keywords: string[]
  url: string
  ogImage: string
  twitterHandle?: string
  author: string
}
```

---

## Content Data Structure

### 1. Profile Content

```typescript
// src/content/profile.ts
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
    // Add more social links as needed
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

---

### 2. Experience Content

```typescript
// src/content/experience.ts
import { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    id: 'company-2',
    company: 'Current Company Name',
    companyUrl: 'https://company.com',
    location: 'Remote / Bosnia and Herzegovina',
    roles: [
      {
        id: 'role-2-1',
        title: 'Senior Software Engineer',
        startDate: '2020-01-01',
        endDate: 'present',
        responsibilities: [
          'Led technical architecture and implementation of mission-critical microservices handling 1M+ requests/day',
          'Mentored team of 5 junior engineers, improving code quality and delivery velocity by 40%',
          'Drove adoption of modern DevOps practices, reducing deployment time from hours to minutes',
          'Collaborated with product and design teams to deliver user-centric features',
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'],
        highlights: [
          'Reduced API response time by 60% through optimization and caching strategies',
          'Successfully migrated legacy monolith to microservices architecture with zero downtime',
        ],
      },
      {
        id: 'role-2-2',
        title: 'Tech Lead',
        startDate: '2021-06-01',
        endDate: '2023-12-01',
        responsibilities: [
          'Led cross-functional team of 8 engineers and designers for key product initiatives',
          'Established technical standards, code review practices, and CI/CD pipelines',
          'Drove architectural decisions for scalability and maintainability',
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Terraform'],
      },
    ],
  },
  {
    id: 'company-1',
    company: 'Previous Company Name',
    companyUrl: 'https://previouscompany.com',
    location: 'City, Country',
    roles: [
      {
        id: 'role-1-1',
        title: 'Software Engineer',
        startDate: '2017-03-01',
        endDate: '2019-12-31',
        responsibilities: [
          'Developed and maintained full-stack web applications for enterprise clients',
          'Implemented RESTful APIs and responsive front-end interfaces',
          'Collaborated with QA team to ensure high-quality deliverables',
        ],
        technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
        highlights: [
          'Delivered 10+ client projects on time and within budget',
          'Received "Outstanding Contributor" award for exceptional performance',
        ],
      },
      {
        id: 'role-1-2',
        title: 'Project Tech Authority',
        startDate: '2019-01-01',
        endDate: '2019-12-31',
        responsibilities: [
          'Served as technical authority for multiple concurrent projects',
          'Conducted technical reviews and provided guidance to development teams',
          'Ensured alignment with architectural standards and best practices',
        ],
        technologies: ['React', 'Node.js', 'AWS', 'Docker'],
      },
    ],
  },
]

// Helper to calculate total years of experience
export function getTotalExperience(): number {
  const startDate = new Date('2017-03-01')
  const endDate = new Date()
  const years = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
  return Math.floor(years)
}
```

---

### 3. Education Content

```typescript
// src/content/education.ts
import { Education } from '@/types/education'

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'University Name',
    institutionUrl: 'https://university.edu',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    startDate: '2013-09-01',
    endDate: '2017-06-01',
    gpa: '3.8', // Optional
    honors: ['Dean\'s List (4 semesters)', 'Summa Cum Laude'], // Optional
    relevantCoursework: [
      'Data Structures and Algorithms',
      'Software Engineering',
      'Database Systems',
      'Computer Networks',
    ], // Optional
    description: 'Focused on software engineering, algorithms, and distributed systems.', // Optional
  },
]
```

---

### 4. Languages Content

```typescript
// src/content/languages.ts
import { Language, LanguageProficiency } from '@/types/language'

export const languages: Language[] = [
  {
    id: 'bosnian',
    name: 'Bosnian',
    nativeName: 'Bosanski',
    proficiency: LanguageProficiency.Native,
    flag: '/images/flags/ba.svg', // Optional: Bosnia and Herzegovina flag
  },
  {
    id: 'english',
    name: 'English',
    proficiency: LanguageProficiency.Professional,
    flag: '/images/flags/us.svg', // Optional: US/UK flag
  },
]
```

---

### 5. Technologies Content

```typescript
// src/content/technologies.ts
import { Technology, TechnologyCategory, ProficiencyLevel } from '@/types/technology'

export const technologies: Technology[] = [
  // Languages
  {
    id: 'typescript',
    name: 'TypeScript',
    category: TechnologyCategory.Language,
    logo: '/images/technologies/typescript.svg',
    url: 'https://www.typescriptlang.org',
    yearsOfExperience: 5,
    proficiency: ProficiencyLevel.Expert,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: TechnologyCategory.Language,
    logo: '/images/technologies/javascript.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    yearsOfExperience: 8,
    proficiency: ProficiencyLevel.Expert,
  },
  {
    id: 'python',
    name: 'Python',
    category: TechnologyCategory.Language,
    logo: '/images/technologies/python.svg',
    url: 'https://www.python.org',
    yearsOfExperience: 4,
    proficiency: ProficiencyLevel.Advanced,
  },

  // Frameworks
  {
    id: 'react',
    name: 'React',
    category: TechnologyCategory.Framework,
    logo: '/images/technologies/react.svg',
    url: 'https://react.dev',
    yearsOfExperience: 6,
    proficiency: ProficiencyLevel.Expert,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: TechnologyCategory.Framework,
    logo: '/images/technologies/nextjs.svg',
    url: 'https://nextjs.org',
    yearsOfExperience: 3,
    proficiency: ProficiencyLevel.Advanced,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: TechnologyCategory.Framework,
    logo: '/images/technologies/nodejs.svg',
    url: 'https://nodejs.org',
    yearsOfExperience: 7,
    proficiency: ProficiencyLevel.Expert,
  },

  // Cloud Providers
  {
    id: 'aws',
    name: 'AWS',
    category: TechnologyCategory.CloudProvider,
    logo: '/images/technologies/aws.svg',
    url: 'https://aws.amazon.com',
    yearsOfExperience: 5,
    proficiency: ProficiencyLevel.Advanced,
  },
  {
    id: 'azure',
    name: 'Azure',
    category: TechnologyCategory.CloudProvider,
    logo: '/images/technologies/azure.svg',
    url: 'https://azure.microsoft.com',
    yearsOfExperience: 3,
    proficiency: ProficiencyLevel.Intermediate,
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: TechnologyCategory.Database,
    logo: '/images/technologies/postgresql.svg',
    url: 'https://www.postgresql.org',
    yearsOfExperience: 6,
    proficiency: ProficiencyLevel.Advanced,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: TechnologyCategory.Database,
    logo: '/images/technologies/mongodb.svg',
    url: 'https://www.mongodb.com',
    yearsOfExperience: 5,
    proficiency: ProficiencyLevel.Advanced,
  },

  // Tools
  {
    id: 'docker',
    name: 'Docker',
    category: TechnologyCategory.Tool,
    logo: '/images/technologies/docker.svg',
    url: 'https://www.docker.com',
    yearsOfExperience: 5,
    proficiency: ProficiencyLevel.Advanced,
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: TechnologyCategory.Tool,
    logo: '/images/technologies/kubernetes.svg',
    url: 'https://kubernetes.io',
    yearsOfExperience: 3,
    proficiency: ProficiencyLevel.Intermediate,
  },
  {
    id: 'git',
    name: 'Git',
    category: TechnologyCategory.Tool,
    logo: '/images/technologies/git.svg',
    url: 'https://git-scm.com',
    yearsOfExperience: 8,
    proficiency: ProficiencyLevel.Expert,
  },

  // Add more technologies as needed (target: 10-15 total)
]

// Helper function to group technologies by category
export function getTechnologiesByCategory() {
  const grouped = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<TechnologyCategory, Technology[]>)

  return Object.entries(grouped).map(([category, techs]) => ({
    category: category as TechnologyCategory,
    displayName: getCategoryDisplayName(category as TechnologyCategory),
    technologies: techs,
  }))
}

function getCategoryDisplayName(category: TechnologyCategory): string {
  const names: Record<TechnologyCategory, string> = {
    [TechnologyCategory.Language]: 'Languages',
    [TechnologyCategory.Framework]: 'Frameworks & Libraries',
    [TechnologyCategory.CloudProvider]: 'Cloud Providers',
    [TechnologyCategory.Database]: 'Databases',
    [TechnologyCategory.Tool]: 'Tools & DevOps',
    [TechnologyCategory.Other]: 'Other',
  }
  return names[category]
}
```

---

### 6. Projects Content

```typescript
// src/content/projects.ts
import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'E-Commerce Platform Redesign',
    tagline: 'Scalable microservices architecture for high-traffic retail platform',
    description: 
      'Led the complete architectural redesign of a legacy e-commerce platform, migrating from a monolithic application to a modern microservices architecture.',
    challenge: 
      'The existing monolithic application struggled with scalability, frequent downtime during peak traffic, and slow feature deployment cycles. The system needed to handle 10x traffic growth while maintaining 99.9% uptime.',
    solution: 
      'Designed and implemented a microservices architecture using Node.js, Docker, and Kubernetes. Implemented event-driven communication via Kafka, introduced Redis caching for frequently accessed data, and migrated the database to a sharded PostgreSQL cluster. Established CI/CD pipelines for zero-downtime deployments.',
    outcome: 
      'Reduced API response times by 70%, achieved 99.95% uptime during Black Friday peak traffic (5M concurrent users), and decreased deployment time from 2 hours to 15 minutes. System now handles 10x original capacity with room to scale further.',
    technologies: ['Node.js', 'React', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis', 'Kafka', 'AWS'],
    duration: '8 months',
    startDate: '2023-01-01',
    endDate: '2023-08-31',
    featured: true,
    order: 1,
    images: [
      {
        id: 'img-1',
        url: '/images/projects/ecommerce-architecture.png',
        alt: 'Microservices architecture diagram',
        type: 'diagram',
        caption: 'High-level system architecture',
      },
    ],
    links: [
      {
        type: 'case-study',
        label: 'Read Case Study',
        url: '#', // Placeholder for future case study link
      },
    ],
  },
  {
    id: 'project-2',
    name: 'Real-Time Analytics Dashboard',
    tagline: 'High-performance dashboard for processing millions of events per day',
    description: 
      'Built a real-time analytics dashboard for monitoring business metrics across multiple data sources.',
    challenge: 
      'Marketing and operations teams needed real-time visibility into user behavior, conversion funnels, and system performance. Existing reporting tools had 24-hour data lag and couldn't handle complex queries.',
    solution: 
      'Developed a real-time data pipeline using AWS Kinesis for event ingestion, Lambda for stream processing, and DynamoDB for low-latency storage. Built a React-based dashboard with WebSocket connections for live updates. Implemented custom aggregation algorithms to pre-compute metrics.',
    outcome: 
      'Delivered real-time insights with <500ms latency, processing 5M+ events/day. Enabled data-driven decision making that increased conversion rate by 18% within first quarter.',
    technologies: ['React', 'TypeScript', 'AWS Kinesis', 'AWS Lambda', 'DynamoDB', 'WebSocket', 'D3.js'],
    duration: '5 months',
    startDate: '2022-06-01',
    endDate: '2022-10-31',
    featured: true,
    order: 2,
  },
  {
    id: 'project-3',
    name: 'CI/CD Pipeline Automation',
    tagline: 'Streamlined deployment process reducing release time by 80%',
    description: 
      'Automated the entire deployment pipeline for a multi-service application, eliminating manual steps and reducing human error.',
    challenge: 
      'Manual deployment processes were error-prone, time-consuming (2+ hours per release), and required dedicated DevOps personnel for each deployment. This bottleneck limited release frequency to once per week.',
    solution: 
      'Implemented end-to-end CI/CD using GitHub Actions, Terraform for infrastructure as code, and Docker for consistent environments. Added automated testing (unit, integration, e2e), security scanning, and canary deployments. Created self-service deployment dashboard for developers.',
    outcome: 
      'Reduced deployment time from 2 hours to 15 minutes. Increased release frequency from weekly to multiple times daily. Zero rollbacks due to improved automated testing and canary deployments.',
    technologies: ['GitHub Actions', 'Docker', 'Terraform', 'AWS', 'Kubernetes', 'Jest', 'Cypress'],
    duration: '4 months',
    startDate: '2021-09-01',
    endDate: '2021-12-31',
    featured: true,
    order: 3,
  },
  {
    id: 'project-4',
    name: 'Mobile-First Progressive Web App',
    tagline: 'Cross-platform PWA delivering native-like experience',
    description: 
      'Developed a Progressive Web App to replace separate iOS and Android applications, reducing maintenance overhead.',
    challenge: 
      'Maintaining separate native apps for iOS and Android required duplicate effort and led to feature parity issues. Users on older devices experienced poor performance.',
    solution: 
      'Built a Next.js-based PWA with service workers for offline functionality, optimized for mobile-first performance. Implemented lazy loading, code splitting, and aggressive caching strategies. Used responsive design to support all screen sizes.',
    outcome: 
      'Achieved 95+ Lighthouse score across all metrics. Reduced codebase by 60% (consolidating two native apps into one PWA). User engagement increased 25% due to improved performance on low-end devices.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Service Workers', 'Tailwind CSS', 'PWA'],
    duration: '6 months',
    startDate: '2022-01-01',
    endDate: '2022-06-30',
    order: 4,
  },
  {
    id: 'project-5',
    name: 'API Gateway & Rate Limiting System',
    tagline: 'Centralized API management with intelligent rate limiting',
    description: 
      'Designed and implemented a custom API gateway to manage traffic, enforce rate limits, and provide unified authentication.',
    challenge: 
      'Multiple microservices exposed public APIs without consistent authentication, rate limiting, or monitoring. System was vulnerable to abuse and DDoS attacks.',
    solution: 
      'Built a custom API gateway using Node.js and Express, implementing token bucket algorithm for rate limiting, JWT authentication, request/response logging, and circuit breaker pattern for fault tolerance. Deployed on AWS with auto-scaling.',
    outcome: 
      'Successfully blocked 10K+ malicious requests per day. Reduced unauthorized API access to zero. Improved API observability with centralized logging and metrics.',
    technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'AWS', 'Grafana', 'Prometheus'],
    duration: '3 months',
    startDate: '2020-03-01',
    endDate: '2020-05-31',
    order: 5,
  },
]

// Helper to get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured).sort((a, b) => (a.order || 999) - (b.order || 999))
}

// Helper to get projects sorted by date (most recent first)
export function getProjectsByDate(): Project[] {
  return [...projects].sort((a, b) => {
    const dateA = a.startDate ? new Date(a.startDate).getTime() : 0
    const dateB = b.startDate ? new Date(b.startDate).getTime() : 0
    return dateB - dateA
  })
}
```

---

### 7. Metadata Content

```typescript
// src/content/metadata.ts
import { SiteMetadata } from '@/types/metadata'

export const siteMetadata: SiteMetadata = {
  title: 'Ragib Smajic - Senior Software Engineer | Full-Stack Developer',
  description: 
    'Portfolio of Ragib Smajic, Senior Software Engineer with 8 years of experience building scalable web applications. Specializing in React, Node.js, AWS, and cloud architecture.',
  keywords: [
    'Ragib Smajic',
    'Senior Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Node.js Developer',
    'AWS Cloud Engineer',
    'Software Engineer Portfolio',
    'Tech Lead',
    'TypeScript Developer',
  ],
  url: 'https://ragibsmajic.com',
  ogImage: 'https://ragibsmajic.com/og-image.png',
  twitterHandle: '@ragibsmajic', // Optional, if Twitter/X account exists
  author: 'Ragib Smajic',
}
```

---

## Example Content Data

### Complete Example: Using Content in Components

```tsx
// src/components/sections/Hero.tsx
import { profile } from '@/content/profile'

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-text-primary mb-4">
          {profile.name}
        </h1>
        <h2 className="text-2xl text-text-secondary mb-6">
          {profile.title}
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          {profile.tagline}
        </p>
      </div>
    </section>
  )
}
```

```tsx
// src/components/sections/Languages.tsx
import { languages } from '@/content/languages'
import { ProficiencyLabels } from '@/types/language'

export default function Languages() {
  return (
    <section className="py-12 px-6" id="languages">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang) => (
            <div key={lang.id} className="flex items-center gap-4 p-4 border rounded-lg">
              {lang.flag && (
                <Image src={lang.flag} alt={`${lang.name} flag`} width={32} height={32} />
              )}
              <div>
                <h3 className="font-semibold text-lg">{lang.name}</h3>
                {lang.nativeName && (
                  <p className="text-sm text-gray-500">{lang.nativeName}</p>
                )}
                <p className="text-sm text-gray-600">
                  {ProficiencyLabels[lang.proficiency]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

```tsx
// src/components/sections/Technologies.tsx
import { technologies, getTechnologiesByCategory } from '@/content/technologies'
import Image from 'next/image'

export default function Technologies() {
  const grouped = getTechnologiesByCategory()

  return (
    <section className="py-20 px-6" id="technologies">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-text-primary mb-12 text-center">
          Technologies & Tools
        </h2>
        
        {grouped.map(group => (
          <div key={group.category} className="mb-12">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              {group.displayName}
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
              {group.technologies.map(tech => (
                <div key={tech.id} className="flex flex-col items-center gap-2">
                  {tech.logo && (
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  )}
                  <span className="text-sm text-text-secondary text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## Content Update Workflow

### Step-by-Step Guide to Update Content

#### 1. Update Profile Information

```bash
# Open profile content file
code src/content/profile.ts

# Modify fields as needed
export const profile: Profile = {
  name: 'Ragib Smajic',
  title: 'Updated Title', // <- Edit here
  tagline: 'Updated tagline...', // <- Edit here
  // ... rest of content
}

# Save file (Ctrl+S / Cmd+S)
```

#### 2. Add New Project

```typescript
// src/content/projects.ts

export const projects: Project[] = [
  // Add new project at the beginning of array (most recent first)
  {
    id: 'project-new',
    name: 'New Project Name',
    tagline: 'Brief description',
    description: 'Longer description...',
    challenge: 'What problem did you solve?',
    solution: 'How did you solve it?',
    outcome: 'What were the results?',
    technologies: ['React', 'Node.js'], // List of tech IDs or names
    duration: '4 months',
    featured: true, // Show on homepage
    order: 1, // Display order
  },
  // ... existing projects
]
```

#### 3. Add New Technology

```typescript
// src/content/technologies.ts

export const technologies: Technology[] = [
  // ... existing technologies
  {
    id: 'new-tech',
    name: 'New Technology',
    category: TechnologyCategory.Framework, // Choose appropriate category
    logo: '/images/technologies/new-tech.svg', // Add logo to public/images/technologies/
    url: 'https://new-tech.com',
    yearsOfExperience: 2,
    proficiency: ProficiencyLevel.Intermediate,
  },
]
```

#### 4. Update Experience (Add New Role)

```typescript
// src/content/experience.ts

export const experiences: Experience[] = [
  {
    id: 'company-1',
    company: 'Current Company',
    roles: [
      // Add new role at the beginning
      {
        id: 'role-new',
        title: 'New Role Title',
        startDate: '2024-01-01',
        endDate: 'present',
        responsibilities: [
          'Responsibility 1',
          'Responsibility 2',
        ],
        technologies: ['React', 'Node.js'],
      },
      // ... existing roles
    ],
  },
]
```

### 5. Testing Content Changes

```bash
# Run development server to preview changes
npm run dev

# Open http://localhost:3000 in browser
# Verify changes appear correctly
# Check for TypeScript errors in terminal

# Run type check
npm run type-check

# If all looks good, commit changes
git add src/content/
git commit -m "Update: Add new project / Update profile / etc."
git push origin main

# Vercel will automatically deploy changes
```

---

## Future CMS Migration

### When to Consider CMS Migration

Consider migrating to a headless CMS when:
- ✅ Content updates are frequent (weekly or more)
- ✅ Non-technical team members need to update content
- ✅ Blog or dynamic content is added (Phase 2+)
- ✅ Media management becomes cumbersome
- ✅ Multi-language support is needed

### Recommended CMS Options

| CMS | Pros | Cons | Cost |
|-----|------|------|------|
| **Sanity** | Excellent DX, real-time editing, flexible schema | Learning curve | Free tier available |
| **Contentful** | Mature, great UI, strong API | Pricing can scale up | Free tier available |
| **Strapi** | Open-source, self-hosted option, full control | Self-hosting complexity | Free (self-hosted) |
| **Notion API** | Already use Notion, simple setup | Limited customization | Free |
| **MDX (files)** | Simple, Git-based, no external service | Manual content management | Free |

### Migration Strategy (Future)

**Phase 1: Dual-Source (Transition Period)**
1. Set up CMS with same data structure
2. Migrate content to CMS
3. Update data fetching to use CMS API
4. Keep TypeScript types (still useful for type safety)
5. Test thoroughly before removing old content files

**Phase 2: CMS-Only**
1. Remove `/src/content` data files (keep types)
2. Update build process to fetch from CMS
3. Implement incremental static regeneration (ISR) if needed
4. Set up webhooks for auto-rebuild on content changes

**Example: Sanity Migration**
```typescript
// Future: src/lib/sanity.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
})

// Fetch projects from Sanity instead of local file
export async function getProjects(): Promise<Project[]> {
  return await client.fetch('*[_type == "project"] | order(startDate desc)')
}
```

**No changes needed to components** if data structure remains the same!

---

## Content Validation

### Type Safety Checklist

All content is validated at **compile time** thanks to TypeScript:

✅ **Required fields:** TypeScript ensures all required fields are present  
✅ **Correct types:** Strings, dates, arrays validated automatically  
✅ **Enum values:** TechnologyCategory, ProficiencyLevel validated  
✅ **Nested objects:** Profile.social, Project.images validated  

### Manual Validation Checklist

Before deploying content updates:

- [ ] All external URLs are valid (no 404s)
- [ ] Image paths exist in `/public` directory
- [ ] Dates are in correct format (ISO 8601: YYYY-MM-DD)
- [ ] Email address is correct (profile.email)
- [ ] Social links are correct (LinkedIn, GitHub, etc.)
- [ ] Technology logos exist in `/public/images/technologies/`
- [ ] Project images exist if referenced
- [ ] No typos or grammatical errors (use Grammarly or similar)
- [ ] Alt text for images is descriptive

### Linting Content (Optional Future Enhancement)

```typescript
// scripts/validate-content.ts
import { profile } from '@/content/profile'
import { experiences } from '@/content/experience'
import { projects } from '@/content/projects'

// Validate email format
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Validate URLs
function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Run validations
console.log('Validating content...')
console.assert(isValidEmail(profile.email), 'Invalid email address')
console.assert(isValidUrl(profile.social.linkedin), 'Invalid LinkedIn URL')
// Add more validations...
console.log('✅ Content validation passed')
```

---

## Content Backup & Version Control

### Git as Content Backup

✅ **All content is version-controlled** in Git  
✅ **Full history** of changes available via `git log`  
✅ **Easy rollback** to previous versions  
✅ **Branching** for testing content changes  

### Best Practices

```bash
# Create feature branch for major content updates
git checkout -b content/update-projects

# Make content changes
code src/content/projects.ts

# Commit with descriptive message
git add src/content/projects.ts
git commit -m "Add new project: E-Commerce Platform Redesign"

# Push and create PR for review (optional)
git push origin content/update-projects

# Merge to main after review
git checkout main
git merge content/update-projects
git push origin main
```

### Content Changelog (Optional)

Keep a changelog for major content updates:

```markdown
# Content Changelog

## 2025-12-15
- Added new project: E-Commerce Platform Redesign
- Updated current role end date to 'present'
- Added 3 new technologies: Kafka, Redis, Terraform

## 2025-12-06
- Initial content creation
- All sections populated with placeholder/example data
```

---

**Document Status:** Ready for Implementation  
**Next Steps:** Use these TypeScript types and content structures when building components. Replace example data with real information about Ragib Smajic.