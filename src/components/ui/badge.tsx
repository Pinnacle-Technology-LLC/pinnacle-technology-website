import { type HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success'
}

/**
 * Badge component for labels and tags
 */
export function Badge({ variant = 'default', className = '', children, ...props }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors'

  const variantStyles = {
    default: 'bg-slate-100 text-slate-800',
    secondary: 'bg-cyan-100 text-cyan-800',
    success: 'bg-green-100 text-green-800',
  }

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}
