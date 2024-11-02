export type Colors = Record<
  string,
  | string
  | { hex: string; rgb: string; hsl: string }
  | {
      scale: number
      hex: string
      rgb: string
      hsl: string
    }[]
>

export type ColorsData = Record<string, string | ColorsDataEntry | ColorsDataWithScale[]>

export type ColorsDataEntry = {
  hex: string
  rgb: string
  hsl: string
  rgbChannel: string
  hslChannel: string
}

export type ColorsDataWithScale = {
  scale: number
  hex: string
  rgb: string
  hsl: string
  rgbChannel: string
  hslChannel: string
}

export type ColorMapping = {
  light: Record<string, string>
  dark: Record<string, string>
}
