import { Alert, type AlertProps } from '@/registry/default/ui/alert'
import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { useConfigForm } from '../_hooks/use-config-form'

export const AlertPreview = () => {
  const { props, form } = useConfigForm<AlertProps>([
    {
      name: 'title',
      type: 'input',
      defaultValue: 'Invalid Credentials',
    },
    {
      name: 'children',
      type: 'input',
      defaultValue: 'Your session has expired. Please log in again.',
    },
    {
      name: 'variant',
      type: 'radio',
      options: ['surface', 'outline', 'soft'],
      defaultValue: 'surface',
    },
    {
      name: 'color',
      type: 'select',
      options: ['default', 'primary', 'destructive', 'warning', 'success', 'info'],
      defaultValue: 'info',
    },
  ])

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Alert</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <Alert {...props} />
      </ComponentPreviewCard>
    </section>
  )
}
