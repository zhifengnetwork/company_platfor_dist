webpackJsonp([0],{CMsp:function(e,t){},"M/P8":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"guige",components:{},data:function(){return{id:["","",""],options:[{name:"颜色",items:[{msg:"绿色",id:"11"},{msg:"红色",id:"12"}]},{name:"型号",items:[{msg:"XXX",id:"13"},{msg:"L",id:"14"},{msg:"XXL",id:"15"}]},{name:"版本",items:[{msg:"32G",id:"16"},{msg:"8G",id:"17"},{msg:"4G",id:"18"}]}]}},methods:{select:function(e,t){var i=this.options[e].items[t].msg;this.id.splice(e,1,i),console.log(this.id)}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._l(e.options,function(t,s){return i("div",{key:s},[i("p",[e._v(e._s(t.name))]),e._v(" "),e._l(t.items,function(t,n){return i("div",{key:n,staticClass:"row",on:{click:function(t){return e.select(s,n)}}},[i("input",{attrs:{type:"radio",name:s,id:t.id,value:""}}),e._v(" "),i("label",{attrs:{for:t.id}},[e._v(e._s(t.msg))])])})],2)}),e._v(" "),i("span",[e._v(e._s(this.id))])],2)},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(e){i("CMsp")},"data-v-6cd17e21",null);t.default=o.exports}});
//# sourceMappingURL=0.655c2fc24fb1af08e334.js.map