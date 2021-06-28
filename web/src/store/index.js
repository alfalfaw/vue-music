import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainNavigationVisible: true
  },
  mutations: {
    // 更新导航栏状态
    updateMainNav(state, val) {
      state.mainNavigationVisible = val
    }
  },
  actions: {},
  modules: {},
  getters: {
    // ...
    mainNavigationVisible: state => state.mainNavigationVisible
  }
})
