"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3576],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=n,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},55210:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var o=r(87462),n=r(63366),l=(r(67294),r(3905)),a=["components"],i={},c="\u6d4f\u89c8\u5668",d={unversionedId:"debugger/how-to-debug/browser",id:"debugger/how-to-debug/browser",title:"\u6d4f\u89c8\u5668",description:"\u8c03\u8bd5\u9875\u9762\u7684DOM\u548cHTML",source:"@site/fe/debugger/how-to-debug/browser.md",sourceDirName:"debugger/how-to-debug",slug:"/debugger/how-to-debug/browser",permalink:"/study-notes/fe/debugger/how-to-debug/browser",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646902378,formattedLastUpdatedAt:"3/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4e00\u4e9b\u8c03\u8bd5\u6280\u5de7",permalink:"/study-notes/fe/debugger/how-to-debug/a-few-debug-skills"},next:{title:"\u63a7\u5236\u53f0",permalink:"/study-notes/fe/debugger/how-to-debug/console"}},p=[{value:"\u8c03\u8bd5\u9875\u9762\u7684DOM\u548cHTML",id:"\u8c03\u8bd5\u9875\u9762\u7684dom\u548chtml",children:[],level:2},{value:"\u8c03\u8bd5\u9875\u9762\u6837\u5f0fCSS",id:"\u8c03\u8bd5\u9875\u9762\u6837\u5f0fcss",children:[],level:2},{value:"\u8c03\u8bd5\u9875\u9762JavaScript\u53caLog\u65e5\u5fd7",id:"\u8c03\u8bd5\u9875\u9762javascript\u53calog\u65e5\u5fd7",children:[],level:2},{value:"\u65ad\u70b9\u8c03\u8bd5",id:"\u65ad\u70b9\u8c03\u8bd5",children:[],level:2},{value:"\u7f51\u7edcNetwork\u67e5\u770b\u9875\u9762\u8bf7\u6c42\u4e0e\u5206\u6790",id:"\u7f51\u7edcnetwork\u67e5\u770b\u9875\u9762\u8bf7\u6c42\u4e0e\u5206\u6790",children:[],level:2},{value:"\u8c03\u8bd5\u5ba2\u6237\u7aef\u5b58\u50a8",id:"\u8c03\u8bd5\u5ba2\u6237\u7aef\u5b58\u50a8",children:[],level:2},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",children:[{value:"\u524d\u7aef\u5de5\u5177",id:"\u524d\u7aef\u5de5\u5177",children:[],level:3},{value:"\u63a5\u53e3\u6d4b\u8bd5",id:"\u63a5\u53e3\u6d4b\u8bd5",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],u={toc:p};function s(e){var t=e.components,i=(0,n.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6d4f\u89c8\u5668"},"\u6d4f\u89c8\u5668"),(0,l.kt)("h2",{id:"\u8c03\u8bd5\u9875\u9762\u7684dom\u548chtml"},"\u8c03\u8bd5\u9875\u9762\u7684DOM\u548cHTML"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"devtool-dom",src:r(86001).Z})),(0,l.kt)("h2",{id:"\u8c03\u8bd5\u9875\u9762\u6837\u5f0fcss"},"\u8c03\u8bd5\u9875\u9762\u6837\u5f0fCSS"),(0,l.kt)("h2",{id:"\u8c03\u8bd5\u9875\u9762javascript\u53calog\u65e5\u5fd7"},"\u8c03\u8bd5\u9875\u9762JavaScript\u53caLog\u65e5\u5fd7"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"devtool-sources.png",src:r(24409).Z})),(0,l.kt)("h2",{id:"\u65ad\u70b9\u8c03\u8bd5"},"\u65ad\u70b9\u8c03\u8bd5"),(0,l.kt)("h2",{id:"\u7f51\u7edcnetwork\u67e5\u770b\u9875\u9762\u8bf7\u6c42\u4e0e\u5206\u6790"},"\u7f51\u7edcNetwork\u67e5\u770b\u9875\u9762\u8bf7\u6c42\u4e0e\u5206\u6790"),(0,l.kt)("h2",{id:"\u8c03\u8bd5\u5ba2\u6237\u7aef\u5b58\u50a8"},"\u8c03\u8bd5\u5ba2\u6237\u7aef\u5b58\u50a8"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"devtool-storage.png",src:r(99620).Z})),(0,l.kt)("h2",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,l.kt)("p",null,"Chrome \u63d2\u4ef6: Chrome \u952e\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"chrome://extensions/")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"},"React")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg"},"Vue")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=zh-CN"},"Redux")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/mobx-developer-tools/pfgnfdagidkfgccljigdamigbcnndkod"},"Mobx")),(0,l.kt)("h3",{id:"\u524d\u7aef\u5de5\u5177"},"\u524d\u7aef\u5de5\u5177"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/fehelper%E5%89%8D%E7%AB%AF%E5%8A%A9%E6%89%8B/pkgccpejnmalmdinmhkkfafefagiiiad"},"FeHelper(\u524d\u7aef\u52a9\u624b)")),(0,l.kt)("h3",{id:"\u63a5\u53e3\u6d4b\u8bd5"},"\u63a5\u53e3\u6d4b\u8bd5"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop"},"Postman")),(0,l.kt)("p",null,"\u66f4\u591a\u63d2\u4ef6\u8be6\u89c1: here // TODO: \u7b49\u65b0\u7248\u672c"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/"},"Chrome DevTools")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.imooc.com/learn/1164"},"Chrome DevTools\u5f00\u53d1\u8005\u5de5\u5177\u8c03\u8bd5\u6307\u5357")))}s.isMDXComponent=!0},86001:function(e,t,r){t.Z=r.p+"assets/images/devtool-dom-7b9db4572b96953af3c91f5c4f498bc7.gif"},24409:function(e,t,r){t.Z=r.p+"assets/images/devtool-sources-c9df53a355dcc2d00ab5fbac390f2936.png"},99620:function(e,t,r){t.Z=r.p+"assets/images/devtool-storage-a5286b919147d3999449c9d3f6ceb0ca.png"}}]);