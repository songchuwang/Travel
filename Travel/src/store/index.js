import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  // actions执行的时候调用mutations
  mutations,
  // 类似于computed计算属性的作用
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
