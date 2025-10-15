import { Container } from '@/components/layout'
import { Card, CardContent, Badge } from '@/components/ui'
import { generateSEOMeta } from '@/components/seo'

export const metadata = generateSEOMeta({
  title: 'About',
  description:
    'Learn about Pinnacle Technology LLC: a distributed team of engineers specializing in mission-critical data platforms for government and enterprise. Proven process, long-term partnerships.',
  path: '/about',
})

export default function AboutPage() {
  const process = [
    {
      step: '1',
      title: 'Discover',
      description: 'Define goals, users, constraints, and measurable success criteria.',
    },
    {
      step: '2',
      title: 'Design',
      description: 'Architect data models and UX with security and maintainability from the start.',
    },
    {
      step: '3',
      title: 'Build',
      description: 'Deliver iteratively with automated testing, version control, and CI/CD.',
    },
    {
      step: '4',
      title: 'Migrate & Launch',
      description: 'Rehearsed cutovers, monitored deployments, and rapid stabilization.',
    },
    {
      step: '5',
      title: 'Enable',
      description: 'Documentation, training, and right-sized support that empower client teams.',
    },
  ]

  const platforms = ['Socrata', 'OpenGov', 'CKAN', 'DKAN']

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 mt-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 text-sm font-semibold tracking-wider text-cyan-600 uppercase">
              Pinnacle Technology LLC
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Built for the Long Term
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We&apos;re a distributed team of engineers who design, build, and maintain
              mission-critical data platforms for government and enterprise clients. Our focus is on
              systems that last—reliable, secure, and maintainable from day one.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              We help organizations turn complex data into dependable public systems. From
              large-scale migrations and automations to custom platform tooling and high-visibility
              web experiences, we deliver solutions that stay stable long after launch.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Our work powers open data initiatives, analytics programs, and transparency platforms
              across the U.S. and the EU—supporting agencies through partnerships with Tyler
              Technologies and direct engagements.
            </p>
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
            <p className="mt-4 text-lg text-slate-600">
              A proven process for building reliable, maintainable systems
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {process.map((item) => (
              <Card key={item.step} className="text-center">
                <CardContent>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-xl font-bold text-cyan-900">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team & Coverage */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Team & Availability</h2>
              <p className="mt-4 text-lg text-slate-700">
                Our distributed team spans <strong>Hawaii, California, and Maryland</strong>,
                providing extended coverage across time zones. This structure ensures continuity on
                long-term projects and responsiveness to clients across regions.
              </p>
              <p className="mt-4 text-slate-700">
                We balance stability with flexibility—maintaining dedicated expertise while scaling
                to meet evolving client needs.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">Platforms & Ecosystems</h2>
              <p className="mt-4 text-slate-700">
                We specialize in extending and supporting data ecosystems such as:
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <Badge key={platform} variant="secondary" className="px-4 py-2 text-base">
                    {platform}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-slate-700">
                Along with modern web stacks, CI/CD pipelines, observability tools, and
                accessibility frameworks.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">Our Approach</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Security and Quality by Default
                </h3>
                <p className="mt-2 text-slate-700">
                  Principle-of-least-privilege access, peer code review, automated checks, and
                  observability are built into every project—not added later.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Outcome-Driven Engineering</h3>
                <p className="mt-2 text-slate-700">
                  Every decision optimizes for adoption, stability, and clarity. We measure success
                  by the reliability of what&apos;s left running, not by tickets closed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Embedded Partnership</h3>
                <p className="mt-2 text-slate-700">
                  We work alongside your teams, transfer knowledge thoroughly, and leave behind
                  systems that are well-documented, maintainable, and resilient.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Work with Us</h2>
            <p className="mt-4 text-lg text-slate-600">
              Ready to discuss your data platform needs? Let&apos;s talk.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Get in touch
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
