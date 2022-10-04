<template>
  <div id="app">
    <div class="wapper clearfix">
      <players
        v-bind:activePlayer="activePlayer"
        v-bind:scoresPlayer="scoresPlayer"
        v-bind:currentScore="currentScore"
      />
      <controls
        v-on:handleNewGame="handleNewGame"
      />
      <dices/>
      <popup-rule
        v-bind:isOpenPopup="isOpenPopup"
        v-on:handleConFirm="handleConFirm"
      />
    </div>
  </div>
</template>

<script>
import PopupRule from './components/PopupRule.vue'
import Players from './components/Players.vue'
import Controls from './components/Controls.vue'
import Dices from './components/Dices.vue'
export default {
  name: 'app',
  data () {
    return {
      isPlaying: false,
      isOpenPopup: false,
      activePlayer: 0, //Người chơi hiện tại
      dices: [6, 6],
      scoresPlayer: [100, 100],
      currentScore: 100
    }
  },
  components: {
    PopupRule,
    Players,
    Controls,
    Dices
  },
  methods: {
    handleNewGame() {
      console.log('App.vue nhận New Game từ Controls.vue truyền ra handleNewGame');
      this.isOpenPopup = true;
    },
    handleConFirm() {
      console.log('App.vue nhận confirm từ PopupRule.vue truyền ra handleConFirm');
      this.isOpenPopup = false;
      this.isPlaying = false;
      this.activePlayer = 0;
      this.dices = [1, 1];
      this.scoresPlayer= [0, 0];
      this.currentScore= 0;
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: /*linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 0, 0, 0.5)),*/ url('/public/images/background-image.png');
  /*background-size: cover;*/
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 650px;
  color: #555;
}

.wapper{
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>
