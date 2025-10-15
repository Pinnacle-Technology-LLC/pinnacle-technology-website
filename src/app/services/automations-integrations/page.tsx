import Link from 'next/link'
import { Container } from '@/components/layout'
import { Badge } from '@/components/ui'

export const metadata = {
  title: 'Automations & Integrations | Services | Pinnacle Technologies',
  description:
    'Eliminate manual steps and reduce error rates with intelligent automation and system integrations.',
}

export default function AutomationsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              Service
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              Automations & Integrations
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Eliminate manual steps, reduce error rates, and speed time-to-value with intelligent
              automation and seamless system integrations.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Process Automation</h2>
              <p className="mt-2 text-slate-700">
                Replace repetitive manual tasks with reliable automated workflows. Data ingestion,
                validation, publication, and reporting—all running unattended.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">System Integrations</h2>
              <p className="mt-2 text-slate-700">
                Connect disparate systems with robust APIs and data pipelines. Real-time sync or
                scheduled batches, with error handling and retry logic built in.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Error Reduction</h2>
              <p className="mt-2 text-slate-700">
                Automated validation catches issues before they reach production. Clear error
                messages and automated remediation reduce support burden.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Ready to automate?</h2>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700"
              >
                Contact us
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
