import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Spinner } from '@/registry/default/ui/spinner'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: '',
        outline: 'border focus-visible:border-ring-focus',
        dashed: 'border border-dashed focus-visible:border-ring-focus',
        ghost: 'hover:bg-accent-light active:bg-accent-dark',
        light: 'bg-secondary hover:bg-accent active:bg-accent-dark',
        subtle: '',
        soft: '',
        surface: 'border focus-visible:border-ring-focus',
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
        '2xs': 'h-5 px-2 text-xs font-semibold gap-1',
        xs: 'h-6 px-2.5 text-xs gap-1',
        sm: 'h-8 px-3 text-sm gap-1.5',
        md: 'h-9 px-4 text-sm gap-2',
        lg: 'h-11 px-5 text-base gap-2 rounded-lg',
        xl: 'h-14 px-6 text-lg gap-3 rounded-xl',
        'icon-2xs': 'h-4 w-4',
        'icon-xs': 'h-6 w-6',
        'icon-sm': 'h-8 w-8',
        'icon-md': 'h-9 w-9',
        'icon-lg': 'h-11 w-11',
        'icon-xl': 'h-14 w-14',
      },
    },
    compoundVariants: [
      {
        variant: 'filled',
        color: 'default',
        className: 'bg-invert-1 text-invert-fg hover:bg-invert-2 active:bg-invert-3',
      },
      {
        variant: ['light', 'soft'],
        color: 'default',
        className: 'bg-secondary text-secondary-fg hover:bg-accent hover:text-accent-fg active:bg-accent-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'default',
        className:
          'border-input bg-button hover:bg-accent-light hover:text-accent-fg hover:border-ring-accent active:bg-accent-dark',
      },
      {
        variant: ['ghost', 'subtle'],
        color: 'default',
        className: 'hover:text-accent-fg hover:bg-accent-light active:bg-accent-dark',
      },
      {
        variant: 'surface',
        color: 'default',
        className:
          'bg-neutral-2 border-neutral-6 text-neutral-12 hover:bg-neutral-3 hover:border-neutral-7 active:bg-neutral-4 active:border-neutral-8',
      },
      {
        variant: 'filled',
        color: 'primary',
        className: 'bg-primary-9 text-white hover:bg-primary-10 active:bg-primary-11',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'primary',
        className: 'border-primary-8 text-primary-11 hover:bg-primary-3 active:text-primary-11 active:bg-primary-4',
      },
      {
        variant: ['ghost', 'light'],
        color: 'primary',
        className: 'text-primary-11 active:text-primary-11',
      },
      {
        variant: 'subtle',
        color: 'primary',
        className: 'text-primary-11 hover:bg-primary-3 active:text-primary-11 active:bg-primary-4',
      },
      {
        variant: 'soft',
        color: 'primary',
        className: 'text-primary-11 bg-primary-3 hover:bg-primary-4 active:text-primary-11 active:bg-primary-5',
      },
      {
        variant: 'surface',
        color: 'primary',
        className:
          'bg-primary-2 border-primary-6 text-primary-11 hover:bg-primary-3 hover:border-primary-7 active:bg-primary-4 active:border-primary-8',
      },
      {
        variant: 'filled',
        color: 'destructive',
        className: 'bg-destructive-9 text-white hover:bg-destructive-10 active:bg-destructive-11',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'destructive',
        className:
          'border-destructive-8 text-destructive-11 hover:bg-destructive-3 active:text-destructive-11 active:bg-destructive-4',
      },
      {
        variant: ['ghost', 'light'],
        color: 'destructive',
        className: 'text-destructive-11 active:text-destructive-11',
      },
      {
        variant: 'subtle',
        color: 'destructive',
        className: 'text-destructive-11 hover:bg-destructive-3 active:text-destructive-11 active:bg-destructive-4',
      },
      {
        variant: 'soft',
        color: 'destructive',
        className:
          'text-destructive-11 bg-destructive-3 hover:bg-destructive-4 active:text-destructive-11 active:bg-destructive-5',
      },
      {
        variant: 'surface',
        color: 'destructive',
        className:
          'bg-destructive-2 border-destructive-6 text-destructive-11 hover:bg-destructive-3 hover:border-destructive-7 active:bg-destructive-4 active:border-destructive-8',
      },
      {
        variant: 'filled',
        color: 'warning',
        className: 'bg-warning-9 text-white hover:bg-warning-10 active:bg-warning-11',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'warning',
        className: 'border-warning-8 text-warning-11 hover:bg-warning-3 active:text-warning-11 active:bg-warning-4',
      },
      {
        variant: ['ghost', 'light'],
        color: 'warning',
        className: 'text-warning-11 active:text-warning-11',
      },
      {
        variant: 'subtle',
        color: 'warning',
        className: 'text-warning-11 hover:bg-warning-3 active:text-warning-11 active:bg-warning-4',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'text-warning-11 bg-warning-3 hover:bg-warning-4 active:text-warning-11 active:bg-warning-5',
      },
      {
        variant: 'surface',
        color: 'warning',
        className:
          'bg-warning-2 border-warning-6 text-warning-11 hover:bg-warning-3 hover:border-warning-7 active:bg-warning-4 active:border-warning-8',
      },
      {
        variant: 'filled',
        color: 'success',
        className: 'bg-success-9 text-white hover:bg-success-10 active:bg-success-11',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'success',
        className: 'border-success-8 text-success-11 hover:bg-success-3 active:text-success-11 active:bg-success-4',
      },
      {
        variant: ['ghost', 'light'],
        color: 'success',
        className: 'text-success-11 active:text-success-11',
      },
      {
        variant: 'subtle',
        color: 'success',
        className: 'text-success-11 hover:bg-success-3 active:text-success-11 active:bg-success-4',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'text-success-11 bg-success-3 hover:bg-success-4 active:text-success-11 active:bg-success-5',
      },
      {
        variant: 'surface',
        color: 'success',
        className:
          'bg-success-2 border-success-6 text-success-11 hover:bg-success-3 hover:border-success-7 active:bg-success-4 active:border-success-8',
      },
      {
        variant: 'filled',
        color: 'info',
        className: 'bg-info-9 text-white hover:bg-info-10 active:bg-info-11',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'info',
        className: 'border-info-8 text-info-11 hover:bg-info-3 active:text-info-11 active:bg-info-4',
      },
      {
        variant: ['ghost', 'light'],
        color: 'info',
        className: 'text-info-11 active:text-info-11',
      },
      {
        variant: 'subtle',
        color: 'info',
        className: 'text-info-11 hover:bg-info-3 active:text-info-11 active:bg-info-4',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'text-info-11 bg-info-3 hover:bg-info-4 active:text-info-11 active:bg-info-5',
      },
      {
        variant: 'surface',
        color: 'info',
        className:
          'bg-info-2 border-info-6 text-info-11 hover:bg-info-3 hover:border-info-7 active:bg-info-4 active:border-info-8',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      color: 'default',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, loading, variant, size = 'md', asChild = false, disabled, color, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        type={asChild ? undefined : 'button'}
        disabled={disabled || loading}
        data-loading={loading ? '' : undefined}
        className={cn(buttonVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      >
        {loading && (
          <Spinner
            className={cn({
              'size-3': ['icon-2xs', '2xs', 'icon-xs', 'xs'].includes(size!),
              'size-4': ['icon-sm', 'sm', 'icon-md', 'md'].includes(size!),
              'size-5': ['icon-lg', 'lg'].includes(size!),
            })}
          />
        )}
        <Slottable>{children}</Slottable>
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
