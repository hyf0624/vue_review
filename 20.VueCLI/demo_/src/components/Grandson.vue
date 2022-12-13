<template>
  <div>
    <p>bar:{{ bar }}</p>
    <button @click="startUpFoo">我要更新foo</button>
  </div>
</template>

<script>
export default {
  name: 'Grandson',
  props: ['bar'],
  data() {
    return {}
  },
  methods: {
    startUpFoo() {
      this.$emit('upFoo', 'foooooooooooo')
      console.log('startUpFoo')
    }
  }
}
</script>
<style scoped lang="scss"></style>
