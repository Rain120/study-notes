"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3547],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42429:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],u={},o="Module Chunk Bundle \u4e4b\u95f4\u7684\u533a\u522b",c={unversionedId:"webpack/module-chunk-bundle",id:"webpack/module-chunk-bundle",title:"Module Chunk Bundle \u4e4b\u95f4\u7684\u533a\u522b",description:"Module",source:"@site/engineering/webpack/module-chunk-bundle.md",sourceDirName:"webpack",slug:"/webpack/module-chunk-bundle",permalink:"/study-notes/engineering/webpack/module-chunk-bundle",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647177225,formattedLastUpdatedAt:"3/13/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a Webpack",permalink:"/study-notes/engineering/webpack/mini-webpack"},next:{title:"Plugin",permalink:"/study-notes/engineering/webpack/plugins"}},p={},s=[{value:"Module",id:"module",level:2},{value:"Chunk",id:"chunk",level:2},{value:"\u4ea7\u751f\u9014\u5f84",id:"\u4ea7\u751f\u9014\u5f84",level:3},{value:"chunk \u5206\u7c7b",id:"chunk-\u5206\u7c7b",level:3},{value:"Bundle",id:"bundle",level:2},{value:"\u8fc7\u7a0b",id:"\u8fc7\u7a0b",level:2},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:3}],d={toc:s};function m(e){var n=e.components,u=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,u,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"module-chunk-bundle-\u4e4b\u95f4\u7684\u533a\u522b"},"Module Chunk Bundle \u4e4b\u95f4\u7684\u533a\u522b"),(0,l.kt)("h2",{id:"module"},"Module"),(0,l.kt)("p",null,"Module \u662f Webpack \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u4e00\u4e2a\u6982\u5ff5, Webpack \u628a\u6240\u6709\u8d44\u6e90\u90fd\u770b\u6210\u662f\u4e00\u4e2a\u5355\u72ec\u7684 Module\u3002\u6240\u6709\u6587\u4ef6\u90fd\u4f1a\u88ab loader \u8f6c\u6362\u6210\u4e00\u4e2a\u53ef\u4ee5\u88ab Webpack \u8bfb\u53d6\u7684\u6a21\u5757\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ESM"),(0,l.kt)("li",{parentName:"ul"},"Commonjs,"),(0,l.kt)("li",{parentName:"ul"},"AMD"),(0,l.kt)("li",{parentName:"ul"},"etc...")),(0,l.kt)("h2",{id:"chunk"},"Chunk"),(0,l.kt)("p",null,"\u5728 Webpack \u5185\u90e8\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u6253\u5305\u8fdb\u7a0b\u4e2d")," \u7684\u4ee3\u7801\u6a21\u5757; bundle \u7531\u8bb8\u591a chunk \u7ec4\u6210"),(0,l.kt)("h3",{id:"\u4ea7\u751f\u9014\u5f84"},"\u4ea7\u751f\u9014\u5f84"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"entry\u5165\u53e3",(0,l.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"source map\u7684\u914d\u7f6e\u4f1a\u5f71\u54cd\u5230 Chunk \u7684\u4ea7\u751f\u3002\u5f53 Webpack \u914d\u7f6e\u4e86 source-map, \u4e00\u4e2a chunk \u5bf9\u5e94\u591a\u4e2a bundle"),(0,l.kt)("li",{parentName:"ol"},"\u5f53 entry\u662f\u6570\u7ec4, \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"['./src/main.js','./src/other.js']"),", \u8fd9\u79cd\u60c5\u51b5\u4e0b\u53ea\u4f1a\u4ea7\u751f\u4e00\u4e2a chunk, \u6700\u7ec8\u6253\u5305\u5230\u4e00\u4e2a bundle \u4e2d\u3002\n",(0,l.kt)("img",{loading:"lazy",alt:"build-chunk.png",src:t(69295).Z,width:"2144",height:"1724"})))))),(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u52a0\u8f7d\u6a21\u5757",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackPrefetch: true */ '/modules/my-module.js')\n")),"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"Dynamic Imports")),(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u5206\u5272 (code splitting)",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n    optimization: {\n      splitChunks: {\n          cacheGroups: {\n              name: {\n                  chunks: 'initial',\n                  minChunks: 2\n              },\n              // xxxx\n          }\n      }\n    }\n}\n")),"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"https://webpack.docschina.org/plugins/split-chunks-plugin/#split-chunks-example-1"},"optimization splitChunks chunks"))),(0,l.kt)("p",null,"\u6a21\u5757\u6307\u5b9a\u540d\u79f0\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://rain120.github.io/study-notes/engineering/webpack/magic-comments#webpackchunkname"},"\u9b54\u6cd5\u6ce8\u91ca webpackChunkName\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackChunkName: \"lodash-es\" */ 'lodash');\n// \u8f93\u51fa\u65b0\u7684chunk\u540d\u5b57\u4e3alodash-es.js\n")),(0,l.kt)("h3",{id:"chunk-\u5206\u7c7b"},"chunk \u5206\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"entry chunk\n\u5305\u542b\u4e86 Webpack \u8fd0\u884c\u65f6\u9700\u8981\u7684\u4e00\u4e9b\u51fd\u6570, \u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"__webpack_require__")),(0,l.kt)("li",{parentName:"ul"},"normal chunk\n\u90a3\u4e9b\u5e94\u7528\u8fd0\u884c\u65f6\u52a8\u6001\u52a0\u8f7d\u7684\u6a21\u5757, \u5176\u7ed3\u6784\u6709\u52a0\u8f7d\u65b9\u5f0f\u51b3\u5b9a, \u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"webpackJsonp")),(0,l.kt)("li",{parentName:"ul"},"initial chunk\noutput.filename \u5bf9\u5e94\u7740 initial chunk \u6587\u4ef6\noutput.chunkFilename \u5bf9\u5e94\u7740 non-initial chunk \u6587\u4ef6")),(0,l.kt)("h2",{id:"bundle"},"Bundle"),(0,l.kt)("p",null,"\u6784\u5efa\u5b8c\u6210\u540e\u8f93\u51fa\u7684\u7684\u4ee3\u7801\u6a21\u5757"),(0,l.kt)("h2",{id:"\u8fc7\u7a0b"},"\u8fc7\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"images/module-chunk-bundle.png",src:t(66677).Z,width:"1021",height:"532"})),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u4ee3\u7801"},"\u6d4b\u8bd5\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n    // \u53ef\u6ce8\u91ca\u8fd9\u53e5\u5c1d\u8bd5\u4e00\u4e0b\n    devtool: 'source-map',    \n    entry: {\n        index: path.join(__dirname, 'index.js'),\n        test: path.join(__dirname, 'test.js'),\n    },\n    output: {\n        path: path.join(__dirname, 'build'),\n    },\n}\n")))}m.isMDXComponent=!0},69295:function(e,n,t){n.Z=t.p+"assets/images/build-chunk-a27c6c28d38f10531ef155dfaa1edcf9.png"},66677:function(e,n,t){n.Z=t.p+"assets/images/module-chunk-bundle-6a43adbc4aac5b557e5e0ec5d56b36ee.png"}}]);