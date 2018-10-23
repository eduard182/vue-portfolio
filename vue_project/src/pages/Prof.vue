<template>
    <div id="prof">
      <table>
        <tbody>
          <tr>
            <th>Name.</th>
            <td>{{ name }}</td>
          </tr>
          <tr>
            <th>Age.</th>
            <td>{{ age }}</td>
          </tr>
          <tr>
            <th>Birth Place.</th>
            <td>{{ birthPlace }}</td>
          </tr>
          <tr>
            <th>Birthday.</th>
            <td>{{ birthday }}</td>
          </tr>
          <tr>
            <th>University.</th>
            <td>{{ university }}</td>
          </tr>
          <tr>
            <th>Engineer's Carrier.</th>
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
      name: 'Shintaro Tanaka.',
      age: '32.',
      birthPlace: 'Fukuoka.',
      birthday: '1986-04-23.',
      university: 'Osaka Institute of Technology.',
      carrier: '9.'
    }
  }
}
</script>

<style>
#prof {
  height: 94vh;
  padding-top: 12vh;
  position: relative;
  text-align: center;
}
#prof h1 {
  padding-top: 10vh;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: normal;
  padding-right : 20px;
  padding-left : 20px;
  margin: 0;
  font-family: cursive;
}
table {
  padding : 50px 0;
  display: inline-block;
  text-align: left;
  font-family: cursive;
  color: #000044;
}
th {
  padding-right: 20px;
  font-weight: normal;
}
td {
  font-size : 20px;
  padding : 5px 0px;
}
{
  text-decoration: none;
}
</style>
