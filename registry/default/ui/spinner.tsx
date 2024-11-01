import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

export const Spinner = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      width="24"
      height="24"
      className={cn('animate-spinner-outer origin-center', className)}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <circle
        className="animate-spinner-inner"
        cx="12"
        cy="12"
        r="9.5"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
})
Spinner.displayName = 'Spinner'
