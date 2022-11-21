<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- query方式传参: router-link写法 -->
          <!-- <router-link class="list-group-item" active-class="active" to="/home/news?id=666&title=你好">News</router-link> -->
          <button @click="toNews">跳转到news</button>
        </li>
        <li>
          <!-- <router-link class="list-group-item" active-class="active" to="/home/message/666/你好啊">Message</router-link> -->
          <button @click="toMessage">跳转到Message</button>
        </li>
      </ul>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    toNews() {
      // 通过方法的形式路由跳转
      this.$router.push({
        path: '/home/news',
        query: {
          id: 666,
          title: 'ni hao!'
        }
      })
    },
    toMessage() {
      this.$router.push({
        name: 'message',
        params: {
          id: 666,
          title: 'ni hao!'
        }
      })
    }
  }
}
</script>
<style scoped lang="scss"></style>
