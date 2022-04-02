"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[7776],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9376:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],c={},i="\u7ec4\u5408",l={unversionedId:"javascript/notes/compose",id:"javascript/notes/compose",title:"\u7ec4\u5408",description:"\u5b9a\u4e49",source:"@site/fe/javascript/notes/compose.md",sourceDirName:"javascript/notes",slug:"/javascript/notes/compose",permalink:"/study-notes/fe/javascript/notes/compose",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648899683,formattedLastUpdatedAt:"4/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"JavaScript \u5e38\u89c1\u8fd0\u7b97\u7b26",permalink:"/study-notes/fe/javascript/notes/common-operator"},next:{title:"console\u5168\u5bb6\u6876",permalink:"/study-notes/fe/javascript/notes/console/console-related-note"}},p={},u=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4e3e\u4e2a\u6817\u5b50",id:"\u4e3e\u4e2a\u6817\u5b50",level:2},{value:"koa\u7684\u6d0b\u8471\u6a21\u578b",id:"koa\u7684\u6d0b\u8471\u6a21\u578b",level:2},{value:"\u5b9e\u73b0\u4e00\u4e0b",id:"\u5b9e\u73b0\u4e00\u4e0b",level:3}],f={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ec4\u5408"},"\u7ec4\u5408"),(0,a.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u7ec4\u5408\u5c31\u662f\u5c06\u51fd\u6570\u4e32\u8054\u8d77\u6765\u6267\u884c\uff0c\u5c06\u591a\u4e2a\u51fd\u6570\u7ec4\u5408\u8d77\u6765\uff0c\u4e00\u4e2a\u51fd\u6570\u7684\u8f93\u51fa\u7ed3\u679c\u662f\u53e6\u4e00\u4e2a\u51fd\u6570\u7684\u8f93\u5165\u53c2\u6570\u3002"),(0,a.kt)("h2",{id:"\u4e3e\u4e2a\u6817\u5b50"},"\u4e3e\u4e2a\u6817\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const getName = name => name.replace(/^\\S/, $0 => $0.toUpperCase());\n\nconst greet = name => `Hello, ${name}`;\n\nconst welcome = greet(getName('rain120'));\n")),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4f8b\u5b50\u6765\u770b\uff0c\u6211\u4eec\u9700\u8981\u4e00\u5c42\u5d4c\u5957\u4e00\u5c42\u51fd\u6570\u8c03\u7528\uff0c\u770b\u8d77\u6765\u4e0d\u592a\u4f18\u96c5\uff0c\u90a3\u5982\u679c\u662f\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u7ec4\u5408\u51fd\u6570")," \u5462\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// compose(f1, f2, f3)(args)\n// => f1(f2(f3(args)))\n\nfunction compose(...rest) {\n    const len = rest.length;\n    let index = len;\n\n    while(index--) {\n    if (typeof rest[index] !== 'function') {\n      throw new TypeError(`${rest[index]} must be a function in params of ${index}`)\n    }\n  }\n\n    return (...args) => {\n        let last = len - 1;\n\n        let result = len > 0\n            ? rest[last].apply(this, args)\n            : rest[0];\n        \n        while (last--) {\n            result = rest[last].call(this, result);\n        }\n\n        return result;\n    }\n}\n\nconst welcome = compose(greet, getName);\n\nwelcome('rain120');\n")),(0,a.kt)("p",null,"\u5f53\u7136\u4e86\uff0c\u8fd8\u652f\u6301\u4ece\u524d\u5f80\u540e\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function composeLeft() {\n    return compose.apply(null, [].reverse.call(arguments));\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rain120/Web-Study/blob/master/compose.js"},"compose.js")),(0,a.kt)("h2",{id:"koa\u7684\u6d0b\u8471\u6a21\u578b"},"koa\u7684\u6d0b\u8471\u6a21\u578b"),(0,a.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0ckoa\u5728\u8c03\u7528\u4e2d\u95f4\u4ef6\u7684\u65f6\u5019\u662f\u5982\u4e0b\u4f7f\u7528\u65b9\u5f0f\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Koa = require('koa');\nconst app = new Koa();\n\napp.use(async (ctx, next) => {\n    // 1\n    await next();\n    // 5\n});\n\napp.use(async (ctx, next) => {\n    // 2\n    await next();\n    // 4\n});\n\napp.use(async (ctx, next) => {\n    // 3\n});\n\n")),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u4e00\u4e0b"},"\u5b9e\u73b0\u4e00\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function compose(middleware) {\n    if (!Array.isArray(middleware)) {\n        throw new TypeError('Middleware stack must be an array!')\n    }\n\n    for (const fn of middleware) {\n        if (typeof fn !=== 'function') {\n            throw new TypeError('Middleware must be composed of functions!')\n        }\n    }\n\n    return function (context, next) {\n        let index = -1;\n\n        function dispose(i) {\n            if (i <= index) {\n                return Promise.reject(new Error('next() called multiple times'));\n            }\n\n            index = i;\n            let fn = middleware[i];\n\n            if (i === middleware.length) {\n                // \u6700\u540e\u4e00\u4e2a\u65f6\uff0cnext\u4e3aundefined\uff0c\u8fd9\u91cc\u53ef\u4ee5\u8ba9\u4e2d\u95f4\u4ef6\u7ed3\u675f\n                fn = next;\n            }\n\n            if (!fn) {\n                return Promise.resolve()\n            }\n\n            try {\n                return Promise.resolve(fn(context, function next() {\n                        return dispose(i + 1);\n                    }\n                ));\n            } catch(error) {\n                return Promise.reject(error);\n            }\n        }\n\n        return dispose(0);\n    }\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rain120/Web-Study/blob/master/koa-compose.js"},"koa-compose.js")))}m.isMDXComponent=!0}}]);