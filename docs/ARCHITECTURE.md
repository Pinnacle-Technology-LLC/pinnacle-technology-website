# Architecture Documentation

## Overview

The Pinnacle Technologies website is built using a modern JAMstack architecture with Next.js 15, emphasizing performance, type safety, and developer experience.

## Technology Decisions

### Next.js 15 with App Router

**Why:**
- Server Components by default reduce client-side JavaScript
- Built-in performance optimizations
- Type-safe routing with TypeScript
- Excellent developer experience

**Key Features Used:**
- App Router for file-based routing
- Server Components for static content
- Client Components only where interactivity is needed
- Static Site Generation (SSG) for all pages
- `generateStaticParams` for dynamic routes

### TypeScript (Strict Mode)

**Why:**
- Catch errors at compile time
- Better IDE support
- Self-documenting code through types
- Improved refactoring confidence

**Configuration:**
- Strict mode enabled
- No implicit any
- Path aliases (`@/*` maps to `src/*`)

### Tailwind CSS v4

**Why:**
- Utility-first approach speeds development
- CSS-first configuration with `@theme` directive
- Design tokens become CSS variables automatically
- Better tree-shaking and performance

**Design System:**
- Custom color palette defined in `globals.css`
- Consistent spacing and sizing tokens
- Responsive breakpoints
- Accessibility support (reduced motion, focus states)

### MDX for Content

**Decision:** Use `@next/mdx` instead of Contentlayer

**Rationale:**
- Contentlayer doesn't support Next.js 15
- `@next/mdx` is official and well-maintained
- Combined with `gray-matter` + Zod gives same benefits
- Simpler dependency tree

**Implementation:**
- MDX files in `content/` directory
- Frontmatter parsed with `gray-matter`
- Type-safe validation with Zod schemas
- Custom MDX components for consistent styling

### Zod for Validation

**Why:**
- Type-safe schema validation
- Runtime validation of frontmatter
- Excellent TypeScript integration
- Clear error messages

**Used For:**
- Case study frontmatter validation
- Contact form validation
- Ensuring data consistency

## System Architecture

### Rendering Strategy

```
┌─────────────────────────────────────────┐
│   Static Site Generation (SSG)          │
├─────────────────────────────────────────┤
│  All pages pre-rendered at build time   │
│  - Homepage                             │
│  - About                                │
│  - Services                             │
│  - Contact                              │
│  - Work overview                        │
│  - Case study pages (dynamic)           │
└─────────────────────────────────────────┘
```

**Benefits:**
- Fastest possible page loads
- No server-side rendering overhead
- Can be deployed to CDN
- Excellent SEO

### Component Architecture

```
┌─────────────────────────────────────────┐
│   Server Components (Default)           │
│   - Layout components                   │
│   - Static content sections             │
│   - SEO components                      │
└─────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│   Client Components ('use client')      │
│   - Interactive UI (particles, modals)  │
│   - Animations (scroll reveal, counter) │
│   - Form handling                       │
└─────────────────────────────────────────┘
```

**Principle:** "Push 'use client' as deep as possible"

### Data Flow

```
Content (MDX files)
    │
    ▼
Parsed by gray-matter
    │
    ▼
Validated by Zod schemas
    │
    ▼
Type-safe data structure
    │
    ▼
Server Component
    │
    ▼
Rendered as HTML
```

## Directory Structure

### `/src/app` - Application Routes

Uses Next.js App Router file-system routing:

- `layout.tsx` - Root layout (wraps all pages)
- `page.tsx` - Route page component
- `loading.tsx` - Loading UI
- `error.tsx` - Error UI

### `/src/components` - React Components

Organized by purpose:

```
components/
├── home/       # Homepage-specific sections
├── layout/     # Header, Footer, Container
├── seo/        # SEO and structured data
└── ui/         # Reusable UI components
```

**Convention:** One component per file, export from `index.ts`

### `/src/lib` - Utilities and Logic

Business logic separated from UI:

```
lib/
├── content/      # MDX parsing and schemas
├── data/         # Static data (services, features)
└── validation/   # Zod schemas
```

