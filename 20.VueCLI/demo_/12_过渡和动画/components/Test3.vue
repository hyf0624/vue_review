<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="animate__animated animate__bounce" appear appear-active-class="animate__swing" leave-active-class="animate__backOutUp">
      <h1 v-show="isShow" key="1">测试信息</h1>
      <h1 v-show="!isShow" key="2">测试信息222</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: '',
  data() {
    return {
      isShow: true
    }
  }
}
</script>
<style scoped lang="less">
h1 {
  background: orange;
}
</style>
