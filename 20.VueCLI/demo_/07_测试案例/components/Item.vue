<template>
  <li>
    <label>
      <input type="checkbox" :checked="options.done" @change="handleChecked(options.id)" />
      <span>{{ options.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(options.id)">删除</button>
  </li>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Item',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    changeStatus: {
      type: Function
    },
    deleteData: {
      type: Function
    }
  },
  data() {
    return {}
  },
  methods: {
    handleChecked(id) {
      this.changeStatus(id)
    },
    handleDelete(id) {
      if (confirm('确认删除吗?')) {
        this.deleteData(id)
      }
    }
  }
}
</script>
<style scoped lang="less">
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}
li:hover button {
  display: block;
}
</style>
