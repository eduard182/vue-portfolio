<template>
    <div id="prof">
      <table>
        <tbody>
          <tr>
            <th>氏名.</th>
            <td>{{ name }}</td>
          </tr>
          <tr>
            <th>年齢.</th>
            <td>{{ age }}</td>
          </tr>
          <tr>
            <th>出身地.</th>
            <td>{{ birthPlace }}</td>
          </tr>
          <tr>
            <th>居住地.</th>
            <td>{{ livePlace }}</td>
          </tr>
          <tr>
            <th>生年月日.</th>
            <td>{{ birthday }}</td>
          </tr>
          <tr>
            <th>大学.</th>
            <td>{{ university }}</td>
          </tr>
          <tr>
            <th>エンジニア歴.</th>
            <td>{{ carrier }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'Prof',
  title: ' ',
  data () {
    return {
      name: '田中 慎太郎.',
      age: '32.',
      birthPlace: '福岡市.',
      livePlace: '横浜市',
      birthday: 'S61-1986-04-23.',
      university: '大阪工業大学.',
      carrier: '9年.'
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
}
#prof table {
  margin-top: 26vh;
  font-size: 22px;
  font-family: 'arial unicode ms';
  display: inline-block;
  text-align: left;
}
th {
  padding-right: 20px;
  font-weight: normal;
}
td {
  padding : 5px 0px;
}
</style>
