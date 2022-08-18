import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 定义全局事件总线
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    // 在Vue原型上绑定一个$bus，并且让其为 vm实例对象，这样$bus身上$on, $emit, $off 都可以使用
    Vue.prototype.$bus = this
  }
}).$mount('#app')

