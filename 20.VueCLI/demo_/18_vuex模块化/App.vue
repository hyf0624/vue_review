<template>
  <div id="app">
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue'
export default {
  name: 'App',
  components: {
    Count,
    Person
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped></style>
