import { Search } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/registry/default/ui/button'
import { Input, inputWrapperVariants } from '@/registry/default/ui/input'
import { Textarea } from '@/registry/default/ui/textarea'

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
        <div className="flex w-full flex-col items-center gap-3">
          <section className="w-full">
            <div className="mb-1 w-full text-sm">Input</div>
            <Input type="email" placeholder="Email" {...props} />
          </section>
          <section className="w-full">
            <div className="mb-1 w-full text-sm">Combined Input</div>
            <div className="join flex w-full">
              <label className={cn(inputWrapperVariants(), 'flex-grow')}>
                <Search className="text-muted-fg mr-2 h-4 w-4" />
                <input placeholder="Search..." {...props} />
              </label>
              <Button className="flex-shrink-0" size="icon-md">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </section>
          <section className="w-full">
            <div className="mb-1 w-full text-sm">Textarea</div>
            <Textarea placeholder="Type your message here." {...props} />
          </section>
        </div>
      </ComponentPreviewCard>
    </section>
  )
}
