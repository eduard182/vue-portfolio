<template>
    <div id="skill">
      <p class="heading">これからやりたいこと.</p>
      <p class="goal">テクノロジーを活用して、シンプルに世の中に貢献すること!!</p>
      <p class="heading">強み.</p>
      <ul>
        <li>PM・PL・SE・PGなど様々な立場で要件定義 - 保守・運用の一貫した経験があります.</li>
        <li>LAMP開発経験が長く、小規模プロジェクトであれば要件定義 - リリースまで担当可能.</li>
        <li>複数PHPフレームワークでの開発経験があり、設計/実装/保守を意識したテストが可能.</li>
        <li>テクノロジー自体の追求より、テクノロジーの活用で世の中への貢献を考えるマインド.</li>
      </ul>
      <p class="heading">人並みに出来ること.</p>
      <ul>
        <li>基本UIスキル(HTML/CSS/ES6/jQuery/Ajax/レスポンシブ)でのフロント開発が可能.</li>
        <li>RDBMSの基礎スキル(SQL/正規化/インデックス/トランザクション)に関わる開発が可能.</li>
        <li>Linux上での操作/サーバー構築/AWS環境での開発などインフラ基礎に関わる開発が可能.</li>
      </ul>
    </div>
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
  padding-top: 3vh;
  font-size: 24px;
  font-weight: bold;
}
#skill .goal {
  font-size: 20px;
}
#skill ul {
  width: 92vh;
  margin: 0px auto;
  text-align: left;
}
#skill ul li {
  margin: 15px 0px;
}
</style>
