import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export const ComponentPreviewHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('mb-2.5', className)} {...props} />
}
export const ComponentPreviewTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={cn('text-lg font-medium', className)} {...props} />
}
export const ComponentPreviewDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn('text-read text-muted-fg', className)} {...props} />
}