import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 引入插件
import plugins from './plugin'
// 应用(使用)插件
Vue.use(plugins, 1, 2, 3)
new Vue({
  render: (h) => h(App)
}).$mount('#app')

