'use client'

import { useEffect } from 'react'
import Image from 'next/image'

/**
 * Props for the OrganizationModal component
 */
interface OrganizationModalProps {
  isOpen: boolean
  onClose: () => void
  organization: {
    name: string
    logo: string
    about: string
    services: string[]
    highlights: string[]
    impact: string
  } | null
}

/**
 * OrganizationModal Component
 *
 * Modal dialog displaying detailed information about client partnerships and engagements.
 * Includes services provided, project highlights, and impact summaries.
 *
 * Features:
 * - ESC key to close
 * - Click outside to close
 * - Body scroll locking when open
 * - Keyboard accessible
 *
 * @component
 * @example
 * ```tsx
 * <OrganizationModal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   organization={selectedOrg}
 * />
 * ```
 */
export function OrganizationModal({ isOpen, onClose, organization }: OrganizationModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Lock body scroll
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      // Unlock body scroll
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !organization) return null

  return (
    <div
      className="bg-brand-navy/90 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Content */}
      <div
        className="bg-brand-white animate-fade-in relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="bg-brand-navy/10 text-brand-navy hover:bg-brand-navy hover:text-brand-white absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Body */}
        <div className="p-8 md:p-12">
          {/* Logo Section */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-full max-w-md">
              <Image
                src={organization.logo}
                alt={`${organization.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Organization Name */}
          <h2
            id="modal-title"
            className="text-brand-navy mb-8 text-center text-3xl font-bold md:text-4xl"
          >
            {organization.name}
          </h2>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* About the Engagement */}
            <section>
              <h3 className="text-brand-navy mb-3 text-xl font-semibold">About the Engagement</h3>
              <p className="text-brand-black/70 leading-relaxed">{organization.about}</p>
            </section>

            {/* Services Provided */}
            <section>
              <h3 className="text-brand-navy mb-3 text-xl font-semibold">Services Provided</h3>
              <ul className="space-y-2">
                {organization.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="text-brand-cyan mt-1 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-brand-black/70">{service}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Project Highlights */}
            <section>
              <h3 className="text-brand-navy mb-3 text-xl font-semibold">Project Highlights</h3>
              <ul className="space-y-2">
                {organization.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="text-brand-cyan mt-1 mr-2 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-brand-black/70">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Impact & Results */}
            <section>
              <h3 className="text-brand-navy mb-3 text-xl font-semibold">Impact & Results</h3>
              <p className="text-brand-black/70 leading-relaxed">{organization.impact}</p>
            </section>
          </div>

          {/* Close Button at Bottom */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={onClose}
              className="bg-brand-navy text-brand-white hover:bg-brand-cyan rounded-lg px-8 py-3 font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
