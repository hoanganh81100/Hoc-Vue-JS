<template>
  <header><h1>{{ headerTitle }}</h1></header>
</template>

<script>
export default {
  name: 'comp-header',
  props: {
    headerTitle: String
  },
  data() {
    return {
      //textHeader: 'Header'
    }
  }
}
</script>

<style>

</style>
