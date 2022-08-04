"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3547],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),k=a,m=d["".concat(o,".").concat(k)]||d[k]||s[k]||u;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,l=new Array(u);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<u;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85922:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});t(59496);var r=t(49613);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={},i="Module Chunk Bundle \u4e4b\u95f4\u7684\u533a\u522b",o={unversionedId:"webpack/module-chunk-bundle",id:"webpack/module-chunk-bundle",title:"Module Chunk Bundle \u4e4b\u95f4\u7684\u533a\u522b",description:"Module",source:"@site/engineering/webpack/module-chunk-bundle.md",sourceDirName:"webpack",slug:"/webpack/module-chunk-bundle",permalink:"/study-notes/engineering/webpack/module-chunk-bundle",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1645513534,formattedLastUpdatedAt:"Feb 22, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a Webpack",permalink:"/study-notes/engineering/webpack/mini-webpack"},next:{title:"Plugin",permalink:"/study-notes/engineering/webpack/plugins"}},c={},p=[{value:"Module",id:"module",level:2},{value:"Chunk",id:"chunk",level:2},{value:"\u4ea7\u751f\u9014\u5f84",id:"\u4ea7\u751f\u9014\u5f84",level:3},{value:"chunk \u5206\u7c7b",id:"chunk-\u5206\u7c7b",level:3},{value:"Bundle",id:"bundle",level:2},{value:"\u8fc7\u7a0b",id:"\u8fc7\u7a0b",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:3}],s={toc:p};function d(e){var{components:n}=e,l=u(e,["components"]);return(0,r.kt)("wrapper",a({},s,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"module-chunk-bundle-\u4e4b\u95f4\u7684\u533a\u522b"}),"Module Chunk Bundle \u4e4b\u95f4\u7684\u533a\u522b"),(0,r.kt)("h2",a({},{id:"module"}),"Module"),(0,r.kt)("p",null,"Module \u662f Webpack \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e00\u4e2a\u6982\u5ff5, Webpack \u628a\u6240\u6709\u8d44\u6e90\u90fd\u770b\u6210\u662f\u4e00\u4e2a\u5355\u72ec\u7684 Module\u3002\u6240\u6709\u6587\u4ef6\u90fd\u4f1a\u88ab loader \u8f6c\u6362\u6210\u4e00\u4e2a\u53ef\u4ee5\u88ab Webpack \u8bfb\u53d6\u7684\u6a21\u5757\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ESM"),(0,r.kt)("li",{parentName:"ul"},"Commonjs,"),(0,r.kt)("li",{parentName:"ul"},"AMD"),(0,r.kt)("li",{parentName:"ul"},"etc...")),(0,r.kt)("h2",a({},{id:"chunk"}),"Chunk"),(0,r.kt)("p",null,"\u5728 Webpack \u5185\u90e8\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u6253\u5305\u8fdb\u7a0b\u4e2d")," \u7684\u4ee3\u7801\u6a21\u5757; bundle \u7531\u8bb8\u591a chunk \u7ec4\u6210"),(0,r.kt)("h3",a({},{id:"\u4ea7\u751f\u9014\u5f84"}),"\u4ea7\u751f\u9014\u5f84"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"entry\u5165\u53e3",(0,r.kt)("admonition",a({parentName:"li"},{type:"warning"}),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"source map\u7684\u914d\u7f6e\u4f1a\u5f71\u54cd\u5230 Chunk \u7684\u4ea7\u751f\u3002\u5f53 Webpack \u914d\u7f6e\u4e86 source-map, \u4e00\u4e2a chunk \u5bf9\u5e94\u591a\u4e2a bundle"),(0,r.kt)("li",{parentName:"ol"},"\u5f53 entry\u662f\u6570\u7ec4, \u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"['./src/main.js','./src/other.js']"),", \u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ea\u4f1a\u4ea7\u751f\u4e00\u4e2a chunk, \u6700\u7ec8\u6253\u5305\u5230\u4e00\u4e2a bundle \u4e2d\u3002\n",(0,r.kt)("img",{alt:"build-chunk.png",src:t(68779).Z,width:"2144",height:"1724"}))))),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u52a0\u8f7d\u6a21\u5757",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"import(/* webpackPrefetch: true */ '/modules/my-module.js')\n")),"\u53c2\u8003 ",(0,r.kt)("a",a({parentName:"li"},{href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"}),"Dynamic Imports")),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u5206\u5272 (code splitting)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"{\n    optimization: {\n      splitChunks: {\n          cacheGroups: {\n              name: {\n                  chunks: 'initial',\n                  minChunks: 2\n              },\n              // xxxx\n          }\n      }\n    }\n}\n")),"\u53c2\u8003 ",(0,r.kt)("a",a({parentName:"li"},{href:"https://webpack.docschina.org/plugins/split-chunks-plugin/#split-chunks-example-1"}),"optimization splitChunks chunks"))),(0,r.kt)("p",null,"\u6a21\u5757\u6307\u5b9a\u540d\u79f0\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://rain120.github.io/study-notes/engineering/webpack/magic-comments#webpackchunkname"}),"\u9b54\u6cd5\u6ce8\u91ca webpackChunkName\n")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"import(/* webpackChunkName: \"lodash-es\" */ 'lodash');\n// \u8f93\u51fa\u65b0\u7684chunk\u540d\u5b57\u4e3alodash-es.js\n")),(0,r.kt)("h3",a({},{id:"chunk-\u5206\u7c7b"}),"chunk \u5206\u7c7b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"entry chunk\n\u5305\u542b\u4e86 Webpack \u8fd0\u884c\u65f6\u9700\u8981\u7684\u4e00\u4e9b\u51fd\u6570, \u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"__webpack_require__")),(0,r.kt)("li",{parentName:"ul"},"normal chunk\n\u90a3\u4e9b\u5e94\u7528\u8fd0\u884c\u65f6\u52a8\u6001\u52a0\u8f7d\u7684\u6a21\u5757, \u5176\u7ed3\u6784\u6709\u52a0\u8f7d\u65b9\u5f0f\u51b3\u5b9a, \u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"li"},"webpackJsonp")),(0,r.kt)("li",{parentName:"ul"},"initial chunk\noutput.filename \u5bf9\u5e94\u7740 initial chunk \u6587\u4ef6\noutput.chunkFilename \u5bf9\u5e94\u7740 non-initial chunk \u6587\u4ef6")),(0,r.kt)("h2",a({},{id:"bundle"}),"Bundle"),(0,r.kt)("p",null,"\u6784\u5efa\u5b8c\u6210\u540e\u8f93\u51fa\u7684\u7684\u4ee3\u7801\u6a21\u5757"),(0,r.kt)("h2",a({},{id:"\u8fc7\u7a0b"}),"\u8fc7\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"images/module-chunk-bundle.png",src:t(237).Z,width:"1021",height:"532"})),(0,r.kt)("h3",a({},{id:"\u6d4b\u8bd5\u4ee3\u7801"}),"\u6d4b\u8bd5\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"const path = require('path');\n\nmodule.exports = {\n    // \u53ef\u6ce8\u91ca\u8fd9\u53e5\u5c1d\u8bd5\u4e00\u4e0b\n    devtool: 'source-map',    \n    entry: {\n        index: path.join(__dirname, 'index.js'),\n        test: path.join(__dirname, 'test.js'),\n    },\n    output: {\n        path: path.join(__dirname, 'build'),\n    },\n}\n")))}d.isMDXComponent=!0},68779:function(e,n,t){n.Z=t.p+"assets/images/build-chunk-a27c6c28d38f10531ef155dfaa1edcf9.png"},237:function(e,n,t){n.Z=t.p+"assets/images/module-chunk-bundle-6a43adbc4aac5b557e5e0ec5d56b36ee.png"}}]);