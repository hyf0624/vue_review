export default {
  namespaced: true,
  state: () => {
    return {
      sum: 0,
      flag: true
    }
  },
  mutations: {
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
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  },
  actions: {
    increment_Wait(contxt, payload) {
      setTimeout(() => {
        contxt.commit('INCREMENT', payload)
      }, 500)
    }
  }
}
