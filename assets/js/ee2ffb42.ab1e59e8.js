"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4002],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=a.createContext({}),k=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=k(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=k(t),m=p,s=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(s,l(l({ref:n},u),{},{components:t})):a.createElement(s,l({ref:n},u))}));function m(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var k=2;k<r;k++)l[k]=t[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4924:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return k},toc:function(){return u},default:function(){return d}});var a=t(87462),p=t(63366),r=(t(67294),t(3905)),l=["components"],i={},o="Webpack \u57fa\u7840\u77e5\u8bc6",k={unversionedId:"webpack/webpack-base",id:"webpack/webpack-base",title:"Webpack \u57fa\u7840\u77e5\u8bc6",description:"\u4ec0\u4e48\u662fWebpack\uff1f",source:"@site/engineering/webpack/webpack-base.md",sourceDirName:"webpack",slug:"/webpack/webpack-base",permalink:"/study-notes/engineering/webpack/webpack-base",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1641816162,formattedLastUpdatedAt:"1/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Webpack Tapable",permalink:"/study-notes/engineering/webpack/tapable"},next:{title:"Webpack \u6027\u80fd\u4f18\u5316",permalink:"/study-notes/engineering/webpack/webpack-optimize"}},u=[{value:"\u4ec0\u4e48\u662fWebpack\uff1f",id:"\u4ec0\u4e48\u662fwebpack",children:[],level:2},{value:"Webpack\u6838\u5fc3\u6982\u5ff5",id:"webpack\u6838\u5fc3\u6982\u5ff5",children:[{value:"<code>entry</code>",id:"entry",children:[],level:3},{value:"output",id:"output",children:[],level:3},{value:"module",id:"module",children:[],level:3},{value:"loaders",id:"loaders",children:[],level:3},{value:"plugins",id:"plugins",children:[],level:3},{value:"chunck",id:"chunck",children:[],level:3}],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,p.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webpack-\u57fa\u7840\u77e5\u8bc6"},"Webpack \u57fa\u7840\u77e5\u8bc6"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fwebpack"},"\u4ec0\u4e48\u662fWebpack\uff1f"),(0,r.kt)("p",null,"\u672c\u8d28\u4e0a\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u662f\u4e00\u4e2a\u73b0\u4ee3 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u5e94\u7528\u7a0b\u5e8f\u7684",(0,r.kt)("strong",{parentName:"p"},"\u9759\u6001\u6a21\u5757\u6253\u5305\u5668(module bundler)"),"\u3002\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u5b83\u4f1a\u9012\u5f52\u5730\u6784\u5efa\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u5173\u7cfb\u56fe(dependency graph)"),"\uff0c\u5176\u4e2d\u5305\u542b\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u7684\u6bcf\u4e2a\u6a21\u5757\uff0c\u7136\u540e\u5c06\u6240\u6709\u8fd9\u4e9b\u6a21\u5757\u6253\u5305\u6210\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle"),"\u3002"),(0,r.kt)("h2",{id:"webpack\u6838\u5fc3\u6982\u5ff5"},"Webpack\u6838\u5fc3\u6982\u5ff5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)("h3",{id:"entry"},(0,r.kt)("inlineCode",{parentName:"h3"},"entry")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/entry-points/"},"\u5b98\u65b9\u6587\u6863 - \u5165\u53e3\u8d77\u70b9")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entry")," \u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u6a21\u5757\uff0c\u6765\u4f5c\u4e3a\u6784\u5efa\u5176\u5185\u90e8 ",(0,r.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u56fe")," \u7684\u5f00\u59cb\u3002\u8fdb\u5165\u5165\u53e3\u8d77\u70b9\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u4f1a\u627e\u51fa\u6709\u54ea\u4e9b\u6a21\u5757\u548c\u5e93\u662f\u5165\u53e3\u8d77\u70b9 ",(0,r.kt)("strong",{parentName:"p"},"(\u76f4\u63a5\u548c\u95f4\u63a5)")," \u4f9d\u8d56\u7684\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u4f9d\u8d56\u9879\u968f\u5373\u88ab\u5904\u7406\uff0c\u6700\u540e\u8f93\u51fa\u5230\u79f0\u4e4b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"bundles")," \u7684\u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," \u53ef\u914d\u7f6e\u5355\u6587\u4ef6\u5165\u53e3\uff0c\u591a\u6587\u4ef6\u5165\u53e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entry"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Object"))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String"),": \u5165\u53e3\u6a21\u5757\u7684\u6587\u4ef6\u8def\u5f84"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Array"),": \u4e0e\u5b57\u7b26\u4e32\u7c7b\u578b\u4e0d\u540c\u7684\u662f\u6570\u7ec4\u53ef\u5c06\u591a\u4e2a\u6587\u4ef6\u6253\u5305\u4e3a\u4e00\u4e2a\u6587\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object"),": \u914d\u7f6e\u591a\u4e2a\u5165\u53e3\uff0c\u6bcf\u4e2a\u5165\u53e3\u6709\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"#chunck-gt-%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3-%E4%BB%A3%E7%A0%81%E5%9D%97"},"Chunk")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  entry: './src/index.js',\n  \n  // entry: ['./src/index.js', './src/index2.js'],\n  // entry: {\n  //   a: './src/index.js',\n  //   b: ['./src/index2.js'],\n  // },\n}\n")),(0,r.kt)("h3",{id:"output"},"output"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/output/"},"\u5b98\u65b9\u6587\u6863 - \u8f93\u51fa")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"output")," \u5c5e\u6027\u544a\u8bc9 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u5728\u54ea\u91cc\u8f93\u51fa\u5b83\u6240\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bundles"),"\uff0c\u4ee5\u53ca\u5982\u4f55\u547d\u540d\u8fd9\u4e9b\u6587\u4ef6\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"./dist"),"\u3002\u57fa\u672c\u4e0a\uff0c\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7ed3\u6784\uff0c\u90fd\u4f1a\u88ab\u7f16\u8bd1\u5230\u4f60\u6307\u5b9a\u7684\u8f93\u51fa\u8def\u5f84\u7684\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"output"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filename"),": \u7528\u4e8e\u8f93\u51fa\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),": \u76ee\u6807\u8f93\u51fa\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u5fc5\u987b\u662f\u7edd\u5bf9\u8def\u5f84"),"\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'bundle.js'\n  }\n};\n")),(0,r.kt)("h3",{id:"module"},"module"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/"},"\u5b98\u65b9\u6587\u6863 - \u6a21\u5757")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Modular_programming"},"\u6a21\u5757\u5316\u7f16\u7a0b"),"\u4e2d\uff0c\u5f00\u53d1\u8005\u5c06\u7a0b\u5e8f\u5206\u89e3\u6210\u79bb\u6563\u529f\u80fd\u5757(",(0,r.kt)("inlineCode",{parentName:"p"},"discrete chunks of functionality"),")\uff0c\u5e76\u79f0\u4e4b\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"\u6a21\u5757"),"\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Webpack")," \u91cc\u4e00\u5207\u7686\u6a21\u5757,\u4e00\u4e2a\u6a21\u5757\u5bf9\u5e94\u7740\u4e00\u4e2a\u6587\u4ef6\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Webpack")," \u4f1a\u4ece\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Entry")," \u5f00\u59cb\u9012\u5f52\u627e\u51fa\u6240\u6709\u4f9d\u8d56\u7684\u6a21\u5757\u3002"),(0,r.kt)("p",null,"\u8bf7\u81ea\u884c\u67e5\u9605 ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module"},"\u5b98\u65b9",(0,r.kt)("inlineCode",{parentName:"a"},"API")," \u63cf\u8ff0"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#condition"},"https://webpack.js.org/configuration/module/#condition")),(0,r.kt)("h3",{id:"loaders"},"loaders"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/loaders/"},"\u5b98\u65b9\u6587\u6863 - \u6a21\u5757\u8f6c\u6362\u5668")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loader")," \u8ba9 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u80fd\u591f\u53bb\u5904\u7406\u90a3\u4e9b\u975e ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u6587\u4ef6(",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u81ea\u8eab\u53ea\u7406\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),")\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"loader")," \u53ef\u4ee5\u5c06\u6240\u6709\u7c7b\u578b\u7684\u6587\u4ef6\u8f6c\u6362\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u80fd\u591f\u5904\u7406\u7684\u6709\u6548\u6a21\u5757,\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack")," \u7684\u6253\u5305\u80fd\u529b,\u5bf9\u5b83\u4eec\u8fdb\u884c\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u672c\u8d28\u4e0a, ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack loader")," \u5c06\u6240\u6709\u7c7b\u578b\u7684\u6587\u4ef6,\u8f6c\u6362\u4e3a\u5e94\u7528\u7a0b\u5e8f\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/dependency-graph/"},(0,r.kt)("strong",{parentName:"a"},"\u4f9d\u8d56\u56fe (dependency graph)"))," (\u548c\u6700\u7ec8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle"),")\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528\u7684\u6a21\u5757\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filenme: '[name].[hash:8].js'\n  },\n  module: {\n        rules: [\n            {\n                test: /\\.css$/,\n                loader: 'style-loader!css-loader'\n            },\n            {\n                test: /\\.js$/,\n                use: 'babel-loader',\n                exclude: /node_modules/\n            }\n        ]\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/configuration/module/#module-rules"},(0,r.kt)("inlineCode",{parentName:"a"},"module.rules"),"\u53c2\u6570\u5217\u8868 ")),(0,r.kt)("h3",{id:"plugins"},"plugins"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/plugins/"},"\u5b98\u65b9\u6587\u6863 - \u63d2\u4ef6")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6269\u5c55 ",(0,r.kt)("inlineCode",{parentName:"li"},"Webpack")," \u529f\u80fd\uff0c\u6267\u884c\u8303\u56f4\u66f4\u5e7f\u7684\u4efb\u52a1\u3002\u63d2\u4ef6\u7684\u8303\u56f4\u5305\u62ec\uff0c\u4ece\u6253\u5305\u4f18\u5316\u548c\u538b\u7f29\uff0c\u4e00\u76f4\u5230\u91cd\u65b0\u5b9a\u4e49\u73af\u5883\u4e2d\u7684\u53d8\u91cf\uff0c\u6a21\u677f\u7f16\u8bd1\u8f93\u51fa\uff0c\u6346\u7ed1\u4f18\u5316, \u5404\u79cd\u5404\u6837\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Plugin")," \u51e0\u4e4e\u8ba9 ",(0,r.kt)("inlineCode",{parentName:"li"},"Webpack")," \u53ef\u4ee5\u505a\u4efb\u4f55\u6784\u5efa\u76f8\u5173\u7684\u4e8b\u60c5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack")," \u8fd0\u884c\u7684\u751f\u547d\u5468\u671f\u4e2d\u4f1a\u5e7f\u64ad\u51fa\u8bb8\u591a\u4e8b\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Plugin")," \u53ef\u4ee5\u76d1\u542c\u8fd9\u4e9b\u4e8b\u4ef6\uff0c\u5728\u5408\u9002\u7684\u65f6\u673a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack")," \u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"API")," \u6539\u53d8\u8f93\u51fa\u7ed3\u679c\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d2\u4ef6")," \u7684\u76ee\u7684\u5728\u4e8e\u89e3\u51b3",(0,r.kt)("inlineCode",{parentName:"p"}," loader")," \u65e0\u6cd5\u5b9e\u73b0\u7684\u5176\u4ed6\u4e8b\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst webpack = require('webpack');\nconst HTMLWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = {\n    entry: './src/index.js',\n    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: '[name].[hash:8].js',\n    }\n    plugins: [\n        new HTMLWebpackPlugin(),\n      ...\n    ],\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plugin"),"\u539f\u7406")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"webpack "),"\u63d2\u4ef6 \u662f\u4e00\u4e2a\u5177\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"},(0,r.kt)("inlineCode",{parentName:"a"},"apply"))," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u5bf9\u8c61\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"apply")," \u5c5e\u6027\u4f1a\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack compiler")," \u8c03\u7528\uff0c\u5e76\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler")," \u5bf9\u8c61\u53ef\u5728 ",(0,r.kt)("strong",{parentName:"p"},"\u6574\u4e2a\u7f16\u8bd1\u751f\u547d\u5468\u671f")," \u8bbf\u95ee\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u63d2\u4ef6\u51fd\u6570\u4e0a\u5b9a\u4e49\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"apply")," \u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4e00\u4e2a\u7ed1\u5b9a\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack")," \u81ea\u8eab\u7684\u4e8b\u4ef6\u94a9\u5b50\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack")," \u5185\u90e8\u5b9e\u4f8b\u7684\u7279\u5b9a\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5b8c\u6210\u540e\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack")," \u63d0\u4f9b\u7684\u56de\u8c03\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ConsoleLogOnBuildWebpackPlugin.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const pluginName = 'ConsoleLogOnBuildWebpackPlugin';\n\nclass ConsoleLogOnBuildWebpackPlugin {\n    apply(compiler) {\n        compiler.hooks.run.tap(pluginName, compilation => {\n            console.log(\"webpack \u6784\u5efa\u8fc7\u7a0b\u5f00\u59cb\uff01\");\n        });\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"compiler hook")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tap")," \u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u5e94\u8be5\u662f\u9a7c\u5cf0\u5f0f\u547d\u540d\u7684\u63d2\u4ef6\u540d\u79f0\u3002\u5efa\u8bae\u4e3a\u6b64\u4f7f\u7528\u4e00\u4e2a\u5e38\u91cf\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u5728\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"hook")," \u4e2d\u590d\u7528\u3002"),(0,r.kt)("h3",{id:"chunck"},"chunck"),(0,r.kt)("p",null,"\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk")," \u7531\u591a\u4e2a\u6a21\u5757\u7ec4\u5408\u800c\u6210, \u7528\u4e8e\u4ee3\u7801\u5408\u5e76\u4e0e\u5206\u5272\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chunk"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," :  ",(0,r.kt)("inlineCode",{parentName:"li"},"Chunk")," \u7684\u552f\u4e00\u6807\u8bc6\uff0c\u4ece0\u5f00\u59cb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),":  ",(0,r.kt)("inlineCode",{parentName:"li"},"Chunk")," \u7684\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hash"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Chunk")," \u7684\u552f\u4e00\u6807\u8bc6\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Hash")," \u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chunkhash"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Chunk")," \u5185\u5bb9\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Hash")," \u503c")))))}d.isMDXComponent=!0}}]);