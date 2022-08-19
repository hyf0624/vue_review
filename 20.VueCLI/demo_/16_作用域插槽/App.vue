<template>
  <div id="app">
    <Category title="游戏">
      <template slot-scope="{ games }">
        <!-- 作用域插槽，此时的obj就是Category传入的数据, 注意的是obj是一个对象，对象中有一个games属性，同时支持结果赋值的写法 -->
        <ul>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <!-- 作用域插槽，此时的obj就是Category传入的数据, 注意的是obj是一个对象，对象中有一个games属性，同时支持结果赋值的写法 -->
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <!-- 作用域插槽，此时的obj就是Category传入的数据, 注意的是obj是一个对象，对象中有一个games属性，同时支持结果赋值的写法 -->
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: {
    Category
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
#app {
  display: flex;
  justify-content: space-around;
}
</style>
