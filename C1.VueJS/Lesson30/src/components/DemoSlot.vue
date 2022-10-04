<template>
  <div class="demo-slot">
    <h1>DemoSlot</h1>
    <demo-tabs title="Tiêu đề của tab">
      <ul class="tabs-slot">
        <li v-for="(item, index) in tabsSlot" v-bind:key="index">{{ item.text }}</li>
      </ul>
    </demo-tabs>
  </div>
</template>

<script>
import DemoTabs from './DemoTabs.vue'
export default {
  name: 'demo-slot',
  data () {
    return {
      tabsSlot: [
        {text: 'Tab1'},
        {text: 'Tab2'},
        {text: 'Tab3'},
      ]
    }
  },
  components: {
    DemoTabs
  },
  methods: {

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