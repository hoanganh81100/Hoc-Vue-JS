var app = new Vue({
  el: '#app',
  data: {
    bg: 'https://image.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg',
    fullName: '',
    about: '',
    isDemo1: false,
    isDemo2: false,
    activeColor: 'red',
    fontSize: 20
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
      };
    },
    //backgroundImage() {
    //  return 'url(' + this.bg + ')';
    //}
    objStyle() {
      return {
        backgroundImage: 'url(' + this.bg + ')' 
      }
    }
  }
})