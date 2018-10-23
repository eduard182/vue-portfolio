<template>
  <header>
    <div class='link'>
      <router-link to='/'>Home</router-link>
      <router-link to='/prof'>Prof</router-link>
      <router-link to='/skill'>Skill</router-link>
      <router-link to='/development'>Development</router-link>
      <div class='clear'></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
    }
  }
}
</script>

<style>
header {
  width: 100%;
  text-align: center;
  background-color:white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 0px;
  z-index: 10;
  font-family: cursive;
}
a {
  height: 60px;
  line-height: 60px;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 18px;
  color: black;
  text-decoration: none;
  width: 150px;
  display: inline-block;
  &:hover{
    background-color: darken(white,5%);
  }
}
.clear {
  clear: left;
}
</style>
