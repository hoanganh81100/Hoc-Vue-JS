var app = new Vue({
  el: '#app',
  data: {
    fullName: '',
    about: '',
    isDemo1: false,
    isDemo2: false
  },
  methods: {
    changeColor1() {
      this.isDemo1 = !this.isDemo1
    },
    changeColor2() {
      this.isDemo2 = !this.isDemo2
    }
  },
  computed: {
    objClass() {
      return {
        demo1: this.isDemo1,
        demo2: this.isDemo2
      }
    }
  }
})