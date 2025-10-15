# Pinnacle Technologies LLC - Website

Modern, performant website for Pinnacle Technologies LLC, built with Next.js 15, React 19, and Tailwind CSS v4.

## Overview

This is the official website showcasing Pinnacle Technologies' platform engineering services, case studies, and expertise in open data systems. The site emphasizes performance, accessibility, and modern web standards.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **React:** 19.0
- **TypeScript:** Strict mode enabled
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Content:** MDX with Zod validation
- **Testing:** Vitest + React Testing Library
- **Animation:** Framer Motion, tsParticles
- **Code Quality:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or your preferred package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd pinntech-homepage

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Production build (includes type-checking and linting)
npm run start        # Serve production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:ui      # Open Vitest UI
```

## Project Structure

```
pinntech-homepage/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Homepage
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── services/           # Services pages
│   │   └── work/               # Case studies
│   │       ├── page.tsx        # Work overview
│   │       └── [slug]/         # Dynamic case study pages
│   ├── components/
│   │   ├── home/               # Homepage sections
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   ├── seo/                # SEO and structured data
│   │   └── ui/                 # Reusable UI components
│   └── lib/
│       ├── content/            # MDX utilities and schemas
│       ├── data/               # Static data (services, features)
│       └── validation/         # Zod validation schemas
├── content/
│   └── case-studies/           # MDX case study files
├── public/                     # Static assets
└── docs/                       # Additional documentation
```

## Key Features

### Performance

- ✅ Static Site Generation (SSG) for all pages
- ✅ Optimized images with next/image
- ✅ Bundle size under 200KB (achieved: ~105KB)
- ✅ Build time under 2 seconds

### Accessibility

- ✅ Semantic HTML throughout
- ✅ ARIA labels where appropriate
- ✅ Keyboard navigation support
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Focus states on all interactive elements

### SEO

- ✅ JSON-LD structured data (Organization, WebSite)
- ✅ Meta tags with OpenGraph support
- ✅ Semantic HTML structure
- ✅ Type-safe routing

### Security

- ✅ Strict Content Security Policy (CSP)
- ✅ Security headers (X-Content-Type-Options, X-Frame-Options)
- ✅ Referrer Policy configured
- ✅ Permissions Policy set

## Content Management

### Case Studies

Case studies are written in MDX with type-safe frontmatter validation using Zod.

**Location:** `content/case-studies/*.mdx`

**Frontmatter Schema:**

```typescript
{
  title: string
  slug: string
  client?: string
  supportedVia?: string
  sector: string[]
  platforms: string[]
  services: string[]
  techStack?: string[]
  metrics?: Array<{ label: string, value: string | number }>
  outcomes: string[]
  confidentiality: 'public' | 'limited' | 'anonymized'
  logoPermission: boolean
  dates: { start?: string, end?: string }
  contentType: 'detailed' | 'summary'
}
```

### Adding a New Case Study

1. Create a new `.mdx` file in `content/case-studies/`
2. Add required frontmatter (see schema above)
3. Write content using MDX (supports all markdown features)
4. The page will be automatically generated at `/work/[slug]`

## Component Library

All components are fully typed, accessible, and tested. See [docs/COMPONENTS.md](docs/COMPONENTS.md) for detailed usage.

### UI Components

- **Button** - Primary, secondary, and ghost variants
- **Card** - Content container with hover effects
- **Badge** - Labels and tags
- **AnimatedCounter** - Animated number counter with reduced-motion support
- **ScrollReveal** - Scroll-triggered animations
- **ParticlesBackground** - Interactive particle background

### Layout Components

- **Header** - Site navigation
- **Footer** - Site footer with links
- **Container** - Max-width container for content

## Design System

### Colors

Design tokens are defined in `src/app/globals.css` using Tailwind v4's `@theme` directive:

- **Brand Navy:** Primary dark color
- **Brand Cyan:** Accent color for CTAs and highlights
- **Brand Cream:** Light background
- **Brand Warm:** Secondary accent

### Typography

- **Font:** Inter (variable font)
- **Weights:** 300, 400, 500, 600, 700, 800, 900

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Prefer Server Components by default
- Only use `'use client'` when necessary
- Keep functions small and focused
- Write tests for business logic

### Naming Conventions

- Components: PascalCase (`MyComponent.tsx`)
- Files: kebab-case (`my-utility.ts`)
- Functions: camelCase (`getUserData`)
- Constants: UPPER_SNAKE_CASE (`API_ENDPOINT`)

### Git Workflow

1. Create feature branch from master
2. Make changes and test locally
3. Run `npm run build` to ensure no errors
4. Commit with descriptive message
5. Create pull request

## Testing

Tests are written using Vitest and React Testing Library.

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests once (CI mode)
npm run test:run
```

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment instructions.

**Quick deploy to Vercel:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

Proprietary - Pinnacle Technologies LLC

## Contributing

Internal team only. See [CLAUDE.md](CLAUDE.md) for AI development guidelines.

## Support

For questions or issues, contact the development team.
