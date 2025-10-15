import { z } from 'zod'

/**
 * Metric schema for case study KPIs
 */
export const MetricSchema = z.object({
  label: z.string().min(1, 'Metric label is required'),
  value: z.union([z.string(), z.number()]),
})

/**
 * Case study frontmatter schema with Zod validation
 * Ensures all case studies have consistent, type-safe metadata
 */
export const CaseStudyFrontmatterSchema = z.object({
  // Basic info
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  client: z.string().optional(),
  supportedVia: z.string().optional(),

  // Classification
  sector: z.array(z.string()).min(1, 'At least one sector is required'),
  platforms: z.array(z.string()).min(1, 'At least one platform is required'),
  services: z.array(z.string()).min(1, 'At least one service is required'),
  techStack: z.array(z.string()).optional(),

  // Content
  metrics: z.array(MetricSchema).optional(),
  outcomes: z.array(z.string()).min(1, 'At least one outcome is required'),

  // Legal/permissions
  confidentiality: z.enum(['public', 'limited', 'anonymized']).default('public'),
  logoPermission: z.boolean().default(false),

  // Dates
  dates: z.object({
    start: z.string().optional(),
    end: z.string().optional(),
  }),

  // Content type (detailed vs summary)
  contentType: z.enum(['detailed', 'summary']).default('summary'),
})

export type CaseStudyFrontmatter = z.infer<typeof CaseStudyFrontmatterSchema>
export type Metric = z.infer<typeof MetricSchema>
