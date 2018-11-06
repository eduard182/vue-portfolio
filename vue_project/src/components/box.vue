<template>
  <div class='box'>
    <div class="capture"><slot name="capture"></slot></div>
    <div class="lecture">
      <slot name="link"></slot>
      <p class="eng">- {{item.eng}} -</p>
      <div class="technologys">
        <div v-for='technology in item.technologys' :key="technology">
          <div><img :src=technology /></div>
        </div>
      </div>
      <p class="">{{item.overview}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: ['item'],
  data () {
    return {
    }
  }
}
</script>

<style>
.box {
  width: 350px;
  height: 420px;
  vertical-align: top;
  margin: 30px;
  text-align: left;
  color: #000044;
  border: solid 1px #d3d3d3;
  display: inline-block;
  background-color: #ffffff;
  box-shadow: 0 0 8px gray;
}
.capture img {
  width: 350px;
  height: 210px;
  border-bottom: #c0c0c0 solid 1px;
}
.lecture {
  text-align: center;
  padding: 5px 20px;
}
.lecture a {
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  color: #6495ed;
  font-family: 'arial unicode ms';
}
.lecture .eng {
  font-family: cursive;
}
.technologys {
  width: 310px;
}
.technologys div {
  margin: 0px 3px;
  vertical-align: middle;
  display: inline-block;
}
.technologys img {
  width: 30px;
}
@media (max-width : 670px){
  .box {
    width: 310px;
  }
  .capture img {
    width: 310px;
  }
  .technologys {
    width: 270px;
  }
}
</style>
