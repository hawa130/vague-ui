import { ComponentProps, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/registry/default/ui/form'
import { cn } from '@/lib/utils'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/registry/default/ui/select'
import { Input } from '@/registry/default/ui/input'
import { Switch } from '@/registry/default/ui/switch'
import { Segmented, SegmentedItem } from '@/registry/default/ui/segmented'

export type ComponentConfigFormItemBase = {
  displayName?: string
  description?: string
}

export type ComponentConfigFormItem<T extends Record<string, any>> = ComponentConfigFormItemBase & {
  [P in keyof T]:
  | { name: P & string; type: 'select'; options: (T[P] & string)[]; defaultValue?: T[P] & string }
  | { name: P & string; type: 'input'; placeholder?: string; defaultValue?: T[P] & string }
  | { name: P & string; type: 'switch'; defaultValue?: T[P] & boolean }
  | { name: P & string; type: 'number'; defaultValue?: T[P] & number }
  | { name: P & string; type: 'radio'; options: (T[P] & string)[]; defaultValue?: T[P] & string }
}[keyof T]

interface ComponentConfigFormField extends ComponentConfigFormItemBase, Omit<ComponentProps<typeof FormField>, 'name'> {
  name: string
}

const ComponentConfigFormField = ({ name, displayName, description, render, ...props }: ComponentConfigFormField) => {
  return (
    <FormField
      name={name}
      render={(params) => (
        <FormItem>
          <FormLabel>{displayName ?? name}</FormLabel>
          {render(params)}
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
      {...props}
    />
  )
}

export interface ComponentConfigFormProps<T extends Record<string, any>> {
  items: ComponentConfigFormItem<T>[]
  onChange?: (values: T) => void
  className?: string
}

export const ComponentConfigForm = <T extends Record<string, any>>({
  items,
  onChange,
  className,
}: ComponentConfigFormProps<T>) => {
  const defaultValues = useMemo(
    () => Object.fromEntries(items.map(item => [item.name, item.defaultValue])),
    [items],
  )

  const form = useForm({ defaultValues })

  form.watch((values) => onChange?.({ ...form.getValues(), ...values } as T))

  return (
    <Form {...form}>
      <form className={cn('space-y-2.5', className)}>
        {items.map(item => {
          switch (item.type) {
            case 'select':
              return (
                <ComponentConfigFormField
                  key={item.name}
                  name={item.name}
                  displayName={item.displayName}
                  control={form.control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {item.options.map(opt => <SelectItem key={opt} value={opt}>{opt}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  )}
                />
              )
            case 'input':
              return (
                <ComponentConfigFormField
                  key={item.name}
                  name={item.name}
                  displayName={item.displayName}
                  control={form.control}
                  render={({ field }) => (
                    <FormControl>
                      <Input placeholder={item.placeholder} {...field} />
                    </FormControl>
                  )}
                />
              )
            case 'number':
              return (
                <ComponentConfigFormField
                  key={item.name}
                  name={item.name}
                  displayName={item.displayName}
                  control={form.control}
                  render={({ field }) => (
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  )}
                />
              )
            case 'radio':
              return (
                <ComponentConfigFormField
                  key={item.name}
                  name={item.name}
                  displayName={item.displayName}
                  control={form.control}
                  render={({ field }) => (
                    <FormControl>
                      <Segmented
                        className="grid"
                        style={{ gridTemplateColumns: `repeat(${item.options.length}, minmax(0, 1fr))` }}
                        value={field.value} onValueChange={field.onChange}
                      >
                        {item.options.map(opt => <SegmentedItem value={opt} key={opt}>{opt}</SegmentedItem>)}
                      </Segmented>
                    </FormControl>
                  )}
                />
              )
            case 'switch':
              return (
                <FormField
                  key={item.name}
                  name={item.name}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex justify-between items-center">
                      <div>
                        <FormLabel>{item.displayName ?? item.name}</FormLabel>
                        {item.description && <FormDescription>{item.description}</FormDescription>}
                      </div>
                      <FormControl>
                        <Switch defaultChecked={!!field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            default:
              return null
          }
        })}
      </form>
    </Form>
  )
}
