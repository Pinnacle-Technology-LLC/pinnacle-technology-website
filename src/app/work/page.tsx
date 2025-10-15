import Link from 'next/link'
import { Container } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardContent, Badge } from '@/components/ui'
import { getAllCaseStudies } from '@/lib/content/case-studies'

export const metadata = {
  title: 'Our Work | Pinnacle Technologies LLC',
  description:
    'Case studies showcasing our work with CDC, NIH, DOT, VA, HHS, and other mission-critical data platforms.',
}

export default function WorkPage() {
  const caseStudies = getAllCaseStudies()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Our Work
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Delivering reliable systems for mission-critical data platforms across public-sector
              and enterprise clients.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link key={study.frontmatter.slug} href={`/work/${study.frontmatter.slug}`}>
                <Card hover className="h-full transition-all hover:scale-[1.02]">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {study.frontmatter.platforms.map((platform) => (
                        <Badge key={platform} variant="secondary">
                          {platform}
                        </Badge>
                      ))}
                      {study.frontmatter.contentType === 'detailed' && (
                        <Badge variant="default">Detailed</Badge>
                      )}
                    </div>
                    <CardTitle className="line-clamp-2">{study.frontmatter.title}</CardTitle>
                    <p className="mt-2 text-sm text-slate-600">{study.frontmatter.client}</p>
                    {study.frontmatter.supportedVia && (
                      <p className="mt-1 text-xs text-slate-500">
                        via {study.frontmatter.supportedVia}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    {/* Show first outcome as preview */}
                    <p className="line-clamp-3 text-sm text-slate-700">
                      {study.frontmatter.outcomes[0]}
                    </p>

                    {/* Show metrics if available */}
                    {study.frontmatter.metrics && study.frontmatter.metrics.length > 0 && (
                      <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                        {study.frontmatter.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="flex items-baseline justify-between">
                            <span className="text-xs text-slate-600">{metric.label}</span>
                            <span className="font-mono text-sm font-semibold text-slate-900">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Service tags */}
                    <div className="mt-4 flex flex-wrap gap-1">
                      {study.frontmatter.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-700"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {caseStudies.length === 0 && (
            <div className="text-center text-slate-600">
              <p>No case studies found. Add MDX files to content/case-studies/</p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Interested in working together?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Let&apos;s discuss how we can help with your data platform needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
