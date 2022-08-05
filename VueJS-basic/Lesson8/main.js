var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World',
    a : 0,
    b : 0,
    number : 20
  },
  methods: {
    //addA() {
    //  console.log('addA run');
    //  return this.a + this.number
    //},
    //addB() {
    //  console.log('addB run');
    //  return this.b + this.number
    //}
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    addA() {
      console.log('addA run');
      return this.a + this.number
    },
    addB() {
      console.log('addB run');
      return this.b + this.number
    }
  }
})