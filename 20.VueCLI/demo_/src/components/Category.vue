<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot name="center">默认值，当组件没有被传入内容时出现(center)</slot>
    <slot name="footer">默认值，当组件没有被传入内容时出现(footer)</slot>
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
    return {}
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
