(self["webpackChunkcalibration_guide"]=self["webpackChunkcalibration_guide"]||[]).push([[973],{1693:function(n,e,t){"use strict";var r=t(1386),o=t(4484),i=t(1381),u=t(1770);e.Z=(0,i.L)({name:"QCard",props:{...o.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(n,{slots:e}){const{proxy:{$q:t}}=(0,r.FN)(),i=(0,o.Z)(n,t),a=(0,r.Fl)((()=>"q-card"+(!0===i.value?" q-card--dark q-dark":"")+(!0===n.bordered?" q-card--bordered":"")+(!0===n.square?" q-card--square no-border-radius":"")+(!0===n.flat?" q-card--flat no-shadow":"")));return()=>(0,r.h)(n.tag,{class:a.value},(0,u.KR)(e.default))}})},2762:function(n,e,t){"use strict";var r=t(1386),o=t(1381),i=t(1770),u=t(9874);e.Z=(0,o.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:e}){const{proxy:{$q:t}}=(0,r.FN)(),o=(0,r.f3)(u.YE,u.qO);if(o===u.qO)return console.error("QPage needs to be a deep child of QLayout"),u.qO;const a=(0,r.f3)(u.Mw,u.qO);if(a===u.qO)return console.error("QPage needs to be child of QPageContainer"),u.qO;const s=(0,r.Fl)((()=>{const e=(!0===o.header.space?o.header.size:0)+(!0===o.footer.space?o.footer.size:0);if("function"===typeof n.styleFn){const r=!0===o.isContainer.value?o.containerHeight.value:t.screen.height;return n.styleFn(e,r)}return{minHeight:!0===o.isContainer.value?o.containerHeight.value-e+"px":0===t.screen.height?0!==e?`calc(100vh - ${e}px)`:"100vh":t.screen.height-e+"px"}})),c=(0,r.Fl)((()=>"q-page"+(!0===n.padding?" q-layout-padding":"")));return()=>(0,r.h)("main",{class:c.value,style:s.value},(0,i.KR)(e.default))}})},4484:function(n,e,t){"use strict";t.d(e,{S:function(){return o},Z:function(){return i}});var r=t(1386);const o={dark:{type:Boolean,default:null}};function i(n,e){return(0,r.Fl)((()=>null===n.dark?e.dark.isActive:n.dark))}},1381:function(n,e,t){"use strict";t.d(e,{L:function(){return i},f:function(){return u}});var r=t(4612),o=t(1386);const i=n=>(0,r.Xl)((0,o.aZ)(n)),u=n=>(0,r.Xl)(n)},1770:function(n,e,t){"use strict";t.d(e,{Bl:function(){return i},Jl:function(){return s},KR:function(){return o},pf:function(){return a},vs:function(){return u}});var r=t(1386);function o(n,e){return void 0!==n&&n()||e}function i(n,e){if(void 0!==n){const e=n();if(void 0!==e&&null!==e)return e.slice()}return e}function u(n,e){return void 0!==n?e.concat(n()):e}function a(n,e){return void 0===n?e:void 0!==e?e.concat(n()):n()}function s(n,e,t,o,i,u){e.key=o+i;const a=(0,r.h)(n,e,t);return!0===i?(0,r.wy)(a,u()):a}},723:function(n){n.exports=function(n,e,t){const r=void 0!==n.__vccOpts?n.__vccOpts:n,o=r[e];if(void 0===o)r[e]=t;else for(var i in t)void 0===o[i]&&(o[i]=t[i])}},8841:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(1386);function o(n,e,t,o,i,u){const a=(0,r.up)("vue-easy-lightbox");return(0,r.wg)(),(0,r.j4)(a,{visible:o.visibleRef,imgs:o.imgsRef,index:o.indexRef,onHide:o.onHide},null,8,["visible","imgs","index","onHide"])}var i=t(4612),u=t(9272),a={name:"PopUpImage",components:{VueEasyLightbox:u.Z},props:{url:{type:String,required:!0}},emits:["update:url"],setup(n,{emit:e}){const t=(0,i.iH)(!1),o=(0,i.iH)(0),u=(0,i.iH)([]);function a(){t.value=!1,e("update:url","")}return(0,r.YP)((()=>n.url),(n=>{""!=n&&(u.value=window.location.origin+window.location.pathname+n,t.value=!0)})),{visibleRef:t,indexRef:o,imgsRef:u,onHide:a}}},s=t(7653);const c=(0,s.Z)(a,[["render",o]]);var l=c},7973:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var r=t(1386);const o={class:"page row justify-center"},i=(0,r._)("h3",{class:"q-mt-none"}," Датчики (кіневики, блтач, закінчення філамента тощо) ",-1),u=(0,r._)("p",null,"Зробимо вигляд що тут щось є",-1);function a(n,e,t,a,s,c){const l=(0,r.up)("PopUpImage"),d=(0,r.up)("q-card"),f=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(l,{url:n.imgUrl,"onUpdate:url":e[0]||(e[0]=e=>n.imgUrl=e),urlModifiers:{sync:!0}},null,8,["url"]),(0,r._)("div",o,[(0,r.Wm)(d,{class:"col-12 q-pa-md"},{default:(0,r.w5)((()=>[i,u])),_:1})])])),_:1})}var s=t(4612),c=t(8841),l=(0,r.aZ)({name:"Sensors",components:{PopUpImage:c.Z},setup(){return{imgUrl:(0,s.iH)("")}}}),d=t(7653),f=t(2762),p=t(1693),v=t(723),g=t.n(v);const h=(0,d.Z)(l,[["render",a]]);var m=h;g()(l,"components",{QPage:f.Z,QCard:p.Z})}}]);
//# sourceMappingURL=973.b1766d65.js.map