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
      name: 'color',
      type: 'select',
      options: ['default', 'primary', 'destructive', 'warning', 'success', 'info'],
      defaultValue: 'primary',
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
        <div className="flex flex-wrap gap-4">
          {['filled', 'soft', 'surface', 'outline', 'dashed', 'dot'].map((variant) => (
            <Badge key={variant} {...props} variant={variant as any}>
              {variant}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm">
          <Badge {...props} />
          {props.color}
        </div>
      </ComponentPreviewCard>
    </section>
  )
}
