<template>
  <div class="list-user">{{ text }}
    <user></user>
    <user></user>
    <user></user>
    <user></user>
    <user></user>
  </div>
</template>

<script>
import User from './User.vue'
export default {
  name: 'list-user',
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
