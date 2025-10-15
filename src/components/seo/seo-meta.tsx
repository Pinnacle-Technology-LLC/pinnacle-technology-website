import { Metadata } from 'next'

/**
 * Configuration for SEO metadata generation
 */
interface SEOMetaConfig {
  title: string
  description: string
  path?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  article?: {
    publishedTime?: string
    modifiedTime?: string
    section?: string
    tags?: string[]
  }
}

/**
 * Generate SEO metadata for Next.js pages
 *
 * Creates comprehensive metadata including:
 * - Title and description
 * - OpenGraph tags
 * - Twitter card
 * - Keywords
 * - Canonical URL
 * - Robots directives
 *
 * @param config - SEO configuration object
 * @returns Next.js Metadata object
 *
 * @example
 * ```tsx
 * export const metadata = generateSEOMeta({
 *   title: 'About Us',
 *   description: 'Learn about Pinnacle Technology',
 *   path: '/about'
 * })
 * ```
 */
export function generateSEOMeta({
  title,
  description,
  path = '',
  ogImage = '/og-image.png',
  ogType = 'website',
  article,
}: SEOMetaConfig): Metadata {
  const baseUrl = 'https://pinntech.com'
  const url = `${baseUrl}${path}`
  const fullTitle = path ? `${title} | Pinnacle Technology LLC` : title

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      'data platform engineering',
      'data migration',
      'Socrata',
      'OpenGov',
      'CKAN',
      'DKAN',
      'government technology',
      'public data',
      'platform engineering',
      'automation',
      'data visualization',
    ],
    authors: [{ name: 'Pinnacle Technology LLC' }],
    creator: 'Pinnacle Technology LLC',
    publisher: 'Pinnacle Technology LLC',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: 'Pinnacle Technology LLC',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
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
  }

  if (article && ogType === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime,
      section: article.section,
      tags: article.tags,
    }
  }

  return metadata
}
