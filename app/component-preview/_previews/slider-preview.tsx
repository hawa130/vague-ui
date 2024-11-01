import { ComponentProps, useState } from 'react'
import { Slider } from '@/registry/default/ui/slider'
import { Progress } from '@/registry/default/ui/progress'
import { Input } from '@/registry/default/ui/input'
import { RingProgress } from '@/registry/default/ui/ring-progress'
import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { useConfigForm } from '../_hooks/use-config-form'

type SliderProps = ComponentProps<typeof Slider>

export const SliderPreview = () => {
  const [value, setValue] = useState(50)

  const { props: sliderProps, form } = useConfigForm<SliderProps>([
    {
      name: 'min',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100,
    },
    {
      name: 'step',
      type: 'number',
      defaultValue: 1,
    },
  ])

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Slider & Progress</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        <div className="w-2/3">
          <Input
            className="ml-auto w-[72px]"
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
        <div className="w-2/3 mt-6">
        <Slider value={[value]} onValueChange={([v]) => setValue(v)} {...sliderProps} />
        </div>
        <div className="w-2/3 mt-7">
          <Progress value={value} max={sliderProps.max!} />
        </div>
        <div className="mt-7">
          <RingProgress value={value} max={sliderProps.max!}>
            <div className="text-sm font-medium">
              {(value / sliderProps.max! * 100).toFixed(1)}%
            </div>
          </RingProgress>
        </div>
      </ComponentPreviewCard>
    </section>
  )
}
