<template>
  <div>
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>
<style scoped lang="scss"></style>
