"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2541],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(n),y=i,d=f["".concat(a,".").concat(y)]||f[y]||u[y]||s;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return c}});n(59496);var r=n(49613);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={},p="Typescript Eslint QA",a={unversionedId:"typescript/ts-eslint-qa",id:"typescript/ts-eslint-qa",title:"Typescript Eslint QA",description:"\u9879\u76ee\u914d\u7f6e\u5b8c eslint\u4e4b\u540e\u62a5\ud83d\udc47\u9519\u8bef",source:"@site/fe/typescript/ts-eslint-qa.md",sourceDirName:"typescript",slug:"/typescript/ts-eslint-qa",permalink:"/study-notes/fe/typescript/ts-eslint-qa",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"Dec 3, 2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Tips",permalink:"/study-notes/fe/typescript/tips"},next:{title:"AST",permalink:"/study-notes/fe/babel/ast/"}},l={},c=[{value:"\u9879\u76ee\u914d\u7f6e\u5b8c eslint\u4e4b\u540e\u62a5\ud83d\udc47\u9519\u8bef",id:"\u9879\u76ee\u914d\u7f6e\u5b8c-eslint\u4e4b\u540e\u62a5\u9519\u8bef",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],u={toc:c};function f(e){var{components:t}=e,o=s(e,["components"]);return(0,r.kt)("wrapper",i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"typescript-eslint-qa"}),"Typescript Eslint QA"),(0,r.kt)("h2",i({},{id:"\u9879\u76ee\u914d\u7f6e\u5b8c-eslint\u4e4b\u540e\u62a5\u9519\u8bef"}),"\u9879\u76ee\u914d\u7f6e\u5b8c eslint\u4e4b\u540e\u62a5\ud83d\udc47\u9519\u8bef"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Parsing error: ImportDeclaration should appear when the mode is ES6 and in the module context")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ts-eslint-parsing-error.png",src:n(57186).Z,width:"1428",height:"322"})),(0,r.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-json"}),'// .eslintrc\n{\n  "parser": "@typescript-eslint/parser",\n  "parserOptions": {\n    // //\u4e5f\u5c31\u662fES6\u8bed\u6cd5\u652f\u6301\u7684\u610f\u601d\n    "ecmaVersion": 6,\n    "sourceType": "module",\n    "ecmaFeatures": {\n        "modules": true\n    }\n  },\n  "plugins": ["@typescript-eslint"],\n  // ...\n}\n\n')),(0,r.kt)("h2",i({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/eslint/eslint-scope/issues/55"}),"eslint issue 55")),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/eslint/eslint-scope/issues/56"}),"eslint issue 56")),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/eslint/eslint/issues/4344"}),"eslint issue 4344")),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"https://eslint.org/docs/user-guide/configuring#specifying-parser-options"}),"eslint specifying-parser-options")))}f.isMDXComponent=!0},57186:function(e,t,n){t.Z=n.p+"assets/images/ts-eslint-parsing-error-3ffe8bd015208416bdcda409ec578c88.png"}}]);