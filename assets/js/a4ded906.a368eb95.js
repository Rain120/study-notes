"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8859],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34508:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),p=["components"],o={},l="\u5f02\u6b65\u5f15\u5165",m={unversionedId:"javascript/es-study/import/import-async",id:"javascript/es-study/import/import-async",title:"\u5f02\u6b65\u5f15\u5165",description:"\u6807\u51c6\u7528\u6cd5\u7684import\u5bfc\u5165\u7684\u6a21\u5757\u662f\u9759\u6001\u7684\uff0c\u4f1a\u4f7f\u6240\u6709\u88ab\u5bfc\u5165\u7684\u6a21\u5757\uff0c\u5728\u52a0\u8f7d\u65f6\u5c31\u88ab\u7f16\u8bd1 (\u65e0\u6cd5\u505a\u5230\u6309\u9700\u7f16\u8bd1\uff0c\u964d\u4f4e\u9996\u9875\u52a0\u8f7d\u901f\u5ea6)\u3002",source:"@site/fe/javascript/es-study/import/import-async.md",sourceDirName:"javascript/es-study/import",slug:"/javascript/es-study/import/import-async",permalink:"/study-notes/fe/javascript/es-study/import/import-async",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648899683,formattedLastUpdatedAt:"4/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"import \u5173\u952e\u5b57",permalink:"/study-notes/fe/javascript/es-study/import/"},next:{title:"\u5168\u91cf\u5f15\u5165",permalink:"/study-notes/fe/javascript/es-study/import/import-full"}},s={},c=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"webpack \u5f02\u6b65\u903b\u8f91",id:"webpack-\u5f02\u6b65\u903b\u8f91",level:2},{value:"require.ensure",id:"requireensure",level:3},{value:"import",id:"import",level:3},{value:"Webpack \u5982\u4f55\u5b9e\u73b0",id:"webpack-\u5982\u4f55\u5b9e\u73b0",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5f02\u6b65\u5f15\u5165"},"\u5f02\u6b65\u5f15\u5165"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6807\u51c6\u7528\u6cd5\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"\u5bfc\u5165\u7684\u6a21\u5757\u662f\u9759\u6001\u7684\uff0c\u4f1a\u4f7f\u6240\u6709\u88ab\u5bfc\u5165\u7684\u6a21\u5757\uff0c\u5728\u52a0\u8f7d\u65f6\u5c31\u88ab\u7f16\u8bd1 (\u65e0\u6cd5\u505a\u5230\u6309\u9700\u7f16\u8bd1\uff0c\u964d\u4f4e\u9996\u9875\u52a0\u8f7d\u901f\u5ea6)\u3002"),(0,i.kt)("p",{parentName:"div"},"\u6709\u4e9b\u573a\u666f\u4e2d\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u6839\u636e\u6761\u4ef6\u5bfc\u5165\u6a21\u5757\u6216\u8005\u6309\u9700\u5bfc\u5165\u6a21\u5757\uff0c\u8fd9\u65f6\u4f60\u53ef\u4ee5\u4f7f\u7528\u52a8\u6001\u5bfc\u5165\u4ee3\u66ff\u9759\u6001\u5bfc\u5165\u3002"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u4e0d\u8981\u6ee5\u7528\u52a8\u6001\u5bfc\u5165(\u53ea\u6709\u5728\u5fc5\u8981\u60c5\u51b5\u4e0b\u91c7\u7528)\u3002\u9759\u6001\u6846\u67b6\u80fd\u66f4\u597d\u7684\u521d\u59cb\u5316\u4f9d\u8d56\uff0c\u800c\u4e14\u66f4\u6709\u5229\u4e8e\u9759\u6001\u5206\u6790\u5de5\u5177\u548c ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.developer.mozilla.org/en-US/docs/Glossary/Tree_shaking"},"tree shaking"),"\u53d1\u6325\u4f5c\u7528"))),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import('/modules/my-module.js').then((module) => {\n  // Do something with the module.\n});\n")),(0,i.kt)("p",null,"\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u4e5f\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," \u5173\u952e\u5b57\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let module = await import('/modules/my-module.js');\n")),(0,i.kt)("h2",{id:"webpack-\u5f02\u6b65\u903b\u8f91"},"webpack \u5f02\u6b65\u903b\u8f91"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5ef6\u8fdf\u52a0\u8f7d")," \u6216 ",(0,i.kt)("strong",{parentName:"p"},"\u6309\u9700\u52a0\u8f7d")," \u672c\u8d28\u4e0a\u6d89\u53ca\u5728\u903b\u8f91\u65ad\u70b9\u5904 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://webpack.js.org/guides/code-splitting/"},"\u5206\u5272\u4ee3\u7801 (code splitting)")),"\uff0c\u7136\u540e\u5728\u7528\u6237\u5b8c\u6210\u9700\u8981\u6216\u5c06\u9700\u8981\u65b0\u4ee3\u7801\u5757\u7684\u64cd\u4f5c\u540e\u52a0\u8f7d\u4ee3\u7801\u3002 \u8fd9\u4f1a\u52a0\u5feb\u5e94\u7528\u7a0b\u5e8f\u7684\u521d\u59cb\u52a0\u8f7d\u901f\u5ea6\uff0c\u5e76\u51cf\u8f7b\u5176\u603b\u4f53\u91cd\u91cf\uff0c\u56e0\u4e3a\u67d0\u4e9b\u5757\u751a\u81f3\u53ef\u80fd\u6c38\u8fdc\u4e0d\u4f1a\u52a0\u8f7d\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webpack"),"\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u5f02\u6b65\u5bfc\u5165\u6a21\u5757"),(0,i.kt)("h3",{id:"requireensure"},"require.ensure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"require.ensure(\n  dependencies: String[],\n  callback: function(require),\n  errorCallback: function(error),\n  chunkName: String\n)\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"require.ensure")," \u73b0\u5728\u4f9d\u8d56\u539f\u751f\u7684 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Promise")," \u3002\u5982\u679c\u4e0d\u652f\u6301 Promise \u7684\u73af\u5883\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"require.ensure")," \uff0c\u4f60\u9700\u8981\u6dfb\u52a0 polyfill.")," \u3002"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/module-methods/#requireensure"},(0,i.kt)("inlineCode",{parentName:"a"},"require.ensure()"))," \u662f webpack \u7279\u6709\u7684\uff0c\u5df2\u88ab ",(0,i.kt)("inlineCode",{parentName:"p"},"import()")," \u53d6\u4ee3\u3002")),(0,i.kt)("p",null,"\u5f53\u7136\u4e86\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," \u4e5f\u53ef\u4ee5\u4f7f\u7528\u7b26\u5408 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"ECMAScript \u63d0\u6848")," \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/api/module-methods/#import-1"},(0,i.kt)("inlineCode",{parentName:"a"},"import()")," \u8bed\u6cd5")," \u6765\u5b9e\u73b0\u52a8\u6001\u5bfc\u5165\uff0c\u9700\u8981\u501f\u52a9 ",(0,i.kt)("inlineCode",{parentName:"p"},"babel")," \u63d2\u4ef6 ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import"},"@babel/plugin-syntax-dynamic-import"),"\u3002"),(0,i.kt)("h3",{id:"import"},"import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import('/modules/my-module.js').then((module) => {\n  // Do something with the module.\n});\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webpack v4.6.0+")," \u589e\u52a0\u4e86\u5bf9\u9884\u83b7\u53d6\u548c\u9884\u52a0\u8f7d\u7684\u652f\u6301\u3002"),(0,i.kt)("p",null,"\u5728\u58f0\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u65f6\uff0c\u4f7f\u7528\u4e0b\u9762\u8fd9\u4e9b\u5185\u7f6e\u6307\u4ee4\uff0c\u53ef\u4ee5\u8ba9 ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," \u8f93\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"resource hint(\u8d44\u6e90\u63d0\u793a)"),"\uff0c\u6765\u544a\u77e5\u6d4f\u89c8\u5668\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prefetch"),"(\u9884\u83b7\u53d6)\uff1a\u5c06\u6765\u67d0\u4e9b\u5bfc\u822a\u4e0b\u53ef\u80fd\u9700\u8981\u7684\u8d44\u6e90"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"preload"),"(\u9884\u52a0\u8f7d)\uff1a\u5f53\u524d\u5bfc\u822a\u4e0b\u53ef\u80fd\u9700\u8981\u8d44\u6e90")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//...\nimport(/* webpackPrefetch: true */ './path/to/LoginModal.js');\n")),(0,i.kt)("p",null,"\u8fd9\u4f1a\u751f\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},'<link rel="prefetch" href="login-modal-chunk.js">')," \u5e76\u8ffd\u52a0\u5230\u9875\u9762\u5934\u90e8\uff0c\u6307\u793a\u7740\u6d4f\u89c8\u5668\u5728\u95f2\u7f6e\u65f6\u95f4\u9884\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"login-modal-chunk.js")," \u6587\u4ef6\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53ea\u8981\u7236 ",(0,i.kt)("inlineCode",{parentName:"p"},"chunk")," \u5b8c\u6210\u52a0\u8f7d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," \u5c31\u4f1a\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"prefetch hint(\u9884\u53d6\u63d0\u793a)"),"\u3002")),(0,i.kt)("p",null,"\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"prefetch")," \u6307\u4ee4\u76f8\u6bd4\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"preload")," \u6307\u4ee4\u6709\u8bb8\u591a\u4e0d\u540c\u4e4b\u5904\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preload chunk")," \u4f1a\u5728\u7236 ",(0,i.kt)("inlineCode",{parentName:"li"},"chunk")," \u52a0\u8f7d\u65f6\uff0c\u4ee5\u5e76\u884c\u65b9\u5f0f\u5f00\u59cb\u52a0\u8f7d\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"prefetch chunk")," \u4f1a\u5728\u7236 ",(0,i.kt)("inlineCode",{parentName:"li"},"chunk")," \u52a0\u8f7d\u7ed3\u675f\u540e\u5f00\u59cb\u52a0\u8f7d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preload chunk")," \u5177\u6709\u4e2d\u7b49\u4f18\u5148\u7ea7\uff0c\u5e76\u7acb\u5373\u4e0b\u8f7d\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"prefetch chunk")," \u5728\u6d4f\u89c8\u5668\u95f2\u7f6e\u65f6\u4e0b\u8f7d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preload chunk")," \u4f1a\u5728\u7236 ",(0,i.kt)("inlineCode",{parentName:"li"},"chunk")," \u4e2d\u7acb\u5373\u8bf7\u6c42\uff0c\u7528\u4e8e\u5f53\u4e0b\u65f6\u523b\u3002",(0,i.kt)("inlineCode",{parentName:"li"},"prefetch chunk")," \u4f1a\u7528\u4e8e\u672a\u6765\u7684\u67d0\u4e2a\u65f6\u523b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u652f\u6301\u7a0b\u5ea6\u4e0d\u540c\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//...\nimport(/* webpackPreload: true */ 'ChartingLibrary');\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0d\u6b63\u786e\u5730\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"webpackPreload")," \u4f1a\u6709\u635f\u6027\u80fd\uff0c\u8bf7\u8c28\u614e\u4f7f\u7528\u3002")),(0,i.kt)("h2",{id:"webpack-\u5982\u4f55\u5b9e\u73b0"},"Webpack \u5982\u4f55\u5b9e\u73b0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://rain120.github.io/study-notes/engineering/webpack/build"},"Webpack \u6253\u5305\u8f93\u51fa\u4ee3\u7801\u90fd\u6709\u4ec0\u4e48\uff1f")),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%8A%A8%E6%80%81import"},"MDN - \u52a8\u6001import")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/guides/code-splitting/#dynamic-imports"},"webpack - dynamic-imports")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/migrate/3/#requireensure-and-amd-require-are-asynchronous"},"webpack - requireensure-and-amd-require-are-asynchronous")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://es6.ruanyifeng.com/#docs/module-loader"},"Module \u7684\u52a0\u8f7d\u5b9e\u73b0")))}d.isMDXComponent=!0}}]);