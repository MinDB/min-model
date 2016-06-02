!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Model=t()}(this,function(){"use strict";function e(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^\-/,"")}function t(e){return e=e.replace(/\-(\w{1})/g,function(e){return e[1].toUpperCase()}),e.replace(/^(\w{1})/,function(e){return e.toUpperCase()})}function r(e){return Ae.has(e)}function n(e){return Ae.has(e)?Ae.get(e):null}function o(e){if(Array.isArray(e))return Array;if(e instanceof Date)return Date;if(e instanceof RegExp)return RegExp;if(e instanceof Error)return Error;if(e instanceof(Map||Object))return Map||Object;if(e instanceof(WeakMap||Object))return WeakMap||Object;if(e instanceof(Set||Object))return Set||Object;if(e instanceof(WeakSet||Object))return WeakSet||Object;var t=!0,r=!1,n=void 0;try{for(var o,i=Ae.entries()[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;if(a[1]===("undefined"==typeof e?"undefined":Se["typeof"](e)))return a[0]}}catch(u){r=!0,n=u}finally{try{!t&&i["return"]&&i["return"]()}finally{if(r)throw n}}return Object}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;t>n;n++)r[n-1]=arguments[n];var o=!0,i=!1,a=void 0;try{for(var u,s=r[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var c=u.value,f=Object.keys(c),l=!0,h=!1,y=void 0;try{for(var p,v=f[Symbol.iterator]();!(l=(p=v.next()).done);l=!0){var d=p.value;c.hasOwnProperty(d)&&(e[d]=c[d])}}catch(m){h=!0,y=m}finally{try{!l&&v["return"]&&v["return"]()}finally{if(h)throw y}}}}catch(m){i=!0,a=m}finally{try{!o&&s["return"]&&s["return"]()}finally{if(i)throw a}}return e}function a(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function u(e){return"function"==typeof e}function s(e){return"number"==typeof e}function c(e){return"object"===("undefined"==typeof e?"undefined":Se["typeof"](e))&&null!==e}function f(e){return void 0===e}function l(e){for(var t=new Set,r=arguments.length,n=Array(r>1?r-1:0),o=1;r>o;o++)n[o-1]=arguments[o];if(0===n.length)return e;var i=!0,a=!1,u=void 0;try{for(var s,c=function(){var e=s.value;0==n.map(function(t){return t.has(e)?0:1}).reduce(function(e,t){return e+t})&&t.add(e)},f=e[Symbol.iterator]();!(i=(s=f.next()).done);i=!0)c()}catch(l){a=!0,u=l}finally{try{!i&&f["return"]&&f["return"]()}finally{if(a)throw u}}return t}function h(e,t){var r=y(),n=new a;return r.search=function(e,r){return h(new Promise(function(o,i){n.once("ready",function(n){t.search(e,r,n,t).then(o)["catch"](i)})}),t)},e.then(function(e){r.resolve(e),n.emit("ready",e)}),r}function y(){var e=null,t=null,r=new Promise(function(r,n){e=r,t=n});return r.resolve=function(){for(var t=arguments.length,n=Array(t),o=0;t>o;o++)n[o]=arguments[o];e.apply(r,n)},r.reject=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];t.apply(r,n)},r}function p(e,t){Be.set(e,t),Be.set(n(e),t)}function v(e,t){Ne.set(e,t)}function d(){this.__data__=[]}function m(e,t){return e===t||e!==e&&t!==t}function _(e,t){for(var r=e.length;r--;)if(m(e[r][0],t))return r;return-1}function b(e){var t=this.__data__,r=_(t,e);if(0>r)return!1;var n=t.length-1;return r==n?t.pop():We.call(t,r,1),!0}function g(e){var t=this.__data__,r=_(t,e);return 0>r?void 0:t[r][1]}function w(e){return _(this.__data__,e)>-1}function j(e,t){var r=this.__data__,n=_(r,e);return 0>n?r.push([e,t]):r[n][1]=t,this}function x(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function k(){this.__data__=new x}function O(e){return this.__data__["delete"](e)}function C(e){return this.__data__.get(e)}function P(e){return this.__data__.has(e)}function S(e){var t="undefined"==typeof e?"undefined":Se["typeof"](e);return!!e&&("object"==t||"function"==t)}function A(e){var t=S(e)?Je.call(e):"";return t==Ve||t==Ke}function E(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}function M(e){if(null!=e){try{return Ge.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function L(e){if(!S(e))return!1;var t=A(e)||E(e)?et:Ze;return t.test(M(e))}function T(e,t){var r=e[t];return L(r)?r:void 0}function q(){this.__data__=tt?tt(null):{}}function R(e){return this.has(e)&&delete this.__data__[e]}function $(e){var t=this.__data__;if(tt){var r=t[e];return r===rt?void 0:r}return ot.call(t,e)?t[e]:void 0}function D(e){var t=this.__data__;return tt?void 0!==t[e]:at.call(t,e)}function U(e,t){var r=this.__data__;return r[e]=tt&&void 0===t?ut:t,this}function B(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function N(e){return e&&e.Object===Object?e:null}function F(){this.__data__={hash:new B,map:new(dt||x),string:new B}}function I(e){var t="undefined"==typeof e?"undefined":Se["typeof"](e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function W(e,t){var r=e.__data__;return I(t)?r["string"==typeof t?"string":"hash"]:r.map}function V(e){return W(this,e)["delete"](e)}function K(e){return W(this,e).get(e)}function z(e){return W(this,e).has(e)}function J(e,t){return W(this,e).set(e,t),this}function G(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Y(e,t){var r=this.__data__;return r instanceof x&&r.__data__.length==mt&&(r=this.__data__=new G(r.__data__)),r.set(e,t),this}function Z(e){this.__data__=new x(e)}function H(e){return this.__data__.set(e,_t),this}function Q(e){return this.__data__.has(e)}function X(e){var t=-1,r=e?e.length:0;for(this.__data__=new G;++t<r;)this.add(e[t])}function ee(e,t){for(var r=-1,n=e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function te(e,t,r,n,o,i){var a=o&gt,u=e.length,s=t.length;if(u!=s&&!(a&&s>u))return!1;var c=i.get(e);if(c)return c==t;var f=-1,l=!0,h=o&bt?new X:void 0;for(i.set(e,t);++f<u;){var y=e[f],p=t[f];if(n)var v=a?n(p,y,f,t,e,i):n(y,p,f,e,t,i);if(void 0!==v){if(v)continue;l=!1;break}if(h){if(!ee(t,function(e,t){return h.has(t)||y!==e&&!r(y,e,n,o,i)?void 0:h.add(t)})){l=!1;break}}else if(y!==p&&!r(y,p,n,o,i)){l=!1;break}}return i["delete"](e),l}function re(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}function ne(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}function oe(e,t,r,n,o,i,a){switch(r){case Rt:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case qt:return!(e.byteLength!=t.byteLength||!n(new jt(e),new jt(t)));case Ot:case Ct:return+e==+t;case Pt:return e.name==t.name&&e.message==t.message;case At:return e!=+e?t!=+t:e==+t;case Et:case Lt:return e==t+"";case St:var u=re;case Mt:var s=i&kt;if(u||(u=ne),e.size!=t.size&&!s)return!1;var c=a.get(e);return c?c==t:(i|=xt,a.set(e,t),te(u(e),u(t),n,o,i,a));case Tt:if(Dt)return Dt.call(e)==Dt.call(t)}return!1}function ie(e){return Ut(Object(e))}function ae(e,t){return Nt.call(e,t)||"object"==("undefined"==typeof e?"undefined":Se["typeof"](e))&&t in e&&null===ie(e)}function ue(e){return Ft(Object(e))}function se(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function ce(e){return function(t){return null==t?void 0:t[e]}}function fe(e){return"number"==typeof e&&e>-1&&e%1==0&&Wt>=e}function le(e){return null!=e&&fe(It(e))&&!A(e)}function he(e){return!!e&&"object"==("undefined"==typeof e?"undefined":Se["typeof"](e))}function ye(e){return he(e)&&le(e)}function pe(e){return ye(e)&&zt.call(e,"callee")&&(!Gt.call(e,"callee")||Jt.call(e)==Vt)}function ve(e){return"string"==typeof e||!Yt(e)&&he(e)&&Qt.call(e)==Zt}function de(e){var t=e?e.length:void 0;return fe(t)&&(Yt(e)||ve(e)||pe(e))?se(t,String):null}function me(e,t){return t=null==t?Xt:t,!!t&&("number"==typeof e||er.test(e))&&e>-1&&e%1==0&&t>e}function _e(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||tr;return e===r}function be(e){var t=_e(e);if(!t&&!le(e))return ue(e);var r=de(e),n=!!r,o=r||[],i=o.length;for(var a in e)!ae(e,a)||n&&("length"==a||me(a,i))||t&&"constructor"==a||o.push(a);return o}function ge(e,t,r,n,o,i){var a=o&rr,u=be(e),s=u.length,c=be(t),f=c.length;if(s!=f&&!a)return!1;for(var l=s;l--;){var h=u[l];if(!(a?h in t:ae(t,h)))return!1}var y=i.get(e);if(y)return y==t;var p=!0;i.set(e,t);for(var v=a;++l<s;){h=u[l];var d=e[h],m=t[h];if(n)var _=a?n(m,d,h,t,e,i):n(d,m,h,e,t,i);if(!(void 0===_?d===m||r(d,m,n,o,i):_)){p=!1;break}v||(v="constructor"==h)}if(p&&!v){var b=e.constructor,g=t.constructor;b!=g&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g)&&(p=!1)}return i["delete"](e),p}function we(e){return pr.call(e)}function je(e){return he(e)&&fe(e.length)&&!!Kr[Jr.call(e)]}function xe(e,t,r,n,o,i){var a=Yt(e),u=Yt(t),s=Zr,c=Zr;a||(s=gr(e),s=s==Yr?Hr:s),u||(c=gr(t),c=c==Yr?Hr:c);var f=s==Hr&&!E(e),l=c==Hr&&!E(t),h=s==c;if(h&&!f)return i||(i=new Z),a||je(e)?te(e,t,r,n,o,i):oe(e,t,s,r,n,o,i);if(!(o&Gr)){var y=f&&Xr.call(e,"__wrapped__"),p=l&&Xr.call(t,"__wrapped__");if(y||p){var v=y?e.value():e,d=p?t.value():t;return i||(i=new Z),r(v,d,n,o,i)}}return h?(i||(i=new Z),ge(e,t,r,n,o,i)):!1}function ke(e,t,r,n,o){return e===t?!0:null==e||null==t||!S(e)&&!he(t)?e!==e&&t!==t:xe(e,t,ke,r,n,o)}function Oe(e,t){return ke(e,t)}function Ce(e){return"number"==typeof e||he(e)&&rn.call(e)==en}function Pe(e){return e===!0||e===!1||he(e)&&an.call(e)==nn}var Se={};Se["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Se.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Se.createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Se.defineProperty=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},Se.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Se.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Se.slicedToArray=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Se.toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)};var Ae=new Map([[String,"string"],[Number,"number"],[Boolean,"boolean"],[Object,"object"],[Array,"array"],[Date,"date"],[RegExp,"regexp"],[Error,"error"]]);a.EventEmitter=a,a.prototype._events=void 0,a.prototype._maxListeners=void 0,a.defaultMaxListeners=10,a.prototype.setMaxListeners=function(e){if(!s(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},a.prototype.emit=function(e){var t,r,n,o,i,a;if(this._events||(this._events={}),"error"===e&&(!this._events.error||c(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[e],f(r))return!1;if(u(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(c(r))for(o=Array.prototype.slice.call(arguments,1),a=r.slice(),n=a.length,i=0;n>i;i++)a[i].apply(this,o);return!0},a.prototype.addListener=function(e,t){var r;if(!u(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,u(t.listener)?t.listener:t),this._events[e]?c(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,c(this._events[e])&&!this._events[e].warned&&(r=f(this._maxListeners)?a.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},a.prototype.on=a.prototype.addListener,a.prototype.once=function(e,t){function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}if(!u(t))throw TypeError("listener must be a function");var n=!1;return r.listener=t,this.on(e,r),this},a.prototype.removeListener=function(e,t){var r,n,o,i;if(!u(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],o=r.length,n=-1,r===t||u(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(c(r)){for(i=o;i-- >0;)if(r[i]===t||r[i].listener&&r[i].listener===t){n=i;break}if(0>n)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},a.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],u(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},a.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?u(this._events[e])?[this._events[e]]:this._events[e].slice():[]},a.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(u(t))return 1;if(t)return t.length}return 0},a.listenerCount=function(e,t){return e.listenerCount(t)};var Ee=function(e){function t(){Se.classCallCheck(this,t);var e=Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return e.__queue=[],e.running=!1,e}return Se.inherits(t,e),Se.createClass(t,[{key:"push",value:function(e,t){return this.__queue.push({task:e,callback:t}),this}},{key:"run",value:function(e){var t=this;if(e||!this.running){var r=this.__queue.shift();return r?!function(){t.running=!0;var e=r.task,n=r.callback;e().then(function(){for(var e=arguments.length,r=Array(e),o=0;e>o;o++)r[o]=arguments[o];n.apply(void 0,[null].concat(r)),t.run(t.running)})["catch"](function(e){n(e),t.run(t.running)})}():(this.running=!1,this.emit("idle")),this}}},{key:"hasNext",get:function(){return 0!==this.__queue.length}}]),t}(a),Me=function(e){function t(e,r,n,o){Se.classCallCheck(this,t);var i=Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return i.sequence=e,i.prefix=r,i.key=n,i.__min=o,i.ready=!1,i}return Se.inherits(t,e),Se.createClass(t,[{key:"map",value:function(){var e=this;this.__min.exists(this.sequence).then(function(t){return t?e.__min.smembers(e.sequence):Promise.resolve([])}).then(function(t){var r=e.__min.multi();return t.forEach(function(t){return r.hget(e.prefix+":"+t,e.key)}),r.exec().then(function(e){return Promise.resolve(e.map(function(e,r){return[t[r],e]}))})}).then(function(t){return new Promise(function(r,n){var o=e.__min.multi(),i=!0,a=!1,u=void 0;try{for(var s,c=function(){var t=Se.slicedToArray(s.value,2),i=t[0],a=t[1];if(!e.async){var u=e.indexMapper(a),c=!0,f=!1,l=void 0;try{for(var h,y=u[Symbol.iterator]();!(c=(h=y.next()).done);c=!0){var p=h.value;o.sadd(e.sequence+":"+e.key+":index:"+p,i)}}catch(v){f=!0,l=v}finally{try{!c&&y["return"]&&y["return"]()}finally{if(f)throw l}}return{v:o.exec()}}e.indexMapper(a).then(function(t){var a=!0,u=!1,s=void 0;try{for(var c,f=t[Symbol.iterator]();!(a=(c=f.next()).done);a=!0){var l=c.value;o.sadd(e.sequence+":"+e.key+":index:"+l,i)}}catch(h){u=!0,s=h}finally{try{!a&&f["return"]&&f["return"]()}finally{if(u)throw s}}o.exec().then(r)["catch"](n)})["catch"](n)},f=t[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var l=c();if("object"===("undefined"==typeof l?"undefined":Se["typeof"](l)))return l.v}}catch(h){a=!0,u=h}finally{try{!i&&f["return"]&&f["return"]()}finally{if(a)throw u}}})}).then(function(){e.ready=!0,e.emit("ready")})}},{key:"add",value:function(e,t){var r=this;return new Promise(function(e,n){r.async?r.indexMapper(t).then(e)["catch"](n):e(r.indexMapper(t))}).then(function(t){var n=r.__min.multi(),o=!0,i=!1,a=void 0;try{for(var u,s=t[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var c=u.value;n.sadd(r.sequence+":"+r.key+":index:"+c,e)}}catch(f){i=!0,a=f}finally{try{!o&&s["return"]&&s["return"]()}finally{if(i)throw a}}return n.exec()})}},{key:"remove",value:function(e,t){var r=this;return new Promise(function(e,n){r.async?r.indexMapper(t).then(e)["catch"](n):e(r.indexMapper(t))}).then(function(t){var n=r.__min.multi(),o=!0,i=!1,a=void 0;try{for(var u,s=t[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var c=u.value;n.srem(r.sequence+":"+r.key+":index:"+c,e)}}catch(f){i=!0,a=f}finally{try{!o&&s["return"]&&s["return"]()}finally{if(i)throw a}}return n.exec()})}},{key:"reindex",value:function(e,t,r){var n=this;return this.remove(e,r).then(function(){return n.add(e,t)}).then(function(){return n.emit("updated"),Promise.resolve()})}},{key:"_search",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return new Promise(function(r,n){t.async?t.indexMapper(e).then(r)["catch"](n):r(t.indexMapper(e))}).then(function(e){return Promise.all(e.map(function(e){return t.__min.exists(t.sequence+":"+t.key+":index:"+e).then(function(r){return r?t.__min.smembers(t.sequence+":"+t.key+":index:"+e):Promise.resolve([])}).then(function(e){return Promise.resolve(new Set(e))})}))}).then(function(e){var n=l.apply(void 0,Se.toConsumableArray(e));return new Promise(function(e){r?e(r.map(function(e){return[e._key,e]})):t.__min.smembers(t.sequence).then(function(e){var r=t.__min.multi();return e.forEach(function(e){return r.hgetall(t.prefix+":"+e)}),r.exec().then(function(t){return Promise.resolve(t.map(function(t,r){return[e[r],t]}))})}).then(function(t){return e(t)})}).then(function(e){return Promise.resolve([e,n])})}).then(function(e){var t=Se.slicedToArray(e,2),r=t[0],n=t[1];return Promise.resolve(r.filter(function(e){var t=Se.slicedToArray(e,1),r=t[0];return n.has(r)}).map(function(e){var t=Se.slicedToArray(e,2),r=t[0],n=t[1];return n._key=r,n}))})}},{key:"search",value:function(){return this._search.apply(this,arguments)}},{key:"indexMapper",value:function(){return[]}}]),t}(a),Le=function(e){function t(){return Se.classCallCheck(this,t),Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Se.inherits(t,e),Se.createClass(t,[{key:"indexMapper",value:function(e){var t=new Set(e.split(/[\s,\.;\:"'!]/).filter(Boolean).map(function(e){return e.toLowerCase()}));return[].concat(Se.toConsumableArray(t))}}]),t}(Me),Te=function(e){function t(){return Se.classCallCheck(this,t),Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Se.inherits(t,e),Se.createClass(t,[{key:"indexMapper",value:function(e){return[e%3,e%5,e%7]}},{key:"search",value:function(e,t){var r=this;return this._search(e,t).then(function(t){return Promise.resolve(t.filter(function(t){return t[r.key]===e}))})}}]),t}(Me),qe=function(e){function t(){return Se.classCallCheck(this,t),Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Se.inherits(t,e),Se.createClass(t,[{key:"indexMapper",value:function(e){return[e]}}]),t}(Me),Re=function(e){function t(){return Se.classCallCheck(this,t),Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Se.inherits(t,e),Se.createClass(t,[{key:"indexMapper",value:function(e){return Object.keys(e).map(function(t){return[t,JSON.stringify(e[t])]}).reduce(function(e,t){return e.concat(t)})}}]),t}(Me),$e=function(e){function t(){return Se.classCallCheck(this,t),Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Se.inherits(t,e),Se.createClass(t,[{key:"indexMapper",value:function(e){return e.map(function(e){return JSON.stringify(e)})}}]),t}(Me),De=function(e){function t(){return Se.classCallCheck(this,t),Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Se.inherits(t,e),Se.createClass(t,[{key:"indexMapper",value:function(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCDay()]}},{key:"search",value:function(e,t){return this._search(e,t).then(function(t){return Promise.resolve(e.filter(function(t){return t.getTime()===e.getTime()}))})}}]),t}(Me),Ue=function(e){function t(){return Se.classCallCheck(this,t),Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Se.inherits(t,e),Se.createClass(t,[{key:"indexMapper",value:function(e){var t=new Set(e.message.split(/[\s,\.;\:"'!]/).filter(Boolean).map(function(e){return e.toLowerCase()}));return[].concat(Se.toConsumableArray(t))}}]),t}(Me),Be=new Map([["string",Le],[String,Le],["number",Te],[Number,Te],["boolean",qe],[Boolean,qe],["object",Re],[Object,Re],["array",$e],[Array,$e],["date",De],[Date,De],["error",Ue],[Error,Ue]]),Ne=new Map,Fe=function(e){function t(e,r,n,o,i){Se.classCallCheck(this,t);var a=Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));switch(a.sequence=e,a.prefix=r,a.key=n,a.type=o,a.ready=!1,a.indexer=null,!0){case Ne.has(e+":"+n):a.indexer=new(Ne.get(e+":"+n))(e,r,n,i);break;case Be.has(o):a.indexer=new(Be.get(o))(e,r,n,i);break;default:throw new Error("Not support for this type.")}return a.indexer.map(),a.indexer.on("ready",function(){a.ready=!0,a.emit("ready")}).on("updated",function(){return a.emit("updated")}),a}return Se.inherits(t,e),Se.createClass(t,[{key:"add",value:function(e,t){var r=this;if(!this.indexer)throw new ReferenceError("There not indexer available.");return this.ready?this.indexer.add(e,t):new Promise(function(n,o){r.indexer.once("ready",function(){r.indexer.add(e,t).then(n)["catch"](o)})})}},{key:"remove",value:function(e,t){var r=this;if(!this.indexer)throw new ReferenceError("There not indexer available.");return this.ready?this.indexer.remove(e,t):new Promise(function(n,o){r.indexer.once("ready",function(){r.indexer.remove(e,t).then(n)["catch"](o)})})}},{key:"reindex",value:function(e,t,r){var n=this;if(!this.indexer)throw new ReferenceError("There not indexer available.");return this.ready?this.indexer.reindex(e,t,r):new Promise(function(o,i){n.indexer.once("ready",function(){n.indexer.reindex(e,t,r).then(o)["catch"](i)})})}},{key:"search",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=arguments[2];if(!this.indexer)throw new ReferenceError("There not indexer available.");return this.ready?h(this.indexer.search(e,r),n):h(new Promise(function(n,o){t.indexer.once("ready",function(){t.indexer.search(e,r).then(n)["catch"](o)})}),n)}}]),t}(a),Ie=Array.prototype,We=Ie.splice;x.prototype.clear=d,x.prototype["delete"]=b,x.prototype.get=g,x.prototype.has=w,x.prototype.set=j;var Ve="[object Function]",Ke="[object GeneratorFunction]",ze=Object.prototype,Je=ze.toString,Ge=Function.prototype.toString,Ye=/[\\^$.*+?()[\]{}|]/g,Ze=/^\[object .+?Constructor\]$/,He=Object.prototype,Qe=Function.prototype.toString,Xe=He.hasOwnProperty,et=RegExp("^"+Qe.call(Xe).replace(Ye,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tt=T(Object,"create"),rt="__lodash_hash_undefined__",nt=Object.prototype,ot=nt.hasOwnProperty,it=Object.prototype,at=it.hasOwnProperty,ut="__lodash_hash_undefined__";B.prototype.clear=q,B.prototype["delete"]=R,B.prototype.get=$,B.prototype.has=D,B.prototype.set=U;var st={"function":!0,object:!0},ct=st["undefined"==typeof exports?"undefined":Se["typeof"](exports)]&&exports&&!exports.nodeType?exports:void 0,ft=st["undefined"==typeof module?"undefined":Se["typeof"](module)]&&module&&!module.nodeType?module:void 0,lt=N(ct&&ft&&"object"==("undefined"==typeof global?"undefined":Se["typeof"](global))&&global),ht=N(st["undefined"==typeof self?"undefined":Se["typeof"](self)]&&self),yt=N(st["undefined"==typeof window?"undefined":Se["typeof"](window)]&&window),pt=N(st[Se["typeof"](this)]&&this),vt=lt||yt!==(pt&&pt.window)&&yt||ht||pt||Function("return this")(),dt=T(vt,"Map");G.prototype.clear=F,G.prototype["delete"]=V,G.prototype.get=K,G.prototype.has=z,G.prototype.set=J;var mt=200;Z.prototype.clear=k,Z.prototype["delete"]=O,Z.prototype.get=C,Z.prototype.has=P,Z.prototype.set=Y;var _t="__lodash_hash_undefined__";X.prototype.add=X.prototype.push=H,X.prototype.has=Q;var bt=1,gt=2,wt=vt.Symbol,jt=vt.Uint8Array,xt=1,kt=2,Ot="[object Boolean]",Ct="[object Date]",Pt="[object Error]",St="[object Map]",At="[object Number]",Et="[object RegExp]",Mt="[object Set]",Lt="[object String]",Tt="[object Symbol]",qt="[object ArrayBuffer]",Rt="[object DataView]",$t=wt?wt.prototype:void 0,Dt=$t?$t.valueOf:void 0,Ut=Object.getPrototypeOf,Bt=Object.prototype,Nt=Bt.hasOwnProperty,Ft=Object.keys,It=ce("length"),Wt=9007199254740991,Vt="[object Arguments]",Kt=Object.prototype,zt=Kt.hasOwnProperty,Jt=Kt.toString,Gt=Kt.propertyIsEnumerable,Yt=Array.isArray,Zt="[object String]",Ht=Object.prototype,Qt=Ht.toString,Xt=9007199254740991,er=/^(?:0|[1-9]\d*)$/,tr=Object.prototype,rr=2,nr=T(vt,"DataView"),or=T(vt,"Promise"),ir=T(vt,"Set"),ar=T(vt,"WeakMap"),ur="[object Map]",sr="[object Object]",cr="[object Promise]",fr="[object Set]",lr="[object WeakMap]",hr="[object DataView]",yr=Object.prototype,pr=yr.toString,vr=M(nr),dr=M(dt),mr=M(or),_r=M(ir),br=M(ar);(nr&&we(new nr(new ArrayBuffer(1)))!=hr||dt&&we(new dt)!=ur||or&&we(or.resolve())!=cr||ir&&we(new ir)!=fr||ar&&we(new ar)!=lr)&&(we=function(e){var t=pr.call(e),r=t==sr?e.constructor:void 0,n=r?M(r):void 0;if(n)switch(n){case vr:return hr;case dr:return ur;case mr:return cr;case _r:return fr;case br:return lr}return t});var gr=we,wr="[object Arguments]",jr="[object Array]",xr="[object Boolean]",kr="[object Date]",Or="[object Error]",Cr="[object Function]",Pr="[object Map]",Sr="[object Number]",Ar="[object Object]",Er="[object RegExp]",Mr="[object Set]",Lr="[object String]",Tr="[object WeakMap]",qr="[object ArrayBuffer]",Rr="[object DataView]",$r="[object Float32Array]",Dr="[object Float64Array]",Ur="[object Int8Array]",Br="[object Int16Array]",Nr="[object Int32Array]",Fr="[object Uint8Array]",Ir="[object Uint8ClampedArray]",Wr="[object Uint16Array]",Vr="[object Uint32Array]",Kr={};Kr[$r]=Kr[Dr]=Kr[Ur]=Kr[Br]=Kr[Nr]=Kr[Fr]=Kr[Ir]=Kr[Wr]=Kr[Vr]=!0,Kr[wr]=Kr[jr]=Kr[qr]=Kr[xr]=Kr[Rr]=Kr[kr]=Kr[Or]=Kr[Cr]=Kr[Pr]=Kr[Sr]=Kr[Ar]=Kr[Er]=Kr[Mr]=Kr[Lr]=Kr[Tr]=!1;var zr=Object.prototype,Jr=zr.toString,Gr=2,Yr="[object Arguments]",Zr="[object Array]",Hr="[object Object]",Qr=Object.prototype,Xr=Qr.hasOwnProperty,en="[object Number]",tn=Object.prototype,rn=tn.toString,nn="[object Boolean]",on=Object.prototype,an=on.toString,un=Symbol("prefix"),sn=Symbol("sequence"),cn=Symbol("cache"),fn=Symbol("indexers"),ln=function(n){function a(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0],t=arguments[1];Se.classCallCheck(this,a);var r=Se.possibleConstructorReturn(this,Object.getPrototypeOf(a).call(this));if(e&&t)r.key=e,r[cn]=t;else{if(t?r.key=e||Math.random().toString(32).substr(2):(t=e,r.key=Math.random().toString(32).substr(2)),r[cn]=i({},r.constructor.defaultData),r.$methods.beforeValidate){var n=r.$methods.beforeValidate.call(r,t);n&&(t=n)}var o=Object.keys(t),u=!0,s=!1,c=void 0;try{for(var f,l=o[Symbol.iterator]();!(u=(f=l.next()).done);u=!0){var h=f.value;if(!r.validate(h,t[h]))throw new TypeError('Type validate failed on column "'+h+'".')}}catch(y){s=!0,c=y}finally{try{!u&&l["return"]&&l["return"]()}finally{if(s)throw c}}r[cn]=i(r[cn],t);var p=!0,v=!1,d=void 0;try{for(var m,_=function(){var e=m.value;r[e]=function(){for(var t,n=arguments.length,o=Array(n),i=0;n>i;i++)o[i]=arguments[i];return(t=r.constructor.$methods[e]).call.apply(t,[r].concat(o))}},b=Object.keys(r.constructor.$methods)[Symbol.iterator]();!(p=(m=b.next()).done);p=!0)_()}catch(y){v=!0,d=y}finally{try{!p&&b["return"]&&b["return"]()}finally{if(v)throw d}}r.__queue.push(function(){return r.$methods.beforeStore&&r.$methods.beforeStore.call(r),r.__min.sadd(r.constructor.sequence,r.key).then(function(){return r.__min.hmset(r.hashKey,r[cn])}).then(function(){return Promise.all(Object.keys(r[cn]).map(function(e){return r.constructor[fn]&&r.constructor[fn].has(e)?r.constructor[fn].get(e).add(r.key,r[cn][e]):Promise.resolve()}))})},function(){r.$methods.ready&&r.$methods.ready.call(r),r.emit("ready",r)}),r.__queue.run()}return r}return Se.inherits(a,n),Se.createClass(a,null,[{key:"use",value:function(e){this.__min=e}},{key:"setIndexer",value:function(e,t){p(e,t)}},{key:"setIndexerForColumn",value:function(e,t){v(this.sequence+":"+e,t)}},{key:"extend",value:function(n,i){var u;if(n&&!i)throw new Error("Model.extend() should receive 2 arguments, but received 1.");if(!ve(n)&&!i)throw new Error("Model.extend() first argument must be a string.");var s=(u={},Se.defineProperty(u,un,e(n)),Se.defineProperty(u,sn,e(n)+"s"),u),c={},f={},l={},h=!0,y=!1,p=void 0;try{for(var v,d=Object.keys(i)[Symbol.iterator]();!(h=(v=d.next()).done);h=!0){var m=v.value;!A(i[m])||r(i[m])?r(i[m])?(Yt(i[m])&&1===i[m].length&&A(i[m][0]),c[m]=i[m],f[m]=i[m]()):(c[m]=o(i[m]),f[m]=i[m]):l[m]=i[m]}}catch(_){y=!0,p=_}finally{try{!h&&d["return"]&&d["return"]()}finally{if(y)throw p}}var b=t(n),g=new Ee,w=function(e){function t(){return Se.classCallCheck(this,t),Se.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Se.inherits(t,e),Se.createClass(t,[{key:Symbol.toStringTag,get:function(){return b}},{key:"__min",get:function(){return this.constructor.__min}},{key:"__queue",get:function(){return g}}],[{key:"name",get:function(){return b}},{key:"prefix",get:function(){return s[un]}},{key:"sequence",get:function(){return s[sn]}},{key:"validateData",get:function(){return c}},{key:"defaultData",get:function(){return f}},{key:"$methods",get:function(){return l}}]),t}(a);return w}},{key:"BaseIndexer",get:function(){return Me}}]),Se.createClass(a,[{key:"getCacheData",value:function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return e?this[cn][e]:this[cn]}},{key:"get",value:function(e){var t=this;return this[cn][e]?Promise.resolve(this[cn][e]):this.__min.hget(this.hashKey,"key").then(function(r){return t[cn][e]=r,Promise.resolve(r)})}},{key:"set",value:function(e,t){var r=this;if(!this.validate(e,t))throw new TypeError("Type validate failed.");var n=this[cn][e];return this.$methods.beforeUpdate&&this.$methods.beforeUpdate.call(this,e,t,n),this[cn][e]=t,this.__min.hset(this.hashKey,e,t).then(function(){if(r.constructor[fn]&&r.constructor[fn].has(e)){var o=r.constructor[fn].get(e);return o.reindex(r.key,t,n)}return Promise.resolve()}).then(function(){r.$methods.afterUpdate&&r.$methods.afterUpdate.call(r,e,t,n),Promise.resolve([e,t])})}},{key:"reset",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];if(t)return this.set(t,this.constructor.defaultData[t]);var r=Object.keys(this.constructor.defaultData[t]);return Promise.all(r.map(function(t){return e.set(t,e.constructor.defaultData[t]);
}))}},{key:"remove",value:function(){var e=this;this.$methods.beforeRemove&&this.$methods.beforeRemove.call(this),this.__min.srem(this.constructor.sequence,this.key).then(function(){return e.__min.del(e.hashKey)}).then(function(){return Promise.all(Object.keys(e[cn]).map(function(t){return e.constructor[fn]&&e.constructor[fn].has(t)?e.constructor[fn].get(t).remove(e.key,e[cn][t]):Promise.resolve()}))}).then(function(){return e.key=null,e[cn]=null,e.$methods.afterRemove&&e.$methods.afterRemove.call(e),Promise.resolve()})}},{key:"validate",value:function(e,t){switch(this.constructor.validateData[e]){case String:return ve(t);case Number:return Ce(t);case Boolean:return Pe(t);default:return t instanceof(this.constructor.validateData[e]||Object)}}},{key:"hashKey",get:function(){return this.constructor.prefix+":"+this.key}},{key:"$methods",get:function(){return this.constructor.$methods}}],[{key:"fetch",value:function(e){var t=this;return this.__min.sismember(this.sequence,e).then(function(r){return r?t.__min.hgetall(t.prefix+":"+e):Promise.reject(new Error("Object not found."))}).then(function(r){return Promise.resolve(new t(e,r))})}},{key:"setIndex",value:function(e){this[fn]||(this[fn]=new Map);var t=this.validateData[e],r=new Fe(this.sequence,this.prefix,e,t,this.__min);return this[fn].set(e,r),r}},{key:"search",value:function(e,t){var r=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(this[fn]&&this[fn].has(e)){var n=this[fn].get(e);return n.search(t,r,this)}return this.__plainSearch(e,t,r)}},{key:"__plainSearch",value:function(e,t){var r=this,n=arguments.length<=2||void 0===arguments[2]?null:arguments[2];return this.validateData[e]!==o(t)?Promise.reject(new TypeError("Type wrong")):h(new Promise(function(t,o){n?t(n.map(function(t){return[t._key,t[e]]})):r.__min.smembers(r.sequence).then(function(t){var n=r.__min.multi();return t.forEach(function(t){return n.hget(r.prefix+":"+t,e)}),n.exec().then(function(e){return Promise.resolve(e.map(function(e,r){return[t[r],e]}))})}).then(t)["catch"](o)}).then(function(n){return Promise.resolve(n.filter(function(n){var o=Se.slicedToArray(n,2),i=(o[0],o[1]);return r.validateData[e]===String?i.includes(t):Oe(i,t)}).map(function(e){var t=Se.slicedToArray(e,2),r=t[0];t[1];return r}))}).then(function(e){var t=r.__min.multi();return e.forEach(function(e){return t.hgetall(r.prefix+":"+e)}),t.exec().then(function(t){return Promise.resolve(t.map(function(t,r){return t._key=e[r],t}))})}),this)}},{key:"allInstances",value:function(){var e=this;return this.__min.exists(this.sequence).then(function(t){return t?e.__min.smembers(e.sequence):Promise.resolve([])}).then(function(t){var r=e.__min.multi();return t.forEach(function(t){return r.hgetall(e.prefix+":"+t)}),r.exec().then(function(r){return Promise.resolve(r.map(function(r,n){return new e(t[n],r)}))})})}}]),a}(a);return ln});