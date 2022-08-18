<template>
  <div id="app">
    <h3 v-text="text" ref="h3"></h3>
    <button ref="btn" @click="showDOM">点击获取DOM元素</button>
    <School ref="school"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      text: "h3標簽",
    };
  },
  methods: {
    showDOM() {
      // 通过 vm.$refs 来获取dom元素
      console.log(this.$refs.h3); //真实的DOM元素
      console.log(this.$refs.btn); // 真实的DOM元素
      console.log(this.$refs.school); // 打印的是 School组件实例对象
    },
  },
};
</script>
<style scoped lang="scss"></style>
