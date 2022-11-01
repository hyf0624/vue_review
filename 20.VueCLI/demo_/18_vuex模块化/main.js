import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from 'vue-router'
Vue.use(router)
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  // 引入vuex
  store,
  router,
  // 定义全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')

