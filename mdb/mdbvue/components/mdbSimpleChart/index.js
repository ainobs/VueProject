(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["mdbSimpleChart"]=e():t["mdbSimpleChart"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s="fb15")}({"06cf":function(t,e,r){var n=r("83ab"),o=r("d1e7"),i=r("5c6c"),c=r("fc6a"),a=r("c04e"),u=r("5135"),f=r("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=n?s:function(t,e){if(t=c(t),e=a(e,!0),f)try{return s(t,e)}catch(r){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("cc12");t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"1b9a":function(t,e,r){"use strict";var n=r("ccf4"),o=r.n(n);o.a},"1be4":function(t,e,r){var n=r("d066");t.exports=n("document","documentElement")},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=o("species");t.exports=function(t){return!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"23cb":function(t,e,r){var n=r("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},"23e7":function(t,e,r){var n=r("da84"),o=r("06cf").f,i=r("9112"),c=r("6eeb"),a=r("ce4e"),u=r("e893"),f=r("94ca");t.exports=function(t,e){var r,s,l,d,p,h,v=t.target,y=t.global,g=t.stat;if(s=y?n:g?n[v]||a(v,{}):(n[v]||{}).prototype,s)for(l in e){if(p=e[l],t.noTargetGet?(h=o(s,l),d=h&&h.value):d=s[l],r=f(y?l:v+(g?".":"#")+l,t.forced),!r&&void 0!==d){if(typeof p===typeof d)continue;u(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),c(s,l,p,t)}}},"241c":function(t,e,r){var n=r("ca84"),o=r("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"37e8":function(t,e,r){var n=r("83ab"),o=r("9bf2"),i=r("825a"),c=r("df75");t.exports=n?Object.defineProperties:function(t,e){i(t);var r,n=c(e),a=n.length,u=0;while(a>u)o.f(t,r=n[u++],e[r]);return t}},"3bbe":function(t,e,r){var n=r("861d");t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"428f":function(t,e,r){t.exports=r("da84")},"44ad":function(t,e,r){var n=r("d039"),o=r("c6b6"),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},4930:function(t,e,r){var n=r("d039");t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},"4d64":function(t,e,r){var n=r("fc6a"),o=r("50c4"),i=r("23cb"),c=function(t){return function(e,r,c){var a,u=n(e),f=o(u.length),s=i(c,f);if(t&&r!=r){while(f>s)if(a=u[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,e,r){var n=r("a691"),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},5135:function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},5692:function(t,e,r){var n=r("c430"),o=r("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:n?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,r){var n=r("d066"),o=r("241c"),i=r("7418"),c=r("825a");t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(c(t)),r=i.f;return r?e.concat(r(t)):e}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",c=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(a,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"69f3":function(t,e,r){var n,o,i,c=r("7f9a"),a=r("da84"),u=r("861d"),f=r("9112"),s=r("5135"),l=r("f772"),d=r("d012"),p=a.WeakMap,h=function(t){return i(t)?o(t):n(t,{})},v=function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}};if(c){var y=new p,g=y.get,m=y.has,b=y.set;n=function(t,e){return b.call(y,t,e),e},o=function(t){return g.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var x=l("state");d[x]=!0,n=function(t,e){return f(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:n,get:o,has:i,enforce:h,getterFor:v}},"6eeb":function(t,e,r){var n=r("da84"),o=r("5692"),i=r("9112"),c=r("5135"),a=r("ce4e"),u=r("9e81"),f=r("69f3"),s=f.get,l=f.enforce,d=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,r,o){var u=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof e||c(r,"name")||i(r,"name",e),l(r).source=d.join("string"==typeof e?e:"")),t!==n?(u?!s&&t[e]&&(f=!0):delete t[e],f?t[e]=r:i(t,e,r)):f?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u.call(this)}))},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,c;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(c=i.prototype)&&c!==r.prototype&&o(t,c),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,r){var n=r("1d80");t.exports=function(t){return Object(n(t))}},"7c73":function(t,e,r){var n=r("825a"),o=r("37e8"),i=r("7839"),c=r("d012"),a=r("1be4"),u=r("cc12"),f=r("f772"),s=f("IE_PROTO"),l="prototype",d=function(){},p=function(){var t,e=u("iframe"),r=i.length,n="<",o="script",c=">",f="java"+o+":";e.style.display="none",a.appendChild(e),e.src=String(f),t=e.contentWindow.document,t.open(),t.write(n+o+c+"document.F=Object"+n+"/"+o+c),t.close(),p=t.F;while(r--)delete p[l][i[r]];return p()};t.exports=Object.create||function(t,e){var r;return null!==t?(d[l]=n(t),r=new d,d[l]=null,r[s]=t):r=p(),void 0===e?r:o(r,e)},c[s]=!0},"7f9a":function(t,e,r){var n=r("da84"),o=r("9e81"),i=n.WeakMap;t.exports="function"===typeof i&&/native code/.test(o.call(i))},"825a":function(t,e,r){var n=r("861d");t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,r){var n=r("d039");t.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8875:function(t,e,r){var n,o,i;(function(r,c){o=[],n=c,i="function"===typeof n?n.apply(e,o):n,void 0===i||(t.exports=i)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var t,e,r,n=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=n.exec(l.stack)||o.exec(l.stack),c=i&&i[1]||!1,a=i&&i[2]||!1,u=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");c===u&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(a-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=t.replace(e,"$1").trim());for(var s=0;s<f.length;s++){if("interactive"===f[s].readyState)return f[s];if(f[s].src===c)return f[s];if(c===u&&f[s].innerHTML&&f[s].innerHTML.trim()===r)return f[s]}return null}}return t}))},"90e3":function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},9112:function(t,e,r){var n=r("83ab"),o=r("9bf2"),i=r("5c6c");t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},"94ca":function(t,e,r){var n=r("d039"),o=/#|\.prototype\./,i=function(t,e){var r=a[c(t)];return r==f||r!=u&&("function"==typeof e?n(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),c=r("861d"),a=r("7b0b"),u=r("50c4"),f=r("8418"),s=r("65f0"),l=r("1dde"),d=r("b622"),p=d("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",y=!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=l("concat"),m=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},b=!y||!g;n({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,n,o,i,c=a(this),l=s(c,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?c:arguments[e],m(i)){if(o=u(i.length),d+o>h)throw TypeError(v);for(r=0;r<o;r++,d++)r in i&&f(l,d,i[r])}else{if(d>=h)throw TypeError(v);f(l,d++,i)}return l.length=d,l}})},"9bf2":function(t,e,r){var n=r("83ab"),o=r("0cfb"),i=r("825a"),c=r("c04e"),a=Object.defineProperty;e.f=n?a:function(t,e,r){if(i(t),e=c(e,!0),i(r),o)try{return a(t,e,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},"9e81":function(t,e,r){var n=r("5692");t.exports=n("native-function-to-string",Function.toString)},a691:function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),i=r("94ca"),c=r("6eeb"),a=r("5135"),u=r("c6b6"),f=r("7156"),s=r("c04e"),l=r("d039"),d=r("7c73"),p=r("241c").f,h=r("06cf").f,v=r("9bf2").f,y=r("58a8").trim,g="Number",m=o[g],b=m.prototype,x=u(d(b))==g,S=function(t){var e,r,n,o,i,c,a,u,f=s(t,!1);if("string"==typeof f&&f.length>2)if(f=y(f),e=f.charCodeAt(0),43===e||45===e){if(r=f.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(i=f.slice(2),c=i.length,a=0;a<c;a++)if(u=i.charCodeAt(a),u<48||u>o)return NaN;return parseInt(i,n)}return+f};if(i(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var w,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(x?l((function(){b.valueOf.call(r)})):u(r)!=g)?f(new m(S(e)),r,_):S(e)},O=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;O.length>P;P++)a(m,w=O[P])&&!a(_,w)&&v(_,w,h(m,w));_.prototype=b,b.constructor=_,c(o,g,_)}},b622:function(t,e,r){var n=r("da84"),o=r("5692"),i=r("90e3"),c=r("4930"),a=n.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},c04e:function(t,e,r){var n=r("861d");t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},c6cd:function(t,e,r){var n=r("da84"),o=r("ce4e"),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},c8ba:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}t.exports=r},ca84:function(t,e,r){var n=r("5135"),o=r("fc6a"),i=r("4d64").indexOf,c=r("d012");t.exports=function(t,e){var r,a=o(t),u=0,f=[];for(r in a)!n(c,r)&&n(a,r)&&f.push(r);while(e.length>u)n(a,r=e[u++])&&(~i(f,r)||f.push(r));return f}},cc12:function(t,e,r){var n=r("da84"),o=r("861d"),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},ccf4:function(t,e,r){},ce4e:function(t,e,r){var n=r("da84"),o=r("9112");t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,r){var n=r("428f"),o=r("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},d2bb:function(t,e,r){var n=r("825a"),o=r("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(r,[]),e=r instanceof Array}catch(i){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},da84:function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r("c8ba"))},df75:function(t,e,r){var n=r("ca84"),o=r("7839");t.exports=Object.keys||function(t){return n(t,o)}},e893:function(t,e,r){var n=r("5135"),o=r("56ef"),i=r("06cf"),c=r("9bf2");t.exports=function(t,e){for(var r=o(e),a=c.f,u=i.f,f=0;f<r.length;f++){var s=r[f];n(t,s)||a(t,s,u(e,s))}}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f772:function(t,e,r){var n=r("5692"),o=r("90e3"),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fb15:function(t,e,r){"use strict";if(r.r(e),r.d(e,"mdbSimpleChart",(function(){return u})),"undefined"!==typeof window){var n=window.document.currentScript,o=r("8875");n=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(r.p=i[1])}var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"radial-progress-container",style:t.containerStyle},[r("div",{staticClass:"radial-progress-inner",style:t.innerCircleStyle},[t._t("default")],2),r("svg",{staticClass:"radial-progress-bar",attrs:{width:t.diameter,height:t.diameter,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r("defs",[r("radialGradient",{attrs:{id:"radial-gradient"+t._uid,fx:t.gradient.fx,fy:t.gradient.fy,cx:t.gradient.cx,cy:t.gradient.cy,r:t.gradient.r}},[r("stop",{attrs:{offset:"30%","stop-color":t.color}}),r("stop",{attrs:{offset:"100%","stop-color":t.color}})],1)],1),r("circle",{style:t.strokeStyle,attrs:{r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:t.innerStrokeColor,"stroke-dasharray":t.circumference,"stroke-dashoffset":"0","stroke-linecap":"round"}}),r("circle",{style:t.progressStyle,attrs:{transform:"rotate(270, "+t.radius+","+t.radius+")",r:t.innerCircleRadius,cx:t.radius,cy:t.radius,fill:"transparent",stroke:"url(#radial-gradient"+t._uid+")","stroke-dasharray":t.circumference,"stroke-dashoffset":t.circumference,"stroke-linecap":"round"}})])])},a=[],u=(r("99af"),r("a9e3"),{props:{diameter:{type:Number,required:!1,default:100},maxValue:{type:Number,default:100},value:{type:Number,required:!0,default:0},color:{type:String,required:!1,default:"green"},strokeWidth:{type:Number,required:!1,default:4},animateSpeed:{type:Number,required:!1,default:1e3},innerStrokeColor:{type:String,required:!1,default:"#f9f9f9"},fps:{type:Number,required:!1,default:60},timingFunc:{type:String,required:!1,default:"linear"}},data:function(){return{gradient:{fx:.99,fy:.5,cx:.5,cy:.5,r:.65},gradientAnimation:null,currentAngle:0,strokeDashoffset:0}},computed:{radius:function(){return this.diameter/2},circumference:function(){return Math.PI*this.innerCircleDiameter},stepSize:function(){return 0===this.maxValue?0:100/this.maxValue},finishedPercentage:function(){return this.stepSize*this.value},circleSlice:function(){return 2*Math.PI/this.maxValue},animateSlice:function(){return this.circleSlice/this.totalPoints},innerCircleDiameter:function(){return this.diameter-2*this.strokeWidth},innerCircleRadius:function(){return this.innerCircleDiameter/2},totalPoints:function(){return this.animateSpeed/this.animationIncrements},animationIncrements:function(){return 1e3/this.fps},containerStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px")}},progressStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px"),strokeWidth:"".concat(this.strokeWidth,"px"),strokeDashoffset:this.strokeDashoffset,transition:"stroke-dashoffset ".concat(this.animateSpeed,"ms ").concat(this.timingFunc)}},strokeStyle:function(){return{height:"".concat(this.diameter,"px"),width:"".concat(this.diameter,"px"),strokeWidth:"".concat(this.strokeWidth,"px")}},innerCircleStyle:function(){return{width:"".concat(this.innerCircleDiameter,"px")}}},methods:{getStopPointsOfCircle:function(t){for(var e=[],r=0;r<t;r++){var n=this.circleSlice*r;e.push(this.getPointOfCircle(n))}return e},getPointOfCircle:function(t){var e=.5,r=e+e*Math.cos(t),n=e+e*Math.sin(t);return{x:r,y:n}},gotoPoint:function(){var t=this.getPointOfCircle(this.currentAngle);this.gradient.fx=t.x,this.gradient.fy=t.y},changeProgress:function(t){var e=this,r=t.isAnimate,n=void 0===r||r;if(this.strokeDashoffset=(100-this.finishedPercentage)/100*this.circumference,this.gradientAnimation&&clearInterval(this.gradientAnimation),n){var o=(this.value-1)*this.circleSlice,i=(this.currentAngle-o)/this.animateSlice,c=Math.abs(i-this.totalPoints)/this.totalPoints,a=i<this.totalPoints;this.gradientAnimation=setInterval((function(){a&&i>=e.totalPoints||!a&&i<e.totalPoints?clearInterval(e.gradientAnimation):(e.currentAngle=o+e.animateSlice*i,e.gotoPoint(),i+=a?c:-c)}),this.animationIncrements)}else this.gotoNextStep()},gotoNextStep:function(){this.currentAngle=this.value*this.circleSlice,this.gotoPoint()}},watch:{maxValue:function(){this.changeProgress({isAnimate:!0})},value:function(){this.changeProgress({isAnimate:!0})},diameter:function(){this.changeProgress({isAnimate:!0})},strokeWidth:function(){this.changeProgress({isAnimate:!0})}},created:function(){this.changeProgress({isAnimate:!1})}}),f=u,s=f;r("1b9a");function l(t,e,r,n,o,i,c,a){var u,f="function"===typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(f.functional){f._injectStyles=u;var s=f.render;f.render=function(t,e){return u.call(e),s(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:f}}var d=l(s,c,a,!1,null,null,null),p=d.exports;e["default"]=p},fc6a:function(t,e,r){var n=r("44ad"),o=r("1d80");t.exports=function(t){return n(o(t))}}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map