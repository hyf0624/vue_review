<template>
  <ul class="todo-main">
    <Item v-for="(item, index) in list" :key="index" :options="item" :changeStatus="changeStatus" :deleteData="deleteData"></Item>
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
    },
    changeStatus: {
      type: Function
    },
    deleteData: {
      type: Function
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
</style>
