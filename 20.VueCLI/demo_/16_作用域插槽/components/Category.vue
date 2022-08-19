<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', 'H1Z1']
    }
  }
}
</script>
<style scoped lang="less">
.category {
  background: skyblue;
  width: 200px;
  height: 300px;
  h3 {
    text-align: center;
    background: orange;
  }
  img {
    width: 100%;
  }
  video {
    width: 100%;
    height: 58%;
  }
}
</style>
