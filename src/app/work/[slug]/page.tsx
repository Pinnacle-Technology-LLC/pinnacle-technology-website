import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { Container } from '@/components/layout'
import { Badge } from '@/components/ui'
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/content/case-studies'
import './case-study.css'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const caseStudies = getAllCaseStudies()
    return caseStudies.map((study) => ({
      slug: study.frontmatter.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params

  let caseStudy
  try {
    caseStudy = getCaseStudyBySlug(slug)
  } catch (error) {
    console.error(`Error loading case study ${slug}:`, error)
    notFound()
  }

  if (!caseStudy) {
    notFound()
  }

  const { frontmatter, content } = caseStudy

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex flex-wrap gap-2">
              {frontmatter.platforms.map((platform) => (
                <Badge key={platform} variant="secondary">
                  {platform}
                </Badge>
              ))}
            </div>
            <h1 className="text-center text-5xl font-bold tracking-tight text-slate-900">
              {frontmatter.title.split(' | ').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </h1>
            {frontmatter.supportedVia && (
              <p className="mt-4 text-center text-sm text-slate-500">
                Supported via {frontmatter.supportedVia}
              </p>
            )}
            {!frontmatter.supportedVia && frontmatter.client && (
              <p className="mt-4 text-xl text-slate-600">{frontmatter.client}</p>
            )}
          </div>
        </Container>
      </section>

      {/* Metrics */}
      {frontmatter.metrics && frontmatter.metrics.length > 0 && (
        <section className="border-y border-slate-200 bg-white py-12">
          <Container>
            <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {frontmatter.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-slate-900">{metric.value}</div>
                  <div className="mt-2 text-sm text-slate-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Content */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-16">
        <Container>
          <article className="case-study-content">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </article>
        </Container>
      </section>
    </>
  )
}
