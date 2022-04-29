"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[9072],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19159:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var n=r(62848),a=r(79213),o=(r(59496),r(49613)),i=["components"],p={sidebar_position:1},s="import \u5173\u952e\u5b57",u={unversionedId:"javascript/es-study/import/index",id:"javascript/es-study/import/index",title:"import \u5173\u952e\u5b57",description:"\u524d\u8a00",source:"@site/fe/javascript/es-study/import/index.md",sourceDirName:"javascript/es-study/import",slug:"/javascript/es-study/import/",permalink:"/study-notes/fe/javascript/es-study/import/",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"\u76ee\u5f55",permalink:"/study-notes/fe/javascript/es-study/es-guide"},next:{title:"\u5f02\u6b65\u5f15\u5165",permalink:"/study-notes/fe/javascript/es-study/import/import-async"}},l={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",level:2},{value:"import \u76f8\u5173",id:"import-\u76f8\u5173",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-\u5173\u952e\u5b57"},"import \u5173\u952e\u5b57"),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053 ",(0,o.kt)("inlineCode",{parentName:"p"},"Javescript")," \u662f\u4e00\u95e8\u811a\u672c\u8bed\u8a00\uff0c\u5b83\u672c\u8eab\u662f\u7528\u6765\u6267\u884c\u811a\u672c\u4efb\u52a1\u7684\uff0c \u968f\u7740 ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u7684\u8fc5\u901f\u53d1\u5c55\uff0c\u6211\u4eec\u9700\u8981\u8fd0\u884c\u7684\u573a\u666f\u4e5f\u6108\u53d1\u7684\u590d\u6742\uff0c\u4e3a\u4e86\u4f7f\u7528\u8fd9\u79cd\u573a\u666f\uff0c\u6709\u5fc5\u8981\u8003\u8651 ",(0,o.kt)("strong",{parentName:"p"},"\u5c06 JavaScript \u7a0b\u5e8f\u62c6\u5206\u4e3a\u53ef\u6309\u9700\u5bfc\u5165\u7684\u5355\u72ec\u6a21\u5757\u7684\u673a\u5236"),"\uff0c \u8fd9\u5c31\u662f",(0,o.kt)("strong",{parentName:"p"},"\u6a21\u5757\u5316"),"\u7684\u8d77\u56e0\u3002"),(0,o.kt)("h2",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/module"},"\u6a21\u5757\u5316\u65b9\u6848"))),(0,o.kt)("h2",{id:"import-\u76f8\u5173"},"import \u76f8\u5173"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/import/import-full"},"import \u5168\u91cf\u5f15\u5165")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/import/import-async"},"import \u5f02\u6b65\u5f15\u5165"))),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules"},"JavaScript modules \u6a21\u5757")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export"},"export import type")))}m.isMDXComponent=!0}}]);