import { type HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

/**
 * Card component for displaying content with consistent styling
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, className = '', children, ...props }, ref) => {
    const baseStyles = 'rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all'
    const hoverStyles = hover ? 'hover:shadow-md hover:border-slate-300' : ''

    return (
      <div ref={ref} className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

/**
 * CardHeader for consistent card titles
 */
export function CardHeader({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

/**
 * CardTitle for consistent card titles
 */
export function CardTitle({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <h3 className={`text-xl font-semibold text-slate-900 ${className}`}>{children}</h3>
}

/**
 * CardContent for card body content
 */
export function CardContent({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`text-slate-700 ${className}`}>{children}</div>
}
