"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2441],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=l,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62352:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),a=["components"],i={},s="\u63a7\u5236\u53f0",c={unversionedId:"debugger/how-to-debug/console",id:"debugger/how-to-debug/console",title:"\u63a7\u5236\u53f0",description:"console.time() && console.timeEnd()",source:"@site/fe/debugger/how-to-debug/console.md",sourceDirName:"debugger/how-to-debug",slug:"/debugger/how-to-debug/console",permalink:"/study-notes/fe/debugger/how-to-debug/console",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649757764,formattedLastUpdatedAt:"4/12/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u6d4f\u89c8\u5668",permalink:"/study-notes/fe/debugger/how-to-debug/browser"},next:{title:"Mac \u8bbe\u7f6e\u5176\u4ed6userAgent\u7684\u6d4f\u89c8\u5668",permalink:"/study-notes/fe/debugger/mac-how-to-use-other-env-browsers"}},u={},d=[{value:"console.time() &amp;&amp; console.timeEnd()",id:"consoletime--consoletimeend",level:2},{value:"console.count",id:"consolecount",level:2},{value:"console.trace",id:"consoletrace",level:2},{value:"console.table",id:"consoletable",level:2},{value:"API\u5de5\u5177\u65b9\u6cd5",id:"api\u5de5\u5177\u65b9\u6cd5",level:2},{value:"keys/values",id:"keysvalues",level:3},{value:"Store as global variable",id:"store-as-global-variable",level:2},{value:"copy",id:"copy",level:2},{value:"monitorEvents/unmonitorEvents",id:"monitoreventsunmonitorevents",level:2},{value:"monitor/unmonitor",id:"monitorunmonitor",level:2},{value:"getEventListeners",id:"geteventlisteners",level:2},{value:"debug/undebug",id:"debugundebug",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],p={toc:d};function g(e){var t=e.components,i=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63a7\u5236\u53f0"},"\u63a7\u5236\u53f0"),(0,r.kt)("h2",{id:"consoletime--consoletimeend"},"console.time() && console.timeEnd()"),(0,r.kt)("p",null,"\u5206\u6790\u51fd\u6570\u7684\u6027\u80fd"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console-time.png",src:n(16545).Z,width:"860",height:"216"})),(0,r.kt)("h2",{id:"consolecount"},"console.count"),(0,r.kt)("p",null,"\u8bb0\u5f55\u4e00\u4e2a\u51fd\u6570\u6216\u5219\u4e00\u6bb5\u4ee3\u7801\u91cd\u590d\u6267\u884c\u4e86\u591a\u5c11\u6b21"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console-count.png",src:n(4685).Z,width:"932",height:"644"})),(0,r.kt)("h2",{id:"consoletrace"},"console.trace"),(0,r.kt)("p",null,"\u6253\u5370\u7684\u6570\u636e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"stacktrace"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console.trace.png",src:n(42762).Z,width:"500",height:"536"})),(0,r.kt)("h2",{id:"consoletable"},"console.table"),(0,r.kt)("p",null,"\u5c06\u5bf9\u8c61\u4ee5\u8868\u683c\u7684\u5f62\u5f0f\u6253\u5370\u51fa\u6765"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console.table.png",src:n(45268).Z,width:"1428",height:"366"})),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console.table.obj.png",src:n(41594).Z,width:"1436",height:"252"})),(0,r.kt)("h2",{id:"api\u5de5\u5177\u65b9\u6cd5"},"API\u5de5\u5177\u65b9\u6cd5"),(0,r.kt)("h3",{id:"keysvalues"},"keys/values"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console-keys.png",src:n(64780).Z,width:"508",height:"165"})),(0,r.kt)("h2",{id:"store-as-global-variable"},"Store as global variable"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"store-as-global-variable.png",src:n(66621).Z,width:"1588",height:"352"})),(0,r.kt)("h2",{id:"copy"},"copy"),(0,r.kt)("p",null,"\u5feb\u901f\u62f7\u8d1d\u4e00\u4e2a\u5bf9\u8c61\u4e3a\u5b57\u7b26\u4e32\u8868\u793a\u65b9\u5f0f\u5230\u526a\u5207\u677f"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console-copy.gif",src:n(75211).Z,width:"1687",height:"948"})),(0,r.kt)("h2",{id:"monitoreventsunmonitorevents"},"monitorEvents/unmonitorEvents"),(0,r.kt)("p",null,"\u53ef\u4ee5\u89c2\u5bdfDOM\u7684\u89e6\u53d1\u4e8b\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console-monitorEvents.gif",src:n(67239).Z,width:"1687",height:"948"})),(0,r.kt)("h2",{id:"monitorunmonitor"},"monitor/unmonitor"),(0,r.kt)("p",null,"\u7528\u6765\u89c2\u5bdf\u51fd\u6570\u8c03\u7528\u7684\u5de5\u5177\u65b9\u6cd5\u3002\u5728\u51fd\u6570\u8c03\u7528\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u540c\u6b65\u8f93\u51fa\u51fd\u6570\u540d\u4ee5\u53ca\u53c2\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console-monitor.png",src:n(8075).Z,width:"688",height:"440"})),(0,r.kt)("h2",{id:"geteventlisteners"},"getEventListeners"),(0,r.kt)("p",null,"\u83b7\u53d6\u6ce8\u518c\u5230\u4e00\u4e2aDOM\u4e0a\u7684\u6240\u6709\u4e8b\u4ef6\u76d1\u542c\u5668"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console-getEventListeners.gif",src:n(77928).Z,width:"1687",height:"948"})),(0,r.kt)("h2",{id:"debugundebug"},"debug/undebug"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"console-debug.gif",src:n(31582).Z,width:"1687",height:"948"})),(0,r.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://rain120.github.io/study-notes/fe/javascript/notes/console/console-related-note"},"console\u5168\u5bb6\u6876")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/console/api/"},"Chrome Console Api")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/console/utilities/"},"Chrome Console utils API\u53c2\u8003")))}g.isMDXComponent=!0},75211:function(e,t,n){t.Z=n.p+"assets/images/console-copy-ed1223692f0445fe7ceb346d154af051.gif"},4685:function(e,t,n){t.Z=n.p+"assets/images/console-count-2d8daa4bb5ebfabeb540c6717d42d08e.png"},31582:function(e,t,n){t.Z=n.p+"assets/images/console-debug-77cf49cc526a204d40a1f4615b89e765.gif"},77928:function(e,t,n){t.Z=n.p+"assets/images/console-getEventListeners-30046891b73da99effe07744f54d7922.gif"},64780:function(e,t,n){t.Z=n.p+"assets/images/console-keys-fe181d8a51272381a564a7965879b9b0.png"},8075:function(e,t,n){t.Z=n.p+"assets/images/console-monitor-2defb1bfa543e91a6c6c09f1e9d32f24.png"},67239:function(e,t,n){t.Z=n.p+"assets/images/console-monitorEvents-f4e15d347556c63edd5a0173bdd3f54e.gif"},16545:function(e,t,n){t.Z=n.p+"assets/images/console-time-02cd9a14173c6a9fdcc70bc04f705771.png"},41594:function(e,t,n){t.Z=n.p+"assets/images/console.table.obj-baf2d5eaad4dee4da159315226f7f711.png"},45268:function(e,t,n){t.Z=n.p+"assets/images/console.table-2dacabff01824ad723f425827755d3ee.png"},42762:function(e,t,n){t.Z=n.p+"assets/images/console.trace-7f98b4a3cdc589abb916e3b8cf665c22.png"},66621:function(e,t,n){t.Z=n.p+"assets/images/store-as-global-variable-0b1cfa92ea2bad1e6f0cdd94a7f8c08c.png"}}]);