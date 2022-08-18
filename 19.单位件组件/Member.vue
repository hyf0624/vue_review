<template>
  <div>
    <span>员工姓名: {{ name }}</span>
    <span>员工年龄: {{ age }}</span>
  </div>
</template>

<script>
export default {
  name: "Member",
  data() {
    return {
      name: "张肖",
      age: 25,
    };
  },
};
</script>
<style></style>
