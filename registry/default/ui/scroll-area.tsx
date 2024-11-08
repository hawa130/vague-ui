'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/lib/utils'

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  viewportRef?: React.ForwardedRef<HTMLDivElement>
  onScrollPositionChange?: (position: { x: number; y: number }) => void
  orientation?: 'horizontal' | 'vertical'
  scrollBarClassName?: string
}

const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, ScrollAreaProps>(
  (
    {
      className,
      viewportRef,
      onScrollPositionChange,
      orientation = 'vertical',
      scrollBarClassName,
      children,
      ...props
    },
    ref,
  ) => (
    <ScrollAreaPrimitive.Root ref={ref} className={cn('relative overflow-hidden', className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        className="h-full w-full rounded-[inherit] [&>div]:!block"
        onScroll={
          typeof onScrollPositionChange === 'function'
            ? ({ currentTarget }) =>
                onScrollPositionChange({
                  x: currentTarget.scrollLeft,
                  y: currentTarget.scrollTop,
                })
            : undefined
        }
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar className={scrollBarClassName} />
      {orientation === 'horizontal' && <ScrollBar className={scrollBarClassName} orientation="horizontal" />}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  ),
)
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition',
      orientation === 'vertical' && 'h-full w-2 border-l border-l-transparent p-[1px] transition-[width] hover:w-3',
      orientation === 'horizontal' && 'h-2 border-t border-t-transparent p-[1px] transition-[height] hover:h-3',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
