"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3901],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),h=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=h(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=h(n),c=r,u=d["".concat(p,".").concat(c)]||d[c]||k[c]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var h=2;h<i;h++)l[h]=n[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7571:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={},p="\u8def\u7531",h={unversionedId:"javascript/key-concept/router",id:"javascript/key-concept/router",isDocsHomePage:!1,title:"\u8def\u7531",description:"\u524d\u7f6e\u77e5\u8bc6",source:"@site/fe/javascript/key-concept/router.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/router",permalink:"/study-notes/fe/javascript/key-concept/router",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"\u539f\u578b\u94fe",permalink:"/study-notes/fe/javascript/key-concept/prototype-chain"},next:{title:"\u8bcd\u6cd5\u4f5c\u7528\u57df\u94fe\u3001\u51fd\u6570\u4f5c\u7528\u57df\u3001\u5757\u7ea7\u4f5c\u7528\u57df",permalink:"/study-notes/fe/javascript/key-concept/scope-chain"}},s=[{value:"\u524d\u7f6e\u77e5\u8bc6",id:"\u524d\u7f6e\u77e5\u8bc6",children:[{value:"\u5355\u9875\u5e94\u7528",id:"\u5355\u9875\u5e94\u7528",children:[],level:3}],level:2},{value:"\u4ec0\u4e48\u662f\u8def\u7531",id:"\u4ec0\u4e48\u662f\u8def\u7531",children:[],level:2},{value:"\u524d\u7aef\u8def\u7531\u7684\u7531\u6765",id:"\u524d\u7aef\u8def\u7531\u7684\u7531\u6765",children:[],level:2},{value:"\u524d\u7aef\u8def\u7531\u6709\u4ec0\u4e48\u4f18\u70b9\u548c\u7f3a\u70b9",id:"\u524d\u7aef\u8def\u7531\u6709\u4ec0\u4e48\u4f18\u70b9\u548c\u7f3a\u70b9",children:[{value:"\u4f18\u70b9",id:"\u4f18\u70b9",children:[],level:3},{value:"\u7f3a\u70b9",id:"\u7f3a\u70b9",children:[],level:3}],level:2},{value:"\u8def\u7531\u5206\u7c7b",id:"\u8def\u7531\u5206\u7c7b",children:[{value:"hash\u6a21\u5f0f",id:"hash\u6a21\u5f0f",children:[{value:"\u89e6\u53d1\u573a\u666f",id:"\u89e6\u53d1\u573a\u666f",children:[],level:4},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[],level:4}],level:3},{value:"history\u6a21\u5f0f",id:"history\u6a21\u5f0f",children:[{value:"\u4e8c\u8005\u53c2\u6570\u8bf4\u660e",id:"\u4e8c\u8005\u53c2\u6570\u8bf4\u660e",children:[],level:4},{value:"\u533a\u522b",id:"\u533a\u522b",children:[],level:4},{value:"\u89e6\u53d1\u573a\u666f",id:"\u89e6\u53d1\u573a\u666f-1",children:[],level:4},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406-1",children:[],level:4}],level:3},{value:"\u533a\u522b",id:"\u533a\u522b-1",children:[{value:"hash\u6a21\u5f0f",id:"hash\u6a21\u5f0f-1",children:[],level:4},{value:"history\u6a21\u5f0f",id:"history\u6a21\u5f0f-1",children:[],level:4}],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],k={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8def\u7531"},"\u8def\u7531"),(0,i.kt)("h2",{id:"\u524d\u7f6e\u77e5\u8bc6"},"\u524d\u7f6e\u77e5\u8bc6"),(0,i.kt)("h3",{id:"\u5355\u9875\u5e94\u7528"},"\u5355\u9875\u5e94\u7528"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53c8\u79f0",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-cn/%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8"},"SPA(Single Page Application)"),"\uff0c\u5b83\u662f\u4e00\u79cd",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F"},"\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f"),"\u6216",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E7%B6%B2%E7%AB%99"},"\u7f51\u7ad9"),"\u7684\u6a21\u578b\uff0c\u5b83\u901a\u8fc7\u52a8\u6001\u91cd\u5199\u5f53\u524d\u9875\u9762\u6765\u4e0e\u7528\u6237\u4ea4\u4e92\uff0c\u800c\u975e\u4f20\u7edf\u7684\u4ece\u670d\u52a1\u5668\u91cd\u65b0\u52a0\u8f7d\u6574\u4e2a\u65b0\u9875\u9762\u3002\u8fd9\u79cd\u65b9\u6cd5\u907f\u514d\u4e86\u9875\u9762\u4e4b\u95f4\u5207\u6362\u6253\u65ad",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8C"},"\u7528\u6237\u4f53\u9a8c"),"\uff0c\u4f7f\u5e94\u7528\u7a0b\u5e8f\u66f4\u50cf\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E8%BD%AF%E4%BB%B6"},"\u684c\u9762\u5e94\u7528\u7a0b\u5e8f"),"\u3002\u5728\u5355\u9875\u5e94\u7528\u4e2d\uff0c\u6240\u6709\u5fc5\u8981\u7684\u4ee3\u7801\uff08",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/HTML"},"HTML"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/JavaScript"},"JavaScript"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8"},"CSS"),"\uff09\u90fd\u901a\u8fc7\u5355\u4e2a\u9875\u9762\u7684\u52a0\u8f7d\u800c\u68c0\u7d22[",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-cn/%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8#cite_note-Flanagan2006-1"},"1","]"),"\uff0c\u6216\u8005\u6839\u636e\u9700\u8981\uff08\u901a\u5e38\u662f\u4e3a\u54cd\u5e94\u7528\u6237\u64cd\u4f5c\uff09",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%8B%95%E6%85%8B%E8%A3%9D%E8%BC%89"},"\u52a8\u6001\u88c5\u8f7d"),"\u9002\u5f53\u7684\u8d44\u6e90\u5e76\u6dfb\u52a0\u5230\u9875\u9762\u3002   ",(0,i.kt)("inlineCode",{parentName:"p"},"---Wiki")," ")),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f\u8def\u7531"},"\u4ec0\u4e48\u662f\u8def\u7531"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u8def\u7531")," ",(0,i.kt)("inlineCode",{parentName:"p"},"(routing)")," \u5c31\u662f\u901a\u8fc7\u4e92\u8054\u7684",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%AF%E7%B6%B2"},"\u7f51\u7edc"),"\u628a",(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E4%BF%A1%E6%81%AF"},"\u4fe1\u606f"),"\u4ece\u6e90\u5730\u5740\u4f20\u8f93\u5230\u76ee\u7684\u5730\u5740\u7684\u6d3b\u52a8\u3002  ",(0,i.kt)("inlineCode",{parentName:"p"},"---Wiki")," ")),(0,i.kt)("h2",{id:"\u524d\u7aef\u8def\u7531\u7684\u7531\u6765"},"\u524d\u7aef\u8def\u7531\u7684\u7531\u6765"),(0,i.kt)("p",null,"\u524d\u7aef\u8def\u7531\u7684\u6982\u5ff5\u6765\u6e90\u4e8e\u670d\u52a1\u7aef\uff0c\u5728\u670d\u52a1\u7aef\u4e2d\u8def\u7531\u63cf\u8ff0\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," \u4e0e\u5904\u7406\u51fd\u6570\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"SPA")," \u4e2d\uff0c\u8def\u7531\u63cf\u8ff0\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"UI")," \u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u8fd9\u79cd\u6620\u5c04\u662f\u5355\u5411\u7684\uff0c\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," \u53d8\u5316\u5f15\u8d77 ",(0,i.kt)("inlineCode",{parentName:"p"},"UI")," \u66f4\u65b0(\u65e0\u9700\u5237\u65b0\u9875\u9762)\u3002"),(0,i.kt)("h2",{id:"\u524d\u7aef\u8def\u7531\u6709\u4ec0\u4e48\u4f18\u70b9\u548c\u7f3a\u70b9"},"\u524d\u7aef\u8def\u7531\u6709\u4ec0\u4e48\u4f18\u70b9\u548c\u7f3a\u70b9"),(0,i.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u4f53\u9a8c\u597d\uff0c\u4e0d\u9700\u8981\u6bcf\u6b21\u90fd\u4ece\u670d\u52a1\u5668\u5168\u90e8\u83b7\u53d6\uff0c\u5feb\u901f\u5c55\u73b0\u7ed9\u7528\u6237")),(0,i.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6d4f\u89c8\u5668\u7684\u524d\u8fdb\uff0c\u540e\u9000\u952e\u7684\u65f6\u5019\u4f1a\u91cd\u65b0\u53d1\u9001\u8bf7\u6c42\uff0c\u6ca1\u6709\u5408\u7406\u5730\u5229\u7528\u7f13\u5b58\uff0c\u5355\u9875\u9762\u65e0\u6cd5\u8bb0\u4f4f\u4e4b\u524d\u6eda\u52a8\u7684\u4f4d\u7f6e\uff0c\u65e0\u6cd5\u5728\u524d\u8fdb\uff0c\u540e\u9000\u7684\u65f6\u5019\u8bb0\u4f4f\u6eda\u52a8\u7684\u4f4d\u7f6e\u3002")),(0,i.kt)("h2",{id:"\u8def\u7531\u5206\u7c7b"},"\u8def\u7531\u5206\u7c7b"),(0,i.kt)("h3",{id:"hash\u6a21\u5f0f"},"hash\u6a21\u5f0f"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"\u4e2d\uff0c\u7528 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"#"))," \u6765\u505a\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," \u6807\u5fd7\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"#"),"\u540e\u9762\u7684\u5b57\u7b26\u4e32\u90fd\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"hash"),", \u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash"},"window.location.hash"),"\u6765\u8bfb\u53d6\uff0c \u5e38\u7528\u4f5c",(0,i.kt)("strong",{parentName:"p"},"\u951a\u70b9"),"\u5728\u9875\u9762\u5185\u8fdb\u884c\u5bfc\u822a\uff0c\u7531\u4e8e\u6211\u4eec\u5728 ",(0,i.kt)("strong",{parentName:"p"},"\u6539\u53d8 ",(0,i.kt)("inlineCode",{parentName:"strong"},"url hash")," \u503c\u7684\u540c\u65f6\uff0c\u4e0d\u4f1a\u5f15\u8d77\u9875\u9762\u5237\u65b0"),"\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u662f\u901a\u8fc7\u76d1\u542c",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"hash"),"\u53d8\u5316\u6765\u8fdb\u884c\u8def\u7531\u8df3\u8f6c\u3002"),(0,i.kt)("p",null,"\u5f53\u7136\u4e86\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash"},"window.location.hash")," \u8fd9\u4e2a\u5c5e\u6027\u53ef\u8bfb\u53ef\u5199\u3002\u8bfb\u53d6\u65f6\uff0c\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u7f51\u9875\u72b6\u6001\u662f\u5426\u6539\u53d8\uff1b\u5199\u5165\u65f6\uff0c\u5219\u4f1a\u5728\u4e0d\u91cd\u8f7d\u7f51\u9875\u7684\u524d\u63d0\u4e0b\uff0c\u521b\u9020\u4e00\u6761\u8bbf\u95ee\u5386\u53f2\u8bb0\u5f55\u3002\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onhashchange"},"onhashchange")," \u6765\u5224\u65ad\u7f51\u9875\u72b6\u6001\u662f\u5426\u6539\u53d8\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'window.addEventListener("hashchange", event => {\n  let newURL = event.newURL; // hash \u6539\u53d8\u540e\u7684\u65b0 url\n  let oldURL = event.oldURL; // hash \u6539\u53d8\u524d\u7684\u65e7 url\n}, false);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," \u5bf9\u4e8e\u4e0d\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"onhashchange"),"\u7684\u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"setInterval"),"\u76d1\u63a7",(0,i.kt)("inlineCode",{parentName:"p"},"location.hash"),"\u7684\u53d8\u5316\u3002"),(0,i.kt)("h4",{id:"\u89e6\u53d1\u573a\u666f"},"\u89e6\u53d1\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"<a>"),"\u6807\u7b7e\u6539\u53d8 URL"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"window.location"),"\u6539\u53d8",(0,i.kt)("inlineCode",{parentName:"li"},"URL")),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6d4f\u89c8\u5668\u524d\u8fdb\u540e\u9000\u6539\u53d8 ",(0,i.kt)("inlineCode",{parentName:"li"},"URL"))),(0,i.kt)("h4",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u5b58\u50a8 ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u53ca\u5176\u56de\u8c03\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u76d1\u542c ",(0,i.kt)("inlineCode",{parentName:"li"},"hashchange")," \u4e8b\u4ef6\u89e6\u53d1\u5bf9\u5e94\u7684\u56de\u8c03"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"history")," \u6570\u7ec4\u6765\u8bb0\u5f55\u4e4b\u524d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"hash")," \u8def\u7531\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u6307\u9488\u6765\u5b9e\u73b0\u524d\u8fdb\u540e\u9000\u7684\u529f\u80fd")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type NoopFunction = () => void;\n\ninterface IRouters {\n  currentUrl: string;\n  currentIndex: number;\n  isBack: boolean;\n  routes: Object<T, V>;\n  refresh: NoopFunction;\n  back: NoopFunction;\n}\n\nclass Routers extends IRouters {\n  constructor () {\n    // \u4ee5\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u5b58\u50a8\u8def\u7531\n    this.routes<PropertyKey, Function<any>> = {}\n    // \u5f53\u524d\u8def\u7531\u7684 url\n    this.currentUrl = ''\n    // \u8bb0\u5f55\u51fa\u73b0\u8fc7\u7684 hash\n    this.history = [];\n    // \u4f5c\u4e3a\u6307\u9488\uff0c\u9ed8\u8ba4\u6307\u5411 this.history \u7684\u672b\u5c3e\uff0c\u6839\u636e\u540e\u9000\u524d\u8fdb\u6307\u5411 history \u4e2d\u4e0d\u540c\u7684 hash\n    this.currentIndex = this.history.length - 1\n    this.isBack = false // \u8bb0\u5f55\u662f\u5426\u4e3a\u540e\u9000\u64cd\u4f5c\n    window.addEventListener('load', this.refresh, false)\n    window.addEventListener('hashchange', this.refresh, false)\n  }\n\n  // \u5c06 path \u8def\u5f84\u4e0e\u5bf9\u5e94\u7684 callback \u51fd\u6570\u50a8\u5b58\n  route (path, callback) {\n    this.routes[path] = callback;\n  }\n\n  // \u5237\u65b0\n  refresh () {\n    this.currentUrl = location.hash.slice(1) || '/' // \u83b7\u53d6\u5f53\u524d URL \u4e2d\u7684 hash \u8def\u5f84\n    if (!this.isBack) {\n      this.history.push(this.currentUrl) // \u5c06\u5f53\u524d hash \u8def\u7531\u63a8\u5165 history \u6570\u7ec4\u4e2d\n    }\n    this.currentIndex++ // \u6307\u9488\u5411\u524d\u79fb\u52a8\n    this.routes[this.currentUrl]() // \u6267\u884c\u5f53\u524d hash \u8def\u5f84\u7684 callback \u51fd\u6570\n    this.isBack = false\n  }\n\n  // \u540e\u9000\u529f\u80fd\n  back () {\n    this.isBack = true\n    // \u5982\u679c\u6307\u9488\u5c0f\u4e8e 0 \u7684\u8bdd\u5c31\u4e0d\u5b58\u5728\u5bf9\u5e94 hash \u8def\u7531\u4e86\uff0c\u56e0\u6b64\u9501\u5b9a\u6307\u9488\u4e3a 0 \u5373\u53ef\n    this.currentIndex <= 0 ? this.currentIndex = 0 : this.currentIndex = this.currentIndex - 1\n    location.hash = `#${this.history[this.currentIndex]}` // location \u54cd\u5e94\u53d8\u5316\n    this.routes[this.history[this.backOff.currentIndex]]() // \u6267\u884c\u5bf9\u5e94\u7684 callback\n  }\n}\n")),(0,i.kt)("h3",{id:"history\u6a21\u5f0f"},"history\u6a21\u5f0f"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"HTML5"),"\u4e4b\u524d\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"DOM")," \u4e0a\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window"},(0,i.kt)("inlineCode",{parentName:"a"},"window"))," \u5bf9\u8c61\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history"},(0,i.kt)("inlineCode",{parentName:"a"},"history"))," \u5bf9\u8c61\u63d0\u4f9b\u4e86\u5bf9\u6d4f\u89c8\u5668\u7684\u4f1a\u8bdd\u5386\u53f2\u7684\u8bbf\u95ee\uff0c\u5b83\u66b4\u9732\u4e86\u5f88\u591a\u6709\u7528\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u5141\u8bb8\u4f60\u5728\u7528\u6237\u6d4f\u89c8\u5386\u53f2\u4e2d\u5411\u524d\u548c\u5411\u540e\u8df3\u8f6c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History/back"},(0,i.kt)("inlineCode",{parentName:"a"},"back()")),",  ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History/forward"},(0,i.kt)("inlineCode",{parentName:"a"},"forward()")),"\u548c  ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History/go"},(0,i.kt)("inlineCode",{parentName:"a"},"go()"))," \u65b9\u6cd5\u6765\u5b8c\u6210\u5728\u7528\u6237\u5386\u53f2\u8bb0\u5f55\u4e2d\u5411\u540e\u548c\u5411\u524d\u7684\u8df3\u8f6c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"history.forward();     // \u524d\u8fdb\u4e00\u9875\nhistory.back();      // \u540e\u9000\u4e00\u9875\nhistory.go(-1);       // \u540e\u9000\u4e00\u9875 === back()\nwindow.history.go(1); // \u524d\u8fdb\u4e00\u9875 === forward()\nhistory.go(2);        // \u524d\u8fdb\u4e24\u9875\n")),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u957f\u5ea6\u5c5e\u6027\u7684\u503c\u6765\u786e\u5b9a\u7684\u5386\u53f2\u5806\u6808\u4e2d\u9875\u9762\u7684\u6570\u91cf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," let numberOfEntries = window.history.length;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MDN")," \u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History_API#%E6%B7%BB%E5%8A%A0%E5%92%8C%E4%BF%AE%E6%94%B9%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%B8%AD%E7%9A%84%E6%9D%A1%E7%9B%AE"},"\u6dfb\u52a0\u548c\u4fee\u6539\u5386\u53f2\u8bb0\u5f55\u4e2d\u7684\u6761\u76ee")," \u4e2d\u6709\u8fd9\u6837\u7684\u63cf\u8ff0:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"HTML5"),"\u5f15\u5165\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"},"history.pushState()")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_replaceState()_method"},"history.replaceState()")," \u65b9\u6cd5\uff0c\u5b83\u4eec\u5206\u522b\u53ef\u4ee5\u6dfb\u52a0\u548c\u4fee\u6539\u5386\u53f2\u8bb0\u5f55\u6761\u76ee\u3002\u8fd9\u4e9b\u65b9\u6cd5\u901a\u5e38\u4e0e",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onpopstate"},"window.onpopstate")," \u914d\u5408\u4f7f\u7528\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"history.pushState(state, title, url);         // \u6dfb\u52a0\u65b0\u7684\u72b6\u6001\u5230\u5386\u53f2\u72b6\u6001\u6808\nhistory.replaceState(state, title, url);      // \u7528\u65b0\u7684\u72b6\u6001\u4ee3\u66ff\u5f53\u524d\u72b6\u6001\nhistory.state                // \u8fd4\u56de\u5f53\u524d\u72b6\u6001\u5bf9\u8c61\n")),(0,i.kt)("h4",{id:"\u4e8c\u8005\u53c2\u6570\u8bf4\u660e"},"\u4e8c\u8005\u53c2\u6570\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"state"),": \u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u5bf9\u8c61\uff0c\u53ef\u4ee5\u7528\u5728 popstate \u4e8b\u4ef6\u4e2d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"title"),": \u73b0\u5728\u5927\u591a\u6d4f\u89c8\u5668\u5ffd\u7565\u8fd9\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u4ee3\u66ff")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"url"),": \u8be5\u53c2\u6570\u5b9a\u4e49\u4e86\u65b0\u7684\u5386\u53f2",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"\u8bb0\u5f55\u3002\u952e\u5165\u4efb\u610f\u6709\u6548\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),"\uff0c\u7528\u4e8e\u66f4\u65b0\u6d4f\u89c8\u5668\u7684\u5730\u5740\u680f"))),(0,i.kt)("h4",{id:"\u533a\u522b"},"\u533a\u522b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pushState()")," \u662f\u5728\u4fdd\u7559\u73b0\u6709\u5386\u53f2\u8bb0\u5f55\u7684\u540c\u65f6\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," \u52a0\u5165\u5230\u5386\u53f2\u8bb0\u5f55\u4e2d"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"replaceState()")," \u662f\u4fee\u6539\u4e86\u5f53\u524d\u7684\u5386\u53f2\u8bb0\u5f55\u9879\u800c\u4e0d\u662f\u65b0\u5efa\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"URL")),(0,i.kt)("h4",{id:"\u89e6\u53d1\u573a\u666f-1"},"\u89e6\u53d1\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"<a>"),"\u6807\u7b7e\u6539\u53d8 URL"),(0,i.kt)("li",{parentName:"ul"},"\u89e6\u53d1 ",(0,i.kt)("inlineCode",{parentName:"li"},"history.pushState / history.replaceState")," \u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6d4f\u89c8\u5668\u524d\u8fdb\u540e\u9000\u6539\u53d8 ",(0,i.kt)("inlineCode",{parentName:"li"},"URL"))),(0,i.kt)("h4",{id:"\u5b9e\u73b0\u539f\u7406-1"},"\u5b9e\u73b0\u539f\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type NoopFunction = () => void;\n\ninterface IRouters {\n  routes: Object<T, V>;\n  init: (path: PropertyKey);\n  go: (path: PropertyKey);\n  route: (path: PropertyKey, callback: Function<any>) => any;\n  _bindPopState: NoopFunction;\n}\nclass Routers extends IRouters {\n  constructor () {\n    this.routes<PropertyKey, Function<any>> = {}\n    this._bindPopState()\n  }\n\n  // \u521d\u59cb\u5316\u8def\u7531\n  init (path) {\n    history.replaceState({ path: path }, null, path)\n    this.routes[path] && this.routes[path]()\n  }\n\n  // \u5c06\u8def\u5f84\u548c\u5bf9\u5e94\u7684\u56de\u8c03\u51fd\u6570\u52a0\u5165 hashMap\n  route (path, callback) {\n    this.routes[path] = callback;\n  }\n\n  go (path) {\n    history.pushState({ path: path }, null, path)\n    this.routes[path] && this.routes[path]()\n  }\n\n  // \u76d1\u542c popstate \u4e8b\u4ef6\n  _bindPopState () {\n    window.addEventListener('popstate', e => {\n      const path = e.state && e.state.path\n      this.routes[path] && this.routes[path]()\n    })\n  }\n}\n")),(0,i.kt)("h3",{id:"\u533a\u522b-1"},"\u533a\u522b"),(0,i.kt)("h4",{id:"hash\u6a21\u5f0f-1"},"hash\u6a21\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6027\u66f4\u597d\uff0c\u53ef\u4ee5\u517c\u5bb9\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"IE8")),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u9700\u670d\u52a1\u7aef\u914d\u5408\u5904\u7406\u975e\u5355\u9875\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"url"),"\u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u968f\u610f\u5237\u65b0")),(0,i.kt)("h4",{id:"history\u6a21\u5f0f-1"},"history\u6a21\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash")," \u6a21\u5f0f\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"URL")," \u4e2d\u4e00\u76f4\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),"\uff0c\u4e0d\u591f\u7f8e\u89c2\uff0c ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"history")," \u6a21\u5f0f\u4e0d\u5b58\u5728\u8fd9\u4e2a\u95ee\u9898")),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u540c hash,  ",(0,i.kt)("inlineCode",{parentName:"li"},"hash")," \u6a21\u5f0f\u4e0d\u4f1a\u89e6\u53d1\u52a8\u4f5c\u5c06\u8bb0\u5f55\u52a0\u5165\u5230\u5386\u53f2\u6808\u4e2d, ",(0,i.kt)("inlineCode",{parentName:"li"},"history")," \u6a21\u5f0f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"li"},"history.pushState")," \u6765\u5b9e\u73b0"),(0,i.kt)("li",{parentName:"ul"},"\u540c\u65f6\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"hash")," \u6a21\u5f0f\u548c ",(0,i.kt)("strong",{parentName:"li"},"\u951a\u70b9\u529f\u80fd"),"\uff0c\u951a\u70b9\u529f\u80fd\u4f1a\u5931\u6548\uff0c ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"history")," \u6a21\u5f0f\u4e0d\u5b58\u5728\u8fd9\u4e2a\u95ee\u9898")),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u968f\u610f\u5237\u65b0\uff0c\u9700\u8981\u670d\u52a1\u7aef\u8986\u76d6\u6240\u6709\u60c5\u51b5\u7684\u8bf7\u6c42\u8d44\u6e90\uff0c\u5f53\u5237\u65b0\u65f6\uff0c\u5982\u679c\u670d\u52a1\u5668\u4e2d\u6ca1\u6709\u76f8\u5e94\u7684\u54cd\u5e94\u6216\u8005\u8d44\u6e90\uff0c\u4f1a\u5206\u5206\u949f\u5237\u51fa\u4e00\u4e2a404\u6765\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u517c\u5bb9\u4f4e\u7248\u672c")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u9700\u8981\u517c\u5bb9\u4f4e\u7248\u672c"),"\uff0c\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," \u6a21\u5f0f\u5373\u53ef\uff1b\u5982\u679c\u4e0d\u9700\u8981\u517c\u5bb9\uff0c\u540e\u7aef(",(0,i.kt)("inlineCode",{parentName:"p"},"or")," \u670d\u52a1\u7aef)\u4e5f\u914d\u7f6e\u4e86\u6240\u6709\u60c5\u51b5\u7684\u8bf7\u6c42\u8d44\u6e90\uff0c\u90a3\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"history")," \u6a21\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-cn/%E8%B7%AF%E7%94%B1"},"\u8def\u7531")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/53064386"},"\u524d\u7aef\u8def\u7531\u662f\u4ec0\u4e48\u4e1c\u897f\uff1f - \u77e5\u4e4e")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2011/03/url_hash.html"},"\u962e\u4e00\u5cf0 URL\u7684\u4e95\u53f7")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/URI_fragment"},"wiki URI Fragment")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/History"},"MDN History API")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location"},"MDN Window location API")))}d.isMDXComponent=!0}}]);