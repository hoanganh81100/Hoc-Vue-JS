<template>
  <div class="user">
    <h3>{{ user.email }}</h3>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
  h3 {
    display: flex;
    justify-content: center;
    margin: 0;
    width: 200px;
    height: 25px;
  }
</style>