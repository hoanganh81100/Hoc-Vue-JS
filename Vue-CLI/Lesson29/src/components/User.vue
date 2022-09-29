<template>
  <div class="user">
      <p>{{ user.email }}</p>
      <button
        v-on:click="handleDelete"
        class="delete">Delete
      </button>
  </div>
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
      
    }
  },
  methods:{
    handleDelete() {
      var data = {
        id: this.user.id
      }
      console.log('handleDelete trong User.vue')
      this.$emit('deleteUser', data)
      
    }
  }
}
</script>

<style>
.user {
  position: relative;  
}

.user .delete {
  position:absolute;
  right: 0;
  top: 0
}
</style>
