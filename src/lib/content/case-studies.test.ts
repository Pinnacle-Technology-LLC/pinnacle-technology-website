import { describe, it, expect, vi } from 'vitest'
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  getAllSectors,
  getAllPlatforms,
} from './case-studies'

// Mock the file system operations
vi.mock('fs', () => ({
  default: {
    existsSync: vi.fn(() => true),
    readdirSync: vi.fn(() => ['test-study.mdx']),
    readFileSync: vi.fn(
      () => `---
title: Test Case Study
slug: test-study
sector: ["Government", "Healthcare"]
platforms: ["Socrata", "CKAN"]
services: ["Data Migration"]
outcomes: ["Improved data quality"]
dates:
  start: "2024-01"
  end: "2024-06"
---
Test content`
    ),
  },
}))

vi.mock('gray-matter', () => ({
  default: vi.fn((_content: string) => ({
    data: {
      title: 'Test Case Study',
      slug: 'test-study',
      sector: ['Government', 'Healthcare'],
      platforms: ['Socrata', 'CKAN'],
      services: ['Data Migration'],
      outcomes: ['Improved data quality'],
      dates: {
        start: '2024-01',
        end: '2024-06',
      },
    },
    content: 'Test content',
  })),
}))

describe('case-studies', () => {
  describe('getAllCaseStudies', () => {
    it('returns array of case studies', () => {
      const studies = getAllCaseStudies()
      expect(Array.isArray(studies)).toBe(true)
    })

    it('returns studies with frontmatter and content', () => {
      const studies = getAllCaseStudies()
      if (studies.length > 0) {
        expect(studies[0]).toHaveProperty('frontmatter')
        expect(studies[0]).toHaveProperty('content')
      }
    })
  })

  describe('getCaseStudyBySlug', () => {
    it('returns null for non-existent slug', () => {
      const study = getCaseStudyBySlug('non-existent')
      expect(study).toBeNull()
    })

    it('returns case study for valid slug', () => {
      const study = getCaseStudyBySlug('test-study')
      expect(study).not.toBeNull()
      if (study) {
        expect(study.frontmatter.slug).toBe('test-study')
      }
    })
  })

  describe('getAllSectors', () => {
    it('returns array of unique sectors', () => {
      const sectors = getAllSectors()
      expect(Array.isArray(sectors)).toBe(true)
      const uniqueSectors = new Set(sectors)
      expect(uniqueSectors.size).toBe(sectors.length)
    })

    it('returns sorted sectors', () => {
      const sectors = getAllSectors()
      const sorted = [...sectors].sort()
      expect(sectors).toEqual(sorted)
    })
  })

  describe('getAllPlatforms', () => {
    it('returns array of unique platforms', () => {
      const platforms = getAllPlatforms()
      expect(Array.isArray(platforms)).toBe(true)
      const uniquePlatforms = new Set(platforms)
      expect(uniquePlatforms.size).toBe(platforms.length)
    })

    it('returns sorted platforms', () => {
      const platforms = getAllPlatforms()
      const sorted = [...platforms].sort()
      expect(platforms).toEqual(sorted)
    })
  })
})
