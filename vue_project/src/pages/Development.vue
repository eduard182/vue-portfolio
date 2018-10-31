<template>
  <transition appear>
    <div id="development">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Development',
  title: ' ',
  data () {
    return {
      msg: 'Coming Soon'
    }
  }
}
</script>

<style>
#development {
  height: 94vh;
  color: #000044;
}
#list {
  padding-top: 15px;
}
#list .artifacts {
  margin: 30px;
  border: solid 1px;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}
</style>
