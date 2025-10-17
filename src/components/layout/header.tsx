'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMobileMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { href: '/#work', label: 'Work', sectionId: 'work' },
    { href: '/#services', label: 'Services', sectionId: 'services' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isMenuOpen
          ? 'bg-brand-navy/95 shadow-lg'
          : scrolled || pathname !== '/'
            ? 'bg-brand-navy/95 shadow-lg backdrop-blur-md'
            : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" onClick={closeMobileMenu}>
          <div className="flex items-baseline gap-2">
            <span className="text-brand-white group-hover:text-brand-cyan text-2xl font-bold tracking-tight transition-colors">
              <span className="md:hidden">Pinnacle Technology</span>
              <span className="hidden md:inline">Pinnacle Technology LLC</span>
            </span>
            <span className="text-brand-cream-dark hidden text-xs font-medium md:inline">v2025</span>
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="border-brand-white/20 hover:border-brand-cyan hover:bg-brand-white/5 relative flex h-10 w-10 items-center justify-center rounded-sm border transition-colors md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center">
            <span
              className={`bg-brand-white mb-1 block h-0.5 w-5 transform transition-all duration-300 ${
                isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`bg-brand-white mb-1 block h-0.5 w-5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`bg-brand-white block h-0.5 w-5 transform transition-all duration-300 ${
                isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
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

      {/* Mobile Menu - Full Screen with Blur */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Full-Screen Backdrop with Enhanced Blur */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{
                opacity: 1,
                backdropFilter: 'blur(20px)',
                transition: {
                  opacity: { duration: 0.3, ease: 'easeOut' },
                  backdropFilter: { duration: 0.4, ease: 'easeOut' }
                }
              }}
              exit={{
                opacity: 0,
                backdropFilter: 'blur(0px)',
                transition: {
                  duration: 0.25,
                  ease: 'easeIn'
                }
              }}
              className="fixed inset-0 z-40 bg-brand-navy/50 md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
              style={{ willChange: 'opacity, backdrop-filter' }}
            />

            {/* Menu Panel - Centered Content with Cool Animation */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                  opacity: { duration: 0.3 },
                  filter: { duration: 0.3 }
                }
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
                filter: 'blur(5px)',
                transition: {
                  duration: 0.2,
                  ease: 'easeIn'
                }
              }}
              className="fixed inset-x-4 bottom-6 top-24 z-[60] overflow-auto rounded-2xl border border-brand-cyan/30 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light shadow-2xl shadow-brand-cyan/30 backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:top-28 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              style={{ willChange: 'transform, opacity, filter' }}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobileMenu}
                className="border-brand-cyan/30 hover:border-brand-cyan hover:bg-brand-cyan/10 absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-all sm:right-6 sm:top-6"
                aria-label="Close menu"
              >
                <svg
                  className="text-brand-cyan h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Menu Content - Vertically Centered */}
              <nav className="flex min-h-full flex-col items-center justify-center px-6 py-8 sm:px-8 sm:py-12">
                <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
                  {navLinks.map((link, i) => {
                    const isActive =
                      (link.sectionId &&
                        pathname === '/' &&
                        typeof window !== 'undefined' &&
                        window.location.hash === `#${link.sectionId}`) ||
                      pathname === link.href
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: 'spring',
                            stiffness: 400,
                            damping: 25,
                            delay: 0.15 + i * 0.08
                          }
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                          scale: 0.95,
                          transition: {
                            duration: 0.15,
                            ease: 'easeIn'
                          }
                        }}
                        className="w-full text-center"
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            if (link.sectionId) {
                              handleSectionLink(e, link.sectionId, pathname)
                            }
                            closeMobileMenu()
                          }}
                          className={`group relative inline-block text-2xl font-light transition-all duration-300 sm:text-3xl ${
                            isActive
                              ? 'text-brand-cyan'
                              : 'text-brand-cream hover:translate-x-2 hover:text-brand-cyan'
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <motion.span
                              layoutId="activeIndicator"
                              className="bg-brand-cyan absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full"
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 350,
                        damping: 25,
                        delay: 0.15 + navLinks.length * 0.08
                      }
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      transition: {
                        duration: 0.15,
                        ease: 'easeIn'
                      }
                    }}
                    className="mt-4 w-full max-w-xs"
                  >
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="bg-brand-cyan text-brand-white hover:bg-brand-cyan-dark hover:shadow-brand-cyan/30 block rounded-sm px-8 py-4 text-center text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                      Let&apos;s Talk
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
