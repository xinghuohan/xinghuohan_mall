(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"1f00":function(t,e,n){"use strict";n.r(e);var a=n("bdbb"),r=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=r.a},"314c":function(t,e,n){},"4e1e":function(t,e,n){"use strict";n.r(e);var a=n("6a4c"),r=n("1f00");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("5dc1");var i=n("2877"),d=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=d.exports},"5dc1":function(t,e,n){"use strict";var a=n("314c"),r=n.n(a);r.a},"6a4c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},bdbb:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("9fcf"));function r(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"2475"))},i=function(){return n.e("components/empty").then(n.bind(null,"9921"))},d={components:{uniLoadMore:o,empty:i},data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待收货",loadingType:"more",orderList:[]},{state:3,text:"待评价",loadingType:"more",orderList:[]},{state:4,text:"售后",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,0==t.state&&this.loadData()},methods:{loadData:function(t){var e=this,n=this.tabCurrentIndex,r=this.navList[n],o=r.state;"tabChange"===t&&!0===r.loaded||"loading"!==r.loadingType&&(r.loadingType="loading",setTimeout(function(){var t=a.default.orderList.filter(function(t){return t=Object.assign(t,e.orderStateExp(t.state)),0===o?t:t.state===o});t.forEach(function(t){r.orderList.push(t)}),e.$set(r,"loaded",!0),r.loadingType="more"},600))},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t},deleteOrder:function(e){var n=this;t.showLoading({title:"请稍后"}),setTimeout(function(){n.navList[n.tabCurrentIndex].orderList.splice(e,1),t.hideLoading()},600)},cancelOrder:function(e){var n=this;t.showLoading({title:"请稍后"}),setTimeout(function(){var a=n.orderStateExp(9),r=a.stateTip,o=a.stateTipColor;e=Object.assign(e,{state:9,stateTip:r,stateTipColor:o});var i=n.navList[1].orderList,d=i.findIndex(function(t){return t.id===e.id});-1!==d&&i.splice(d,1),t.hideLoading()},600)},orderStateExp:function(t){var e="",n="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break;case 9:e="订单已关闭",n="#909399";break}return{stateTip:e,stateTipColor:n}}}};e.default=d}).call(this,n("543d")["default"])}},[["0754","common/runtime","common/vendor"]]]);