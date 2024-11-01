import { CalendarDays } from 'lucide-react'
import { Button } from '@/registry/default/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/registry/default/ui/hover-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/default/ui/avatar'
import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'

export const HoverCardPreview = () => {
  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Hover Card</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-fg">
                Joined December 2021
              </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentPreviewCard>
    </section>
  )
}
