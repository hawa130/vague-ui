import { Search } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Input, inputWrapperVariants } from '@/registry/default/ui/input'
import { Textarea } from '@/registry/default/ui/textarea'
import { Button } from '@/registry/default/ui/button'

import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { useConfigForm } from '../_hooks/use-config-form'

type PropsForm = { disabled: boolean }

export const InputPreview = () => {
  const { props, form } = useConfigForm<PropsForm>([
    {
      name: 'disabled',
      type: 'switch',
      defaultValue: false,
    },
  ])

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Input</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <div className="w-full flex flex-col items-center gap-3">
          <section className="w-full">
            <div className="w-full text-sm mb-1">Input</div>
            <Input type="email" placeholder="Email" {...props} />
          </section>
          <section className="w-full">
            <div className="w-full text-sm mb-1">Combined Input</div>
            <div className="w-full flex join">
              <label className={cn(inputWrapperVariants(), 'flex-grow')}>
                <Search className="h-4 w-4 mr-2 text-muted-fg" />
                <input placeholder="Search..." {...props} />
              </label>
              <Button className="flex-shrink-0" size="icon-md">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </section>
          <section className="w-full">
            <div className="w-full text-sm mb-1">Textarea</div>
            <Textarea placeholder="Type your message here." {...props} />
          </section>
        </div>
      </ComponentPreviewCard>
    </section>
  )
}
