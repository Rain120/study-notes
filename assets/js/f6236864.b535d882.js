"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8269],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37502:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(45443),a=n(13010),o=(n(59496),n(49613)),i=["components"],s={sidebar_position:1},u=void 0,l={unversionedId:"react/hooks/useState",id:"react/hooks/useState",title:"useState",description:"\u7528\u4e8e\u4e3a\u51fd\u6570\u7ec4\u4ef6\u5f15\u5165\u72b6\u6001 (state)\u3002\u7eaf\u51fd\u6570\u4e0d\u80fd\u6709\u72b6\u6001\uff0c\u6240\u4ee5\u628a\u72b6\u6001\u653e\u5728\u94a9\u5b50\u91cc\u9762\u3002",source:"@site/fe/react/hooks/useState.md",sourceDirName:"react/hooks",slug:"/react/hooks/useState",permalink:"/study-notes/fe/react/hooks/useState",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"\u76ee\u5f55",permalink:"/study-notes/fe/react/hooks/base"},next:{title:"useEffect",permalink:"/study-notes/fe/react/hooks/useEffect"}},c={},p=[{value:"function state vs class state",id:"function-state-vs-class-state",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7528\u4e8e\u4e3a\u51fd\u6570\u7ec4\u4ef6\u5f15\u5165\u72b6\u6001 ",(0,o.kt)("inlineCode",{parentName:"p"},"(state)"),"\u3002\u7eaf\u51fd\u6570\u4e0d\u80fd\u6709\u72b6\u6001\uff0c\u6240\u4ee5\u628a\u72b6\u6001\u653e\u5728\u94a9\u5b50\u91cc\u9762\u3002"),(0,o.kt)("p",null,"\u4f5c\u7528: \u5b9a\u4e49\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"state")),(0,o.kt)("p",null,"\u53c2\u6570: \u521d\u59cb\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")),(0,o.kt)("p",null,"\u8fd4\u56de\u503c: ","[\u5f53\u524d ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," , \u66f4\u65b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u51fd\u6570]"," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hooks"),"\u7684setState",(0,o.kt)("strong",{parentName:"li"},"\u4e0d\u4f1a\u5408\u5e76"),"\u65e7\u72b6\u6001\uff0c\u800c\u662f",(0,o.kt)("strong",{parentName:"li"},"\u5b8c\u5168\u66ff\u4ee3"),"\u4e86\u65e7\u7684\u72b6\u6001")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nfunction Example() {\n  // \u58f0\u660e\u4e00\u4e2a\u53eb \"count\" \u7684 state \u53d8\u91cf\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"function-state-vs-class-state"},"function state vs class state"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"function state")," \u7684\u9897\u7c92\u5ea6\u66f4\u7ec6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"function state")," \u4fdd\u5b58\u7684\u662f\u5feb\u7167\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"class state"),"\u4fdd\u5b58\u7684\u662f\u5f15\u7528"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"function state")," \u5fc5\u987b\u4fdd\u8bc1\u662f\u4e2a\u65b0\u7684\u5f15\u7528\uff0c ",(0,o.kt)("inlineCode",{parentName:"li"},"class state"))))}m.isMDXComponent=!0}}]);