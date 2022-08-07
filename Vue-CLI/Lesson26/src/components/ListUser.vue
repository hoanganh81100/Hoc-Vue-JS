<template>
  <div class="list-user">
    <h2>List User Components</h2>
    <user />
    <user />
    <user />
    <user />
  </div>
</template>

<script>
import User from './User.vue';
export default {
  name: 'list-user',
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

</style>