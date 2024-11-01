import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

function Skeleton({
  className,
  asChild,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'div'

  return <Comp className={cn('bg-muted-fg/15 animate-pulse rounded-md', className)} {...props} />
}

export { Skeleton }
