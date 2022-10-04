<template>
  <header>
    <h1>{{ headerTitle }}
      <br>
      <button v-on:click="changeTitleHeader">Thay Đổi Title Từ CompHeader.vue</button>
    </h1>
  </header>
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
  },
  methods: {
    changeTitleHeader() {
      var data = {
        title: 'Data truyền thông qua biến event'
      }
      this.$emit('changeTitleEvent', data)
    }
  }
}
</script>

<style>

</style>
