"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6969],{3905:function(e,n,t){t.d(n,{Zo:function(){return k},kt:function(){return b}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},k=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=s(t),b=l,c=u["".concat(o,".").concat(b)]||u[b]||m[b]||r;return t?a.createElement(c,p(p({ref:n},k),{},{components:t})):a.createElement(c,p({ref:n},k))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36491:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return k},default:function(){return u}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),p=["components"],i={},o="Babel \u624b\u518c",s={unversionedId:"babel/babel-handbook",id:"babel/babel-handbook",title:"Babel \u624b\u518c",description:"Babel \u662f\u4ec0\u4e48\uff1f",source:"@site/fe/babel/babel-handbook.md",sourceDirName:"babel",slug:"/babel/babel-handbook",permalink:"/study-notes/fe/babel/babel-handbook",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1641816162,formattedLastUpdatedAt:"1/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Typescript Eslint QA",permalink:"/study-notes/fe/typescript/ts-eslint-qa"},next:{title:"AST",permalink:"/study-notes/fe/babel/ast/"}},k=[{value:"Babel \u662f\u4ec0\u4e48\uff1f",id:"babel-\u662f\u4ec0\u4e48",children:[],level:2},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",children:[],level:2},{value:"\u5b89\u88c5\u4f7f\u7528",id:"\u5b89\u88c5\u4f7f\u7528",children:[],level:2},{value:"\u914d\u7f6e Babel",id:"\u914d\u7f6e-babel",children:[{value:"<strong>Plugins</strong>",id:"plugins",children:[],level:3},{value:"<strong>Presets</strong>",id:"presets",children:[],level:3}],level:2},{value:"\u5e38\u7528\u5305\u89e3\u91ca",id:"\u5e38\u7528\u5305\u89e3\u91ca",children:[{value:"babel-core",id:"babel-core",children:[],level:3},{value:"babel-polyfill",id:"babel-polyfill",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],m={toc:k};function u(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babel-\u624b\u518c"},"Babel \u624b\u518c"),(0,r.kt)("h2",{id:"babel-\u662f\u4ec0\u4e48"},"Babel \u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u662f\u4e00\u4e2a\u901a\u7528\u7684\u591a\u7528\u9014 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript "),"\u7f16\u8bd1\u5668\u3002\u5b83\u4e3b\u8981\u7528\u4e8e\u5c06",(0,r.kt)("inlineCode",{parentName:"p"}," ECMAScript 2015+")," \u7248\u672c\u7684\u4ee3\u7801\u8f6c\u6362\u4e3a\u5411\u540e\u517c\u5bb9\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u8bed\u6cd5\uff0c\u4ee5\u4fbf\u80fd\u591f\u8fd0\u884c\u5728\u5f53\u524d\u548c\u65e7\u7248\u672c\u7684\u6d4f\u89c8\u5668\u6216\u5176\u4ed6\u73af\u5883\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"babel")," \u603b\u5171\u5206\u4e3a\u4e09\u4e2a\u9636\u6bb5\uff1a\u89e3\u6790\uff0c\u8f6c\u6362\uff0c\u751f\u6210\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"babel")," \u672c\u8eab\u4e0d\u5177\u6709\u4efb\u4f55\u8f6c\u5316\u529f\u80fd\uff0c\u5b83\u628a\u8f6c\u5316\u7684\u529f\u80fd\u90fd\u5206\u89e3\u5230\u4e00\u4e2a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," \u91cc\u9762\u3002\u56e0\u6b64\u5f53\u6211\u4eec\u4e0d\u914d\u7f6e\u4efb\u4f55\u63d2\u4ef6\u65f6\uff0c\u7ecf\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," \u7684\u4ee3\u7801\u548c\u8f93\u5165\u662f\u76f8\u540c\u7684\u3002"),(0,r.kt)("h2",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u6e90\u7801\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"Polyfill")," \u65b9\u5f0f\u5728\u76ee\u6807\u73af\u5883\u4e2d\u6dfb\u52a0\u7f3a\u5931\u7684\u7279\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u7b49\u7b49...")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f7f\u7528"},"\u5b89\u88c5\u4f7f\u7528"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u6240\u9700\u7684\u5305"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @babel/core @babel/cli @babel/preset-env\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.babeljs.cn/docs/configuration#%E4%BD%A0%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF%E6%98%AF%E4%BB%80%E4%B9%88"},"\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u521b\u5efa\u65b0\u6587\u4ef6")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f60\u662f\u5426\u5e0c\u671b\u7f16\u8bd1 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u76ee\u5f55\u4e0b\u7684\u6a21\u5757\uff1f"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.babeljs.cn/docs/configuration#babelconfigjs"},(0,r.kt)("inlineCode",{parentName:"a"},"babel.config.js"))," \u6587\u4ef6\u53ef\u4ee5\u6ee1\u8db3\u4f60\u7684\u7684\u9700\u6c42\uff01"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = [ ... ];\n  const plugins = [ ... ];\n\n  return {\n    presets,\n    plugins\n  };\n}\n")))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f60\u662f\u5426\u53ea\u662f\u9700\u8981\u4e00\u4e2a\u7b80\u5355\u7684\u5e76\u4e14\u53ea\u7528\u4e8e\u5355\u4e2a\u8f6f\u4ef6\u5305\u7684\u914d\u7f6e\uff1f"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.babeljs.cn/docs/configuration#babelrc"},(0,r.kt)("inlineCode",{parentName:"a"},".babelrc"))," \u6587\u4ef6\u9002\u5408\u4f60\uff01"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"babel": {\n    "presets": [ ... ],\n    "plugins": [ ... ],\n}\n')))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"package.json")),(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u4e00\u4e2a\u5c5e\u6027\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"babel"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-package",\n  "version": "1.0.0",\n  "babel": {\n    "presets": [ ... ],\n    "plugins": [ ... ],\n  }\n}\n')))),(0,r.kt)("h2",{id:"\u914d\u7f6e-babel"},(0,r.kt)("a",{parentName:"h2",href:"https://www.babeljs.cn/docs/configuration"},"\u914d\u7f6e Babel")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://www.babeljs.cn/docs/plugins"},"\u63d2\u4ef6(plugins)"),"\u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://www.babeljs.cn/docs/presets"},"\u9884\u8bbe(presets)"),"\u6765\u6307\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," \u53bb\u505a\u4ec0\u4e48\u4e8b\u60c5\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"preset "),"\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Babel")," ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins"),"\u7684\u7ec4\u5408\u8f6c\u6362\u4f60\u7684\u4ee3\u7801\u3002"),(0,r.kt)("h3",{id:"plugins"},(0,r.kt)("strong",{parentName:"h3"},"Plugins")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,r.kt)("p",null,"\u53c2\u6570\u7531\u63d2\u4ef6\u540d\u548c\u53c2\u6570\u5bf9\u8c61\u7ec4\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    [\n      "transform-async-to-module-method",\n      {\n        "module": "bluebird",\n        "method": "coroutine"\n      }\n    ]\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u987a\u5e8f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Presets")," \u524d\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u987a\u5e8f\u4ece\u524d\u5f80\u540e\u6392\u5217")),(0,r.kt)("h3",{id:"presets"},(0,r.kt)("strong",{parentName:"h3"},"Presets")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,r.kt)("p",null,"\u53c2\u6570\u7531\u63d2\u4ef6\u540d\u548c\u53c2\u6570\u5bf9\u8c61\u7ec4\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u683c\u5f0f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5e26\u914d\u7f6e\u9879\uff0c\u76f4\u63a5\u5217\u51fa\u540d\u5b57"),(0,r.kt)("li",{parentName:"ul"},"\u5e26\u4e86\u914d\u7f6e\u9879\uff0c\u81ea\u5df1\u53d8\u6210\u6570\u7ec4\uff0c",(0,r.kt)("strong",{parentName:"li"},"[\u540d\u5b57, \u914d\u7f6e\u9879\u5bf9\u8c61]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": [\n    ["@babel/preset-env", {\n      "loose": true,\n      "modules": false\n    }]\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u987a\u5e8f")),(0,r.kt)("p",null,"\u9006\u5e8f\u6392\u5217\u7684(\u4ece\u540e\u5f80\u524d)\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u4fdd\u8bc1\u5411\u540e\u517c\u5bb9\uff0c\u6211\u4eec\u5728\u7f16\u6392 ",(0,r.kt)("inlineCode",{parentName:"p"},"preset")," \u7684\u65f6\u5019\uff0c\u4e5f\u8981\u6ce8\u610f\u987a\u5e8f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5176\u5b9e\u53ea\u8981\u6309\u7167\u89c4\u8303\u7684\u65f6\u95f4\u987a\u5e8f\u5217\u51fa\u5373\u53ef\u3002"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.babeljs.cn/docs/presets#stage-x-%E5%AE%9E%E9%AA%8C%E6%80%A7%E8%B4%A8%E7%9A%84-presets"},"babel-preset-stage-x"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"stage-x preset")," \u4e2d\u7684\u8bed\u6cd5\u8f6c\u6362\u4f1a\u968f\u7740\u88ab\u6279\u51c6\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"}," JavaScript")," \u65b0\u7248\u672c\u7684\u7ec4\u6210\u90e8\u5206\u800c\u8fdb\u884c\u76f8\u5e94\u7684\u6539\u53d8(\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"ES6/ES2015"),")\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39"},"TC39")," \u5c06\u63d0\u6848\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u9636\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.babeljs.cn/docs/babel-preset-stage-0"},"Stage 0")," - \u8bbe\u60f3\uff08Strawman\uff09\uff1a\u53ea\u662f\u4e00\u4e2a\u60f3\u6cd5\uff0c\u53ef\u80fd\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"Babel")," \u63d2\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.babeljs.cn/docs/babel-preset-stage-1"},"Stage 1")," - \u5efa\u8bae\uff08Proposal\uff09\uff1a\u8fd9\u662f\u503c\u5f97\u8ddf\u8fdb\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.babeljs.cn/docs/babel-preset-stage-2"},"Stage 2")," - \u8349\u6848\uff08Draft\uff09\uff1a\u521d\u59cb\u89c4\u8303\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.babeljs.cn/docs/babel-preset-stage-3"},"Stage 3")," - \u5019\u9009\uff08Candidate\uff09\uff1a\u5b8c\u6210\u89c4\u8303\u5e76\u5728\u6d4f\u89c8\u5668\u4e0a\u521d\u6b65\u5b9e\u73b0\u3002"),(0,r.kt)("li",{parentName:"ul"},"Stage 4 - \u5b8c\u6210\uff08Finished\uff09\uff1a\u5c06\u6dfb\u52a0\u5230\u4e0b\u4e00\u4e2a\u5e74\u5ea6\u7248\u672c\u53d1\u5e03\u4e2d\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"env")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"env")," \u7684\u6838\u5fc3\u76ee\u7684\u662f\u901a\u8fc7\u914d\u7f6e\u5f97\u77e5\u76ee\u6807\u73af\u5883\u7684\u7279\u70b9\uff0c\u7136\u540e\u53ea\u505a\u5fc5\u8981\u7684\u8f6c\u6362\uff0c\u800c\u65e0\u9700\u5bf9\u76ee\u6807\u73af\u5883\u6240\u9700\u7684\u8bed\u6cd5\u8f6c\u6362(\u4ee5\u53ca\u53ef\u9009\u7684\u6d4f\u89c8\u5668",(0,r.kt)("inlineCode",{parentName:"p"},"polyfill"),")\u8fdb\u884c\u7ba1\u7406\uff0c\u8fd9\u6837\u53ef\u4ee5\u4f7f\u5305\u66f4\u5c0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @babel/preset-env\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@babel/preset-env")," \u63a5\u53d7\u60a8\u6307\u5b9a\u7684\u4efb\u4f55\u76ee\u6807\u73af\u5883\uff0c\u5e76\u6839\u636e\u5176\u6620\u5c04\u68c0\u67e5\u5b83\u4eec\uff0c\u4ee5\u7f16\u8bd1\u63d2\u4ef6\u5217\u8868\uff0c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"Babel"),"\u3002\u5e38\u89c1\u7528\u6cd5\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "presets": [\n    ["env", {\n      "targets": {\n         "browsers": ["last 2 versions", "safari >= 7"]\n      }\n    }]\n  ]\n}\n')),(0,r.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/browserslist/browserslist"},".browserslistrc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"last 2 versions\nsafari >= 7\n")),(0,r.kt)("p",null,"\u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "browserslist": "last 2 versions, safari >= 7"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.babeljs.cn/docs/babel-preset-env"},"babel-preset-env")),(0,r.kt)("h2",{id:"\u5e38\u7528\u5305\u89e3\u91ca"},"\u5e38\u7528\u5305\u89e3\u91ca"),(0,r.kt)("h3",{id:"babel-core"},"babel-core"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7248\u672c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-core"},"babel-core")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@babel/core"},"@babel/core")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f5c\u7528")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u548c\u5904\u7406\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Parser")," \u8fdb\u884c\u8bed\u6cd5\u89e3\u6790\uff0c\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"AST")),(0,r.kt)("li",{parentName:"ul"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Traverser")," \u904d\u5386AST\uff0c\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"\u8bbf\u95ee\u8005\u6a21\u5f0f"),"\u5e94\u7528'\u63d2\u4ef6'\u5bf9 AST \u8fdb\u884c\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\uff0c\u5305\u62ec",(0,r.kt)("inlineCode",{parentName:"li"},"SourceMap"),"\u8f6c\u6362\u548c\u6e90\u4ee3\u7801\u751f\u6210")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Using npm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @babel/core\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"or using yarn")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @babel/core --dev\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"{\n    devDependencies: {\n    '@babel/core': '^x.x.x',\n    }\n}\n")),(0,r.kt)("h3",{id:"babel-polyfill"},"babel-polyfill"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7248\u672c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-polyfill"},"babel-polyfill")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@babel/polyfill"},"@babel/polyfill")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f5c\u7528")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Babel"),"\u9ed8\u8ba4\u53ea\u8f6c\u6362\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u53e5\u6cd5(",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),")\uff0c\u800c\u4e0d\u8f6c\u6362\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"API"),", \u4ee5\u53ca\u4e00\u4e9b\u5b9a\u4e49\u5728\u5168\u5c40\u5bf9\u8c61\u4e0a\u7684\u65b9\u6cd5\u90fd\u4e0d\u4f1a\u8f6c\u7801\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"babel-polyfill"),"\u7528\u4e8e\u5bf9\u5df2\u7ecf\u5b58\u5728\u7684\u8bed\u6cd5\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"\u5b9e\u73b0\u4e00\u4e9b\u6d4f\u89c8\u5668\u8fd8\u6ca1\u6709\u5b9e\u73b0\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"api"),"\uff0c\u5bf9\u6d4f\u89c8\u5668\u7684\u4e00\u4e9b\u7f3a\u9677\u505a\u4e00\u4e9b\u4fee\u8865\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Using npm")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @babel/polyfill\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"or using yarn")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @babel/polyfill --dev\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"{\n    devDependencies: {\n    '@babel/polyfill': '^x.x.x',\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"polyfill"),"\u7684\u5305\u6709\u70b9\u5927\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u5e76\u4e0d\u9700\u8981\u5168\u91cf\u5f15\u5165\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5f15\u5165",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-runtime/"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-transform-runtime")),"\u8fd9\u4e2a\u5305\u3002\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Babel"),"\u4f7f\u7528\u5f88\u5c0f\u7684\u5e2e\u52a9\u5668\u6765\u5b8c\u6210\u8bf8\u5982\u7684\u529f\u80fd",(0,r.kt)("inlineCode",{parentName:"p"},"_extend"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5c06\u88ab\u6dfb\u52a0\u5230\u9700\u8981\u5b83\u7684\u6bcf\u4e2a\u6587\u4ef6\u4e2d\u3002\u6709\u65f6\u4e0d\u9700\u8981\u91cd\u590d\uff0c\u7279\u522b\u662f\u5f53\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u5206\u5e03\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u65f6\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-runtime"),"\u63d2\u4ef6\u7684\u6765\u6e90\uff1a\u6240\u6709\u5e2e\u52a9\u7a0b\u5e8f\u90fd\u5c06\u5f15\u7528\u8be5\u6a21\u5757\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/runtime"),"\u4ee5\u907f\u514d\u5728\u7f16\u8bd1\u540e\u7684\u8f93\u51fa\u4e2d\u51fa\u73b0\u91cd\u590d\u3002\u8fd0\u884c\u65f6\u5c06\u88ab\u7f16\u8bd1\u5230\u60a8\u7684\u6784\u5efa\u4e2d\u3002"),(0,r.kt)("p",null,"\u8be5\u8f6c\u6362\u5668\u7684\u53e6\u4e00\u4e2a\u76ee\u7684\u662f\u4e3a\u60a8\u7684\u4ee3\u7801\u521b\u5efa\u4e00\u4e2a\u6c99\u76d2\u73af\u5883\u3002\u5982\u679c\u4f60\u76f4\u63a5\u5bfc\u5165",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js"),"\u6216",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-polyfill"},"@babel/polyfill"),"\uff0c\u5b83\u63d0\u4f9b\u4e86\u8bf8\u5982\u5185\u7f6e\u63d2\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"\u90a3\u4e9b\u4f1a\u6c61\u67d3\u5168\u5c40\u8303\u56f4\u3002\u5c3d\u7ba1\u8fd9\u5bf9\u4e8e\u5e94\u7528\u7a0b\u5e8f\u6216\u547d\u4ee4\u884c\u5de5\u5177\u53ef\u80fd\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u5982\u679c\u60a8\u7684\u4ee3\u7801\u662f\u8981\u53d1\u5e03\u4f9b\u4ed6\u4eba\u4f7f\u7528\u7684\u5e93\uff0c\u6216\u8005\u60a8\u65e0\u6cd5\u5b8c\u5168\u63a7\u5236\u4ee3\u7801\u8fd0\u884c\u7684\u73af\u5883\uff0c\u5219\u5c06\u6210\u4e3a\u4e00\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u8f6c\u6362\u5668\u4f1a\u5c06\u8fd9\u4e9b\u5185\u7f6e\u522b\u540d\u4f5c\u4e3a\u522b\u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"core-js"),"\u56e0\u6b64\u60a8\u53ef\u4ee5\u65e0\u7f1d\u4f7f\u7528\u5b83\u4eec\uff0c\u800c\u65e0\u9700\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"polyfill"),"\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528"),(0,r.kt)("p",null,"\u751f\u4ea7\u73af\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @babel/plugin-transform-runtime\n")),(0,r.kt)("p",null,"\u5e76",(0,r.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-runtime"},(0,r.kt)("inlineCode",{parentName:"a"},"@babel/runtime")),"\u4f5c\u4e3a\u751f\u4ea7\u4f9d\u8d56\u6027\uff08\u56e0\u4e3a\u5b83\u662f\u9488\u5bf9\u201c\u8fd0\u884c\u65f6(",(0,r.kt)("inlineCode",{parentName:"p"},"runtime"),")\u201d\u7684\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save @babel/runtime\n")),(0,r.kt)("p",null,"\u8f6c\u6362\u63d2\u4ef6\u901a\u5e38\u4ec5\u5728\u5f00\u53d1\u4e2d\u4f7f\u7528\uff0c\u4f46\u662f\u8fd0\u884c\u65f6\u672c\u8eab\u5c06\u53d6\u51b3\u4e8e\u90e8\u7f72\u7684\u4ee3\u7801\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": ["@babel/plugin-transform-runtime"]\n}\n')),(0,r.kt)("p",null,"\u5e26\u914d\u7f6e\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    [\n      "@babel/plugin-transform-runtime",\n      {\n        "absoluteRuntime": false,\n        "corejs": false,\n        "helpers": true,\n        "regenerator": true,\n        "useESModules": false\n      }\n    ]\n  ]\n}\n')),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.babeljs.cn/docs/"},"Babel\u5b98\u7f51")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Rain120/babel-handbook/blob/master/translations/zh-Hans/README.md"},"babel-handbook \u4e2d\u6587\u6587\u6863")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.im/post/5d94bfbf5188256db95589be#heading-1"},"\u6df1\u5165\u6d45\u51fa Babel \u4e0a\u7bc7\uff1a\u67b6\u6784\u548c\u539f\u7406 + \u5b9e\u6218")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/43249121"},"\u4e00\u53e3\uff08\u5f88\u957f\u7684\uff09\u6c14\u4e86\u89e3 babel")))}u.isMDXComponent=!0}}]);