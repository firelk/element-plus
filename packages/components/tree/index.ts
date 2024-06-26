import Tree from './src/tree.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils-v2'

Tree.install = (app: App): void => {
  app.component(Tree.name, Tree)
}

const _Tree = Tree as SFCWithInstall<typeof Tree>

export default _Tree
export const ElTree = _Tree
