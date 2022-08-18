<template>
  <div class="school">
    <h2>{{ msg }}</h2>
    <p>学生姓名: {{ name }}</p>
    <p>学生性别: {{ sex }}</p>
    <p>学生年龄: {{ age }}</p>
    <!-- <button @click="change">修改prop传入的值</button> -->
  </div>
</template>

<script>
export default {
  name: 'StudentComponent',
  /*
    props 组件间通信
  */
  //数组的写法
  //props: ["name", "sex", "age"],

  // 对象的写法，可以限制类型, 可以设置默认值，也可以限制是否必传
  props: {
    name: {
      type: String,
      default: '方明旺' // 默认值
    },
    sex: {
      type: String
    },
    age: {
      type: Number
    }
  },
  data() {
    return {
      msg: '我是一名尚硅谷的学生'
    }
  },
  methods: {}
}
</script>
<style scoped lang="scss"></style>
