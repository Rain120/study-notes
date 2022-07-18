"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2175],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54308:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),i=["components"],p={sidebar_position:5},l="Loader \u5339\u914d\u89c4\u5219",s={unversionedId:"webpack/loader/match",id:"webpack/loader/match",title:"Loader \u5339\u914d\u89c4\u5219",description:"\u5f53\u7136\uff0cwebpack\u53ef\u4ee5\u901a\u8fc7\u5f15\u5165\u6a21\u5757\u7684\u8def\u5f84\u89c4\u5219\uff0c\u6765\u5224\u65ad\u662f\u5426\u4f7f\u7528\u5185\u8054\u6a21\u5f0f\u6216\u8005\u5254\u9664\u4e00\u4e9b\u524d\u7f6e(pre) Loader, \u540e\u7f6e(post) , \u666e\u901a(normal) Loader\u3002",source:"@site/engineering/webpack/loader/match.md",sourceDirName:"webpack/loader",slug:"/webpack/loader/match",permalink:"/study-notes/engineering/webpack/loader/match",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1645164879,formattedLastUpdatedAt:"Feb 18, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Loader \u6267\u884c",permalink:"/study-notes/engineering/webpack/loader/exec"},next:{title:"Loader \u7684\u5b9e\u73b0",permalink:"/study-notes/engineering/webpack/loader/implement"}},c={},u=[{value:"\u5b9e\u73b0\u4ee3\u7801",id:"\u5b9e\u73b0\u4ee3\u7801",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loader-\u5339\u914d\u89c4\u5219"},"Loader \u5339\u914d\u89c4\u5219"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u53ef\u4ee5\u901a\u8fc7\u5f15\u5165\u6a21\u5757\u7684\u8def\u5f84\u89c4\u5219\uff0c\u6765\u5224\u65ad\u662f\u5426\u4f7f\u7528\u5185\u8054\u6a21\u5f0f\u6216\u8005\u5254\u9664\u4e00\u4e9b\u524d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"(pre)")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader"),", \u540e\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"(post)")," , \u666e\u901a",(0,o.kt)("inlineCode",{parentName:"p"},"(normal)")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader"),"\u3002"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u79cd\u5185\u8054\u6a21\u5f0f, \u5e76\u975e ES module \u4e2d\u7684\u89c4\u8303\u8def\u5f84\u683c\u5f0f, \u8981\u5c3d\u91cf\u907f\u514d\uff0c\u56e0\u4e3a"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u4f1a\u5728\u4ee3\u7801\u4e2d\u8026\u5408 webpack \u7684\u5177\u4f53\u7ec6\u8282"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u4f1a\u5bf9 IDE \u7684\u8def\u5f84\u89e3\u6790\u4ea7\u751f\u5e72\u6270"))),(0,o.kt)("p",null,"\u89c4\u5219\u5982\u4e0b:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-!")," : \u5254\u9664 \u914d\u7f6e\u4e2d\u7b26\u5408\u6761\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pre")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"normal")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"!")," : \u5254\u9664 \u914d\u7f6e\u4e2d\u7b26\u5408\u6761\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"normal Loader")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"!!")," : \u5254\u9664 \u914d\u7f6e\u4e2d\u7b26\u5408\u6761\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pre")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"normal")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Disable normal loaders\nimport { a } from '!./file1.js';\n\n// Disable preloaders and normal loaders\nimport { b } from '-!./file2.js';\n\n// Disable all loaders\nimport { c } from '!!./file3.js';\n")),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u4ee3\u7801"},"\u5b9e\u73b0\u4ee3\u7801"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u4ee3\u7801\u903b\u8f91\u89e3\u6790\u89c4\u5219\u5982\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"(5.0.0.beta.15 vs 4.43.0)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// ...\nconst firstChar = requestWithoutMatchResource.charCodeAt(0);\nconst secondChar = requestWithoutMatchResource.charCodeAt(1);\n// \u6ce8\u610f\ud83d\udc47\ud83c\udffb\ud83d\udc47\ud83c\udffb\ud83d\udc47\ud83c\udffb: \u65e7\u7248\u672c\u662f\u901a\u8fc7 Char Code \u5224\u65ad\u7684\u662f\u5426\u662f\u7279\u6b8a\u6807\u8bb0\ud83d\udccc\nconst noPreAutoLoaders = firstChar === 45 && secondChar === 33; // startsWith "-!"\nconst noAutoLoaders = noPreAutoLoaders || firstChar === 33; // startsWith "!"\nconst noPrePostAutoLoaders = firstChar === 33 && secondChar === 33; // startsWith "!!";\nconst rawElements = requestWithoutMatchResource\n  .slice(noPreAutoLoaders || noPrePostAutoLoaders ? 2 : noAutoLoaders ? 1 : 0)\n  .split(/!+/);\n// ...\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/blob/c9d4ff7b054fc581c96ce0e53432d44f9dd8ca72/lib/NormalModuleFactory.js#L180"},"\u8be6\u89c1 4.43.0 webpack NormalModuleFactory.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// ...\n// \u6ce8\u610f\ud83d\udc47\ud83c\udffb\ud83d\udc47\ud83c\udffb\ud83d\udc47\ud83c\udffb: \u65b0\u7248\u672c\u901a\u8fc7\u5224\u65ad\u5f00\u5934\u662f\u5426\u662f\u7279\u6b8a\u6807\u8bb0\ud83d\udccc\nconst noPreAutoLoaders = requestWithoutMatchResource.startsWith('-!');\nconst noAutoLoaders =\n  noPreAutoLoaders || requestWithoutMatchResource.startsWith('!');\nconst noPrePostAutoLoaders = requestWithoutMatchResource.startsWith('!!');\nlet elements = requestWithoutMatchResource\n  .replace(/^-?!+/, '')\n  .replace(/!!+/g, '!')\n  .split('!');\nlet resource = elements.pop();\nelements = elements.map(identToLoaderRequest);\n// ...\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/blob/2db705096bd9fa869e5cbe3e9fe5e09b0089c188/lib/NormalModuleFactory.js#L273"},"\u8be6\u89c1 5.0.0 beta.15 webpack NormalModuleFactory.js")))}m.isMDXComponent=!0}}]);