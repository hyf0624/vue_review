<template>
  <div class="wrapper">
    <p>公司名称：{{ companyName }}</p>
    <p>公司地址：{{ address }}</p>
    <p>公司法人：{{ person }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Company',
  props: ['getCompanyName'],
  data() {
    return {
      companyName: '英特讯',
      address: '舟山',
      person: '李晨',
      msg: ''
    }
  },

  mounted() {
    this.$bus.$on('brotherTrigger', (value) => {
      console.log(value)
      console.log(this)
      this.msg = value
    })
  },
  beforeDestroy() {
    this.$bus.$off('brotherTrigger')
  }
}
</script>
<style scoped lang="less">
.wrapper {
  background: orange;
  padding: 5px;
}
</style>
