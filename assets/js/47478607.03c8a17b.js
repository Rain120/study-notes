"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[9072],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96469:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],p={sidebar_position:1},s="import \u5173\u952e\u5b57",l={unversionedId:"javascript/es-study/import/index",id:"javascript/es-study/import/index",isDocsHomePage:!1,title:"import \u5173\u952e\u5b57",description:"\u524d\u8a00",source:"@site/fe/javascript/es-study/import/index.md",sourceDirName:"javascript/es-study/import",slug:"/javascript/es-study/import/index",permalink:"/study-notes/fe/javascript/es-study/import/index",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"static",permalink:"/study-notes/fe/javascript/es-study/static"},next:{title:"\u5f02\u6b65\u5f15\u5165",permalink:"/study-notes/fe/javascript/es-study/import/import-async"}},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",children:[],level:2},{value:"import \u76f8\u5173",id:"import-\u76f8\u5173",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"import-\u5173\u952e\u5b57"},"import \u5173\u952e\u5b57"),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053 ",(0,a.kt)("inlineCode",{parentName:"p"},"Javescript")," \u662f\u4e00\u95e8\u811a\u672c\u8bed\u8a00\uff0c\u5b83\u672c\u8eab\u662f\u7528\u6765\u6267\u884c\u811a\u672c\u4efb\u52a1\u7684\uff0c \u968f\u7740 ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u7684\u8fc5\u901f\u53d1\u5c55\uff0c\u6211\u4eec\u9700\u8981\u8fd0\u884c\u7684\u573a\u666f\u4e5f\u6108\u53d1\u7684\u590d\u6742\uff0c\u4e3a\u4e86\u4f7f\u7528\u8fd9\u79cd\u573a\u666f\uff0c\u6709\u5fc5\u8981\u8003\u8651 ",(0,a.kt)("strong",{parentName:"p"},"\u5c06 JavaScript \u7a0b\u5e8f\u62c6\u5206\u4e3a\u53ef\u6309\u9700\u5bfc\u5165\u7684\u5355\u72ec\u6a21\u5757\u7684\u673a\u5236"),"\uff0c \u8fd9\u5c31\u662f",(0,a.kt)("strong",{parentName:"p"},"\u6a21\u5757\u5316"),"\u7684\u8d77\u56e0\u3002"),(0,a.kt)("h2",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/module"},"\u6a21\u5757\u5316\u65b9\u6848"))),(0,a.kt)("h2",{id:"import-\u76f8\u5173"},"import \u76f8\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/import/import-full"},"import \u5168\u91cf\u5f15\u5165")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/es-study/import/import-async"},"import \u5f02\u6b65\u5f15\u5165"))),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules"},"JavaScript modules \u6a21\u5757")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export"},"export import type")))}d.isMDXComponent=!0}}]);