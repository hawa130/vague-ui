import * as React from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const inputWrapperVariants = cva(
  'flex items-center h-9 w-full rounded-md border border-input bg-button px-3 text-sm ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring-focus focus-within:ring-offset-0 focus-within:border-ring-focus hover:focus-within:border-ring-focus [&:has(:disabled)]:cursor-not-allowed [&:has(:disabled)>input]:cursor-not-allowed [&:has(:disabled)]:opacity-50 transition hover:border-ring-accent [&:not(:focus-within)]:hover:bg-accent-light [&>input]:flex-grow [&>input]:bg-transparent [&>input]:h-full focus-visible:[&>input]:outline-none placeholder:[&>input]:text-muted-fg file:[&>input]:border-0 file:[&>input]:bg-transparent file:[&>input]:text-sm file:[&>input]:font-medium',
)

export const inputVariants = cva(
  'flex h-9 w-full rounded-md border border-input bg-button px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-0 focus-visible:border-ring-focus disabled:cursor-not-allowed disabled:opacity-50 transition hover:border-ring-accent [&:not(:focus)]:hover:bg-accent-light',
)

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return <input type={type} className={cn(inputVariants(), className)} ref={ref} {...props} />
})
Input.displayName = 'Input'

export { Input }
