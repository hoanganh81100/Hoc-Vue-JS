<template>
  <div class="demo-tabs">
    <div class="tabs-title">
      <span>{{ title }}</span>
      <i class="fa-solid fa-circle-user"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-tabs',
  props: {
    title: String
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.tabs-title {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
}

p {
  margin-top: 0;
}
</style>
