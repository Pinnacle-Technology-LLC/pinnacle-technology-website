import Link from 'next/link'
import { Container } from '@/components/layout'
import { Badge } from '@/components/ui'

export const metadata = {
  title: 'Platform Engineering | Services | Pinnacle Technologies',
  description:
    'Custom platform extensions, admin tooling, and workflow automation for Socrata, OpenGov, CKAN, and DKAN.',
}

export default function PlatformEngineeringPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Service
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              Platform Engineering
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Close platform gaps with secure extensions, admin tooling, and workflows. Deep
              expertise in Socrata, OpenGov, CKAN, and DKAN ecosystems.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">What We Build</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Custom Extensions</h3>
                <p className="mt-2 text-slate-700">
                  Extend platform capabilities without forking core code. We build secure,
                  maintainable extensions that integrate seamlessly with platform upgrades.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Admin Tooling</h3>
                <p className="mt-2 text-slate-700">
                  Reduce manual administration with custom tools for bulk operations, user
                  management, data governance, and reporting.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Workflow Automation</h3>
                <p className="mt-2 text-slate-700">
                  Automate approval workflows, publication pipelines, and data quality checks.
                  Enforce governance without slowing teams down.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Let&apos;s discuss your platform needs
            </h2>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700"
              >
                Get in touch
              </Link>
              <Link href="/services" className="font-semibold text-slate-900 hover:text-cyan-600">
                ← All services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
