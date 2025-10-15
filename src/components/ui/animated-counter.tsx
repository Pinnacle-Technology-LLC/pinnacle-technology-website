'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  className?: string
}

/**
 * Animated counter component with reduced-motion support
 * Counts from 'from' to 'to' over 'duration' ms
 * Respects prefers-reduced-motion setting
 */
export function AnimatedCounter({
  from,
  to,
  duration = 2000,
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Set up Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  useEffect(() => {
    if (!isVisible) return

    // If reduced motion, just set final value
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(to)
      return
    }

    // Animate the counter
    const startTime = Date.now()
    const difference = to - from

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (easeOutCubic)
      const eased = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(from + difference * eased)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(to)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
