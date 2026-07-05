# Ragib Smajic Portfolio

A modern, minimalist portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 16 (App Router) and TypeScript
- 🎨 Styled with Tailwind CSS 4
- 📱 Fully responsive design
- ⚡ Static Site Generation (SSG) for optimal performance
- 🔍 SEO optimized with structured data
- ✨ Interactive UI elements and animations
- 🧪 Vitest-based component and content rendering tests with coverage enforcement

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Deployment:** Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 24+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm ci

# Run development server
npm run dev

# Run tests locally
npm run test

# Run tests once and collect coverage
npm run test:coverage

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
└── types/           # TypeScript type definitions

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

## Testing

The project uses Vitest with React Testing Library for component and content-rendering tests.

- Tests live alongside the components they cover, for example [src/components/sections/About.test.tsx](src/components/sections/About.test.tsx)
- The suite validates that content from [src/content](src/content) is rendered correctly in the UI
- Coverage is collected with Vitest V8 and the workflow fails if global coverage drops below the configured threshold

Useful commands:

```bash
npm run test
npm run test:coverage
```

## Deployment

This project is configured for deployment on Cloudflare Pages. Push to the main branch to trigger automatic deployment.

## License

© 2026 Ragib Smajic. All rights reserved.
