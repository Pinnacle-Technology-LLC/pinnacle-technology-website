'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { featuredProjects } from '@/lib/data/featured-work'

/**
 * FeaturedWork Component
 *
 * Displays a grid of featured case studies with animated metrics and scroll reveals.
 * Each card links to the full case study page and includes gradient overlays and hover effects.
 *
 * Data is pulled from `src/lib/data/featured-work.ts`
 *
 * @component
 * @example
 * ```tsx
 * <FeaturedWork />
 * ```
 */
export function FeaturedWork() {
  return (
    <section id="work" className="bg-brand-cream py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-brand-warm mb-2 text-sm font-semibold tracking-wider uppercase">
              Our Impact
            </p>
            <h2 className="text-brand-black mb-4 text-4xl font-bold md:text-5xl">Featured Work</h2>
            <p className="text-brand-black/70 mx-auto max-w-2xl text-lg">
              Where engineering precision meets real-world impact, from federal data platforms to EU
              transparency systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.15}>
              <Link href={`/work/${project.slug}`} className="group block h-full">
                <div className="card-hover relative h-full overflow-hidden rounded-lg shadow-lg">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />

                  {/* Pattern Overlay */}
                  <div className="bg-topographic absolute inset-0 opacity-10" />

                  {/* Content */}
                  <div className="relative flex h-full min-h-[400px] flex-col justify-between p-8">
                    {/* Top Content */}
                    <div>
                      <span className="bg-brand-white/20 text-brand-white mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
                        {project.client}
                      </span>

                      <h3 className="text-brand-white mb-3 text-2xl leading-tight font-bold transition-transform group-hover:translate-x-1">
                        {project.title}
                      </h3>

                      <p className="text-brand-white/90 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Content - Metrics */}
                    <div className="border-brand-white/30 space-y-2 border-t pt-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-baseline justify-between">
                          <span className="text-brand-white/80 text-xs font-medium tracking-wider uppercase">
                            {metric.label}
                          </span>
                          <span className="text-brand-white text-lg font-bold">
                            {metric.isCounter ? (
                              <AnimatedCounter
                                from={0}
                                to={metric.value as number}
                                suffix={metric.suffix}
                              />
                            ) : (
                              metric.value
                            )}
                          </span>
                        </div>
                      ))}

                      {/* View Link */}
                      <div className="text-brand-white flex items-center gap-2 pt-2 text-xs font-semibold tracking-wider uppercase transition-all group-hover:gap-3">
                        <span>View Featured Work</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
