import { Registry } from '@/registry/schema'

export const lib: Registry = [
  {
    name: 'utils',
    type: 'registry:lib',
    dependencies: ['clsx', 'tailwind-merge'],
    files: [
      {
        path: 'lib/utils.ts',
        type: 'registry:lib',
      },
    ],
  },
  {
    name: 'tailwindcss-join',
    type: 'registry:lib',
    files: [
      {
        path: 'lib/tailwindcss-join.ts',
        type: 'registry:lib',
      },
    ],
  }
]
