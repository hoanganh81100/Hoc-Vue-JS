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
        v-on:handleRollDice="handleRollDice"
      />
      <dices
        v-bind:dices="dices"
      />
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
      this.isPlaying = true;
      this.isOpenPopup = false;
      this.activePlayer = 0;
      this.dices = [1, 1];
      this.scoresPlayer = [0, 0];
      this.currentScore = 0;
    },
    handleRollDice() {
      console.log('App.vue nhận Roll Dice từ Controls.vue truyền ra handleRollDice');
      if (this.isPlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        this.dices = [dice1, dice2]
        console.log(dice1, dice2)
        if (dice1 === 1 || dice2 === 1) {
          let activePlayer = this.activePlayer;
          setTimeout(function() {
            alert(`Player ${activePlayer + 1} has drawn number 1. Sorry !!!`)
          }, 10);
          this.nextPlayer();
        } else {
          this.currentScore = this.currentScore + dice1 + dice2;
        }
      } else {
        alert('Vui lòng nhấn vào nút New Game')
      }
    },
    nextPlayer() {
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
      this.currentScore = 0;
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
