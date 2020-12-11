import { MutationTree } from 'vuex'

import { MThemeState } from '../../../model/state'
import MTheme from '../../../model/theme'

const mutations: MutationTree<MThemeState> = {
  saveTheme(state: MThemeState, data: Array<MTheme>) {
    state.themeList = data
  }
}

export default mutations
