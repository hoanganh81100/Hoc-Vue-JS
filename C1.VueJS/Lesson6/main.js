var vueInstance = new Vue({
  el: '#app',
  data: {
    counter: 0,
    clientX: 0,
    clientY: 0
  },
  methods: {
    handleClick(event, number) {
      console.log('click', event);
      this.counter += number;
    },
    handleMouseMove(event) {
      console.log(event);
      this.clientX = event.clientX;
      this.clientY = event.clientY;
    }
  }
});