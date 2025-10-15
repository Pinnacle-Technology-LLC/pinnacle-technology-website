import { ScrollReveal } from '@/components/ui'
import { services } from '@/lib/data/services'

/**
 * Services Component
 *
 * Displays a grid of service offerings with icons and descriptions.
 * Features scroll-triggered animations and hover effects.
 *
 * Data is pulled from `src/lib/data/services.tsx`
 *
 * @component
 * @example
 * ```tsx
 * <Services />
 * ```
 */
export function Services() {
  return (
    <section id="services" className="bg-brand-navy relative overflow-hidden py-24">
      {/* Background Pattern */}
      <div className="bg-topographic absolute inset-0 opacity-5" />
      <div className="bg-gradient-mesh absolute inset-0 opacity-30" />

      <div className="relative z-10 container">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-brand-cyan mb-2 text-sm font-semibold tracking-wider uppercase">
              What We Do
            </p>
            <h2 className="text-brand-white mb-4 text-4xl font-bold md:text-5xl">
              Our Capabilities
            </h2>
            <p className="text-brand-cream/80 mx-auto max-w-2xl text-lg">
              Comprehensive platform engineering for public-sector and enterprise systems, spanning
              data migration, automation, integration, and performance optimization.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="group border-brand-white/10 bg-brand-navy-light hover:border-brand-cyan hover:shadow-brand-cyan/20 relative flex h-full flex-col overflow-hidden rounded-lg border p-8 transition-all hover:shadow-2xl">
                {/* Background Pattern on Hover */}
                <div className="bg-topographic absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10" />

                {/* Icon */}
                <div className="bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-white relative mb-6 flex h-20 w-20 items-center justify-center rounded-lg transition-all group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-brand-white group-hover:text-brand-cyan relative mb-3 text-xl font-bold transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-brand-cream/70 relative flex-grow text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
