(()=>{var n={986:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(15),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,".bg-topo {\n    background-color: #68627a;\n}\n\n.btn-orcamento {\n    border: 2px solid #fff;\n    background: none;\n    position: relative;\n    color: #fff;\n    z-index: 1;\n    border-radius: 30px;\n    height: 100%;\n}\n\n.btn-orcamento:hover {\n    color: #68627a;\n    background-color: #fff;\n    border-color: #fff;\n    transition: all .50s ease-in-out;\n    -moz-transition: all .50s ease-in-out;\n    -webkit-transition: all .50s ease-in-out;\n}\n\n/* serviços */\n.bg-servicos {\n    background: linear-gradient(131.26deg, #312d45 30%, #ff3859 100%);\n}\n\n/* parceiros */\n.bg-parceiros {\n    background-color: #f2f0f7;\n}\n\n.padding-parceiros {\n    padding: 2px !important;\n}\n\n/* configurações gerais */\n.underline {\n    content: '';\n    border-top: 2px solid #ff3859;\n    width: 70px;\n    display: block;\n    margin-bottom: 8px;\n    margin: 0 auto;\n}\n\n.sombra:hover {\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);\n}\n","",{version:3,sources:["webpack://./styles/main.css"],names:[],mappings:"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,gCAAgC;IAChC,qCAAqC;IACrC,wCAAwC;AAC5C;;AAEA,aAAa;AACb;IACI,iEAAiE;AACrE;;AAEA,cAAc;AACd;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA,yBAAyB;AACzB;IACI,WAAW;IACX,6BAA6B;IAC7B,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,yCAAyC;AAC7C",sourcesContent:[".bg-topo {\n    background-color: #68627a;\n}\n\n.btn-orcamento {\n    border: 2px solid #fff;\n    background: none;\n    position: relative;\n    color: #fff;\n    z-index: 1;\n    border-radius: 30px;\n    height: 100%;\n}\n\n.btn-orcamento:hover {\n    color: #68627a;\n    background-color: #fff;\n    border-color: #fff;\n    transition: all .50s ease-in-out;\n    -moz-transition: all .50s ease-in-out;\n    -webkit-transition: all .50s ease-in-out;\n}\n\n/* serviços */\n.bg-servicos {\n    background: linear-gradient(131.26deg, #312d45 30%, #ff3859 100%);\n}\n\n/* parceiros */\n.bg-parceiros {\n    background-color: #f2f0f7;\n}\n\n.padding-parceiros {\n    padding: 2px !important;\n}\n\n/* configurações gerais */\n.underline {\n    content: '';\n    border-top: 2px solid #ff3859;\n    width: 70px;\n    display: block;\n    margin-bottom: 8px;\n    margin: 0 auto;\n}\n\n.sombra:hover {\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);\n}\n"],sourceRoot:""}]);const s=i},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},15:n=>{"use strict";function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){var e=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=e){var t,o,a=[],i=!0,s=!1;try{for(e=e.call(n);!(i=(t=e.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(n){s=!0,o=n}finally{try{i||null==e.return||e.return()}finally{if(s)throw o}}return a}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),A=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(A).concat([u]).join("\n")}return[a].join("\n")}},695:n=>{"use strict";var r={};n.exports=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}},379:n=>{"use strict";var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=t.base?c[0]+t.base:c[0],A=a[u]||0,f="".concat(u," ").concat(A);a[u]=A+1;var l=e(f),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(r[l].references++,r[l].updater(d)):r.push({identifier:f,updater:o(d,t),references:1}),i.push(f)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),u=0;u<a.length;u++){var A=e(a[u]);0===r[A].references&&(r[A].updater(),r.splice(A,1))}a=c}}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r),r}},795:n=>{"use strict";n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{"use strict";var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(695),i=e.n(a),s=e(216),c=e.n(s),u=e(986),A={styleTagTransform:function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}},setAttributes:function(n){var r=e.nc;r&&n.setAttribute("nonce",r)},insert:function(n){var r=i()("head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}};A.domAPI=o(),A.insertStyleElement=c(),r()(u.Z,A),u.Z&&u.Z.locals&&u.Z.locals})()})();
//# sourceMappingURL=main.js.map