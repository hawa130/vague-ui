import { existsSync, promises as fs } from 'fs'
import { tmpdir } from 'os'
import path from 'path'

import { rimraf } from 'rimraf'
import { Project, ScriptKind } from 'ts-morph'
import { z } from 'zod'

import { registry } from '@/registry'
import { styles } from '@/registry/registry-styles'
import { buildColorsData, colorMapping, colors } from '@/registry/registry-themes'
import { Registry, RegistryEntry, registryEntrySchema, registryItemTypeSchema, registrySchema } from '@/registry/schema'

const REGISTRY_PATH = path.join(process.cwd(), 'public/registry')

if (!existsSync(REGISTRY_PATH)) {
  await fs.mkdir(REGISTRY_PATH, { recursive: true })
}

const REGISTRY_INDEX_WHITELIST: z.infer<typeof registryItemTypeSchema>[] = [
  'registry:ui',
  'registry:lib',
  'registry:hook',
  'registry:theme',
]

const project = new Project({
  compilerOptions: {},
})

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), 'vague-'))
  return path.join(dir, filename)
}

// ----------------------------------------------------------------------------
// Build registry-index/index.tsx.
// ----------------------------------------------------------------------------
async function buildRegistry(registry: Registry) {
  let index = `// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from 'react'

export const Index = {
`

  for (const style of styles) {
    if (style.name === 'new-york') continue

    index += `  '${style.name}': {`

    // Build style index.
    for (const item of registry) {
      const resolveFiles = item.files?.map(
        (file) => `registry/${style.name}/${typeof file === 'string' ? file : file.path}`,
      )
      if (!resolveFiles) {
        continue
      }

      const type = item.type.split(':')[1]
      let sourceFilename = ''

      let chunks: any = []

      let componentPath = `@/registry/${style.name}/${type}/${item.name}`

      if (item.files) {
        const files = item.files.map((file) =>
          typeof file === 'string' ? { type: 'registry:page', path: file } : file,
        )
        if (files?.length) {
          componentPath = `@/registry/${style.name}/${files[0].path}`
        }
      }

      index += `
    '${item.name}': {
      name: '${item.name}',
      description: '${item.description ?? ''}',
      type: '${item.type}',
      registryDependencies: ${item.registryDependencies ? `[${item.registryDependencies.map((dep) => `'${dep}'`)}]` : '[]'},
      files: [${resolveFiles.map((file) => `'${file}'`)}],
      component: React.lazy(() => import('${componentPath}')),
      source: '${sourceFilename}',
      category: '${item.category ?? ''}',
      subcategory: '${item.subcategory ?? ''}',
      chunks: [${chunks.map(
        (chunk: any) => `{
        name: '${chunk.name}',
        description: '${chunk.description ?? 'No description'}',
        component: ${chunk.component}
        file: '${chunk.file}',
        container: {
          className: '${chunk.container.className}'
        }
      }`,
      )}]
    },`
    }

    index += `
  },`
  }

  index += `
}
`

  // ----------------------------------------------------------------------------
  // Build registry/index.json.
  // ----------------------------------------------------------------------------
  const items = registry
    .filter((item) => ['registry:ui'].includes(item.type))
    .map((item) => {
      return {
        ...item,
        files: item.files?.map((_file) => {
          const file =
            typeof _file === 'string'
              ? {
                  path: _file,
                  type: item.type,
                }
              : _file

          return file
        }),
      }
    })
  const registryJson = JSON.stringify(items, null, 2)
  rimraf.sync(path.join(REGISTRY_PATH, 'index.json'))
  await fs.writeFile(path.join(REGISTRY_PATH, 'index.json'), registryJson, 'utf8')

  // Write style index.
  rimraf.sync(path.join(process.cwd(), 'registry-index/index.tsx'))
  await fs.writeFile(path.join(process.cwd(), 'registry-index/index.tsx'), index)
}

