import { ScrollReveal } from '@/components/ui'
import { reasons } from '@/lib/data/why-pinnacle'

/**
 * WhyPinnacle Component
 *
 * Displays key differentiators and unique value propositions in a grid layout.
 * Features numbered cards with hover effects and scroll-triggered animations.
 *
 * Data is pulled from `src/lib/data/why-pinnacle.ts`
 *
 * @component
 * @example
 * ```tsx
 * <WhyPinnacle />
 * ```
 */
export function WhyPinnacle() {
  return (
    <section className="bg-brand-cream py-24">
      <div className="container">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-brand-warm mb-2 text-sm font-semibold tracking-wider uppercase">
              Why Partners Choose Pinnacle Technology
            </p>
            <h2 className="text-brand-black mb-4 text-4xl font-bold md:text-5xl">
              Engineered for Stability. Delivered for Results.
            </h2>
            <p className="text-brand-black/70 mx-auto max-w-2xl text-lg">
              We combine deep technical expertise with hands-on experience delivering modern data
              platforms for government and enterprise.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15} className="h-full">
              <div className="group border-brand-navy/10 bg-brand-white hover:border-brand-cyan relative h-full overflow-hidden rounded-lg border p-8 transition-all hover:shadow-2xl">
                {/* Number Badge */}
                <div className="bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-white mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold transition-all group-hover:scale-110">
                  {reason.number}
                </div>

                {/* Title */}
                <h3 className="text-brand-black group-hover:text-brand-cyan mb-4 text-2xl font-bold transition-colors">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-brand-black/70 leading-relaxed">{reason.description}</p>

                {/* Decorative Element */}
                <div className="bg-brand-cyan/5 absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full transition-transform group-hover:scale-150" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
