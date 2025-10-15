'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { handleSectionLink } from '@/lib/scroll'

/**
 * Header Component
 *
 * Fixed site navigation header with scroll-based styling changes.
 * Features active link highlighting and smooth scroll to hash sections.
 *
 * Features:
 * - Fixed positioning with backdrop blur
 * - Changes background on scroll
 * - Active link indicators
 * - Smooth scroll to sections
 * - Responsive (mobile menu planned)
 *
 * @component
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#work', label: 'Work', sectionId: 'work' },
    { href: '/#services', label: 'Services', sectionId: 'services' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || pathname !== '/'
          ? 'bg-brand-navy/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-brand-white group-hover:text-brand-cyan text-2xl font-bold tracking-tight transition-colors">
              Pinnacle Technology LLC
            </span>
            <span className="text-brand-cream-dark text-xs font-medium">v2025</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              (link.sectionId &&
                pathname === '/' &&
                typeof window !== 'undefined' &&
                window.location.hash === `#${link.sectionId}`) ||
              pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => link.sectionId && handleSectionLink(e, link.sectionId, pathname)}
                className={`relative text-sm font-medium transition-colors ${
                  isActive ? 'text-brand-cyan' : 'text-brand-white/80 hover:text-brand-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="bg-brand-cyan absolute -bottom-1 left-0 h-0.5 w-full" />
                )}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="bg-brand-cyan text-brand-white hover:bg-brand-cyan-dark hover:shadow-brand-cyan/30 rounded-sm px-6 py-2.5 text-sm font-semibold transition-all hover:shadow-lg"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="border-brand-white/20 hover:border-brand-cyan hover:bg-brand-white/5 flex h-10 w-10 items-center justify-center rounded-sm border transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="text-brand-white h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Bottom border */}
      <div
        className={`h-px transition-opacity duration-300 ${
          scrolled || pathname !== '/'
            ? 'bg-brand-white/10 opacity-100'
            : 'bg-brand-white/5 opacity-0'
        }`}
      />
    </header>
  )
}
