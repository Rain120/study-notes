"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5932],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51122:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={},l="\u5168\u91cf\u5f15\u5165",s={unversionedId:"javascript/es-study/import/import-full",id:"javascript/es-study/import/import-full",isDocsHomePage:!1,title:"\u5168\u91cf\u5f15\u5165",description:"\u524d\u8a00",source:"@site/fe/javascript/es-study/import/import-full.md",sourceDirName:"javascript/es-study/import",slug:"/javascript/es-study/import/import-full",permalink:"/study-notes/fe/javascript/es-study/import/import-full",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5f02\u6b65\u5f15\u5165",permalink:"/study-notes/fe/javascript/es-study/import/import-async"},next:{title:"\u5e38\u7528\u57fa\u7840\u77e5\u8bc6",permalink:"/study-notes/fe/javascript/regular-expression/regular-expression"}},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"Typescript \u4f7f\u7528",id:"typescript-\u4f7f\u7528",children:[],level:2},{value:"Typescript \u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1f",id:"typescript-\u662f\u600e\u4e48\u5b9e\u73b0\u7684",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],m={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5168\u91cf\u5f15\u5165"},"\u5168\u91cf\u5f15\u5165"),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n\n// VS\n\nimport * as React from 'react';\n")),(0,a.kt)("p",null,"\u8fd9\u4e24\u79cd\u65b9\u5f0f\u6709\u4ec0\u4e48\u533a\u522b\uff1f"),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053",(0,a.kt)("inlineCode",{parentName:"p"},"React"),"\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ES6"),"\u5b9a\u4e49\u9ed8\u8ba4\u5bfc\u5165\u7684\u65b9\u5f0f\uff0c\u5373\u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ES Module"),"\u3002\u6211\u4eec\u53d1\u73b0\u5728\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u6216\u8005\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Babel")," \u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u65f6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u628a\u5b83\u5f53\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"ES Module default")," \u6765\u5bfc\u5165\uff0c\u4e3a\u4ec0\u4e48\u5462\uff1f\u5982\u4f55\u914d\u7f6e\u5462\uff1f"),(0,a.kt)("h2",{id:"typescript-\u4f7f\u7528"},"Typescript \u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u6587\u4ef6\u4e2d\u6709\u4e00\u4e2a\u9009\u9879\u53eb\u505a ",(0,a.kt)("inlineCode",{parentName:"p"},"allowSyntheticDefaultImports")),(0,a.kt)("p",null,"\u5f53\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c \u5e76\u4e14\u6a21\u5757",(0,a.kt)("strong",{parentName:"p"},"\u6ca1\u6709"),"\u663e\u5f0f\u6307\u5b9a\u9ed8\u8ba4\u5bfc\u51fa\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"--allowSyntheticDefaultImports")," \u53ef\u4ee5\u8ba9\u4f60\u8fd9\u6837\u5199\u5bfc\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\n')),(0,a.kt)("p",null,"\u800c\u4e0d\u9700\u8981:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\n')),(0,a.kt)("h2",{id:"typescript-\u662f\u600e\u4e48\u5b9e\u73b0\u7684"},"Typescript \u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/blob/4d506240ded68cf099c952b889a3f93b09f703ed/src/compiler/utilities.ts#L5986"},"src/compiler/utilities.ts: getAllowSyntheticDefaultImports")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export function getAllowSyntheticDefaultImports(compilerOptions: CompilerOptions) {\n  const moduleKind = getEmitModuleKind(compilerOptions);\n  return compilerOptions.allowSyntheticDefaultImports !== undefined\n      ? compilerOptions.allowSyntheticDefaultImports\n      : compilerOptions.esModuleInterop ||\n      moduleKind === ModuleKind.System;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/blob/c497b487a78c049a11ba99b97dccf6126b2d492a/src/services/codefixes/importFixes.ts#L623"},"src/services/codefixes/importFixes.ts: getExportEqualsImportKind")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getExportEqualsImportKind(importingFile: SourceFile, compilerOptions: CompilerOptions): ImportKind {\n    const allowSyntheticDefaults = getAllowSyntheticDefaultImports(compilerOptions);\n    // 1. 'import =' will not work in es2015+, so the decision is between a default\n    //    and a namespace import, based on allowSyntheticDefaultImports/esModuleInterop.\n    if (getEmitModuleKind(compilerOptions) >= ModuleKind.ES2015) {\n        return allowSyntheticDefaults ? ImportKind.Default : ImportKind.Namespace;\n    }\n    // 2. 'import =' will not work in JavaScript, so the decision is between a default\n    //    and const/require.\n    if (isInJSFile(importingFile)) {\n        return isExternalModule(importingFile) ? ImportKind.Default : ImportKind.CommonJS;\n    }\n    // 3. At this point the most correct choice is probably 'import =', but people\n    //    really hate that, so look to see if the importing file has any precedent\n    //    on how to handle it.\n    for (const statement of importingFile.statements) {\n        if (isImportEqualsDeclaration(statement)) {\n            return ImportKind.CommonJS;\n        }\n    }\n    // 4. We have no precedent to go on, so just use a default import if\n    //    allowSyntheticDefaultImports/esModuleInterop is enabled.\n    return allowSyntheticDefaults ? ImportKind.Default : ImportKind.CommonJS;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"babel")," \u540c\u7406"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," ",(0,a.kt)("inlineCode",{parentName:"p"},"React"),"\u56e2\u961f\u63a8\u8350\u4f7f\u7528 "),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react';\nimport { useState } from 'react';\n"))),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import"},"MDN - import")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/55285737/import-as-react-from-react-vs-import-react-from-react"},"import * as React from 'react'; vs import React from 'react';")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/typescript/comments/dy0ix8/import_as_react_vs_import_react/"},"import * as React vs. import React")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/zh/tsconfig#allowSyntheticDefaultImports"},"TSconfig allowSyntheticDefaultImports")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/pull/26866/commits/aaa723e2d2ee393331ac9d8eba29d66b80f415fe"},"Github PR#26866 - Enable allowSyntheticDefaultImports if esModuleInterop is enabled")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/pull/18102"},'Github PR#18102 - Codemod to import * as React from "react"')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"spec - es modules")))}u.isMDXComponent=!0}}]);