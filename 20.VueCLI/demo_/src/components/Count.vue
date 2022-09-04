<template>
  <div>
    <h1>当前求和为: {{ $store.state.count.sum }}</h1>
    <select v-model="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    ...mapMutations('count', ['INCREMENT', 'DECREMENT', 'INCREMENTODD']),
    ...mapActions('count', ['increment_Wait']),
    increment() {
      this.$store.commit('count/INCREMENT', this.n) // 基础写法
      // this.INCREMENT(this.n) // 利用辅助函数
    },
    decrement() {
      // this.$store.commit('count/DECREMENT', this.n)
      this.DECREMENT(this.n)
    },
    incrementOdd() {
      // this.$store.commit('count/INCREMENTODD', this.n)
      this.INCREMENTODD(this.n)
    },
    incrementWait() {
      // this.$store.dispatch('count/incrementWait', this.n)
      this.increment_Wait(this.n)
    }
  },
  mounted() {}
}
</script>
<style scoped lang="scss"></style>
