import * as React from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Spinner } from '@/registry/default/ui/spinner'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        filled: '',
        outline: 'border',
        dashed: 'border border-dashed',
        ghost: 'hover:bg-accent active:bg-accent-dark',
        light: 'bg-secondary hover:bg-accent active:bg-accent-dark',
        subtle: '',
        soft: '',
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
        variant: ['filled', 'light', 'soft'],
        color: 'default',
        className: 'bg-secondary text-secondary-fg hover:bg-accent hover:text-accent-fg active:bg-accent-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'default',
        className:
          'border-input bg-button hover:bg-accent hover:text-accent-fg hover:border-ring-accent active:bg-accent-dark',
      },
      {
        variant: ['ghost', 'subtle'],
        color: 'default',
        className: 'hover:text-accent-fg hover:bg-accent active:bg-accent-dark',
      },
      {
        variant: 'filled',
        color: 'primary',
        className: 'bg-primary text-fg-invert hover:bg-primary-deep active:bg-primary-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'primary',
        className: 'border-primary text-primary hover:bg-primary-light active:text-primary-dark active:bg-primary-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'primary',
        className: 'text-primary active:text-primary-dark',
      },
      {
        variant: 'subtle',
        color: 'primary',
        className: 'text-primary hover:bg-primary-light active:text-primary-dark active:bg-primary-pale',
      },
      {
        variant: 'soft',
        color: 'primary',
        className:
          'text-primary bg-primary-light hover:bg-primary-soft active:text-primary-dark active:bg-primary-pale',
      },
      {
        variant: 'filled',
        color: 'destructive',
        className: 'bg-destructive text-fg-invert hover:bg-destructive-deep active:bg-destructive-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'destructive',
        className:
          'border-destructive text-destructive hover:bg-destructive-light active:text-destructive-dark active:bg-destructive-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'destructive',
        className: 'text-destructive active:text-destructive-dark',
      },
      {
        variant: 'subtle',
        color: 'destructive',
        className:
          'text-destructive hover:bg-destructive-light active:text-destructive-dark active:bg-destructive-pale',
      },
      {
        variant: 'soft',
        color: 'destructive',
        className:
          'text-destructive bg-destructive-light hover:bg-destructive-soft active:text-destructive-dark active:bg-destructive-pale',
      },
      {
        variant: 'filled',
        color: 'warning',
        className: 'bg-warning text-fg-invert hover:bg-warning-deep active:bg-warning-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'warning',
        className: 'border-warning text-warning hover:bg-warning-light active:text-warning-dark active:bg-warning-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'warning',
        className: 'text-warning active:text-warning-dark',
      },
      {
        variant: 'subtle',
        color: 'warning',
        className: 'text-warning hover:bg-warning-light active:text-warning-dark active:bg-warning-pale',
      },
      {
        variant: 'soft',
        color: 'warning',
        className:
          'text-warning bg-warning-light hover:bg-warning-soft active:text-warning-dark active:bg-warning-pale',
      },
      {
        variant: 'filled',
        color: 'success',
        className: 'bg-success text-fg-invert hover:bg-success-deep active:bg-success-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'success',
        className: 'border-success text-success hover:bg-success-light active:text-success-dark active:bg-success-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'success',
        className: 'text-success active:text-success-dark',
      },
      {
        variant: 'subtle',
        color: 'success',
        className: 'text-success hover:bg-success-light active:text-success-dark active:bg-success-pale',
      },
      {
        variant: 'soft',
        color: 'success',
        className:
          'text-success bg-success-light hover:bg-success-soft active:text-success-dark active:bg-success-pale',
      },
      {
        variant: 'filled',
        color: 'info',
        className: 'bg-info text-fg-invert hover:bg-info-deep active:bg-info-dark',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'info',
        className: 'border-info text-info hover:bg-info-light active:text-info-dark active:bg-info-pale',
      },
      {
        variant: ['ghost', 'light'],
        color: 'info',
        className: 'text-info active:text-info-dark',
      },
      {
        variant: 'subtle',
        color: 'info',
        className: 'text-info hover:bg-info-light active:text-info-dark active:bg-info-pale',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'text-info bg-info-light hover:bg-info-soft active:text-info-dark active:bg-info-pale',
      },
    ],
    defaultVariants: {
      variant: 'outline',
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
