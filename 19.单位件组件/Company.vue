<template>
  <!-- 组件的结构  -->
  <div>
    <span>公司名称: {{ name }}</span>
    <span>公司地址: {{ address }}</span>
  </div>
</template>
<script>
//组件的脚本
export default {
  name: "Company",
  data() {
    return {
      name: "英特讯",
      address: "浙江舟山",
    };
  },
};
</script>
<style>
/* 组件的样式 */
</style>
