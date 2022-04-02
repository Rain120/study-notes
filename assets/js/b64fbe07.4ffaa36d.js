"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6230],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:1,title:"Summary"},u=void 0,p={unversionedId:"guide",id:"guide",title:"Summary",description:"\u5de5\u7a0b\u80fd\u529b\u5b66\u4e60\uff0c\u5305\u62ec Coding, Git, Builder, etc....",source:"@site/engineering/guide.md",sourceDirName:".",slug:"/guide",permalink:"/study-notes/engineering/guide",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648899683,formattedLastUpdatedAt:"4/2/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Summary"},sidebar:"sidebar",previous:{title:"\u4ee3\u7801\u98ce\u683c",permalink:"/study-notes/engineering/coding/style"},next:{title:"\u76ee\u5f55",permalink:"/study-notes/engineering/git-npm/guide"}},c={},s=[{value:"\u4ec0\u4e48\u662f\u5de5\u7a0b\u80fd\u529b",id:"\u4ec0\u4e48\u662f\u5de5\u7a0b\u80fd\u529b",level:2},{value:"\u89c4\u8303\u5316",id:"\u89c4\u8303\u5316",level:3},{value:"\u7ec4\u4ef6\u5316",id:"\u7ec4\u4ef6\u5316",level:3},{value:"\u6a21\u5757\u5316",id:"\u6a21\u5757\u5316",level:3},{value:"\u81ea\u52a8\u5316",id:"\u81ea\u52a8\u5316",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5de5\u7a0b\u80fd\u529b\u5b66\u4e60\uff0c\u5305\u62ec Coding, Git, Builder, etc...."))),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5de5\u7a0b\u80fd\u529b"},"\u4ec0\u4e48\u662f\u5de5\u7a0b\u80fd\u529b"),(0,i.kt)("p",null,"\u4e2a\u4eba\u7684\u4e00\u77e5\u534a\u89e3\uff0c\u6b22\u8fce\u5404\u4f4d\u6765\u8fa9\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u524d\u7aef\u5de5\u7a0b\u5316\u6700\u4e3b\u8981\u7684\u76ee\u7684\u8fd8\u662f\u63d0\u5347\u4e1a\u52a1\u6548\u7387\u3002"))),(0,i.kt)("h3",{id:"\u89c4\u8303\u5316"},"\u89c4\u8303\u5316"),(0,i.kt)("p",null,"\u5236\u5b9a\u5404\u9879\u89c4\u8303\uff0c\u8ba9\u5de5\u4f5c\u6709\u7ae0\u53ef\u5faa"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u7f16\u7801\u89c4\u8303\uff0c\u5e76\u4e0e\u56e2\u961f\u534f\u4f5c\u548c\u4ee3\u7801\u7ef4\u62a4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u76ee\u5f55\u7ed3\u6784"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u547d\u540d"))),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u6d41\u7a0b\u89c4\u8303",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5206\u652f\u89c4\u8303"),(0,i.kt)("li",{parentName:"ul"},"CR\u89c4\u8303"))),(0,i.kt)("li",{parentName:"ul"},"\u6587\u6863\u89c4\u8303"),(0,i.kt)("li",{parentName:"ul"},"\u7248\u672c\u7ba1\u7406",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Git")))),(0,i.kt)("h3",{id:"\u7ec4\u4ef6\u5316"},"\u7ec4\u4ef6\u5316"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u80fd\u529b\u7684\u63d0\u5347"),(0,i.kt)("li",{parentName:"ul"},"\u6846\u67b6\u7684\u9009\u62e9")),(0,i.kt)("h3",{id:"\u6a21\u5757\u5316"},"\u6a21\u5757\u5316"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5206\u79bb\uff0c\u89e3\u8026",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ESM, CommonJS, AMD")))),(0,i.kt)("h3",{id:"\u81ea\u52a8\u5316"},"\u81ea\u52a8\u5316"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6253\u5305\u6784\u5efa",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"webpack"))),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5316\u6784\u5efa\u6d41\u7a0b\uff0c\u7814\u53d1\u81ea\u52a8\u5316\u5de5\u7a0b\u5de5\u5177\uff0c\u63d0\u5347\u5f00\u53d1\uff0c\u90e8\u7f72\u6548\u7387")),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.infoq.cn/article/Kpd_C06scWePcO8fB7ex"},"\u4ece\u6dd8\u5b9d\u524d\u7aef\u5de5\u7a0b\u5316\u6f14\u8fdb\uff0c\u770b\u5de5\u7a0b\u5316\u4e4b\u8def\u5982\u4f55\u201c\u79c1\u4eba\u8ba2\u5236\u201d"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903588553048077"},"\u524d\u7aef\u5de5\u7a0b\u5316\u6982\u8ff0"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/24558375"},"\u8c01\u80fd\u4ecb\u7ecd\u4e0bweb\u524d\u7aef\u5de5\u7a0b\u5316\uff1f")))}d.isMDXComponent=!0}}]);