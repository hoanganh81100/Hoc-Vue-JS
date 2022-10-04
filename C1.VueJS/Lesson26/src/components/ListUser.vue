<template>
  <div class="list-user">{{ text }}
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
      text: 'List User Component'
    }
  },
  components: {
    User
  }
}
</script>

<style>

</style>
