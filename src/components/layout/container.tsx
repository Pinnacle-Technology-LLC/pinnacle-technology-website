import { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/**
 * Container component for consistent max-width and padding
 * Matches the `.container` class from globals.css
 */
export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`container ${className}`}>{children}</div>
}
