import { withInstall, withNoopInstall } from '@element-plus/utils-v2'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

export const ElTabs = withInstall(Tabs, {
  TabPane,
})
export default ElTabs
export const ElTabPane = withNoopInstall(TabPane)

export * from './src/tabs'
export * from './src/tab-bar'
export * from './src/tab-nav'
export * from './src/tab-pane'
