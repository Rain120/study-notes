"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2397],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(59496);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(r),f=p,d=y["".concat(s,".").concat(f)]||y[f]||l[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7849:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var n=r(62848),p=r(79213),i=(r(59496),r(49613)),a=["components"],o={sidebar_position:1},s="\u76ee\u5f55",c={unversionedId:"typescript/guide",id:"typescript/guide",title:"\u76ee\u5f55",description:"Typescript \u6307\u5bfc\u4e66",source:"@site/fe/typescript/guide.md",sourceDirName:"typescript",slug:"/typescript/guide",permalink:"/study-notes/fe/typescript/guide",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"setState",permalink:"/study-notes/fe/react/setState"},next:{title:"\u57fa\u7840\u914d\u7f6e",permalink:"/study-notes/fe/typescript/base"}},u={},l=[{value:"Typescript \u6307\u5bfc\u4e66",id:"typescript-\u6307\u5bfc\u4e66",level:2}],y={toc:l};function f(e){var t=e.components,r=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,i.kt)("h2",{id:"typescript-\u6307\u5bfc\u4e66"},(0,i.kt)("a",{parentName:"h2",href:"https://rain120.github.io/typescript-guide/"},"Typescript \u6307\u5bfc\u4e66")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8d39\u65f6\u4e24\u4e2a\u591a\u6708, \u7ec8\u4e8e\u5b8c\u6210\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"Typescript\u6307\u5bfc\u4e66")," ",(0,i.kt)("inlineCode",{parentName:"p"},"90%"),"\u7684\u57fa\u7840\u77e5\u8bc6, \u9700\u8981\u66f4\u591a\u5b9e\u8df5")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/base"},"Typescript \u57fa\u7840\u5165\u95e8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/qa"},"Typescript \u95ee\u9898 & \u89e3\u91ca")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/tips"},"Typescript \u5f00\u53d1\u5c0f\u5efa\u8bae")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/ts-eslint-qa"},"Typescript + Eslint \u914d\u7f6eQa")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/quicktype"},"Typescript \u5feb\u901f\u5b9a\u4e49QuickType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/taptypes"},"Typescript \u5feb\u901f\u5b9a\u4e49 tapTypes \u5b9e\u8df5"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/study-notes/fe/typescript/json-schema"},"JSON Schema \u77e5\u8bc6\u6d41"))))))}f.isMDXComponent=!0}}]);