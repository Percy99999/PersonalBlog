webpackJsonp([0],{"4IF2":function(t,i){},"8Sv3":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"warp_main"},this._l(this.audioFile,function(t){return i("audio",{key:t.id,staticClass:"audio_box",attrs:{src:t.url,controls:"controls"}})}),0)},staticRenderFns:[]};var n=a("VU/8")({data:function(){return{audioFile:[]}},mounted:function(){var t=this;this.$axios.get("http://api.migu.jsososo.com/search?keyword=周杰伦").then(function(i){t.audioFile=i.data.data.list})}},e,!1,function(t){a("4IF2")},"data-v-58a51e76",null);i.default=n.exports}});
//# sourceMappingURL=0.d2e37770f725283681fd.js.map