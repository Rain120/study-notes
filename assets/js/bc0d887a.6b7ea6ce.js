"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[560],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,p(p({ref:t},s),{},{components:n})):r.createElement(k,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81267:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),p=["components"],l={},i="Decorator (\u88c5\u9970\u5668) \u5b9e\u73b0\u539f\u7406\u53ca\u5176\u4f7f\u7528",c={unversionedId:"javascript/key-concept/decorator",id:"javascript/key-concept/decorator",title:"Decorator (\u88c5\u9970\u5668) \u5b9e\u73b0\u539f\u7406\u53ca\u5176\u4f7f\u7528",description:"\u5b9a\u4e49",source:"@site/fe/javascript/key-concept/decorator.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/decorator",permalink:"/study-notes/fe/javascript/key-concept/decorator",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643165270,formattedLastUpdatedAt:"1/26/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u95ed\u5305",permalink:"/study-notes/fe/javascript/key-concept/closure"},next:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/study-notes/fe/javascript/key-concept/event-loop"}},s=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[],level:2},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"\u524d\u63d0",id:"\u524d\u63d0",children:[],level:3},{value:"\u7c7b\u88c5\u9970\u5668",id:"\u7c7b\u88c5\u9970\u5668",children:[],level:3},{value:"\u7c7b\u65b9\u6cd5, \u7c7b\u5c5e\u6027\u88c5\u9970\u5668",id:"\u7c7b\u65b9\u6cd5-\u7c7b\u5c5e\u6027\u88c5\u9970\u5668",children:[],level:3},{value:"\u51fd\u6570\u65b9\u6cd5\u7684\u88c5\u9970",id:"\u51fd\u6570\u65b9\u6cd5\u7684\u88c5\u9970",children:[],level:3}],level:2},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[{value:"Object.defineProperty(obj, prop, descriptor)",id:"objectdefinepropertyobj-prop-descriptor",children:[],level:3},{value:"babel \u8f6c\u6362",id:"babel-\u8f6c\u6362",children:[],level:3},{value:"\u81ea\u5df1\u5b9e\u73b0",id:"\u81ea\u5df1\u5b9e\u73b0",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decorator-\u88c5\u9970\u5668-\u5b9e\u73b0\u539f\u7406\u53ca\u5176\u4f7f\u7528"},"Decorator (\u88c5\u9970\u5668) \u5b9e\u73b0\u539f\u7406\u53ca\u5176\u4f7f\u7528"),(0,o.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,o.kt)("p",null,"\u88c5\u9970\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"(Decorator)"),"  \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"ES7")," \u4e2d\u7684\u4e00\u4e2a\u63d0\u6848\uff0c\u76ee\u524d\u4ecd\u5904\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators"},"stage-2: \u8349\u7a3f\u72b6\u6001"),"\u3002\u5b83\u662f\u4e00\u79cd\u4e0e\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"(class)")," \u76f8\u5173\u7684\u8bed\u6cd5\uff0c\u7528\u6765\u6ce8\u91ca\u6216\u4fee\u6539\u7c7b\u548c\u7c7b\u65b9\u6cd5\u3002\u88c5\u9970\u5668\u662f\u4e00\u79cd\u51fd\u6570\uff0c\u5199\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"@ + \u51fd\u6570\u540d"),", \u5b83\u53ef\u4ee5\u653e\u5728\u7c7b\u548c\u7c7b\u65b9\u6cd5\u7684\u5b9a\u4e49\u524d\u9762\u3002"),(0,o.kt)("h2",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,o.kt)("p",null,"\u5b83\u4eec\u4e0d\u4ec5\u589e\u52a0\u4e86\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\uff0c\u6e05\u6670\u5730\u8868\u8fbe\u4e86\u610f\u56fe\uff0c\u800c\u4e14\u63d0\u4f9b\u4e00\u79cd\u65b9\u4fbf\u7684\u624b\u6bb5\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u589e\u52a0\u6216\u4fee\u6539\u7c7b\u7684\u529f\u80fd"),"\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,o.kt)("p",null,"\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"babel")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"decorator")," \u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @babel/cli @babel/core --save-dev\nnpm install @babel/proposal-decorators @babel/proposal-class-properties --save-dev\n")),(0,o.kt)("p",null,"\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"plugins": [\n    ["@babel/proposal-decorators", {\n        "legency": true\n    }],\n  ["@babel/proposal-class-properties", {\n        "loose": true\n    }]\n]\n')),(0,o.kt)("p",null,"\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u5230\u8fd9\u91cc\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"babel")," \u7f16\u8bd1\u7ed3\u679c ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/repl/?spm=taofed.bloginfo.blog.4.46f85ac8ur2znZ#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAZzgWwKYBEMTgJwEMoCAKAawBtDlkAaRcjATwYBMNkIBKRAbwBQiRPgxQQ-JBy4BuAQF8BAiNVqIAYnDj8hwxAAFUmHHiIl8u4QHMxKdBgCCECJ1T5SvPovlA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=stage-2&prettier=true&targets=&version=7.10.4&externalPlugins="},"I'm here !!")),(0,o.kt)("h3",{id:"\u7c7b\u88c5\u9970\u5668"},"\u7c7b\u88c5\u9970\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function decorator(target, key, descriptor) {\n  // target -> \u6240\u8981\u88c5\u9970\u7684\u76ee\u6807\u7c7b, Foo \u7c7b\n  // key -> undefined\n  // descriptor -> undefined\n}\n\n@decorator\nclass Foo {}\n\n// ===> \n\nFoo = decorator(Foo) || Foo\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u88c5\u9970\u5668\u5bf9\u7c7b\u7684\u884c\u4e3a\u7684\u6539\u53d8\uff0c\u662f\u4ee3\u7801\u7f16\u8bd1\u65f6\u53d1\u751f\u7684\uff0c\u800c\u4e0d\u662f\u5728\u8fd0\u884c\u65f6"),"\u3002\u8fd9\u610f\u5473\u7740\uff0c\u88c5\u9970\u5668\u80fd\u5728\u7f16\u8bd1\u9636\u6bb5\u8fd0\u884c\u4ee3\u7801\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u88c5\u9970\u5668\u672c\u8d28\u5c31\u662f\u7f16\u8bd1\u65f6\u6267\u884c\u7684\u51fd\u6570"),"\u3002"),(0,o.kt)("h3",{id:"\u7c7b\u65b9\u6cd5-\u7c7b\u5c5e\u6027\u88c5\u9970\u5668"},"\u7c7b\u65b9\u6cd5, \u7c7b\u5c5e\u6027\u88c5\u9970\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Person {\n  @readonly\n  name() { return `${this.first} ${this.last}` }\n}\n\nfunction readonly(target, name, descriptor){\n  // descriptor\u5bf9\u8c61\u539f\u6765\u7684\u503c\u5982\u4e0b\n  // {\n  //   value: specifiedFunction,\n  //   enumerable: false,\n  //   configurable: true,\n  //   writable: true\n  // };\n  descriptor.writable = false;\n  return descriptor;\n}\n\nreadonly(Person.prototype, 'name', descriptor);\n// \u7c7b\u4f3c\u4e8e\nObject.defineProperty(Person.prototype, 'name', descriptor);\n")),(0,o.kt)("h3",{id:"\u51fd\u6570\u65b9\u6cd5\u7684\u88c5\u9970"},"\u51fd\u6570\u65b9\u6cd5\u7684\u88c5\u9970"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u88c5\u9970\u5668\u53ea\u80fd\u7528\u4e8e\u7c7b\u548c\u7c7b\u7684\u65b9\u6cd5\uff0c\u4e0d\u80fd\u7528\u4e8e\u51fd\u6570\uff0c\u56e0\u4e3a\u5b58\u5728\u51fd\u6570\u63d0\u5347"),"\u3002\u5982\u679c\u4e00\u5b9a\u8981\u88c5\u9970\u51fd\u6570\uff0c\u53ef\u4ee5\u91c7\u7528\u9ad8\u9636\u51fd\u6570\u7684\u5f62\u5f0f\u76f4\u63a5\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function doSomething(name) {\n  console.log('Hello, ' + name);\n}\n\nfunction loggingDecorator(wrapped) {\n  return function() {\n    console.log('Starting');\n    const result = wrapped.apply(this, arguments);\n    console.log('Finished');\n    return result;\n  }\n}\n\nconst wrapped = loggingDecorator(doSomething);\n")),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,o.kt)("p",null,"\u88c5\u9970\u5668\u5b9e\u9645\u662f\u4e00\u79cd\u7f16\u8bd1\u65f6\u6267\u884c\u7684\u51fd\u6570, \u5b83\u7684\u5b9e\u73b0\u4f9d\u8d56\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u3002"),(0,o.kt)("h3",{id:"objectdefinepropertyobj-prop-descriptor"},"Object.defineProperty(obj, prop, descriptor)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"obj")),(0,o.kt)("p",{parentName:"li"},"\u8981\u5b9a\u4e49\u5c5e\u6027\u7684\u5bf9\u8c61\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"prop")),(0,o.kt)("p",{parentName:"li"},"\u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u7684\u540d\u79f0\u6216 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol"},(0,o.kt)("inlineCode",{parentName:"a"},"Symbol"))," \u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"descriptor")),(0,o.kt)("p",{parentName:"li"},"\u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"configurable")),(0,o.kt)("p",{parentName:"li"},"\u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"configurable")," \u952e\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u8be5\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26\u624d\u80fd\u591f\u88ab\u6539\u53d8\uff0c\u540c\u65f6\u8be5\u5c5e\u6027\u4e5f\u80fd\u4ece\u5bf9\u5e94\u7684\u5bf9\u8c61\u4e0a\u88ab\u5220\u9664\u3002 ",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e3a")," ",(0,o.kt)("strong",{parentName:"p"},"false"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"enumerable")),(0,o.kt)("p",{parentName:"li"},"\u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"enumerable")," \u952e\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u8be5\u5c5e\u6027\u624d\u4f1a\u51fa\u73b0\u5728\u5bf9\u8c61\u7684\u679a\u4e3e\u5c5e\u6027\u4e2d\u3002 ",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e3a false"),"\u3002"))),(0,o.kt)("p",{parentName:"li"},"\u6570\u636e\u63cf\u8ff0\u7b26\u8fd8\u5177\u6709\u4ee5\u4e0b\u53ef\u9009\u952e\u503c\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"value")),(0,o.kt)("p",{parentName:"li"},"\u8be5\u5c5e\u6027\u5bf9\u5e94\u7684\u503c\u3002\u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u503c\uff08\u6570\u503c\uff0c\u5bf9\u8c61\uff0c\u51fd\u6570\u7b49\uff09\u3002 ",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e3a undefined"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"writable")),(0,o.kt)("p",{parentName:"li"},"\u5f53\u4e14\u4ec5\u5f53\u8be5\u5c5e\u6027\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"writable")," \u952e\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5c5e\u6027\u7684\u503c\uff0c\u4e5f\u5c31\u662f\u4e0a\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\uff0c\u624d\u80fd\u88ab",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators"},(0,o.kt)("inlineCode",{parentName:"a"},"\u8d4b\u503c\u8fd0\u7b97\u7b26")),"\u6539\u53d8\u3002 ",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e3a false\u3002")))),(0,o.kt)("p",{parentName:"li"},"\u5b58\u53d6\u63cf\u8ff0\u7b26\u8fd8\u5177\u6709\u4ee5\u4e0b\u53ef\u9009\u952e\u503c\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"get")),(0,o.kt)("p",{parentName:"li"},"\u5c5e\u6027\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"getter")," \u51fd\u6570\uff0c\u5982\u679c\u6ca1\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"getter"),"\uff0c\u5219\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002\u5f53\u8bbf\u95ee\u8be5\u5c5e\u6027\u65f6\uff0c\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\u3002\u6267\u884c\u65f6\u4e0d\u4f20\u5165\u4efb\u4f55\u53c2\u6570\uff0c\u4f46\u662f\u4f1a\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u5bf9\u8c61\uff08\u7531\u4e8e\u7ee7\u627f\u5173\u7cfb\uff0c\u8fd9\u91cc\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\u5e76\u4e0d\u4e00\u5b9a\u662f\u5b9a\u4e49\u8be5\u5c5e\u6027\u7684\u5bf9\u8c61\uff09\u3002\u8be5\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f1a\u88ab\u7528\u4f5c\u5c5e\u6027\u7684\u503c\u3002 ",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e3a undefined"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"set")),(0,o.kt)("p",{parentName:"li"},"\u5c5e\u6027\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"setter")," \u51fd\u6570\uff0c\u5982\u679c\u6ca1\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"setter"),"\uff0c\u5219\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002\u5f53\u5c5e\u6027\u503c\u88ab\u4fee\u6539\u65f6\uff0c\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\u3002\u8be5\u65b9\u6cd5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff08\u4e5f\u5c31\u662f\u88ab\u8d4b\u4e88\u7684\u65b0\u503c\uff09\uff0c\u4f1a\u4f20\u5165\u8d4b\u503c\u65f6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u5bf9\u8c61\u3002 ",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u4e3a undefined"),"\u3002"))))),(0,o.kt)("h3",{id:"babel-\u8f6c\u6362"},"babel \u8f6c\u6362"),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"babel")," \u8f6c\u6362\u7684\u7ed3\u679c\u6765\u7406\u89e3 ",(0,o.kt)("inlineCode",{parentName:"p"},"decorator")," \u662f\u5982\u4f55\u5b9e\u73b0\u7684\u3002"),(0,o.kt)("p",null,"\u7f16\u8bd1\u524d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Foo {\n    @readonly\n    get name() {\n        return 'Rain120';\n    }\n}\n\nfunction readonly(target, name, descriptor) {\n  return descriptor;\n}\n")),(0,o.kt)("p",null,"\u7f16\u8bd1\u540e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var _class;\n\nfunction _applyDecoratedDescriptor(\n     target, // _class.prototype,\n   property, // "name",\n   decorators, // [readonly],\n   descriptor, // Object.getOwnPropertyDescriptor(_class.prototype, "name"),\n   context // _class.prototype\n  ) {\n  var desc = {};\n  // \u62f7\u8d1d\u5c5e\u6027\n  Object.keys(descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if (\'value\' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  // \u5e94\u7528\u591a\u4e2a decorators\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  // \u8bbe\u7f6e decorators \u4fee\u6539\u7684\u5c5e\u6027\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object.defineProperty(target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction readonly(target, key, descriptor) {\n  return descriptor;\n}\n\nlet Foo = (\n  _class = class Foo {\n    get name() {\n      return \'Rain120\';\n    }\n\n  },\n  _applyDecoratedDescriptor(\n      _class.prototype,\n      "name", [readonly],\n      Object.getOwnPropertyDescriptor(_class.prototype, "name"),\n      _class.prototype\n  ),\n  _class\n);\n')),(0,o.kt)("h3",{id:"\u81ea\u5df1\u5b9e\u73b0"},"\u81ea\u5df1\u5b9e\u73b0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Decorator")," \u88c5\u9970\u65b9\u6cd5\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"descriptor"),"\u7684\u53c2\u6570\u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"Object.defineProperty")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"descriptor")," \u4e00\u81f4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Decorator")," \u88c5\u9970\u7c7b\u5c5e\u6027\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"descriptor"),"\u6ca1\u6709",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"get"),"\u6216",(0,o.kt)("inlineCode",{parentName:"li"},"set"),"\uff0c\u4e14\u591a\u51fa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"initializer"),"\u65b9\u6cd5, \u8fd4\u56de\u503c\u4f5c\u4e3a\u5c5e\u6027\u7684\u503c")),(0,o.kt)("p",null,"\u65e0\u53c2\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"decorator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @description \u88c5\u9970\u5668\u51fd\u6570\n * @param target \u88ab\u88c5\u9970\u5668\u88c5\u9970\u7684\u76ee\u6807\u5bf9\u8c61\u539f\u578b\n * @param key \u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027, \u7c7b\u548c\u65b9\u6cd5\u7684\u540d\u79f0\u6216Symbol\n * @param descriptor \u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027, \u7c7b\u548c\u65b9\u6cd5\u7684\u63cf\u8ff0\u7b26\n */\nfunction Decorator(target, key, descriptor) {\n  let descriptorValue = descriptor.initializer && descriptor.initializer.call(this);\n  const descriptor = {\n      enumerable: false,\n      configurable: true,\n      writable: true,\n      get() {\n        return descriptorValue;\n      },\n      set(value) {\n        descriptorValue = value;\n      }\n  };\n  return descriptor;\n}\n")),(0,o.kt)("p",null,"\u5e26\u53c2\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"decorator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @description \u88c5\u9970\u5668\u51fd\u6570\n * @param target \u88ab\u88c5\u9970\u5668\u88c5\u9970\u7684\u76ee\u6807\u5bf9\u8c61\u539f\u578b\n * @param key \u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027, \u7c7b\u548c\u65b9\u6cd5\u7684\u540d\u79f0\u6216Symbol\n * @param descriptor \u8981\u5b9a\u4e49\u6216\u4fee\u6539\u7684\u5c5e\u6027, \u7c7b\u548c\u65b9\u6cd5\u7684\u63cf\u8ff0\u7b26\n */\nfunction Decorator(props) {\n  return (target, key, descriptor) => {\n    let descriptorValue = descriptor.initializer && descriptor.initializer.call(this);\n    const descriptor = {\n        enumerable: false,\n        configurable: true,\n        writable: true,\n        get() {\n          return descriptorValue;\n        },\n        set(value) {\n          descriptorValue = value;\n        }\n    };\n    return descriptor;\n  }\n}\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://es6.ruanyifeng.com/#docs/decorator"},"ECMAScript 6 \u5165\u95e8 \u88c5\u9970\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"},"Object.defineProperty - MDN")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-decorators"},"JavaScript Decorators \u63d0\u6848\u5730\u5740")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.cmajiy3p1"},"Exploring EcmaScript Decorators")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/wycats/javascript-decorators"},"javascript-decorators")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://efe.baidu.com/blog/introduction-to-es-decorator/"},"introduction-to-es-decorator")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://fed.taobao.org/blog/taofed/do71ct/es7-decorator/?spm=taofed.homepage.header.22.7eab5ac8PULUNx"},"ES7 Decorator \u88c5\u9970\u8005\u6a21\u5f0f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mqyqingfeng/Blog/issues/109"},"ES6 \u7cfb\u5217\u4e4b\u6211\u4eec\u6765\u804a\u804a\u88c5\u9970\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://efe.baidu.com/blog/introduction-to-es-decorator/"},"ES Decorators\u7b80\u4ecb")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://imcuttle.github.io/js-%E4%B8%AD%E7%9A%84%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F"},"JS \u4e2d\u7684\u88c5\u9970\u5668\u6a21\u5f0f")))}u.isMDXComponent=!0}}]);