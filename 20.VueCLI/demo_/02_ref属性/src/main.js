// 引入vue
import Vue from "vue";
//引入App组件
import App from "./App.vue";

// 创建vm 初始化
new Vue({
  el: "#app",
  render: (h) => h(App),
});
