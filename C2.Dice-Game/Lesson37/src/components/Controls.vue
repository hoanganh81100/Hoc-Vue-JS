<template>
  <div class="controls">
    <button class="control btn-game"><i class="fa-solid fa-circle-play"></i>New Game</button>
    <button class="control btn-roll"><i class="fa-solid fa-dice"></i>Roll Dice</button>
    <button class="control btn-hold"><i class="fa-solid fa-circle-down"></i>Hold Score</button>
    <input type="number" placeholder="Final score" class="final-score">
  </div>
</template>

<script>
export default {
  name: 'controls',
  data() {
    return {
      
    }
  }
}
</script>

<style>
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
</style>