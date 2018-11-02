<template>
  <transition appear>
    <div id="dev_container">
      <div id="development">
        <box v-bind:key='product.name' v-for='product in products' v-bind:item='product'>
          <a slot="link" :href="product.url" target="_blank">{{product.name}}</a>
          <img slot="capture" :src=product.capture />
        </box>
      </div>
    </div>
  </transition>
</template>

<script>
import box from '@/components/box'

export default {
  name: 'Development',
  title: ' ',
  components: {
    box
  },
  data () {
    return {
      products: [
        {
          capture: require('../assets/portfolio.png'),
          name: 'ポートフォリオ.',
          eng: 'Portfolio',
          url: 'https://machio77777.github.io/vue-portfolio',
          overview: 'Vue.jsで作った簡易ポートフォリオ.',
          technologys: [
            require('../assets/javascript.svg'),
            require('../assets/vue.svg'),
            require('../assets/webpack.svg'),
            require('../assets/html-5.svg'),
            require('../assets/css-3.svg'),
            require('../assets/github-octocat.svg')]
        }
      ]
    }
  }
}
</script>

<style>
#dev_container {
  height: 94vh;
  color: #000044;
}
#dev_container .link a {
  margin: 0px;
  height: 25px;
  font-size: 18px;
  color: #00bfff;
  line-height: 25px;
}
#development {
  display: inline-block;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}
</style>
