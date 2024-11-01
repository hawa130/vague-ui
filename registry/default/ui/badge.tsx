import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold text-xs overflow-hidden overflow-ellipsis whitespace-nowrap',
  {
    variants: {
      variant: {
        filled: 'border border-transparent',
        outline: 'border',
        dashed: 'border border-dashed',
        light: 'border border-transparent',
      },
      color: {
        default: '',
        primary: '',
        destructive: '',
        warning: '',
        success: '',
        info: '',
      },
      size: {
        xs: 'h-4 min-w-4 px-[.1875rem] text-[.625rem] uppercase',
        sm: 'h-[1.125rem] min-w-[1.125rem] px-[.3125rem] text-[.6875rem] uppercase',
        md: 'h-5 px-2',
        lg: 'h-6 px-2.5 text-[.8125rem]',
        xl: 'h-8 px-3 text-sm',
      },
    },
    compoundVariants: [
      {
        variant: ['filled', 'light'],
        color: 'default',
        className: 'bg-secondary text-secondary-fg',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'default',
        className: 'text-foreground',
      },
      {
        variant: 'filled',
        color: 'primary',
        className: 'bg-primary text-fg-invert',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'primary',
        className: 'border-primary text-primary',
      },
      {
        variant: 'light',
        color: 'primary',
        className: 'text-primary bg-primary-light',
      },
      {
        variant: 'filled',
        color: 'destructive',
        className: 'bg-destructive text-fg-invert',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'destructive',
        className: 'border-destructive text-destructive',
      },
      {
        variant: 'light',
        color: 'destructive',
        className: 'text-destructive bg-destructive-light',
      },
      {
        variant: 'filled',
        color: 'warning',
        className: 'bg-warning text-fg-invert',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'warning',
        className: 'border-warning text-warning',
      },
      {
        variant: 'light',
        color: 'warning',
        className: 'text-warning bg-warning-light',
      },
      {
        variant: 'filled',
        color: 'success',
        className: 'bg-success text-fg-invert',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'success',
        className: 'border-success text-success',
      },
      {
        variant: 'light',
        color: 'success',
        className: 'text-success bg-success-light',
      },
      {
        variant: 'filled',
        color: 'info',
        className: 'bg-info text-fg-invert',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'info',
        className: 'border-info text-info',
      },
      {
        variant: 'light',
        color: 'info',
        className: 'text-info bg-info-light',
      },
    ],
    defaultVariants: {
      variant: 'light',
      color: 'default',
      size: 'md',
    },
  },
)

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof badgeVariants> {
  circle?: boolean
}

function Badge({ className, variant, color, size, circle, children, ...props }: BadgeProps) {
  const hasChild = !!children
  return (
    <span
      className={cn(
        badgeVariants({ variant, color, size }),
        !hasChild && {
          'p-0': true,
          'h-1 w-1 min-w-1': size === 'xs',
          'h-1.5 w-1.5 min-w-1.5': size === 'sm',
          'h-2 w-2': size === 'md',
          'h-2.5 w-2.5': size === 'lg',
          'h-3 w-3': size === 'xl',
        },
        circle &&
          hasChild && {
            'w-4': size === 'xs',
            'w-[1.125rem]': size === 'sm',
            'w-5': size === 'md',
            'w-6': size === 'lg',
            'w-8': size === 'xl',
          },
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
