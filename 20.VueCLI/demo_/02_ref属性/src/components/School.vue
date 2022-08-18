<template>
  <div class="school">
    <h2>school组件</h2>
    <p>学校名称: {{ name }}</p>
    <p>学校地址: {{ address }}</p>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
};
</script>
<style scoped lang="scss"></style>
