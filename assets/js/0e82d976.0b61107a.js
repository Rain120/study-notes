"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[7953],{49613:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=h(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(u,".").concat(f)]||p[f]||l[f]||o;return n?r.createElement(d,c(c({ref:t},i),{},{components:n})):r.createElement(d,c({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var h={};for(var u in t)hasOwnProperty.call(t,u)&&(h[u]=t[u]);h.originalType=e,h.mdxType="string"==typeof e?e:a,c[1]=h;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return h},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return i}});n(59496);var r=n(49613);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={},h="hash chunkhash contenthash\u533a\u522b",u={unversionedId:"webpack/hash-chunkhash-contenthash",id:"webpack/hash-chunkhash-contenthash",title:"hash chunkhash contenthash\u533a\u522b",description:"hash",source:"@site/engineering/webpack/hash-chunkhash-contenthash.md",sourceDirName:"webpack",slug:"/webpack/hash-chunkhash-contenthash",permalink:"/study-notes/engineering/webpack/hash-chunkhash-contenthash",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649416691,formattedLastUpdatedAt:"Apr 8, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Webpack \u6253\u5305\u8f93\u51fa\u4ee3\u7801\u90fd\u6709\u4ec0\u4e48\uff1f",permalink:"/study-notes/engineering/webpack/build"},next:{title:"\u90a3\u4e9b\u6709\u5173\u4e8eLoader\u7684\u77e5\u8bc6",permalink:"/study-notes/engineering/webpack/loader/base"}},s={},i=[{value:"hash",id:"hash",level:2},{value:"chunkhash",id:"chunkhash",level:2},{value:"contenthash",id:"contenthash",level:2}],l={toc:i};function p(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"hash-chunkhash-contenthash\u533a\u522b"}),"hash chunkhash contenthash\u533a\u522b"),(0,r.kt)("h2",a({},{id:"hash"}),"hash"),(0,r.kt)("p",null,"\u6574\u4e2a\u9879\u76ee\u6784\u5efa\u76f8\u5173"),(0,r.kt)("h2",a({},{id:"chunkhash"}),"chunkhash"),(0,r.kt)("p",null,"\u6839\u636e\u4e0d\u540c\u7684\u5165\u53e3\u6587\u4ef6(entry)\u8fdb\u884c\u4f9d\u8d56\u6587\u4ef6\u89e3\u6790\u3001\u6784\u5efa\u5bf9\u5e94\u7684 chunk\uff0c\u751f\u6210\u5bf9\u5e94\u7684\u54c8\u5e0c\u503c"),(0,r.kt)("h2",a({},{id:"contenthash"}),"contenthash"),(0,r.kt)("p",null,"\u8ba1\u7b97\u4e0e\u6587\u4ef6\u5185\u5bb9\u672c\u8eab\u76f8\u5173"))}p.isMDXComponent=!0}}]);