<template>
  <footer><h1>{{ footer }}</h1></footer>
</template>

<script>
export default {
  name: 'comp-footer',
  props: {
    footer: {
      type: String,
      default: 'Footer'
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>