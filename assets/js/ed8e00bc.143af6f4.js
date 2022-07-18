"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2847],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(665),o=n(40151),i=(n(59496),n(49613)),a=["components"],c={},u="\u7d2f\u79ef\u5e03\u5c40\u504f\u79fb",l={unversionedId:"optimize/cls",id:"optimize/cls",title:"\u7d2f\u79ef\u5e03\u5c40\u504f\u79fb",description:"\u5b9a\u4e49",source:"@site/fe/optimize/cls.md",sourceDirName:"optimize",slug:"/optimize/cls",permalink:"/study-notes/fe/optimize/cls",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1655125809,formattedLastUpdatedAt:"Jun 13, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"concurrent",permalink:"/study-notes/fe/node/concurrent"},next:{title:"\u9996\u5c4f\u4f18\u5316",permalink:"/study-notes/fe/optimize/first-reload"}},p={},s=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7d2f\u79ef\u5e03\u5c40\u504f\u79fb"},"\u7d2f\u79ef\u5e03\u5c40\u504f\u79fb"),(0,i.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,i.kt)("p",null,"\u7d2f\u79ef\u5e03\u5c40\u504f\u79fb (CLS) \u662f\u6d4b\u91cf\u89c6\u89c9\u7a33\u5b9a\u6027\u7684\u4e00\u4e2a\u4ee5\u7528\u6237\u4e3a\u4e2d\u5fc3\u7684\u91cd\u8981\u6307\u6807\uff0c\u56e0\u4e3a\u8be5\u9879\u6307\u6807\u6709\u52a9\u4e8e\u91cf\u5316\u7528\u6237\u7ecf\u5386\u610f\u5916\u5e03\u5c40\u504f\u79fb\u7684\u9891\u7387\uff0c\u8f83\u4f4e\u7684 CLS \u6709\u52a9\u4e8e\u786e\u4fdd\u4e00\u4e2a\u9875\u9762\u662f\u4ee4\u4eba\u6109\u60a6\u7684\u3002"),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.dev/i18n/zh/cls/"},"Cumulative Layout Shift \u7d2f\u79ef\u5e03\u5c40\u504f\u79fb (CLS)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.dev/i18n/zh/optimize-cls/"},"\u4f18\u5316 Cumulative Layout Shift \u7d2f\u79ef\u5e03\u5c40\u504f\u79fb")))}d.isMDXComponent=!0}}]);