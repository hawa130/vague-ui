'use client'

import type { ComponentProps, CSSProperties } from 'react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      richColors
      closeButton
      visibleToasts={3}
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        style: {
          '--error-bg': 'hsl(var(--destructive-1))',
          '--error-border': 'hsl(var(--destructive-3))',
          '--error-text': 'hsl(var(--destructive))',
          '--warning-bg': 'hsl(var(--warning-1))',
          '--warning-border': 'hsl(var(--warning-3))',
          '--warning-text': 'hsl(var(--warning))',
          '--success-bg': 'hsl(var(--success-1))',
          '--success-border': 'hsl(var(--success-3))',
          '--success-text': 'hsl(var(--success))',
          '--info-bg': 'hsl(var(--info-1))',
          '--info-border': 'hsl(var(--info-3))',
          '--info-text': 'hsl(var(--info))',
        } as CSSProperties,
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-fg',
          actionButton:
            'group-[.toast]:bg-secondary group-[.toast]:text-secondary-fg group-[.toast]:font-medium hover:group-[.toast]:bg-accent hover:group-[.toast]:text-accent-fg active:group-[.toast]:bg-accent-dark',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-fg',
          error: 'group-[.toaster]:shadow-destructive-3/60',
          warning: 'group-[.toaster]:shadow-warning-3/60',
          success: 'group-[.toaster]:shadow-success-3/60',
          info: 'group-[.toaster]:shadow-info-3/60',
          closeButton: 'opacity-0 group-hover:opacity-100',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
