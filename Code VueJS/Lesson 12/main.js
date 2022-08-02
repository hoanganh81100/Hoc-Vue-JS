var app = new Vue({
  el: '#app',
  data: {
    boardSelected: 'login'
  },
  methods: {
    presentlyBoard(click) {
      this.boardSelected = click;
    }
  }
})