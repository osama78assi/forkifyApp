var e,t,r,n,i,o,a,c,s,u,l,f,p,h,d,v,g,m,y,b,w,_=globalThis;function k(e){return e&&e.__esModule?e.default:e}var S={},L={},E=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
L=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
E("object"==typeof self&&self)||E("object"==typeof _&&_)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||L||Function("return this")();var M={},$={};// Detect IE8's incomplete defineProperty implementation
M=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},j={};j=!$(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;O=j?F.bind(F):function(){return F.apply(F,arguments)};var T={}.propertyIsEnumerable,q=Object.getOwnPropertyDescriptor;c=q&&!T.call({1:2},1)?function(e){var t=q(this,e);return!!t&&t.enumerable}:T;var I={};I=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},N={},x={},R=Function.prototype,C=R.call,A=j&&R.bind.bind(C,C),H={},D=(x=j?A:function(e){return function(){return C.apply(e,arguments)}})({}.toString),z=x("".slice);H=function(e){return z(D(e),8,-1)};var B=Object,J=x("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
N=$(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!B("z").propertyIsEnumerable(0)})?function(e){return"String"===H(e)?J(e,""):B(e)}:B;var G={},W={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
W=function(e){return null==e};var U=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
G=function(e){if(W(e))throw new U("Can't call method on "+e);return e},P=function(e){return N(G(e))};var Y={},Q={},V={},K={},X={},Z="object"==typeof document&&document.all,ee=(X={all:Z,IS_HTMLDDA:void 0===Z&&void 0!==Z}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
K=X.IS_HTMLDDA?function(e){return"function"==typeof e||e===ee}:function(e){return"function"==typeof e};var et=X.all;V=X.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:K(e)||e===et}:function(e){return"object"==typeof e?null!==e:K(e)};var er={},en={};en=function(e,t){var r;return arguments.length<2?(r=L[e],K(r)?r:void 0):L[e]&&L[e][t]};var ei={};ei=x({}.isPrototypeOf);var eo={},ea={},ec={},es={};es="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eu=L.process,el=L.Deno,ef=eu&&eu.versions||el&&el.version,ep=ef&&ef.v8;ep&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(u=(s=ep.split("."))[0]>0&&s[0]<4?1:+(s[0]+s[1])),!u&&es&&(!(s=es.match(/Edge\/(\d+)/))||s[1]>=74)&&(s=es.match(/Chrome\/(\d+)/))&&(u=+s[1]),ec=u;var eh=L.String;eo=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ea=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eh(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ec&&ec<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;er=eo?function(e){return"symbol"==typeof e}:function(e){var t=en("Symbol");return K(t)&&ei(t.prototype,ed(e))};var ev={},eg={},em={},ey=String;em=function(e){try{return ey(e)}catch(e){return"Object"}};var eb=TypeError;// `Assert: IsCallable(argument) is true`
eg=function(e){if(K(e))return e;throw new eb(em(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
ev=function(e,t){var r=e[t];return W(r)?void 0:eg(r)};var ew={},e_=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ew=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!V(n=O(r,e))||K(r=e.valueOf)&&!V(n=O(r,e))||"string"!==t&&K(r=e.toString)&&!V(n=O(r,e)))return n;throw new e_("Can't convert object to primitive value")};var ek={},eS={};eS=!1;var eL={},eE={},eM=Object.defineProperty;eE=function(e,t){try{eM(L,e,{value:t,configurable:!0,writable:!0})}catch(r){L[e]=t}return t};var e$="__core-js_shared__";eL=L[e$]||eE(e$,{}),(ek=function(e,t){return eL[e]||(eL[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.1",mode:eS?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eO={},ej={},eF=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
ej=function(e){return eF(G(e))};var eT=x({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eO=Object.hasOwn||function(e,t){return eT(ej(e),t)};var eq={},eI=0,eP=Math.random(),eN=x(1..toString);eq=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eN(++eI+eP,36)};var ex=L.Symbol,eR=ek("wks"),eC=eo?ex.for||ex:ex&&ex.withoutSetter||eq,eA=TypeError,eH=(eO(eR,e="toPrimitive")||(eR[e]=ea&&eO(ex,e)?ex[e]:eC("Symbol."+e)),eR[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Q=function(e,t){if(!V(e)||er(e))return e;var r,n=ev(e,eH);if(n){if(void 0===t&&(t="default"),r=O(n,e,t),!V(r)||er(r))return r;throw new eA("Can't convert object to primitive value")}return void 0===t&&(t="number"),ew(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
Y=function(e){var t=Q(e,"string");return er(t)?t:t+""};var eD={},ez={},eB=L.document,eJ=V(eB)&&V(eB.createElement);ez=function(e){return eJ?eB.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eD=!M&&!$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ez("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eG=Object.getOwnPropertyDescriptor;a=M?eG:function(e,t){if(e=P(e),t=Y(t),eD)try{return eG(e,t)}catch(e){}if(eO(e,t))return I(!O(c,e,t),e[t])};var eW={},eU={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eU=M&&$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eQ=String,eV=TypeError;// `Assert: Type(argument) is Object`
eY=function(e){if(V(e))return e;throw new eV(eQ(e)+" is not an object")};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";l=M?eU?function(e,t,r){if(eY(e),t=Y(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(eY(e),t=Y(t),eY(r),eD)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eW=M?function(e,t,r){return l(e,t,I(1,r))}:function(e,t,r){return e[t]=r,e};var e3={},e4={},e5=Function.prototype,e9=M&&Object.getOwnPropertyDescriptor,e7=eO(e5,"name")&&(!M||M&&e9(e5,"name").configurable),e8={},e6=x(Function.toString);K(eL.inspectSource)||(eL.inspectSource=function(e){return e6(e)}),e8=eL.inspectSource;var te={},tt={},tr=L.WeakMap;tt=K(tr)&&/native code/.test(String(tr));var tn={},ti=ek("keys");tn=function(e){return ti[e]||(ti[e]=eq(e))};var to={};to={};var ta="Object already initialized",tc=L.TypeError,ts=L.WeakMap;if(tt||eL.state){var tu=eL.state||(eL.state=new ts);/* eslint-disable no-self-assign -- prototype methods protection */tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,/* eslint-enable no-self-assign -- prototype methods protection */f=function(e,t){if(tu.has(e))throw new tc(ta);return t.facade=e,tu.set(e,t),t},p=function(e){return tu.get(e)||{}},h=function(e){return tu.has(e)}}else{var tl=tn("state");to[tl]=!0,f=function(e,t){if(eO(e,tl))throw new tc(ta);return t.facade=e,eW(e,tl,t),t},p=function(e){return eO(e,tl)?e[tl]:{}},h=function(e){return eO(e,tl)}}var tf=(te={set:f,get:p,has:h,enforce:function(e){return h(e)?p(e):f(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=p(t)).type!==e)throw new tc("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=te.get,th=String,tv=Object.defineProperty,tg=x("".slice),tm=x("".replace),ty=x([].join),tb=M&&!$(function(){return 8!==tv(function(){},"length",{value:8}).length}),tw=String(String).split("String"),t_=e4=function(e,t,r){"Symbol("===tg(th(t),0,7)&&(t="["+tm(th(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eO(e,"name")||e7&&e.name!==t)&&(M?tv(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&eO(r,"arity")&&e.length!==r.arity&&tv(e,"length",{value:r.arity});try{r&&eO(r,"constructor")&&r.constructor?M&&tv(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return eO(n,"source")||(n.source=ty(tw,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=t_(function(){return K(this)&&tp(this).source||e8(this)},"toString"),e3=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(K(r)&&e4(r,o,n),n.global)i?e[t]=r:eE(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:l(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tS={},tL={},tE={},tM={},t$={},tO=Math.ceil,tj=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
t$=Math.trunc||function(e){var t=+e;return(t>0?tj:tO)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tM=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:t$(t)};var tF=Math.max,tT=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tE=function(e,t){var r=tM(e);return r<0?tF(r+t,0):tT(r,t)};var tq={},tI={},tP=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tI=function(e){return e>0?tP(tM(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tq=function(e){return tI(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tN=function(e){return function(t,r,n){var i,o=P(t),a=tq(o),c=tE(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[c++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},tx={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tN(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tN(!1)}.indexOf,tR=x([].push);tL=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!eO(to,r)&&eO(n,r)&&tR(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eO(n,r=t[i++])&&(~tx(o,r)||tR(o,r));return o};var tC=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");d=Object.getOwnPropertyNames||function(e){return tL(e,tC)},v=Object.getOwnPropertySymbols;var tA=x([].concat);// all object keys, includes non-enumerable and symbols
tS=en("Reflect","ownKeys")||function(e){var t=d(eY(e));return v?tA(t,v(e)):t},tk=function(e,t,r){for(var n=tS(t),i=0;i<n.length;i++){var o=n[i];eO(e,o)||r&&eO(r,o)||l(e,o,a(t,o))}};var tH={},tD=/#|\.prototype\./,tz=function(e,t){var r=tJ[tB(e)];return r===tW||r!==tG&&(K(t)?$(t):!!t)},tB=tz.normalize=function(e){return String(e).replace(tD,".").toLowerCase()},tJ=tz.data={},tG=tz.NATIVE="N",tW=tz.POLYFILL="P";tH=tz,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/S=function(e,t){var r,n,i,o,c,s=e.target,u=e.global,l=e.stat;if(r=u?L:l?L[s]||eE(s,{}):(L[s]||{}).prototype)for(n in t){// contained in target
if(o=t[n],i=e.dontCallGetSet?(c=a(r,n))&&c.value:r[n],!tH(u?n:s+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;tk(o,i)}(e.sham||i&&i.sham)&&eW(o,"sham",!0),e3(r,n,o,e)}};var tU={},tY={},tQ=Function.prototype,tV=tQ.apply,tK=tQ.call;// eslint-disable-next-line es/no-reflect -- safe
tY="object"==typeof Reflect&&Reflect.apply||(j?tK.bind(tV):function(){return tK.apply(tV,arguments)});var tX={},tZ={},t0=(tZ=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===H(e))return x(e)})(tZ.bind);// optional / simple context binding
tX=function(e,t){return eg(e),void 0===t?e:j?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=en("document","documentElement");var t2={};t2=x([].slice);var t3={},t4=TypeError;t3=function(e,t){if(e<t)throw new t4("Not enough arguments");return e};var t5={};// eslint-disable-next-line redos/no-vulnerable -- safe
t5=/(?:ipad|iphone|ipod).*applewebkit/i.test(es);var t9={};t9="process"===H(L.process);var t7=L.setImmediate,t8=L.clearImmediate,t6=L.process,re=L.Dispatch,rt=L.Function,rr=L.MessageChannel,rn=L.String,ri=0,ro={},ra="onreadystatechange";$(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
g=L.location});var rc=function(e){if(eO(ro,e)){var t=ro[e];delete ro[e],t()}},rs=function(e){return function(){rc(e)}},ru=function(e){rc(e.data)},rl=function(e){// old engines have not location.origin
L.postMessage(rn(e),g.protocol+"//"+g.host)};t7&&t8||(t7=function(e){t3(arguments.length,1);var t=K(e)?e:rt(e),r=t2(arguments,1);return ro[++ri]=function(){tY(t,void 0,r)},m(ri),ri},t8=function(e){delete ro[e]},t9?m=function(e){t6.nextTick(rs(e))}:re&&re.now?m=function(e){re.now(rs(e))}:rr&&!t5?(b=(y=new rr).port2,y.port1.onmessage=ru,m=tX(b.postMessage,b)):L.addEventListener&&K(L.postMessage)&&!L.importScripts&&g&&"file:"!==g.protocol&&!$(rl)?(m=rl,L.addEventListener("message",ru,!1)):m=ra in ez("script")?function(e){t1.appendChild(ez("script"))[ra]=function(){t1.removeChild(this),rc(e)}}:function(e){setTimeout(rs(e),0)});var rf=(tU={set:t7,clear:t8}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
S({global:!0,bind:!0,enumerable:!0,forced:L.clearImmediate!==rf},{clearImmediate:rf});var rp=tU.set,rh={},rd={};/* global Bun -- Deno case */rd="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rv=L.Function,rg=/MSIE .\./.test(es)||rd&&((n=L.Bun.version.split(".")).length<3||"0"===n[0]&&(n[1]<3||"3"===n[1]&&"0"===n[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rh=function(e,t){var r=t?2:1;return rg?function(n,i/* , ...arguments */){var o=t3(arguments.length,1)>r,a=K(n)?n:rv(n),c=o?t2(arguments,r):[],s=o?function(){tY(a,this,c)}:a;return t?e(s,i):e(s)}:e};// https://github.com/oven-sh/bun/issues/1633
var rm=L.setImmediate?rh(rp,!1):rp;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
S({global:!0,bind:!0,enumerable:!0,forced:L.setImmediate!==rm},{setImmediate:rm});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(s,"_invoke",{value:(a=new $(o||[]),c=p,function(r,i){if(c===h)throw Error("Generator is already running");if(c===d){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(s){if(s===v)continue;return s}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var u=f(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=d,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),s)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var w=Object.getPrototypeOf,_=w&&w(w(O([])));_&&_!==r&&n.call(_,a)&&// of the polyfill.
(b=_);var k=y.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function L(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,c){var s=f(e[i],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,c)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},S(L.prototype),u(L.prototype,c,function(){return this}),e.AsyncIterator=L,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new L(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
S(k),u(k,s,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=O,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;M(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=ry}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=ry:Function("r","regeneratorRuntime = r")(ry)}const rb="https://forkify-api.herokuapp.com/api/v2/recipes",rw="a5245092-a6ff-4a06-beb4-af33a86847df";var r_={};r_=new URL("icons.c14567a0.svg",import.meta.url).toString();const rk=new // Views Functions
class{// To Empty The Content
emptyContent(e){0!=e.childElementCount&&(e.innerHTML="")}// To Render Loading Icon
renderSpiner(e){let t=`
    <div class="spinner">
      <svg>
        <use href="${/*@__PURE__*/k(r_)}.svg#icon-loader"></use>
      </svg>
    </div>
    `;e.insertAdjacentHTML("afterbegin",t)}// To Hide Loading Icon
hideSpiner(e){let t=e.querySelector(".spinner");t&&t.remove()}// To Render Specific Error
renderError(e,t){t.includes("Invalid _id")&&(t="Couldn't Find The Recipe. Please try again!");let r=`
    <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/k(r_)}.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${t}</p>
    </div>
    `;this.emptyContent(e),e.insertAdjacentHTML("afterbegin",r)}},rS=new // Model Function
class{// To Make Limit Time Per Request
_timeout(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})}// Get JSON Resopnse From An API
async getJSON(e){try{let t=await Promise.race([fetch(e),this._timeout(15)]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}}// Send JSON Data To The API
async sendJSON(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,this._timeout(15)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}}// Formating The Object
format(e,t=!0){return t?{id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients,...e.key&&{key:e.key}}:{title:e.title,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:+e.servings,cooking_time:+e.cookingTime,ingredients:e.ingredients}}},rL={recipe:{},searchResult:{query:"",results:[],page:1},bookMarks:[]},rE=async function(e){try{let t=await rS.getJSON(`${rb}/${e}`),{recipe:r}=t.data;rL.recipe=rS.format(r)}catch(e){throw e}},rM=async function(e){try{let t=await rS.getJSON(`${rb}?search=${e}&key=${rw}`);rL.searchResult.query=e,rL.searchResult.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))}catch(e){throw rL.searchResult.query="",rL.searchResult.page=1,rL.searchResult.results=[],e}},r$=function(){rL.recipe.servings>1&&(rL.recipe.ingredients.forEach(e=>{e.quantity=e.quantity*(rL.recipe.servings-1)/rL.recipe.servings}),rL.recipe.servings--)},rO=function(){rL.recipe.ingredients.forEach(e=>{e.quantity=e.quantity*(rL.recipe.servings+1)/rL.recipe.servings}),rL.recipe.servings++},rj=function(e){if(rL.bookMarks.length){let t=rL.bookMarks.findIndex(t=>t.id==e);if(-1!=t)return!0}return!1},rF=function(e,t,r,n,i=!1){rL.bookMarks.push({id:e,img:t,name:r,publisher:n,...i&&{key:i}}),window.localStorage.setItem("bookmarks",JSON.stringify(rL.bookMarks))},rT=function(e){let t=rL.bookMarks.findIndex(t=>t.id==e);rL.bookMarks.splice(t,1),// Referesh The List
window.localStorage.setItem("bookmarks",JSON.stringify(rL.bookMarks))},rq=function(e,t){let r=document.querySelector(".bookmark");r.addEventListener("click",function(){e(rj(t))})},rI=async function(e){try{e=rS.format(e,!1);let t=await rS.sendJSON(`${rb}?key=${rw}`,e);rL.recipe=rS.format(t.data.recipe),rF(rL.recipe.id,rL.recipe.image,rL.recipe.title,rL.recipe.publisher,rL.recipe.key)}catch(e){throw e}};window.localStorage.getItem("bookmarks")?rL.bookMarks=JSON.parse(window.localStorage.getItem("bookmarks")):window.localStorage.setItem("bookmarks",JSON.stringify(rL.bookMarks)),(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(i=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},o=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(i(this.denominator)){var e=o(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(i(this.numerator)){var e=o(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},w=Fraction;const rP=document.querySelector(".recipe"),rN=function(){rk.emptyContent(rP)},rx=function(){rk.renderSpiner(rP)},rR=function(){rk.hideSpiner(rP)},rC=function(e){let t=`
  <figure class="recipe__fig">
    <img src="${e.image}" alt="${e.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${e.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/k(r_)}.svg#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${e.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/k(r_)}.svg#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg class="minus">
            <use href="${/*@__PURE__*/k(r_)}.svg#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg class="plus">
            <use href="${/*@__PURE__*/k(r_)}.svg#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="recipe__user_mid">
    <div class="recipe__user-generated ${e.key?"":"hidden"}">
      <svg><use href="${/*@__PURE__*/k(r_)}.svg#icon-user"></use></svg>
    </div>
    </div>
    <button class="btn--round bookmark">
      <svg class="">
        <use href="${/*@__PURE__*/k(r_)}.svg#icon-bookmark"></use>
        <!-- <use href="${/*@__PURE__*/k(r_)}.svg#icon-bookmark-fill"></use> -->
      </svg>
    </button>
  </div>
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${e.ingredients.map(e=>{let{quantity:t,unit:r,description:n}=e;return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/k(r_)}.svg#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${t?new w(t).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${r||""}</span>
            ${n}
          </div>
        </li>
        `}).join("")}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${e.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${e.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(r_)}.svg#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
  `;rP.insertAdjacentHTML("afterbegin",t)},rA=function(e){rk.renderError(rP,e)},rH=function(e,t){let r=document.querySelector(".recipe__info-data--people");r.innerHTML=t;let n=document.querySelector(".recipe__ingredient-list");rk.emptyContent(n);let i=`
    ${e.map(e=>{let{quantity:t,unit:r,description:n}=e;return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${/*@__PURE__*/k(r_)}.svg#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${t?new w(t).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${r||""}</span>
            ${n||""}
          </div>
        </li>
        `}).join("")}
  `;n.insertAdjacentHTML("afterbegin",i)},rD=function(e){let t;let r=document.querySelector(".bookmark");rk.emptyContent(r),t=e?`
    <svg class="">
      <use href="${/*@__PURE__*/k(r_)}.svg#icon-bookmark-fill"></use>
    </svg>
    `:`
    <svg class="">
      <use href="${/*@__PURE__*/k(r_)}.svg#icon-bookmark"></use>
    </svg>
    `,r.insertAdjacentHTML("afterbegin",t)},rz=function(e,t){let r=document.querySelector(".minus"),n=document.querySelector(".plus");r&&r.addEventListener("click",t),n&&n.addEventListener("click",e)},rB=document.querySelector(".search .search__field"),rJ=document.querySelector(".search .search__btn"),rG=function(){let e=rB.value;return rB.value="",e},rW=document.querySelector(".results"),rU=function(){rk.emptyContent(rW)},rY=function(){rk.renderSpiner(rW)},rQ=function(){rk.hideSpiner(rW)},rV=function(e){rk.renderError(rW,e)},rK=function(){let e=document.querySelector(".search-results .preview__link--active");e&&e.classList.remove("preview__link--active")},rX=function(e){rK(),e&&e.classList.add("preview__link--active")},rZ=function(e){let t=e.map(e=>`
    <li class="preview search-preview">
      <a class="preview__link ${e.id==window.location.hash.slice(1)?"preview__link--active":""}" href="#${e.id}">
        <figure class="preview__fig">
          <img src="${e.image}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__name">
            ${e.title}
          </h4>
          <p class="preview__publisher">${e.publisher}</p> 
          <div class="preview__user-generated ${e.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/k(r_)}.svg#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>
    `).join("");rU(),rW.insertAdjacentHTML("afterbegin",t)},r0=function(e){rW.addEventListener("click",function(t){let r=t.target.closest("a");r&&e(r)})},r1=document.querySelector(".pagination"),r2=function(e,t,r){if(-1==e){rk.emptyContent(r1);return}let n=rightArrow="";0!=e&&(n=`
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${/*@__PURE__*/k(r_)}.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${e}</span>
    </button>
    `),t<=r&&(rightArrow=`
    <button class="btn--inline pagination__btn--next">
      <span>Page ${t}</span>
        <svg class="search__icon">
      <use href="${/*@__PURE__*/k(r_)}.svg#icon-arrow-right"></use>
      </svg>
    </button>
    `);let i=n+rightArrow;rk.emptyContent(r1),r1.insertAdjacentHTML("afterbegin",i)},r3=document.querySelector(".header .bookmarks__list"),r4=function(){let e=document.querySelector(".header .preview__link--active");e&&e.classList.remove("preview__link--active")},r5=function(){r4();let e=window.location.hash,t=document.querySelector(`.header [href='${e}']`);t&&t.classList.add("preview__link--active")},r9=function(e){let t;r4(),rk.emptyContent(r3),t=e&&e.length?e.map(e=>`
        <li class="preview">
          <a class="preview__link" href="#${e.id}">
            <figure class="preview__fig">
              <img src="${e.img}" alt="BookMark" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__name">
              ${e.name}
              </h4>
              <p class="preview__publisher">${e.publisher}</p>
              <div class="recipe__user-generated ${e.key?"":"hidden"}">
              <svg><use href="${/*@__PURE__*/k(r_)}.svg#icon-user"></use></svg>
            </div>
            </div>
          </a>
        </li>
      `).join(""):`
    <div class="message">
    <div>
      <svg>
        <use href="${/*@__PURE__*/k(r_)}.svg#icon-smile"></use>
      </svg>
    </div>
    <p>
      No bookmarks yet. Find a nice recipe and bookmark it :)
    </p>
    </div>
    `,r3.insertAdjacentHTML("afterbegin",t)},r7=document.querySelector(".overlay"),r8=document.querySelector(".add-recipe-window"),r6=document.querySelector(".nav__btn--add-recipe"),ne=document.querySelector(".add-recipe-window .btn--close-modal"),nt=document.querySelector(".upload"),nr=document.querySelector(".warning"),nn=document.querySelector(".warning-title"),ni=document.querySelector(".warning .warning-desc"),no=function(){return new Promise(e=>{setTimeout(e,2e3)})},na=function(){rk.renderSpiner(r8)},nc=function(){rk.hideSpiner(r8)},ns=function(){nr.classList.remove("hidden"),nr.classList.add("success"),nn.innerHTML="Recipe Uploaded Successfully !",no().then(()=>{nr.classList.add("hidden"),// Wait 2 Seconds Before Removing Success Class
no().then(()=>{nr.classList.remove("success")})})},nu=function(e){nn.innerHTML="Something Went Wrong !",ni.innerHTML=`\u{2022} ${e}`,nr.classList.remove("hidden"),no().then(()=>{nr.classList.add("hidden")})},nl=function(e){// Filltering Ingredient
let t=[],r=[];// Title Must Be 5 Characters At Least
if(e.forEach(e=>{e[0].includes("ingredient")&&""!=e[1]&&t.push(e[1].split(","))}),e[0][1].length<5)return nu("Title Must Be 5 Characters At Least"),0;// Source URL Must Be 5 Characters At Least
if(e[1][1].length<5)return nu("Source URL Must Be 5 Characters At Least"),0;// Image URL Must Be 5 Characters At Least
if(e[2][1].length<5)return nu("Image URL Must Be 5 Characters At Least"),0;// Publisher Name Must Be 5 Characters At Least
if(e[3][1].length<5)return nu("Publisher Name Must Be 5 Characters At Least"),0;// Servenig Must Be 1 At Least
if(0>=Number(e[5][1]))return nu("Empty Serving For Recipe Isn't Accepted !"),0;// Cooking Time Might Be 0 But Not -1 Or Less
if(0>Number(e[4][1]))return nu("Cooking Time Mustn't Be Negative"),0;for(let e=0;e<t.length;e++){// Mustn't Add Three Empty Commas
if(t[e].every(e=>""==e))return nu(`Ingredient ${e+1} Mustn't Be Empty`),0;// Must Be From Three Things
if(t[e].length>3||t[e].length<3)return nu(`Ingredient ${e+1} Must Be Like The Format: Quantity, Unit, Description`),0;// The Quantity Mustn't Be String
if(0!=Number(t[e][0])&&isNaN(t[e][0]))return nu(`Quantity Of Ingredient ${e+1} Must Be Number`),0;// Quantity Must Hold Meaningful Value
if(""==t[e][1]&&""==t[e][2]||t[e][1]&&""==t[e][2])return nu(`Quantity Of Ingredient ${e+1} Must Hold Meaningful Value`),0;// In Success Make The Ingredient Object
r.push({quantity:t[e][0]?+t[e][0]:null,unit:""!=t[e][1].trim()?t[e][1].trim():null,description:""!=t[e][2].trim()?t[e][2].trim():null})}return r},nf=function(){r7.classList.add("hidden"),r8.classList.add("hidden")},np=async function(){try{let e=window.location.hash;if(!e)return;// Clean
rN(),// Add Load Icon
rx(),// Waiting Data To Fetch
await rE(e.slice(1)),// Rendering Recipe
rC(rL.recipe),// Checking Bookmark When Recipe Got Render
// Model Function Rturn True If The Recipe Is Found
// Bookmark View Funtion Will Take The Action
rD(rj(e.slice(1))),// Mark The Recipe As Selected From The Bookmark List
r5(),// When User Mark/Unmark The Recipe
rq(nm,e.slice(1)),// Making Changing Serving Possible
rz(nh,nd),// Hide Load Icon
rR()}catch(e){rR(),rA("Something Went Wrong !"),console.error(e)}},nh=function(){rO(),rH(rL.recipe.ingredients,rL.recipe.servings)},nd=function(){r$(),rH(rL.recipe.ingredients,rL.recipe.servings)},nv=function(e=1){if(rL.searchResult.results.length){let t=function(e=1){return rL.searchResult.page=e,rL.searchResult.results.slice((e-1)*10,10*e)}(e),r=Math.ceil(parseFloat(rL.searchResult.results.length)/10);// Get Recipes According To The Page
e=parseInt(e),rZ(t),r2(e-1,e+1,r)}else r2(-1,-1,-1),rV("No Recipes Found !");// Making Ablility To Show The Selected Recipe
r0(rX)},ng=async function(){try{let e=rG();if(!e){rV("No Recipes Found !");return}// Empty Recults Content
rU(),// Render Loading Icon
rY(),// Waiting The Results
await rM(e),// Hide Loading Icon
rQ(),// Control Pages
nv()}catch(e){rV("Something Went Wrong !"),console.error(e)}},nm=function(e){e?rT(rL.recipe.id):rF(rL.recipe.id,rL.recipe.image,rL.recipe.title,rL.recipe.publisher,rL.recipe.key),r9(rL.bookMarks),// Remove Or Add Select On The Recipe
r5(),// Fill Or Remove The Fill From Bookmark The Recipe
rD(!e)},ny=async function(e){try{// Render Loading Icon
na(),// Waiting Uploading Recipe
await rI(e),// Hide Spinner
nc(),// Show Success Message
ns(),// Hidding Form
nf(),// Referesh Marked Recipes
r9(rL.bookMarks),// Render The Recipe By Changing Window Hash
window.location.hash=rL.recipe.id}catch(e){console.log(e),nu(e),// Hide Spinner
nc()}};["hashchange","load"].forEach(e=>{window.addEventListener(e,np)}),rJ.addEventListener("click",function(e){e.preventDefault(),ng()}),// Fit Recipe On The Viewport
function(e){let t=document.querySelector(".header"),r=document.querySelector(".results");r.addEventListener("click",e.bind(null,t))}(function(e){let t=e.getBoundingClientRect();// Smooth Scroll To Specific Element
window.scrollTo({left:0,top:t.bottom+window.scrollY,behavior:"smooth"})}),// Render Elements From Local Storage
r9(rL.bookMarks),t=function(){// The Next Page
nv(++rL.searchResult.page)},r=function(){// The Previous Page
nv(--rL.searchResult.page)},r1.addEventListener("click",function(e){e.target.closest(".pagination__btn--next")?t():e.target.closest(".pagination__btn--prev")&&r()}),r6.addEventListener("click",function(){r7.classList.remove("hidden"),r8.classList.remove("hidden")}),r7.addEventListener("click",function(e){r7.classList.contains("hidden")||nf()}),ne.addEventListener("click",nf),nt.addEventListener("submit",function(e){e.preventDefault();let t=[...new FormData(nt)],r=nl(t);r&&((t=t.slice(0,6)).push(["ingredients",r]),// Data Must Be Excatly Like Data That Comes From The API
ny(Object.fromEntries(t)))});//# sourceMappingURL=index.865f19e0.js.map

//# sourceMappingURL=index.865f19e0.js.map
