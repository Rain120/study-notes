"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2938],{49613:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(d,a(a({ref:t},f),{},{components:n})):r.createElement(d,a({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(665),o=n(40151),i=(n(59496),n(49613)),a=["components"],c={},l="\u751f\u547d\u5468\u671f",u={unversionedId:"micro-frontends/lifecycle",id:"micro-frontends/lifecycle",title:"\u751f\u547d\u5468\u671f",description:"\u6211\u4eec\u77e5\u9053\u4e00\u4e2a\u9875\u9762 \u4ece\u6253\u5f00\u5230\u5173\u95ed \u7684\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4f1a\u7ecf\u5386\u4e0b\u9762\u51e0\u4e2a\u6b65\u9aa4:",source:"@site/engineering/micro-frontends/lifecycle.md",sourceDirName:"micro-frontends",slug:"/micro-frontends/lifecycle",permalink:"/study-notes/engineering/micro-frontends/lifecycle",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1658314300,formattedLastUpdatedAt:"Jul 20, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5b9a\u4e49",permalink:"/study-notes/engineering/micro-frontends/summary"},next:{title:"\u8def\u7531\u52ab\u6301 (WIP)",permalink:"/study-notes/engineering/micro-frontends/route"}},f={},s=[{value:"Garfish \u751f\u547d\u5468\u671f",id:"garfish-\u751f\u547d\u5468\u671f",level:2}],p={toc:s};function m(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u4e00\u4e2a\u9875\u9762 ",(0,i.kt)("strong",{parentName:"p"},"\u4ece\u6253\u5f00\u5230\u5173\u95ed")," \u7684\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u4f1a\u7ecf\u5386\u4e0b\u9762\u51e0\u4e2a\u6b65\u9aa4:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"beforeMount(\u6302\u8f7d\u4e4b\u524d)"),(0,i.kt)("li",{parentName:"ol"},"mount(\u6302\u8f7d)"),(0,i.kt)("li",{parentName:"ol"},"update(\u66f4\u65b0)"),(0,i.kt)("li",{parentName:"ol"},"unmount(\u5378\u8f7d)")),(0,i.kt)("h2",{id:"garfish-\u751f\u547d\u5468\u671f"},"Garfish \u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"lifecycle",src:n(73691).Z,width:"982",height:"1851"})))}m.isMDXComponent=!0},73691:function(e,t,n){t.Z=n.p+"assets/images/lifecycle-3b72a5a262249ca32ab613510e0d368d.png"}}]);