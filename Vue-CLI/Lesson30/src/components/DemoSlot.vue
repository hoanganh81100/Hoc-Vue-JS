<template>
  <div class="demo-slot">
    <h1>DemoSlot</h1>
    <demo-tabs title="Tiêu đề của tab"></demo-tabs>
  </div>
</template>

<script>
import DemoTabs from './DemoTabs.vue'
export default {
  name: 'demo-slot',
  data () {
    return {

    }
  },
  components: {
    DemoTabs
  }
}
</script>

<style>
.demo-slot {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #000;
}
</style>