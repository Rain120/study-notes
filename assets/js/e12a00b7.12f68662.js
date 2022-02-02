"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[977],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(o,".").concat(m)]||s[m]||d[m]||p;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43654:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),l=["components"],i={},o="Webpack Tapable",c={unversionedId:"webpack/tapable",id:"webpack/tapable",title:"Webpack Tapable",description:"Tapable \u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e93\uff0c\u5141\u8bb8\u4f60\u5bf9\u4e00\u4e2a Javascript \u6a21\u5757\u6dfb\u52a0\u548c\u5e94\u7528\u63d2\u4ef6\u3002\u5b83\u53ef\u4ee5\u88ab\u7ee7\u627f\u6216\u6df7\u5165\u5230\u5176\u4ed6\u6a21\u5757\u4e2d\u3002\u7c7b\u4f3c\u4e8e NodeJS \u7684 EventEmitter \u7c7b\uff0c\u4e13\u6ce8\u4e8e\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u89e6\u53d1\u548c\u5904\u7406\u3002\u9664\u6b64\u4e4b\u5916\uff0cTapable \u8fd8\u5141\u8bb8\u4f60\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\uff0c\u8bbf\u95ee\u4e8b\u4ef6\u7684 \u89e6\u53d1\u8005(emittee)\u6216 \u63d0\u4f9b\u8005(producer)\u3002",source:"@site/engineering/webpack/tapable.md",sourceDirName:"webpack",slug:"/webpack/tapable",permalink:"/study-notes/engineering/webpack/tapable",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643793612,formattedLastUpdatedAt:"2/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a Webpack",permalink:"/study-notes/engineering/webpack/mini-webpack"},next:{title:"Webpack \u57fa\u7840\u77e5\u8bc6",permalink:"/study-notes/engineering/webpack/webpack-base"}},u=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[],level:2},{value:"Hooks\u5206\u7c7b",id:"hooks\u5206\u7c7b",children:[],level:2},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],d={toc:u};function s(e){var t=e.components,i=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"webpack-tapable"},"Webpack Tapable"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/webpack/tapable"},"Tapable")," \u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e93\uff0c\u5141\u8bb8\u4f60\u5bf9\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"Javascript")," \u6a21\u5757\u6dfb\u52a0\u548c\u5e94\u7528\u63d2\u4ef6\u3002\u5b83\u53ef\u4ee5\u88ab\u7ee7\u627f\u6216\u6df7\u5165\u5230\u5176\u4ed6\u6a21\u5757\u4e2d\u3002\u7c7b\u4f3c\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"NodeJS")," \u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"EventEmitter")," \u7c7b\uff0c\u4e13\u6ce8\u4e8e\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u89e6\u53d1\u548c\u5904\u7406\u3002\u9664\u6b64\u4e4b\u5916\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"Tapable")," \u8fd8\u5141\u8bb8\u4f60\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\uff0c\u8bbf\u95ee\u4e8b\u4ef6\u7684 \u89e6\u53d1\u8005",(0,p.kt)("inlineCode",{parentName:"p"},"(emittee)"),"\u6216 \u63d0\u4f9b\u8005",(0,p.kt)("inlineCode",{parentName:"p"},"(producer)"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"tapable.png",src:n(73314).Z})),(0,p.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,p.kt)("p",null,"\u7c7b\u4f3c\u4e8e",(0,p.kt)("inlineCode",{parentName:"p"},"Nodejs"),"\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"EventEmitter"),"\u7c7b, \u4e13\u6ce8\u4e8e\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u89e6\u53d1\u548c\u5904\u7406\u3002"),(0,p.kt)("h2",{id:"hooks\u5206\u7c7b"},"Hooks\u5206\u7c7b"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,p.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"Basic")),(0,p.kt)("td",{parentName:"tr",align:null},"\u57fa\u7840\u7c7b\u578b\uff0c\u4e0d\u5173\u5fc3\uff0c\u4e0d\u4f9d\u8d56\u76d1\u542c\u51fd\u6570\u7684\u8fd4\u56de\u503c")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"Bail")),(0,p.kt)("td",{parentName:"tr",align:null},"\u4fdd\u9669\u5f0f\uff0c\u53ea\u8981\u76d1\u542c\u51fd\u6570\u4e2d\u6709\u8fd4\u56de\u503c(\u4e0d\u4e3a",(0,p.kt)("inlineCode",{parentName:"td"},"undefined"),")\uff0c\u5219\u8df3\u8fc7\u4e4b\u540e",(0,p.kt)("inlineCode",{parentName:"td"},"Hooks"),"\u7684\u76d1\u542c\u51fd\u6570")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"Waterfall")),(0,p.kt)("td",{parentName:"tr",align:null},"\u7011\u5e03\u5f0f\uff0c\u4e0a\u4e00\u6b65\u7684\u8fd4\u56de\u503c\u7ee7\u7eed\u4ea4\u7ed9\u4e0b\u4e00\u6b65\u5904\u7406\u548c\u4f7f\u7528")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"Loop")),(0,p.kt)("td",{parentName:"tr",align:null},"\u5faa\u73af\u7c7b\u578b\uff0c\u5982\u679c\u8be5\u76d1\u542c\u51fd\u6570\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"td"},"false"),", \u5219\u9000\u51fa\u5faa\u73af\uff0c\u5982\u679c\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"td"},"true"),"\u5219\u8fd9\u4e2a\u76d1\u542c\u51fd\u6570\u5faa\u73af\u6267\u884c")))),(0,p.kt)("h2",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,p.kt)("p",null,"\u6240\u6709\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"Hooks"),"\u5728\u5b9e\u4f8b\u5316\u65f6\u4f20\u5165\u7684\u53c2\u6570\u90fd\u4fdd\u6301\u8fd9\u4e2a\u89c4\u5219\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Eg:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const { SyncHook } = require('tapable');\n\nconst args = ['name', 'age'];\n\n/*\n * @description args \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u5b83\u7684\u957f\u5ea6\u4e0e tap \u5b9a\u4e49\u7684\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u957f\u5ea6\u4fdd\u6301\u4e00\u81f4\uff0c\u4e0e\u5185\u5bb9\u65e0\u5173\n * @params {string[] || undefined} args\n * @example ['name']\n */\n\nconst syncHook = new SyncHook(args);\n\nsyncHook.tap('Loader', (name, age) => {\n  // \u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u540d\u5b57\uff0c\u4e0d\u9700\u8981\u4e0e\u5b9a\u4e49\u7684args \u4fdd\u6301\u4e00\u81f4\n  console.log(name, age);\n});\n\nsyncHook.call('Rain120', 18);\n\n// args \u5b9a\u4e49\u4e86\u4e24\u4e2a\u53c2\u6570 name age\n// tap \u5728\u6ce8\u518c\u7684\u65f6\u5019\u4f7f\u7528\u4e86 name age\n// call \u4f20\u5165\u4e86 name age\n// \u5373: args \u7684\u957f\u5ea6\u51b3\u5b9a\u4e86 \u4f7f\u7528 \u548c \u4f20\u5165\u53c2\u6570\u7684\u957f\u5ea6\uff0c\u800c args \u4f20\u5165\u7684\u5185\u5bb9\u4e0d\u5f71\u54cd\u4f7f\u7528\n\n")),(0,p.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/plugins/#tapable"},"Webpack Tapable")))}s.isMDXComponent=!0},73314:function(e,t,n){t.Z=n.p+"assets/images/tapable-c1d623e6c1e14a66f15c09488c8392c5.png"}}]);