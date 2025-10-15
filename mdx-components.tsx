import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getMDXComponents } from './src/lib/mdx-components'

/**
 * This file is required by Next.js to provide custom MDX components
 * It must be in the root directory
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components)
}
