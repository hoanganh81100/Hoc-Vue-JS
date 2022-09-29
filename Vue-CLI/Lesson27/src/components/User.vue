<template>
    <p class="user">{{ user.email }}</p>
</template>

<script>
export default {
  name: 'user',
  props: {
    user: {
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      //textUser: 'Comp User'
    }
  }
}
</script>

<style>

</style>
