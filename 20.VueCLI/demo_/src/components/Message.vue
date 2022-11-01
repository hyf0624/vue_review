<template>
  <div>
    <ul>
      <li>
        <a>message001</a>
      </li>
      <li>
        <a>message002</a>
      </li>
      <li>
        <a>message003</a>
      </li>
      <li>a: {{ id }}</li>
      <li>b: {{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['id', 'title'],
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>
<style scoped lang="scss"></style>
