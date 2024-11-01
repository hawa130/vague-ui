'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

import { GrayToggle } from './_components/gray-toggle'
import { ModeToggle } from './_components/mode-toggle'
import { AlertPreview } from './_previews/alert-preview'
import { BadgePreview } from './_previews/badge-preview'
import { ButtonPreview } from './_previews/button-preview'
import { CalendarPreview } from './_previews/calendar-preview'
import { CheckboxPreview } from './_previews/checkbox-preview'
import { HoverCardPreview } from './_previews/hover-card-preview'
import { InputPreview } from './_previews/input-preview'
import { PopoverPreview } from './_previews/popover-preview'
import { RadioPreview } from './_previews/radio-preview'
import { SliderPreview } from './_previews/slider-preview'
import { TabsPreview } from './_previews/tabs-preview'
import { ToastPreview } from './_previews/toast-preview'
import { TooltipPreview } from './_previews/tooltip-preview'

export default function Page() {
  const [isGray, setIsGray] = useState(false)

  return (
    <main className={cn('mx-auto max-w-5xl px-5 py-8', isGray && 'grayscale')}>
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">Component Preview</h1>
        <div className="flex items-center gap-2">
          <GrayToggle value={isGray} onChange={setIsGray} />
          <ModeToggle />
        </div>
      </div>
      <div className="space-y-6">
        <ButtonPreview />
        <ToastPreview />
        <TooltipPreview />
        <HoverCardPreview />
        <PopoverPreview />
        <CheckboxPreview />
        <RadioPreview />
        <CalendarPreview />
        <InputPreview />
        <BadgePreview />
        <SliderPreview />
        <AlertPreview />
        <TabsPreview />
      </div>
    </main>
  )
}
