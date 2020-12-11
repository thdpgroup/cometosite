import { Module } from 'vuex'

import { MThemeState } from '../../../model/state'

import state from './state'
import mutations from './mutations'
import actions from './actions'

const themeModule: Module<MThemeState, {}> = {
  actions,
  mutations,
  namespaced: true,
  state
}

export default themeModule
