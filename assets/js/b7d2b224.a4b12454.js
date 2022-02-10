"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4636],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},l="\u5783\u573e\u56de\u6536",p={unversionedId:"javascript/key-concept/garbage-collection",id:"javascript/key-concept/garbage-collection",title:"\u5783\u573e\u56de\u6536",description:"TODO: \u63a2\u7d22ing",source:"@site/fe/javascript/key-concept/garbage-collection.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/garbage-collection",permalink:"/study-notes/fe/javascript/key-concept/garbage-collection",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1644461031,formattedLastUpdatedAt:"2/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"extends \u7ee7\u627f",permalink:"/study-notes/fe/javascript/key-concept/extends"},next:{title:"instanceof",permalink:"/study-notes/fe/javascript/key-concept/instanceof"}},s=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[],level:2},{value:"\u53ef\u8fbe\u6027",id:"\u53ef\u8fbe\u6027",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5783\u573e\u56de\u6536"},"\u5783\u573e\u56de\u6536"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"TODO: \u63a2\u7d22ing"))),(0,o.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u91ca\u653e\u90a3\u4e9b",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u518d\u7ee7\u7eed\u4f7f\u7528\u7684\u53d8\u91cf"),"\u6240\u5176\u5360\u7528\u7684\u5185\u5b58\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5783\u573e\u6536\u96c6\u5668",(0,o.kt)("inlineCode",{parentName:"strong"},"(GC)"))," \u4f1a\u6309\u7167\u56fa\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5468\u671f\u6027\u5730\u6267\u884c\u8fd9\u4e00\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u53ef\u8fbe\u6027"},"\u53ef\u8fbe\u6027"),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"MDN \u5185\u5b58\u7ba1\u7406")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/garbage-collection"},"garbage-collection")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/864516/what-is-javascript-garbage-collection"},"what-is-javascript-garbage-collection")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dev.to/abhilashiam/garbage-collection-in-javascript-126a"},"garbage-collection-in-javascript")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2017/04/memory-leak.html"},"JavaScript \u5185\u5b58\u6cc4\u6f0f\u6559\u7a0b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://time.geekbang.org/column/intro/100048001"},"\u56fe\u89e3 Google V8")))}m.isMDXComponent=!0}}]);