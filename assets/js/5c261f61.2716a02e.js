"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1793],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=u(n),d=l,h=s["".concat(o,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(h,i(i({ref:e},c),{},{components:n})):r.createElement(h,i({ref:e},c))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63784:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],p={},o="http1.0\u3001http1.1\u3001http2 \u7248\u672c\u5bf9\u6bd4",u={unversionedId:"http/version-compare",id:"http/version-compare",title:"http1.0\u3001http1.1\u3001http2 \u7248\u672c\u5bf9\u6bd4",description:"http 1.0",source:"@site/engineering/http/version-compare.md",sourceDirName:"http",slug:"/http/version-compare",permalink:"/study-notes/engineering/http/version-compare",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648021720,formattedLastUpdatedAt:"3/23/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"TCP",permalink:"/study-notes/engineering/http/tcp"},next:{title:"\u52a8\u6001\u5f15\u5165",permalink:"/study-notes/engineering/webpack/async-import"}},c={},m=[{value:"http 1.0",id:"http-10",level:2},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",level:3},{value:"http 1.1",id:"http-11",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9-1",level:3},{value:"http 2.0",id:"http-20",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9-1",level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9-2",level:3},{value:"HTTP 3.0",id:"http-30",level:2},{value:"\u4f18\u70b9",id:"\u4f18\u70b9-2",level:3}],s={toc:m};function d(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http10http11http2-\u7248\u672c\u5bf9\u6bd4"},"http1.0\u3001http1.1\u3001http2 \u7248\u672c\u5bf9\u6bd4"),(0,a.kt)("h2",{id:"http-10"},"http 1.0"),(0,a.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u590d\u7528\u8fde\u63a5\uff0c\u6bcf\u6b21\u8bf7\u6c42\u90fd\u9700\u8981TCP\u8fde\u63a5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u961f\u5934\u963b\u585e\uff0c\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u5fc5\u987b\u5728\u524d\u4e00\u4e2a\u8bf7\u6c42\u54cd\u5e94\u5230\u8fbe\u4e4b\u524d\u624d\u80fd\u53d1\u9001\uff0c\u5047\u8bbe\u524d\u4e00\u4e2a\u8bf7\u6c42\u54cd\u5e94\u4e00\u76f4\u4e0d\u5230\u8fbe\uff0c\u90a3\u4e48\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u5c31\u4e0d\u53d1\u9001\uff0c\u540e\u9762\u7684\u8bf7\u6c42\u5c31\u963b\u585e\u4e86\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u65ad\u70b9\u7eed\u4f20\uff0c\u6bcf\u6b21\u90fd\u4f1a\u4f20\u9001\u5168\u90e8\u7684\u9875\u9762\u548c\u6570\u636e\u3002")),(0,a.kt)("h2",{id:"http-11"},"http 1.1"),(0,a.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6301\u4e45\u8fde\u63a5\uff0c\u901a\u8fc7\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"Connection: keep-alive")," \u4fdd\u6301HTTP\u8fde\u63a5\u4e0d\u65ad"),(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u9053\u673a\u5236\uff0c\u540c\u4e00\u4e2aTCP\u8fde\u63a5\u91cc\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u540c\u65f6\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u65ad\u70b9\u7eed\u4f20, \u901a\u8fc7\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"Range")," \u6765\u5b9e\u73b0")),(0,a.kt)("h3",{id:"\u7f3a\u70b9-1"},"\u7f3a\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u901a\u8fc7\u7ba1\u9053\u4f20\u8f93\uff0c\u591a\u4e2a\u8bf7\u6c42\u540c\u65f6\u53d1\u9001\uff0c\u4f46\u662f\u4f1a\u51fa\u73b0 \u300c\u961f\u5934\u963b\u585e(Head-Of-Line Blocking)\u300d(\u524d\u4e00\u4e2a\u54cd\u5e94\u6162\uff0c\u540e\u9762\u7684\u8bf7\u6c42\u5c31\u6392\u961f\u7b49\u7740)\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u660e\u6587\u4f20\u8f93\uff0c\u4e0d\u5b89\u5168"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u670d\u52a1\u5668\u63a8\u9001"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\uff0c\u5934\u90e8\u5f00\u9500\u5de8\u5927\uff0c\u6bcf\u6b21\u8bf7\u6c42\u90fd\u8981\u53d1\u9001\u4e00\u4e2a\u65b0\u7684\u8bf7\u6c42\u5934")),(0,a.kt)("h2",{id:"http-20"},"http 2.0"),(0,a.kt)("h3",{id:"\u4f18\u70b9-1"},"\u4f18\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236\u5206\u5e27\uff0cheader \u548c data \u5206\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u8def\u590d\u7528\uff0c\u4f7f\u7528\u591a\u4e2a steam\uff0c\u6bcf\u4e2astream\u53c8\u5206\u5e27\u4f20\u8f93\uff0c\u4f7f\u5f97\u4e00\u4e2aTCP\u53ef\u4ee5\u5904\u7406\u591a\u4e2ahttp\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ul"},"\u5934\u90e8\u538b\u7f29\uff0c\u4e24\u7aef\u7ef4\u62a4\u4e00\u4e2a header\u7d22\u5f15\uff0c\u901a\u8fc7key\u5339\u914d"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u63a8\u9001")),(0,a.kt)("h3",{id:"\u7f3a\u70b9-2"},"\u7f3a\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TCP + TLS\u5efa\u7acb\u8fde\u63a5\u7684\u5ef6\u65f6"),(0,a.kt)("li",{parentName:"ul"},"TCP\u7684\u961f\u5934\u62e5\u585e\u5e76\u6ca1\u6709\u5f7b\u5e95\u89e3\u51b3"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u8def\u590d\u7528\u5bfc\u81f4\u670d\u52a1\u5668\u538b\u529b\u4e0a\u5347\uff0c\u5bb9\u6613\u8d85\u65f6")),(0,a.kt)("h2",{id:"http-30"},"HTTP 3.0"),(0,a.kt)("h3",{id:"\u4f18\u70b9-2"},"\u4f18\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Google\u7684QUIC\u534f\u8bae(UDP\u5b9e\u73b0\u7684)"),(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4e86 TCP \u4e09\u6b21\u63e1\u624b\uff0c\u4ee5\u53caTLS\u63e1\u624b\u7684\u65f6\u95f4")))}d.isMDXComponent=!0}}]);