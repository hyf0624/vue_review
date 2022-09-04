import Vuex from 'vuex'
import Vue from 'vue'
import count from './Count'
import person from './Person'
Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
  modules: {
    count,
    person
  }
})
//导出
export default store
