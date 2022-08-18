<template>
  <div class="school-wrapper">
    <p>学校名称: {{ name }}</p>
    <p>学校地址: {{ address }}</p>
    <div class="student-wrapper" style="width: 50px; height: 50px"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',
  data() {
    return {
      name: '尚硅谷atguihu',
      address: '北京'
    }
  }
}
</script>
<style scoped lang="less">
.school-wrapper {
  background: skyblue;
}
</style>
