import { Badge, BadgeProps } from '@/registry/default/ui/badge'

import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { useConfigForm } from '../_hooks/use-config-form'

export const BadgePreview = () => {
  const { props, form } = useConfigForm<BadgeProps>([
    {
      name: 'children',
      type: 'input',
      defaultValue: 'Badge',
    },
    {
      name: 'variant',
      type: 'select',
      options: ['filled', 'light', 'outline', 'dashed'],
      defaultValue: 'filled',
    },
    {
      name: 'color',
      type: 'select',
      options: ['default', 'primary', 'destructive', 'warning', 'success', 'info'],
      defaultValue: 'default',
    },
    {
      name: 'size',
      type: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    {
      name: 'circle',
      type: 'switch',
      defaultValue: false,
    },
  ])

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Badge</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <Badge {...props} />
      </ComponentPreviewCard>
    </section>
  )
}
