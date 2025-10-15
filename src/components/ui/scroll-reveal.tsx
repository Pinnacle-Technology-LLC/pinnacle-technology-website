'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Props for the ScrollReveal component
 */
interface ScrollRevealProps {
  /** Content to animate */
  children: React.ReactNode
  /** Direction from which the content animates in */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** Delay before animation starts (in seconds) */
  delay?: number
  /** Duration of animation (in seconds) */
  duration?: number
  /** Additional CSS classes */
  className?: string
}

/**
 * ScrollReveal component that animates content when it enters the viewport
 *
 * Uses Intersection Observer to detect when content is visible,
 * then animates from the specified direction with fade-in effect.
 *
 * @example
 * ```tsx
 * <ScrollReveal direction="up" delay={0.2}>
 *   <h1>Animated Title</h1>
 * </ScrollReveal>
 * ```
 */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  const offset = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
