import { Button } from '@/registry/default/ui/button'
import { Blend, Palette } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/registry/default/ui/tooltip'
import * as React from 'react'

export const GrayToggle = ({
  value = false,
  onChange,
}: {
  value?: boolean
  onChange?: (value: boolean) => void
}) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="group"
            data-gray={value ? '' : undefined}
            onClick={() => onChange?.(!value)}
            size="icon-md"
          >
            <Palette className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-data-[gray]:-rotate-90 group-data-[gray]:scale-0" />
            <Blend className="h-[1.2rem] w-[1.2rem] absolute rotate-90 scale-0 transition-all group-data-[gray]:rotate-0 group-data-[gray]:scale-100" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {value ? 'Gray mode' : 'Color mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
