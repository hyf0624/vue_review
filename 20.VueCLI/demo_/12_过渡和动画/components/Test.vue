<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">测试信息</h1>
    </transition>
  </div>
</template>

<script>
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
.hello-enter-active {
  animation: demo 0.5s linear;
}
.hello-leave-active {
  animation: demo 0.5s linear reverse;
}
@keyframes demo {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
