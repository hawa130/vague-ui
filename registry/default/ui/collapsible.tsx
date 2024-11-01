'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

import { cn } from '@/lib/utils'

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = forwardRef<
  ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      className={cn(
        'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-y-hidden',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
CollapsibleContent.displayName = 'CollapsibleContent'

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
