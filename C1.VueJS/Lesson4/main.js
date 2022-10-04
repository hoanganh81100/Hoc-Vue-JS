//data, method
var vueInstance = new Vue({
  el: '#app',
  data: {
    title: 'Dien Thoai Samsung'
  },
  methods: {
    say: function(text) {
      return 'Hello' + text;
    }
  }
});
console.log(vueInstance);

//Reactivity
setTimeout(() => {
  vueInstance.title = 'Dien Thoai Iphone'
}, 3000);