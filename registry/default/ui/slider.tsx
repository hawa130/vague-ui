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
      <SliderPrimitive.Range className={cn('absolute h-full bg-primary-9', rangeClassname)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="bg-light-1 hover:bg-light-2 active:bg-light-3 block h-5 w-5 cursor-pointer rounded-full border border-input shadow-md ring-offset-background transition hover:border-ring-accent focus-visible:border-ring-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
