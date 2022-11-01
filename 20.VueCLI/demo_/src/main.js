import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  // 引入vuex
  router,
  // 定义全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')

