'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  thickness?: number
  size?: string | number
  rounded?: boolean
  rangeClassname?: string
  orientation?: 'horizontal' | 'vertical'
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  (
    {
      className,
      thickness = 6,
      size = '100%',
      value = 0,
      max = 100,
      rangeClassname,
      rounded = true,
      orientation = 'horizontal',
      style,
      ...props
    },
    ref,
  ) => {
    const percentage = (Math.min(value || 0, max) / max) * 100
    return (
      <ProgressPrimitive.Root
        ref={ref}
        max={max}
        className={cn('relative overflow-hidden rounded-full bg-muted', className)}
        style={{
          height: orientation === 'horizontal' ? thickness : size,
          width: orientation === 'vertical' ? thickness : size,
          ...style,
        }}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn('bg-primary transition-[width] duration-200', rounded && 'rounded-full', rangeClassname)}
          style={{
            width: orientation === 'horizontal' ? `${percentage}%` : '100%',
            height: orientation === 'vertical' ? `${percentage}%` : '100%',
          }}
        />
      </ProgressPrimitive.Root>
    )
  },
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
