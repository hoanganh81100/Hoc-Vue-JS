<template>
  <div class="list-user">
    <user
      v-bind:user="user"
      v-bind:key="user.id"
      v-for="user in listUser">
    </user>
  </div>
</template>

<script>
import User from './User.vue'
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
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.list-user .user {
  padding: 30px;
  margin: 20px 0;
  border: 1px solid #333;
}
</style>
