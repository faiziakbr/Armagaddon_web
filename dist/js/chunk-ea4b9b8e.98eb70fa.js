(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea4b9b8e"],{"0c3b":function(a,t,e){"use strict";var i=e("97cc"),l=e.n(i);l.a},"7f7f":function(a,t,e){var i=e("86cc").f,l=Function.prototype,n=/^\s*function ([^ (]*)/,s="name";s in l||e("9e1e")&&i(l,s,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(a){return""}}})},"97cc":function(a,t,e){},db18:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",[e("v-layout",{attrs:{"justify-center":""}},[e("h3",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[a._v("Withdraw Methods")])]),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[e("v-card",{staticClass:"my-5 mx-2 px-2 py-1"},[e("h4",{staticClass:"headline",staticStyle:{"text-align":"center"}},[a._v("Bank")]),e("v-card-text",[e("div",[e("h3",{staticClass:"title"},[a._v("Bank Name:")]),e("h4",{staticClass:"body-1 my-2"},[a._v(a._s(a.name))])])]),e("v-divider",{staticClass:"primary"}),e("v-card-text",[e("div",[e("h3",{staticClass:"title"},[a._v("Account Number:")]),e("h4",{staticClass:"body-1 my-2"},[a._v(a._s(a.account))])])]),e("v-divider",{staticClass:"primary"}),e("v-card-text",[e("div",[e("h3",{staticClass:"title"},[a._v("Swift Code:")]),e("h4",{staticClass:"body-1 my-2"},[a._v(a._s(a.swiftCode))])])]),e("v-btn",{on:{click:a.updateBank}},[a._v("Update")])],1)],1),e("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[e("v-card",{staticClass:"my-5 mx-2 px-2 py-1"},[e("h4",{staticClass:"headline",staticStyle:{"text-align":"center"}},[a._v("Paypal")]),e("v-card-text",[e("div",[e("h3",{staticClass:"title"},[a._v("Paypal Email:")]),e("h4",{staticClass:"body-1 my-2"},[a._v(a._s(a.paypalEmail))])])]),e("v-btn",{on:{click:a.updatePaypal}},[a._v("Update")])],1)],1)],1),e("edit-bank-dialog",{attrs:{showDialog:a.bankDialog},on:{clicked:a.callBackBankDialog}}),e("edit-paypal-dialog",{attrs:{showDialog:a.paypalDialog},on:{clicked:a.callBackPaypalDialog}})],1)},l=[],n=(e("7f7f"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"600"},model:{value:a.showDialog,callback:function(t){a.showDialog=t},expression:"showDialog"}},[e("v-card",{staticClass:"pa-2"},[e("v-layout",{attrs:{"justify-end":""}},[e("button",{attrs:{flat:""},on:{click:function(t){return a.onClickBack(!1)}}},[e("v-icon",[a._v("clear")])],1)]),e("v-layout",{attrs:{"justify-center":""}},[e("h3",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[a._v("Update bank details")])]),e("v-form",{model:{value:a.validBank,callback:function(t){a.validBank=t},expression:"validBank"}},[e("v-text-field",{attrs:{rules:a.nameRules,label:"Bank Name",required:""},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}}),e("v-text-field",{attrs:{rules:a.accountRules,label:"Account number",required:""},model:{value:a.account,callback:function(t){a.account=t},expression:"account"}}),e("v-text-field",{attrs:{rules:a.codeRules,label:"Swift Code",required:""},model:{value:a.swiftCode,callback:function(t){a.swiftCode=t},expression:"swiftCode"}}),e("v-btn",{attrs:{disabled:!a.validBank},on:{click:a.updateBank}},[a._v("submit")])],1)],1),e("my-loader",{attrs:{showDialog:a.loading}})],1)}),s=[],o=e("864d"),c=e("bc3a"),r=e.n(c),u={props:["showDialog"],data:function(){return{validBank:!1,dialog:this.showDialog,loading:!1,name:"",account:"",swiftCode:"",nameRules:[function(a){return!!a||"Bank name is required"}],accountRules:[function(a){return!!a||"Account number is required"}],codeRules:[function(a){return!!a||"Swift code is required"}]}},components:{MyLoader:o["a"]},mounted:function(){this.user=JSON.parse(localStorage.getItem("user")),this.name=this.user.bank_detail.bank_name,this.account=this.user.bank_detail.account_number,this.swiftCode=this.user.bank_detail.swift_code},methods:{onClickBack:function(a){var t={makeChange:a,name:this.name,account:this.account,code:this.swiftCode};this.$emit("clicked",t),this.showDialog=!1},updateBank:function(){var a=this;this.loading=!0;var t={customer_id:this.user.id,bank_name:this.name,account_number:this.account,swift_code:this.swiftCode};r()({url:"http://www.vacayplanet.com/ArmageddonApi/public/api/updateBank",data:t,method:"POST"}).then(function(t){a.user.bank_detail=t.data.bank,localStorage.setItem("user",JSON.stringify(a.user)),a.loading=!1,a.onClickBack(!0)}).catch(function(t){console.log(t),a.loading=!1})}}},d=u,p=e("2877"),h=e("6544"),m=e.n(h),v=e("8336"),f=e("b0af"),y=e("169a"),g=e("4bd4"),k=e("132d"),b=e("a722"),w=e("2677"),_=Object(p["a"])(d,n,s,!1,null,null,null),C=_.exports;m()(_,{VBtn:v["a"],VCard:f["a"],VDialog:y["a"],VForm:g["a"],VIcon:k["a"],VLayout:b["a"],VTextField:w["a"]});var x=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"600"},model:{value:a.showDialog,callback:function(t){a.showDialog=t},expression:"showDialog"}},[e("v-card",{staticClass:"pa-2"},[e("v-layout",{attrs:{"justify-end":""}},[e("button",{attrs:{flat:""},on:{click:function(t){return a.onClickBack(!1)}}},[e("v-icon",[a._v("clear")])],1)]),e("v-layout",{attrs:{"justify-center":""}},[e("h3",{staticClass:"headline",staticStyle:{"font-weight":"bold"}},[a._v("Update bank details")])]),e("v-form",{model:{value:a.validPaypal,callback:function(t){a.validPaypal=t},expression:"validPaypal"}},[e("v-text-field",{attrs:{rules:a.emailRules,label:"Paypal Email",required:""},model:{value:a.paypalEmail,callback:function(t){a.paypalEmail=t},expression:"paypalEmail"}}),e("v-btn",{attrs:{disabled:!a.validPaypal},on:{click:a.updatePaypal}},[a._v("submit")])],1)],1),e("my-loader",{attrs:{showDialog:a.loading}})],1)},D=[],B={props:["showDialog"],data:function(){return{validPaypal:!1,dialog:this.showDialog,loading:!1,paypalEmail:"",emailRules:[function(a){return!!a||"E-mail is required"},function(a){return/.+@.+/.test(a)||"E-mail must be valid"}]}},components:{MyLoader:o["a"]},mounted:function(){this.user=JSON.parse(localStorage.getItem("user")),this.paypalEmail=this.user.paypal_email},methods:{onClickBack:function(a){var t={makeChange:a,email:this.paypalEmail};this.$emit("clicked",t),this.showDialog=!1},updatePaypal:function(){var a=this;this.loading=!0;var t={customer_id:this.user.id,paypal_email:this.paypalEmail};r()({url:"http://www.vacayplanet.com/ArmageddonApi/public/api/updatePaypal",data:t,method:"POST"}).then(function(t){a.user.paypal_email=a.paypalEmail,localStorage.setItem("user",JSON.stringify(a.user)),a.loading=!1,a.onClickBack(!0)}).catch(function(t){console.log(t),a.loading=!1})}}},E=B,V=Object(p["a"])(E,x,D,!1,null,null,null),P=V.exports;m()(V,{VBtn:v["a"],VCard:f["a"],VDialog:y["a"],VForm:g["a"],VIcon:k["a"],VLayout:b["a"],VTextField:w["a"]});var S={components:{EditBankDialog:C,EditPaypalDialog:P},data:function(){return{validBank:!1,validPaypal:!1,bankDialog:!1,paypalDialog:!1,toggle:!1,user:null,name:"",account:"",swiftCode:"",paypalEmail:""}},methods:{callBackBankDialog:function(a){a.makeChange&&(this.name=a.name,this.account=a.account,this.swiftCode=a.code),this.bankDialog=!1},callBackPaypalDialog:function(a){a.makeChange&&(this.paypalEmail=a.email),this.paypalDialog=!1},updateBank:function(){this.bankDialog=!0},updatePaypal:function(){this.paypalDialog=!0},openBank:function(){this.toggle=!0},openPaypal:function(){this.toggle=!1}},mounted:function(){this.user=JSON.parse(localStorage.getItem("user")),this.name=this.user.bank_detail.bank_name,this.account=this.user.bank_detail.account_number,this.swiftCode=this.user.bank_detail.swift_code,this.paypalEmail=this.user.paypal_email}},O=S,j=(e("0c3b"),e("99d9")),q=e("a523"),N=e("ce7e"),R=e("0e8f"),A=Object(p["a"])(O,i,l,!1,null,null,null);t["default"]=A.exports;m()(A,{VBtn:v["a"],VCard:f["a"],VCardText:j["b"],VContainer:q["a"],VDivider:N["a"],VFlex:R["a"],VLayout:b["a"]})}}]);
//# sourceMappingURL=chunk-ea4b9b8e.98eb70fa.js.map