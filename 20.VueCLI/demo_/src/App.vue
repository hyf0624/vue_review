<template>
  <div id="app">
    <!-- //此处监听了两个事件，可以在B组件或者C组件中直接触发 -->
    <Child :foo="foo" :bar="bar" @upFoo="update" />
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  name: 'App',
  components: { Child },
  data() {
    return {
      foo: 'foo',
      bar: 'bar'
    }
  },
  methods: {
    update(val) {
      this.foo = val
      console.log('update success')
    }
  }
}
</script>
<style scoped></style>
