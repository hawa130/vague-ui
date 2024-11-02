import { ComponentProps } from 'react'

import { Button } from '@/registry/default/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/default/ui/tooltip'

import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { useConfigForm } from '../_hooks/use-config-form'

type PreviewForm = Partial<ComponentProps<typeof TooltipContent>>

export const TooltipPreview = () => {
  const { props: contentProps, form } = useConfigForm<PreviewForm>([
    {
      name: 'side',
      type: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: 'top',
    },
    {
      name: 'align',
      type: 'radio',
      options: ['start', 'center', 'end'],
      defaultValue: 'center',
    },
    {
      name: 'showArrow',
      displayName: 'show arrow',
      type: 'switch',
      defaultValue: true,
    },
  ])

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Tooltip</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover on me</Button>
            </TooltipTrigger>
            <TooltipContent {...contentProps}>This is a tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ComponentPreviewCard>
    </section>
  )
}
