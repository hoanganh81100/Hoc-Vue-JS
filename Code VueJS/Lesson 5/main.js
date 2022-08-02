var vueInstance = new Vue({
  el: '#app',
  data: {
    title: 'Áo Gucci nam',
    url: 'https://vuahanghieu.com/gucci/thoi-trang/ao-polo?tr=&adgroupid=138881598616&campaignid=11745096939&gclid=Cj0KCQjwio6XBhCMARIsAC0u9aF_DrbT-yetnd0s8HfrBl9j0whPtexOM_4MrWf2OdUSIX3uJPcO_gcaAr0CEALw_wcB',
    target: '_blank',
    price: '1500000',
    check: true
  },
  methods: {
    formatPrice(){
      var number = this.price;
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    }
  }
});