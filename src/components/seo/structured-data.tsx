/**
 * Props for StructuredData component
 */
interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'breadcrumb'
  data: Record<string, unknown>
}

/**
 * StructuredData Component
 *
 * Generates JSON-LD structured data for SEO purposes.
 * Supports multiple schema types: organization, website, article, and breadcrumb.
 *
 * @component
 * @example
 * ```tsx
 * <StructuredData
 *   type="organization"
 *   data={{
 *     contactPoint: {
 *       '@type': 'ContactPoint',
 *       contactType: 'Customer Service'
 *     }
 *   }}
 * />
 * ```
 */
export function StructuredData({ type, data }: StructuredDataProps) {
  const schemas = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Pinnacle Technologies LLC',
      url: 'https://pinntech.com',
      logo: 'https://pinntech.com/logo.png',
      description:
        'Data platform engineering, migrations, and automation for mission-critical systems. Supported via Tyler Technologies.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      sameAs: [],
      ...data,
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Pinnacle Technologies LLC',
      url: 'https://pinntech.com',
      description:
        'Data platform engineering, migrations, and automation for mission-critical systems.',
      ...data,
    },
    article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      publisher: {
        '@type': 'Organization',
        name: 'Pinnacle Technologies LLC',
        url: 'https://pinntech.com',
      },
      ...data,
    },
    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      ...data,
    },
  }

  const schema = schemas[type]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
