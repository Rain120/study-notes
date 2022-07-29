"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[7495],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,y=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95237:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});r(59496);var n=r(49613);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={},l="XSS",u={unversionedId:"security/xss",id:"security/xss",title:"XSS",description:"- \u6301\u4e45\u578b",source:"@site/interview/security/xss.md",sourceDirName:"security",slug:"/security/xss",permalink:"/study-notes/interview/security/xss",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1645934118,formattedLastUpdatedAt:"Feb 27, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"CSRF \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-Site Request Forgery)",permalink:"/study-notes/interview/security/csrf"}},c={},p=[],s={toc:p};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"xss"}),"XSS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6301\u4e45\u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u4e8e\u5e26\u6709\u7528\u6237\u4fdd\u5b58\u6570\u636e\u7684\u7f51\u7ad9\u529f\u80fd\uff0c\u5982\u8bba\u575b\u53d1\u5e16\u3001\u5546\u54c1\u8bc4\u8bba\u3001\u7528\u6237\u79c1\u4fe1\u7b49\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u975e\u6301\u4e45\u578b(\u53cd\u5c04\u578b XSS)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u4e8e\u901a\u8fc7 URL \u4f20\u9012\u53c2\u6570\u7684\u529f\u80fd\uff0c\u5982\u7f51\u7ad9\u641c\u7d22\u3001\u8df3\u8f6c\u7b49"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DOM \u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DOM \u578b XSS \u653b\u51fb\u4e2d\uff0c\u53d6\u51fa\u548c\u6267\u884c\u6076\u610f\u4ee3\u7801\u7531\u6d4f\u89c8\u5668\u7aef\u5b8c\u6210\uff0c\u5c5e\u4e8e\u524d\u7aef JavaScript \u81ea\u8eab\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u800c\u5176\u4ed6\u4e24\u79cd XSS \u90fd\u5c5e\u4e8e\u670d\u52a1\u7aef\u7684\u5b89\u5168\u6f0f\u6d1e\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"HttpOnly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8f6c\u4e49")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"CSP Content-Security-Policy(\u5185\u5bb9\u5b89\u5168\u534f\u8bae) ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP"}),"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP")))),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"https://tech.meituan.com/2018/09/27/fe-security.html"}),"\u524d\u7aef\u5b89\u5168\u7cfb\u5217\uff08\u4e00\uff09\uff1a\u5982\u4f55\u9632\u6b62XSS\u653b\u51fb\uff1f")))}f.isMDXComponent=!0}}]);