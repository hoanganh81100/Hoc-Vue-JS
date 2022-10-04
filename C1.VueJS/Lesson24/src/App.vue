<template>
  <div id="app">
    <comp-header></comp-header>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'The Progressive JavaScript Framework'
    }
  },
  components: {
    CompHeader,
    CompFooter,
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

h1 {
  font-weight: normal;
}
</style>
