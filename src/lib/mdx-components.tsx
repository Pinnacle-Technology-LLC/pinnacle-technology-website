import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

/**
 * Custom MDX components for rendering case studies
 * Override default HTML elements with Next.js-optimized components
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default anchor to use Next.js Link
    a: ({ href, children }) => {
      if (href?.startsWith('/')) {
        return <Link href={href}>{children}</Link>
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    },
    // Add custom styling to default elements
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 text-3xl font-bold tracking-tight text-slate-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-2xl font-semibold tracking-tight text-slate-900">{children}</h3>
    ),
    p: ({ children }) => <p className="mb-4 leading-7 text-slate-700">{children}</p>,
    ul: ({ children }) => <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>,
    li: ({ children }) => <li className="leading-7 text-slate-700">{children}</li>,
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-900">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg bg-slate-900 p-4">{children}</pre>
    ),
    ...components,
  }
}
