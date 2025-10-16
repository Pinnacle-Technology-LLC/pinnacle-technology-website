import Link from 'next/link'

/**
 * CTA (Call-to-Action) Component
 *
 * Final homepage section encouraging users to contact or view work.
 * Features background image with gradient overlay and primary action buttons.
 *
 * @component
 * @example
 * ```tsx
 * <CTA />
 * ```
 */
export function CTA() {
  return (
    <section className="bg-brand-navy relative overflow-hidden py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop")',
        }}
      />

      {/* Gradient Overlay */}
      <div className="from-brand-navy/95 via-brand-navy/85 to-brand-navy/95 absolute inset-0 bg-gradient-to-r" />

      {/* Pattern Overlay */}
      <div className="bg-topographic absolute inset-0 opacity-20" />

      {/* Content */}
      <div className="relative z-10 container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading */}
          <h2 className="text-brand-white mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Ready to build your next
            <span className="text-brand-cyan block">data platform?</span>
          </h2>

          {/* Description */}
          <p className="text-brand-cream/90 mb-10 text-xl leading-relaxed md:text-2xl">
            Let’s talk about your data goals and explore how we can help you deliver secure,
            scalable systems that last.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group bg-brand-cyan text-brand-white hover:bg-brand-cyan-dark hover:shadow-brand-cyan/30 inline-flex items-center gap-2 rounded-sm px-10 py-5 text-lg font-semibold transition-all hover:shadow-2xl"
            >
              Start a Conversation
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
            </Link>

            {/* <Link
              href="/work"
              className="group border-brand-white/30 text-brand-white hover:border-brand-white hover:bg-brand-white/10 inline-flex items-center gap-2 rounded-sm border-2 px-10 py-5 text-lg font-semibold backdrop-blur-sm transition-all"
            >
              View Our Work
            </Link> */}
          </div>

          {/* Trust Indicators */}
          <div className="border-brand-white/20 text-brand-cream/70 mt-12 flex flex-wrap items-center justify-center gap-8 border-t pt-8 text-sm">
            <div className="flex items-center gap-2">
              <svg className="text-brand-cyan h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Trusted by Government Agencies</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-brand-cyan h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="text-brand-cyan h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Proven Track Record</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
