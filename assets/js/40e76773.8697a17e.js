"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5494],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),y=o,m=p["".concat(u,".").concat(y)]||p[y]||f[y]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},11390:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});r(59496);var n=r(49613);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={},c="CSRF \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-Site Request Forgery)",u={unversionedId:"security/csrf",id:"security/csrf",title:"CSRF \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-Site Request Forgery)",description:"- \u9a8c\u8bc1 HTTP Header Referrer",source:"@site/interview/security/csrf.md",sourceDirName:"security",slug:"/security/csrf",permalink:"/study-notes/interview/security/csrf",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1645934118,formattedLastUpdatedAt:"Feb 27, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"React Fiber",permalink:"/study-notes/interview/react/fiber"},next:{title:"XSS",permalink:"/study-notes/interview/security/xss"}},s={},l=[],f={toc:l};function p(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"csrf-\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020cross-site-request-forgery"}),"CSRF \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-Site Request Forgery)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1 HTTP Header Referrer"),(0,n.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u7801"),(0,n.kt)("li",{parentName:"ul"},"SameSite"),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 token \u9a8c\u8bc1")),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html"}),"\u524d\u7aef\u5b89\u5168\u7cfb\u5217\uff08\u4e8c\uff09\uff1a\u5982\u4f55\u9632\u6b62CSRF\u653b\u51fb\uff1f")))}p.isMDXComponent=!0}}]);