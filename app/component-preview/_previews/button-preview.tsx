import { Button, ButtonProps } from '@/registry/default/ui/button'

import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { useConfigForm } from '../_hooks/use-config-form'

export const ButtonPreview = () => {
  const { form, props } = useConfigForm<ButtonProps>([
    {
      name: 'color',
      type: 'select',
      options: ['default', 'primary', 'destructive', 'warning', 'success', 'info'],
      defaultValue: 'primary',
    },
    {
      name: 'size',
      type: 'radio',
      options: ['2xs', 'xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    {
      name: 'loading',
      type: 'switch',
      defaultValue: false,
    },
    {
      name: 'disabled',
      type: 'switch',
      defaultValue: false,
    },
  ])

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Button</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <div className="flex gap-4 flex-wrap">
          {['filled', 'soft', 'light', 'outline', 'dashed', 'surface', 'subtle', 'ghost'].map((variant) => (
            <Button key={variant} {...props} variant={variant as any}>
              {variant}
            </Button>
          ))}
        </div>
      </ComponentPreviewCard>
    </section>
  )
}
