# Component Library Documentation

Complete guide to all components in the Pinnacle Technologies website.

## Table of Contents

- [UI Components](#ui-components)
  - [Button](#button)
  - [Card](#card)
  - [Badge](#badge)
  - [AnimatedCounter](#animatedcounter)
  - [ScrollReveal](#scrollreveal)
  - [ParticlesBackground](#particlesbackground)
- [Layout Components](#layout-components)
  - [Header](#header)
  - [Footer](#footer)
  - [Container](#container)
- [Home Components](#home-components)
  - [Hero](#hero)
  - [TrustBar](#trustbar)
  - [FeaturedWork](#featuredwork)
  - [Services](#services)
  - [WhyPinnacle](#whypinnacle)
  - [CTA](#cta)
- [SEO Components](#seo-components)
  - [StructuredData](#structureddata)
  - [generateSEOMeta](#generateseo meta)

---

## UI Components

### Button

A flexible button component with multiple variants and sizes.

**Location:** `src/components/ui/button.tsx`

**Props:**

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  // ... extends HTMLButtonElement props
}
```

**Usage:**

```tsx
import { Button } from '@/components/ui'

// Primary button (default)
<Button variant="primary">Click Me</Button>

// Secondary button
<Button variant="secondary" size="lg">
  Large Secondary
</Button>

// Ghost button (transparent)
<Button variant="ghost" size="sm">
  Small Ghost
</Button>
```

**Accessibility:**
- Full keyboard support
- Focus visible states
- Proper contrast ratios

---

### Card

Container component for displaying content with consistent styling.

**Location:** `src/components/ui/card.tsx`

**Components:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardContent` - Body content

**Props:**

```typescript
interface CardProps {
  hover?: boolean  // Enable hover effect
  className?: string
  children: React.ReactNode
}
```

**Usage:**

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui'

<Card hover>
  <CardHeader>
    <CardTitle>Case Study</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Description of the case study...</p>
  </CardContent>
</Card>
```

---

### Badge

Small label component for tags and status indicators.

**Location:** `src/components/ui/badge.tsx`

**Props:**

```typescript
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'success'
  className?: string
  children: React.ReactNode
}
```

**Usage:**

```tsx
import { Badge } from '@/components/ui'

<Badge variant="default">Platform</Badge>
<Badge variant="secondary">Socrata</Badge>
<Badge variant="success">Completed</Badge>
```

**Variants:**
- `default` - Gray background
- `secondary` - Cyan background
- `success` - Green background

---

### AnimatedCounter

Client-side counter that animates from one number to another when visible.

**Location:** `src/components/ui/animated-counter.tsx`

**Props:**

```typescript
interface AnimatedCounterProps {
  from: number         // Starting number
  to: number           // Ending number
  duration?: number    // Animation duration in ms (default: 2000)
  suffix?: string      // Text after number (e.g., '+', 'K')
  className?: string
}
```

**Usage:**

```tsx
import { AnimatedCounter } from '@/components/ui'

// Animates from 0 to 15,000 with '+' suffix
<AnimatedCounter from={0} to={15000} suffix="+" />

// Custom duration
<AnimatedCounter
  from={0}
  to={1000000}
  duration={3000}
  suffix="M"
/>
```

**Features:**
- Triggers when element enters viewport
- Respects `prefers-reduced-motion`
- Easing function (easeOutCubic)
- Number formatting with locale

---

### ScrollReveal

Wrapper component that animates children when they scroll into view.

**Location:** `src/components/ui/scroll-reveal.tsx`

**Props:**

```typescript
interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number      // Delay in seconds
  duration?: number   // Duration in seconds
  className?: string
}
```

**Usage:**

```tsx
import { ScrollReveal } from '@/components/ui'

// Fade in from bottom
<ScrollReveal direction="up">
  <h2>This fades in when scrolled into view</h2>
</ScrollReveal>

// With delay and custom duration
<ScrollReveal direction="left" delay={0.2} duration={0.8}>
  <div>Delayed animation</div>
</ScrollReveal>
```

**Features:**
- Uses Intersection Observer
- Animates only once per element
- Customizable direction and timing
- Respects `prefers-reduced-motion`

---

### ParticlesBackground

Interactive particle background using tsParticles.

**Location:** `src/components/ui/particles.tsx`

**Usage:**

```tsx
import { ParticlesBackground } from '@/components/ui'

// In layout or page
<ParticlesBackground />
```

**Features:**
- Canvas-based particle animation
- Interactive (responds to hover and click)
- Optimized for performance
- Fixed position (doesn't interfere with layout)

**Configuration:**
All settings defined in component:
- 100 particles
- Cyan color (#00BCD4)
- Grab on hover
- Push on click

---

## Layout Components

### Header

Site navigation header with responsive design.

**Location:** `src/components/layout/header.tsx`

**Usage:**

```tsx
import { Header } from '@/components/layout'

<Header />
```

**Features:**
- Sticky navigation
- Active link highlighting
- Responsive (mobile menu planned)
- Smooth scroll to sections
- Client-side component for interactivity

---

### Footer

Site footer with company info and links.

**Location:** `src/components/layout/footer.tsx`

**Usage:**

```tsx
import { Footer } from '@/components/layout'

<Footer />
```

**Includes:**
- Company information
- Navigation links
- Copyright notice
- Contact information

---

### Container

Max-width container for content sections.

**Location:** `src/components/layout/container.tsx`

**Props:**

```typescript
interface ContainerProps {
  className?: string
  children: React.ReactNode
}
```

**Usage:**

```tsx
import { Container } from '@/components/layout'

<Container>
  <h1>Content goes here</h1>
</Container>
```

**Features:**
- Max width: 1400px
- Responsive padding
- Centers content

---

## Home Components

### Hero

Homepage hero section with parallax background.

**Location:** `src/components/home/hero.tsx`

**Usage:**

```tsx
import { Hero } from '@/components/home'

<Hero />
```

**Features:**
- Large display typography
- Gradient background with topographic pattern
- Parallax scroll effect
- CTA buttons
- Scroll indicator

---

### TrustBar

Client logo showcase with interactive modal.

**Location:** `src/components/home/trust-bar.tsx`

**Usage:**

```tsx
import { TrustBar } from '@/components/home'

<TrustBar />
```

**Features:**
- Scrolling logo carousel
- Click to open organization details
- Modal with project information
- "Supported via Tyler" disclaimer

---

### FeaturedWork

Showcase of featured case studies with metrics.

**Location:** `src/components/home/featured-work.tsx`

**Usage:**

```tsx
import { FeaturedWork } from '@/components/home'

<FeaturedWork />
```

**Features:**
- Grid layout of project cards
- Animated metric counters
- Scroll reveal animations
- Links to full case studies

**Data Source:** `src/lib/data/featured-work.ts`

---

### Services

Grid of services offered.

**Location:** `src/components/home/services.tsx`

**Usage:**

```tsx
import { Services } from '@/components/home'

<Services />
```

**Features:**
- 6-column grid (responsive)
- Icon + title + description
- Hover effects
- Links to service pages

**Data Source:** `src/lib/data/services.tsx`

---

### WhyPinnacle

Differentiators and unique value propositions.

**Location:** `src/components/home/why-pinnacle.tsx`

**Usage:**

```tsx
import { WhyPinnacle } from '@/components/home'

<WhyPinnacle />
```

**Features:**
- 4 key differentiators
- Card layout with icons
- Scroll reveal animations

**Data Source:** `src/lib/data/why-pinnacle.ts`

---

### CTA

Call-to-action section.

**Location:** `src/components/home/cta.tsx`

**Usage:**

```tsx
import { CTA } from '@/components/home'

<CTA />
```

**Features:**
- Dark background
- Clear headline and description
- Primary CTA button

---

## SEO Components

### StructuredData

JSON-LD structured data for SEO.

**Location:** `src/components/seo/structured-data.tsx`

**Props:**

```typescript
interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'breadcrumb'
  data: Record<string, unknown>  // Additional data to merge
}
```

**Usage:**

```tsx
import { StructuredData } from '@/components/seo'

// In page or layout <head>
<StructuredData
  type="organization"
  data={{
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service'
    }
  }}
/>
```

**Types Supported:**
- `organization` - Company information
- `website` - Website metadata
- `article` - Blog posts, case studies
- `breadcrumb` - Navigation breadcrumbs

---

### generateSEOMeta

Utility function to generate Next.js metadata.

**Location:** `src/components/seo/seo-meta.tsx`

**Props:**

```typescript
interface SEOMetaProps {
  title: string
  description: string
  path?: string
  image?: string
}
```

**Usage:**

```tsx
import { generateSEOMeta } from '@/components/seo'

export const metadata = generateSEOMeta({
  title: 'About Us',
  description: 'Learn about Pinnacle Technologies',
  path: '/about'
})
```

**Generates:**
- Title tag
- Meta description
- OpenGraph tags
- Twitter card
- Canonical URL

---

## Component Development Guidelines

### Creating New Components

1. **Choose the right location:**
   - `/ui` - Reusable across site
   - `/home` - Homepage specific
   - `/layout` - Layout/structure
   - `/seo` - SEO/meta

2. **TypeScript types:**
   ```typescript
   interface MyComponentProps {
     required: string
     optional?: number
     className?: string
     children?: React.ReactNode
   }
   ```

3. **JSDoc comments:**
   ```typescript
   /**
    * Brief component description
    *
    * @example
    * ```tsx
    * <MyComponent required="value" />
    * ```
    */
   ```

4. **Export from index.ts:**
   ```typescript
   export { MyComponent } from './my-component'
   ```

### Testing Components

```typescript
import { render, screen } from '@testing-library/react'
import { MyComponent } from './my-component'

describe('MyComponent', () => {
  it('renders children', () => {
    render(<MyComponent>Hello</MyComponent>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

### Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation
- [ ] Focus visible states
- [ ] Color contrast (WCAG AA)
- [ ] Reduced motion support

### Performance Checklist

- [ ] Server Component by default
- [ ] 'use client' only when necessary
- [ ] Lazy load heavy components
- [ ] Optimize images
- [ ] Minimize prop drilling
