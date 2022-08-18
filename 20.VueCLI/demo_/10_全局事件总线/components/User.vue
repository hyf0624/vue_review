<template>
  <div class="wrapper">
    <p>员工姓名：{{ name }}</p>
    <p>员工性别：{{ sex }}</p>
    <p>员工年龄：{{ age }}</p>
    <button @click="TriggerEvent">$emit发送事件</button>
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
    TriggerEvent() {
      this.$bus.$emit('brotherTrigger', '666')
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
