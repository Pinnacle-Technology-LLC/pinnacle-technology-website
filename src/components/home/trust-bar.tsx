'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { OrganizationModal } from './organization-modal'

/**
 * Client organization data for trust bar
 */
interface Client {
  name: string
  logo: string
  abbrev: string
  about: string
  services: string[]
  highlights: string[]
  impact: string
}

/**
 * TrustBar Component
 *
 * Displays client logos in a grid with interactive modals showing detailed partnership information.
 * Logos animate on scroll and can be clicked to open organization details in a modal.
 *
 * @component
 * @example
 * ```tsx
 * <TrustBar />
 * ```
 */
export function TrustBar() {
  const [selectedOrg, setSelectedOrg] = useState<Client | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const clients: Client[] = [
    {
      name: 'Tyler Technologies',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Tyler_Technologies_logo.svg',
      abbrev: 'TTI',
      about:
        'Through our ongoing partnership with Tyler Technologies, we provide software development and consulting services that strengthen and extend capabilities of the Socrata / Data & Insights platform. Our work supports government clients in publishing, managing, and visualizing open data with greater efficiency, scalability, and resilience.',
      services: [
        'Full-Stack Platform Development',
        'CMS Implementation & Integration',
        'Feature Development & Enhancement',
        'Technical Architecture & Design',
        'Client Implementation & Onboarding Support',
        'Automation & Data Workflow Optimization',
      ],
      highlights: [
        'Implemented and integrated a Grapes.js-based CMS solution for Socrata environments used by multiple clients',
        'Developed custom extensions and tooling that augment core Socrata functionality',
        'Delivered performance and workflow optimizations to data publishing and ingestion pipelines',
        'Supported onboarding and configuration of public-sector agencies using Socrata instances via Tyler-provided infrastructure',
      ],
      impact:
        'Our collaboration with Tyler Technologies helps improve the stability, usability, and reach of Socrata-powered data platforms. This enables government agencies to manage and share data more effectively, promoting transparency, accessibility, and operational efficiency.',
    },
    {
    name: 'Centers for Disease Control and Prevention (CDC)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/US_CDC_logo.svg',
    abbrev: 'CDC',
    about:
        'Working alongside Tyler Technologies, we’ve contributed engineering support to CDC’s public health data efforts built on the Socrata platform. Our team has assisted with optimizing data architecture, integration, and system workflows that support timely, accurate health information delivery.',
    services: [
        'Data Platform Engineering',
        'Public Health Data System Support',
        'API Integration & Automation',
        'Performance Optimization & Reliability',
    ],
    highlights: [
        'Helped optimize data pipelines serving large public health datasets',
        'Supported enhancements to performance and data publishing workflows',
        'Assisted cross-system integration using secure APIs',
        'Contributed to efforts improving system stability and data access during high-demand periods',
    ],
    impact:
        'Our support strengthens CDC’s ability to share vital health data through stable, efficient systems—augmenting public access, data-driven decision-making, and infrastructure resilience during critical public health initiatives.',
    },
    {
      name: 'National Institutes of Health (NIH)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/NIH_2013_logo_vertical.svg',
      abbrev: 'NIH',
      about:
        'Working in partnership with Tyler Technologies, we contributed to the enhancement of NIH’s research data infrastructure on the Socrata platform. Our team focused on improving data management and accessibility for scientific datasets supporting biomedical research and public health initiatives.',
      services: [
        'Research Data Platform Engineering',
        'Data Management & Accessibility',
        'Workflow Automation',
        'System Optimization & Support',
      ],
      highlights: [
        'Enhanced platform performance for high-volume research data publishing',
        'Implemented secure, role-based data workflows for scientific users',
        'Supported data sharing and integration across multiple research programs',
        'Improved reliability and accessibility of NIH open data portals',
      ],
      impact:
        'Our contributions helped strengthen NIH’s open data ecosystem, enabling researchers and the public to access reliable, well-structured biomedical data—advancing collaboration and accelerating research outcomes across institutions.',
    },
    {
    name: 'U.S. Department of Transportation (DOT)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Seal_of_the_United_States_Department_of_Transportation.svg',
    abbrev: 'DOT',
    about:
        'Working with Tyler Technologies, we have supported efforts to modernize DOT’s data infrastructure and advance open data initiatives using Socrata-based systems. Our focus is on improving accessibility, usability, and performance for critical transportation datasets exposed to the public.',
    services: [
        'Transportation Data Platform Engineering',
        'Open Data Portal Development',
        'Data Visualization & Analytics',
        'Legacy System Modernization',
    ],
    highlights: [
        'Assisted legacy systems modernization to boost stability and maintainability',
        'Contributed to developing visualization components for transportation datasets',
        'Supported improvements to data publishing workflows and metadata integrity',
        'Aided transparency by improving access to transportation safety and infrastructure data',
    ],
    impact:
        'Our work helps DOT expand the reach and reliability of its open data platforms—supporting better access to transportation data by researchers, policymakers, and the public for informed decision-making.',
    },
    {
    name: 'U.S. Department of Veterans Affairs (VA)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/US_Department_of_Veterans_Affairs_logo.svg',
    abbrev: 'VA',
    about:
        'In collaboration with Tyler Technologies, we supported data visualization and reporting efforts for the U.S. Department of Veterans Affairs via the Socrata platform. Our focus has been on enabling state-level insights and improving accessibility of veterans program data.',
    services: [
        'Data Visualization & Reporting',
        'Platform Engineering & Optimization',
        'Public Data Access Improvements',
        'System Integration & Maintenance',
    ],
    highlights: [
        'Contributed to interactive State Summary Reports (e.g. via mapping tools)',
        'Improved presentation and usability of veterans’ program data',
        'Supported structured workflows for consistent data publishing',
        'Aided performance and reliability enhancements for public datasets',
    ],
    impact:
        'Our work supports more accessible, data-driven insight into veterans’ services—helping analysts, policymakers, and the public better understand and act on VA datasets nationwide.',
    },
    {
      name: 'U.S. Department of Health and Human Services (HHS)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/US-DeptOfHHS-Logo.svg',
      abbrev: 'HHS',
      about:
        'In collaboration with Tyler Technologies, we provide ongoing engineering and data infrastructure support for the U.S. Department of Health and Human Services on the Socrata platform. Our team focuses on building scalable ingestion systems and sustainable data management pipelines to handle one of the largest public data portfolios in government.',
      services: [
        'Large-Scale Data Platform Engineering',
        'Automated Data Ingestion & Validation',
        'Data Governance & Quality Management',
        'Public Data Portal Development',
      ],
      highlights: [
        'Developed repeatable ingestion pipelines supporting over 15,000 published assets',
        'Implemented automated data validation workflows ensuring accuracy and consistency',
        'Built infrastructure to scale toward a long-term goal of 1 million datasets',
        'Maintained stable, high-availability operations for critical data publishing systems',
      ],
      impact:
        'Our work with HHS strengthens one of the most significant public data programs in the United States—enabling reliable, transparent access to vital health and human services data for researchers, policymakers, and the public.',
    },
    {
    name: 'European Commission (Cohesion Open Data)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/European_Commission.svg',
    abbrev: 'EC',
    about:
        'Acting as the dedicated development and maintenance team for the European Commission’s Cohesion Open Data platform, we support transparency by helping ensure EU budget data is published openly and reliably. Our ongoing efforts focus on performance, multilingual access, and platform resilience for millions of users across Europe.',
    services: [
        'Platform Development & Maintenance',
        'Quarterly Release Management',
        'EU Data Standards Implementation',
        'Monitoring, Security & Reliability',
    ],
    highlights: [
        'Ensured continuous availability for a complex, multilingual EU open data portal',
        'Delivered regular quarterly releases with no major incidents (P1) in recent engagements',
        'Implemented comprehensive multilingual support across all 27 EU member states',
        'Upgraded infrastructure to support long-term scalability and align with EU open data standards'
    ],
    impact:
        'Our partnership with the European Commission promotes transparency and public confidence—giving EU citizens accessible insight into how cohesion funds are allocated and spent, and reinforcing accountability in public spending across regions.'
    },
    {
    name: 'Socrata',
    logo: 'https://logodix.com/logo/1608921.jpg',
    abbrev: 'SOC',
    about:
        'As long-term partners with Socrata (now part of Tyler Technologies), we have supported the platform’s extension and development across many government deployments. Our team brings deep expertise in customizing the platform, building integrations, and helping public-sector clients maximize Socrata for open data initiatives.',
    services: [
        'Platform Extension & Customization',
        'CMS Development & Integration',
        'API Development & Optimization',
        'Client Implementation & Training',
    ],
    highlights: [
        'Developed custom tools that extend core Socrata functionality',
        'Built a Grapes.js-based CMS integration for select Socrata environments',
        'Delivered implementation and support for multiple government clients',
        'Supported improvements in architecture and performance optimization'
    ],
    impact:
        'Our partnership with Socrata helps many government agencies better publish, manage, and visualize open data—fostering greater transparency, efficiency, and civic engagement through improved technology.',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const logos = sectionRef.current?.querySelectorAll('.client-logo')
    logos?.forEach((logo) => observer.observe(logo))

    return () => observer.disconnect()
  }, [])

  const handleLogoClick = (client: Client) => {
    setSelectedOrg(client)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    // Delay clearing selectedOrg to allow fade-out animation
    setTimeout(() => setSelectedOrg(null), 300)
  }

  return (
    <>
      <section className="border-brand-navy/10 bg-brand-white border-y py-20">
        <div className="container" ref={sectionRef}>
          {/* Header */}
          <div className="mb-16 text-center">
            <p className="text-brand-warm mb-2 text-sm font-semibold tracking-wider uppercase">
              Trusted By
            </p>
            <h2 className="text-brand-black text-3xl font-bold md:text-4xl">
              Leading Organizations
            </h2>
            <p className="text-brand-black/70 mx-auto mt-4 max-w-2xl text-lg">
              Click any logo to learn more about our partnership and the impact we&apos;ve delivered
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client, index) => (
              <button
                key={client.name}
                onClick={() => handleLogoClick(client)}
                className="client-logo group focus:ring-brand-cyan flex items-center justify-center opacity-0 transition-all hover:scale-110 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`Learn more about ${client.name}`}
              >
                {client.logo ? (
                  <div className="relative h-16 w-full grayscale transition-all duration-300 group-hover:grayscale-0 md:h-20">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                ) : (
                  <div className="bg-brand-navy text-brand-white group-hover:bg-brand-cyan flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold transition-all">
                    {client.abbrev}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Footer Note
          <div className="mt-16 rounded-lg border border-brand-cyan/20 bg-brand-cyan/5 p-6 text-center">
            <p className="text-sm text-brand-black/70">
              <span className="font-semibold text-brand-cyan">Primary Partner:</span> Many of these
              engagements are supported through our partnership with Tyler Technologies, Inc.
            </p>
          </div> */}
        </div>
      </section>

      {/* Organization Modal */}
      <OrganizationModal isOpen={modalOpen} onClose={handleCloseModal} organization={selectedOrg} />
    </>
  )
}
