<template>
  <div>
    <h2>List User Components</h2>
    <div class="list-user">
      <user 
        v-for ="user in listUser"
        v-bind:key ="user.id"
        v-bind:user ="user"
      />
    </div>
  </div>
</template>

<script>
import User from './User.vue';
export default {
  name: 'list-user',
  props: {
    listUser: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

    }
  },
  components: {
    User
  }
}
</script>

<style>
  .list-user {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .list-user .user {
    margin: 15px 0;
    padding: 20px;
    border: 1px solid #333;
    width: 30%;
  }
</style>