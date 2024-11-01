import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'

import { Calendar } from '@/registry/default/ui/calendar'

import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'
import { useConfigForm } from '../_hooks/use-config-form'

type PropsForm = {
  range: boolean
  language: 'zh' | 'en'
}

export const CalendarPreview = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 25),
  })

  const { props, form } = useConfigForm<PropsForm>([
    {
      name: 'range',
      type: 'switch',
      defaultValue: false,
    },
    {
      name: 'language',
      type: 'select',
      options: ['en', 'zh'],
      defaultValue: 'en',
    },
  ])

  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Calendar</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard form={form}>
        {props.range ? (
          <Calendar
            language={props.language}
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
          />
        ) : (
          <Calendar
            language={props.language}
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        )}
      </ComponentPreviewCard>
    </section>
  )
}
