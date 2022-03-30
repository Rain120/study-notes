"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[7889],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=d(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77556:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={},p="\u6027\u80fd\u6307\u6807",d={unversionedId:"optimize/performance",id:"optimize/performance",title:"\u6027\u80fd\u6307\u6807",description:"load.png",source:"@site/fe/optimize/performance.md",sourceDirName:"optimize",slug:"/optimize/performance",permalink:"/study-notes/fe/optimize/performance",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648650815,formattedLastUpdatedAt:"3/30/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u9996\u5c4f\u4f18\u5316",permalink:"/study-notes/fe/optimize/first-reload"},next:{title:"\u5b9e\u73b0Promise",permalink:"/study-notes/fe/promise/implement"}},u={},m=[{value:"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177",id:"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177",level:3},{value:"polyfill CDN",id:"polyfill-cdn",level:3}],c={toc:m};function s(t){var e=t.components,i=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6027\u80fd\u6307\u6807"},"\u6027\u80fd\u6307\u6807"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"load.png",src:n(25178).Z,width:"2582",height:"970"})),(0,l.kt)("p",null,"\u6027\u80fd\u7edf\u8ba1SDK\u7684\u6570\u636e\u6765\u81ea\u4e8e\u6d4f\u89c8\u5668\u63d0\u4f9b\u7684performance\uff0cperformance\u4e2d\u5404\u4e2a\u4e2d\u95f4\u8fc7\u7a0b\u5982\u4e0a\u56fe\uff0c\u76ee\u524d\u57fa\u4e8e\u4ee5\u4e0a\u8ba1\u7b97\u51fa\u6765\u7684\u6307\u6807\u6709\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4ee3\u7801\u89e3\u91ca"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6587\u5b57\u89e3\u91ca"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5177\u5907\u53c2\u8003\u610f\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tNavigation"),(0,l.kt)("td",{parentName:"tr",align:null},"domainLookupStart - navigationStart"),(0,l.kt)("td",{parentName:"tr",align:null},"AppCache\u4e4b\u524d\u7684\u8017\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tDNS"),(0,l.kt)("td",{parentName:"tr",align:null},"domainLookupEnd - domainLookupStart"),(0,l.kt)("td",{parentName:"tr",align:null},"DNS\u533a\u57df\u8017\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0cDNS\u67e5\u8be2\u65f6\u95f4\uff0c\u53d7\u7f51\u7edc\u5f71\u54cd\u5927\uff0c\u5e94\u8be5\u4e3a\u5173\u952e\u6307\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tTcp"),(0,l.kt)("td",{parentName:"tr",align:null},"connectEnd - connectStart"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP\u533a\u57df\u8017\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0cTCP\u8fde\u63a5\u65f6\u95f4\uff0c\u53d7\u7f51\u7edc\u5f71\u54cd\u5927\uff0c\u5e94\u8be5\u4e3a\u5173\u952e\u6307\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tRequest"),(0,l.kt)("td",{parentName:"tr",align:null},"responseStart - requestStart"),(0,l.kt)("td",{parentName:"tr",align:null},"Reqeust\u533a\u57df\u8017\u65f6\uff08TTFB\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0cTTFB\u65f6\u95f4\uff08\u9996\u5b57\u8282\u7b49\u5f85\u65f6\u95f4\uff09\uff0c\u53d7\u7f51\u7edc\u5f71\u54cd\u5927\uff0c\u5e94\u8be5\u4e3a\u5173\u952e\u6307\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tResponse"),(0,l.kt)("td",{parentName:"tr",align:null},"responseEnd - responseStart"),(0,l.kt)("td",{parentName:"tr",align:null},"Response\u533a\u57df\u8017\u65f6\uff08Content Download\u65f6\u95f4\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0c\u8d44\u6e90\u4e0b\u8f7d\u65f6\u95f4\uff0c\u53d7\u7f51\u7edc\u5f71\u54cd\u5927\uff0c\u5e94\u4e3a\u5173\u952e\u6307\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tDomComplete"),(0,l.kt)("td",{parentName:"tr",align:null},"domComplete - domLoading"),(0,l.kt)("td",{parentName:"tr",align:null},"Processing\u533a\u57df\u8017\u65f6\u4e0eResponse\u4e2d\u90e8\u5206\u8017\u65f6\u4e4b\u548c\uff0c\u56e0\u4e3adomLoading\u53ef\u80fd\u53d1\u751f\u5728Response\u533a\u57df\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0cdom\u6e32\u67d3\u65f6\u95f4\uff0c\u53d7\u524d\u7aef\u9875\u9762\u7684\u4ee3\u7801\u91cf\u3001\u4ee3\u7801\u4e66\u5199\u65b9\u5f0f\u5f71\u54cd\u5927\uff0c\u662f\u8861\u91cf\u9875\u9762\u6027\u80fd\u9700\u8981\u5173\u6ce8\u7684\u4e00\u4e2a\u6307\u6807\uff0c\u5e94\u8be5\u4e3a\u5173\u952e\u6307\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tLoad"),(0,l.kt)("td",{parentName:"tr",align:null},"loadEventEnd - loadEventStart"),(0,l.kt)("td",{parentName:"tr",align:null},"Load\u533a\u57df\uff08onload\u89e6\u53d1\u65f6\u95f4\uff0c\u5982\u679conload\u51fd\u6570\u4e2d\u6709\u540c\u6b65\u8017\u65f6\u64cd\u4f5c\uff0c\u4f1a\u5f71\u54cd\u8fd9\u90e8\u5206\u8017\u65f6\uff0c\u4e00\u822c\u5f88\u77ed\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u65f6\u95f4\u4e00\u822c\u5f88\u77ed\uff0c\u4e0d\u5177\u5907\u53c2\u8003\u610f\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tDomTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"domComplete - navigationStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u5f00\u59cb\u5230dom\u6e32\u67d3\u5b8c\u6210\u8017\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u4e0e\u524d\u9762\u7684\u6307\u6807\u6709\u91cd\u5408\uff0c\u4e0d\u5177\u5907\u53c2\u8003\u610f\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tWhiteScreen"),(0,l.kt)("td",{parentName:"tr",align:null},"responseStart - navigationStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u5f00\u59cb\u5230\u8d44\u6e90\u4e0b\u8f7d\u5b8c\u6210\u8017\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff0c\u7ecf\u8fc7\u5b9e\u9a8c\uff0c\u8d44\u6e90\u4e0b\u8f7d\u5b8c\u6210\uff0c\u9875\u9762\u5e76\u975e\u5c31\u6709\u5185\u5bb9\uff0c\u8fd9\u4e2a\u5b57\u6bb5\u5224\u65ad\u662f\u4e0d\u51c6\u786e\u7684\uff0c\u6240\u4ee5\u4e0d\u5177\u5907\u53c2\u8003\u610f\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tLoadTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"loadEventEnd - navigationStart"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u603b\u8017\u65f6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0c\u8fd9\u4e2a\u662f\u9875\u9762\u603b\u8017\u65f6\uff0c\u5c5e\u4e8e\u5173\u952e\u6307\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tViewTime"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u70b9\u51fb\u5230\u9875\u9762onload\u5b8c\u6210\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\uff0c\u8fd9\u4e2a\u662f\u7528\u6237\u7ef4\u5ea6\u7684\u6307\u6807")))),(0,l.kt)("h3",{id:"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177"},"\u6027\u80fd\u68c0\u6d4b\u5de5\u5177"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pagespeed.web.dev/"},"https://pagespeed.web.dev/")),(0,l.kt)("h3",{id:"polyfill-cdn"},"polyfill CDN"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"https://polyfill.io/v3/url-builder/")))}s.isMDXComponent=!0},25178:function(t,e,n){e.Z=n.p+"assets/images/load-d40199f7feb8a966233a54fa460d3780.png"}}]);