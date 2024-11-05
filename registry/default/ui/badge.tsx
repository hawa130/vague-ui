import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold text-xs overflow-hidden overflow-ellipsis whitespace-nowrap data-[dot]:p-0',
  {
    variants: {
      variant: {
        filled: 'border border-transparent',
        outline: 'border',
        surface: 'border',
        dashed: 'border border-dashed',
        soft: 'border border-transparent',
        dot: 'border border-input text-foreground before:rounded-full before:size-[.625em]',
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
        xs: 'h-4 min-w-4 px-[.1875rem] text-[.625rem] uppercase data-[dot]:size-1 data-[dot]:min-w-1 data-[circle]:w-4',
        sm: 'h-[1.125rem] min-w-[1.125rem] px-[.3125rem] text-[.6875rem] uppercase data-[dot]:size-1.5 data-[dot]:min-w-1.5 data-[circle]:w-[1.125rem]',
        md: 'h-5 px-2 data-[dot]:size-2 data-[circle]:w-5',
        lg: 'h-6 px-2.5 text-[.8125rem] data-[dot]:size-2.5 data-[circle]:w-6',
        xl: 'h-8 px-3 text-sm data-[dot]:size-3 data-[circle]:w-8',
      },
    },
    compoundVariants: [
      {
        variant: 'filled',
        color: 'default',
        className: 'bg-invert-1 text-invert-fg',
      },
      {
        variant: 'soft',
        color: 'default',
        className: 'bg-secondary text-secondary-fg',
      },
      {
        variant: 'surface',
        color: 'default',
        className: 'bg-neutral-2 text-neutral-12 border-neutral-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'default',
        className: 'text-foreground',
      },
      {
        variant: 'filled',
        color: 'primary',
        className: 'bg-primary-9 text-white',
      },
      {
        variant: 'surface',
        color: 'primary',
        className: 'bg-primary-2 text-primary-11 border-primary-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'primary',
        className: 'border-primary-8 text-primary-11',
      },
      {
        variant: 'soft',
        color: 'primary',
        className: 'text-primary-11 bg-primary-3',
      },
      {
        variant: 'filled',
        color: 'destructive',
        className: 'bg-destructive-9 text-white',
      },
      {
        variant: 'surface',
        color: 'destructive',
        className: 'bg-destructive-2 text-destructive-11 border-destructive-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'destructive',
        className: 'border-destructive-8 text-destructive-11',
      },
      {
        variant: 'soft',
        color: 'destructive',
        className: 'text-destructive-11 bg-destructive-3',
      },
      {
        variant: 'filled',
        color: 'warning',
        className: 'bg-warning-9 text-white',
      },
      {
        variant: 'surface',
        color: 'warning',
        className: 'bg-warning-2 text-warning-11 border-warning-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'warning',
        className: 'border-warning-8 text-warning-11',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'text-warning-11 bg-warning-3',
      },
      {
        variant: 'filled',
        color: 'success',
        className: 'bg-success-9 text-white',
      },
      {
        variant: 'surface',
        color: 'success',
        className: 'bg-success-2 text-success-11 border-success-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'success',
        className: 'border-success-8 text-success-11',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'text-success-11 bg-success-3',
      },
      {
        variant: 'filled',
        color: 'info',
        className: 'bg-info-9 text-white',
      },
      {
        variant: 'surface',
        color: 'info',
        className: 'bg-info-2 text-info-11 border-info-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'info',
        className: 'border-info-8 text-info-11',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'text-info-11 bg-info-3',
      },
      {
        variant: 'dot',
        color: 'default',
        className: 'before:bg-invert-1',
      },
      {
        variant: 'dot',
        color: 'primary',
        className: 'before:bg-primary-9',
      },
      {
        variant: 'dot',
        color: 'destructive',
        className: 'before:bg-destructive-9',
      },
      {
        variant: 'dot',
        color: 'warning',
        className: 'before:bg-warning-9',
      },
      {
        variant: 'dot',
        color: 'success',
        className: 'before:bg-success-9',
      },
      {
        variant: 'dot',
        color: 'info',
        className: 'before:bg-info-9',
      },
      {
        variant: 'dot',
        size: 'xs',
        className: 'before:ml-0.5 before:mr-[.1875rem]',
      },
      {
        variant: 'dot',
        size: 'sm',
        className: 'before:mr-1',
      },
      {
        variant: 'dot',
        size: 'md',
        className: 'before:mr-[.3125rem]',
      },
      {
        variant: 'dot',
        size: 'lg',
        className: 'before:mr-1.5',
      },
      {
        variant: 'dot',
        size: 'xl',
        className: 'before:mr-2',
      },
    ],
    defaultVariants: {
      variant: 'filled',
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
      data-dot={!hasChild ? '' : undefined}
      data-circle={circle && hasChild ? '' : undefined}
      className={cn(badgeVariants({ variant, color, size }), className)}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
