(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-328f5dbd"],{"1dde":function(t,r,o){var c=o("d039"),n=o("b622"),e=o("2d00"),i=n("species");t.exports=function(t){return e>=51||!c((function(){var r=[],o=r.constructor={};return o[i]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,o){var c=o("861d"),n=o("e8b5"),e=o("b622"),i=e("species");t.exports=function(t,r){var o;return n(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!n(o.prototype)?c(o)&&(o=o[i],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===r?0:r)}},8418:function(t,r,o){"use strict";var c=o("c04e"),n=o("9bf2"),e=o("5c6c");t.exports=function(t,r,o){var i=c(r);i in t?n.f(t,i,e(0,o)):t[i]=o}},"99af":function(t,r,o){"use strict";var c=o("23e7"),n=o("d039"),e=o("e8b5"),i=o("861d"),a=o("7b0b"),s=o("50c4"),d=o("8418"),u=o("65f0"),p=o("1dde"),f=o("b622"),l=o("2d00"),v=f("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",b=l>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=p("concat"),y=function(t){if(!i(t))return!1;var r=t[v];return void 0!==r?!!r:e(t)},m=!b||!_;c({target:"Array",proto:!0,forced:m},{concat:function(t){var r,o,c,n,e,i=a(this),p=u(i,0),f=0;for(r=-1,c=arguments.length;r<c;r++)if(e=-1===r?i:arguments[r],y(e)){if(n=s(e.length),f+n>g)throw TypeError(h);for(o=0;o<n;o++,f++)o in e&&d(p,f,e[o])}else{if(f>=g)throw TypeError(h);d(p,f++,e)}return p.length=f,p}})},d2f1:function(t,r,o){"use strict";o.r(r);var c=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(r){t.isLoading=r}}}),t.isLoading?t._e():o("div",{staticClass:"card mt-3 mb-3"},[o("img",{staticClass:"card-img-top",attrs:{src:t.product.imageUrl[0],alt:"Card image cap"}}),o("div",{staticClass:"card-body"},[o("span",{staticClass:"badge badge-secondary float-right mt-2"},[t._v(t._s(t.product.category))]),o("h4",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),o("p",{staticClass:"card-text"},[t._v(t._s(t.product.content))]),o("p",{staticClass:"card-text"},[t._v(t._s(t.product.description))]),o("div",[o("p",{staticStyle:{"text-decoration":"line-through"}},[t._v("原價："+t._s(t.product.origin_price))]),o("h3",{staticClass:"text-danger"},[t._v("特價："+t._s(t.product.price))])])])])],1)},n=[],e=(o("99af"),{data:function(){return{isLoading:!1,product:{title:"",category:"",content:"",description:"",imageUrl:[],origin_price:0,price:0,unit:"",options:{}}}},created:function(){var t=this;console.log(this.$route.params);var r=this.$route.params.id,o="".concat("https://course-ec-api.hexschool.io/","api/").concat("83e5dddb-dc92-4272-9ddd-488cfb6ae1e0","/ec/product/").concat(r);this.isLoading=!0,this.$http.get(o).then((function(r){console.log(r),t.product=r.data.data,t.isLoading=!1})).catch((function(t){console.log(t)}))}}),i=e,a=o("2877"),s=Object(a["a"])(i,c,n,!1,null,null,null);r["default"]=s.exports},e8b5:function(t,r,o){var c=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}}}]);
//# sourceMappingURL=chunk-328f5dbd.80aa17b1.js.map