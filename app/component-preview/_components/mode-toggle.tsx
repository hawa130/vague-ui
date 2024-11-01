'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/registry/default/ui/button'

export function ModeToggle() {
  const { setTheme, resolvedTheme, systemTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon-md"
      onClick={() =>
        setTheme(
          resolvedTheme === 'light'
            ? systemTheme === 'dark'
              ? 'system'
              : 'dark'
            : systemTheme === 'dark'
              ? 'light'
              : 'system',
        )
      }
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
