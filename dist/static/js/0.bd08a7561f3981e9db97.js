webpackJsonp([0],{MwUC:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("hWoQ"),e=s("7+uW"),n=s("Fd2+");e.a.use(n.e,n.b,n.c,n.d,n.f,n.g);var o={name:"groupInfo",data:function(){return{show:!1,index:1,showBase:!1,data:{images:["static/img/home/00banner-img01.png","static/img/000⑨.png","static/img/user/0001.jpg","static/img/group_area/shop.png"],group_item:[{name:"手机摄像头",minPrice:"200.00",maxPrice:"360.00",codeimg:"static/img/group_area/mark.png",pid:"0001"}],group_booking_title:{sum:"1418"},group_booking:[{userimg:"static/img/000⑨.png",username:"我最能拼了",short:"49",time:"12:51:45",time_day:"6",bid:"0004"}]},sku:{tree:[{k:"颜色",v:[{id:"30349",name:"红色",imgUrl:"https://img.yzcdn.cn/1.jpg"},{id:"1215",name:"蓝色",imgUrl:"https://img.yzcdn.cn/2.jpg"}],k_s:"s1"}],list:[{id:2259,price:100,s1:"1215",s2:"1193",s3:"0",stock_num:110}],price:"1.00",stock_num:227,collection_id:2261,none_sku:!1,messages:[{datetime:"0",multiple:"0",name:"留言",type:"text",required:"1"}],hide_stock:!1},goods:{title:"测试商品",picture:"https://img.yzcdn.cn/1.jpg"},active:2}},components:{Pheader:i.a,GoodsAction:n.b,GoodsActionBigBtn:n.c,GoodsActionMiniBtn:n.d},methods:{onChange:function(t){this.index=t},preview:function(t){this.show=!this.show,this.index=t},all:function(){this.showBase=!0}}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"group_info"},[s("header",[s("Pheader")],1),t._v(" "),s("van-swipe",{staticClass:"group_swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.data.images,function(a,i){return s("van-swipe-item",{key:i,on:{click:function(a){return t.preview(i)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a,expression:"image"}]})])}),1),t._v(" "),s("van-image-preview",{attrs:{images:t.data.images,startPosition:t.index},on:{change:t.onChange,click:function(a){return t.preview(t.index)}},scopedSlots:t._u([{key:"index",fn:function(){return[t._v("第"+t._s(t.index+1)+"页")]},proxy:!0}]),model:{value:t.show,callback:function(a){t.show=a},expression:"show"}}),t._v(" "),s("div",{staticClass:"group_notice"},[t._v("200人拼团 还差90人可拼成")]),t._v(" "),s("van-row",[s("van-col",{staticClass:"group_item",attrs:{span:"19"}},[s("p",{staticClass:"price"},[t._v("￥"),s("span",{staticClass:"price_text"},[t._v(t._s(t.data.group_item[0].minPrice)+" - "+t._s(t.data.group_item[0].maxPrice))])]),t._v(" "),s("p",{staticClass:"pName"},[t._v(t._s(t.data.group_item[0].name))])]),t._v(" "),s("van-col",{staticClass:"mark_item",attrs:{span:"5"}},[s("img",{staticClass:"mark_img",attrs:{src:t.data.group_item[0].codeimg,alt:""}}),t._v(" "),s("span",{staticClass:"mark_text"},[t._v("扫一扫")])])],1),t._v(" "),s("van-row",{staticClass:"group_booking_all",attrs:{type:"flex",justify:"space-between"}},[s("div",[t._v("\n            "+t._s(t.data.group_booking_title.sum)+"人正在拼团\n        ")]),t._v(" "),s("div",[t._v("\n            查看全部"),s("van-icon",{attrs:{name:"arrow"}})],1)]),t._v(" "),s("van-row",{staticClass:"group_booking",attrs:{type:"flex",justify:"space-between"}},[s("van-col",{staticClass:"group_booking_left",attrs:{span:"8"}},[s("img",{staticClass:"group_booking_img",attrs:{src:t.data.group_booking[0].userimg,alt:""}}),t._v(" "),s("span",[t._v(t._s(t.data.group_booking[0].username))])]),t._v(" "),s("van-col",{staticClass:"group_booking_right",attrs:{span:"8"}},[s("p",[t._v("还差"+t._s(t.data.group_booking[0].short)+"人")]),t._v(" "),s("p",[t._v("剩余时间"+t._s(t.data.group_booking[0].time_day)+"天"+t._s(t.data.group_booking[0].time))])])],1),t._v(" "),s("van-row",{staticClass:"group_booking",attrs:{type:"flex",justify:"space-between"}},[s("van-col",{staticClass:"group_booking_left",attrs:{span:"8"}},[s("img",{staticClass:"group_booking_img",attrs:{src:"static/img/000⑨.png",alt:""}}),t._v(" "),s("span",[t._v("我最能拼了")])]),t._v(" "),s("van-col",{staticClass:"group_booking_right",attrs:{span:"8"}},[s("p",[t._v("还差99人")]),t._v(" "),s("p",[t._v("剩余时间6天12:59:11")])])],1),t._v(" "),s("van-tabs",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[s("van-tab",{attrs:{title:"商品详情"}},[s("img",{attrs:{src:"static/img/000⑨.png",alt:""}})]),t._v(" "),s("van-tab",{attrs:{title:"商品评价(894)"}},[t._v("内容 2"+t._s(t.showBase))])],1),t._v(" "),s("van-goods-action",[s("goods-action-mini-btn",{attrs:{icon:"like-o",text:"关注"}}),t._v(" "),s("goods-action-mini-btn",{attrs:{icon:"service",text:"客服"}}),t._v(" "),s("goods-action-big-btn",{attrs:{type:"warning",text:"单独购买"},on:{click:function(a){return t.all()}}}),t._v(" "),s("goods-action-big-btn",{attrs:{type:"danger",text:"拼团价"}})],1),t._v(" "),s("van-sku",{attrs:{sku:t.sku,goods:t.goods},model:{value:t.showBase,callback:function(a){t.showBase=a},expression:"showBase"}})],1)},staticRenderFns:[]};var c=s("VU/8")(o,r,!1,function(t){s("hbFU")},"data-v-08842729",null);a.default=c.exports},hbFU:function(t,a){}});
//# sourceMappingURL=0.bd08a7561f3981e9db97.js.map