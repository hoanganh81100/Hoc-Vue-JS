<template>
  <div id="app">
    <!--<CompHeader></CompHeader>-->
    <!--<comp-header></comp-header>-->
    <CompHeader />
    <comp-header />
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <comp-footer>Footer</comp-footer>
  </div>
</template>

<script>
/*
App
  Header
  ListProduct
    Product
    Product
    Product
    Product
  Footer
 */
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello! Welcome to Your Vue.js App'
    }
  },
  components: {
    CompHeader,
    CompFooter
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>