### `/content` - MDX Content Files

Markdown content with frontmatter:

```
content/
└── case-studies/
    ├── eu-cohesion.mdx
    ├── hhs-scaling.mdx
    └── ...
```

## Design Patterns

### Server Components First

```typescript
// Default: Server Component (no 'use client')
export default function Page() {
  // Can fetch data, access filesystem, etc.
  return <ServerRenderedContent />
}
```

### Client Components for Interactivity

```typescript
'use client'

// Only use when you need:
// - useState, useEffect
// - Event handlers
// - Browser APIs
export function InteractiveComponent() {
  const [state, setState] = useState()
  return <button onClick={...}>...</button>
}
```

### Type-Safe Content

```typescript
// 1. Define Zod schema
const Schema = z.object({
  title: z.string(),
  date: z.string(),
})

// 2. Infer TypeScript type
type Data = z.infer<typeof Schema>

// 3. Validate at runtime
const validated = Schema.parse(data)
```

### Component Composition

```typescript
// Small, focused components
export function Card({ children }) {
  return <div className="card">{children}</div>
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>
}

// Compose together
<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

## Performance Optimizations

### Bundle Size

**Target:** <200KB First Load JS
**Achieved:** ~105KB

**Strategies:**
- Server Components reduce client JS
- Tree-shaking removes unused code
- Dynamic imports for heavy components
- Tailwind purges unused CSS

### Images

All images use `next/image` for:
- Automatic optimization
- Lazy loading
- Responsive sizes
- WebP conversion

### Fonts

Using `next/font` for:
- Self-hosted fonts (no external requests)
- Font subsetting
- Automatic font optimization
- No layout shift (font-display: swap)

## Security Architecture

### Content Security Policy

Strict CSP headers defined in `next.config.ts`:

```typescript
{
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
}
```

### Input Validation

All user input validated with Zod:
- Contact form data
- URL parameters
- External data sources

### Type Safety

TypeScript strict mode catches potential security issues:
- No implicit any
- Strict null checks
- No unused locals

## Build Pipeline

```
1. TypeScript compilation (type checking)
2. ESLint (code quality)
3. Next.js build (SSG)
4. Bundle optimization
5. Asset optimization
```

**Build Time:** ~700-900ms (target: <2s)

## Accessibility Features

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Focus visible on all interactive elements
- Reduced motion support:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

## SEO Strategy

### Structured Data

JSON-LD schema markup for:
- Organization
- WebSite
- Article (case studies)
- BreadcrumbList

### Meta Tags

Generated with `generateSEOMeta` utility:
- Title
- Description
- OpenGraph tags
- Twitter card

### Sitemap

Auto-generated from routes (planned)

## Testing Strategy

### Unit Tests

Vitest + React Testing Library for:
- Business logic
- Utility functions
- Component behavior

### Type Safety

TypeScript acts as first line of defense:
- Compile-time checks
- IDE warnings
- Refactoring safety

## Future Considerations

### Analytics

- Plausible (cookieless) for privacy-focused analytics
- Event tracking for conversions

### Error Monitoring

- Sentry integration for error tracking
- Source maps for debugging

### Performance Monitoring

- Vercel Analytics for Core Web Vitals
- Real User Monitoring (RUM)

## Design Decisions Log

### Why not shadcn/ui?

- Building custom components for brand alignment
- Smaller bundle size
- More control over styling
- Can add shadcn later if needed

### Why Zod over other validators?

- Best TypeScript integration
- Runtime and compile-time safety
- Clear error messages
- Widely adopted

### Why tsParticles?

- Performant canvas-based animations
- Highly customizable
- Good TypeScript support
- Accessibility features (respects reduced-motion)

## Migration Notes

### From Contentlayer to @next/mdx

Contentlayer didn't support Next.js 15, so we migrated to:
- `@next/mdx` for MDX processing
- `gray-matter` for frontmatter parsing
- Custom utilities for content management

Benefits:
- Official Next.js plugin
- Simpler setup
- Better Next.js 15 compatibility
