'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const segmentedVariants = cva(
  'relative inline-flex items-center justify-center rounded-lg p-1 bg-segment text-segment-fg',
  {
    variants: {
      size: {
        sm: 'h-8 [&>button]:h-6 [&>button]:text-xs [&>button]:px-2.5',
        md: 'h-9 [&>button]:h-7 [&>button]:text-sm [&>button]:px-3',
        lg: 'h-10 [&>button]:h-8 [&>button]:text-sm [&>button]:px-3.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export const Segmented = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & VariantProps<typeof segmentedVariants>
>(({ className, size, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(segmentedVariants({ size }), className)}
      {...props}
      ref={ref}
    />
  )
})
Segmented.displayName = 'Segmented'

export const SegmentedItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'relative data-[state=checked]:z-[1] inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-segment-active data-[state=checked]:text-segment-active-fg data-[state=checked]:shadow before:absolute before:-left-[0.5px] before:h-5 not-first:before:data-[state=unchecked]:border-l before:transition-colors before:[&+input+button]:data-[state=checked]:border-l-transparent hover:data-[state=unchecked]:bg-accent hover:data-[state=unchecked]:text-accent-fg active:data-[state=unchecked]:bg-accent-dark',
        className,
      )}
      {...props}
    />
  )
})
SegmentedItem.displayName = 'SegmentedItem'
