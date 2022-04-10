"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2302],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),u=c(n),s=r,d=u["".concat(o,".").concat(s)]||u[s]||m[s]||p;return n?a.createElement(d,i(i({ref:t},k),{},{components:n})):a.createElement(d,i({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<p;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),i=["components"],l={},o="\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a Webpack",c={unversionedId:"webpack/mini-webpack",id:"webpack/mini-webpack",title:"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a Webpack",description:"\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u4e2a\uff1f",source:"@site/engineering/webpack/mini-webpack.md",sourceDirName:"webpack",slug:"/webpack/mini-webpack",permalink:"/study-notes/engineering/webpack/mini-webpack",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649555275,formattedLastUpdatedAt:"4/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Webpack \u9b54\u6cd5\u6ce8\u91ca(Magic Comments)",permalink:"/study-notes/engineering/webpack/magic-comments"},next:{title:"Module Chunk Bundle \u4e4b\u95f4\u7684\u533a\u522b",permalink:"/study-notes/engineering/webpack/module-chunk-bundle"}},k={},m=[{value:"\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u4e2a\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u4e2a",level:2},{value:"\u4ec0\u4e48\u662fWebpack\uff1f",id:"\u4ec0\u4e48\u662fwebpack",level:2},{value:"Webpack\u6838\u5fc3\u6982\u5ff5",id:"webpack\u6838\u5fc3\u6982\u5ff5",level:2},{value:"Webpack\u6784\u5efa\u8fc7\u7a0b",id:"webpack\u6784\u5efa\u8fc7\u7a0b",level:2},{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:m};function s(e){var t=e.components,l=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a-webpack"},"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a Webpack"),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u4e2a"},"\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u4e2a\uff1f"),(0,p.kt)("p",null,"\u56e0\u4e3a\u4e4b\u524d\u770b\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"Ronen Amiel")," \u7684",(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/av53379967/"},"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a Webpack"),", \u6709\u611f\u800c\u53d1\uff0c\u4e5f\u60f3\u63d0\u9ad8\u4e00\u4e0b\u81ea\u5df1, \u6240\u4ee5\u5c31\u5c1d\u8bd5\u7740\u5199\u4e86\u8fd9\u7bc7\u7b14\u8bb0\u3002"),(0,p.kt)("h2",{id:"\u4ec0\u4e48\u662fwebpack"},"\u4ec0\u4e48\u662fWebpack\uff1f"),(0,p.kt)("p",null,"\u672c\u8d28\u4e0a\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"webpack")," \u662f\u4e00\u4e2a\u73b0\u4ee3 ",(0,p.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u5e94\u7528\u7a0b\u5e8f\u7684",(0,p.kt)("strong",{parentName:"p"},"\u9759\u6001\u6a21\u5757\u6253\u5305\u5668(module bundler)"),"\u3002\u5f53 ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack")," \u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u5b83\u4f1a\u9012\u5f52\u5730\u6784\u5efa\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u5173\u7cfb\u56fe(dependency graph)"),"\uff0c\u5176\u4e2d\u5305\u542b\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u7684\u6bcf\u4e2a\u6a21\u5757\uff0c\u7136\u540e\u5c06\u6240\u6709\u8fd9\u4e9b\u6a21\u5757\u6253\u5305\u6210\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"bundle"),"\u3002"),(0,p.kt)("h2",{id:"webpack\u6838\u5fc3\u6982\u5ff5"},"Webpack\u6838\u5fc3\u6982\u5ff5"),(0,p.kt)("p",null,"\u8be6\u89c1",(0,p.kt)("a",{parentName:"p",href:"/study-notes/engineering/webpack/webpack-base"},"Webpack \u57fa\u7840\u77e5\u8bc6")),(0,p.kt)("h2",{id:"webpack\u6784\u5efa\u8fc7\u7a0b"},"Webpack\u6784\u5efa\u8fc7\u7a0b"),(0,p.kt)("p",null,(0,p.kt)("img",{loading:"lazy",alt:"webpack-process.png",src:n(98752).Z,width:"833",height:"1039"})),(0,p.kt)("p",null,(0,p.kt)("img",{loading:"lazy",alt:"webpack-build.jpg",src:n(84655).Z,width:"4436",height:"4244"})),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u53c2\u6570")),(0,p.kt)("p",{parentName:"li"},"\u4ece\u914d\u7f6e\u6587\u4ef6",(0,p.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"Shell options")," \u4e2d\u8bfb\u53d6\u4e0e\u5408\u5e76\u53c2\u6570\uff0c\u5f97\u51fa\u6700\u7ec8\u7684\u53c2\u6570",(0,p.kt)("inlineCode",{parentName:"p"},"optimist"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5f00\u59cb\u7f16\u8bd1")),(0,p.kt)("p",{parentName:"li"},"\u7528\u4e0a\u4e00\u6b65\u5f97\u5230\u7684\u53c2\u6570\u521d\u59cb",(0,p.kt)("inlineCode",{parentName:"p"},"Compiler"),"\u5bf9\u8c61\uff0c\u52a0\u8f7d\u6240\u6709\u914d\u7f6e\u7684\u63d2\u4ef6\uff0c\u901a\u8fc7\u6267\u884c\u5bf9\u8c61\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"run"),"\u65b9\u6cd5\u5f00\u59cb\u6267\u884c\u7f16\u8bd1")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5206\u6790\u786e\u5b9a\u5165\u53e3")),(0,p.kt)("p",{parentName:"li"},"\u6839\u636e\u914d\u7f6e\u4e2d\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Entry")," \u627e\u51fa\u6240\u6709\u5165\u53e3\u6587\u4ef6")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u3001\u6784\u5efa\u6a21\u5757")),(0,p.kt)("p",{parentName:"li"},"\u4ece\u5165\u53e3\u6587\u4ef6\u51fa\u53d1\uff0c\u8c03\u7528\u6240\u6709\u914d\u7f6e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Loader")," \u5bf9\u6a21\u5757\u8fdb\u884c\u7f16\u8bd1\uff0c\u518d\u627e\u51fa\u8be5\u6a21\u5757\u4f9d\u8d56\u7684\u6a21\u5757\uff0c\u518d\u9012\u5f52\u672c\u6b65\u9aa4\u76f4\u5230\u6240\u6709\u5165\u53e3\u4f9d\u8d56\u7684\u6587\u4ef6\u90fd\u7ecf\u8fc7\u4e86\u672c\u6b65\u9aa4\u7684\u5904\u7406")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5b8c\u6210\u6a21\u5757\u7f16\u8bd1")),(0,p.kt)("p",{parentName:"li"},"\u5728\u7ecf\u8fc7",(0,p.kt)("strong",{parentName:"p"},"\u7b2c4\u6b65"),"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Loader")," \u7ffb\u8bd1\u5b8c\u6240\u6709\u6a21\u5757\u540e\uff0c \u5f97\u5230\u4e86\u6bcf\u4e2a\u6a21\u5757\u88ab\u7f16\u8bd1\u540e\u7684\u6700\u7ec8\u5185\u5bb9\u53ca\u5b83\u4eec\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u8f93\u51fa\u8d44\u6e90")),(0,p.kt)("p",{parentName:"li"},"\u6839\u636e\u5165\u53e3\u548c\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u7ec4\u88c5\u6210\u4e00\u4e2a\u4e2a\u5305\u542b\u591a\u4e2a\u6a21\u5757\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Chunk"),", \u518d\u5c06\u6bcf\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"Chunk")," \u8f6c\u6362\u6210\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u52a0\u5165\u8f93\u51fa\u5217\u8868\u4e2d\uff0c\u8fd9\u662f\u53ef\u4ee5\u4fee\u6539\u8f93\u51fa\u5185\u5bb9\u7684\u6700\u540e\u673a\u4f1a")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u8f93\u51fa\u5b8c\u6210")),(0,p.kt)("p",{parentName:"li"},"\u5728\u786e\u5b9a\u597d\u8f93\u51fa\u5185\u5bb9\u540e\uff0c\u6839\u636e\u914d\u7f6e\u786e\u5b9a\u8f93\u51fa\u7684\u8def\u5f84\u548c\u6587\u4ef6\u540d\uff0c\u5c06\u6587\u4ef6\u7684\u5185\u5bb9\u5199\u5165\u6587\u4ef6\u7cfb\u7edf\u4e2d\u3002"))),(0,p.kt)("h2",{id:"\u5b9e\u73b0\u4ee3\u7801"},"\u5b9e\u73b0\u4ee3\u7801"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/Rain120/mini-webpack"},"Github: mini-webpack")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://rain120.github.io/mini-webpack/example/index.html"},"Demo")),(0,p.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ronami/minipack"},"minipack")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/av53379967/"},"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a webpack - Ronen Amiel")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.im/post/6844903779712630797"},"webpack\u7cfb\u5217\u4e4b\u4e09resolve")))}s.isMDXComponent=!0},84655:function(e,t,n){t.Z=n.p+"assets/images/webpack-build-1e6835a2eabdfc3c5a40b3a5a4483f74.jpg"},98752:function(e,t,n){t.Z=n.p+"assets/images/webpack-process-886075bd21a3171e1c6aa935ed08545d.png"}}]);