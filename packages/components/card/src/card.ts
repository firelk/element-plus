import { buildProps, definePropType } from '@element-plus/utils-v2'
import type Card from './card.vue'
import type { ExtractPropTypes, StyleValue } from 'vue'

export const cardProps = buildProps({
  header: {
    type: String,
    default: '',
  },
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  },
  shadow: {
    type: String,
    default: 'always',
  },
} as const)
export type CardProps = ExtractPropTypes<typeof cardProps>
export type CardInstance = InstanceType<typeof Card>
