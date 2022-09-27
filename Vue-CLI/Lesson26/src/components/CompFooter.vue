<template>
  <header><h1>{{ footerTitle }}</h1></header>
</template>

<script>
export default {
  name: 'comp-footer',
  props: {
    footerTitle: String
  },
  data() {
    return {
      //textFooter: 'Footer'
    }
  }
}
</script>

<style>

</style>
