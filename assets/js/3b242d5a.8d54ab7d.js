"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2807],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,y=m["".concat(s,".").concat(f)]||m[f]||c[f]||l;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5695:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});n(59496);var r=n(49613);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},i="\u4e00\u4e9b\u5c0f\u7684\u77e5\u8bc6\u70b9",s={unversionedId:"promise/little-knowledge",id:"promise/little-knowledge",title:"\u4e00\u4e9b\u5c0f\u7684\u77e5\u8bc6\u70b9",description:"Promise",source:"@site/fe/promise/little-knowledge.md",sourceDirName:"promise",slug:"/promise/little-knowledge",permalink:"/study-notes/fe/promise/little-knowledge",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643879380,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5b9e\u73b0Promise",permalink:"/study-notes/fe/promise/implement"},next:{title:"Vue2",permalink:"/study-notes/fe/vue/lifecycle/vue2"}},u={},p=[{value:"Promise",id:"promise",level:2},{value:"async await",id:"async-await",level:2}],c={toc:p};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"\u4e00\u4e9b\u5c0f\u7684\u77e5\u8bc6\u70b9"}),"\u4e00\u4e9b\u5c0f\u7684\u77e5\u8bc6\u70b9"),(0,r.kt)("h2",o({},{id:"promise"}),"Promise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Promise"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Promise\u7684\u72b6\u6001\u4e00\u65e6\u4fee\u6539\u5c31\u65e0\u6cd5\u6539\u53d8"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"then"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"then \u51fd\u6570\u4e2d\u7684\u53c2\u6570\u671f\u5f85\u7684\u662f\u51fd\u6570\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u5982\u679c\u4e0d\u662f\u51fd\u6570\u7684\u8bdd\u4f1a\u53d1\u751f\u900f\u4f20"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"Promise.resolve(1)\n  .then(2)\n  .then(Promise.resolve(3))\n  .catch(4)\n  .then(res => {\n      console.log(res); // 1\n  });\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"finally"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u7ba1 Promise \u7684\u72b6\u6001\u662f resolve \u8fd8\u662f rejected\uff0cfinally \u90fd\u4f1a\u6267\u884c\uff0c\u5b83\u7684\u56de\u8c03\u51fd\u6570\u662f\u63a5\u6536\u4e0d\u5230 Promise \u7684\u7ed3\u679c\u7684")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const p1 = new Promise((resolve) => {\n  resolve('resolve');\n}).then(res => {\n  console.log(res);\n\n  setTimeout(() => {\n    console.log(p1); // Promise\xa0{<fulfilled>: undefined}\n  }, 1000)\n}).finally(res => {\n  console.log('finally', res); // finally undefined\n});\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"finally \u5982\u679c\u6ca1\u6709\u62a5\u9519\uff0cp1\u7684\u7ed3\u679c\u662f finally \u4e0a\u4e00\u4e2a then \u7684\u7ed3\u679c")))),(0,r.kt)("h2",o({},{id:"async-await"}),"async await"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"async \u51fd\u6570\u4e2d await \u7684 new Promise \u8981\u662f\u6ca1\u6709\u8fd4\u56de\u503c\u7684\u8bdd\u5219\u4e0d\u6267\u884c\u540e\u9762\u7684\u5185\u5bb9")))}m.isMDXComponent=!0}}]);