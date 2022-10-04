<template>
  <div id="app">
    <div class="wapper clearfix">
      <players/>
      <controls/>
      <dices/>
    </div>
  </div>
</template>

<script>
import Players from './components/Players.vue'
import Controls from './components/Controls.vue'
import Dices from './components/Dices.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    Players,
    Controls,
    Dices
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
