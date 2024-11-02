import { Registry } from './schema'

export const ui: Registry = [
  {
    name: 'accordion',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-accordion'],
    files: ['ui/accordion.tsx'],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              'accordion-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' },
              },
              'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' },
              },
            },
            animation: {
              'accordion-down': 'accordion-down 0.2s ease-out',
              'accordion-up': 'accordion-up 0.2s ease-out',
            },
          },
        },
      },
    },
  },
  {
    name: 'alert',
    type: 'registry:ui',
    files: ['ui/alert.tsx'],
  },
  {
    name: 'alert-dialog',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-alert-dialog'],
    registryDependencies: ['button'],
    files: ['ui/alert-dialog.tsx'],
  },
  {
    name: 'aspect-ratio',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-aspect-ratio'],
    files: ['ui/aspect-ratio.tsx'],
  },
  {
    name: 'avatar',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-avatar'],
    files: ['ui/avatar.tsx'],
  },
  {
    name: 'badge',
    type: 'registry:ui',
    files: ['ui/badge.tsx'],
  },
  {
    name: 'breadcrumb',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot'],
    files: ['ui/breadcrumb.tsx'],
  },
  {
    name: 'button',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot'],
    registryDependencies: ['spinner'],
    files: ['ui/button.tsx'],
  },
  {
    name: 'calendar',
    type: 'registry:ui',
    dependencies: ['react-day-picker@8.10.1', 'date-fns'],
    registryDependencies: ['button'],
    files: ['ui/calendar.tsx'],
  },
  {
    name: 'card',
    type: 'registry:ui',
    files: ['ui/card.tsx'],
  },
  {
    name: 'carousel',
    type: 'registry:ui',
    files: ['ui/carousel.tsx'],
    registryDependencies: ['button'],
    dependencies: ['embla-carousel-react'],
  },
  {
    name: 'chart',
    type: 'registry:ui',
    files: ['ui/chart.tsx'],
    registryDependencies: ['card'],
    dependencies: ['recharts', 'lucide-react'],
  },
  {
    name: 'checkbox',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-checkbox'],
    files: ['ui/checkbox.tsx'],
  },
  {
    name: 'collapsible',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-collapsible'],
    files: ['ui/collapsible.tsx'],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              'collapsible-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-collapsible-content-height)' },
              },
              'collapsible-up': {
                from: { height: 'var(--radix-collapsible-content-height)' },
                to: { height: '0' },
              },
            },
            animation: {
              'collapsible-down': 'collapsible-down 0.2s ease-out',
              'collapsible-up': 'collapsible-up 0.2s ease-out',
            },
          },
        },
      },
    },
  },
  {
    name: 'command',
    type: 'registry:ui',
    dependencies: ['cmdk@1.0.0'],
    registryDependencies: ['dialog'],
    files: ['ui/command.tsx'],
  },
  {
    name: 'context-menu',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-context-menu'],
    registryDependencies: ['dropdown-menu'],
    files: ['ui/context-menu.tsx'],
  },
  {
    name: 'dialog',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-dialog'],
    files: ['ui/dialog.tsx'],
  },
  {
    name: 'drawer',
    type: 'registry:ui',
    dependencies: ['vaul', '@radix-ui/react-dialog'],
    files: ['ui/drawer.tsx'],
  },
  {
    name: 'dropdown-menu',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-dropdown-menu'],
    files: ['ui/dropdown-menu.tsx'],
  },
  {
    name: 'form',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-label', '@radix-ui/react-slot', '@hookform/resolvers', 'zod', 'react-hook-form'],
    registryDependencies: ['button', 'label'],
    files: ['ui/form.tsx'],
  },
  {
    name: 'hover-card',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-hover-card'],
    files: ['ui/hover-card.tsx'],
  },
  {
    name: 'input',
    type: 'registry:ui',
    files: ['ui/input.tsx'],
  },
  {
    name: 'input-otp',
    type: 'registry:ui',
    dependencies: ['input-otp'],
    files: ['ui/input-otp.tsx'],
  },
  {
    name: 'label',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-label'],
    files: ['ui/label.tsx'],
  },
  {
    name: 'menubar',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-menubar'],
    registryDependencies: ['dropdown-menu'],
    files: ['ui/menubar.tsx'],
  },
  {
    name: 'navigation-menu',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-navigation-menu'],
    files: ['ui/navigation-menu.tsx'],
  },
  {
    name: 'pagination',
    type: 'registry:ui',
    registryDependencies: ['button'],
    files: ['ui/pagination.tsx'],
  },
  {
    name: 'popover',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-popover'],
    files: ['ui/popover.tsx'],
  },
  {
    name: 'progress',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-progress'],
    files: ['ui/progress.tsx'],
  },
  {
    name: 'radio-group',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-radio-group'],
    files: ['ui/radio-group.tsx'],
  },
  {
    name: 'resizable',
    type: 'registry:ui',
    dependencies: ['react-resizable-panels'],
    files: ['ui/resizable.tsx'],
  },
  {
    name: 'scroll-area',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-scroll-area'],
    files: ['ui/scroll-area.tsx'],
  },
  {
    name: 'select',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-select'],
    files: ['ui/select.tsx'],
  },
  {
    name: 'separator',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-separator'],
    files: ['ui/separator.tsx'],
  },
  {
    name: 'sheet',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-dialog'],
    files: ['ui/sheet.tsx'],
  },
  {
    name: 'sidebar',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority', 'lucide-react'],
    registryDependencies: ['button', 'separator', 'sheet', 'tooltip', 'input', 'use-mobile', 'skeleton'],
    files: ['ui/sidebar.tsx'],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              sidebar: {
                DEFAULT: 'hsl(var(--sidebar-bg))',
                fg: 'hsl(var(--sidebar-fg))',
                primary: 'hsl(var(--sidebar-primary))',
                'primary-fg': 'hsl(var(--sidebar-primary-fg))',
                accent: 'hsl(var(--sidebar-accent))',
                'accent-fg': 'hsl(var(--sidebar-accent-fg))',
                border: 'hsl(var(--sidebar-border))',
                ring: 'hsl(var(--sidebar-ring))',
              },
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        'sidebar-bg': '0 0% 98%',
        'sidebar-fg': '240 5.3% 26.1%',
        'sidebar-primary': '240 5.9% 10%',
        'sidebar-primary-fg': '0 0% 98%',
        'sidebar-accent': '240 4.8% 95.9%',
        'sidebar-accent-fg': '240 5.9% 10%',
        'sidebar-border': '220 13% 91%',
        'sidebar-ring': '217.2 91.2% 59.8%',
      },
      dark: {
        'sidebar-bg': '240 5.9% 10%',
        'sidebar-fg': '240 4.8% 95.9%',
        'sidebar-primary': '224.3 76.3% 48%',
        'sidebar-primary-fg': '0 0% 100%',
        'sidebar-accent': '240 3.7% 15.9%',
        'sidebar-accent-fg': '240 4.8% 95.9%',
        'sidebar-border': '240 3.7% 15.9%',
        'sidebar-ring': '217.2 91.2% 59.8%',
      },
    },
  },
  {
    name: 'skeleton',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot'],
    files: ['ui/skeleton.tsx'],
  },
  {
    name: 'slider',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slider'],
    files: ['ui/slider.tsx'],
  },
  {
    name: 'sonner',
    type: 'registry:ui',
    dependencies: ['sonner', 'next-themes'],
    files: ['ui/sonner.tsx'],
  },
  {
    name: 'switch',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-switch'],
    files: ['ui/switch.tsx'],
  },
  {
    name: 'table',
    type: 'registry:ui',
    files: ['ui/table.tsx'],
  },
  {
    name: 'tabs',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-tabs'],
    files: ['ui/tabs.tsx'],
  },
  {
    name: 'textarea',
    type: 'registry:ui',
    files: ['ui/textarea.tsx'],
  },
  {
    name: 'toggle',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-toggle'],
    files: ['ui/toggle.tsx'],
  },
  {
    name: 'toggle-group',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-toggle-group'],
    registryDependencies: ['toggle'],
    files: ['ui/toggle-group.tsx'],
  },
  {
    name: 'tooltip',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-tooltip'],
    files: ['ui/tooltip.tsx'],
  },
  {
    name: 'ring-progress',
    type: 'registry:ui',
    files: ['ui/ring-progress.tsx'],
  },
  {
    name: 'segmented',
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-radio-group'],
    files: ['ui/segmented.tsx'],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              segment: {
                DEFAULT: 'hsl(var(--segment))',
                fg: 'hsl(var(--segment-fg))',
                active: {
                  DEFAULT: 'hsl(var(--segment-active))',
                  fg: 'hsl(var(--segment-active-fg))',
                },
              },
            },
          },
        },
      },
    },
  },
  {
    name: 'spinner',
    type: 'registry:ui',
    files: ['ui/spinner.tsx'],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              'spinner-inner': {
                '0%': {
                  strokeDasharray: '0 150',
                  strokeDashoffset: '0',
                },
                '47.5%': {
                  strokeDasharray: '42 150',
                  strokeDashoffset: '-16',
                },
                '95%, 100%': {
                  strokeDasharray: '42 150',
                  strokeDashoffset: '-59',
                },
              },
              'spinner-outer': {
                '100%': {
                  transform: 'rotate(360deg)',
                },
              },
            },
            animation: {
              'spinner-inner': 'spinner-inner 1.5s ease-in-out infinite',
              'spinner-outer': 'spinner-outer 2s linear infinite',
            },
          },
        },
      },
    },
  },
]
