<template>
  <transition appear>
    <div id="skill_container">
      <div id="skill">
        <p class="heading">技術スタック.</p>
        <p class="eng">- Technology stack -</p>
        <div id="server_side" class="sbox">
          <p>サーバーサイド</p>
          <p class="eng">- server side. -</p>
          <stack v-bind:key='serverside' v-for='serverside in serversides' v-bind:item='serverside'>
          </stack>
        </div>
        <div id="front_end" class="sbox">
          <p>フロントエンド</p>
          <p class="eng">- front end. -</p>
          <stack v-bind:key='frontend' v-for='frontend in frontends' v-bind:item='frontend'>
          </stack>
        </div>
        <div id="framework" class="sbox">
          <p>フレームワーク&ライブラリ</p>
          <p class="eng">- framework & library. -</p>
          <stack v-bind:key='framework' v-for='framework in frameworks' v-bind:item='framework'>
          </stack>
        </div>
        <div id="db" class="sbox">
          <p>データベース</p>
          <p class="eng">- database. -</p>
          <stack v-bind:key='db' v-for='db in dbs' v-bind:item='db'>
          </stack>
        </div>
        <div id="middleware" class="sbox">
          <p>サーバー&ミドルウェア</p>
          <p class="eng">- server side -</p>
          <stack v-bind:key='middleware' v-for='middleware in middlewares' v-bind:item='middleware'>
          </stack>
        </div>
        <div id="tool" class="sbox">
          <p>ツール類</p>
          <p class="eng">- server side -</p>
          <stack v-bind:key='tool' v-for='tool in tools' v-bind:item='tool'>
          </stack>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import stack from '@/components/stack'

export default {
  name: 'Skill',
  title: ' ',
  components: {
    stack
  },
  data () {
    return {
      serversides: {
        php: {
          icon: require('../assets/php.svg'),
          proficiency: '★★★★★',
          term: '4年'
        },
        java: {
          icon: require('../assets/java.svg'),
          proficiency: '★★★☆☆',
          term: '4年'
        },
        python: {
          icon: require('../assets/python.svg'),
          proficiency: '★★☆☆☆',
          term: '2ヶ月'
        },
        c2: {
          icon: require('../assets/cplus.svg'),
          proficiency: '★☆☆☆☆',
          term: '3ヶ月'
        },
        c1: {
          icon: require('../assets/c.svg'),
          proficiency: '★☆☆☆☆',
          term: '3ヶ月'
        }
      },
      frontends: {
        html: {
          icon: require('../assets/html-5.svg'),
          proficiency: '★★★☆☆',
          term: '8年'
        },
        css: {
          icon: require('../assets/css-3.svg'),
          proficiency: '★★★☆☆',
          term: '8年'
        },
        javascript: {
          icon: require('../assets/javascript.svg'),
          proficiency: '★★★☆☆',
          term: '6年'
        },
        jquery: {
          icon: require('../assets/jquery.svg'),
          proficiency: '★★★☆☆',
          term: '5年'
        },
        bootstrap: {
          icon: require('../assets/bootstrap.svg'),
          proficiency: '★★★☆☆',
          term: '2年'
        }
      },
      frameworks: {
        cakephp: {
          icon: require('../assets/cakephp.svg'),
          proficiency: '★★★★☆',
          term: '1年半'
        },
        symfony2: {
          icon: require('../assets/symfony.svg'),
          proficiency: '★★★☆☆',
          term: '1年半'
        },
        laravel: {
          icon: require('../assets/laravel.svg'),
          proficiency: '★★★☆☆',
          term: '半年'
        },
        vue: {
          icon: require('../assets/vue.svg'),
          proficiency: '★★☆☆☆',
          term: '半年'
        },
        react: {
          icon: require('../assets/react.svg'),
          proficiency: '★★☆☆☆',
          term: '3ヶ月'
        }
      },
      dbs: {
        mysql: {
          icon: require('../assets/mysql.svg'),
          proficiency: '★★★★☆',
          term: '3年'
        },
        mariadb: {
          icon: require('../assets/mariadb.svg'),
          proficiency: '★★★☆☆',
          term: '1年半'
        },
        rds: {
          icon: require('../assets/aws-rds.svg'),
          proficiency: '★★☆☆☆',
          term: '1年半'
        },
        oracle: {
          icon: require('../assets/oracle.svg'),
          proficiency: '★★★☆☆',
          term: '3年'
        },
        postgresql: {
          icon: require('../assets/postgresql.svg'),
          proficiency: '★★☆☆☆',
          term: '半年'
        }
      },
      middlewares: {
        apache: {
          icon: require('../assets/apache.svg'),
          proficiency: '★★★☆☆',
          term: '5年'
        },
        aws: {
          icon: require('../assets/aws.svg'),
          proficiency: '★★★☆☆',
          term: '2年'
        },
        ec2: {
          icon: require('../assets/aws-ec2.svg'),
          proficiency: '★★☆☆☆',
          term: '1年半'
        },
        s3: {
          icon: require('../assets/aws-s3.svg'),
          proficiency: '★★☆☆☆',
          term: '1年半'
        },
        cognito: {
          icon: require('../assets/aws-cognito.svg'),
          proficiency: '★★☆☆☆',
          term: '3ヶ月'
        }
      },
      tools: {
        mac: {
          icon: require('../assets/macosx.svg'),
          proficiency: '★★★★★',
          term: '10年'
        },
        apple: {
          icon: require('../assets/apple.svg'),
          proficiency: '★★★★★',
          term: '10年'
        },
        slack: {
          icon: require('../assets/slack.svg'),
          proficiency: '★★★★★',
          term: '5年'
        },
        google: {
          icon: require('../assets/google-analytics.svg'),
          proficiency: '★★★☆',
          term: '5年'
        },
        vim: {
          icon: require('../assets/vim.svg'),
          proficiency: '★★★★☆',
          term: '5年'
        }
      }
    }
  }
}
</script>

<style>
#skill_container {
  color: #222222;
  font-family: 'arial unicode ms';
  text-shadow: 0px 0.3px 0.1px #999999;
}
#skill {
  margin: 0px auto;
  padding: 20px 0px;
  max-width: 1250px;
}
#skill .sbox {
  width: 350px;
  margin: 30px;
  display: inline-block;
  background-color: #ffffff;
  box-shadow: 0 0 8px gray;
}
#skill .heading {
  font-size: 22px;
  font-weight: bold;
}
#skill .eng {
  font-family: cursive;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}
@media (max-width : 670px){
  #skill .sbox {
    width: 310px;
    height: 590px;
  }
}
</style>
