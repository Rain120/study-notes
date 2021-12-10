"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2397],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(r),f=i,d=y["".concat(s,".").concat(f)]||y[f]||l[f]||p;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,a=new Array(p);a[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},21821:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return y}});var n=r(87462),i=r(63366),p=(r(67294),r(3905)),a=["components"],o={sidebar_position:1},s="\u76ee\u5f55",c={unversionedId:"typescript/guide",id:"typescript/guide",title:"\u76ee\u5f55",description:"Typescript \u6307\u5bfc\u4e66",source:"@site/fe/typescript/guide.md",sourceDirName:"typescript",slug:"/typescript/guide",permalink:"/study-notes/fe/typescript/guide",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1639103785,formattedLastUpdatedAt:"12/10/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"BrowserRouter\u548cHashRouter\u7684\u533a\u522b?",permalink:"/study-notes/fe/react/router/router-diff-with-browser-and-hash"},next:{title:"\u57fa\u7840\u914d\u7f6e",permalink:"/study-notes/fe/typescript/base"}},u=[{value:"Typescript \u6307\u5bfc\u4e66",id:"typescript-\u6307\u5bfc\u4e66",children:[],level:2}],l={toc:u};function y(e){var t=e.components,r=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,p.kt)("h2",{id:"typescript-\u6307\u5bfc\u4e66"},(0,p.kt)("a",{parentName:"h2",href:"https://rain120.github.io/typescript-guide/"},"Typescript \u6307\u5bfc\u4e66")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u8d39\u65f6\u4e24\u4e2a\u591a\u6708, \u7ec8\u4e8e\u5b8c\u6210\u4e86 ",(0,p.kt)("strong",{parentName:"p"},"Typescript\u6307\u5bfc\u4e66")," ",(0,p.kt)("inlineCode",{parentName:"p"},"90%"),"\u7684\u57fa\u7840\u77e5\u8bc6, \u9700\u8981\u66f4\u591a\u5b9e\u8df5")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/base"},"Typescript \u57fa\u7840\u5165\u95e8")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/qa"},"Typescript \u95ee\u9898 & \u89e3\u91ca")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/tips"},"Typescript \u5f00\u53d1\u5c0f\u5efa\u8bae")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/ts-eslint-qa"},"Typescript + Eslint \u914d\u7f6eQa")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/quicktype"},"Typescript \u5feb\u901f\u5b9a\u4e49QuickType")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/taptypes"},"Typescript \u5feb\u901f\u5b9a\u4e49 tapTypes \u5b9e\u8df5"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/json-schema"},"JSON Schema \u77e5\u8bc6\u6d41"))))))}y.isMDXComponent=!0}}]);