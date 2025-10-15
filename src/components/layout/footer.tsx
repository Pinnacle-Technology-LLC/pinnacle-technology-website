'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { handleSectionLink } from '@/lib/scroll'

/**
 * Footer Component
 *
 * Site footer with company information, navigation links, and contact info.
 * Features a grid layout with company details, quick links, and copyright information.
 *
 * @component
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export function Footer() {
  const pathname = usePathname()
  return (
    <footer className="bg-brand-navy">
      <div className="container py-16">
        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <span className="text-brand-white text-2xl font-bold">Pinnacle Technology LLC</span>
            </Link>
            <p className="text-brand-cream/70 mb-6 leading-relaxed">
              Building the tools that power public data.
            </p>

            {/* Location */}
            <div className="text-brand-cream/60 text-sm">
              <p>Distributed team across</p>
              <p>Hawaii • California • Maryland</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-cyan mb-4 text-sm font-semibold tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#work"
                  onClick={(e) => handleSectionLink(e, 'work', pathname)}
                  className="text-brand-cream/70 hover:text-brand-white transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleSectionLink(e, 'services', pathname)}
                  className="text-brand-cream/70 hover:text-brand-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-brand-cream/70 hover:text-brand-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-cream/70 hover:text-brand-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-cyan mb-4 text-sm font-semibold tracking-wider uppercase">
              Get in Touch
            </h4>
            <div className="text-brand-cream/70 space-y-3">
              <p>Ready to start a project?</p>
              <Link
                href="/contact"
                className="text-brand-white hover:text-brand-cyan inline-flex items-center gap-2 transition-colors"
              >
                <span>Contact Us</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-brand-white/10 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-brand-cream/60 text-sm">
            © {new Date().getFullYear()} Pinnacle Technology LLC. All rights reserved.
          </p>

          {/* Tech Stack Badge */}
          <div className="text-brand-cream/50 flex items-center gap-2 text-xs">
            <span>Built with</span>
            <span className="text-brand-cyan">Next.js 15</span>
            <span>•</span>
            <span className="text-brand-cyan">React 19</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
