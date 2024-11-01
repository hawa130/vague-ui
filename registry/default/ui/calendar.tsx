'use client'

import { enUS, zhCN } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/registry/default/ui/button'

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  language?: 'zh' | 'en'
}

function Calendar({ className, classNames, language, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      locale={((lng) => {
        switch (lng) {
          case 'zh':
            return zhCN
          case 'en':
          default:
            return enUS
        }
      })(language)}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline', color: 'default' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 focus-visible:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-muted-fg rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost', color: 'default' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100',
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-fg-invert hover:bg-primary hover:text-fg-invert focus:bg-primary focus:text-fg-invert',
        day_today: '[&:not([aria-selected])]:bg-accent [&:not([aria-selected])]:text-accent-fg',
        day_outside:
          'day-outside text-muted-fg opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-fg aria-selected:opacity-30',
        day_disabled: '[&:not([aria-selected])]:text-muted-fg [&:not([aria-selected])]:opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-fg',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
