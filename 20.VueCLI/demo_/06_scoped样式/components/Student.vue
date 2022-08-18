<template>
  <div class="student-wrapper">
    <p>学生姓名: {{ name }}</p>
    <p>学生年龄: {{ age }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      name: '方明旺',
      age: 18
    }
  }
}
</script>
<style>
.student-wrapper {
  background: orange;
}
</style>
