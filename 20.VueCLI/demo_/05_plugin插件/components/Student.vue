<template>
  <div>
    <p>学生姓名: {{ name }}</p>
    <p>学生年龄: {{ age }}</p>
    <input type="text" v-fbind:value="name" />
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
<style scoped lang="scss"></style>
