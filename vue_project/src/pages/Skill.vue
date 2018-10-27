<template>
  <transition appear>
    <div id="skill">
      <p class="heading">これからやりたいこと.</p>
      <p class="eng">- What you want to do now -</p>
      <p class="goal">テクノロジーの活用で世の中への貢献!!</p>
      <p class="eng">- Contribution to the world by utilizing technology -</p>
      <p class="heading">強み.</p>
      <p class="eng">- Strength -</p>
      <div id="feature">
        <ul>
          <li>PM・PL・SE・PGなど様々な立場で要件定義 - 保守・運用の一貫した経験があります.</li>
          <li>LAMP開発経験が長く、小規模プロジェクトであれば要件定義 - リリースまで担当可能.</li>
          <li>複数PHPフレームワークでの開発経験があり、設計/実装/保守を意識したテストが可能.</li>
          <li>テクノロジー自体の追求より、テクノロジーの活用で世の中への貢献を考えるマインド.</li>
        </ul>
        <p class="heading">人並みに出来ること.</p>
        <p class="eng">- Things you can do casually -</p>
        <ul>
          <li>基本UIスキル(HTML/CSS/ES6/jQuery/Ajax/レスポンシブ)でのフロント開発が可能.</li>
          <li>RDBMSの基礎スキル(SQL/正規化/インデックス/トランザクション)に関わる開発が可能.</li>
          <li>Linux上での操作/サーバー構築/AWS環境での開発などインフラ基礎に関わる開発が可能.</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Skill',
  title: ' ',
  data () {
    return {
    }
  }
}
</script>

<style>
#skill {
  height: 94vh;
  position: relative;
  color: #000044;
  font-family: 'arial unicode ms';
}
#skill .heading {
  padding-top: 2vh;
  font-size: 22px;
  font-weight: bold;
}
#skill .goal {
  font-size: 18px;
}
#skill .eng {
  font-family: cursive;
}
#skill #feature {
  margin-bottom: 40px;
}
#skill #feature ul {
  width: 650px;
  margin: 0px auto;
  text-align: left;
}
#skill #feature ul li {
  margin: 15px 0px;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}
@media (max-width : 670px){
  #skill {
    height: 70vh;
  }
  #skill #feature {
    margin-bottom: 15px;
  }
  #skill #feature ul {
    width: 85%;
    font-size: 14px;
  }
}
</style>
