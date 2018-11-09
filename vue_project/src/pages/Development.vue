<template>
  <transition appear>
    <div id="dev_container">
      <div id="development">
        <p class="heading">作ったもの.</p>
        <p class="eng">- Creation -</p>
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
        },
        {
          capture: require('../assets/resume.png'),
          name: '業務経歴書.',
          eng: 'Resume',
          url: 'https://github.com/machio77777/curriculum-vitae',
          overview: 'Web版の業務経歴書.',
          technologys: [
            require('../assets/markdown.svg'),
            require('../assets/vim.svg'),
            require('../assets/github-octocat.svg')]
        },
        {
          capture: require('../assets/blog.png'),
          name: '個人ブログ.',
          eng: 'Technology Blog',
          url: 'https://free-strategy.com',
          overview: 'WordPressで作った技術ブログ.',
          technologys: [
            require('../assets/php.svg'),
            require('../assets/wordpress-icon.svg'),
            require('../assets/mysql.svg'),
            require('../assets/linux-tux.svg'),
            require('../assets/html-5.svg'),
            require('../assets/css-3.svg')]
        },
        {
          capture: require('../assets/pokemon-api.png'),
          name: 'Pokémon API.',
          eng: 'Pokémon Rest API',
          url: '',
          overview: '第7世代対応のポケモンRest API.',
          technologys: [
            require('../assets/php.svg'),
            require('../assets/cakephp.svg'),
            require('../assets/mysql.svg'),
            require('../assets/composer.svg'),
            require('../assets/netbeans.svg'),
            require('../assets/swagger.svg')]
        },
        {
          capture: require('../assets/pokemon-spa.jpg'),
          name: 'Pokémon SPA',
          eng: 'Pokémon SPA',
          url: '',
          overview: 'Pokémon APIを使ったSPA.',
          technologys: [
            require('../assets/javascript.svg'),
            require('../assets/react.svg'),
            require('../assets/webpack.svg'),
            require('../assets/html-5.svg'),
            require('../assets/css-3.svg')]
        },
        {
          capture: require('../assets/higashinakano.png'),
          name: '地域ブログ',
          eng: 'Higashi Nakano Local Blog',
          url: 'https://higashinakano-walk.com/',
          overview: 'WordPressで作った地域ブログ.',
          technologys: [
            require('../assets/php.svg'),
            require('../assets/wordpress-icon.svg'),
            require('../assets/mysql.svg'),
            require('../assets/linux-tux.svg'),
            require('../assets/html-5.svg'),
            require('../assets/css-3.svg')]
        }
      ]
    }
  }
}
</script>

<style>
#dev_container {
  color: #222222;
  text-shadow: 0px 0.3px 0.1px #999999;
}
#dev_container .link a {
  margin: 0px;
  height: 25px;
  font-size: 18px;
  color: #00bfff;
  line-height: 25px;
}
#development {
  margin-top: 20px;
  max-width: 1250px;
  display: inline-block;
}
#development .heading {
  font-size: 22px;
  font-weight: bold;
}
#development .eng {
  font-family: cursive;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}
</style>
