webpackJsonp([0],{"4Ylj":function(t,e){},BWr8:function(t,e){},E7uJ:function(t,e){},H5i8:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"link"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("router-link",{attrs:{to:"/prof"}},[t._v("Prof")]),t._v(" "),n("router-link",{attrs:{to:"/skill"}},[t._v("Skill")]),t._v(" "),n("router-link",{attrs:{to:"/development"}},[t._v("Development")]),t._v(" "),n("div",{staticClass:"clear"})],1)])},staticRenderFns:[]};var r={name:"App",components:{myHeader:n("VU/8")({name:"myHeader",data:function(){return{}}},i,!1,function(t){n("4Ylj")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("myHeader"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")(r,o,!1,function(t){n("f6ib")},null,null).exports,l=n("/ocq"),v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{appear:""}},[e("div",{attrs:{id:"hello"}},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("h2",[this._v("This portfolio is built with Vue.js + Webpack + HTML5 + CSS3.")])])])},staticRenderFns:[]};var _=n("VU/8")({name:"Home",title:" ",data:function(){return{msg:"Welcome to TaNA's Portfolio Site."}}},v,!1,function(t){n("H5i8")},null,null).exports,c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:""}},[n("div",{attrs:{id:"prof"}},[n("table",[n("tbody",[n("tr",[n("th",[t._v("Name.")]),t._v(" "),n("td",[t._v(t._s(t.name))])]),t._v(" "),n("tr",[n("th",[t._v("Age.")]),t._v(" "),n("td",[t._v(t._s(t.age))])]),t._v(" "),n("tr",[n("th",[t._v("BirthPlace.")]),t._v(" "),n("td",[t._v(t._s(t.birthPlace))])]),t._v(" "),n("tr",[n("th",[t._v("Home.")]),t._v(" "),n("td",[t._v(t._s(t.livePlace))])]),t._v(" "),n("tr",[n("th",[t._v("github.")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://github.com/machio77777",target:"_blank"}},[t._v(t._s(t.github))])])]),t._v(" "),n("tr",[n("th",[t._v("qiita.")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://qiita.com/machio77777",target:"_blank"}},[t._v(t._s(t.qiita))])])]),t._v(" "),n("tr",[n("th",[t._v("booklog.")]),t._v(" "),n("td",[n("a",{attrs:{href:"https://qiita.com/machio77777",target:"_blank"}},[t._v(t._s(t.booklog))])])])])])])])},staticRenderFns:[]};var u=n("VU/8")({name:"Prof",title:" ",data:function(){return{name:"Shintaro Tanaka.",age:"32.",birthPlace:"Fukuoka-Shi.",livePlace:"Yokohama-Shi.",github:"@machio77777",qiita:"@machio77777",booklog:"@machio77777"}}},c,!1,function(t){n("E7uJ")},null,null).exports,h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:""}},[n("div",{attrs:{id:"skill"}},[n("p",{staticClass:"heading"},[t._v("これからやりたいこと.")]),t._v(" "),n("p",{staticClass:"goal"},[t._v("テクノロジーを活用して、シンプルに世の中に貢献すること!!")]),t._v(" "),n("p",{staticClass:"heading"},[t._v("強み.")]),t._v(" "),n("div",{attrs:{id:"feature"}},[n("ul",[n("li",[t._v("PM・PL・SE・PGなど様々な立場で要件定義 - 保守・運用の一貫した経験があります.")]),t._v(" "),n("li",[t._v("LAMP開発経験が長く、小規模プロジェクトであれば要件定義 - リリースまで担当可能.")]),t._v(" "),n("li",[t._v("複数PHPフレームワークでの開発経験があり、設計/実装/保守を意識したテストが可能.")]),t._v(" "),n("li",[t._v("テクノロジー自体の追求より、テクノロジーの活用で世の中への貢献を考えるマインド.")])]),t._v(" "),n("p",{staticClass:"heading"},[t._v("人並みに出来ること.")]),t._v(" "),n("ul",[n("li",[t._v("基本UIスキル(HTML/CSS/ES6/jQuery/Ajax/レスポンシブ)でのフロント開発が可能.")]),t._v(" "),n("li",[t._v("RDBMSの基礎スキル(SQL/正規化/インデックス/トランザクション)に関わる開発が可能.")]),t._v(" "),n("li",[t._v("Linux上での操作/サーバー構築/AWS環境での開発などインフラ基礎に関わる開発が可能.")])])])])])},staticRenderFns:[]};var p=n("VU/8")({name:"Skill",title:" ",data:function(){return{}}},h,!1,function(t){n("BWr8")},null,null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"development"}},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var d=n("VU/8")({name:"Development",title:" ",data:function(){return{msg:"Coming Soon"}}},m,!1,function(t){n("iqEZ")},null,null).exports;a.a.use(l.a);var f=new l.a({routes:[{path:"/",name:"Home",component:_},{path:"/prof",name:"Prof",component:u},{path:"/skill",name:"Skill",component:p},{path:"/development",name:"Development",component:d}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:f,components:{App:s},template:"<App/>"})},f6ib:function(t,e){},iqEZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5d7d966877f251224e15.js.map