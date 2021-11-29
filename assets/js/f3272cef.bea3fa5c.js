"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2041],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(o,".").concat(m)]||f[m]||s[m]||p;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<p;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39701:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),i=["components"],l={title:"Tap Types(\u5e9f\u5f03)"},o=void 0,u={unversionedId:"typescript/taptypes",id:"typescript/taptypes",isDocsHomePage:!1,title:"Tap Types(\u5e9f\u5f03)",description:"\u524d\u8a00",source:"@site/fe/typescript/taptypes.md",sourceDirName:"typescript",slug:"/typescript/taptypes",permalink:"/study-notes/fe/typescript/taptypes",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638186201,formattedLastUpdatedAt:"11/29/2021",frontMatter:{title:"Tap Types(\u5e9f\u5f03)"},sidebar:"sidebar",previous:{title:"Quick Types(\u63a8\u8350\u7f51\u9875)",permalink:"/study-notes/fe/typescript/quicktype"},next:{title:"Tips",permalink:"/study-notes/fe/typescript/tips"}},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[{value:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a\u60f3\u6cd5\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a\u60f3\u6cd5",children:[],level:3}],level:2},{value:"\u57fa\u7840\u6784\u601d + \u8bbe\u8ba1",id:"\u57fa\u7840\u6784\u601d--\u8bbe\u8ba1",children:[],level:2},{value:"\u5b9e\u73b0\u96be\u70b9",id:"\u5b9e\u73b0\u96be\u70b9",children:[],level:2},{value:"\u4f53\u9a8c",id:"\u4f53\u9a8c",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],s={toc:c};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,p.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a\u60f3\u6cd5"},"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a\u60f3\u6cd5\uff1f"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u540e\u7aef\u63a5\u53e3\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"li"},"fastjson"),"\u8fc7\u6ee4\u5bfc\u81f4\u524d\u7aef\u5f88\u591a\u83ab\u540d\u7684\u517c\u5bb9\u548c",(0,p.kt)("inlineCode",{parentName:"li"},"bug"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"\u6709\u6ca1\u6709\u529e\u6cd5\u5feb\u901f\u5b9a\u4e49\u63a5\u53e3\u7684\u6570\u636e\u7ed3\u6784"))),(0,p.kt)("li",{parentName:"ul"},"\u5927\u91cf\u7684",(0,p.kt)("inlineCode",{parentName:"li"},"JSON"),"\u6570\u636e\u5feb\u901f\u5b8c\u6210\u7c7b\u578b\u5b9a\u4e49")),(0,p.kt)("h2",{id:"\u57fa\u7840\u6784\u601d--\u8bbe\u8ba1"},"\u57fa\u7840\u6784\u601d + \u8bbe\u8ba1"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"taptypes.png",src:n(60238).Z})),(0,p.kt)("h2",{id:"\u5b9e\u73b0\u96be\u70b9"},"\u5b9e\u73b0\u96be\u70b9"),(0,p.kt)("p",null,"\u2705 ",(0,p.kt)("inlineCode",{parentName:"p"},"JSON Schema")," \u8f6c\u6362 "),(0,p.kt)("p",null,"\u274e \u6570\u636e\u89e3\u6790"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7c7b\u578b\u5b9a\u4e49"),(0,p.kt)("li",{parentName:"ul"},"\u590d\u6742\u7c7b\u578b\u5b9a\u4e49")),(0,p.kt)("p",null,"\u274e \u64cd\u4f5c"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"cli")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"web")," \u53ef\u89c6\u5316")),(0,p.kt)("h2",{id:"\u4f53\u9a8c"},"\u4f53\u9a8c"),(0,p.kt)("p",null,"\u5148\u6ce8\u518c\u5305\uff0c\u6682\u65f6\u4e0d\u53ef\u4ee5\u4f7f\u7528"),(0,p.kt)("p",null,(0,p.kt)("del",{parentName:"p"},(0,p.kt)("a",{parentName:"del",href:"https://www.npmjs.com/package/tap-types"},"tap-types"))),(0,p.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/imcuttle/to-json-schema/blob/master/index.js"},"to-json-schema")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/quicktype/quicktype"},"quicktype")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/ritz078/transform"},"transform")))}f.isMDXComponent=!0},60238:function(e,t,n){t.Z=n.p+"assets/images/taptypes-0fde7c94912ae70f9a914907f96fc5e8.png"}}]);