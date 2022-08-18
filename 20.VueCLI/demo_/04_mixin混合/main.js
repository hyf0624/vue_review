import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 全局混入
import { globalMixin } from './mixin'
Vue.mixin(globalMixin)
new Vue({
  render: (h) => h(App)
}).$mount('#app')

