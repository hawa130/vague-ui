'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const tabsListVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      default: 'h-9 rounded-lg bg-segment p-1',
      line: 'gap-1 relative after:z-[-1] after:absolute after:bottom-0 after:inset-x-0 after:border-b after:border-input',
      button: 'gap-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const tabsTriggerVariants = cva(
  'px-3 inline-flex items-center justify-center whitespace-nowrap text-sm transition focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'text-segment-fg py-1 rounded-md font-medium ring-offset-background focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 data-[state=active]:bg-segment-active data-[state=active]:text-segment-active-fg data-[state=active]:shadow hover:data-[state=inactive]:bg-accent hover:data-[state=inactive]:text-accent-fg',
        line: 'text-foreground/70 pt-1.5 pb-3 rounded-md relative z-0 data-[state=active]:font-medium hover:text-accent-fg data-[state=active]:text-primary-11 before:z-[-1] before:absolute before:inset-x-0 before:top-0 before:bottom-1.5 before:rounded-md before:transition-colors hover:before:bg-accent-light hover:data-[state=active]:before:bg-primary-3 data-[state=active]:after:absolute data-[state=active]:after:h-[3px] data-[state=active]:after:bg-primary-9 data-[state=active]:after:bottom-0 data-[state=active]:after:inset-x-3 data-[state=active]:after:rounded-full focus-visible:before:ring-2 focus-visible:before:ring-ring',
        button:
          'h-9 px-3 rounded-md text-foreground/70 data-[state=active]:font-medium data-[state=active]:text-primary-11 data-[state=active]:bg-primary-3 hover:data-[state=inactive]:bg-accent-light hover:data-[state=inactive]:text-accent-fg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const TabsListVariantContext = React.createContext<Pick<VariantProps<typeof tabsListVariants>, 'variant'>>({
  variant: 'default',
})

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>
>(({ className, variant, children, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn(tabsListVariants({ variant, className }))} {...props}>
    <TabsListVariantContext.Provider value={{ variant }}>{children}</TabsListVariantContext.Provider>
  </TabsPrimitive.List>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>
>(({ className, variant: customVariant, ...props }, ref) => {
  const { variant: listVariant } = React.useContext(TabsListVariantContext)
  const variant = customVariant || listVariant
  return <TabsPrimitive.Trigger ref={ref} className={cn(tabsTriggerVariants({ variant, className }))} {...props} />
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
