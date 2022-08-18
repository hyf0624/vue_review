<template>
  <div id="app">
    <button @click="getUserInfo">获取用户信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',

  data() {
    return {}
  },
  methods: {
    getUserInfo() {
      axios
        .get('http://localhost:8877/test/students')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {})
    }
  }
}
</script>

