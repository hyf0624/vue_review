import Vue from 'vue'

import App from './App.vue'

import { Button } from 'element-ui'
Vue.use(Button)

Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  // 引入vuex

  // 定义全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')

