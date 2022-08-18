export const mixin = {
  methods: {
    showName() {
      alert(this.name)
    }
  }
}

export const globalMixin = {
  data() {
    return {
      global: '123'
    }
  }
}
