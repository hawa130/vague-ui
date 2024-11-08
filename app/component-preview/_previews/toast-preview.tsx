import { toast } from 'sonner'

import { Button } from '@/registry/default/ui/button'

import {
  ComponentPreviewCard,
  ComponentPreviewHeader,
  ComponentPreviewTitle,
} from '../_components/component-preview-card'

export const ToastPreview = () => {
  return (
    <section>
      <ComponentPreviewHeader>
        <ComponentPreviewTitle>Toast</ComponentPreviewTitle>
      </ComponentPreviewHeader>
      <ComponentPreviewCard>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="surface"
            color="primary"
            onClick={() =>
              toast('Event has been created', {
                description: 'Monday, January 3rd at 6:00pm',
                action: {
                  label: 'Undo',
                  onClick: () => console.log('Undo'),
                },
                cancel: {
                  label: 'Dismiss',
                  onClick: () => console.log('Dismiss'),
                },
              })
            }
          >
            Default
          </Button>
          <Button
            variant="surface"
            color="success"
            onClick={() =>
              toast.success('Event has been created', {
                description: 'You can now view the event in the calendar',
              })
            }
          >
            Success
          </Button>
          <Button
            variant="surface"
            color="info"
            onClick={() => toast.info('Be at the area 10 minutes before the event time')}
          >
            Info
          </Button>
          <Button
            variant="surface"
            color="warning"
            onClick={() => toast.warning('Event start time cannot be earlier than 8am')}
          >
            Warning
          </Button>
          <Button variant="surface" color="destructive" onClick={() => toast.error('Event has not been created')}>
            Error
          </Button>
          <Button
            variant="surface"
            onClick={() => {
              const promise = () =>
                new Promise<{ name: string }>((resolve) => {
                  setTimeout(() => resolve({ name: 'Sonner' }), 2000)
                })
              toast.promise(promise, {
                loading: 'Loading...',
                success: (data: { name: string }) => {
                  return `${data.name} toast has been added`
                },
                error: 'Error',
              })
            }}
          >
            Promise
          </Button>
        </div>
      </ComponentPreviewCard>
    </section>
  )
}
