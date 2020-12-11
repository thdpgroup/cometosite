import { createStore, ModuleTree } from 'vuex'

import theme from './modules/theme'

const modules: ModuleTree<{}> = {
  theme
}

export default createStore({
  modules
})
