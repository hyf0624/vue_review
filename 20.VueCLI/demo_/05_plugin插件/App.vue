<template>
  <div id="app">
    <StudentComponent />
    <hr />
    <SchoolComponent />
  </div>
</template>

<script>
import StudentComponent from '@/components/User.vue'
import SchoolComponent from '@/components/School.vue'
export default {
  name: 'App',
  components: { StudentComponent, SchoolComponent }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

