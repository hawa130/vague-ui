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
        className: 'bg-primary text-fg-invert hover:bg-primary-5 active:bg-primary-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'primary',
        className: 'border-primary text-primary hover:bg-primary-1 active:text-primary-6 active:bg-primary-3',
      },
      {
        variant: ['ghost', 'light'],
        color: 'primary',
        className: 'text-primary active:text-primary-6',
      },
      {
        variant: 'subtle',
        color: 'primary',
        className: 'text-primary hover:bg-primary-1 active:text-primary-6 active:bg-primary-3',
      },
      {
        variant: 'soft',
        color: 'primary',
        className:
          'text-primary bg-primary-1 hover:bg-primary-2 active:text-primary-6 active:bg-primary-3',
      },
      {
        variant: 'filled',
        color: 'destructive',
        className: 'bg-destructive text-fg-invert hover:bg-destructive-5 active:bg-destructive-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'destructive',
        className:
          'border-destructive text-destructive hover:bg-destructive-1 active:text-destructive-6 active:bg-destructive-3',
      },
      {
        variant: ['ghost', 'light'],
        color: 'destructive',
        className: 'text-destructive active:text-destructive-6',
      },
      {
        variant: 'subtle',
        color: 'destructive',
        className:
          'text-destructive hover:bg-destructive-1 active:text-destructive-6 active:bg-destructive-3',
      },
      {
        variant: 'soft',
        color: 'destructive',
        className:
          'text-destructive bg-destructive-1 hover:bg-destructive-2 active:text-destructive-6 active:bg-destructive-3',
      },
      {
        variant: 'filled',
        color: 'warning',
        className: 'bg-warning text-fg-invert hover:bg-warning-5 active:bg-warning-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'warning',
        className: 'border-warning text-warning hover:bg-warning-1 active:text-warning-6 active:bg-warning-3',
      },
      {
        variant: ['ghost', 'light'],
        color: 'warning',
        className: 'text-warning active:text-warning-6',
      },
      {
        variant: 'subtle',
        color: 'warning',
        className: 'text-warning hover:bg-warning-1 active:text-warning-6 active:bg-warning-3',
      },
      {
        variant: 'soft',
        color: 'warning',
        className:
          'text-warning bg-warning-1 hover:bg-warning-2 active:text-warning-6 active:bg-warning-3',
      },
      {
        variant: 'filled',
        color: 'success',
        className: 'bg-success text-fg-invert hover:bg-success-5 active:bg-success-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'success',
        className: 'border-success text-success hover:bg-success-1 active:text-success-6 active:bg-success-3',
      },
      {
        variant: ['ghost', 'light'],
        color: 'success',
        className: 'text-success active:text-success-6',
      },
      {
        variant: 'subtle',
        color: 'success',
        className: 'text-success hover:bg-success-1 active:text-success-6 active:bg-success-3',
      },
      {
        variant: 'soft',
        color: 'success',
        className:
          'text-success bg-success-1 hover:bg-success-2 active:text-success-6 active:bg-success-3',
      },
      {
        variant: 'filled',
        color: 'info',
        className: 'bg-info text-fg-invert hover:bg-info-5 active:bg-info-6',
      },
      {
        variant: ['outline', 'dashed'],
        color: 'info',
        className: 'border-info text-info hover:bg-info-1 active:text-info-6 active:bg-info-3',
      },
      {
        variant: ['ghost', 'light'],
        color: 'info',
        className: 'text-info active:text-info-6',
      },
      {
        variant: 'subtle',
        color: 'info',
        className: 'text-info hover:bg-info-1 active:text-info-6 active:bg-info-3',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'text-info bg-info-1 hover:bg-info-2 active:text-info-6 active:bg-info-3',
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
