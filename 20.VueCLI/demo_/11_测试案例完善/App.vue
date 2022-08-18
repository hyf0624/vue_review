<template>
  <div id="app">
    <Headers @addOption="addOption"></Headers>
    <List :list="list"></List>
    <Footer :list="list" @SelectAll="SelectAll" @clearCompleted="clearCompleted"></Footer>
  </div>
</template>

<script>
import Headers from './components/Headers.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { Headers, List, Footer },
  data() {
    return {
      list: [
        {
          id: '001',
          title: '抽烟',
          done: true
        },
        {
          id: '002',
          title: '喝酒',
          done: true
        },
        {
          id: '003',
          title: '烫头',
          done: false
        }
      ]
    }
  },
  methods: {
    addOption(value) {
      this.list.push(value)
    },

    SelectAll(val) {
      this.list.forEach((item) => {
        item.done = val
      })
    },
    clearCompleted() {
      console.log('-------')
      this.list = this.list.filter((item) => {
        return !item.done
      })
    }
  },
  mounted() {
    this.$bus.$on('changeStatus', (id) => {
      this.list.forEach((item) => {
        if (item.id === id) item.done = !item.done
      })
    })
    this.$bus.$on('deleteData', (id) => {
      this.list = this.list.filter((item) => item.id !== id)
    })
    this.$bus.$on('editOption', (id, editValue) => {
      this.list.forEach((item) => {
        if (item.id === id) {
          item.title = editValue
        }
      })
    })
  },
  beforeDestroy() {
    this.$bus.$off(['changeStatus', 'deleteData', 'editOption'])
  }
}
</script>

<style>
#app {
  width: 576px;
  border: 1px solid #ddd;
  padding: 20px;
}
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(52, 151, 190);
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

