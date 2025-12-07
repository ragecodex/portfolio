# Ragib Smajic Portfolio

A modern, minimalist portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 16 (App Router) and TypeScript
- 🎨 Styled with Tailwind CSS 4
- 📱 Fully responsive design
- ⚡ Static Site Generation (SSG) for optimal performance
- 🔍 SEO optimized with structured data
- ♿ Accessible (WCAG 2.1 AA compliant)
- 🎯 Type-safe content management
- 🧭 Sticky navigation with smooth scrolling
- 🖼️ Professional background image with parallax effect
- ✨ Interactive UI elements and animations

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Deployment:** Cloudflare Pages (planned)
- **Content:** Type-safe TypeScript files

## Getting Started

### Prerequisites

- Node.js 24+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── layout/      # Layout components (Footer, Header)
│   └── sections/    # Page sections (Hero, Experience, etc.)
├── content/         # Content data (TypeScript files)
├── types/           # TypeScript type definitions
└── lib/             # Utility functions

public/              # Static assets
docs/                # Project documentation
```

## Content Management

Content is managed through TypeScript files in `src/content/`:
- `profile.ts` - Personal information and social links
- `experience.ts` - Work experience and roles
- `education.ts` - Educational background
- `languages.ts` - Language proficiency
- `technologies.ts` - Technical skills
- `projects.ts` - Featured projects

## Deployment

This project is configured for deployment on Cloudflare Pages. Push to the main branch to trigger automatic deployment.

## Performance

- Lighthouse Performance Score: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Static generation for instant page loads

## License

© 2025 Ragib Smajic. All rights reserved.
