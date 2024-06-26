import { buildProps, definePropType } from '@element-plus/utils-v2'
import type { SVGAttributes, ExtractPropTypes } from 'vue'

type Color = { color: string; percentage: number }
type ProgressFn = (percentage: number) => string

export const progressProps = buildProps({
  type: {
    type: String,
    default: 'line',
    values: ['line', 'circle', 'dashboard'],
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val: number): boolean => val >= 0 && val <= 100,
  },
  status: {
    type: String,
    default: '',
    values: ['', 'success', 'exception', 'warning'],
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3,
  },
  strokeWidth: {
    type: Number,
    default: 6,
  },
  strokeLinecap: {
    type: definePropType<NonNullable<SVGAttributes['stroke-linecap']>>(String),
    default: 'round',
  },
  textInside: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 126,
  },
  showText: {
    type: Boolean,
    default: true,
  },
  color: {
    type: definePropType<string | Color[] | ProgressFn>([
      String,
      Array,
      Function,
    ]),
    default: '',
  },
  format: {
    type: definePropType<ProgressFn>(Function),
    default: (percentage: number): string => `${percentage}%`,
  },
} as const)

export type ProgressProps = ExtractPropTypes<typeof progressProps>
