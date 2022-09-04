<template>
  <div>
    <h1>当前求和为: {{ $store.state.sum }}</h1>
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
// https://api.uixsj.cn/hitokoto/get?type=social
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    ...mapMutations(['INCREMENT', 'DECREMENT', 'INCREMENTODD']),
    ...mapActions(['increment_Wait']),
    increment() {
      //this.$store.commit('INCREMENT', this.n)
      this.INCREMENT(this.n)
    },
    decrement() {
      // this.$store.commit('DECREMENT', this.n)
      this.DECREMENT(this.n)
    },
    incrementOdd() {
      // this.$store.commit('INCREMENTODD', this.n)
      this.INCREMENTODD(this.n)
    },
    incrementWait() {
      // this.$store.dispatch('incrementWait', this.n)
      this.increment_Wait(this.n)
    }
  }
}
</script>
<style scoped lang="scss"></style>
