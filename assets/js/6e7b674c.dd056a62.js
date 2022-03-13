"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6036],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(l,".").concat(k)]||d[k]||s[k]||r;return n?i.createElement(m,p(p({ref:t},u),{},{components:n})):i.createElement(m,p({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var c=2;c<r;c++)p[c]=n[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),p=["components"],o={},l="Quick Types(\u63a8\u8350\u7f51\u9875)",c={unversionedId:"typescript/quicktype",id:"typescript/quicktype",title:"Quick Types(\u63a8\u8350\u7f51\u9875)",description:"\u524d\u8a00",source:"@site/fe/typescript/quicktype.md",sourceDirName:"typescript",slug:"/typescript/quicktype",permalink:"/study-notes/fe/typescript/quicktype",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647177225,formattedLastUpdatedAt:"3/13/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"QA",permalink:"/study-notes/fe/typescript/qa"},next:{title:"Tap Types(\u5e9f\u5f03)",permalink:"/study-notes/fe/typescript/taptypes"}},u={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5feb\u6377\u751f\u6210\u5b9a\u4e49",id:"\u5feb\u6377\u751f\u6210\u5b9a\u4e49",level:2},{value:"\u53ef\u89c6\u5316\u64cd\u4f5c",id:"\u53ef\u89c6\u5316\u64cd\u4f5c",level:3},{value:"VSCode \u63d2\u4ef6",id:"vscode-\u63d2\u4ef6",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:s};function k(e){var t=e.components,o=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-types\u63a8\u8350\u7f51\u9875"},"Quick Types(\u63a8\u8350\u7f51\u9875)"),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u6211\u4e0a\u73ed\u5927\u534a\u5929\uff0c\u522b\u4eba\u624d\u521a\u6765; \u522b\u4eba\u5df2\u7ecf\u4e0b\u73ed\uff0c\u6211\u5374\u8fd8\u5728\u62fc\u6b7b\u62fc\u6d3b\u7684\u6572\u4ee3\u7801\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"1",src:n(60416).Z,width:"628",height:"614"})),(0,r.kt)("p",null,"\u8fd8\u4e0d\u662f\u56e0\u4e3a\u4f60\u6ca1\u6765\u770b\u5230\u8fd9\u7bc7\ud83d\udcd2\ud83d\udc34"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"zhuangbi.png",src:n(33913).Z,width:"480",height:"486"})),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u5c06\u7ed9\u5927\u5bb6\u63a8\u8350\u4e24\u4e2a\u4e1c\u897f",(0,r.kt)("inlineCode",{parentName:"p"},"(\u5176\u5b9e\u662f\u4e00\u4e2a\ud83e\udd17\ud83e\udd17\ud83e\udd17)"),"\uff0c\u8ba9\u5927\u5bb6\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),"\u5feb\u901f\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"TS"),"\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),"\u7b49\u591a\u79cd\u6570\u636e\u7ed3\u6784\u7684\u5b9a\u4e49\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Let's Go"),"\u3002"),(0,r.kt)("h2",{id:"\u5feb\u6377\u751f\u6210\u5b9a\u4e49"},"\u5feb\u6377\u751f\u6210\u5b9a\u4e49"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"quicktype"),"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"JSON Schema"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://blog.quicktype.io/graphql-with-quicktype/"},"GraphQL\u67e5\u8be2"),"\u751f\u6210\u5f3a\u7c7b\u578b\u7684\u6a21\u578b\u548c\u5e8f\u5217\u5316",(0,r.kt)("a",{parentName:"p",href:"https://blog.quicktype.io/graphql-with-quicktype/"},"\u7a0b\u5e8f"),"\uff0c\u4ece\u800c\u4f7f\u5728\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u4e2d\u5b89\u5168\u5730\u4f7f\u7528JSON\u7c7b\u578b\u53d8\u5f97\u8f7b\u800c\u6613\u4e3e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b83\u652f\u6301")," ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Python"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Go"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Ruby"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"C#"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Java"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Swift"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Rust"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Kotlin"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"C++"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Flow"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Objective-C"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Elm"),"\uff0c\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"JSON Schema"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ece",(0,r.kt)("inlineCode",{parentName:"li"},"JSON"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"JSON Schema"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"TypeScript"),"\u4ea4\u4e92\u5f0f\u751f\u6210\u7c7b\u578b\u548c\uff08\u53cd\uff09\u5e8f\u5217\u5316\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"JSON / JSON Schema / TypeScript"),"\u7c98\u8d34\u4e3a\u4ee3\u7801")),(0,r.kt)("h3",{id:"\u53ef\u89c6\u5316\u64cd\u4f5c"},"\u53ef\u89c6\u5316\u64cd\u4f5c"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"quicktype.gif",src:n(76571).Z,width:"1376",height:"732"})),(0,r.kt)("h3",{id:"vscode-\u63d2\u4ef6"},"VSCode \u63d2\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype"},"\u5b89\u88c5 Paste JSON as Code \ud83d\udc49\ud83d\udc49\ud83d\udc49")),(0,r.kt)("p",null,"\u4e00\u952e\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," \u6587\u4ef6\u8f6c\u6362\u4e3a\u4e00\u4e2a\u76ee\u6807\u8bed\u8a00\u7684\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"paste-json-as-code.gif",src:n(26661).Z,width:"929",height:"660"})),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"paste-json-as-code2.gif",src:n(82220).Z,width:"934",height:"642"})),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.quicktype.io/"},"Quick Type \u53ef\u89c6\u5316")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://transform.tools/"},"\u4f7f\u7528 transform.tools \ud83d\udc49\ud83d\udc49\ud83d\udc49")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/quicktype/quicktype"},"Github quicktype")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://blog.quicktype.io/first-look/"},"QuickType Help")))}k.isMDXComponent=!0},26661:function(e,t,n){t.Z=n.p+"assets/images/paste-json-as-code-51ef1ff9a4769af3fa5babf3f41a04cf.gif"},82220:function(e,t,n){t.Z=n.p+"assets/images/paste-json-as-code2-2d5469573cefc6ba787da46031fc3f33.gif"},76571:function(e,t,n){t.Z=n.p+"assets/images/quicktype-e5ce9f8c24de205705679e327944c70f.gif"},60416:function(e,t,n){t.Z=n.p+"assets/images/wenzhu-e0ddefbaefad5334ce6de17604a18d6d.png"},33913:function(e,t,n){t.Z=n.p+"assets/images/zhuangbi-064b817b081043b64b99d9f958ca6934.png"}}]);