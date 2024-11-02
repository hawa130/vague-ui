import { writeFile } from 'node:fs/promises'

import * as radixColors from '@radix-ui/colors'

let file = `export const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: {
    hex: '#000000',
    rgb: 'rgb(0,0,0)',
    hsl: 'hsl(0,0%,0%)',
  },
  white: {
    hex: '#ffffff',
    rgb: 'rgb(255,255,255)',
    hsl: 'hsl(0,0%,100%)',
  },
`

const MAPPING = `
export const colorMapping = {
  light: {
    background: 'white',
    foreground: 'gray-12',
    'fg-invert': 'white',
    card: 'white',
    'card-fg': 'gray-12',
    popover: 'white',
    'popover-fg': 'gray-12',
    secondary: 'gray-3',
    'secondary-fg': 'gray-12',
    muted: 'gray-3',
    'muted-fg': 'gray-11',
    segment: 'gray-3',
    'segment-fg': 'gray-11',
    'segment-active': 'white',
    'segment-active-fg': 'gray-12',
    accent: 'gray-4',
    'accent-dark': 'gray-5',
    'accent-fg': 'gray-12',
    'primary-1': 'teal-3',
    'primary-2': 'teal-4',
    'primary-3': 'teal-5',
    primary: 'teal-9',
    'primary-5': 'teal-10',
    'primary-6': 'teal-11',
    'destructive-1': 'red-3',
    'destructive-2': 'red-4',
    'destructive-3': 'red-5',
    destructive: 'red-9',
    'destructive-5': 'red-10',
    'destructive-6': 'red-11',
    'warning-1': 'yellow-3',
    'warning-2': 'yellow-4',
    'warning-3': 'yellow-5',
    warning: 'yellow-9',
    'warning-5': 'yellow-10',
    'warning-6': 'yellow-11',
    'success-1': 'green-3',
    'success-2': 'green-4',
    'success-3': 'green-5',
    success: 'green-9',
    'success-5': 'green-10',
    'success-6': 'green-11',
    'info-1': 'blue-3',
    'info-2': 'blue-4',
    'info-3': 'blue-5',
    info: 'blue-9',
    'info-5': 'blue-10',
    'info-6': 'blue-11',
    body: 'gray-1',
    button: 'white',
    border: 'gray-6',
    input: 'gray-4',
    'ring-accent': 'gray-7',
    'ring-focus': 'gray-8',
    'chart-1': '12 76% 61%',
    'chart-2': '173 58% 39%',
    'chart-3': '197 37% 24%',
    'chart-4': '43 74% 66%',
    'chart-5': '27 87% 67%',
  },
  dark: {
    background: 'grayDark-1',
    foreground: 'grayDark-12',
    'fg-invert': 'grayDark-1',
    card: 'grayDark-1',
    'card-fg': 'grayDark-12',
    popover: 'grayDark-1',
    'popover-fg': 'grayDark-12',
    secondary: 'grayDark-3',
    'secondary-fg': 'grayDark-12',
    muted: 'grayDark-3',
    'muted-fg': 'grayDark-11',
    segment: 'grayDark-3',
    'segment-fg': 'grayDark-11',
    'segment-active': 'grayDark-1',
    'segment-active-fg': 'grayDark-12',
    accent: 'grayDark-4',
    'accent-dark': 'grayDark-5',
    'accent-fg': 'grayDark-12',
    'primary-1': 'tealDark-3',
    'primary-2': 'tealDark-4',
    'primary-3': 'tealDark-5',
    primary: 'tealDark-9',
    'primary-5': 'tealDark-10',
    'primary-6': 'tealDark-11',
    'destructive-1': 'redDark-3',
    'destructive-2': 'redDark-4',
    'destructive-3': 'redDark-5',
    destructive: 'redDark-9',
    'destructive-5': 'redDark-10',
    'destructive-6': 'redDark-11',
    'warning-1': 'yellowDark-3',
    'warning-2': 'yellowDark-4',
    'warning-3': 'yellowDark-5',
    warning: 'yellowDark-9',
    'warning-5': 'yellowDark-10',
    'warning-6': 'yellowDark-11',
    'success-1': 'greenDark-3',
    'success-2': 'greenDark-4',
    'success-3': 'greenDark-5',
    success: 'greenDark-9',
    'success-5': 'greenDark-10',
    'success-6': 'greenDark-11',
    'info-1': 'blueDark-3',
    'info-2': 'blueDark-4',
    'info-3': 'blueDark-5',
    info: 'blueDark-9',
    'info-5': 'blueDark-10',
    'info-6': 'blueDark-11',
    body: 'grayDark-2',
    button: 'grayDark-3',
    border: 'grayDark-6',
    input: 'grayDark-4',
    'ring-accent': 'grayDark-7',
    'ring-focus': 'grayDark-8',
    'chart-1': '12 76% 61%',
    'chart-2': '173 58% 39%',
    'chart-3': '197 37% 24%',
    'chart-4': '43 74% 66%',
    'chart-5': '27 87% 67%',
  },
} as const
`

async function generate() {
  Object.entries(radixColors).forEach(([colorName, color]) => {
    if (colorName.match(/(P3|A)$/) || colorName === 'default') return

    file += `  ${colorName}: [\n`

    Object.entries(color).forEach(([shade, value]) => {
      const scale = parseInt(shade.match(/\d+$/)?.[0] || '0')
      if (!scale) return
      file += `    {
      scale: ${scale},
      hex: '${value}',
      rgb: '${hex2rgb(value)}',
      hsl: '${hex2hsl(value)}',
    },
`
    })

    file += `  ],\n`
  })

  file += `}\n`

  file += MAPPING

  await writeFile('registry/radix-colors.ts', file)
}

await generate()

// ====================
// Helper functions
// ====================

function t(num: number) {
  const dec = num.toFixed(1)
  return dec.endsWith('.0') ? dec.slice(0, -2) : dec
}

function hexToRgb(hex: string) {
  const hexValue = hex.replace('#', '')
  return [
    parseInt(hexValue.substring(0, 2), 16),
    parseInt(hexValue.substring(2, 4), 16),
    parseInt(hexValue.substring(4, 6), 16),
  ]
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = (max + min) / 2
  let s = h
  const l = h

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return [h * 360, s * 100, l * 100]
}

function hex2rgb(hex: string) {
  const [r, g, b] = hexToRgb(hex)
  return `rgb(${r},${g},${b})`
}

function hex2hsl(hex: string) {
  const [r, g, b] = hexToRgb(hex)
  const [h, s, l] = rgbToHsl(r, g, b)
  return `hsl(${t(h)},${t(s)}%,${t(l)}%)`
}
