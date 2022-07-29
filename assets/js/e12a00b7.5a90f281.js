"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[977],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(k,p(p({ref:t},u),{},{components:n})):a.createElement(k,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});n(59496);var a=n(49613);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={},o="Webpack Tapable",i={unversionedId:"webpack/tapable",id:"webpack/tapable",title:"Webpack Tapable",description:"Tapable \u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e93\uff0c\u5141\u8bb8\u4f60\u5bf9\u4e00\u4e2a Javascript \u6a21\u5757\u6dfb\u52a0\u548c\u5e94\u7528\u63d2\u4ef6\u3002\u5b83\u53ef\u4ee5\u88ab\u7ee7\u627f\u6216\u6df7\u5165\u5230\u5176\u4ed6\u6a21\u5757\u4e2d\u3002\u7c7b\u4f3c\u4e8e NodeJS \u7684 EventEmitter \u7c7b\uff0c\u4e13\u6ce8\u4e8e\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u89e6\u53d1\u548c\u5904\u7406\u3002\u9664\u6b64\u4e4b\u5916\uff0cTapable \u8fd8\u5141\u8bb8\u4f60\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\uff0c\u8bbf\u95ee\u4e8b\u4ef6\u7684 \u89e6\u53d1\u8005(emittee)\u6216 \u63d0\u4f9b\u8005(producer)\u3002",source:"@site/engineering/webpack/tapable.md",sourceDirName:"webpack",slug:"/webpack/tapable",permalink:"/study-notes/engineering/webpack/tapable",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1639054678,formattedLastUpdatedAt:"Dec 9, 2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Plugin",permalink:"/study-notes/engineering/webpack/plugins"},next:{title:"Webpack \u6027\u80fd\u4f18\u5316",permalink:"/study-notes/engineering/webpack/webpack-optimize"}},c={},u=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"Hooks\u5206\u7c7b",id:"hooks\u5206\u7c7b",level:2},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],s={toc:u};function d(e){var{components:t}=e,p=l(e,["components"]);return(0,a.kt)("wrapper",r({},s,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"webpack-tapable"}),"Webpack Tapable"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/webpack/tapable"}),"Tapable")," \u662f\u4e00\u4e2a\u5c0f\u578b\u7684\u5e93\uff0c\u5141\u8bb8\u4f60\u5bf9\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Javascript")," \u6a21\u5757\u6dfb\u52a0\u548c\u5e94\u7528\u63d2\u4ef6\u3002\u5b83\u53ef\u4ee5\u88ab\u7ee7\u627f\u6216\u6df7\u5165\u5230\u5176\u4ed6\u6a21\u5757\u4e2d\u3002\u7c7b\u4f3c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeJS")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter")," \u7c7b\uff0c\u4e13\u6ce8\u4e8e\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u89e6\u53d1\u548c\u5904\u7406\u3002\u9664\u6b64\u4e4b\u5916\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Tapable")," \u8fd8\u5141\u8bb8\u4f60\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\uff0c\u8bbf\u95ee\u4e8b\u4ef6\u7684 \u89e6\u53d1\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"(emittee)"),"\u6216 \u63d0\u4f9b\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"(producer)"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tapable.png",src:n(8760).Z,width:"2026",height:"2226"})),(0,a.kt)("h2",r({},{id:"\u5b9a\u4e49"}),"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Nodejs"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter"),"\u7c7b, \u4e13\u6ce8\u4e8e\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u89e6\u53d1\u548c\u5904\u7406\u3002"),(0,a.kt)("h2",r({},{id:"hooks\u5206\u7c7b"}),"Hooks\u5206\u7c7b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Basic")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u57fa\u7840\u7c7b\u578b\uff0c\u4e0d\u5173\u5fc3\uff0c\u4e0d\u4f9d\u8d56\u76d1\u542c\u51fd\u6570\u7684\u8fd4\u56de\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Bail")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u4fdd\u9669\u5f0f\uff0c\u53ea\u8981\u76d1\u542c\u51fd\u6570\u4e2d\u6709\u8fd4\u56de\u503c(\u4e0d\u4e3a",(0,a.kt)("inlineCode",{parentName:"td"},"undefined"),")\uff0c\u5219\u8df3\u8fc7\u4e4b\u540e",(0,a.kt)("inlineCode",{parentName:"td"},"Hooks"),"\u7684\u76d1\u542c\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Waterfall")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u7011\u5e03\u5f0f\uff0c\u4e0a\u4e00\u6b65\u7684\u8fd4\u56de\u503c\u7ee7\u7eed\u4ea4\u7ed9\u4e0b\u4e00\u6b65\u5904\u7406\u548c\u4f7f\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Loop")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5faa\u73af\u7c7b\u578b\uff0c\u5982\u679c\u8be5\u76d1\u542c\u51fd\u6570\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"td"},"false"),", \u5219\u9000\u51fa\u5faa\u73af\uff0c\u5982\u679c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"td"},"true"),"\u5219\u8fd9\u4e2a\u76d1\u542c\u51fd\u6570\u5faa\u73af\u6267\u884c")))),(0,a.kt)("h2",r({},{id:"\u53c2\u6570\u5217\u8868"}),"\u53c2\u6570\u5217\u8868"),(0,a.kt)("p",null,"\u6240\u6709\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Hooks"),"\u5728\u5b9e\u4f8b\u5316\u65f6\u4f20\u5165\u7684\u53c2\u6570\u90fd\u4fdd\u6301\u8fd9\u4e2a\u89c4\u5219\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Eg:")),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-javascript"}),"const { SyncHook } = require('tapable');\n\nconst args = ['name', 'age'];\n\n/*\n * @description args \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u5b83\u7684\u957f\u5ea6\u4e0e tap \u5b9a\u4e49\u7684\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u957f\u5ea6\u4fdd\u6301\u4e00\u81f4\uff0c\u4e0e\u5185\u5bb9\u65e0\u5173\n * @params {string[] || undefined} args\n * @example ['name']\n */\n\nconst syncHook = new SyncHook(args);\n\nsyncHook.tap('Loader', (name, age) => {\n  // \u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u540d\u5b57\uff0c\u4e0d\u9700\u8981\u4e0e\u5b9a\u4e49\u7684args \u4fdd\u6301\u4e00\u81f4\n  console.log(name, age);\n});\n\nsyncHook.call('Rain120', 18);\n\n// args \u5b9a\u4e49\u4e86\u4e24\u4e2a\u53c2\u6570 name age\n// tap \u5728\u6ce8\u518c\u7684\u65f6\u5019\u4f7f\u7528\u4e86 name age\n// call \u4f20\u5165\u4e86 name age\n// \u5373: args \u7684\u957f\u5ea6\u51b3\u5b9a\u4e86 \u4f7f\u7528 \u548c \u4f20\u5165\u53c2\u6570\u7684\u957f\u5ea6\uff0c\u800c args \u4f20\u5165\u7684\u5185\u5bb9\u4e0d\u5f71\u54cd\u4f7f\u7528\n\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u8003\u8d44\u6599"}),"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://webpack.js.org/api/plugins/#tapable"}),"Webpack Tapable")))}d.isMDXComponent=!0},8760:function(e,t,n){t.Z=n.p+"assets/images/tapable-c1d623e6c1e14a66f15c09488c8392c5.png"}}]);