"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4711],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38781:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=t(45443),a=t(13010),o=(t(59496),t(49613)),i=["components"],p={sidebar_position:7},l="FAQ",s={unversionedId:"lerna/faq",id:"lerna/faq",title:"FAQ",description:"Lerna boostrap --hoist",source:"@site/engineering/lerna/faq.md",sourceDirName:"lerna",slug:"/lerna/faq",permalink:"/study-notes/engineering/lerna/faq",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638952634,formattedLastUpdatedAt:"12/8/2021",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar",previous:{title:"\u9047\u5230\u7684\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",permalink:"/study-notes/engineering/lerna/build-cli/qa"},next:{title:"Linux\u5165\u95e8\u5b66\u4e60",permalink:"/study-notes/engineering/linux/initial"}},c={},u=[{value:"Lerna boostrap --hoist",id:"lerna-boostrap---hoist",level:2},{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"lerna-boostrap---hoist"},"Lerna boostrap --hoist"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"lerna(v3.22.1)"),"\u4e2d\uff0c\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"npmClient"),"\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),"\u65f6\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"p"},"hoist"),"\u53c2\u6570\u65f6\u6267\u884c\u4f1a\u62a5\u9519\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"--hoist is not supported with --npm-client=yarn, use yarn workspaces instead\n")),(0,o.kt)("h3",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"yarn workspace"),"\uff0c\u5e76\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"lerna"),"\u4e2d\u5f00\u542f\u8be5\u529f\u80fd\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"lerna bootstrap"),"\u547d\u4ee4\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"),"\u4ee3\u7406\uff0c\u7b49\u4ef7\u4e8e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"workspace"),"\u7684\u6839\u76ee\u5f55\u4e0b\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"),"\u3002"),(0,o.kt)("p",null,"\u76f8\u5173\u914d\u7f6e\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lerna.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "npmClient": "yarn",\n  "useWorkspaces": true,\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"package.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "workspaces": [\n    "packages/*"\n  ],\n}\n')),(0,o.kt)("p",null,"\u8fd9\u4e48\u505a\u662f\u56e0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),"\u672c\u8eab\u63d0\u4f9b\u4e86\u8f83",(0,o.kt)("inlineCode",{parentName:"p"},"lerna"),"\u66f4\u597d\u7684\u4f9d\u8d56\u5206\u6790\u4e0e",(0,o.kt)("inlineCode",{parentName:"p"},"hoisting"),"\u7684\u529f\u80fd\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),"\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/yarn/blob/master/src/package-hoister.js"},"hoisting\u7b97\u6cd5"),"\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),"\u4f1a\u5f00\u542f",(0,o.kt)("inlineCode",{parentName:"p"},"hoist"),"\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,o.kt)("strong",{parentName:"p"},"nohoist\u9009\u9879"),(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/lang/en/docs/workspaces/#toc-limitations-caveats"},"\u624b\u52a8\u5173\u95ed"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "workspaces": {\n    "packages": [\n      "packages/*",\n    ],\n    "nohoist": [\n      "**"\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"\u867d\u7136",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),"\u63d0\u4f9b\u7684\u8f83\u597d\u7684\u5e95\u5c42\u4f9d\u8d56\u5904\u7406\u7684\u652f\u6301\uff0c\u4f46",(0,o.kt)("inlineCode",{parentName:"p"},"lerna"),"\u63d0\u4f9b\u4e86\u66f4\u9ad8\u5c42\u7684\u66f4\u65b9\u4fbf\u5b9e\u7528\u7684\u5404\u79cd\u547d\u4ee4\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"))}m.isMDXComponent=!0}}]);