export default {
  install(Vue, x, y, z) {
    console.log(x)
    console.log(y)
    console.log(z)
    // install方法中的参数默认是 Vue实例

    // 全局过滤器
    Vue.filter('publicSlice', (value, num = 4) => {
      return value.slice(0, num)
    })

    // 定义全局指令
    Vue.directive('fbind', {
      // 指令与元素成功绑定时调用
      bind(element, binding) {
        element.value = binding.value
      },
      //指令所在元素被插入页面时调用
      inserted(element) {
        element.focus()
      },
      // 指令所在模板被重新解析时调用
      update(element, binding) {
        element.value = binding.value
      }
    })

    // 全局混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200
        }
      }
    })

    // 给Vue 原型上添加一个方法
    Vue.prototype.demo = () => {
      alert('方明旺大傻逼')
    }
  }
}
