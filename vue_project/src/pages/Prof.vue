<template>
  <transition appear>
    <div id="prof">
      <p class="heading">基本情報.</p>
      <p class="eng">- Basic information -</p>
      <p id="picture"></p>
      <table>
        <tbody>
          <tr>
            <th>氏名.</th>
            <td>田中 慎太郎.</td>
          </tr>
          <tr>
            <th>年齢.</th>
            <td>32.</td>
          </tr>
          <tr>
            <th>出身地.</th>
            <td>福岡市.</td>
          </tr>
          <tr>
            <th>居住地.</th>
            <td>横浜市.</td>
          </tr>
          <tr>
            <th>github.</th>
            <td><a href='https://github.com/machio77777' target="_blank">@machio77777</a></td>
          </tr>
          <tr>
            <th>qiita.</th>
            <td><a href='https://qiita.com/machio77777' target="_blank">@machio77777</a></td>
          </tr>
          <tr>
            <th>booklog.</th>
            <td><a href='https://booklog.jp/users/machio77777' target="_blank">@machio77777</a></td>
          </tr>
        </tbody>
      </table>
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
      <p class="heading">資格.</p>
      <p class="eng">- License -</p>
      <table id="license">
        <tbody>
          <tr>
            <th>1.</th>
            <td>応用情報技術者.</td>
          </tr>
          <tr>
            <th>2.</th>
            <td>OJC-WC 5.0.</td>
          </tr>
          <tr>
            <th>3.</th>
            <td>OJC-P 6.0.</td>
          </tr>
          <tr>
            <th>4.</th>
            <td>Oracle DB-Bronze 11g.</td>
          </tr>
          <tr>
            <th>5.</th>
            <td>LPIC Level-1.</td>
          </tr>
          <tr>
            <th>6.</th>
            <td>日商簿記3級.</td>
          </tr>
          <tr>
            <th>7.</th>
            <td>普通自動車免許(AT).</td>
          </tr>
        </tbody>
      </table>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Prof',
  title: ' ',
  data () {
    return {
    }
  }
}
</script>

<style>
#prof {
  height: 94vh;
  position: relative;
  color: #000044;
  text-align: center;
  font-family: 'arial unicode ms';
}
#picture {
  margin: 30px auto;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background: url('../assets/prof.gif');
  background-size: contain;
  border: solid 1px #c0c0c0;
}
#prof table {
  padding: 0px 70px;
  font-size: 18px;
  display: inline-block;
  text-align: left;
}
#prof table th {
  padding-right: 20px;
  font-weight: normal;
}
#prof table td {
  padding : 5px 0px;
}
#prof table td a {
  margin: 0px;
  height: 25px;
  font-size: 18px;
  color: #6495ed;
  line-height: 25px;
}
#prof .heading {
  padding-top: 2vh;
  font-size: 22px;
  font-weight: bold;
}
#prof .goal {
  font-size: 18px;
}
#prof .eng {
  font-family: cursive;
}
#prof #feature ul {
  width: 650px;
  margin: 0px auto;
  text-align: left;
}
#prof #feature ul li {
  margin: 15px 0px;
}
#prof #license {
  margin-bottom: 40px;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}
@media (max-width : 670px){
  #prof {
    font-family: 'arial unicode ms';
  }
  #prof #feature ul {
    width: 85%;
    width: 80%;
    font-size: 14px;
  }
  #license {
    display: inline-block;
  }
}
</style>
