(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["mdbChatRoom"]=e():t["mdbChatRoom"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),c=n("5c6c"),i=n("fc6a"),a=n("c04e"),u=n("5135"),s=n("0cfb"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=i(t),e=a(e,!0),s)try{return f(t,e)}catch(n){}if(u(t,e))return c(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),c=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},1276:function(t,e,n){"use strict";var r=n("d784"),o=n("44e7"),c=n("825a"),i=n("1d80"),a=n("4840"),u=n("8aa5"),s=n("50c4"),f=n("14c3"),l=n("9263"),p=n("d039"),d=[].push,h=Math.min,v=4294967295,g=!p((function(){return!RegExp(v,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(i(this)),c=void 0===n?v:n>>>0;if(0===c)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,c);var a,u,s,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,p+"g");while(a=l.call(g,r)){if(u=g.lastIndex,u>h&&(f.push(r.slice(h,a.index)),a.length>1&&a.index<r.length&&d.apply(f,a.slice(1)),s=a[0].length,h=u,f.length>=c))break;g.lastIndex===a.index&&g.lastIndex++}return h===r.length?!s&&g.test("")||f.push(""):f.push(r.slice(h)),f.length>c?f.slice(0,c):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=i(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var l=c(t),p=String(this),d=a(l,RegExp),b=l.unicode,y=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),m=new d(g?l:"^(?:"+l.source+")",y),x=void 0===o?v:o>>>0;if(0===x)return[];if(0===p.length)return null===f(m,p)?[p]:[];var S=0,w=0,E=[];while(w<p.length){m.lastIndex=g?w:0;var C,_=f(m,g?p:p.slice(w));if(null===_||(C=h(s(m.lastIndex+(g?0:w)),p.length))===S)w=u(p,w,b);else{if(E.push(p.slice(S,w)),E.length===x)return E;for(var O=1;O<=_.length-1;O++)if(E.push(_[O]),E.length===x)return E;w=S=C}}return E.push(p.slice(S)),E}]}),!g)},"14c3":function(t,e,n){var r=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),c=n("17c2"),i=n("9112");for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==c)try{i(s,"forEach",c)}catch(f){s.forEach=c}}},"15ec":function(t,e,n){},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("b301");t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),c=o("species");t.exports=function(t){return!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,c=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):c(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,c=n("9112"),i=n("6eeb"),a=n("ce4e"),u=n("e893"),s=n("94ca");t.exports=function(t,e){var n,f,l,p,d,h,v=t.target,g=t.global,b=t.stat;if(f=g?r:b?r[v]||a(v,{}):(r[v]||{}).prototype,f)for(l in e){if(d=e[l],t.noTargetGet?(h=o(f,l),p=h&&h.value):p=f[l],n=s(g?l:v+(b?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&c(d,"sham",!0),i(f,l,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),c=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,c)}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"428f":function(t,e,n){t.exports=n("da84")},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),c=n("b622"),i=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},4840:function(t,e,n){var r=n("825a"),o=n("1c0b"),c=n("b622"),i=c("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||void 0==(n=r(c)[i])?e:o(n)}},4930:function(t,e,n){var r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),c=n("23cb"),i=function(t){return function(e,n,i){var a,u=r(e),s=o(u.length),f=c(i,s);if(t&&n!=n){while(s>f)if(a=u[f++],a!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"50fa":function(t,e,n){"use strict";var r=n("15ec"),o=n.n(r);o.a},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),c=n("7418"),i=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(i(t)),n=c.f;return n?e.concat(n(t)):e}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),c=function(t){return function(e,n){var c,i,a=String(o(e)),u=r(n),s=a.length;return u<0||u>=s?t?"":void 0:(c=a.charCodeAt(u),c<55296||c>56319||u+1===s||(i=a.charCodeAt(u+1))<56320||i>57343?t?a.charAt(u):c:t?a.slice(u,u+2):i-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),c=n("b622"),i=c("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"69f3":function(t,e,n){var r,o,c,i=n("7f9a"),a=n("da84"),u=n("861d"),s=n("9112"),f=n("5135"),l=n("f772"),p=n("d012"),d=a.WeakMap,h=function(t){return c(t)?o(t):r(t,{})},v=function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(i){var g=new d,b=g.get,y=g.has,m=g.set;r=function(t,e){return m.call(g,t,e),e},o=function(t){return b.call(g,t)||{}},c=function(t){return y.call(g,t)}}else{var x=l("state");p[x]=!0,r=function(t,e){return s(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},c=function(t){return f(t,x)}}t.exports={set:r,get:o,has:c,enforce:h,getterFor:v}},"6eeb":function(t,e,n){var r=n("da84"),o=n("5692"),c=n("9112"),i=n("5135"),a=n("ce4e"),u=n("9e81"),s=n("69f3"),f=s.get,l=s.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,n,o){var u=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||c(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=n:c(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u.call(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7f9a":function(t,e,n){var r=n("da84"),o=n("9e81"),c=r.WeakMap;t.exports="function"===typeof c&&/native code/.test(o.call(c))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var i=r(e);i in t?o.f(t,i,c(0,n)):t[i]=n}},"857a":function(t,e,n){var r=n("1d80"),o=/"/g;t.exports=function(t,e,n,c){var i=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(c).replace(o,"&quot;")+'"'),a+">"+i+"</"+e+">"}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8875:function(t,e,n){var r,o,c;(function(n,i){o=[],r=i,c="function"===typeof r?r.apply(e,o):r,void 0===c||(t.exports=c)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var t,e,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,c=r.exec(l.stack)||o.exec(l.stack),i=c&&c[1]||!1,a=c&&c[2]||!1,u=document.location.href.replace(document.location.hash,""),s=document.getElementsByTagName("script");i===u&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(a-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var f=0;f<s.length;f++){if("interactive"===s[f].readyState)return s[f];if(s[f].src===i)return s[f];if(i===u&&s[f].innerHTML&&s[f].innerHTML.trim()===n)return s[f]}return null}}return t}))},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),c=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,c(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var r=n("ad6d"),o=RegExp.prototype.exec,c=String.prototype.replace,i=o,a=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=void 0!==/()??/.exec("")[1],s=a||u;s&&(i=function(t){var e,n,i,s,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),a&&(e=f.lastIndex),i=o.call(f,t),a&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=i},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,c=function(t,e){var n=a[i(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=c.data={},u=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),c=n("e8b5"),i=n("861d"),a=n("7b0b"),u=n("50c4"),s=n("8418"),f=n("65f0"),l=n("1dde"),p=n("b622"),d=p("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),b=l("concat"),y=function(t){if(!i(t))return!1;var e=t[d];return void 0!==e?!!e:c(t)},m=!g||!b;r({target:"Array",proto:!0,forced:m},{concat:function(t){var e,n,r,o,c,i=a(this),l=f(i,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(c=-1===e?i:arguments[e],y(c)){if(o=u(c.length),p+o>h)throw TypeError(v);for(n=0;n<o;n++,p++)n in c&&s(l,p,c[n])}else{if(p>=h)throw TypeError(v);s(l,p++,c)}return l.length=p,l}})},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),c=n("825a"),i=n("c04e"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(c(t),e=i(e,!0),c(n),o)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9e81":function(t,e,n){var r=n("5692");t.exports=r("native-function-to-string",Function.toString)},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b301:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},b622:function(t,e,n){var r=n("da84"),o=n("5692"),c=n("90e3"),i=n("4930"),a=r.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=i&&a[t]||(i?a:c)("Symbol."+t))}},b727:function(t,e,n){var r=n("f8c2"),o=n("44ad"),c=n("7b0b"),i=n("50c4"),a=n("65f0"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,h,v,g){for(var b,y,m=c(d),x=o(m),S=r(h,v,3),w=i(x.length),E=0,C=g||a,_=e?C(d,w):n?C(d,0):void 0;w>E;E++)if((p||E in x)&&(b=x[E],y=S(b,E,m),t))if(e)_[E]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:u.call(_,b)}else if(f)return!1;return l?-1:s||f?f:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),c="__core-js_shared__",i=r[c]||o(c,{});t.exports=i},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},c96a:function(t,e,n){"use strict";var r=n("23e7"),o=n("857a"),c=n("eae9");r({target:"String",proto:!0,forced:c("small")},{small:function(){return o(this,"small","","")}})},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),c=n("4d64").indexOf,i=n("d012");t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(i,n)&&r(a,n)&&s.push(n);while(e.length>u)r(a,n=e[u++])&&(~c(s,n)||s.push(n));return s}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?c(r[t])||c(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);e.f=c?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d784:function(t,e,n){"use strict";var r=n("9112"),o=n("6eeb"),c=n("d039"),i=n("b622"),a=n("9263"),u=i("species"),s=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var p=i(t),d=!c((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),h=d&&!c((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e}));if(!d||!h||"replace"===t&&!s||"split"===t&&!f){var v=/./[p],g=n(p,""[t],(function(t,e,n,r,o){return e.exec===a?d&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),b=g[0],y=g[1];o(String.prototype,t,b),o(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)}),l&&r(RegExp.prototype[p],"sham",!0)}}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),c=n("06cf"),i=n("9bf2");t.exports=function(t,e){for(var n=o(e),a=i.f,u=c.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||a(t,f,u(e,f))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},eae9:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},f8c2:function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"mdbChatRoom",(function(){return R})),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var c=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);c&&(n.p=c[1])}var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mdb-card",{class:t.classNames},[n("mdb-card-body",{class:t.small&&"p-2"},[t._t("default")],2)],1)},a=[],u=(n("c96a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.className},[t._t("default")],2)}),s=[],f=(n("99af"),n("4160"),n("ac1f"),n("1276"),n("159b"),{props:{m:String,p:String,noMdbClass:Boolean},computed:{mdbClass:function(){if(!this.noMdbClass){var t=[],e=[];return this.m&&this.m.split(" ").length>1&&this.m.split(" ").forEach((function(e){t.push("m".concat(e.split("")[0],"-").concat(e.split("")[1]))})),this.p&&this.p.split(" ").length>1&&this.p.split(" ").forEach((function(t){e.push("p".concat(t.split("")[0],"-").concat(t.split("")[1]))})),[!!this.m&&(this.m.split(" ").length>1?t:this.m.split("").length>1?"m".concat(this.m.split("")[0],"-").concat(this.m.split("")[1]):"m-".concat(this.m)),!!this.p&&(this.p.split(" ").length>1?e:this.p.split("").length>1?"p".concat(this.p.split("")[0],"-").concat(this.p.split("")[1]):"p-".concat(this.p))]}}}}),l={props:{tag:{type:String,default:"div"},cascade:{type:Boolean,default:!1},wide:{type:Boolean,default:!1},narrow:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},testimonial:{type:Boolean,default:!1},personal:{type:Boolean,default:!1},news:{type:Boolean,default:!1},ecommerce:{type:Boolean,default:!1},collection:{type:Boolean,default:!1},pricing:{type:Boolean,default:!1},color:{type:String},textColor:{type:String},border:{type:String}},computed:{className:function(){return["card",this.cascade?"card-cascade":"",this.wide?"card-cascade wider":"",this.narrow?"card-cascade narrower":"",this.reverse?"card-cascade wider reverse":"",this.dark?"card-dark":"",this.testimonial?"testimonial-card":"",this.personal?"card-personal":"",this.news?"news-card":"",this.ecommerce&&"card-ecommerce",this.collection&&"collection-card",this.pricing&&"pricing-card",this.color&&!this.textColor?this.color+" white-text":!!this.textColor&&this.color+" "+this.textColor+"-text",this.border&&"border-"+this.border,this.mdbClass]}},mixins:[f]},p=l,d=p;function h(t,e,n,r,o,c,i,a){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),c&&(s._scopeId="data-v-"+c),i?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(t,e){return u.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:s}}var v=h(d,u,s,!1,null,"ec246eba",null),g=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.className},[t._t("default")],2)},y=[],m={props:{tag:{type:String,default:"div"},color:{type:String},cascade:{type:Boolean}},computed:{className:function(){return["card-body",this.color?this.color+"-color":"",this.cascade&&"card-body-cascade"]}}},x=m,S=x,w=h(S,b,y,!1,null,"58bdbe1a",null),E=w.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.className},[t._t("default")],2)},_=[],O={props:{tag:{type:String,default:"div"},color:{type:String},textColor:{type:String},border:{type:String},transparent:{type:Boolean,default:!1}},computed:{className:function(){return["card-header",this.color&&!this.textColor?this.color+" white-text":!!this.textColor&&this.color+" "+this.textColor+"-text",this.border&&"border-"+this.border,this.transparent&&"transparent"]}}},T=O,j=T,L=h(j,C,_,!1,null,"6d5255d9",null),M=L.exports,R={name:"ChatRoom",components:{mdbCard:g,mdbCardBody:E,mdbCardHeader:M},props:{color:String,small:{type:Boolean,default:!1}},computed:{classNames:function(){return["chat-room",this.color,this.small&&"small-chat wide"]}}},P=R,N=P,A=(n("50fa"),h(N,i,a,!1,null,null,null)),B=A.exports;e["default"]=B},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map