!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):t["hoc-little-router"]=e(t.React)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},u=function(t){return function(e){return e&&[].concat(t).includes(e.title)}},i=function(i,c){return function(s){var a,f;return f=a=function(a){function f(t,n){e(this,f);var s=o(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,t,n));return s.toShow=function(){var t=s.context.store.getState();if(t.router&&t.router.result){var e=t.router.result;if(c&&c.absolute){var n=u(i)(e);n!==s.state.show&&s.setState(function(t){return r({},t,{show:n})})}else{for(var o=u(i)(e);e&&!o;)e=e.parent,o=u(i)(e);o!==s.state.show&&s.setState(function(t){return r({},t,{show:o})})}}else console.error("/HOC/ Router | There is no route found in `state.router.result`")},s.state={show:!1},s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(f,t.Component),n(f,[{key:"componentWillMount",value:function(){var t=this;this.unsubscribe=this.context.store.subscribe(function(){t.toShow()}),this.toShow()}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return this.state.show?t.createElement(s,this.props):null}}]),f}(),a.displayName=function(t){return"router("+(t.displayName||t.name||t.constructor&&t.constructor.name||"Unknown")+")"}(s),a.contextTypes={store:function(){return null}},f}};return i.absolute=function(t,e){return i(t,r({},e,{absolute:!0}))},i});
//# sourceMappingURL=index.js.map
