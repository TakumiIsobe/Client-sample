(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{273:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("04df440f",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n(273)},283:function(t,e,n){var r=n(23)(!1);r.push([t.i,".slug section{width:60%;max-width:1440px;margin:35vh auto 0}.slug img{width:100%;height:40vw;max-height:960px}",""]),t.exports=r},293:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(44),n(64)),o=n.n(c),l={head:{titleTemplate:"%s | news.title ",bodyAttrs:{class:"slug"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,o.a.get("https://cont.microcms.io/api/v1/news/".concat(n.id),{headers:{"X-API-KEY":"fced380c-aed9-4d1c-a37b-508f62db5cda"}});case 3:return r=e.sent,data=r.data,e.abrupt("return",{news:data});case 6:case"end":return e.stop()}}),e)})))()}},d=(n(282),n(8)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"mt-30vh hidden"},[n("h2",[t._v(t._s(t.news.title))]),t._v(" "),n("img",{staticClass:"w-full h-full mb-1",attrs:{src:t.news.thumbnail.url}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.news.body)}})])])}),[],!1,null,null,null);e.default=component.exports}}]);