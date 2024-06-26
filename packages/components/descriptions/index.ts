import { withInstall, withNoopInstall } from '@element-plus/utils-v2'

import Descriptions from './src/index.vue'
import DescriptionsItem from './src/description-item'

export const ElDescriptions = withInstall(Descriptions, {
  DescriptionsItem,
})
export default ElDescriptions

export const ElDescriptionsItem = withNoopInstall(DescriptionsItem)
