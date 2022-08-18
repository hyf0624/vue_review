<template>
  <div id="app">
    <Category title="明星">
      <img src="./assets/chengguo.jpg" alt="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls autoplay src="./assets/3255918cac525cddcc27bc2c7c23aaeb.mp4"></video>
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

