(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(t,o,e){var content=e(202);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("56b15182",content,!0,{sourceMap:!1})},156:function(t,o,e){"use strict";var r={transition:{name:"slide",mode:"out-in",css:!1,beforeEnter:function(t){this.$gsap.set(t,{scale:1,opacity:0,top:"-100%"})},enter:function(t,o){this.$gsap.to(t,{opacity:1,top:0,duration:1,ease:"power2.inOut",onComplete:o})},leave:function(t,o){this.$gsap.to(t,{opacity:0,top:"100%",duration:1,ease:"power2.inOut",onComplete:o})}}},n=(e(201),e(34)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("header",{staticClass:"flex space-between"},[e("NuxtLink",{attrs:{to:"/"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"150",height:"30",viewBox:"0 0 1000 125"}},[e("path",{attrs:{d:"M22,116.67,23,64.77S23,30.54,22.7,22.88c-.34-9.36-1.36-11.74-10.55-12.76-1.53-.17-3.4-.51-3.4-1.88,0-1.19,1.87-1.7,4.76-1.7,4.77,0,11.06.51,16.85.51H69c5.27,0,10.72-1,12.08-1a2.7,2.7,0,0,1,1.7,2.21c0,4.77.34,10.9.34,15.83,0,2.05-1.19,3.41-1.7,3.41-1,0-1.36-1.36-1.87-3.58-2-9.7-5.79-10.72-15.32-11.57-6.13-.51-17.19-.17-24.51-.17-1.19,0-2,1.7-2.21,3.07C37,27.82,37,42.46,37,55.9a1.71,1.71,0,0,0,1.87,1.53c3.57,0,11.06-.34,19.91-.34,8.35-.17,10.73-2,12.43-8.68.68-2.55,1.7-3.57,2.55-3.57,1,0,1.7,1.19,1.7,3.57s-.85,7.32-.85,11.41c.17,5.1.68,7.83.68,11.74,0,3.06-1,2.53-2.33,2a4.82,4.82,0,0,1-2.71-3.15c-1.19-4.77-18.35-8.13-31.8-8.13C37.94,62.33,37,64.07,37,66c0,13.45-1.12,20.72-.8,28.73a56,56,0,0,0,.85,7.31,14.45,14.45,0,0,0,6.56,8.86,14.11,14.11,0,0,0,9.24,2c6.85-.82,9.26-5.14,9.81-6.13,1-1.72.35.63-1.08,3a18.59,18.59,0,0,1-2.52,3,12.94,12.94,0,0,1-5.45,3.33,12.19,12.19,0,0,1-5.55,1l-26-.33Z",fill:"#fff"}}),e("path",{attrs:{d:"M311.62,60.94c0,25.36-12.42,39.15-24.85,48.17C276.73,116.6,263.29,120,256,120c-33.19,0-60.6-24.84-60.6-59.23A57.14,57.14,0,0,1,219.2,14a60.89,60.89,0,0,1,33.19-9.88C284.05,4.09,311.62,27.24,311.62,60.94ZM223.46,19.07c-4.6,4.77-12.26,15.83-12.26,37.28,0,16.17,6.3,33.36,17,44.76,7.48,8.51,17.35,14.3,29.27,14.3,9.53,0,18.55-5.11,24.68-11.41,9.36-9,13.44-25.87,13.44-39.48,0-26-17.19-56.34-48.16-56.34C237.76,8.18,228.74,13.62,223.46,19.07Z",fill:"#fff"}}),e("path",{attrs:{d:"M525.8,95.16c0,3.63,1.2,7.4,4,7.46a14.54,14.54,0,0,0,6.31-1.36,13.44,13.44,0,0,0,4.06-2.86,17.17,17.17,0,0,0,2.28-3,10.77,10.77,0,0,0,1.17-2.52,14.6,14.6,0,0,0,.48-1.74c.11-.51-.19,1-.2,1.1a7.44,7.44,0,0,1-.19.79,12.37,12.37,0,0,1-.48,1.4c-1.29,3-5.07,7.16-6.8,8.62C530.75,107.84,531,108,525,112a82.45,82.45,0,0,1-12.34,5.42,88.39,88.39,0,0,1-22.46,3.12c-22.47,0-39.66-7.82-50.72-18.55-8.17-8.16-15.83-20.59-15.83-40,0-18.72,11.4-36.25,24.68-45.44,11.06-8,25-12.08,42-12.08a103.3,103.3,0,0,1,20.08,2.38,27.89,27.89,0,0,0,12.43,0c.51-.17,1.7.85,1.53,1.7-.86,7.83.34,15,.68,22.64.17,2.72-.51,4.25-1.54,4.25-1.19,0-1.86-1.7-2.54-4.93a28.14,28.14,0,0,0-10-15.32c-4.76-3.57-15.31-6.81-26-6.64-29.28.34-44.08,22-44.08,49.7,0,31,18.38,57.87,50.55,57.87,9,0,15-1.7,17-4.43,2.21-2.55,3.58-7,3.58-15.83a100.75,100.75,0,0,0-.69-12.93c-.85-4.93-4.09-6.81-14.13-8.17-2.72-.51-3.91-1-3.91-2.38,0-.85,2-1.7,4.42-1.53,5.79.16,10.73.68,17.37.68,5.27,0,11.22-.45,11.81-.17Z",fill:"#fff"}}),e("path",{attrs:{d:"M757.43,114.1c-7.83,3.74-17.71,6.81-34,6.81-17.36,0-37.1-6-49.52-20.43-9-10.38-13.28-24.5-13.28-37.1,0-17.7,7-34.55,24.17-46.47,13.78-9.53,28.59-12.08,40.68-12.08,11.4,0,19.91,2.38,24.68,3.41,4.42,1.36,6.12,1.36,7.65,1.36.86,0,1.88,1.87,1.71,2.55-.34,6.3.51,14.46.68,17.36.34,2.72-.51,4.09-1.53,4.09-.68,0-1.53-1.37-2.21-3.58C753.85,22.36,751,19.3,746,15.89c-4.6-3.57-13.44-7.14-24.51-7.14-28.25,0-44.08,20.25-44.08,48,0,12.94,2.38,21.79,5.79,29.11,10.38,21.61,29.44,30.46,43.57,30.46,7.32,0,13.61-1,19.23-3.91A27.75,27.75,0,0,0,757.76,100",fill:"#fff"}}),e("path",{attrs:{d:"M891,100.51c11.23-27.91,27.57-76.25,30.3-84.41l2.63-9.35c0-1-.08-.19.6-.36a31.52,31.52,0,0,1,8-.17,3.15,3.15,0,0,1,1.53,2.05c.34,2.72,1.2,4.93,2.9,10.21,9.53,27.91,20.08,56,30.46,81.87,4.6,10.89,9.71,11.54,11.21,11.65a10.34,10.34,0,0,0,6.36-1.49,8.89,8.89,0,0,0,3-2.36,18.73,18.73,0,0,0,2.26-3.42,19.31,19.31,0,0,0,1-3.64c.27,2.58-1.05,6.84-2.54,9a17.8,17.8,0,0,1-5,4.88,15.23,15.23,0,0,1-6.64,2.25c-2.2.22-6.85-.41-14.34-.41l-7.08,0-3.65-13c-1.19-6-8-25-9.18-28.08a4.31,4.31,0,0,0-3.92-2.22c-7.32,0-28.25,0-30.12.17-.86,0-1.88,1.19-2.39,2.55C904.8,79.92,898,101.54,898,106c0,4.6,1.53,6.47,9.36,7.83,2.38.34,3.4,1.53,3.4,2.38,0,1-2,1.54-4.25,1.54-5.1,0-5.79-.86-13.61-.86-5.11,0-5.17.65-9.59.65Zm47.83-36.42c-4.77-14.47-10-28.93-14-39.32-.17-.67-1.19-1.36-1.53-.51C922.16,27,911.44,60,910.08,64.6c-.17.34,0,1.2,1,1.36,2.89.17,25,.17,26.89-.16A1.61,1.61,0,0,0,938.84,64.09Z",fill:"#fff"}}),e("path",{attrs:{d:"M757.43,114.1c1.2-1.06,1.76-.1,3.42-3.85s-1.46-14.16-3.59-9.55",fill:"#fff"}})])]),t._v(" "),e("div",[e("ul",[e("li",[e("NuxtLink",{attrs:{to:"/news"}},[t._v("News")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/item"}},[t._v("Item")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",[e("NuxtLink",{attrs:{to:"/access"}},[t._v("Access")])],1)])])],1),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);o.a=component.exports},157:function(t,o,e){e(158),t.exports=e(159)},199:function(t,o,e){var content=e(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("14a41a40",content,!0,{sourceMap:!1})},200:function(t,o,e){var r=e(58)(!1);r.push([t.i,":root{--mainColor:#bb4c24;--subColor:#f7f7f7;--white:#fff;--black:#000;--gray:#a0a0a0}*{margin:0;padding:0;box-sizing:border-box}body,html{font-size:62.5%;width:100vw;overflow-x:hidden;background-color:#f7f7f7;background-color:var(--subColor)}a,button,div,h1,h2,h3,h4,h5,h6,p,span{font-family:ivymode,sans-serif;font-weight:400;font-style:normal;color:var(--textColor)}.h0{font-size:5rem}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2.1rem}.h3,h3{font-size:1.7rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.3rem}.h6,h6{font-size:1.2rem}p{width:90%;font-size:1.3rem;letter-spacing:.5625px;line-height:2.8rem;text-align:left;text-transform:none}a,li{text-decoration:none}a{transition:.75s ease-in-out}a:hover{opacity:.5}img{-o-object-fit:cover;object-fit:cover}.pc{display:none}.mainColor{color:#bb4c24;color:var(--mainColor)}.subColor{color:#f7f7f7;color:var(--subColor)}.white{color:#fff;color:var(--white)}.black{color:#000;color:var(--black)}.gray{color:#a0a0a0;color:var(--gray)}.flex{display:flex;justify-content:center;align-items:center}.wrap{flex-wrap:wrap}.column{flex-direction:column}.flex-start{align-items:flex-start}.flex-end{align-items:flex-end}.align-start{align-items:flex-start}.space-between{justify-content:space-between}.center{text-align:center}.bg{background-size:cover;background-position:50%}.fixed{position:fixed}.relative{position:relative}.absolute{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.z-1{z-index:1}.z-99{z-index:99}.ib{display:inline-block}.nowrap{white-space:nowrap}.snap-align{height:100vh;scroll-snap-align:start}.hidden{overflow:hidden}.transition{transition:1s ease-in-out}.blackBg{background-color:#000;background-color:var(--black)}.whiteBg{background-color:#fff;background-color:var(--white)}.full-radius{border-radius:50%}.radius-5{border-radius:5px}main{width:100vw}.main-color{color:#bb4c24;color:var(--mainColor)}.h-full{height:100%}.w-half{width:48%}.w-full{width:100%}.w-screen{width:100vw}.h-screen{height:100vh}.w-image{width:62.5%}.w-third{width:32%}.w-forth{width:23%}.h-third{height:33.15vw}.half-portrait{height:48vw}.third-portrait{height:32.65vw}.forth-portrait{height:23.45vw}.img-cover{background:#000;background:linear-gradient(0deg,#000,rgba(24,24,24,0) 50%,rgba(24,24,24,0))}.t-80{top:80%}.t-85{top:85%}.t-90{top:90%}.t-full{top:100%}.mt-1{margin-top:1rem}.mt-2{margin-top:2rem}.mt-3{margin-top:3rem}.mt-5{margin-top:5rem}.mt-15{margin-top:15rem}.-mt-5{margin-top:-5rem}.mt-30vh{margin-top:30vh}.mr-1{margin-right:1rem}.mr-2{margin-right:2rem}.mr-3{margin-right:3rem}.mr-5{margin-right:5rem}.mb-1{margin-bottom:1rem}.mb-2{margin-bottom:2rem}.mb-3{margin-bottom:3rem}.mb-5{margin-bottom:5rem}.mb-10{margin-bottom:10rem}.mb-15{margin-bottom:15rem}.space{letter-spacing:1px}.shadow{box-shadow:8px 8px 25px #ccc}.button{width:4.5rem;height:4.5rem;background-color:#fff;background-color:var(--white);box-shadow:3px 3px 20px #ccc}.w{width:85%;max-width:1440px;margin-left:auto;margin-right:auto}.h-pr{height:120vw}.heading{margin-bottom:5rem}",""]),t.exports=r},201:function(t,o,e){"use strict";e(148)},202:function(t,o,e){var r=e(58)(!1);r.push([t.i,"header{width:100%;position:fixed;top:0;z-index:99;padding:6.25rem 7rem}header svg path{fill:#000}header ul li{display:inline-block;margin-right:5rem}header a,header li,header span{font-size:1.5rem}",""]),t.exports=r}},[[157,6,1,7]]]);