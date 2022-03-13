"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1251],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=i(r),f=o,m=b["".concat(s,".").concat(f)]||b[f]||u[f]||l;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,c=new Array(l);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var i=2;i<l;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},32109:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),c=["components"],a={},s="Scroll",i={unversionedId:"react/better-scroll/scroll",id:"react/better-scroll/scroll",title:"Scroll",description:"\u4ee3\u7801\u4ed3\u5e93",source:"@site/fe/react/better-scroll/scroll.md",sourceDirName:"react/better-scroll",slug:"/react/better-scroll/scroll",permalink:"/study-notes/fe/react/better-scroll/scroll",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647177225,formattedLastUpdatedAt:"3/13/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u57fa\u672c\u4ecb\u7ecd",permalink:"/study-notes/fe/react/better-scroll/base"},next:{title:"Slider",permalink:"/study-notes/fe/react/better-scroll/slider"}},p={},u=[{value:"\u4ee3\u7801\u4ed3\u5e93",id:"\u4ee3\u7801\u4ed3\u5e93",level:2}],b={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scroll"},"Scroll"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Rain120/better-scroll-for-react-usage"},"\u4ee3\u7801\u4ed3\u5e93")),(0,l.kt)("p",null,"\u901a\u8fc7\u6587\u6863\u6211\u4eec\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"https://better-scroll.github.io/docs/en-US/"},"BetterScroll 2.x\u5b98\u65b9\u6587\u6863"),"\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u8be5\u63d2\u4ef6\u9700\u8981\u7684\u5c5e\u6027\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"type"),"\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ListenScrollProps {\n  beforeScroll?: boolean;\n  scroll?: boolean;\n  scrollEnd?: boolean;\n}\n\ntype NoopFunction = () => any;\n\ntype ScrollFunction = (pos?: object) => any;\n\nexport interface ScrollProps {\n  data: object[];\n  probeType: number;\n  click?: boolean;\n  scrollY?: boolean;\n  scrollX?: boolean;\n  listenScroll?: ListenScrollProps;\n  listenBeforeScroll?: boolean;\n  direction?: string;\n  beforeScrollStart?: NoopFunction;\n  scroll?: ScrollFunction;\n  scrollEnd?: ScrollFunction;\n  scrollbar?: NoopFunction;\n  pullUpLoad?: NoopFunction;\n  startY?: number;\n  refreshDelay?: number;\n  freeScroll?: boolean;\n  mouseWheel?: boolean;\n  bounce?: boolean | object;\n  momentum?: boolean;\n  useTransition?: boolean;\n  slide?: object;\n  stopPropagation?: boolean;\n}\n\n")),(0,l.kt)("h2",{id:"\u4ee3\u7801\u4ed3\u5e93"},"\u4ee3\u7801\u4ed3\u5e93"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Rain120/better-scroll-for-react-usage/blob/master/src/base/Scroll/index.tsx"},"Scroll")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Rain120/better-scroll-for-react-usage/blob/master/src/base/Scroll/types.ts"},"Type\u5b9a\u4e49")))}f.isMDXComponent=!0}}]);