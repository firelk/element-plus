import type { ComputedRef } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { AnyFunction } from '@element-plus/utils/types'
export interface ICheckboxGroupInstance {
  name?: string
  modelValue?: ComputedRef
  disabled?: ComputedRef<boolean>
  min?: ComputedRef<string | number>
  max?: ComputedRef<string | number>
  size?: ComputedRef<string>
  fill?: ComputedRef<string>
  textColor?: ComputedRef<string>
  checkboxGroupSize?: ComputedRef<ComponentSize>
  changeEvent?: AnyFunction<any>
}
