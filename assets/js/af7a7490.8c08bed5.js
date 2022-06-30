"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3960],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(45443),a=n(13010),l=(n(59496),n(49613)),o=["components"],i={},p=void 0,u={unversionedId:"webpack/build-tools",id:"webpack/build-tools",title:"build-tools",description:"\u6253\u5305\u5de5\u5177\u5bf9\u6bd4",source:"@site/engineering/webpack/build-tools.md",sourceDirName:"webpack",slug:"/webpack/build-tools",permalink:"/study-notes/engineering/webpack/build-tools",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649150699,formattedLastUpdatedAt:"4/5/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u52a8\u6001\u5f15\u5165",permalink:"/study-notes/engineering/webpack/async-import"},next:{title:"Webpack \u6253\u5305\u8f93\u51fa\u4ee3\u7801\u90fd\u6709\u4ec0\u4e48\uff1f",permalink:"/study-notes/engineering/webpack/build"}},c={},s=[{value:"\u6253\u5305\u5de5\u5177\u5bf9\u6bd4",id:"\u6253\u5305\u5de5\u5177\u5bf9\u6bd4",level:2},{value:"Webpack",id:"webpack",level:3},{value:"rollup",id:"rollup",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6253\u5305\u5de5\u5177\u5bf9\u6bd4"},"\u6253\u5305\u5de5\u5177\u5bf9\u6bd4"),(0,l.kt)("h3",{id:"webpack"},"Webpack"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"\u5b98\u7f51")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),"\u529f\u80fd\u5f3a\u5927\uff0c\u4e0d\u6b62\u80fd\u6253\u5305\u6a21\u5757\uff0c\u8fd8\u80fd\u505a\u5f88\u591a",(0,l.kt)("inlineCode",{parentName:"p"},"rollup"),"\u65e0\u6cd5\u505a\u5230\u7684\u4e8b\u60c5\uff0c\u8fd9\u4e5f\u5bfc\u81f4",(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),"\u7684\u5b66\u4e60\u6210\u672c\u5f88\u9ad8\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7loader\u5904\u7406\u5404\u79cd\u5404\u6837\u7684\u8d44\u6e90\u4f9d\u8d56"),(0,l.kt)("li",{parentName:"ul"},"HMR\u6a21\u5757\u70ed\u66ff\u6362"),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u6309\u9700\u52a0\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u516c\u5171\u6a21\u5757")),(0,l.kt)("h3",{id:"rollup"},"rollup"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"\u5b98\u7f51")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rollup"),"\u6309\u7167\u5355\u4e00\u529f\u80fd\u8bbe\u8ba1\u539f\u5219\uff08\u529f\u80fd\u5355\u4e00\uff0c\u53ef\u7ee7\u627f\uff0c\u53ef\u6269\u5c55\uff09\uff0c\u53ea\u505a\u6a21\u5757\u5316\u6253\u5305\u529f\u80fd\uff0c\u9664\u6b64\u4e4b\u5916\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"rollup"),"\u65e0\u6cd5\u652f\u6301\u5176\u4ed6\u529f\u80fd\u3002\u5b66\u4e60\u6210\u672c\u6781\u4f4e\uff0c\u5bb9\u6613\u4e0a\u624b\u3002\u867d\u7136\u529f\u80fd\u5355\u4e00\uff0c\u4f46",(0,l.kt)("inlineCode",{parentName:"p"},"rollup"),"\u5c06\u6a21\u5757\u6253\u5305\u529f\u80fd\u505a\u5230\u6781\u81f4\uff0c\u6253\u5305\u901f\u5ea6\u975e\u5e38\u5feb\uff0c\u4e14\u6253\u5305\u51fa\u6765\u7684\u4ee3\u7801\u5c06\u5c3d\u53ef\u80fd\u7684\u538b\u7f29\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u7b80\u5355\uff0c\u6253\u5305\u901f\u5ea6\u5feb"),(0,l.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u79fb\u9664\u672a\u5f15\u7528\u7684\u4ee3\u7801\uff08\u5185\u7f6etree shaking\uff09")),(0,l.kt)("p",null,"\u4f46\u662f\u4ed6\u4e5f\u6709\u4ee5\u4e0b\u4e0d\u53ef\u5ffd\u89c6\u7684\u7f3a\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f00\u53d1\u670d\u52a1\u5668\u4e0d\u80fd\u5b9e\u73b0\u6a21\u5757\u70ed\u66f4\u65b0\uff0c\u8c03\u8bd5\u7e41\u7410"),(0,l.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u73af\u5883\u7684\u4ee3\u7801\u5206\u5272\u4f9d\u8d56amd"),(0,l.kt)("li",{parentName:"ol"},"\u52a0\u8f7d\u7b2c\u4e09\u65b9\u6a21\u5757\u6bd4\u8f83\u590d\u6742")))}f.isMDXComponent=!0}}]);