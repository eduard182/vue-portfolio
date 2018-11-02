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
            require('../assets/tech/javascript.svg'),
            require('../assets/tech/vue.svg'),
            require('../assets/tech/webpack.svg'),
            require('../assets/tech/html-5.svg'),
            require('../assets/tech/css-3.svg'),
            require('../assets/tech/github-octocat.svg')]
        },
        {
          capture: require('../assets/resume.png'),
          name: '業務経歴書.',
          eng: 'Resume',
          url: 'https://github.com/machio77777/curriculum-vitae',
          overview: 'Web版の業務経歴書.',
          technologys: [
            require('../assets/tech/markdown.svg'),
            require('../assets/tech/github-octocat.svg')]
        },
        {
          capture: require('../assets/blog.png'),
          name: '個人ブログ.',
          eng: 'Blog',
          url: 'https://free-strategy.com',
          overview: 'WordPressで作ったアウトプットブログ.',
          technologys: [
            require('../assets/tech/php.svg'),
            require('../assets/tech/wordpress-icon.svg'),
            require('../assets/tech/mysql.svg'),
            require('../assets/tech/html-5.svg'),
            require('../assets/tech/css-3.svg')]
        },
        {
          capture: require('../assets/pokemon.png'),
          name: 'Pokémon API.',
          eng: 'Pokémon Rest API',
          url: '',
          overview: '第7世代対応のポケモンRest API.',
          technologys: [
            require('../assets/tech/php.svg'),
            require('../assets/tech/cakephp.svg'),
            require('../assets/tech/mysql.svg'),
            require('../assets/tech/netbeans.svg'),
            require('../assets/tech/swagger.svg')]
        },
        {
          capture: require('../assets/comingsoon.gif'),
          name: '準備中1',
          eng: '',
          url: '',
          overview: '',
          technologys: []
        },
        {
          capture: require('../assets/comingsoon.gif'),
          name: '準備中2',
          eng: '',
          url: '',
          overview: '',
          technologys: []
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
