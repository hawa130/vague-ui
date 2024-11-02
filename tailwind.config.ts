import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
import tailwindcssRadixColors from 'tailwindcss-radix-colors'
import tailwindcssJoin from './lib/tailwindcss-join'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './registry/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'fg-invert': 'hsl(var(--fg-invert))',
        body: 'hsl(var(--body))',
        button: 'hsl(var(--button))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          fg: 'hsl(var(--card-fg))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          fg: 'hsl(var(--popover-fg))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          fg: 'hsl(var(--secondary-fg))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          fg: 'hsl(var(--muted-fg))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          dark: 'hsl(var(--accent-dark))',
          fg: 'hsl(var(--accent-fg))',
        },
        primary: {
          '1': 'hsl(var(--primary-1))',
          '2': 'hsl(var(--primary-2))',
          '3': 'hsl(var(--primary-3))',
          DEFAULT: 'hsl(var(--primary))',
          '5': 'hsl(var(--primary-5))',
          '6': 'hsl(var(--primary-6))',
        },
        destructive: {
          '1': 'hsl(var(--destructive-1))',
          '2': 'hsl(var(--destructive-2))',
          '3': 'hsl(var(--destructive-3))',
          DEFAULT: 'hsl(var(--destructive))',
          '5': 'hsl(var(--destructive-5))',
          '6': 'hsl(var(--destructive-6))',
        },
        warning: {
          '1': 'hsl(var(--warning-1))',
          '2': 'hsl(var(--warning-2))',
          '3': 'hsl(var(--warning-3))',
          DEFAULT: 'hsl(var(--warning))',
          '5': 'hsl(var(--warning-5))',
          '6': 'hsl(var(--warning-6))',
        },
        success: {
          '1': 'hsl(var(--success-1))',
          '2': 'hsl(var(--success-2))',
          '3': 'hsl(var(--success-3))',
          DEFAULT: 'hsl(var(--success))',
          '5': 'hsl(var(--success-5))',
          '6': 'hsl(var(--success-6))',
        },
        info: {
          '1': 'hsl(var(--info-1))',
          '2': 'hsl(var(--info-2))',
          '3': 'hsl(var(--info-3))',
          DEFAULT: 'hsl(var(--info))',
          '5': 'hsl(var(--info-5))',
          '6': 'hsl(var(--info-6))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: {
          focus: 'hsl(var(--ring-focus))',
          accent: 'hsl(var(--ring-accent))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        segment: {
          DEFAULT: 'hsl(var(--segment))',
          fg: 'hsl(var(--segment-fg))',
          active: {
            DEFAULT: 'hsl(var(--segment-active))',
            fg: 'hsl(var(--segment-active-fg))',
          },
        },
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
      borderRadius: {
        DEFAULT: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        'xl-1': 'calc(var(--radius) + 3px)',
        lg: 'var(--radius)',
        'lg-1': 'calc(var(--radius) - 1px)',
        md: 'calc(var(--radius) - 2px)',
        'md-1': 'calc(var(--radius) - 3px)',
        sm: 'calc(var(--radius) - 4px)',
        'sm-1': 'calc(var(--radius) - 5px)',
        xs: 'calc(var(--radius) - 6px)',
        'xs-1': 'calc(var(--radius) - 7px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0' },
        },
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
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
        'spinner-inner': 'spinner-inner 1.5s ease-in-out infinite',
        'spinner-outer': 'spinner-outer 2s linear infinite',
      },
    },
  },
  plugins: [
    tailwindAnimate,
    tailwindcssRadixColors,
    tailwindcssJoin,
  ],
}
export default config
