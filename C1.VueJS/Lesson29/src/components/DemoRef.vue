<template>
  <div class="demo-ref">
    <h1>DemoRef</h1>
    <button
      class="avatar"
      v-on:click="handleClick">
      Thay đổi Avatar
    </button>
    <input
      type="file"
      ref="fileInputAvatar">
  </div>
</template>

<script>
export default {
  name: 'demo-ref',
  data () {
    return {
      
    }
  },
  methods: {
    handleClick(e) {
      this.$refs.fileInputAvatar.click()
    }
  }
}
</script>

<style>
.demo-ref {
  margin-top: 100px;
  padding: 100px 30px;
  border: 1px solid #000;
}

.avatar {
  color: black;
  padding: 8px 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}

.avatar:hover {
  color: black;
  background-color: rgb(225, 225, 225);
}

input {
  display: none;
}
</style>
