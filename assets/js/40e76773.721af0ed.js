"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5494],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),y=o,m=f["".concat(u,".").concat(y)]||f[y]||p[y]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60311:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={},u="CSRF \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-Site Request Forgery)",s={unversionedId:"security/csrf",id:"security/csrf",title:"CSRF \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-Site Request Forgery)",description:"- \u9a8c\u8bc1 HTTP Header Referrer",source:"@site/interview/security/csrf.md",sourceDirName:"security",slug:"/security/csrf",permalink:"/study-notes/interview/security/csrf",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649302719,formattedLastUpdatedAt:"4/7/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4f5c\u7528\u57df\u94fe",permalink:"/study-notes/interview/javascript/scope-chain"},next:{title:"XSS",permalink:"/study-notes/interview/security/xss"}},l={},p=[],f={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"csrf-\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020cross-site-request-forgery"},"CSRF \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-Site Request Forgery)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1 HTTP Header Referrer"),(0,i.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u7801"),(0,i.kt)("li",{parentName:"ul"},"SameSite"),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 token \u9a8c\u8bc1")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html"},"\u524d\u7aef\u5b89\u5168\u7cfb\u5217\uff08\u4e8c\uff09\uff1a\u5982\u4f55\u9632\u6b62CSRF\u653b\u51fb\uff1f")))}y.isMDXComponent=!0}}]);