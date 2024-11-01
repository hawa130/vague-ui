import { ReactElement, useState } from 'react'
import { ComponentConfigForm, ComponentConfigFormItem } from '../_components/component-preview-card'

const extractDefaultValue = <T extends Record<string, any>>(
  items: ComponentConfigFormItem<T>[]
): T => {
  return Object.fromEntries(
    items.map((item) => [item.name, item.defaultValue])
  ) as T
}

export const useConfigForm = <T extends Record<string, any>>(
  items: ComponentConfigFormItem<T>[]
) => {
  const [props, setProps] = useState(extractDefaultValue(items))
  const form: ReactElement = <ComponentConfigForm<T> items={items} onChange={setProps} />
  return { props, form }
}