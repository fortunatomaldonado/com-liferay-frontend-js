define("frontend-js-metal-web@1.0.2/metal-dom/src/globalEvalStyles-min", ["exports","metal/src/metal","./dom"], function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=r(t),a=function(){function e(){l(this,e)}return (e.run=function(e,n){var t=document.createElement("style");return (t.innerHTML=e, n?n(t):document.head.appendChild(t), t)}, e.runFile=function(n,t,r){var l=document.createElement("link");return (l.rel="stylesheet", l.href=n, e.runStyle(l,t,r), l)}, e.runStyle=function(e,t,r){var l=function(){t&&t()};return e.rel&&"stylesheet"!==e.rel?void n.async.nextTick(l):("STYLE"===e.tagName?n.async.nextTick(l):(u["default"].on(e,"load",l),u["default"].on(e,"error",l)),r?r(e):document.head.appendChild(e),e)}, e.runStylesInElement=function(t,r,l){var u=t.querySelectorAll("style,link");if(0===u.length&&r)return void n.async.nextTick(r);for(var a=0,c=function(){r&&++a===u.length&&n.async.nextTick(r)},o=0;o<u.length;o++)e.runStyle(u[o],c,l)}, e)}();e["default"]=a});