// ----------------------------------------------------------------------------
// Build registry/styles/[style]/[name].json.
// ----------------------------------------------------------------------------
async function buildStyles(registry: Registry) {
  for (const style of styles) {
    if (style.name === 'new-york') continue

    const targetPath = path.join(REGISTRY_PATH, 'styles', style.name)

    // Create directory if it doesn't exist.
    if (!existsSync(targetPath)) {
      await fs.mkdir(targetPath, { recursive: true })
    }

    for (const item of registry) {
      if (!REGISTRY_INDEX_WHITELIST.includes(item.type)) {
        continue
      }

      let files
      if (item.files) {
        files = await Promise.all(
          item.files.map(async (_file) => {
            const file =
              typeof _file === 'string'
                ? {
                    path: _file,
                    type: item.type,
                    content: '',
                    target: '',
                  }
                : _file

            let content: string
            try {
              content = await fs.readFile(path.join(process.cwd(), 'registry', style.name, file.path), 'utf8')
            } catch (error) {
              return
            }

            const tempFile = await createTempSourceFile(file.path)
            const sourceFile = project.createSourceFile(tempFile, content, {
              scriptKind: ScriptKind.TSX,
            })

            sourceFile.getVariableDeclaration('iframeHeight')?.remove()
            sourceFile.getVariableDeclaration('containerClassName')?.remove()
            sourceFile.getVariableDeclaration('description')?.remove()

            let target = file.target

            return {
              path: file.path,
              type: file.type,
              content: sourceFile.getText(),
              target,
            }
          }),
        )
      }

      const payload = registryEntrySchema
        .omit({
          source: true,
          category: true,
          subcategory: true,
          chunks: true,
        })
        .safeParse({
          ...item,
          files,
        })

      if (payload.success) {
        await fs.writeFile(path.join(targetPath, `${item.name}.json`), JSON.stringify(payload.data, null, 2), 'utf8')
      }
    }
  }

  // ----------------------------------------------------------------------------
  // Build registry/styles/index.json.
  // ----------------------------------------------------------------------------
  const stylesJson = JSON.stringify(styles, null, 2)
  await fs.writeFile(path.join(REGISTRY_PATH, 'styles/index.json'), stylesJson, 'utf8')
}

// ----------------------------------------------------------------------------
// Build registry/styles/[name]/index.json.
// ----------------------------------------------------------------------------
async function buildStylesIndex() {
  for (const style of styles) {
    if (style.name === 'new-york') continue

    const targetPath = path.join(REGISTRY_PATH, 'styles', style.name)

    const dependencies = ['tailwindcss-animate', 'tailwindcss-radix-colors', 'class-variance-authority', 'lucide-react']

    const payload: RegistryEntry = {
      name: style.name,
      type: 'registry:style',
      dependencies,
      registryDependencies: ['utils', 'tailwindcss-join'],
      tailwind: {
        config: {
          theme: {
            extend: {
              transitionDuration: {
                DEFAULT: '100ms',
              },
            },
          },
          plugins: [
            `require('tailwindcss-animate')`,
            `require('tailwindcss-radix-colors')`,
            `require('./lib/tailwindcss-join')`,
          ],
        },
      },
      cssVars: {},
      files: [],
    }

    await fs.writeFile(path.join(targetPath, 'index.json'), JSON.stringify(payload, null, 2), 'utf8')
  }
}

// ----------------------------------------------------------------------------
// Build registry/colors/index.json.
// ----------------------------------------------------------------------------
async function buildThemes() {
  const colorsTargetPath = path.join(REGISTRY_PATH, 'colors')
  rimraf.sync(colorsTargetPath)
  if (!existsSync(colorsTargetPath)) {
    await fs.mkdir(colorsTargetPath, { recursive: true })
  }

  const colorsData = buildColorsData(colors) as Record<string, any>

  await fs.writeFile(path.join(colorsTargetPath, 'index.json'), JSON.stringify(colorsData, null, 2), 'utf8')

  // ----------------------------------------------------------------------------
  // Build registry/colors/[base].json.
  // ----------------------------------------------------------------------------
  for (const baseColor of ['slate', 'gray', 'zinc', 'neutral', 'stone']) {
    const base: Record<string, any> = {
      inlineColors: {},
      cssVars: {},
      inlineColorsTemplate: '',
      cssVarsTemplate: '',
    }
    for (const [mode, values] of Object.entries(colorMapping)) {
      base['inlineColors'][mode] = {}
      base['cssVars'][mode] = {}
      for (const [key, value] of Object.entries(values)) {
        if (typeof value === 'string') {
          // hsl literal
          if (value.match(/^\d{1,3}\s+\d{1,3}(?:\.\d+)?%\s+\d{1,3}(?:\.\d+)?%$/)) {
            base['cssVars'][mode][key] = value
            continue
          }

          const resolvedColor = value.replace(/{{base}}-/g, `${baseColor}-`)
          base['inlineColors'][mode][key] = resolvedColor

          const [resolvedBase, scale] = resolvedColor.split('-')
          const color = scale
            ? colorsData[resolvedBase].find((item: any) => item.scale === parseInt(scale))
            : colorsData[resolvedBase]
          if (color) {
            base['cssVars'][mode][key] = color.hslChannel
          }
        }
      }
    }

    await fs.writeFile(path.join(REGISTRY_PATH, `colors/${baseColor}.json`), JSON.stringify(base, null, 2), 'utf8')
  }
}

try {
  const result = registrySchema.safeParse(registry)

  if (!result.success) {
    console.error(result.error)
    process.exit(1)
  }

  await buildRegistry(result.data)
  await buildStyles(result.data)
  await buildStylesIndex()
  await buildThemes()

  console.log('✅ Done!')
} catch (error) {
  console.error(error)
  process.exit(1)
}
