<template>
  <div class="todo-footer" v-show="list.length">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ Completed }}</span> / 全部{{ list.length }}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  props: {
    list: {
      type: Array
    },
    SelectAll: {
      type: Function
    },
    clearCompleted: {
      type: Function
    }
  },
  computed: {
    isAll: {
      get() {
        return this.Completed === this.list.length && this.list.length > 0
      },
      set(val) {
        this.SelectAll(val)
      }
    },
    Completed() {
      return this.list.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    }
  },
  data() {
    return {}
  },
  methods: {
    clear() {
      this.clearCompleted()
    }
  }
}
</script>
<style scoped lang="less">
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 6px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
