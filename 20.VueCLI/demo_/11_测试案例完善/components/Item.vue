<template>
  <li>
    <label>
      <input type="checkbox" :checked="options.done" @change="handleChecked(options.id)" />
      <span v-show="!options.isEdit">{{ options.title }}</span>
      <input type="text" ref="input" :value="options.title" v-show="options.isEdit" @blur="handleBlur($event, options)" />
    </label>
    <button class="btn btn-danger" @click="handleDelete(options.id)">删除</button>
    <button class="btn btn-edit" v-show="!options.isEdit" @click="handleEdit(options)">编辑</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    handleChecked(id) {
      this.$bus.$emit('changeStatus', id)
    },
    handleDelete(id) {
      if (confirm('确认删除吗?')) {
        this.$bus.$emit('deleteData', id)
      }
    },
    handleEdit(option) {
      if (option.hasOwnProperty('isEdit')) {
        option.isEdit = true
      } else {
        this.$set(option, 'isEdit', true)
      }
      // $nextTick 会在dom节点更新之后执行.
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    handleBlur(e, option) {
      option.isEdit = false
      if (!e.target.value.trim()) {
        alert('输入的内容不能为空!')
        return
      }
      this.$bus.$emit('editOption', option.id, e.target.value)
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
