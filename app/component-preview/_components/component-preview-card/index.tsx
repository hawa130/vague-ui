import { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export interface ComponentPreviewCardProps extends HTMLAttributes<HTMLDivElement> {
  form?: ReactNode
}

export const ComponentPreviewCard = ({ className, children, form, ...props }: ComponentPreviewCardProps) => {
  return (
    <div
      className={cn('overflow-auto rounded-lg border', !!form && 'grid md:grid-cols-[minmax(0,1fr)_240px]', className)}
      {...props}
    >
      <ComponentPreviewSection>{children}</ComponentPreviewSection>
      {!!form && <div className="<md:border-t bg-body p-4 md:border-l">{form}</div>}
    </div>
  )
}

export const ComponentPreviewSection = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('bg-dots flex min-h-[120px] flex-col items-center justify-center p-4', className)} {...props} />
  )
}

export * from './header'
export * from './form'
