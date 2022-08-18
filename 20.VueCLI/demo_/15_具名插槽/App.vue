<template>
  <div id="app">
    <Category title="明星">
      <img slot="center" src="./assets/chengguo.jpg" alt="" />
      <span slot="footer">具名插槽1</span>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <span slot="footer">具名插槽2</span>
    </Category>
    <Category title="电影">
      <video slot="center" controls autoplay src="./assets/3255918cac525cddcc27bc2c7c23aaeb.mp4"></video>
      <template v-slot:footer>
        <span>具名插槽3</span><br />
        <span>传入多个标签可以写成template</span>
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
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', 'H1Z1'],
      movies: ['《教父》', '《肖申克的救赎》', '《你好，李焕英》', '《拆弹专家》']
    }
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

