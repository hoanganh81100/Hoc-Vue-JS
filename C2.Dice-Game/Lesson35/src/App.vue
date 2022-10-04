<template>
  <div id="app">
    <div class="wapper clearfix">
      <!--<h1>Dice Game</h1>-->
      <div class="player-panel">
        <div class="player-name">Player 1</div>
        <div class="player-score">0</div>
        <div class="player-current-box">
          <div class="player-current-label">Current</div>
          <div class="player-current-score">0</div>
        </div>
      </div>
      <div class="player-panel">
        <div class="player-name">Player 2</div>
        <div class="player-score">0</div>
        <div class="player-current-box">
          <div class="player-current-label">Current</div>
          <div class="player-current-score">0</div>
        </div>
      </div>
      <button class="control btn-game"><i class="fa-solid fa-circle-play"></i>New Game</button>
      <button class="control btn-roll"><i class="fa-solid fa-dice"></i>Roll Dice</button>
      <button class="control btn-hold"><i class="fa-solid fa-circle-down"></i>Hold Score</button>
      <input type="number" placeholder="Final score" class="final-score">
      <div id="dice-1" class="dice">
        <div class="spinner dice-6">
          <div class="face1">1</div>
          <div class="face2">2</div>
          <div class="face3">3</div>
          <div class="face4">4</div>
          <div class="face5">5</div>
          <div class="face6">6</div>
        </div>
      </div>      
      <div id="dice-2" class="dice">
        <div class="spinner dice-6">
          <div class="face1">1</div>
          <div class="face2">2</div>
          <div class="face3">3</div>
          <div class="face4">4</div>
          <div class="face5">5</div>
          <div class="face6">6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {

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
/***************************************************/
/***************************************************/
.player-panel {
  width: 50%;
  float: left;
  height: 600px;
  padding: 50px;
  transition: all .3s ease;
  background-color: #fff;
}

.player-name {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 100;
  margin: 20px 0 10px 0;
  position: relative;
}

.player-score {
  text-align: center;
  font-size: 80px;
  font-weight: 100;
  color: #42b983;
  margin-bottom: 120px;
}

.active {
  background-color: #f7f7f7;
}

.active .player-name {
  font-weight: 300;
}

.active .player-name::after {
  content: "\2022";
  font-size: 48px;
  position: absolute;
  color: #42b983;
  top: -7px;
  right: 10px;
}

.player-current-box {
  background-color: #42b983;
  color: white;
  width: 40%;
  margin: 0 auto;
  padding: 12px;
  text-align: center;
}

.player-current-label {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 12px;
  color: #222;
}

.player-current-score {
  font-size: 30px;
}

.winner {
  background-color: #f7f7f7;
}

.winner .player-name{
  font-weight: 300;
  color: #42b983;
}
/***************************************************/
/***************************************************/
.control {
  position: absolute;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #555;
  background: none;
  border: none;
  font-family: Lato;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 300;
  transition: background-color 0.3s, color 0.3s;
}

.control.disabled {
  pointer-events: none;
  
}

.control:hover {
  font-weight: 600;
}

.control:hover i {
  margin-right: 20px;
}

.control:focus {
  outline: none;
}

.control i {
  color: #42b983;
  display: inline-block;
  margin-right: 15px;
  font-size: 30px;
  line-height: 1;
  vertical-align: text-top;
  margin-top: -4px;
  transition: margin 0.3s;
}

.btn-game {
  top: 20px;
}

.btn-roll {
  top: 400px;
}

.btn-hold {
  top: 450px;
}

.final-score {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 500px;
  color: #555;
  font-size: 18px;
  font-family: 'Lato';
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
  width: 160px;
}

.final-score:focus {
  outline: none;
}
/***************************************************/
/***************************************************/
#dice-1 {
  top: 80px
}

#dice-2 {
  top: 240px
}

.dice {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.10);
}

.spinner {
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 60px 60px 0;
  -ms-transform-origin: 60px 60px 0;
  transform-origin: 60px 60px 0;
  -webkit-transition: all .9s ease;
  -o-transition: all .9s ease;
  transition: all .9s ease;
  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.spinner div {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  /*box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);*/
  text-align: center;
  line-height: 120px;
  font-size: 100px;
  color: #42b983;
  font-size: 0;
  transition: all .3s ease;
  opacity: 1;
}

.spinner.dice-1 {
  -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.spinner.dice-2 {
  -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
}

.spinner.dice-3 {
  -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  -ms-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  -o-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
  transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
}

.spinner.dice-4 {
  -webkit-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  -ms-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  -o-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
  transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
}

.spinner.dice-1 {
  -webkit-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  -ms-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  -o-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
}

.spinner.dice-1 {
  -webkit-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  -ms-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  -o-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
}

.spinner .face1 {
  -webkit-transform: translateZ(60px);
  -ms-transform: translateZ(60px);
  transform: translateZ(60px);
  background-image: url('/public/images/dice-1.png');
  background-position: center;
  background-size: cover;
}

.spinner .face2 {
  -webkit-transform: rotateY(90deg) translateZ(60px);
  -ms-transform: rotateY(90deg) translateZ(60px);
  transform: rotateY(90deg) translateZ(60px);
  background-image: url('/public/images/dice-2.png');
  background-position: center;
  background-size: cover;
}

.spinner .face3 {
  -webkit-transform: rotateX(90deg) rotateY(90deg) translateZ(60px);
  -ms-transform: rotateX(90deg) rotateY(90deg) translateZ(60px);
  transform: rotateX(90deg) rotateY(90deg) translateZ(60px);
  background-image: url('/public/images/dice-3.png');
  background-position: center;
  background-size: cover;
}

.spinner .face4 {
  -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  transform: rotateY(180deg) rotateZ(90deg) translateZ(60px);
  background-image: url('/public/images/dice-4.png');
  background-position: center;
  background-size: cover;
}

.spinner .face5 {
  -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px);
  background-image: url('/public/images/dice-5.png');
  background-position: center;
  background-size: cover;
}

.spinner .face6 {
  -webkit-transform:rotateX(-90deg) translateZ(60px);
  -ms-transform:rotateX(-90deg) translateZ(60px);
  transform:rotateX(-90deg) translateZ(60px);
  background-image: url('/public/images/dice-6.png');
  background-position: center;
  background-size: cover;
}
</style>
