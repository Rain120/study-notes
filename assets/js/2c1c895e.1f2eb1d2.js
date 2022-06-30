"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6395],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(r),f=a,k=s["".concat(u,".").concat(f)]||s[f]||c[f]||l;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},36195:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=r(45443),a=r(13010),l=(r(59496),r(49613)),i=["components"],p={},u="\u9996\u5c4f\u4f18\u5316",o={unversionedId:"optimize/first-reload",id:"optimize/first-reload",title:"\u9996\u5c4f\u4f18\u5316",description:"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177",source:"@site/fe/optimize/first-reload.md",sourceDirName:"optimize",slug:"/optimize/first-reload",permalink:"/study-notes/fe/optimize/first-reload",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647059193,formattedLastUpdatedAt:"3/12/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u7d2f\u79ef\u5e03\u5c40\u504f\u79fb",permalink:"/study-notes/fe/optimize/cls"},next:{title:"\u6027\u80fd\u6307\u6807",permalink:"/study-notes/fe/optimize/performance"}},m={},c=[{value:"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177",id:"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177",level:2},{value:"\u9996\u5c4f\u6027\u80fd\u6307\u6807",id:"\u9996\u5c4f\u6027\u80fd\u6307\u6807",level:2},{value:"\u4f18\u5316\u7b56\u7565",id:"\u4f18\u5316\u7b56\u7565",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],s={toc:c};function f(e){var t=e.components,p=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9996\u5c4f\u4f18\u5316"},"\u9996\u5c4f\u4f18\u5316"),(0,l.kt)("h2",{id:"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177"},"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Network"),(0,l.kt)("li",{parentName:"ul"},"Performance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/lighthouse/"},"Lighthouse"))),(0,l.kt)("h2",{id:"\u9996\u5c4f\u6027\u80fd\u6307\u6807"},"\u9996\u5c4f\u6027\u80fd\u6307\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u767d\u5c4f\u65f6\u95f4\n\u4ece\u8f93\u5165\u7f51\u5740\u5230\u6d4f\u89c8\u5668\u5f00\u59cb\u6e32\u67d3\u5185\u5bb9\u7684\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u9996\u5c4f\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u52a0\u8f7d\u65f6\u95f4"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ea4\u4e92\u65f6\u95f4(TTI)\n\u7528\u6237\u7b2c\u4e00\u6b21\u53ef\u4ee5\u548c\u754c\u9762\u8fdb\u884c\u4ea4\u4e92\u7684\u65f6\u95f4")),(0,l.kt)("h1",{id:"\u524d\u7aef\u5e94\u7528\u52a0\u8f7d\u901a\u5e38\u9700\u8981\u7ecf\u5386\u7684\u8fc7\u7a0b"},"\u524d\u7aef\u5e94\u7528\u52a0\u8f7d\u901a\u5e38\u9700\u8981\u7ecf\u5386\u7684\u8fc7\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"browser-first-page.png",src:r(97860).Z,width:"3200",height:"1932"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"first-load.png",src:r(7092).Z,width:"1191",height:"321"})),(0,l.kt)("h2",{id:"\u4f18\u5316\u7b56\u7565"},"\u4f18\u5316\u7b56\u7565"),(0,l.kt)("p",null,"\u6839\u636e\u524d\u7aef\u5e94\u7528\u52a0\u8f7d\u6d41\u7a0b\uff0c\u5e38\u7528\u7684\u4f18\u5316\u65b9\u6848\u5982\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"webView \u521d\u59cb\u5316"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"App \u9996\u6b21\u6253\u5f00\u65f6\uff0c\u9ed8\u8ba4\u7531 App \u521d\u59cb\u5316\u4e00\u4e2a\u6d4f\u89c8\u5668\u5185\u6838"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u91cd\u94fe\u63a5"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea\u68c0 nginx \u4e0a rewrite \u6b21\u6570\u662f\u5426\u8fc7\u591a\uff0c\u68c0\u67e5\u9875\u9762\u6709\u65e0301\u3001302\u7684\u72b6\u51b5\uff0c\u907f\u514d\u65e0\u610f\u4e49\u7684\u91cd\u5b9a\u5411"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DNS\uff0c\u9879\u76ee\u8d44\u6e90\u57fa\u4e8e\u516c\u53f8\u7684 CDN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CDN \u9884\u70ed",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u628a\u8d44\u6e90\u4ece\u6e90\u7ad9\u63a8\u9001\u5230 CDN \u8282\u70b9\uff0c\u907f\u514d CDN \u56de\u6e90"))),(0,l.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u57df\u540d\u4e0e\u5ba2\u6237\u7aef\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},"DNS prefetch",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728 html \u4e2d\u6dfb\u52a0 dns-prefetch \u76f8\u5173\u4ee3\u7801\uff0c\u89e3\u51b3 DNS \u89e3\u6790\u5ef6\u8fdf"))),(0,l.kt)("li",{parentName:"ul"},"gzip & http2",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u6587\u4ef6\u5927\u5c0f\u8fdb\u884c\u538b\u7f29\uff0c\u540c\u65f6\u91c7\u7528\u4e8c\u8fdb\u5236\u683c\u5f0f\u4f20\u8f93\u6570\u636e"))),(0,l.kt)("li",{parentName:"ul"},"\u5408\u7406\u5229\u7528\u6d4f\u89c8\u5668\u7f13\u5b58"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ee3\u7801\u5c42\u9762"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"tree shaking \u4f18\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u8def\u7531\u7684\u61d2\u52a0\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u5e38\u7528\u7684\u5e93\u5355\u72ec\u6253\u5305"),(0,l.kt)("li",{parentName:"ul"},"\u6d3b\u7528\u672c\u5730\u7f13\u5b58",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6bd4\u5982\u5904\u7406\u7701\u5e02\u533a\u9009\u62e9\u7684\u65f6\u5019\uff0clocalStorage\u7f13\u5b58\u5230\u672c\u5730"))),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u76f8\u5e94\u901f\u5ea6\u7684\u63d0\u5347"),(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d DOM \u5c42\u7ea7\u8fc7\u6df1"),(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u5c11\u7684\u91cd\u6392\u91cd\u7ed8"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5347\u7ea7\u5230 WKwebview \u5185\u6838")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u61d2\u6267\u884c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9875\u9762\u9884\u7f13\u5b58")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7f13\u5b58\u7b56\u7565")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SSR"))),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6949896020788690958"},"\ud83d\udc2211s\u5230\u26a11s\uff0c\u6027\u80fd\u4f18\u5316\u4e4b\u9996\u5c4f\u52a0\u8f7d\ud83d\ude80")))}f.isMDXComponent=!0},97860:function(e,t,r){t.Z=r.p+"assets/images/browser-first-page-f898ed2a2ff3f0bfb4137c228e2a9f2a.png"},7092:function(e,t,r){t.Z=r.p+"assets/images/first-load-7eddb04767c60d774f945a61b1f1b12d.png"}}]);