"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2270],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68627:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],p={sidebar_position:3},i="Loader \u79cd\u7c7b",d={unversionedId:"webpack/loader/category",id:"webpack/loader/category",title:"Loader \u79cd\u7c7b",description:"\u5173\u4e8e loader\u7684\u79cd\u7c7b, \u53ef\u4ee5\u901a\u8fc7rule.enforce\u6765\u914d\u7f6e\uff0c\u5982\u4e0b",source:"@site/engineering/webpack/loader/category.md",sourceDirName:"webpack/loader",slug:"/webpack/loader/category",permalink:"/study-notes/engineering/webpack/loader/category",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643963901,formattedLastUpdatedAt:"2/4/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Loader \u914d\u7f6e",permalink:"/study-notes/engineering/webpack/loader/config"},next:{title:"Loader \u6267\u884c",permalink:"/study-notes/engineering/webpack/loader/exec"}},s=[{value:"Loader \u5339\u914d\u89c4\u5219",id:"loader-\u5339\u914d\u89c4\u5219",children:[],level:2},{value:"Loader \u6267\u884c",id:"loader-\u6267\u884c",children:[{value:"Loader \u94fe\u5f0f\u6267\u884c",id:"loader-\u94fe\u5f0f\u6267\u884c",children:[],level:3}],level:2},{value:"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a Loader",id:"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a-loader",children:[{value:"\u7f16\u5199\u539f\u5219",id:"\u7f16\u5199\u539f\u5219",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],c={toc:s};function u(e){var n=e.components,p=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loader-\u79cd\u7c7b"},"Loader \u79cd\u7c7b"),(0,o.kt)("p",null,"\u5173\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u7684\u79cd\u7c7b, \u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"rule.enforce"),"\u6765\u914d\u7f6e\uff0c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // ...\n    module: {\n    // ...\n    // \u4ece\u4e0b\u5f80\u4e0a, css-loader -> style-loader\n    rules: [\n      {\n        test: /\\.css$/,\n        use: {\n          loader: 'style-loader'\n        },\n        enforce:'pre'\n      },\n      {\n        test: /\\.css$/,\n        use: {\n          loader: 'css-loader'\n        }\n      }\n    ]\n  },\n  // ...\n}\n")),(0,o.kt)("p",null,"\u6b64\u65f6\uff0c\u5728\u666e\u901a ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u6a21\u5f0f\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader"),"\u5c06\u4f1a\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"style-laoder"),"\u4e4b\u540e\u6267\u884c\u3002\u5373\u7531\u4e4b\u524d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader -> style-loader"),"\u53d8\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"style-loader -> css-loader"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rule.enforce"),"\u7684\u53c2\u6570: ",(0,o.kt)("inlineCode",{parentName:"p"},"'pre'")," ",(0,o.kt)("inlineCode",{parentName:"p"},"'post'")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pre Loader"),": \u524d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"loader")," \u2460 ----\x3e ",(0,o.kt)("inlineCode",{parentName:"li"},"enforce: 'pre"),"'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"normal Loader"),": \u666e\u901a ",(0,o.kt)("inlineCode",{parentName:"li"},"loader")," \u2461 ----\x3e \u9ed8\u8ba4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inline Loader"),": \u5185\u8054",(0,o.kt)("inlineCode",{parentName:"li"},"loader")," \u2462 ----\x3e \u5728\u6a21\u5757\u4e2d\u6307\u5b9a\u4f7f\u7528\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"loader"),"\u662f",(0,o.kt)("a",{parentName:"li",href:"#%E5%86%85%E8%81%94%E9%85%8D%E7%BD%AELoader"},"\u5185\u8054",(0,o.kt)("inlineCode",{parentName:"a"},"loader"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"post Loader"),": \u540e\u7f6e",(0,o.kt)("inlineCode",{parentName:"li"},"loader")," \u2463 ----\x3e ",(0,o.kt)("inlineCode",{parentName:"li"},"enforce: 'post"),"'")),(0,o.kt)("h2",{id:"loader-\u5339\u914d\u89c4\u5219"},"Loader \u5339\u914d\u89c4\u5219"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u53ef\u4ee5\u901a\u8fc7\u5f15\u5165\u6a21\u5757\u7684\u8def\u5f84\u89c4\u5219\uff0c\u6765\u5224\u65ad\u662f\u5426\u4f7f\u7528\u5185\u8054\u6a21\u5f0f\u6216\u8005\u5254\u9664\u4e00\u4e9b\u524d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"(pre)")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader"),", \u540e\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"(post)")," , \u666e\u901a",(0,o.kt)("inlineCode",{parentName:"p"},"(normal)")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader"),"\u3002\u89c4\u5219\u5982\u4e0b:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-!")," : \u5254\u9664 \u914d\u7f6e\u4e2d\u7b26\u5408\u6761\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pre")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"normal")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"!")," : \u5254\u9664 \u914d\u7f6e\u4e2d\u7b26\u5408\u6761\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"normal")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"!!")," : \u5254\u9664 \u914d\u7f6e\u4e2d\u7b26\u5408\u6761\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pre")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"normal")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Disable normal loaders\nimport { a } from '!./file1.js';\n\n// Disable preloaders and normal loaders\nimport { b } from '-!./file2.js';\n\n// Disable all loaders\nimport { c } from '!!./file3.js';\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u4ee3\u7801\u903b\u8f91\u89e3\u6790\u89c4\u5219\u5982\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"(5.0.0.beta.15 vs 4.43.0)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// ...\nconst firstChar = requestWithoutMatchResource.charCodeAt(0);\nconst secondChar = requestWithoutMatchResource.charCodeAt(1);\nconst noPreAutoLoaders = firstChar === 45 && secondChar === 33; // startsWith "-!"\nconst noAutoLoaders = noPreAutoLoaders || firstChar === 33; // startsWith "!"\nconst noPrePostAutoLoaders = firstChar === 33 && secondChar === 33; // startsWith "!!";\nconst rawElements = requestWithoutMatchResource\n  .slice(noPreAutoLoaders || noPrePostAutoLoaders ? 2 : noAutoLoaders ? 1 : 0)\n  .split(/!+/);\n// ...\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/blob/2db705096bd9fa869e5cbe3e9fe5e09b0089c188/lib/NormalModuleFactory.js#L273"},"\u8be6\u89c1 5.0.0 beta.15 webpack NormalModuleFactory.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// ...\nconst noPreAutoLoaders = requestWithoutMatchResource.startsWith('-!');\nconst noAutoLoaders =\n  noPreAutoLoaders || requestWithoutMatchResource.startsWith('!');\nconst noPrePostAutoLoaders = requestWithoutMatchResource.startsWith('!!');\nlet elements = requestWithoutMatchResource\n  .replace(/^-?!+/, '')\n  .replace(/!!+/g, '!')\n  .split('!');\nlet resource = elements.pop();\nelements = elements.map(identToLoaderRequest);\n// ...\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/blob/c9d4ff7b054fc581c96ce0e53432d44f9dd8ca72/lib/NormalModuleFactory.js#L180"},"\u8be6\u89c1 4.43.0 webpack NormalModuleFactory.js")),(0,o.kt)("h2",{id:"loader-\u6267\u884c"},"Loader \u6267\u884c"),(0,o.kt)("h3",{id:"loader-\u94fe\u5f0f\u6267\u884c"},"Loader \u94fe\u5f0f\u6267\u884c"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6570\u7ec4"),": \u4ece\u53f3\u5f80\u5de6\u6267\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // ...\n  module: {\n    // ...\n    rules: [\n      {\n        test: /\\.css$/,\n        // \u4ece\u53f3\u5f80\u5de6, css-loader -> style-loader\n        use: ['style-laoder', 'css-loader'],\n      },\n    ],\n  },\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5bf9\u8c61"),": \u4ece\u4e0b\u5f80\u4e0a\u6267\u884c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // ...\n  module: {\n    // ...\n    // \u4ece\u4e0b\u5f80\u4e0a, css-loader -> style-loader\n    rules: [\n      {\n        test: /\\.css$/,\n        use: {\n          loader: 'style-loader'\n        }\n      },\n      {\n        test: /\\.css$/,\n        use: {\n          loader: 'css-loader'\n        }\n      }\n    ]\n  },\n  // ...\n}\n")),(0,o.kt)("p",null,"\u6bcf\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u9ed8\u8ba4\u7684\u6267\u884c\u9636\u6bb5(",(0,o.kt)("inlineCode",{parentName:"p"},"normal execution"),")\u7684\u6267\u884c\u987a\u5e8f\u662f\u4ece \u2460 \u2461 \u2462 \u2463, \u5373\uff0c\u4ece\u540e\u5f80\u524d\u6267\u884c; \u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," \u53ea\u5173\u5fc3 ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," \u540e\u9762\u7684",(0,o.kt)("strong",{parentName:"p"},"\u5143\u6570\u636e(metadata)"),"\uff0c\u5e76\u4e14\u5ffd\u7565\u524d\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," \u7684\u7ed3\u679c\u3002\u5728\u5b9e\u9645\uff08\u4ece\u53f3\u5230\u5de6\uff09\u6267\u884c loader \u4e4b\u524d\uff0c\u4f1a\u5148",(0,o.kt)("strong",{parentName:"p"},"\u4ece\u5de6\u5230\u53f3"),"\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," \u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pitch")," \u65b9\u6cd5\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"pitch")," \u9636\u6bb5\u7684\u6267\u884c\u987a\u5e8f\u662f \u2463 \u2462 \u2461 \u2460\u3002\u5bf9\u4e8e\u4ee5\u4e0b ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/configuration/module#rule-use"},(0,o.kt)("inlineCode",{parentName:"a"},"use"))," \u914d\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  //...\n  module: {\n    rules: [\n      {\n        //...\n        use: ['a-loader', 'b-loader', 'c-loader'],\n      },\n    ],\n  },\n  // ...\n};\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pitch")," \u548c",(0,o.kt)("inlineCode",{parentName:"p"},"normal execution"),"\u6267\u884c\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"|- a-loader `pitch`\n  |- b-loader `pitch`\n    |- c-loader `pitch`\n      |- requested module is picked up as a dependency\n    |- c-loader normal execution\n  |- b-loader normal execution\n|- a-loader normal execution\n")),(0,o.kt)("p",null,"\u6b63\u5e38\u6267\u884c"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"webpack-loader.png",src:t(6224).Z})),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5982\u679c\u4efb\u4f55 ",(0,o.kt)("inlineCode",{parentName:"p"},"pitch")," \u6709\u8fd4\u56de\u503c\uff0c\u5219 ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," \u6267\u884c\u94fe\u88ab\u963b\u65ad\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"webpack")," \u4f1a\u8df3\u8fc7\u540e\u9762\u6240\u6709\u7684\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"pitch")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\uff0c\u76f4\u63a5\u8fdb\u5165\u4e0a\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"normal execution"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"webpack-loader-pitch.png",src:t(82157).Z})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/loaders/#pitching-loader"},"pitching-loader")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#ruleenforce"},"Rule.enforce")),(0,o.kt)("h2",{id:"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a-loader"},"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a Loader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"loader")," \u662f\u5bfc\u51fa\u4e3a\u4e00\u4e2a\u51fd\u6570\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," \u6a21\u5757\u3002\u8be5\u51fd\u6570\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," \u8f6c\u6362\u8d44\u6e90\u7684\u65f6\u5019\u8c03\u7528\u3002\u7ed9\u5b9a\u7684\u51fd\u6570\u5c06\u8c03\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/api/loaders/"},"loader API"),"\uff0c\u5e76\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u4e0a\u4e0b\u6587\u8bbf\u95ee\u3002"),(0,o.kt)("h3",{id:"\u7f16\u5199\u539f\u5219"},"\u7f16\u5199\u539f\u5219"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5355\u4e00\u539f\u5219: \u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"Loader")," \u53ea\u505a\u4e00\u4ef6\u4e8b;"),(0,o.kt)("li",{parentName:"ul"},"\u94fe\u5f0f\u8c03\u7528: ",(0,o.kt)("inlineCode",{parentName:"li"},"Webpack")," \u4f1a\u6309\u987a\u5e8f\u94fe\u5f0f\u8c03\u7528\u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"Loader"),";"),(0,o.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u539f\u5219: \u9075\u5faa ",(0,o.kt)("inlineCode",{parentName:"li"},"Webpack")," \u5236\u5b9a\u7684\u8bbe\u8ba1\u89c4\u5219\u548c\u7ed3\u6784\uff0c\u8f93\u5165\u4e0e\u8f93\u51fa\u5747\u4e3a\u5b57\u7b26\u4e32\uff0c\u5404\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"Loader")," \u5b8c\u5168\u72ec\u7acb\uff0c\u5373\u63d2\u5373\u7528;")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/contribute/writing-a-loader/#%E7%94%A8%E6%B3%95%E5%87%86%E5%88%99-guidelines-"},"\u7528\u6cd5\u51c6\u5219")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://rain120.github.io/study-notes/#/notes/webpack/mini-webpack?id=loaders-gt-%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3-%E6%A8%A1%E5%9D%97%E8%BD%AC%E6%8D%A2%E5%99%A8"},"Webpack Loader")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/concepts/loaders/"},"Webpack Loader \u5b98\u65b9\u6587\u6863")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/api/loaders/"},"loaders api")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/contribute/writing-a-loader/"},"\u7f16\u5199\u4e00\u4e2a loader")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://juejin.im/post/5bc1a73df265da0a8d36b74f"},"\u3010webpack \u8fdb\u9636\u3011\u4f60\u771f\u7684\u638c\u63e1\u4e86 loader \u4e48\uff1f- loader \u5341\u95ee")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000018450503"},"webpack \u7cfb\u5217\u4e4b\u56db loader \u8be6\u89e3 1")))}u.isMDXComponent=!0},82157:function(e,n,t){n.Z=t.p+"assets/images/webpack-loader-pitch-1c40255167ff5cd383866a7d11672c46.png"},6224:function(e,n,t){n.Z=t.p+"assets/images/webpack-loader-88ab24e9128a9f748733a58aa147853d.png"}}]);