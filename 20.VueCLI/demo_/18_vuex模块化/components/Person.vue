<template>
  <div>
    <h3>Person组件通过请求获取到的信息: {{ info }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Person',
  data() {
    return {}
  },
  computed: {
    info() {
      return this.$store.getters['person/getInfo_']
    }
  },
  mounted() {
    console.log(this.$store)
    this.$store.dispatch('person/getInfo')
  }
}
</script>
<style scoped lang="scss"></style>
