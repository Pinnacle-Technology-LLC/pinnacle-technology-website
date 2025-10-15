import Link from 'next/link'
import { Container } from '@/components/layout'
import { Card, CardContent, Badge } from '@/components/ui'
import { getAllCaseStudies } from '@/lib/content/case-studies'

export const metadata = {
  title: 'Data Migration at Scale | Services | Pinnacle Technologies',
  description:
    'Idempotent pipelines, validation gates, and rehearsed cutovers for moving massive datasets with confidence.',
}

export default function DataMigrationPage() {
  // Get case studies related to data migration
  const relatedCaseStudies = getAllCaseStudies().filter((study) =>
    study.frontmatter.services.some(
      (s) => s.toLowerCase().includes('migration') || s.toLowerCase().includes('data')
    )
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Service
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              Data Migration at Scale
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Move millions of records with confidence. Idempotent pipelines, validation gates, and
              rehearsed cutovers ensure your data arrives intact and on schedule.
            </p>
          </div>
        </Container>
      </section>

      {/* When You Need This */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">When You Need This</h2>
            <div className="mt-6 space-y-4">
              <Card>
                <CardContent>
                  <h3 className="font-semibold text-slate-900">Platform migrations</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Moving from legacy systems to modern platforms like Socrata, OpenGov, CKAN, or
                    DKAN. We handle schema mapping, data transformation, and validation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="font-semibold text-slate-900">Large-scale consolidation</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Merging datasets from multiple sources into a single platform. We ensure
                    consistency, deduplication, and referential integrity.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="font-semibold text-slate-900">Ongoing bulk uploads</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    Regular ingestion of thousands of datasets. We build pipelines that run
                    reliably, validate automatically, and report clearly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Do It */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">How We Do It</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  1. Idempotent Pipeline Design
                </h3>
                <p className="mt-2 text-slate-700">
                  Re-running a migration produces identical results. No duplicates, no data loss. If
                  a cutover needs to be repeated, your data stays clean.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  2. Automated Validation Gates
                </h3>
                <p className="mt-2 text-slate-700">
                  50+ checks per dataset: schema validation, data type verification, referential
                  integrity, temporal consistency. Nothing goes live without passing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">3. Schema Parity Checks</h3>
                <p className="mt-2 text-slate-700">
                  Ensure source and target schemas match. Automated reconciliation reports show
                  exactly what changed and why, with audit trails for compliance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">4. Rehearsed Cutovers</h3>
                <p className="mt-2 text-slate-700">
                  We don&apos;t migrate in production first. Full dress rehearsals in staging
                  environments catch issues early. Documented runbooks guide the final cutover.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">5. Rapid Stabilization</h3>
                <p className="mt-2 text-slate-700">
                  Post-migration monitoring catches anomalies immediately. Automated smoke tests
                  verify functionality. Rollback procedures are tested and ready.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">Technical Capabilities</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent>
                  <h4 className="font-semibold text-slate-900">Data Transformation</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>• Schema mapping & evolution</li>
                    <li>• Field-level transformations</li>
                    <li>• Data enrichment & normalization</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h4 className="font-semibold text-slate-900">Quality Assurance</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>• Automated validation suites</li>
                    <li>• Data profiling & anomaly detection</li>
                    <li>• Reconciliation reports</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h4 className="font-semibold text-slate-900">Performance</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>• Parallel processing for speed</li>
                    <li>• Incremental updates</li>
                    <li>• Progress tracking & resume</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h4 className="font-semibold text-slate-900">Observability</h4>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>• Real-time monitoring dashboards</li>
                    <li>• Detailed logging & alerting</li>
                    <li>• Post-migration analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="bg-slate-50 py-16">
          <Container>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Related Case Studies</h2>
              <p className="mt-2 text-slate-600">
                See how we&apos;ve helped clients migrate and scale their data platforms.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedCaseStudies.slice(0, 3).map((study) => (
                <Link key={study.frontmatter.slug} href={`/work/${study.frontmatter.slug}`}>
                  <Card hover className="h-full transition-all hover:scale-[1.02]">
                    <CardContent>
                      <h3 className="font-semibold text-slate-900">{study.frontmatter.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{study.frontmatter.outcomes[0]}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Ready to discuss your migration?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Let&apos;s talk about your data migration needs and how we can help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Get in touch
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center text-base font-semibold text-slate-900 transition-colors hover:text-cyan-600"
              >
                ← All services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
