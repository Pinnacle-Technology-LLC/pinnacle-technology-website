'use client'

import { useEffect } from 'react'
import { Hero, TrustBar, FeaturedWork, Services, WhyPinnacle, CTA } from '@/components/home'
import { scrollToSection } from '@/lib/scroll'

export default function Home() {
  useEffect(() => {
    // Handle scroll to section on page load if there's a hash in the URL
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.substring(1) // Remove the '#'
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    }
  }, [])

  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedWork />
      <Services />
      <WhyPinnacle />
      <CTA />
    </>
  )
}
