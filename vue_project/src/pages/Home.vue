<template>
    <transition appear>
      <div id="hello">
        <h1>Welcome to TaNA\'s Portfolio Site.</h1>
        <h2>This portfolio is built with Vue.js + Webpack + HTML5 + CSS3.</h2>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'Home',
  title: ' ',
  data () {
    return {
    }
  }
}
</script>

<style>
#hello {
  position: relative;
  height: 94vh;
  text-align: center;
  color: white;
  font-family: cursive;
  background: linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8)),
  url('../assets/sakura.jpg');
  background-size: cover;
}
#hello h1 {
  padding-top: 30vh;
  font-size: 50px;
  letter-spacing: 3px;
  font-weight: normal;
  padding-right : 20px;
  padding-left : 20px;
  margin: 0;
}
#hello h2 {
  padding-top: 10vh;
  font-size: 25px;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}

@media (max-width : 670px){
  #hello {
    height: 70vh;
    font-family: 'arial unicode ms';
  }
  #hello h1 {
    padding-top: 17vh;
    font-size: 35px;
  }
  #hello h2 {
    padding-top: 10vh;
    font-size: 25px;
  }
}
</style>
