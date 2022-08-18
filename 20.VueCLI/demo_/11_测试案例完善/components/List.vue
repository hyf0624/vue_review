<template>
  <ul class="todo-main">
    <transition-group name="handle" appear>
      <Item v-for="(item, index) in list" :key="index" :options="item"></Item>
    </transition-group>
  </ul>
</template>

<script>
import Item from './Item.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  components: { Item },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped lang="less">
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
.handle-enter-active {
  animation: test 0.5s linear;
}
.handle-leave-active {
  animation: test 0.5s linear reverse;
}
@keyframes test {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
