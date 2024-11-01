import { cva, type VariantProps } from 'class-variance-authority'
import { AlertCircle, AlertTriangle, CircleCheck, Info } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full py-3 px-4 [&>i~*]:pl-6 [&>i+div]:py-0.5 [&>i+h5+div]:mt-0.5 [&>i]:absolute [&>i]:left-4 [&>i]:top-4 [&>i]:text-foreground',
  {
    variants: {
      variant: {
        outline: 'border rounded-lg',
        surface: 'border rounded-lg',
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
    },
    compoundVariants: [
      {
        variant: 'outline',
        color: 'default',
        className: 'bg-background text-foreground [&>i]:text-foreground',
      },
      {
        variant: ['surface', 'soft'],
        color: 'default',
        className: 'bg-secondary text-secondary-fg [&>i]:text-secondary-fg',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-primary text-primary [&>i]:text-primary',
      },
      {
        variant: 'surface',
        color: 'primary',
        className: 'border-primary-pale bg-primary-light text-primary [&>i]:text-primary',
      },
      {
        variant: 'soft',
        color: 'primary',
        className: 'bg-primary-light text-primary [&>i]:text-primary',
      },
      {
        variant: 'outline',
        color: 'destructive',
        className: 'border-destructive text-destructive [&>i]:text-destructive',
      },
      {
        variant: 'surface',
        color: 'destructive',
        className: 'border-destructive-pale bg-destructive-light text-destructive [&>i]:text-destructive',
      },
      {
        variant: 'soft',
        color: 'destructive',
        className: 'bg-destructive-light text-destructive [&>i]:text-destructive',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-warning text-warning [&>i]:text-warning',
      },
      {
        variant: 'surface',
        color: 'warning',
        className: 'border-warning-pale bg-warning-light text-warning [&>i]:text-warning',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'bg-warning-light text-warning [&>i]:text-warning',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-success text-success [&>i]:text-success',
      },
      {
        variant: 'surface',
        color: 'success',
        className: 'border-success-pale bg-success-light text-success [&>i]:text-success',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'bg-success-light text-success [&>i]:text-success',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-info text-info [&>i]:text-info',
      },
      {
        variant: 'surface',
        color: 'info',
        className: 'border-info-pale bg-info-light text-info [&>i]:text-info',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'bg-info-light text-info [&>i]:text-info',
      },
    ],
    defaultVariants: {
      variant: 'surface',
      color: 'default',
    },
  },
)

export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'color'> &
  VariantProps<typeof alertVariants> & {
    icon?: React.ReactNode
    title?: React.ReactNode
  }

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ title, color, icon, children, ...props }, ref) => {
  const resolvedIcon =
    icon ??
    ((color) => {
      switch (color) {
        case 'destructive':
          return <AlertCircle className="h-4 w-4" />
        case 'warning':
          return <AlertTriangle className="h-4 w-4" />
        case 'success':
          return <CircleCheck className="h-4 w-4" />
        case 'info':
          return <Info className="h-4 w-4" />
        default:
          return null
      }
    })(color)

  return (
    <AlertContainer ref={ref} color={color} {...props}>
      {!(!title && !children) && resolvedIcon && <i className="h-4 w-4">{resolvedIcon}</i>}
      {!!title && <AlertTitle>{title}</AlertTitle>}
      {!!children && <AlertDescription>{children}</AlertDescription>}
    </AlertContainer>
  )
})
Alert.displayName = 'Alert'

const AlertContainer = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> & VariantProps<typeof alertVariants>
>(({ className, variant, color, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant, color }), className)} {...props} />
))
AlertContainer.displayName = 'AlertContainer'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h5 ref={ref} className={cn('font-medium', className)} {...props} />,
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm text-foreground/75 [&_p]:leading-relaxed', className)} {...props} />
  ),
)
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertContainer, AlertTitle, AlertDescription }
