"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3485],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91901:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={},s=void 0,l={unversionedId:"javascript/es-study/import",id:"javascript/es-study/import",isDocsHomePage:!1,title:"import",description:"\u524d\u8a00",source:"@site/fe/javascript/es-study/import.md",sourceDirName:"javascript/es-study",slug:"/javascript/es-study/import",permalink:"/study-notes/fe/javascript/es-study/import",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638186201,formattedLastUpdatedAt:"11/29/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"import-full",permalink:"/study-notes/fe/javascript/es-study/import-full"},next:{title:"map-weakmap-set-weakset",permalink:"/study-notes/fe/javascript/es-study/map-weakmap-set-weakset"}},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:4},{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",children:[],level:4},{value:"import \u76f8\u5173",id:"import-\u76f8\u5173",children:[],level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:4}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053 ",(0,o.kt)("inlineCode",{parentName:"p"},"Javescript")," \u662f\u4e00\u95e8\u811a\u672c\u8bed\u8a00\uff0c\u5b83\u672c\u8eab\u662f\u7528\u6765\u6267\u884c\u811a\u672c\u4efb\u52a1\u7684\uff0c \u968f\u7740 ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u7684\u8fc5\u901f\u53d1\u5c55\uff0c\u6211\u4eec\u9700\u8981\u8fd0\u884c\u7684\u573a\u666f\u4e5f\u6108\u53d1\u7684\u590d\u6742\uff0c\u4e3a\u4e86\u4f7f\u7528\u8fd9\u79cd\u573a\u666f\uff0c\u6709\u5fc5\u8981\u8003\u8651 ",(0,o.kt)("strong",{parentName:"p"},"\u5c06 JavaScript \u7a0b\u5e8f\u62c6\u5206\u4e3a\u53ef\u6309\u9700\u5bfc\u5165\u7684\u5355\u72ec\u6a21\u5757\u7684\u673a\u5236"),"\uff0c \u8fd9\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},"\u6a21\u5757\u5316"),"\u7684\u8d77\u56e0\u3002"),(0,o.kt)("h4",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/module"},"\u6a21\u5757\u5316\u65b9\u6848"))),(0,o.kt)("h4",{id:"import-\u76f8\u5173"},"import \u76f8\u5173"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/import-full"},"import \u5168\u91cf\u5f15\u5165")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/import-async"},"import \u5f02\u6b65\u5f15\u5165"))),(0,o.kt)("h4",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules"},"JavaScript modules \u6a21\u5757")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export"},"export import type")))}d.isMDXComponent=!0}}]);