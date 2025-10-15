'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { handleSectionLink } from '@/lib/scroll'

/**
 * Hero Section Component
 *
 * Large hero section with parallax background, headline, and call-to-action buttons.
 * Features smooth scroll effect on background and navigation to other sections.
 *
 * @component
 * @example
 * ```tsx
 * <Hero />
 * ```
 */
export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrolled = window.scrollY
      const heroElement = heroRef.current
      const parallaxSpeed = 0.5
      heroElement.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-brand-navy relative overflow-hidden">
      {/* Background with Parallax */}
      <div ref={heroRef} className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="from-brand-navy via-brand-navy-light to-brand-navy absolute inset-0 bg-gradient-to-br" />

        {/* Topographic Pattern Overlay */}
        <div className="bg-topographic absolute inset-0 opacity-10" />

        {/* Gradient Mesh */}
        <div className="bg-gradient-mesh absolute inset-0 opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center mt-16">
        <div className="container py-24">
          <div className="max-w-6xl">
            {/* Large Blend-Mode Headline */}
            <h1 className="text-display blend-difference text-brand-white mb-6">
              Platform Engineering
              <br />
              For Open Data
            </h1>

            {/* Subheadline */}
            <p className="text-brand-cream mb-12 max-w-2xl text-2xl leading-relaxed font-light md:text-3xl">
              We partner with organizations to help extend and modernize their data platforms, integrating automation,  AI, and secure engineering practices that scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/#work"
                onClick={(e) => handleSectionLink(e, 'work', pathname)}
                className="group bg-brand-cyan text-brand-white hover:bg-brand-cyan-dark hover:shadow-brand-cyan/30 inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold transition-all hover:shadow-2xl"
              >
                View Our Work
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

              <Link
                href="/contact"
                className="group border-brand-white/30 text-brand-white hover:border-brand-white hover:bg-brand-white/10 inline-flex items-center justify-center gap-2 border-2 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="text-brand-white/60 h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
