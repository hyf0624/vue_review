import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//该文件用于创建vuex中最为核心的store
const state = {
  sum: 0,
  flag: true
  // 其他存储的数据...
}
const mutations = {
  INCREMENT(state, payload) {
    state.sum += payload
  },
  DECREMENT(state, payload) {
    state.sum -= payload
  },
  INCREMENTODD(state, payload) {
    if (state.sum % 2) {
      state.sum += payload
    }
  }
}
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}
const actions = {
  increment_Wait(contxt, payload) {
    setTimeout(() => {
      contxt.commit('INCREMENT', payload)
    }, 500)
  }
}

// 创建store
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
//导出
export default store
