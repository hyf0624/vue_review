<template>
  <div id="app">
    <ul>
      <li>
        <!-- 路由query传参方式 -->
        <router-link to="/home">Home</router-link>
      </li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {}
}
</script>
<style scoped>
ul li {
  list-style-type: none;
}
</style>
