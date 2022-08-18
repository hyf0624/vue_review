<template>
  <div>
    <p>学校名称: {{ name | publicSlice }}</p>
    <p>学校地址: {{ address }}</p>
    <button @click="clickBtn">测试按钮</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',

  data() {
    return {
      name: '尚硅谷atguihu',
      address: '北京'
    }
  },
  methods: {
    clickBtn() {
      this.demo()
    }
  }
}
</script>
<style scoped lang="scss"></style>
