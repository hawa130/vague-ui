'use client'

import { useTheme } from 'next-themes'
import type { ComponentProps, CSSProperties } from 'react'
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
          '--error-bg': 'hsl(var(--destructive-light))',
          '--error-border': 'hsl(var(--destructive-pale))',
          '--error-text': 'hsl(var(--destructive))',
          '--warning-bg': 'hsl(var(--warning-light))',
          '--warning-border': 'hsl(var(--warning-pale))',
          '--warning-text': 'hsl(var(--warning))',
          '--success-bg': 'hsl(var(--success-light))',
          '--success-border': 'hsl(var(--success-pale))',
          '--success-text': 'hsl(var(--success))',
          '--info-bg': 'hsl(var(--info-light))',
          '--info-border': 'hsl(var(--info-pale))',
          '--info-text': 'hsl(var(--info))',
        } as CSSProperties,
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-fg',
          actionButton:
            'group-[.toast]:bg-secondary group-[.toast]:text-secondary-fg group-[.toast]:font-medium hover:group-[.toast]:bg-accent hover:group-[.toast]:text-accent-fg active:group-[.toast]:bg-accent-dark',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-fg',
          error: 'group-[.toaster]:shadow-destructive-pale/60',
          warning: 'group-[.toaster]:shadow-warning-pale/60',
          success: 'group-[.toaster]:shadow-success-pale/60',
          info: 'group-[.toaster]:shadow-info-pale/60',
          closeButton: 'opacity-0 group-hover:opacity-100',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
