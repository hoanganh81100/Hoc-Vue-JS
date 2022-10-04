<template>
  <div id="app">
    <div class="container">
      <button v-on:click="headerTitle = 'Hello, Welcome to Your Vue.js App !!!'">Thay Đổi Title Từ Component App.vue</button>
      <button v-on:click="headerTitle = 'Học Lập Trình VueJS'">Thay Đổi Title Từ Component App.vue</button>
      <comp-header
        v-bind:headerTitle="headerTitle"
        v-on:changeTitleEvent="handleChangeTitle"
        ></comp-header>
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <list-user v-bind:listUser="listUser"></list-user>
      <comp-footer v-bind:footerTitle="footerTitle"></comp-footer>
    </div>
    
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
  },
  methods: {
    handleChangeTitle(data) {
      this.headerTitle = data.title
      console.log(data)
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
}
</style>
