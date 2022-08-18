<template>
  <div id="app">
    <User></User>
    <Company></Company>
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
  }
}
</script>
<style scoped>
#App {
  padding: 20px;
  background: #ddd;
}
</style>

