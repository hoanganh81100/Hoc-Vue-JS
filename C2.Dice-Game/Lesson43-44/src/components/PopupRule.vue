<template>
  <div class="popup" v-bind:class="getClassPopup">
    <div class="rule">
      <h3>Luật chơi</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas feugiat orci vel luctus. Etiam feugiat risus leo, sed fermentum metus vulputate ut. Fusce interdum nisi nec nunc dictum, quis ullamcorper risus fringilla. Nullam convallis ipsum sed varius ornare.</p>
      <button v-on:click="confirm">Đã hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-rule',
  props: {
    isOpenPopup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    confirm() {
      console.log('Confirm từ PopupRule.vue truyền ra handleConFirm cuả App.vue');
      this.$emit('handleConFirm');
    }
  },
  computed: {
    getClassPopup: function() {
      return {
        'open': this.isOpenPopup
      }
    }
  }
}
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all .3s ease;
}

.open {
  opacity: 1;
  visibility: visible;
}

.rule {
  position: absolute;
  background-color: #fff;
  width: 350px;
  padding: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: all .5s ease;
}

.open .rule {
  transform: translate(-50%, -50%) scale(1);
}

.rule h3 {
  margin-bottom: 10px;
}

.rule button {
  cursor: pointer;
  margin-top: 15px;
  padding: 5px 10px;
  border: 2px solid #000;
  background-color: #fff;
  transition: all .3s ease;
}

.rule button:hover {
  color: #fff;
  background-color: #000;
}
</style>