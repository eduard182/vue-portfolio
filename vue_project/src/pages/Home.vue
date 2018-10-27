<template>
    <transition appear>
      <div id="hello">
        <h1>{{ msg }}</h1>
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
      msg: 'Welcome to TaNA\'s Portfolio Site.'
    }
  }
}
</script>

<style>
#hello {
  height: 94vh;
  position: relative;
  background: linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8)),
  url('../assets/sakura.jpg');
  background-size: cover;
  text-align: center;
}
#hello h1 {
  padding-top: 30vh;
  font-size: 50px;
  color: white;
  letter-spacing: 3px;
  font-weight: normal;
  padding-right : 20px;
  padding-left : 20px;
  margin: 0;
  font-family: cursive;
}
#hello h2 {
  padding-top: 10vh;
  font-size: 25px;
  color: white;
  font-family: cursive;
}
#account {
  padding-top: 12vh;
}
#account .social-icon {
  margin: 0px 20px;
  display: inline-block;
}
#account .social-icon img {
  width: 115px;
  height: 110px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.8;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}

@media (max-width : 670px){
  #hello {
    height: 68vh;
    font-family: cursive;
  }
  #hello h1 {
    padding-top: 13vh;
    font-size: 35px;
  }
  #hello h2 {
    padding-top: 10vh;
    font-size: 25px;
  }
}
</style>
