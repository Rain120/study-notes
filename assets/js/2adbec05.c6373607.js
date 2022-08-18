"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5737],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=i(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,u(u({ref:t},p),{},{components:n})):r.createElement(m,u({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30710:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});n(59496);var r=n(49613);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={},l="\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1",c={unversionedId:"javascript/key-concept/bubble-capture",id:"javascript/key-concept/bubble-capture",title:"\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1",description:"DOM2 \u4e8b\u4ef6\u6a21\u578b\u5305\u542b\u4e09\u4e2a\u9636\u6bb5\u3002",source:"@site/fe/javascript/key-concept/bubble-capture.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/bubble-capture",permalink:"/study-notes/fe/javascript/key-concept/bubble-capture",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647435868,formattedLastUpdatedAt:"Mar 16, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5b66\u4e60\u8d44\u6e90",permalink:"/study-notes/fe/javascript/resource"},next:{title:"call apply bind",permalink:"/study-notes/fe/javascript/key-concept/call-apply-bind"}},i={},p=[{value:"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6",id:"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6",level:2},{value:"blur &amp; focus",id:"blur--focus",level:3},{value:"scroll",id:"scroll",level:3},{value:"mouseleave &amp; mouseenter",id:"mouseleave--mouseenter",level:3},{value:"Media\u4e8b\u4ef6",id:"media\u4e8b\u4ef6",level:3}],s={toc:p};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1"}),"\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1"),(0,r.kt)("p",null,"DOM2 \u4e8b\u4ef6\u6a21\u578b\u5305\u542b\u4e09\u4e2a\u9636\u6bb5\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"dom.addEventListener(\n    event,\n    function(e) {\n        // \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\n    },\n    // \u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5\n    // useCapture \n    true\n);\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"\u5904\u4e8e\u76ee\u6807\u9636\u6bb5"),(0,r.kt)("li",{parentName:"ol"},"\u4e8b\u4ef6\u5192\u6ce1\u9636\u6bb5")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"dom.addEventListener(\n    event,\n    function(e) {\n        // \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\n    },\n    // \u4e8b\u4ef6\u5192\u6ce1\u9636\u6bb5\n    // useCapture \n    true\n);\n")),(0,r.kt)("p",null,"\u6355\u83b7\u662f\u4ece\u4e0a\u5f80\u4e0b\u5230\u8fbe\u76ee\u6807\u5143\u7d20, \u5192\u6ce1\u662f\u4ece\u76ee\u6807\u5143\u7d20\u5f80\u4e0a\u5230\u8fbe window\u3002"),(0,r.kt)("h2",o({},{id:"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6"}),"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6"),(0,r.kt)("admonition",o({},{type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6\u51e0\u4e4e\u90fd\u65e0\u6cd5\u53d6\u6d88\u3002\u5373: preventDefault \u548c stopPropagation \u4e0d\u4f1a\u8d77\u4f5c\u7528\u3002")),(0,r.kt)("h3",o({},{id:"blur--focus"}),"blur & focus"),(0,r.kt)("p",null,"focusout/focusin \u4e8b\u4ef6\u4f1a\u5192\u6ce1\u3002\u5982\u679c\u540c\u65f6\u5b58\u5728\u7684\u8bdd, focus \u5148\u4e8e focusin, blur \u5148\u4e8e focusout\u3002"),(0,r.kt)("h3",o({},{id:"scroll"}),"scroll"),(0,r.kt)("h3",o({},{id:"mouseleave--mouseenter"}),"mouseleave & mouseenter"),(0,r.kt)("p",null,"mouseout/mouseover \u4f1a\u89e6\u53d1\u5192\u6ce1\u3002"),(0,r.kt)("h3",o({},{id:"media\u4e8b\u4ef6"}),"Media\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"onpause \u5f53\u5a92\u4ecb\u88ab\u7528\u6237\u6216\u7a0b\u5e8f\u6682\u505c\u65f6\u8fd0\u884c\u7684\u811a\u672c\nonplay  \u5f53\u5a92\u4ecb\u5df2\u5c31\u7eea\u53ef\u4ee5\u5f00\u59cb\u64ad\u653e\u65f6\u8fd0\u884c\u7684\u811a\u672c\nonplaying \u5f53\u5a92\u4ecb\u5df2\u5f00\u59cb\u64ad\u653e\u65f6\u8fd0\u884c\u7684\u811a\u672c\nonsuspend \u5728\u5a92\u4ecb\u6570\u636e\u5b8c\u5168\u52a0\u8f7d\u4e4b\u524d\u4e0d\u8bba\u4f55\u79cd\u539f\u56e0\u7ec8\u6b62\u53d6\u56de\u5a92\u4ecb\u6570\u636e\u65f6\u8fd0\u884c\n")))}f.isMDXComponent=!0}}]);