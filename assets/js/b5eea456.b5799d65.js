"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2940],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,f=p["".concat(d,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20212:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={},d="\u4e00\u4e9b\u8c03\u8bd5\u6280\u5de7",s={unversionedId:"debugger/how-to-debug/a-few-debug-skills",id:"debugger/how-to-debug/a-few-debug-skills",title:"\u4e00\u4e9b\u8c03\u8bd5\u6280\u5de7",description:"HTML",source:"@site/fe/debugger/how-to-debug/a-few-debug-skills.md",sourceDirName:"debugger/how-to-debug",slug:"/debugger/how-to-debug/a-few-debug-skills",permalink:"/study-notes/fe/debugger/how-to-debug/a-few-debug-skills",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643963901,formattedLastUpdatedAt:"2/4/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5982\u4f55\u8c03\u8bd5",permalink:"/study-notes/fe/debugger/how-to-debug/"},next:{title:"\u6d4f\u89c8\u5668",permalink:"/study-notes/fe/debugger/how-to-debug/browser"}},c=[{value:"HTML",id:"html",children:[{value:"\u6d6e\u7a97\u7c7b\u7684\u8c03\u8bd5\u65b9\u5f0f",id:"\u6d6e\u7a97\u7c7b\u7684\u8c03\u8bd5\u65b9\u5f0f",children:[{value:"\u62d6\u62fd\u7c7b",id:"\u62d6\u62fd\u7c7b",children:[],level:4},{value:"Select Options",id:"select-options",children:[],level:4},{value:"\u4fee\u6539\u6570\u636e\u6d4b\u8bd5",id:"\u4fee\u6539\u6570\u636e\u6d4b\u8bd5",children:[],level:4}],level:3},{value:"Debugger",id:"debugger",children:[{value:"Dom",id:"dom",children:[{value:"Attribute Modifications",id:"attribute-modifications",children:[],level:5},{value:"Subtree Modifications",id:"subtree-modifications",children:[],level:5},{value:"Node Removal",id:"node-removal",children:[],level:5}],level:4},{value:"Javascript",id:"javascript",children:[],level:4},{value:"Log",id:"log",children:[{value:"Code Debug",id:"code-debug",children:[],level:5},{value:"Find the errors position by the throw from the console",id:"find-the-errors-position-by-the-throw-from-the-console",children:[],level:5}],level:4},{value:"\u66f4\u591a\u8c03\u8bd5\u76f8\u5173\u7684\u8d44\u6e90",id:"\u66f4\u591a\u8c03\u8bd5\u76f8\u5173\u7684\u8d44\u6e90",children:[],level:4}],level:3}],level:2}],u={toc:c};function p(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e00\u4e9b\u8c03\u8bd5\u6280\u5de7"},"\u4e00\u4e9b\u8c03\u8bd5\u6280\u5de7"),(0,i.kt)("h2",{id:"html"},"HTML"),(0,i.kt)("h3",{id:"\u6d6e\u7a97\u7c7b\u7684\u8c03\u8bd5\u65b9\u5f0f"},"\u6d6e\u7a97\u7c7b\u7684\u8c03\u8bd5\u65b9\u5f0f"),(0,i.kt)("p",null,"\u5f53\u4f60\u9047\u5230 ",(0,i.kt)("strong",{parentName:"p"},"\u62d6\u62fdDOM"),"\uff0c ",(0,i.kt)("strong",{parentName:"p"},"Popover"),"\uff0c",(0,i.kt)("strong",{parentName:"p"},"Select")," \u7b49\u7c7b\u4f3c\u7ec4\u4ef6\u65f6\uff0c\u4f60\u662f\u5982\u4f55debugger?"),(0,i.kt)("h4",{id:"\u62d6\u62fd\u7c7b"},"\u62d6\u62fd\u7c7b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"find-float-dom.gif",src:n(32709).Z})),(0,i.kt)("h4",{id:"select-options"},"Select Options"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"find-select-options-dom.gif",src:n(34694).Z})),(0,i.kt)("h4",{id:"\u4fee\u6539\u6570\u636e\u6d4b\u8bd5"},"\u4fee\u6539\u6570\u636e\u6d4b\u8bd5"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"contentEditable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.body.contentEditable = true\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"body-contentEditable.gif",src:n(28522).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Edit as HTML")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit-as-html.gif",src:n(46597).Z})),(0,i.kt)("h3",{id:"debugger"},"Debugger"),(0,i.kt)("h4",{id:"dom"},"Dom"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dom-break-on.png",src:n(8604).Z})),(0,i.kt)("h5",{id:"attribute-modifications"},"Attribute Modifications"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dom-debug-attr-modify.gif",src:n(27404).Z})),(0,i.kt)("h5",{id:"subtree-modifications"},"Subtree Modifications"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dom-debug-subtree-modifications.gif",src:n(83801).Z})),(0,i.kt)("h5",{id:"node-removal"},"Node Removal"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dom-debug-node-removal.gif",src:n(58892).Z})),(0,i.kt)("h4",{id:"javascript"},"Javascript"),(0,i.kt)("h4",{id:"log"},"Log"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"console-window.png",src:n(42602).Z})),(0,i.kt)("h5",{id:"code-debug"},"Code Debug"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devtools-sources.png",src:n(84425).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"IDE Debug"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"ide-debug.png",src:n(89345).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Devtools Debug"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"sources-debug.png",src:n(27072).Z})))),(0,i.kt)("p",null,"\u5173\u4e8ewatch data \u7684\u76f8\u5173\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sources-watch.png",src:n(50252).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65ad\u70b9\u4e4b\u524d hover \u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u53f3\u8fb9\u6dfb\u52a0 watch params"),(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5728 console \u8f93\u5165\u5b57\u6bb5")),(0,i.kt)("p",null,"\u5173\u4e8e devtools breakpoint"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"devtools-edit-breakpoint.gif",src:n(78053).Z})),(0,i.kt)("h5",{id:"find-the-errors-position-by-the-throw-from-the-console"},"Find the errors position by the throw from the console"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"debug-with-throw-error.gif",src:n(28332).Z})),(0,i.kt)("h4",{id:"\u66f4\u591a\u8c03\u8bd5\u76f8\u5173\u7684\u8d44\u6e90"},"\u66f4\u591a\u8c03\u8bd5\u76f8\u5173\u7684\u8d44\u6e90"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://jvns.ca/blog/2015/11/22/how-i-got-better-at-debugging/"},"How I got better at debugging")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1K-mKOqiUiSjgZTEscBLjtjd6E67oiK8H2ztOiq5tigk/pub"},"\u4f7f\u7528\u5f00\u53d1\u8005\u5de5\u5177\u8fdb\u884c\u6027\u80fd\u68c0\u67e5\u7684\u9ad8\u7ea7\u6280\u5de7")))}p.isMDXComponent=!0},28522:function(e,t,n){t.Z=n.p+"assets/images/body-contentEditable-0af8e4076d42cc0b29844fc2020b815e.gif"},42602:function(e,t,n){t.Z=n.p+"assets/images/console-window-70ddd164baf22b6df62c61b5b038de98.png"},28332:function(e,t,n){t.Z=n.p+"assets/images/debug-with-throw-error-1ac168032a5dff6bddac2465e330641d.gif"},78053:function(e,t,n){t.Z=n.p+"assets/images/devtools-edit-breakpoint-2e07973c13e95887473c9c542a7ee75d.gif"},84425:function(e,t,n){t.Z=n.p+"assets/images/devtools-sources-efe7c20e9eb61ac055f7ee4c15abf683.png"},8604:function(e,t,n){t.Z=n.p+"assets/images/dom-break-on-5beb6676f5e39c711c0f25c64702e275.png"},27404:function(e,t,n){t.Z=n.p+"assets/images/dom-debug-attr-modify-b21e52bcbe2c72847b624a7b20cae385.gif"},58892:function(e,t,n){t.Z=n.p+"assets/images/dom-debug-node-removal-61ede875bff75d4d528ea3db429f7e02.gif"},83801:function(e,t,n){t.Z=n.p+"assets/images/dom-debug-subtree-modifications-f5fa6df18fda5a29091efe375f81f9cf.gif"},46597:function(e,t,n){t.Z=n.p+"assets/images/edit-as-html-d0dfe04141db8d5b0e6d928f1b3a2a54.gif"},32709:function(e,t,n){t.Z=n.p+"assets/images/find-float-dom-2a5065b3deb0baaf4ea3e1d1eede267d.gif"},34694:function(e,t,n){t.Z=n.p+"assets/images/find-select-options-dom-cbe565574b7f191039c39366709685c7.gif"},89345:function(e,t,n){t.Z=n.p+"assets/images/ide-debug-d2281b344aefe3a4796306e4b9ae374c.png"},27072:function(e,t,n){t.Z=n.p+"assets/images/sources-debug-d5fcd07613f3e07cea9b767e29974401.png"},50252:function(e,t,n){t.Z=n.p+"assets/images/sources-watch-e29e775e0bef8e82bf9140dc9d4f7b0e.png"}}]);