<template>
  <div id="app">
    <!--<CompHeader></CompHeader>-->
    <!--<CompHeader />-->
    <comp-header v-bind:header ="header"/>
    <img src="./assets/logo.png">
    <div class="container">
      <list-user v-bind:listUser="listUser"/>
    </div>
    <comp-footer v-bind:footer ="footer"/>
  </div>
</template>

<script>
/*
App
  CompHeader
  CompListUser
  CompFooter
  -> props -> Những data truyền từ Components cha vào Components con
  -> Cú pháp giống thuộc tính -> Ràng buộc thuộc tính"
  ->
 */
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import ListUser from './components/ListUser.vue';
export default {
  name: 'app',
  data () {
    return {
      header: 'Hello! Welcome to Your Vue.js App',
      listUser: [
        {id: '1', email: 'test1@gmail.com', active: true},
        {id: '2', email: 'test2@gmail.com', active: false},
        {id: '3', email: 'test3@gmail.com', active: true},
        {id: '4', email: 'test4@gmail.com', active: false},
        {id: '5', email: 'test5@gmail.com', active: true},
        {id: '6', email: 'test6@gmail.com', active: false},
      ],
      footer: 'Footer Vue.js App'
    }
  },
  components: {
    CompHeader,
    CompFooter,
    ListUser
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
  .container {
    margin: 0 auto;
    padding: 0 15px;
  }
</style>