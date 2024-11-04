'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-input bg-button text-white ring-offset-background transition-colors hover:border-ring-accent hover:bg-accent-light focus-visible:border-ring-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0 active:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-9 data-[state=checked]:bg-primary-9 data-[state=checked]:text-white hover:data-[state=checked]:border-primary-10 hover:data-[state=checked]:bg-primary-10 active:data-[state=checked]:border-primary-11 active:data-[state=checked]:bg-primary-11',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
