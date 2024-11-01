export const styles = [
  {
    name: 'default',
    label: 'Default',
  },
  {
    name: 'new-york',
    label: 'Do not use',
  },
] as const

export type Style = (typeof styles)[number]
