import { Container } from '@/components/layout'
import { Card, CardContent, Badge, AnimatedCounter } from '@/components/ui'
import { generateSEOMeta } from '@/components/seo'

export const metadata = generateSEOMeta({
  title: 'About Pinnacle Technology - Platform Engineering Experts | Government Data Systems',
  description:
    'Pinnacle Technology LLC designs, builds, and maintains data platforms for government and enterprise clients—experts in Socrata, OpenGov, CKAN, and DKAN.',
  path: '/about',
})

export default function AboutPage() {
  const process = [
    {
      step: '1',
      title: 'Discover',
      description: 'Define goals, users, constraints, and measurable success criteria. We align every project around clear objectives and shared understanding before any code is written.',
    },
    {
      step: '2',
      title: 'Design',
      description: 'Architect data models, workflows, and user experiences with security, scalability, and maintainability in mind from the very start.',
    },
    {
      step: '3',
      title: 'Build',
      description: 'Develop iteratively with automated testing, version control, and CI/CD pipelines—ensuring every release is stable, traceable, and ready for scale.',
    },
    {
      step: '4',
      title: 'Migrate & Launch',
      description: 'Execute rehearsed cutovers, monitored deployments, and rapid stabilization. We handle migrations with precision to minimize downtime and risk.',
    },
    {
      step: '5',
      title: 'Enable',
      description: 'Deliver documentation, training, and right-sized support that empower your teams to own and evolve their systems confidently.',
    },
  ]

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
              We&apos;re a distributed team of engineers who design, build, and maintain core data platforms for government and enterprise clients. Our focus is on systems that endure: reliable, secure, and maintainable from day one.
            </p>
          </div>
        </Container>
      </section>

      {/* Independence Statement */}
      <section className="bg-white py-8">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xl leading-relaxed text-slate-800 font-medium">
              Pinnacle Technology LLC is an independent engineering partner trusted by public-sector leaders across the U.S. and EU, delivering data platform solutions that support transparency, security, and long-term performance.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Origin */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg leading-8 text-slate-700">
              <p>
                Founded in 2021 by engineers who saw government agencies struggling with legacy data systems, Pinnacle Technology LLC set out to bridge the gap between critical operational needs and modern platform capabilities.
              </p>
              <p>
                What began as a focused effort to help organizations unlock the value in their data has evolved into long-term partnerships with federal agencies, state and local governments, and international institutions. We&apos;ve grown by staying true to our founding principle: build systems that last, not just systems that launch.
              </p>
              <p>
                Over the years, our focus has remained the same: building reliable systems that make data more accessible, transparent, and useful.
              </p>
              <p>
                Today, that means helping organizations modernize without disruption. Many of the platforms we support are essential but lack newer capabilities such as automation, analytics, or AI integration. We develop secure wrap-around services that extend and enhance these systems, bringing modern functionality and intelligence without the cost or downtime of full replacement.
              </p>
              <p className="font-medium text-slate-900">
                When new systems are needed, we implement modern data platforms from the ground up—designed to scale, interoperate, and evolve with our clients&apos; missions. Whether extending existing infrastructure or building entirely new solutions, we engineer for reliability, security, and long-term impact.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* By The Numbers */}
      <section className="bg-white py-16">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">By The Numbers</h2>
            <p className="mt-4 text-lg text-slate-600">
              Proven track record delivering reliable, secure data platforms
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Years in Operation */}
            <Card className="text-center">
              <CardContent className="py-8">
                <div className="mb-2 text-5xl font-bold text-cyan-600">
                  <AnimatedCounter from={0} to={4} suffix="+" />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  Years in Operation
                </div>
              </CardContent>
            </Card>

            {/* Uptime */}
            <Card className="text-center">
              <CardContent className="py-8">
                <div className="mb-2 text-5xl font-bold text-cyan-600">99.9%</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  Uptime Across 2M+ Hours
                </div>
              </CardContent>
            </Card>

            {/* Federal Agencies */}
            <Card className="text-center">
              <CardContent className="py-8">
                <div className="mb-2 text-5xl font-bold text-cyan-600">
                  <AnimatedCounter from={0} to={8} suffix="+" />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  Federal Agencies Supported
                </div>
              </CardContent>
            </Card>

            {/* EU Member States */}
            <Card className="text-center">
              <CardContent className="py-8">
                <div className="mb-2 text-5xl font-bold text-cyan-600">
                  <AnimatedCounter from={0} to={27} />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  EU Member States Served
                </div>
              </CardContent>
            </Card>

            {/* Security Record */}
            <Card className="text-center">
              <CardContent className="py-8">
                <div className="mb-2 text-5xl font-bold text-cyan-600">
                  <AnimatedCounter from={0} to={0} />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  Priority Incidents (2+ Years with EC)
                </div>
              </CardContent>
            </Card>

            {/* Datasets Deployed */}
            <Card className="text-center">
              <CardContent className="py-8">
                <div className="mb-2 text-5xl font-bold text-cyan-600">
                  <AnimatedCounter from={0} to={15000} suffix="+" />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  Datasets Deployed
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700 font-medium">
              Our mission is to build data systems that endure—designed for transparency, security, and long-term maintainability.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              We help organizations turn complex data into dependable, modern platforms that remain stable and relevant long after launch. Whether enhancing existing infrastructure through automation and AI or implementing new, cloud-ready systems, we deliver solutions built to last.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Our work powers open data initiatives, analytics programs, and transparency platforms across the U.S. and the EU—supporting federal agencies through partnerships with Tyler Technologies, direct engagements with the European Commission, and collaborations with state and local governments.
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

      {/* Mid-Page CTA */}
      <section className="bg-gradient-to-br from-cyan-50 to-slate-50 py-12">
        <Container>
          <div className="mx-auto max-w-2xl rounded-lg border border-cyan-200 bg-white/70 backdrop-blur-sm p-8 text-center shadow-md">
            <h3 className="text-2xl font-bold text-slate-900">
              Looking for a partner who can modernize and extend your data platform?
            </h3>
            <p className="mt-3 text-slate-600">
              Let&apos;s discuss how we can help your organization evolve its systems, whether enhancing existing platforms or implementing new, AI-ready solutions built to last.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-cyan-700"
              >
                Start a Conversation
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Team & Coverage */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Team & Expertise</h2>
              <p className="mt-4 text-lg text-slate-700">
                Our distributed team of <strong>senior engineers</strong> spans{' '}
                <strong>Hawaii, California, and Maryland</strong>, providing extended coverage
                across time zones. Every team member brings 10+ years of experience in public-sector
                technology, with deep expertise in data platforms, full-stack development, and
                government systems.
              </p>
              <p className="mt-4 text-lg text-slate-700">
                We collaborate through Slack, GitHub, and daily syncs across time zones—maintaining
                the responsiveness of a small team with the coverage of a distributed workforce.
                This structure ensures continuity on long-term projects and rapid response to client
                needs.
              </p>
              <p className="mt-4 text-lg text-slate-700">
                We balance stability with flexibility—maintaining dedicated expertise in core
                platforms while scaling to meet evolving client requirements.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">Platform Specialization</h2>
              <p className="mt-4 text-slate-700">
                We bring deep, platform-specific expertise built over years of implementation and
                enhancement work:
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="px-3 py-1">
                      Socrata
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600">
                    One of the few independent firms with platform-wide expertise. Implemented the Grapes.js CMS soon to be used across the Socrata ecosystem and delivered 150+ homepage migrations, custom tools, and automation workflows.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="px-3 py-1">
                      OpenGov
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600">
                    Developed and integrated platform extensions, data synchronization tools, and workflow automation solutions for government clients.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="px-3 py-1">
                      CKAN
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600">
                    Designed and maintained open-source data portals, custom extensions, and metadata harvesting systems for international organizations.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="px-3 py-1">
                      DKAN
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600">
                    Delivered Drupal-based open data solutions with tailored modules, migration utilities, and accessibility-focused interfaces.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-slate-700">
                We also build with modern web stacks, including Next.js, React, and Node.js, supported by robust CI/CD pipelines, observability frameworks, and accessibility standards (WCAG 2.1 AA compliance).
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Pinnacle Works Differently */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Why Pinnacle Works Differently
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our approach is built on measurable outcomes, not just best practices
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Built-In Security & Quality
                </h3>
                <p className="mt-2 text-slate-700">
                  <strong>99.9% uptime across 2M+ hours of platform operation.</strong> Zero breaches and zero P1 incidents in over two years with the European Commission. Security and quality are engineered in from day one through principle-of-least-privilege access, peer code reviews, automated checks, and continuous observability, never added as an afterthought.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Zero-Overhead Collaboration
                </h3>
                <p className="mt-2 text-slate-700">
                  We embed directly with your teams, syncing daily across time zones through Slack, Microsoft Teams, and GitHub. This approach combines the responsiveness of a small team with the reach of a distributed workforce. We transfer knowledge thoroughly and leave behind systems that are documented, maintainable, and resilient.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Outcome-Driven Engineering</h3>
                <p className="mt-2 text-slate-700">
                  Every decision we make optimizes for adoption, stability, and clarity. We measure success by what continues to perform, not by tickets closed. For example, our ingestion pipelines deployed 15,000+ datasets for HHS, enabling scalable growth toward their goal of one million datasets—built for repeatability and long-term reliability.
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
