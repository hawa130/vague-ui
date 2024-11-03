import defaultMapping from './colors/mapping/default-mapping'
import radixColors from './colors/palettes/radix-colors'
import { ColorMapping, Colors, ColorsData, ColorsDataEntry } from './colors/types'
import { Registry } from './schema'

export const colorMapping: ColorMapping = defaultMapping
export const colors: Colors = radixColors

export const themes: Registry = [
  {
    name: 'theme-default',
    type: 'registry:theme',
    cssVars: transformTheme(defaultMapping, radixColors),
  },
]

export function buildColorsData(colors: Colors) {
  const colorsData: ColorsData = {}
  for (const [color, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      colorsData[color] = value
      continue
    }

    if (Array.isArray(value)) {
      colorsData[color] = value.map((item) => ({
        ...item,
        rgbChannel: item.rgb.replace(/^rgb\((\d+),(\d+),(\d+)\)$/, '$1 $2 $3'),
        hslChannel: item.hsl.replace(/^hsl\(([\d.]+),([\d.]+%),([\d.]+%)\)$/, '$1 $2 $3'),
      }))
      continue
    }

    if (typeof value === 'object') {
      colorsData[color] = {
        ...value,
        rgbChannel: value.rgb.replace(/^rgb\((\d+),(\d+),(\d+)\)$/, '$1 $2 $3'),
        hslChannel: value.hsl.replace(/^hsl\(([\d.]+),([\d.]+%),([\d.]+%)\)$/, '$1 $2 $3'),
      }
    }
  }
  return colorsData
}

function transformTheme(mapping: ColorMapping, colors: Colors) {
  const colorsData = buildColorsData(colors)

  const cssVars: Record<string, Record<string, string>> = {
    light: {},
    dark: {},
  }
  for (const [mode, values] of Object.entries(mapping)) {
    for (const [key, value] of Object.entries(values)) {
      // hsl literal
      if (value.match(/^([\d.]+)\s+([\d.]+%)\s+([\d.]+%)$/)) {
        cssVars[mode][key] = value
        continue
      }

      const [resolvedBase, scale] = value.split('-')
      const color = scale
        ? Array.isArray(colorsData[resolvedBase])
          ? colorsData[resolvedBase].find((item) => item.scale === parseInt(scale))
          : undefined
        : (colorsData[resolvedBase] as ColorsDataEntry)

      if (color && typeof color === 'object') {
        cssVars[mode][key] = color.hslChannel
      }
    }
  }
  return cssVars
}
