'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-9 data-[state=unchecked]:bg-input hover:data-[state=unchecked]:bg-input/90 active:data-[state=unchecked]:bg-ring hover:data-[state=checked]:bg-primary-9/90 active:data-[state=checked]:bg-primary-10 group',
  {
    variants: {
      size: {
        md: 'h-6 w-11',
        sm: 'h-5 w-9',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-[transform,width] duration-200',
  {
    variants: {
      size: {
        md: 'h-5 w-5 group-active:w-6 group-active:data-[state=checked]:translate-x-4 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        sm: 'h-4 w-4 group-active:w-5 group-active:data-[state=checked]:translate-x-3 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & VariantProps<typeof switchVariants>
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitives.Root className={cn(switchVariants({ size, className }))} {...props} ref={ref}>
    <SwitchPrimitives.Thumb className={switchThumbVariants({ size })} />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
