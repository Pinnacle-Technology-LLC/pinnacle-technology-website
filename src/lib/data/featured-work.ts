/**
 * Featured work project data
 */

interface FeaturedMetric {
  label: string
  value: string | number
  isCounter: boolean
  suffix?: string
}

export interface FeaturedProject {
  title: string
  client: string
  description: string
  metrics: FeaturedMetric[]
  slug: string
  image: string
  color: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Universal Data Catalog',
    client: 'Federal & Public Sector',
    description:
      'Universal metadata infrastructure that connects and monitors datasets across platforms. Automatically harvests and enriches public data sources, enabling discovery and routing without data duplication — deployed for 15,000+ government and civic datasets.',
    metrics: [
      { label: 'Metadata records deployed', value: 15000, isCounter: true, suffix: '+' },
      { label: 'Multi-source capability', value: 'Gov, Research, Civic', isCounter: false },
    ],
    slug: 'universal-data-catalog',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    color: 'from-brand-cyan/80 to-brand-navy/90',
  },
  {
    title: 'EU Cohesion Open Data',
    client: 'European Commission',
    description:
      "Trusted long-term partner for the European Commission's transparency portal serving all 27 EU member states. Sole development team delivering zero priority incidents over 2+ years while maintaining billions in EU budget allocation data.",
    metrics: [
      { label: 'Platform Coverage', value: '27 EU States', isCounter: false },
      { label: 'Partnership Duration', value: '2+ Years', isCounter: false },
    ],
    slug: 'eu-cohesion',
    image:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2406&auto=format&fit=crop',
    color: 'from-brand-warm/80 to-brand-navy/90',
  },
  {
    title: 'Homepage CMS Modernization',
    client: 'Tyler Technologies',
    description:
      'Modern drag-and-drop CMS enabling non-technical teams to create accessible, responsive homepages. Custom component library and migration tooling reduced time-to-publish across 150+ homepages while ensuring design consistency and compliance.',
    metrics: [
      { label: 'Homepages Migrated', value: '150+', isCounter: false },
      { label: 'Custom Components', value: '50+', isCounter: false },
    ],
    slug: 'socrata-cms',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop',
    color: 'from-brand-pink/80 to-brand-navy/90',
  },
]
