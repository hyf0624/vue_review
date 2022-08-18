<template>
  <div class="wrapper">
    <p>员工姓名：{{ name }}</p>
    <p>员工性别：{{ sex }}</p>
    <p>员工年龄：{{ age }}</p>
    <button @click="SonToFather">子组件传值给父组件</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      name: '方明旺',
      sex: '男',
      age: 18
    }
  },
  methods: {
    SonToFather() {
      // $emit 的第一个参数是定义事件名称, 第二个参数是传入的数据
      this.$emit('customEvents', this.name, 77, 88, 99)
    }
  }
}
</script>
<style scoped lang="less">
.wrapper {
  background: skyblue;
  padding: 5px;
}
</style>
