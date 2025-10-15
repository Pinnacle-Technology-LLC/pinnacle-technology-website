import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CaseStudyFrontmatterSchema, type CaseStudyFrontmatter } from './schemas'

const CASE_STUDIES_DIR = path.join(process.cwd(), 'content/case-studies')

/**
 * Get all case study file paths from the content directory
 */
function getCaseStudyFiles(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) {
    return []
  }
  return fs.readdirSync(CASE_STUDIES_DIR).filter((file) => file.endsWith('.mdx'))
}

/**
 * Read and parse a single case study MDX file
 * Returns validated frontmatter and raw content
 */
function readCaseStudy(filename: string): {
  frontmatter: CaseStudyFrontmatter
  content: string
} {
  const filePath = path.join(CASE_STUDIES_DIR, filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  // Validate frontmatter with Zod
  const frontmatter = CaseStudyFrontmatterSchema.parse(data)

  return { frontmatter, content }
}

/**
 * Get all case studies with validated frontmatter
 * Sorted by start date (newest first)
 */
export function getAllCaseStudies(): Array<{
  frontmatter: CaseStudyFrontmatter
  content: string
}> {
  const files = getCaseStudyFiles()

  const caseStudies = files.map((filename) => {
    try {
      return readCaseStudy(filename)
    } catch (error) {
      console.error(`Error reading case study ${filename}:`, error)
      throw error
    }
  })

  // Sort by start date (newest first), with ongoing projects at the top
  return caseStudies.sort((a, b) => {
    const aDate = a.frontmatter.dates.start || '0'
    const bDate = b.frontmatter.dates.start || '0'
    return bDate.localeCompare(aDate)
  })
}

/**
 * Get a single case study by slug
 */
export function getCaseStudyBySlug(slug: string): {
  frontmatter: CaseStudyFrontmatter
  content: string
} | null {
  const files = getCaseStudyFiles()
  const filename = files.find((file) => file.replace('.mdx', '') === slug)

  if (!filename) {
    return null
  }

  return readCaseStudy(filename)
}

/**
 * Get all unique sectors across case studies
 */
export function getAllSectors(): string[] {
  const caseStudies = getAllCaseStudies()
  const sectors = new Set<string>()

  for (const study of caseStudies) {
    for (const sector of study.frontmatter.sector) {
      sectors.add(sector)
    }
  }

  return Array.from(sectors).sort()
}

/**
 * Get all unique platforms across case studies
 */
export function getAllPlatforms(): string[] {
  const caseStudies = getAllCaseStudies()
  const platforms = new Set<string>()

  for (const study of caseStudies) {
    for (const platform of study.frontmatter.platforms) {
      platforms.add(platform)
    }
  }

  return Array.from(platforms).sort()
}
