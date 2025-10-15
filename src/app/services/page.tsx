import Link from 'next/link'
import { Container } from '@/components/layout'
import { Card, CardContent } from '@/components/ui'

export const metadata = {
  title: 'Services | Pinnacle Technologies LLC',
  description:
    'End-to-end engineering for public-sector and enterprise data systems; from large-scale migrations to automation, visualization, and platform reliability.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Data Migration at Scale',
      slug: 'data-migration',
      description:
        'Build idempotent pipelines with validation and schema checks for safe, repeatable migrations.',
      icon: '📊',
      keyFeatures: [
        'Idempotent pipeline design',
        'Automated validation gates',
        'Rehearsed cutover procedures',
      ],
    },
    {
      title: 'Platform Engineering',
      slug: 'platform-engineering',
      description:
        'Extend and optimize platforms such as Socrata, OpenGov, CKAN & DKAN with secure tooling, admin utilities & custom workflows.',
      icon: '⚙️',
      keyFeatures: [
        'Custom platform extensions',
        'Admin tooling development',
        'Workflow automation',
      ],
    },
    {
      title: 'Automations & Integrations',
      slug: 'automations-integrations',
      description:
        'Eliminate manual steps & reduce error rates through secure APIs, scheduled jobs & data synchronization across systems.',
      icon: '🔄',
      keyFeatures: ['Process automation', 'System integrations', 'Error reduction workflows'],
    },
    {
      title: 'Full-Stack Development',
      slug: 'engineering',
      description:
        'Design and build accessible, high-performance interfaces backed by robust APIs, services & CI/CD workflows.',
      icon: '💻',
      keyFeatures: ['Modern web applications', 'API development', 'Accessible interfaces'],
    },
    {
      title: 'Implementation & Onboarding',
      slug: 'implementation',
      description:
        'Deliver white-glove setup, configuration & training with documentation and knowledge transfer baked into every project.',
      icon: '🚀',
      keyFeatures: ['Platform implementation', 'Team training', 'Documentation'],
    },
    {
      title: 'Data Analysis & Visualization',
      slug: 'data-viz',
      description:
        'Transform complex datasets into decision-ready dashboards and narratives using proven visualization frameworks.',
      icon: '📈',
      keyFeatures: ['Interactive dashboards', 'Geographic visualization', 'Custom reporting'],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Services
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              End-to-end engineering for public-sector and enterprise data systems; from large-scale
              migrations to automation, visualization, and platform reliability.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card hover className="h-full text-center transition-all hover:scale-[1.02]">
                  <CardContent>
                    <div className="mb-4 text-4xl">{service.icon}</div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="mb-4 text-sm text-slate-600">{service.description}</p>
                    <ul className="space-y-1 text-left text-sm text-slate-700">
                      {service.keyFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="mr-2 text-cyan-600">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
            <p className="mt-4 text-lg text-slate-600">
              Every engagement follows our proven 5-step process: Discover → Design → Build →
              Migrate & Launch → Enable.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-semibold text-slate-900 transition-colors hover:text-cyan-600"
              >
                Learn more about our process
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Ready to get started?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Let&apos;s discuss which services best fit your needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
