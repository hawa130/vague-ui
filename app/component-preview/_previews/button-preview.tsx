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
      name: 'children',
      type: 'input',
      defaultValue: 'Button',
    },
    {
      name: 'variant',
      type: 'select',
      options: ['filled', 'light', 'soft', 'outline', 'dashed', 'ghost', 'subtle'],
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
        <Button {...props} />
      </ComponentPreviewCard>
    </section>
  )
}
