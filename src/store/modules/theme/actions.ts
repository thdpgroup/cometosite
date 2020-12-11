import { ActionTree } from 'vuex'

import { MThemeState } from '@/model/state'

import themeApi from '@/api/themeApi'

const actions: ActionTree<MThemeState, {}> = {
  async dispatchTheme({ commit }) {
    const payload = await themeApi.getTheme()
    commit('saveTheme', payload.data.data.matches)
  }
}

export default actions
