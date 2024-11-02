'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { rangeClassname?: string }
>(({ className, rangeClassname, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted">
      <SliderPrimitive.Range className={cn('bg-primary-9 absolute h-full', rangeClassname)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 cursor-pointer rounded-full border border-input bg-background shadow-md ring-offset-background transition-colors hover:border-ring-accent hover:bg-accent-light focus-visible:border-ring-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0 active:bg-accent-dark disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
