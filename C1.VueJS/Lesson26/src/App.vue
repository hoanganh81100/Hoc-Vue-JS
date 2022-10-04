<template>
  <div id="app">
    <comp-header v-bind:headerTitle="headerTitle"></comp-header>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <list-user v-bind:listUser="listUser"></list-user>
    <comp-footer v-bind:footerTitle="footerTitle"></comp-footer>
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue'
import ListUser from './components/ListUser.vue'
import CompFooter from './components/CompFooter.vue'
export default {
  name: 'app',
  data () {
    return {
      headerTitle: 'Hello, Welcome to Your Vue.js App !!!',
      msg: 'The Progressive JavaScript Framework',
      listUser:[
        {id: 0, email: 'test1@gmail.com', active: false},
        {id: 1, email: 'test2@gmail.com', active: true},
        {id: 2, email: 'test3@gmail.com', active: false},
        {id: 3, email: 'test4@gmail.com', active: true},
        {id: 4, email: 'test5@gmail.com', active: false},
        {id: 5, email: 'test6@gmail.com', active: true},
      ],
      footerTitle: 'Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.'
    }
  },
  components: {
    CompHeader,
    ListUser,
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

h1 {
  font-weight: normal;
}
</style>
