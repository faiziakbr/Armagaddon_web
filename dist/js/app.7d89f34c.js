(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1dab5c14":"a4c3cfa7","chunk-2d0aade1":"b23e5bd0","chunk-2d0c17a3":"378b2b3c","chunk-2d0de3cd":"79df75ef","chunk-2d0e1f9c":"72db9d41","chunk-2d0f0805":"a6d25a4c","chunk-74ec2592":"0f3f55e1","chunk-ea4b9b8e":"98eb70fa"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-1dab5c14":1,"chunk-ea4b9b8e":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-1dab5c14":"325d3ba5","chunk-2d0aade1":"31d6cfe0","chunk-2d0c17a3":"31d6cfe0","chunk-2d0de3cd":"31d6cfe0","chunk-2d0e1f9c":"31d6cfe0","chunk-2d0f0805":"31d6cfe0","chunk-74ec2592":"31d6cfe0","chunk-ea4b9b8e":"6c729b6d"}[t]+".css",s=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],f.parentNode.removeChild(f),a(r)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){i[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");r.type=n,r.request=i,a[1](r)}s[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),i=a.n(n);i.a},1356:function(t,e,a){},"14b9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-tile",{staticClass:"px-2",staticStyle:{"background-color":"#fff"}},[a("v-list-tile-avatar",[a("v-icon",{staticClass:"accent",attrs:{color:"#fff"}},[t._v("person")])],1),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(t.item.notification.notification.title)}}),a("v-list-tile-sub-title",{domProps:{innerHTML:t._s(t.item.notification.notification.body)}})],1)],1)},i=[],s={props:["itemNotification"],data:function(){return{item:this.itemNotification}}},r=s,o=a("2877"),c=a("6544"),l=a.n(c),u=a("132d"),d=a("ba95"),f=a("c954"),m=a("5d23"),h=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=h.exports;l()(h,{VIcon:u["a"],VListTile:d["a"],VListTileAvatar:f["a"],VListTileContent:m["a"],VListTileSubTitle:m["b"],VListTileTitle:m["c"]})},"372b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.fomattedPreviousDate!=t.formattedDate?a("p",{staticClass:"text-xs-center"},[t._v(t._s(t.formattedDate))]):t._e(),a("v-card",{staticClass:"my-2 mr-2",staticStyle:{"background-color":"#bdbfc1","border-radius":"50px"}},[a("h4",{staticStyle:{padding:"5px","border-radius":"10px",color:"#000"}},[t._v(t._s(t.item.message))])])],1)},i=[],s=a("c1df"),r=a.n(s),o={props:["signal","pDate"],data:function(){return{item:this.signal,formattedDate:null,fomattedPreviousDate:null,previousDate:this.pDate}},mounted:function(){this.formattedDate=r()(this.item.date).format("MMM DD, YYYY"),void 0!=this.previousDate&&(this.fomattedPreviousDate=r()(this.previousDate).format("MMM DD, YYYY"))}},c=o,l=a("2877"),u=a("6544"),d=a.n(u),f=a("b0af"),m=Object(l["a"])(c,n,i,!1,null,null,null);e["a"]=m.exports;d()(m,{VCard:f["a"]})},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=s(t);return a(e)}function s(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=a("bb71"),s=(a("da64"),a("c0a4")),r=a.n(s);n["default"].use(i["a"],{iconfont:"md",theme:{primary:"#000",secondary:r.a.red.lighten4,accent:r.a.indigo.base,success:"#fff"}});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.isLoggedIn?a("app-header"):t._e(),a("v-content",{staticStyle:{"background-color":"#e8edf0"}},[a("router-view",{staticClass:"px-3 py-3"})],1),t.isLoggedIn&&t.$vuetify.breakpoint.mdAndUp?a("div",{directives:[{name:"show",rawName:"v-show",value:!t.showSignals,expression:"!showSignals"}],staticStyle:{width:"300px",height:"400px",position:"fixed",bottom:"0px",right:"0px","z-index":"9999",border:"2px #f3bf2e solid","border-radius":"10px"}},[a("v-card",[a("v-layout",{attrs:{"align-content-space-between":"","align-center":""}},[a("v-flex",[a("h1",{staticClass:"headline",staticStyle:{"padding-left":"10px"}},[t._v("Signals")])]),a("v-flex",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{flat:"",icon:""},on:{click:t.toggleSignals}},[a("v-icon",{attrs:{dark:""}},[t._v("cancel")])],1)],1)],1)],1),a("v-divider"),a("app-signal-dialog")],1):t._e(),t.isLoggedIn&&t.$vuetify.breakpoint.mdAndUp?a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSignals,expression:"showSignals"}],staticStyle:{position:"fixed",bottom:"50px",right:"10px","z-index":"9999"}},[a("v-btn",{attrs:{absolute:"",fab:"",top:"",right:"",color:"#f3bf2e"},on:{click:t.toggleSignals}},[a("v-badge",{attrs:{value:t.count>0},scopedSlots:t._u([{key:"badge",fn:function(){return[a("span",[t._v(t._s(t.count))])]},proxy:!0}],null,!1,3045412045)},[a("v-icon",[t._v("swap_vert")])],1)],1)],1):t._e(),a("app-loader",{attrs:{showDialog:t.loading}})],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{staticClass:"primary",staticStyle:{"padding-left":"0px"},attrs:{app:""}},[t.$vuetify.breakpoint.mdAndDown?n("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!0}}},[n("v-icon",{staticClass:"accent--text"},[t._v("menu")])],1):t._e(),n("v-toolbar-title",{staticClass:"accent--text"},[t._v("Forex Arma")]),n("v-spacer"),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{icon:""}},a),[n("v-icon",{attrs:{color:"accent"}},[t._v("notifications")])],1)]}}])},[n("v-list",{staticStyle:{"max-height":"300px",width:"350px"}},t._l(t.notifications,function(t,e){return n("v-flex",{key:e},[n("ItemNotification",{attrs:{itemNotification:t}}),n("v-divider",{key:e})],1)}),1)],1),t.$vuetify.breakpoint.lgAndUp?n("v-btn",{attrs:{icon:""},on:{click:t.logout}},[n("v-icon",{attrs:{color:"accent"}},[t._v("exit_to_app")])],1):t._e()],1),n("v-navigation-drawer",{staticStyle:{"background-color":"#000"},attrs:{app:"",clipped:!0,permanent:t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl,temporary:t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm||t.$vuetify.breakpoint.md},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-img",{attrs:{"aspect-ratio":10/9,src:a("9085")}},[n("v-layout",{attrs:{column:"","align-center":"","pa-4":""}},[n("v-avatar",{attrs:{size:120,color:"grey lighten-4"}},[n("img",{attrs:{src:t.image,alt:"avatar"},on:{error:t.imageLoadError}})]),n("v-card-title",[n("div",[n("h3",{staticClass:"headline mb-0 accent--text"},[t._v(t._s(t.user.first_name)+" "+t._s(t.user.last_name))])])])],1)],1),t.$vuetify.breakpoint.mdAndUp?n("v-list",t._l(t.itemsOnLargeScreen,function(e){return n("v-list-tile",{key:e.title,on:{click:function(a){return t.menuClick(e)}}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"iconColor"}},[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticStyle:{color:"#fff"}},[t._v(t._s(e.title))])],1)],1)}),1):n("v-list",t._l(t.itemsOnSmallScreen,function(e){return n("v-list-tile",{key:e.title,on:{click:function(a){return t.menuClick(e)}}},[n("v-list-tile-action",[n("v-icon",{staticStyle:{color:"#f3bf2e"}},[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticStyle:{color:"#fff"}},[t._v(t._s(e.title))])],1)],1)}),1)],1),n("edit-profile-dialog")],1)},u=[],d=a("bc3a"),f=a.n(d),m=a("14b9"),h=a("fa19"),g=a.n(h),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("User Profile")])]),a("v-flex",{attrs:{xs12:"","align-center":"","justify-center":"",layout:"","text-xs-center":""}},[a("v-avatar",{attrs:{size:"100",color:"grey lighten-4"}},[a("img",{attrs:{src:t.image},on:{error:t.imageLoadError}})])],1),a("v-flex",{attrs:{xs12:"","align-center":"","justify-center":"",layout:"","text-xs-center":""}},[a("input",{ref:"pickImage",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:t.onFileSelected}}),a("v-btn",{on:{click:function(e){return t.$refs.pickImage.click()}}},[t._v("Pick Image")])],1),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{name:"firstName",label:"first name*",rules:t.firstNameRules,required:""},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{name:"lastName",label:"last name*",rules:t.lastNameRules,required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"city",label:"City*",rules:t.cityRules,required:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"country",label:"Country*",rules:t.countryRules,required:""},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:"",disabled:!t.valid},on:{click:t.submit}},[t._v("Update")])],1)],1)],1)],1)},v=[],b={data:function(){return{dialog:!1,valid:!1,user:null,selectedFile:null,base64Image:null,image:"",firstName:"",lastName:"",city:"",country:"",firstNameRules:[function(t){return!!t||"First name is required"}],lastNameRules:[function(t){return!!t||"Last name is required"}],cityRules:[function(t){return!!t||"City is required"}],countryRules:[function(t){return!!t||"Country is required"}]}},mounted:function(){var t=this;Vt.$on("showDialog",function(e){t.dialog=e}),this.user=JSON.parse(localStorage.getItem("user")),this.firstName=this.user.first_name,this.lastName=this.user.last_name,this.city=this.user.city,this.country=this.user.country,this.image="http://www.vacayplanet.com/ArmageddonApi/public/appImages/"+this.user.profile_pic_url},methods:{onFileSelected:function(t){var e=this,a=t.target.files[0],n=new FileReader;n.onload=function(t){var a=t.target.result;e.base64Image=window.btoa(a)},n.readAsBinaryString(a)},submit:function(){var t={profile_pic:this.base64Image,customer_id:this.user.id,first_name:this.firstName,last_name:this.lastName,city:this.city,country:this.country};f.a.post("http://www.vacayplanet.com/ArmageddonApi/public/api/updateProfile",t,{onUploadProgress:function(t){console.log(t.loaded),console.log("total: "+t.total),console.log("Upload event: "+Math.round(t.loaded/t.total*100))}}).then(function(t){localStorage.setItem("user",JSON.stringify(t.data.customer))}).catch(function(t){console.log(t)})},closeDialog:function(){this.openDialog=!1},imageLoadError:function(t){this.image=g.a,t.target.src=this.image}}},y=b,j=a("2877"),x=a("6544"),k=a.n(x),w=a("8212"),S=a("8336"),_=a("b0af"),A=a("99d9"),O=a("12b2"),C=a("a523"),I=a("169a"),D=a("0e8f"),V=a("4bd4"),N=a("a722"),E=a("9910"),T=a("2677"),L=Object(j["a"])(y,p,v,!1,null,null,null),z=L.exports;k()(L,{VAvatar:w["a"],VBtn:S["a"],VCard:_["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:O["a"],VContainer:C["a"],VDialog:I["a"],VFlex:D["a"],VForm:V["a"],VLayout:N["a"],VSpacer:E["a"],VTextField:T["a"]});var H={components:{ItemNotification:m["a"],EditProfileDialog:z},data:function(){return{eventBus:Vt,drawer:!1,notifications:[],user:{},image:"",showEditDialog:!1,itemsOnSmallScreen:[{id:1,title:"Signals",icon:"swap_vert"},{id:2,title:"Referrals",icon:"people"},{id:3,title:"Earnings",icon:"attach_money"},{id:4,title:"Withdraw Methods",icon:"account_balance"},{id:5,title:"Log out",icon:"exit_to_app"}],itemsOnLargeScreen:[{id:1,title:"Signals",icon:"swap_vert"},{id:2,title:"Referrals",icon:"people"},{id:3,title:"Earnings",icon:"attach_money"},{id:4,title:"Withdraw Methods",icon:"account_balance"}]}},mounted:function(){var t=this;this.user=JSON.parse(localStorage.getItem("user")),this.image="http://www.vacayplanet.com/ArmageddonApi/public/appImages/"+this.user.profile_pic_url,f()({method:"GET",url:"http://www.vacayplanet.com/ArmageddonApi/public/api/notifications/"+this.user.id}).then(function(e){t.notifications=e.data,t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})},methods:{menuClick:function(t){1==t.id&&this.$router.push("signals"),2==t.id&&this.$router.push("referrals"),3==t.id&&this.$router.push("earnings"),4==t.id&&this.$router.push("payment_methods"),5==t.id&&this.logout()},openEditDialog:function(){Vt.$emit("showDialog",!0)},logout:function(){var t=this;this.$store.dispatch("logout").then(function(e){t.$router.push("/login")}).catch(function(t){return console.log(t)})},imageLoadError:function(t){this.image=g.a,t.target.src=this.image}}},P=H,B=(a("8baf"),a("ce7e")),R=a("132d"),M=a("adda"),U=a("8860"),Y=a("ba95"),F=a("40fe"),G=a("5d23"),J=a("e449"),q=a("f774"),K=a("71d9"),Q=a("706c"),X=a("2a7f"),$=Object(j["a"])(P,l,u,!1,null,null,null),W=$.exports;k()($,{VAvatar:w["a"],VBtn:S["a"],VCardTitle:O["a"],VDivider:B["a"],VFlex:D["a"],VIcon:R["a"],VImg:M["a"],VLayout:N["a"],VList:U["a"],VListTile:Y["a"],VListTileAction:F["a"],VListTileContent:G["a"],VListTileTitle:G["c"],VMenu:J["a"],VNavigationDrawer:q["a"],VSpacer:E["a"],VToolbar:K["a"],VToolbarSideIcon:Q["a"],VToolbarTitle:X["a"]});var Z=a("864d"),tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"10px","background-color":"#fff"},attrs:{id:"scrolled-content"}},[a("v-list",{staticClass:"scroll-y",staticStyle:{height:"350px"},attrs:{id:"scroll-target"}},t._l(t.signals,function(e,n){return a("v-flex",{key:n,attrs:{xs12:""}},[a("item-signal",0==n?{attrs:{signal:e}}:{attrs:{signal:e,pDate:t.signals[--n].date}})],1)}),1)],1)},et=[],at=(a("55dd"),a("ac6a"),a("c1df")),nt=a.n(at),it=a("372b"),st={components:{ItemSignal:it["a"]},data:function(){return{loading:!0,signals:[]}},mounted:function(){this.fetchSignals(),this.scrollToBot()},methods:{fetchSignals:function(){var t=this;Lt.on("value",function(e){var a=[];e.forEach(function(t){a.push(t.val())}),a.sort(function(t,e){return new Date(nt()(t.date).format("MM/DD/YYYY hh:mm:ss"))-new Date(nt()(e.date).format("MM/DD/YYYY hh:mm:ss"))}),Vt.$emit("signal_counter",!0),t.signals=a})},scrollToBot:function(){this.elem=document.getElementById("scrolled-content"),this.container=document.getElementById("scroll-target"),this.container.scrollTop=this.elem.offsetHeight+9999}},computed:{options:function(){return{duration:1e3,offset:0,easing:"easeInOutCubic"}}}},rt=st,ot=Object(j["a"])(rt,tt,et,!1,null,null,null),ct=ot.exports;k()(ot,{VFlex:D["a"],VList:U["a"]});var lt={name:"App",components:{appHeader:W,appLoader:Z["a"],appSignalDialog:ct},data:function(){return{loading:!1,showSignals:!0,count:-1}},created:function(){this.$http.interceptors.response.use(void 0,function(t){return new Promise(function(e,a){throw 401===t.status&&t.config&&!t.config.__isRetryRequest&&this.$store.dispatch(logout),t})})},mounted:function(){var t=this;Vt.$on("signal_counter",function(e){e&&(t.count=t.count+1)})},methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/login")})},toggleSignals:function(){this.showSignals=!this.showSignals}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},isLoading:function(){return this.$store.getters.authStatus}},updated:function(){},watch:{isLoading:function(t){this.loading="loading"==t}}},ut=lt,dt=(a("034f"),a("7496")),ft=a("4ca6"),mt=a("549c"),ht=Object(j["a"])(ut,o,c,!1,null,null,null),gt=ht.exports;k()(ht,{VApp:dt["a"],VBadge:ft["a"],VBtn:S["a"],VCard:_["a"],VContent:mt["a"],VDivider:B["a"],VFlex:D["a"],VIcon:R["a"],VLayout:N["a"]});var pt=a("8c4f"),vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-layout",{attrs:{"justify-center":""}},[a("h3",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[t._v("Dashboard")])]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",{staticClass:"mx-2 my-2"},[a("div",{staticClass:"pa-2"},[a("p",{staticClass:"grey--text title",staticStyle:{"text-align":"center"}},[t._v("Personal Balance")]),a("h3",{staticClass:"display-2",staticStyle:{"text-align":"center"}},[t._v("$"+t._s(t.earnings.total_earned-t.earnings.withdrawn))])])])],1),a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",{staticClass:"mx-2 my-2"},[a("div",{staticClass:"pa-2"},[a("p",{staticClass:"grey--text title",staticStyle:{"text-align":"center"}},[t._v("Referrals")]),a("h3",{staticClass:"display-2",staticStyle:{"text-align":"center"}},[t._v(t._s(t.referrals))])])])],1),a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",{staticClass:"mx-2 my-2"},[a("div",{staticClass:"pa-2"},[a("p",{staticClass:"grey--text title",staticStyle:{"text-align":"center"}},[t._v("Subscription")]),a("h3",{staticClass:"display-2",staticStyle:{"text-align":"center"}},[t._v(t._s(t.days)+" days left")])])])],1)],1)],1)},bt=[],yt=a("2f62");n["default"].use(yt["a"]);var jt=new yt["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",user:localStorage.getItem("user")||{}},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,e,a){t.status="success",t.token=e,t.user=a},auth_error:function(t){t.status="error"},auth_pending:function(t){t.status="pending"},logout:function(t){t.status="",t.token=""}},actions:{login:function(t,e){var a=t.commit;return new Promise(function(t,n){a("auth_request"),f()({url:"http://www.vacayplanet.com/ArmageddonApi/public/api/login",data:e,method:"POST",onUploadProgress:function(t){}}).then(function(e){var n=e.data.token,i=e.data.customer;"active"==i.status?(localStorage.setItem("token",n),localStorage.setItem("user",JSON.stringify(i)),f.a.defaults.headers.common["Authorization"]="Bearer "+n,a("auth_success",n,i),t(e)):(a("auth_pending"),localStorage.setItem("user",JSON.stringify(i)),t(e))}).catch(function(t){a("auth_error"),localStorage.removeItem("token"),n(t)})})},register:function(t,e){var a=t.commit;return new Promise(function(t,n){console.log(e),a("auth_request"),f()({url:"http://www.vacayplanet.com/ArmageddonApi/public/api/register",data:e,method:"POST"}).then(function(e){e.data.token;var n=e.data.customer;a("auth_pending"),localStorage.setItem("user",JSON.stringify(n)),t(e)}).catch(function(t){a("auth_error",t),localStorage.removeItem("token"),n(t)})})},logout:function(t){var e=t.commit;return new Promise(function(t,a){e("logout"),localStorage.removeItem("token"),localStorage.removeItem("user"),delete f.a.defaults.headers.common["Authorization"],t()})}},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status},loggedInUser:function(t){return t.user}}}),xt={data:function(){return{loading:!1,earnings:{},days:null,referrals:0}},mounted:function(){this.getReferrals(),this.getEarnings(),this.getDaysLeft()},methods:{getReferrals:function(){var t=this,e=JSON.parse(localStorage.getItem("user"));f()({method:"GET",url:"http://www.vacayplanet.com/ArmageddonApi/public/api/referrals/"+e.id}).then(function(e){t.referrals=e.data.referrals.length,t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})},getEarnings:function(){var t=this,e=JSON.parse(localStorage.getItem("user"));f()({method:"GET",url:"http://www.vacayplanet.com/ArmageddonApi/public/api/earnings/"+e.id}).then(function(e){t.earnings=e.data.earnings,t.loading=!1}).catch(function(e){console.log(e),t.loading=!1})},getDaysLeft:function(){var t=this,e=JSON.parse(localStorage.getItem("user"));f()({method:"POST",url:"http://www.vacayplanet.com/ArmageddonApi/public/api/daysLeft",data:{customer_id:e.id}}).then(function(e){t.days=e.data.days}).catch(function(e){console.log(e),t.loading=!1})}}},kt=xt,wt=Object(j["a"])(kt,vt,bt,!1,null,null,null),St=wt.exports;k()(wt,{VCard:_["a"],VFlex:D["a"],VLayout:N["a"]}),n["default"].use(pt["a"]);var _t=new pt["a"]({mode:"history",routes:[{path:"*",redirect:"/login"},{path:"/login",name:"login",component:function(){return a.e("chunk-74ec2592").then(a.bind(null,"967b"))}},{path:"/register",name:"register",component:function(){return a.e("chunk-1dab5c14").then(a.bind(null,"3d64"))}},{path:"/",name:"home",component:St,meta:{requiresAuth:!0}},{path:"/referrals",name:"referrals",component:function(){return a.e("chunk-2d0f0805").then(a.bind(null,"9d48"))},meta:{requiresAuth:!0}},{path:"/earnings",name:"earnings",component:function(){return a.e("chunk-2d0c17a3").then(a.bind(null,"45e1"))},meta:{requiresAuth:!0}},{path:"/notifications",name:"notifications",component:function(){return a.e("chunk-2d0aade1").then(a.bind(null,"139b"))},meta:{requiresAuth:!0}},{path:"/signals",name:"signals",component:function(){return a.e("chunk-2d0de3cd").then(a.bind(null,"8593"))},meta:{requiresAuth:!0}},{path:"/checkout",name:"checkout",component:function(){return a.e("chunk-2d0e1f9c").then(a.bind(null,"7d70"))}},{path:"/payment_methods",name:"payment_methods",component:function(){return a.e("chunk-ea4b9b8e").then(a.bind(null,"db18"))},meta:{requiresAuth:!0}}]});_t.beforeEach(function(t,e,a){if(t.matched.some(function(t){return t.meta.requiresAuth})){if(jt.getters.isLoggedIn)return void a();a("/login")}else jt.getters.isLoggedIn?a("/"):a()});var At=_t,Ot=a("ce5b"),Ct=a.n(Ot),It=a("8aa5"),Dt=a.n(It);a.d(e,"eventBus",function(){return Vt}),a.d(e,"db",function(){return Tt}),a.d(e,"signalRefrance",function(){return Lt}),n["default"].config.productionTip=!1,n["default"].use(Ct.a,{iconfont:"mdi",theme:{primary:"#000000",secondary:"#BA68C8",accent:"#f3bf2e",error:"#b71c1c",iconColor:"#f3bf2e"}}),n["default"].use(a("2ead"));var Vt=new n["default"];n["default"].prototype.$http=f.a;var Nt=localStorage.getItem("token"),Et={apiKey:"AIzaSyBXSQ2Hc_0VpPxzvHblgxiUtl1LHRbukBM",authDomain:"fir-demo-ede73.firebaseapp.com",databaseURL:"https://fir-demo-ede73.firebaseio.com",projectId:"fir-demo-ede73",storageBucket:"fir-demo-ede73.appspot.com",messagingSenderId:"638667263227"};Dt.a.initializeApp(Et);var Tt=Dt.a.database(),Lt=Tt.ref("signals");Nt&&(n["default"].prototype.$http.defaults.headers.common["Authorization"]="Bearer "+Nt),new n["default"]({router:At,store:jt,render:function(t){return t(gt)}}).$mount("#app")},"864d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[t._v("\n      Loading...\n      "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)},i=[],s={props:["showDialog"],data:function(){return{dialog:this.showDialog}},watch:{dialog:function(t){}}},r=s,o=(a("a34c"),a("2877")),c=a("6544"),l=a.n(c),u=a("b0af"),d=a("99d9"),f=a("169a"),m=a("8e36"),h=Object(o["a"])(r,n,i,!1,null,null,null);e["a"]=h.exports;l()(h,{VCard:u["a"],VCardText:d["b"],VDialog:f["a"],VProgressLinear:m["a"]})},"8baf":function(t,e,a){"use strict";var n=a("f10e"),i=a.n(n);i.a},9085:function(t,e,a){t.exports=a.p+"img/background_menu.2641f549.png"},"984c":function(t,e,a){},a34c:function(t,e,a){"use strict";var n=a("984c"),i=a.n(n);i.a},f10e:function(t,e,a){},fa19:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.7d89f34c.js.map