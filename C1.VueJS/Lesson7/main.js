var vueInstance = new Vue({
  el: '#app',
  data: {
    counter: 0,
    clientX: 0,
    clientY: 0
  },
  methods: {
    handleClick(e, number) {
      console.log('click', e);
      this.counter += number;
    },
    handleMouseMove1(e) {
      console.log(e);
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    },
    handleMouseMove2(e) {
      console.log(e.target);
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    },
    handleSubmitForm(e) {
      console.log(e);
    }
  }
});