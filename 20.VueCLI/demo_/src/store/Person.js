import axios from 'axios'
export default {
  namespaced: true,
  state: () => {
    return {
      info: ''
    }
  },
  mutations: {
    editInfo(state, payload) {
      state.info = payload
    }
  },
  actions: {
    // 通过请求获取数据
    getInfo({ commit }, value) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then((res) => {
        commit('editInfo', res.data)
      })
    }
  },
  getters: {
    getInfo_(state) {
      return state.info
    }
  }
}
