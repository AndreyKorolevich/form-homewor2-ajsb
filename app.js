!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=82)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(51))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(2),o=n(25),i=n(8),c=n(9),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(13).f,i=n(7),c=n(27),u=n(18),a=n(56),f=n(36);t.exports=function(t,e){var n,s,l,d,p,v=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in e){if(d=e[s],l=t.noTargetGet?(p=o(n,s))&&p.value:n[s],!f(h?s:v+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;a(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),c(n,s,d,t)}}},function(t,e,n){var r=n(2),o=n(5),i=n(14);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(62),o=n(24),i=n(37),c=n(21),u=n(38),a=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,d=5==t||l;return function(p,v,h,y){for(var m,b,g=i(p),x=o(g),w=r(v,h,3),E=c(x.length),S=0,O=y||u,L=e?O(p,E):n?O(p,0):void 0;E>S;S++)if((d||S in x)&&(b=w(m=x[S],S,g),t))if(e)L[S]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return S;case 2:a.call(L,m)}else if(s)return!1;return l?-1:f||s?s:L}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,e,n){var r=n(0),o=n(31),i=n(4),c=n(32),u=n(40),a=n(64),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,e,n){var r=n(2),o=n(1),i=n(4),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,s,l)}))}},function(t,e,n){var r=n(2),o=n(52),i=n(14),c=n(15),u=n(9),a=n(4),f=n(25),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),f)try{return s(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(24),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(0),o=n(7);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports={}},function(t,e,n){var r=n(58),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(35),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){"use strict";var r=n(6),o=n(10).find,i=n(41),c=n(12),u=!0,a=c("find");"find"in[]&&Array(1).find((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,e,n){var r=n(1),o=n(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(2),o=n(1),i=n(26);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(7),i=n(4),c=n(18),u=n(28),a=n(53),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(a?!d&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,e,n){var r=n(29),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(18),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(31),o=n(32),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(55),o=n(29);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(34),o=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(4),o=n(15),i=n(59).indexOf,c=n(19);t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(3),o=n(39),i=n(11)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(11),o=n(42),i=n(5),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,e,n){var r,o=n(8),i=n(65),c=n(22),u=n(19),a=n(67),f=n(26),s=n(30),l=s("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=f("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete v.prototype[c[n]];return v()};u[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=o(t),n=new d,d.prototype=null,n[l]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(2),o=n(5).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var r=n(2),o=n(0),i=n(36),c=n(27),u=n(4),a=n(16),f=n(68),s=n(9),l=n(1),d=n(42),p=n(33).f,v=n(13).f,h=n(5).f,y=n(45).trim,m=o.Number,b=m.prototype,g="Number"==a(d(b)),x=function(t){var e,n,r,o,i,c,u,a,f=s(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=y(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(i=f.slice(2)).length,u=0;u<c;u++)if((a=i.charCodeAt(u))<48||a>o)return NaN;return parseInt(i,r)}return+f};if(i("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var w,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(g?l((function(){b.valueOf.call(n)})):"Number"!=a(n))?f(new m(x(e)),n,E):x(e)},S=r?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;S.length>O;O++)u(m,w=S[O])&&!u(E,w)&&h(E,w,v(m,w));E.prototype=b,b.constructor=E,c(o,"Number",E)}},function(t,e,n){var r=n(17),o="["+n(46)+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){var r=n(1),o=n(11),i=n(48),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r,o,i=n(0),c=n(75),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(10).forEach,o=n(77),i=n(12),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r,o,i,c=n(54),u=n(0),a=n(3),f=n(7),s=n(4),l=n(30),d=n(19),p=u.WeakMap;if(c){var v=new p,h=v.get,y=v.has,m=v.set;r=function(t,e){return m.call(v,t,e),e},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var b=l("state");d[b]=!0,r=function(t,e){return f(t,b,e),e},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(28),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e){t.exports=!1},function(t,e,n){var r=n(4),o=n(57),i=n(13),c=n(5);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,a(e,s))}}},function(t,e,n){var r=n(20),o=n(33),i=n(61),c=n(8);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(15),o=n(21),i=n(60),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(35),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(63);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(40);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(2),o=n(5),i=n(8),c=n(66);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(34),o=n(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(20);t.exports=r("document","documentElement")},function(t,e,n){var r=n(3),o=n(69);t.exports=function(t,e,n){var i,c;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&o(t,c),t}},function(t,e,n){var r=n(8),o=n(70);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(6),o=n(45).trim;r({target:"String",proto:!0,forced:n(72)("trim")},{trim:function(){return o(this)}})},function(t,e,n){var r=n(1),o=n(46);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,e,n){"use strict";var r=n(6),o=n(1),i=n(39),c=n(3),u=n(37),a=n(21),f=n(74),s=n(38),l=n(47),d=n(11),p=n(48),v=d("isConcatSpreadable"),h=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=l("concat"),m=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var e,n,r,o,i,c=u(this),l=s(c,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(m(i=-1===e?c:arguments[e])){if(d+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,d++)n in i&&f(l,d,i[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,d++,i)}return l.length=d,l}})},function(t,e,n){"use strict";var r=n(9),o=n(5),i=n(14);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(20);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(6),o=n(49);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(0),o=n(79),i=n(49),c=n(7);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(6),o=n(10).filter,i=n(47),c=n(12),u=i("filter"),a=c("filter");r({target:"Array",proto:!0,forced:!u||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(6),o=n(10).findIndex,i=n(41),c=n(12),u=!0,a=c("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!a},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},function(t,e,n){"use strict";n.r(e);n(50),n(23),n(43),n(44),n(71);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.view=e,this.model=n,this.saveProduct=this.saveProduct.bind(this),this.updateProduct=this.updateProduct.bind(this),this.action=this.action.bind(this),this.id=1}var e,n,o;return e=t,(n=[{key:"start",value:function(){this.view.getMark(this.model.products),this.view.addListener(this.view.showForm,this.action),this.view.saveProduct=this.saveProduct,this.view.updateProduct=this.updateProduct}},{key:"checkValidity",value:function(t,e){var n=t.value.trim(),r=Number(e.value.trim());return n?!(!r||r<=0)||(this.view.showError(e,"Text right cost in field"),!1):(this.view.showError(t,"Text name in field"),!1)}},{key:"saveProduct",value:function(t){t.preventDefault();var e=t.target,n=e.name,r=e.cost;this.checkValidity(n,r)&&(this.model.save({name:n.value,cost:r.value,id:this.id}),this.id+=1,this.start())}},{key:"action",value:function(t){if(t.target.classList.contains("action-delete")){var e=t.target.closest("tr").id;this.model.delete(e),this.start()}else if(t.target.classList.contains("action-update")){var n=t.target.closest("tr").id,r=this.model.find(n);this.view.showForm(r)}}},{key:"updateProduct",value:function(t){t.preventDefault();var e=t.target,n=e.name,r=e.cost,o=e.dataset;this.checkValidity(n,r)&&(this.model.update({name:n.value,cost:r.value,id:Number(o.id)}),this.start())}}])&&r(e.prototype,n),o&&r(e,o),t}();n(73),n(76),n(78);function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.saveProduct=null,this.updateProduct=null,this.showForm=this.showForm.bind(this),this.deleteError=this.deleteError.bind(this)}var e,n,r;return e=t,(n=[{key:"getMark",value:function(t){document.querySelector(".products")&&document.querySelector(".products").remove();var e=document.createElement("div");e.classList.add("products"),e.innerHTML='\n      <header class="header">\n        <div>Products</div>\n        <button type="button" id="new-product">+</button>\n       </header>\n      <section>\n        '.concat(this.table(t).outerHTML," \n      </section>"),this.container.appendChild(e)}},{key:"showForm",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",cost:"",id:999},n=e.name,r=e.cost,o=e.id,i=document.createElement("div");i.classList.add("container-form"),i.innerHTML='\n   <form id="form" data-id="'.concat(o,'">\n      <div class="name">\n        <label for="name">Name</label>\n        <input id="name" class="input" type="text" value="').concat(n,'" placeholder="Text name"></input>\n      </div>\n      <div class="cost">\n        <label for="cost">Cost</label>\n        <input id="cost" class="input" type="text" value="').concat(r,'" placeholder="Text cost"></input>\n      </div>\n      <div class="buttons-firm">\n        <button id="button-save" type="submit">Save</button>\n        <button id="button-reset" type="reset">Cancel</button>\n      </div>\n    </form>'),this.container.querySelector(".products").appendChild(i),document.getElementById("form").addEventListener("submit",(function(n){999===e.id?t.saveProduct(n):t.updateProduct(n)})),document.getElementById("form").addEventListener("reset",(function(){t.container.querySelector(".container-form").remove()})),document.getElementById("name").addEventListener("input",(function(){t.deleteError()})),document.getElementById("cost").addEventListener("input",(function(){t.deleteError()}))}},{key:"addListener",value:function(t,e){document.getElementById("new-product").addEventListener("click",(function(){t()})),document.querySelector("tbody").addEventListener("click",(function(t){e(t)}))}},{key:"getProduct",value:function(t){var e=this;return this.tbody=document.createElement("tbody"),t.forEach((function(t){var n=document.createElement("tr");n.id=t.id;var r=document.createElement("th"),o=document.createElement("th"),i=document.createElement("th");i.classList.add("th-actions"),r.textContent=t.name,o.textContent=t.cost,i.innerHTML='\n        <div  class="action-update">✎</div>\n        <div  class="action-delete">X</div>\n        ',n.append(r,o,i),e.tbody.appendChild(n)})),this.tbody}},{key:"table",value:function(t){var e=document.createElement("table");return e.classList.add("table"),e.innerHTML='\n    <thead>\n        <tr>\n            <th class="table-head">Name</th>\n            <th class="table-head">Cost</th>\n            <th class="table-head">Actions</th>\n        </tr>\n    </thead>\n    '.concat(this.getProduct(t).outerHTML,"\n    "),e}},{key:"showError",value:function(t,e){t.focus();var n=document.createElement("div");n.dataset.id="error",n.className="form-error",n.textContent="".concat(e),document.body.appendChild(n);var r=t.getBoundingClientRect(),o=r.top,i=r.left;n.style.top="".concat(window.scrollY+o-t.offsetHeight/2+n.offsetHeight,"px"),n.style.left="".concat(window.scrollX+i,"px")}},{key:"deleteError",value:function(){document.querySelector(".form-error")&&document.querySelector(".form-error").remove()}}])&&i(e.prototype,n),r&&i(e,r),t}();n(80),n(81);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.products=[]}var e,n,r;return e=t,(n=[{key:"save",value:function(t){this.products.push(t)}},{key:"delete",value:function(t){this.products=this.products.filter((function(e){return e.id!==Number(t)}))}},{key:"find",value:function(t){return this.products.find((function(e){return e.id===Number(t)}))}},{key:"update",value:function(t){var e=this.products.findIndex((function(e){return e.id===t.id}));this.products[e]=t}}])&&u(e.prototype,n),r&&u(e,r),t}();new o(new c(document.getElementById("root")),new a).start()}]);