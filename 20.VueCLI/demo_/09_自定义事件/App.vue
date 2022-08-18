<template>
  <div id="app">
    <!-- 监听子组件触发的自定义事件 这里监听的事件名称一定要和$emit 提交的事件名称一直 -->
    <User @customEvents="customEvents"></User>
    <!-- 监听$emit自定义事件的第二种方法 -->
    <!-- <User ref="user"></User> -->
    <Company :getCompanyName="getCompanyName"></Company>
  </div>
</template>

<script>
import User from './components/User.vue'
import Company from './components/Company.vue'
export default {
  name: 'App',
  components: {
    User,
    Company
  },
  data() {
    return {}
  },
  methods: {
    // 利用props 子组件传父组件
    getCompanyName(val) {
      console.log('proprs子传父', val)
    },
    // 这里的val 是$emit触发事件时传入的参数
    customEvents(val, ...params) {
      console.log(val)
      console.log(params)
    }
  },
  mounted() {
    // 在mounted中 监听事件， 这种方式可以很灵活
    setTimeout(() => {
      this.$refs.user.$on('customEvents', this.customEvents)
    }, 3000)
  }
}
</script>
<style scoped>
#App {
  padding: 20px;
  background: #ddd;
}
</style>

