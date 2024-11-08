'use client'

import type { ComponentProps, CSSProperties } from 'react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

import { cn } from '@/lib/utils'

type ToasterProps = ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      richColors
      closeButton
      cn={cn}
      visibleToasts={3}
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        style: {
          '--normal-bg': 'hsl(var(--background))',
          '--normal-border': 'hsl(var(--border))',
          '--normal-text': 'hsl(var(--foreground))',
          '--error-bg': 'hsl(var(--destructive-1))',
          '--error-border': 'hsl(var(--destructive-4))',
          '--error-text': 'hsl(var(--destructive-11))',
          '--warning-bg': 'hsl(var(--warning-1))',
          '--warning-border': 'hsl(var(--warning-4))',
          '--warning-text': 'hsl(var(--warning-11))',
          '--success-bg': 'hsl(var(--success-1))',
          '--success-border': 'hsl(var(--success-4))',
          '--success-text': 'hsl(var(--success-11))',
          '--info-bg': 'hsl(var(--info-1))',
          '--info-border': 'hsl(var(--info-4))',
          '--info-text': 'hsl(var(--info-11))',
        } as CSSProperties,
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-fg',
          actionButton:
            'group-[.toast]:data-[button]:bg-invert-1 group-[.toast]:data-[button]:text-invert-fg group-[.toast]:data-[button]:font-medium hover:group-[.toast]:data-[button]:bg-invert-2 active:group-[.toast]:data-[button]:bg-invert-3',
          cancelButton:
            'group-[.toast]:data-[button]:bg-secondary group-[.toast]:data-[button]:text-secondary-fg group-[.toast]:data-[button]:font-medium hover:group-[.toast]:data-[button]:bg-accent hover:group-[.toast]:data-[button]:text-accent-fg active:group-[.toast]:data-[button]:bg-accent-dark',
          error: 'group-[.toaster]:shadow-destructive-3/40',
          warning: 'group-[.toaster]:shadow-warning-3/40',
          success: 'group-[.toaster]:shadow-success-3/40',
          info: 'group-[.toaster]:shadow-info-3/40',
          closeButton: 'opacity-0 group-hover:opacity-100',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
