!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("react-redux")):"function"==typeof define&&define.amd?define(["react","react-redux"],t):e["hoc-little-router"]=t(e.React,e.reactRedux)}(this,function(e,t){"use strict";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}e=e&&e.hasOwnProperty("default")?e.default:e;var n=function(e){return r({},"__hoc_little_router__result",e.router&&e.router.result)},u=function(r){var u,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=function(e){return function(t){return t&&[].concat(e).includes(t.title)}}(r),i=o.absolute?(u=c,function(e){return u(e)}):function e(t){return function(r){return!!r&&(t(r)||e(t)(r.parent))}}(c);return function(r){var u=t.connect(n)(function(t){return i(t.__hoc_little_router__result)&&e.createElement(r,t)});return u.displayName=function(e){return"router(".concat(e.displayName||e.name||e.constructor&&e.constructor.name||"Unknown",")")}(r),u}};return u.absolute=function(e,t){return u(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){r(e,t,n[t])})}return e}({},t,{absolute:!0}))},u});
//# sourceMappingURL=index.js.map
