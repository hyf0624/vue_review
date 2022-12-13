<template>
  <div>
    <p>foo:{{ foo }}</p>
    <p>attrs: {{ $attrs }}</p>
    <!--  v-bind="$attrs" -->
    <Grandson v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Grandson from './Grandson.vue'
export default {
  name: 'Child',
  props: ['foo'],
  components: {
    Grandson
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss"></style>
