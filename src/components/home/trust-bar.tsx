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
        'In our ongoing partnership with Tyler Technologies, we deliver software development and consulting services that enhance and extend the capabilities of the Socrata / Data & Insights platform. Our work helps government agencies publish, manage, and visualize open data more efficiently, with improved scalability and long-term resilience.',
      services: [
        'Full-Stack Platform Development',
        'CMS Implementation and Integration',
        'Feature Development and Enhancements',
        'Technical Architecture and System Design',
        'Client Implementation and Onboarding Support',
        'Automation and Data Workflow Optimization',
      ],
      highlights: [
        'Integrated a custom CMS solution using Grapes.js, now in use across multiple Socrata client environments',
        'Built tailored tools and extensions to enhance core Socrata functionality',
        'Optimized performance and workflows within data publishing and ingestion pipelines',
        'Supported public-sector onboarding and configuration through Tyler-managed infrastructure',
      ],
      impact:
        'Our collaboration strengthens the overall performance and usability of Socrata-powered platforms. By streamlining how agencies manage and share data, we\'re helping to drive greater transparency, accessibility, and operational efficiency in the public sector.',
    },
    {
    name: 'Centers for Disease Control and Prevention (CDC)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/71/US_CDC_logo.svg',
    abbrev: 'CDC',
    about:
        'In collaboration with Tyler Technologies, we\'ve provided engineering expertise to support the CDC\'s public health data initiatives on the Socrata platform. Our focus has been on optimizing data architecture, improving integration processes, and enhancing system workflows to ensure the reliable and timely delivery of critical health information.',
    services: [
        'Data Platform Engineering',
        'Public Health System Support',
        'API Integration and Automation',
        'Performance Optimization and System Reliability',
    ],
    highlights: [
        'Optimized data pipelines managing large-scale public health datasets',
        'Enhanced performance and publishing workflows to improve data delivery',
        'Supported secure cross-system integration through robust APIs',
        'Contributed to system stability and accessibility during peak demand periods',
    ],
    impact:
        'Our work helps the CDC deliver essential health data through reliable, high-performing systems. By improving infrastructure and data workflows, we support greater public access, faster insights, and stronger resilience during high-impact public health efforts.',
    },
    {
      name: 'National Institutes of Health (NIH)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/NIH_2013_logo_vertical.svg',
      abbrev: 'NIH',
      about:
        'In collaboration with Tyler Technologies, we supported the enhancement of the NIH\'s research data infrastructure built on the Socrata platform. Our efforts focused on improving data management, accessibility, and platform performance to better serve the needs of biomedical researchers and public health initiatives.',
      services: [
        'Research Data Platform Engineering',
        'Data Management and Accessibility',
        'Workflow Automation',
        'System Optimization and Ongoing Support',
      ],
      highlights: [
        'Improved platform performance for publishing and managing high-volume research datasets',
        'Implemented secure, role-based workflows tailored for scientific users',
        'Facilitated data sharing and integration across multiple NIH research programs',
        'Enhanced the reliability and usability of NIH\'s open data portals',
      ],
      impact:
        'Our work helps NIH deliver a more robust and accessible open data ecosystem. By enabling reliable access to well-structured biomedical data, we support greater collaboration, accelerate research outcomes, and empower public health advancements across institutions.',
    },
    {
    name: 'U.S. Department of Transportation (DOT)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Seal_of_the_United_States_Department_of_Transportation.svg',
    abbrev: 'DOT',
    about:
        'In partnership with Tyler Technologies, we\'ve supported the modernization of the DOT\'s data infrastructure and the advancement of its open data initiatives through Socrata-based systems. Our work focuses on enhancing accessibility, usability, and performance across critical transportation datasets made available to the public.',
    services: [
        'Transportation Data Platform Engineering',
        'Open Data Portal Development',
        'Data Visualization and Analytics',
        'Legacy System Modernization',
    ],
    highlights: [
        'Supported modernization of legacy systems to improve stability and long-term maintainability',
        'Developed interactive visualization components for key transportation datasets',
        'Enhanced data publishing workflows and ensured stronger metadata integrity',
        'Improved public access to transportation safety and infrastructure data to promote transparency',
    ],
    impact:
        'Our contributions help DOT strengthen the reach and reliability of its open data platforms. By making transportation data more accessible and actionable, we support informed decision-making for researchers, policymakers, and the general public.',
    },
    {
    name: 'U.S. Department of Veterans Affairs (VA)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/US_Department_of_Veterans_Affairs_logo.svg',
    abbrev: 'VA',
    about:
        'In partnership with Tyler Technologies, we contributed to data visualization and reporting initiatives for the U.S. Department of Veterans Affairs using the Socrata platform. Our efforts centered on improving access to veterans program data and enabling state-level insights through more intuitive, reliable tools.',
    services: [
        'Data Visualization and Reporting',
        'Platform Engineering and Optimization',
        'Public Data Access Improvements',
        'System Integration and Ongoing Maintenance',
    ],
    highlights: [
        'Developed interactive State Summary Reports featuring dynamic mapping tools',
        'Enhanced the presentation and usability of veterans\' program data for public consumption',
        'Supported consistent, structured workflows for data publishing',
        'Contributed to improved performance and reliability of public-facing datasets',
    ],
    impact:
        'Our work enables greater transparency and accessibility into veterans\' services nationwide. By delivering clearer insights and more reliable data tools, we help analysts, decision-makers, and the public better understand and act on the information the VA provides.',
    },
    {
      name: 'U.S. Department of Health and Human Services (HHS)',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/US-DeptOfHHS-Logo.svg',
      abbrev: 'HHS',
      about:
        'In collaboration with Tyler Technologies, we provide ongoing engineering and data infrastructure support to the U.S. Department of Health and Human Services through the Socrata platform. Our efforts are focused on building scalable ingestion systems and sustainable data management pipelines to support one of the largest public data portfolios in government.',
      services: [
        'Large-Scale Data Platform Engineering',
        'Automated Data Ingestion and Validation',
        'Data Governance and Quality Management',
        'Public Data Portal Development',
      ],
      highlights: [
        'Developed repeatable ingestion pipelines supporting over 15,000 published assets',
        'Implemented automated validation workflows to ensure data accuracy and consistency',
        'Built scalable infrastructure with a long-term target of supporting up to 1 million datasets',
        'Maintained high-availability operations for critical public data publishing systems',
      ],
      impact:
        'Our work helps power one of the most expansive and impactful public data programs in the U.S. government. By improving scalability, reliability, and data integrity, we enable HHS to provide transparent, accessible information to researchers, policymakers, and the public—driving informed decisions across health and human services initiatives.',
    },
    {
    name: 'European Commission (Cohesion Open Data)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/European_Commission.svg',
    abbrev: 'EC',
    about:
        'As the dedicated development and maintenance team for the European Commission\'s Cohesion Open Data platform, we play a key role in advancing transparency across EU budget reporting. Our work ensures that cohesion fund data is published openly, reliably, and in compliance with EU standards—serving millions of users across Europe.',
    services: [
        'Platform Development and Ongoing Maintenance',
        'Quarterly Release Management',
        'Implementation of EU Data Standards',
        'System Monitoring, Security, and Reliability',
    ],
    highlights: [
        'Maintained high availability for a complex, multilingual open data portal',
        'Delivered consistent quarterly releases with no major (P1) incidents in recent cycles',
        'Implemented full multilingual support for all 27 EU member states',
        'Upgraded infrastructure to support long-term scalability and EU compliance',
    ],
    impact:
        'Our collaboration with the European Commission strengthens public trust by making cohesion fund data accessible, transparent, and easy to understand. The platform empowers EU citizens and stakeholders with insights into how public funds are allocated and spent—supporting accountability and informed decision-making across the region.',
    },
    {
    name: 'Socrata',
    logo: 'https://logodix.com/logo/1608921.jpg',
    abbrev: 'SOC',
    about:
        'As long-term partners with Socrata (now part of Tyler Technologies), we\'ve played a key role in extending and enhancing the platform across a wide range of government deployments. Our team brings deep technical expertise in platform customization, integration development, and client enablement—helping public-sector organizations fully leverage Socrata for their open data goals.',
    services: [
        'Platform Extension and Customization',
        'CMS Development and Integration',
        'API Development and Optimization',
        'Client Implementation and Training',
    ],
    highlights: [
        'Built custom tools to extend Socrata\'s core functionality',
        'Developed and integrated a Grapes.js-based CMS for targeted client environments',
        'Delivered successful implementations and ongoing support for multiple government agencies',
        'Contributed to architectural improvements and performance optimization efforts',
    ],
    impact:
        'Our collaboration with Socrata supports government agencies in delivering more transparent, efficient, and user-friendly open data platforms. By improving how data is published, managed, and visualized, we help drive better engagement and informed decision-making across the public sector.',
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
