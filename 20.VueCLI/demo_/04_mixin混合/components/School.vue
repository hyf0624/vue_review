<template>
  <div>
    <p>学校名称: {{ name }}</p>
    <p>学校地址: {{ address }}</p>
    <button @click="showName">测试按钮</button>
  </div>
</template>

<script>
// 引入一个混合, 局部混入
import { mixin } from '../mixin'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',
  mixins: [mixin],
  data() {
    return {
      name: '尚硅谷',
      address: '北京'
    }
  }
}
</script>
<style scoped lang="scss"></style>
