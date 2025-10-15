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
        'Through our ongoing partnership with Tyler Technologies, we provide software development and consulting services that strengthen and extend the capabilities of their Socrata platform. Our work supports a broad range of government clients helping agencies publish, manage, and visualize open data with greater efficiency and reliability.',
      services: [
        'Full-Stack Platform Development',
        'CMS Implementation & Integration',
        'Feature Development & Enhancement',
        'Technical Architecture & Design',
        'Client Implementation Support',
        'Automation & Data Workflow Optimization',
      ],
      highlights: [
        'Implemented and integrated the Grapes.js content management system used across the Socrata platform',
        'Developed custom tools and enhancements that expand Socrata’s out-of-the-box functionality',
        'Delivered ongoing improvements to data workflows and publishing performance',
        'Supported implementation and onboarding for multiple public-sector clients across federal, state, and international programs',
      ],
      impact:
        'Our collaboration with Tyler Technologies enhances the stability, usability, and reach of the Socrata platform empowering hundreds of government agencies to manage and share data more effectively, improving transparency and public access to critical information.',
    },
    {
      name: 'Centers for Disease Control and Prevention (CDC)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/US_CDC_logo.svg',
      abbrev: 'CDC',
      about:
        'In collaboration with Tyler Technologies, we provided engineering support for CDC’s public health data initiatives built on the Socrata platform. Our team contributed to the development and optimization of data systems that enable timely, accurate, and accessible health information for millions of users.',
      services: [
        'Data Platform Engineering',
        'Public Health Data System Support',
        'API Integration & Automation',
        'Performance Optimization & Reliability',
      ],
      highlights: [
        'Optimized data pipelines powering high-volume public health datasets',
        'Enhanced platform performance and data publishing workflows',
        'Supported cross-agency data integrations through secure APIs',
        'Improved data accessibility and system uptime during pandemic response',
      ],
      impact:
        'Our work strengthened CDC’s capacity to share vital health data through stable, high-performing systems—supporting evidence-based decision-making and improving public access to health information during critical moments.',
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
        'In collaboration with Tyler Technologies, we supported the modernization of DOT’s data infrastructure and open data initiatives on the Socrata platform. Our work centered on improving accessibility, usability, and performance for critical transportation datasets made available to the public.',
      services: [
        'Transportation Data Platform Engineering',
        'Open Data Portal Development',
        'Data Visualization & Analytics',
        'Legacy System Modernization',
      ],
      highlights: [
        'Enhanced legacy data systems for greater stability and maintainability',
        'Developed and refined visualization components for transportation datasets',
        'Optimized data publishing workflows and metadata integrity',
        'Supported transparency efforts by improving access to transportation safety and infrastructure data',
      ],
      impact:
        'Our contributions helped DOT expand the reach and reliability of its open data platforms—empowering researchers, policymakers, and the public to make data-driven decisions that advance transportation safety and efficiency nationwide.',
    },
    {
      name: 'U.S. Department of Veterans Affairs (VA)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/US_Department_of_Veterans_Affairs_logo.svg',
      abbrev: 'VA',
      about:
        'In partnership with Tyler Technologies, we supported data visualization and reporting initiatives for the U.S. Department of Veterans Affairs on the Socrata platform. Our work focused on improving access to state-level insights and enabling more effective communication of veterans’ services and program outcomes.',
      services: [
        'Data Visualization & Reporting',
        'Platform Engineering & Optimization',
        'Public Data Access Improvements',
        'System Integration & Maintenance',
      ],
      highlights: [
        'Developed interactive State Summary Reports using tools such as Mapbox',
        'Enhanced presentation and usability of veterans’ program data',
        'Implemented structured data workflows to support accurate, consistent publishing',
        'Improved system performance and reliability for public-facing datasets',
      ],
      impact:
        'Our collaboration with the VA helped deliver clear, data-driven insights into veteran services nationwide—empowering policymakers, analysts, and the public to better understand and improve outcomes for America’s veterans.',
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
        "Serving as the dedicated development and maintenance team for the European Commission's Cohesion Open Data platform, we help ensure transparency in how EU budget funds are allocated and spent across member states. Our ongoing work focuses on performance, reliability, and accessibility for millions of users across Europe.",
      services: [
        'Platform Development & Maintenance',
        'Quarterly Release Management',
        'EU Data Standards Implementation',
        'Monitoring, Security & Reliability',
      ],
      highlights: [
        'Maintained uninterrupted service for a high-traffic, multi-language EU data platform',
        'Delivered up to 12 planned releases per quarter with zero priority-one incidents',
        'Implemented multilingual support across all EU member states',
        'Enhanced infrastructure for long-term sustainability and compliance with EU open data standards',
      ],
      impact:
        'Our collaboration with the European Commission supports transparency and accountability by giving EU citizens clear, reliable access to data on how cohesion funds are invested across regions—strengthening trust and demonstrating measurable value in public spending.',
    },
    {
      name: 'Socrata',
      logo: 'https://logodix.com/logo/1608921.jpg',
      abbrev: 'SOC',
      about:
        "As long-term partners with Socrata (now part of Tyler Technologies), we have contributed significantly to the platform's evolution and ecosystem. Our team has deep expertise in extending Socrata's capabilities, implementing custom solutions, and supporting government clients in leveraging the platform for open data initiatives.",
      services: [
        'Platform Extension & Customization',
        'CMS Development & Integration',
        'API Development & Optimization',
        'Client Implementation & Training',
      ],
      highlights: [
        'Developed and integrated custom tools that extend core platform functionality',
        'Built the Grapes.js-based content management system used across Socrata deployments',
        'Delivered implementation and technical support for dozens of government clients',
        'Contributed to platform architecture improvements and performance optimization',
      ],
      impact:
        "Our deep partnership with Socrata has strengthened the platform's capabilities and helped hundreds of government agencies worldwide publish, manage, and visualize open data more effectively—advancing transparency and civic engagement through better technology.",
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
