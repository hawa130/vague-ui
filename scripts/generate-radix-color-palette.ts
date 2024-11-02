import { writeFile } from 'node:fs/promises'

import * as radixColors from '@radix-ui/colors'

let file = `import { Colors } from '@/registry/colors/types'

export default {
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

async function generatePalette() {
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

  file += `} satisfies Colors\n`

  await writeFile('registry/colors/palettes/radix-colors.ts', file)
}

async function generateMapping() {
  const baseMap = {
    primary: 'indigo',
    destructive: 'red',
    warning: 'orange',
    success: 'green',
    info: 'blue',
    gray: 'gray',
  }

  const cssVars: Record<string, Record<string, string>> = {
    light: {},
    dark: {},
  }

  for (const [base, color] of Object.entries(baseMap)) {
    Array.from({ length: 12 }, (_, i) => i + 1).forEach((scale) => {
      cssVars.light[`${base}-${scale}`] = `${color}-${scale}`
      cssVars.dark[`${base}-${scale}`] = `${color}Dark-${scale}`
    })
  }

  await writeFile(
    'registry/colors/radix-color-mapping.ts',
    `export const colorMapping = ${JSON.stringify(cssVars, null, 2).replaceAll('"', "'")}`,
  )
}

await generatePalette()

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
