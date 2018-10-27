<template>
  <transition appear>
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
            <th>BirthPlace.</th>
            <td>{{ birthPlace }}</td>
          </tr>
          <tr>
            <th>Home.</th>
            <td>{{ livePlace }}</td>
          </tr>
          <tr>
            <th>github.</th>
            <td><a href='https://github.com/machio77777' target="_blank">{{ github }}</a></td>
          </tr>
          <tr>
            <th>qiita.</th>
            <td><a href='https://qiita.com/machio77777' target="_blank">{{ qiita }}</a></td>
          </tr>
          <tr>
            <th>booklog.</th>
            <td><a href='https://qiita.com/machio77777' target="_blank">{{ booklog }}</a></td>
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
      name: 'Shintaro Tanaka.',
      age: '32.',
      birthPlace: 'Fukuoka-Shi.',
      livePlace: 'Yokohama-Shi.',
      github: '@machio77777',
      qiita: '@machio77777',
      booklog: '@machio77777'
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
  font-family: cursive;
}
#prof table {
  margin-top: 20vh;
  font-size: 22px;
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
  font-size: 22px;
  color: #00bfff;
  line-height: 25px;
}
.v-enter-active {
  transition: opacity 1.5s;
}
.v-enter {
  opacity: 0;
}
@media (max-width : 670px){
  #prof {
    height: 70vh;
    font-family: cursive;
  }
  #prof table {
    margin-top: 10vh;
  }
}
</style>
