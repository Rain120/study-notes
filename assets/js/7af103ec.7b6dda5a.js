"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8745],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71354:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={},c="\u52a8\u6001\u5f15\u5165",u={unversionedId:"webpack/async-import",id:"webpack/async-import",title:"\u52a8\u6001\u5f15\u5165",description:"Webpack \u5c06\u52a8\u6001\u5f15\u5165\u7684\u6a21\u5757\u548c\u5b83\u5f15\u7528\u7684\u6240\u6709\u5b50\u6a21\u5757\uff0c\u4f1a\u5206\u5272\u5230\u4e00\u4e2a\u5355\u72ec\u7684 chunk \u4e2d\u3002",source:"@site/engineering/webpack/async-import.md",sourceDirName:"webpack",slug:"/webpack/async-import",permalink:"/study-notes/engineering/webpack/async-import",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647777934,formattedLastUpdatedAt:"3/20/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"http1.0\u3001http1.1\u3001http2 \u7248\u672c\u5bf9\u6bd4",permalink:"/study-notes/engineering/http/version-compare"},next:{title:"Webpack \u6253\u5305\u8f93\u51fa\u4ee3\u7801\u90fd\u6709\u4ec0\u4e48\uff1f",permalink:"/study-notes/engineering/webpack/build"}},l={},s=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"import()\u539f\u7406",id:"import\u539f\u7406",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u52a8\u6001\u5f15\u5165"},"\u52a8\u6001\u5f15\u5165"),(0,a.kt)("p",null,"Webpack \u5c06\u52a8\u6001\u5f15\u5165\u7684\u6a21\u5757\u548c\u5b83\u5f15\u7528\u7684\u6240\u6709\u5b50\u6a21\u5757\uff0c\u4f1a\u5206\u5272\u5230\u4e00\u4e2a\u5355\u72ec\u7684 chunk \u4e2d\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7b26\u5408 ",(0,a.kt)("a",{parentName:"li",href:"https://whatwg.github.io/loader/"},"ECMAScript \u63d0\u6848")," \u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/api/module-methods/#import-1"},"import()")," \u8bed\u6cd5 \u6765\u5b9e\u73b0\u52a8\u6001\u5bfc\u5165\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u63a8\u8350\u4f7f\u7528"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 webpack \u7279\u5b9a\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/api/module-methods/#requireensure"},"require.ensure"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"webpack \u7684\u9057\u7559\u529f\u80fd\u3002"))),(0,a.kt)("h2",{id:"import\u539f\u7406"},"import()\u539f\u7406"),(0,a.kt)("p",null,"import() \u51fd\u6570\u8fd4\u56de\u662f\u4e00\u4e2a promise\u3002\u5728\u6d4f\u89c8\u5668\u5bbf\u4e3b\u73af\u5883\u4e2d\u4e00\u4e2aimport() \u7684\u53c2\u8003\u5b9e\u73b0\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function import(url) {\n    return new Promise((resolve, reject) => {\n        const script = document.createElement('script');\n\n        // import \u91cc\u9762\u52a0\u5165 webpackChunkName \u7684\u6ce8\u91ca\uff0c\u6765\u6307\u5b9a\u5305\u6587\u4ef6\u540d\u79f0\u3002\n        // \u53ef\u4ee5\u53c2\u8003 Webpack \u9b54\u6cd5\u6ce8\u91ca \ud83d\udc48\ud83c\udffb \u770b\u83dc\u5355\n        const chunkId = '__ModuleLoadingVariable'\n            + Math.random().toString(32).substring(2);\n\n        script.charset = 'utf-8';\n        script.type = \"module\";\n        script.textContent = `\n            import * as installedChunkData from '${url}';\n            window.${chunkId} = installedChunkData;\n        `;\n\n        // window[chunkId] => \u4f1a\u6709\u72b6\u6001: \u52a0\u8f7d\u5931\u8d25\u3001\u52a0\u8f7d\u8d85\u65f6\u3001\u4ece\u672a\u52a0\u8f7d\u8fc7\n        script.onload = () => {\n            resolve(window[chunkId]);\n            delete window[chunkId];\n            script.remove();\n        }\n\n        script.onerror = () => {\n            reject(\n                new Error(`Failed to load module script with URL ${url}`)\n            );\n            delete window[chunkId];\n            script.remove();\n        }\n\n        document.documentElement.appendChild(script);\n    });\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u53ef\u53c2\u8003\u6e90\u7801\u5206\u6790\ud83d\udc49\ud83c\udffb ",(0,a.kt)("a",{parentName:"p",href:"https://rain120.github.io/study-notes/engineering/webpack/build#%E5%BC%82%E6%AD%A5%E5%AF%BC%E5%85%A5"},"here"),"\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/#dynamic-imports"},"Webpack dynamic-imports"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"TC39 proposal-dynamic-import")))}d.isMDXComponent=!0}}]);