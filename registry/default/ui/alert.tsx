import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertCircle, AlertTriangle, CircleCheck, Info } from 'lucide-react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full py-3 px-4 [&>i+div]:py-0.5 [&>i+h5+div]:mt-0.5 [&>i]:absolute [&>i]:left-4 [&>i]:top-4 [&>i]:text-foreground',
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
      size: {
        sm: 'text-sm [&>*]:text-sm [&>i>svg]:size-4 [&>i~*]:pl-6',
        md: 'text-base [&>*]:text-base [&>i>svg]:size-5 [&>i~*]:pl-7',
        lg: 'text-lg [&>*]:text-lg [&>i>svg]:size-6 [&>i~*]:pl-8',
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
        className: 'border-primary-8 text-primary-11 [&>i]:text-primary-11',
      },
      {
        variant: 'surface',
        color: 'primary',
        className: 'border-primary-6 bg-primary-2 text-primary-11 [&>i]:text-primary-11',
      },
      {
        variant: 'soft',
        color: 'primary',
        className: 'bg-primary-3 text-primary-11 [&>i]:text-primary-11',
      },
      {
        variant: 'outline',
        color: 'destructive',
        className: 'border-destructive-8 text-destructive-11 [&>i]:text-destructive-11',
      },
      {
        variant: 'surface',
        color: 'destructive',
        className: 'border-destructive-6 bg-destructive-2 text-destructive-11 [&>i]:text-destructive-11',
      },
      {
        variant: 'soft',
        color: 'destructive',
        className: 'bg-destructive-3 text-destructive-11 [&>i]:text-destructive-11',
      },
      {
        variant: 'outline',
        color: 'warning',
        className: 'border-warning-8 text-warning-11 [&>i]:text-warning-11',
      },
      {
        variant: 'surface',
        color: 'warning',
        className: 'border-warning-6 bg-warning-2 text-warning-11 [&>i]:text-warning-11',
      },
      {
        variant: 'soft',
        color: 'warning',
        className: 'bg-warning-3 text-warning-11 [&>i]:text-warning-11',
      },
      {
        variant: 'outline',
        color: 'success',
        className: 'border-success-8 text-success-11 [&>i]:text-success-11',
      },
      {
        variant: 'surface',
        color: 'success',
        className: 'border-success-6 bg-success-2 text-success-11 [&>i]:text-success-11',
      },
      {
        variant: 'soft',
        color: 'success',
        className: 'bg-success-3 text-success-11 [&>i]:text-success-11',
      },
      {
        variant: 'outline',
        color: 'info',
        className: 'border-info-8 text-info-11 [&>i]:text-info-11',
      },
      {
        variant: 'surface',
        color: 'info',
        className: 'border-info-6 bg-info-2 text-info-11 [&>i]:text-info-11',
      },
      {
        variant: 'soft',
        color: 'info',
        className: 'bg-info-3 text-info-11 [&>i]:text-info-11',
      },
    ],
    defaultVariants: {
      variant: 'surface',
      color: 'default',
      size: 'md',
    },
  },
)

export type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'color'> &
  VariantProps<typeof alertVariants> & {
    icon?: React.ReactNode
    title?: React.ReactNode
  }

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ title, color, icon, size, children, ...props }, ref) => {
  const resolvedIcon =
    icon ??
    ((color) => {
      switch (color) {
        case 'destructive':
          return <AlertCircle />
        case 'warning':
          return <AlertTriangle />
        case 'success':
          return <CircleCheck />
        case 'info':
          return <Info />
        default:
          return null
      }
    })(color)

  return (
    <AlertContainer ref={ref} color={color} size={size} {...props}>
      {!(!title && !children) && resolvedIcon && <i>{resolvedIcon}</i>}
      {!!title && <AlertTitle>{title}</AlertTitle>}
      {!!children && <AlertDescription>{children}</AlertDescription>}
    </AlertContainer>
  )
})
Alert.displayName = 'Alert'

const AlertContainer = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> & VariantProps<typeof alertVariants>
>(({ className, variant, color, size, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant, color, size }), className)} {...props} />
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
