(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["mdbSideNavItem"]=e():t["mdbSideNavItem"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),a=n("fc6a"),f=n("c04e"),c=n("5135"),s=n("0cfb"),u=Object.getOwnPropertyDescriptor;e.f=r?u:function(t,e){if(t=a(t),e=f(e,!0),s)try{return u(t,e)}catch(n){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),a=n("6eeb"),f=n("ce4e"),c=n("e893"),s=n("94ca");t.exports=function(t,e){var n,u,l,p,d,h,v=t.target,y=t.global,m=t.stat;if(u=y?r:m?r[v]||f(v,{}):(r[v]||{}).prototype,u)for(l in e){if(d=e[l],t.noTargetGet?(h=o(u,l),p=h&&h.value):p=u[l],n=s(y?l:v+(m?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;c(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),a(u,l,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"428f":function(t,e,n){t.exports=n("da84")},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},4744:function(t,e,n){"use strict";var r=n("6be7"),o=n.n(r);o.a},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),a=function(t){return function(e,n,a){var f,c=r(e),s=o(c.length),u=i(a,s);if(t&&n!=n){while(s>u)if(f=c[u++],f!=f)return!0}else for(;s>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),a=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"69f3":function(t,e,n){var r,o,i,a=n("7f9a"),f=n("da84"),c=n("861d"),s=n("9112"),u=n("5135"),l=n("f772"),p=n("d012"),d=f.WeakMap,h=function(t){return i(t)?o(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(a){var y=new d,m=y.get,g=y.has,b=y.set;r=function(t,e){return b.call(y,t,e),e},o=function(t){return m.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var x=l("state");p[x]=!0,r=function(t,e){return s(t,x,e),e},o=function(t){return u(t,x)?t[x]:{}},i=function(t){return u(t,x)}}t.exports={set:r,get:o,has:i,enforce:h,getterFor:v}},"6be7":function(t,e,n){},"6eeb":function(t,e,n){var r=n("da84"),o=n("5692"),i=n("9112"),a=n("5135"),f=n("ce4e"),c=n("9e81"),s=n("69f3"),u=s.get,l=s.enforce,p=String(c).split("toString");o("inspectSource",(function(t){return c.call(t)})),(t.exports=function(t,e,n,o){var c=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,u=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(c?!u&&t[e]&&(s=!0):delete t[e],s?t[e]=n:i(t,e,n)):s?t[e]=n:f(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c.call(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7efe":function(t,e,n){},"7f9a":function(t,e,n){var r=n("da84"),o=n("9e81"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o.call(i))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"857a":function(t,e,n){var r=n("1d80"),o=/"/g;t.exports=function(t,e,n,i){var a=String(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),f+">"+a+"</"+e+">"}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8875:function(t,e,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(e,o):r,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var t,e,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=r.exec(l.stack)||o.exec(l.stack),a=i&&i[1]||!1,f=i&&i[2]||!1,c=document.location.href.replace(document.location.hash,""),s=document.getElementsByTagName("script");a===c&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(f-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var u=0;u<s.length;u++){if("interactive"===s[u].readyState)return s[u];if(s[u].src===a)return s[u];if(a===c&&s[u].innerHTML&&s[u].innerHTML.trim()===n)return s[u]}return null}}return t}))},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=f[a(t)];return n==s||n!=c&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},f=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),a=n("c04e"),f=Object.defineProperty;e.f=r?f:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return f(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9e81":function(t,e,n){var r=n("5692");t.exports=r("native-function-to-string",Function.toString)},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},b301:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},c7cd:function(t,e,n){"use strict";var r=n("23e7"),o=n("857a"),i=n("eae9");r({target:"String",proto:!0,forced:i("fixed")},{fixed:function(){return o(this,"tt","","")}})},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},c975:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").indexOf,i=n("b301"),a=[].indexOf,f=!!a&&1/[1].indexOf(1,-0)<0,c=i("indexOf");r({target:"Array",proto:!0,forced:f||c},{indexOf:function(t){return f?a.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,a=n("d012");t.exports=function(t,e){var n,f=o(t),c=0,s=[];for(n in f)!r(a,n)&&r(f,n)&&s.push(n);while(e.length>c)r(f,n=e[c++])&&(~i(s,n)||s.push(n));return s}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),a=n("9bf2");t.exports=function(t,e){for(var n=o(e),f=a.f,c=i.f,s=0;s<n.length;s++){var u=n[s];r(t,u)||f(t,u,c(e,u))}}},eae9:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"mdbSideNavItem",(function(){return y})),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.liClass},[t.href?n("a",t._b({class:t.className,attrs:{href:t.href,tabindex:"0"},on:{click:t.wave}},"a",t.$attrs,!1),[t.icon?n("mdb-icon",{attrs:{icon:t.icon,far:t.far||t.regular,fab:t.fab||t.brands,fal:t.fal||t.light,fad:t.fad||t.duotone}}):t._e(),t.slim?n("span",{staticClass:"sv-slim"},[t._v(t._s(t.slim))]):t._e(),t.slimIcon?n("span",{staticClass:"sv-slim"},[n("mdb-icon",{attrs:{icon:t.slimIcon,far:t.slimFar,fal:t.slimFal,fad:t.slimFad,fab:t.slimFab}})],1):t._e(),t._t("default")],2):t._e(),t.toggler?n("a",t._b({class:t.className,attrs:{tabindex:"0"},on:{click:t.handleClick,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleClick(e)}}},"a",t.$attrs,!1),[t.isCollapsed?t._e():n("mdb-icon",{attrs:{icon:t.icon}}),t.isCollapsed?t._e():t._t("default"),t.isCollapsed?n("mdb-icon",{attrs:{icon:t.openIcon}}):t._e()],2):t._e(),t.to?n("router-link",t._b({class:t.className,attrs:{to:t.to,tabindex:"0"},on:{click:t.wave}},"router-link",t.$attrs,!1),[t.icon?n("mdb-icon",{attrs:{icon:t.icon,far:t.far||t.regular,fab:t.fab||t.brands,fal:t.fal||t.light,fad:t.fad||t.duotone}}):t._e(),t.slim?n("span",{staticClass:"sv-slim"},[t._v(t._s(t.slim))]):t._e(),t._t("default")],2):t._e()],1)},f=[],c=(n("7efe"),{props:{waves:{type:Boolean,default:!0},darkWaves:{type:Boolean,default:!1}},methods:{wave:function(t){this.waves&&(this.target=t.target.classList.contains("ripple-parent")?t.currentTarget:t.target.parentElement,this.getOffsets(t),this.waveData={top:t.pageY-this.offsetTop,left:t.pageX-this.offsetLeft,height:this.$el.offsetHeight,width:this.$el.offsetWidth},(this.wavesFixed||this.isNavFixed)&&(this.waveData.top=t.clientY-this.offsetTop),this.createRipple(),this.rippleAnimate(),this.rippleRemove(this.target,this.rippleElement))},getOffsets:function(){if(this.target.offsetParent){this.offsetLeft=this.target.offsetLeft,this.offsetTop=this.target.offsetTop,this.parentOffset=this.target.offsetParent;while(this.parentOffset)this.offsetLeft+=this.parentOffset.offsetLeft,this.offsetTop+=this.parentOffset.offsetTop,this.parentOffset=this.parentOffset.offsetParent}},createRipple:function(){this.rippleElement=document.createElement("div"),this.rippleElement.classList.add("ripple"),this.rippleElement.style.top=this.waveData.top-this.waveData.width/2+"px",this.rippleElement.style.left=this.waveData.left-this.waveData.width/2+"px",this.rippleElement.style.height=this.waveData.width+"px",this.rippleElement.style.width=this.waveData.width+"px",this.darkWaves&&(this.rippleElement.style.background="rgba(0, 0, 0, 0.2)"),this.target.appendChild(this.rippleElement)},rippleAnimate:function(){this.rippleElement.classList.add("is-reppling")},rippleRemove:function(t,e){this.remove=setTimeout((function(){t.removeChild(e)}),600)}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:t.className})},u=[],l=(n("c975"),n("c7cd"),{props:{icon:{type:String},size:{type:[Boolean,String],default:!1},fixed:{type:Boolean,default:!1},pull:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!1},spin:{type:Boolean,default:!1},pulse:{type:Boolean,default:!1},rotate:{type:[Boolean,String],default:!1},flip:{type:[Boolean,String],default:!1},inverse:{type:[Boolean,String],default:!1},stack:{type:[Boolean,String],default:!1},color:{type:String,default:""},far:{type:Boolean,default:!1},regular:{type:Boolean,default:!1},fal:{type:Boolean,default:!1},light:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},fad:{type:Boolean,default:!1},duotone:{type:Boolean,default:!1},brands:{type:Boolean,default:!1}},computed:{className:function(){var t=["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey","white"];return[this.far||this.regular?"far":this.fal||this.light?"fal":this.fab||this.brands?"fab":this.fad||this.duotone?"fad":"fas",this.icon&&"fa-"+this.icon,this.size&&"fa-"+this.size,this.fixed&&"fa-fw",this.pull&&"fa-pull-"+this.pull,this.border&&"fa-border",this.spin&&"fa-spin",this.pulse&&"fa-pulse",this.rotate&&"fa-rotate-"+this.rotate,this.flip&&"fa-flip-"+this.flip,this.inverse&&"fa-inverse",this.stack&&"fa-"+this.stack,-1===t.indexOf(this.color)?"text-"+this.color:this.color+"-text"]}}}),p=l,d=p;function h(t,e,n,r,o,i,a,f){var c,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=f?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var u=s.render;s.render=function(t,e){return c.call(e),u(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}var v=h(d,s,u,!1,null,"c77fa86a",null),y=(v.exports,{name:"SideNavItem",components:{mdbIcon:l},props:{tag:{type:String,default:"li"},wrapperClass:{type:String},href:{type:String},to:[String,Object],header:{type:Boolean,default:!1},icon:{type:String},openIcon:{type:String},slimIcon:{type:String},slimFar:{type:Boolean,default:!1},slimFab:{type:Boolean,default:!1},slimFal:{type:Boolean,default:!1},slimFad:{type:Boolean,default:!1},far:{type:Boolean,default:!1},regular:{type:Boolean,default:!1},fal:{type:Boolean,default:!1},light:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},brands:{type:Boolean,default:!1},fad:{type:Boolean,default:!1},duotone:{type:Boolean,default:!1},isCollapsed:{type:Boolean,default:!1},toggler:{type:Boolean,default:!1},slim:String},computed:{className:function(){return["sidenav-link","ripple-parent",this.header&&"collapsible-header",this.normal?"sv-normal":"",this.slim&&"sv-slim"]},liClass:function(){return["menu-item",this.wrapperClass]}},mixins:[c],methods:{handleClick:function(t){this.wave(t),this.$emit("toggle",t)}}}),m=y,g=m,b=(n("4744"),h(g,a,f,!1,null,"589f9538",null)),x=b.exports;e["default"]=x},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map