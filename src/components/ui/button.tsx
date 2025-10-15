import { type ButtonHTMLAttributes, forwardRef } from 'react'

/**
 * Props for the Button component
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'ghost'
  /** Size variant of the button */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Button component with consistent styling and variants
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variantStyles = {
      primary: 'bg-slate-900 text-white hover:bg-slate-700',
      secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
      ghost: 'text-slate-900 hover:bg-slate-100',
    }

    const sizeStyles = {
      sm: 'h-9 rounded-md px-3 text-sm',
      md: 'h-10 rounded-lg px-6 text-sm',
      lg: 'h-12 rounded-lg px-8 text-base',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
