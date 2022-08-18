<template>
  <div>
    <p>学生姓名: {{ name }}</p>
    <p>学生年龄: {{ age }}</p>
    <button @click="showName">测试按钮</button>
  </div>
</template>

<script>
import { mixin } from '../mixin'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  mixins: [mixin],
  data() {
    return {
      name: '方明旺',
      age: 18
    }
  }
}
</script>
<style scoped lang="scss"></style>
