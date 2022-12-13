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
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>
<style scoped lang="scss"></style>
