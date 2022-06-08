"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6800],{49613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||o;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43262:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(45443),a=t(13010),o=(t(59496),t(49613)),l=["components"],i={},p="\u6a21\u5757\u5316\u65b9\u6848",u={unversionedId:"javascript/es-study/module",id:"javascript/es-study/module",title:"\u6a21\u5757\u5316\u65b9\u6848",description:"CommonJS",source:"@site/fe/javascript/es-study/module.md",sourceDirName:"javascript/es-study",slug:"/javascript/es-study/module",permalink:"/study-notes/fe/javascript/es-study/module",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638522136,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Map Vs WeakMap, Set Vs WeakSet",permalink:"/study-notes/fe/javascript/es-study/map-weakmap-set-weakset"},next:{title:"static",permalink:"/study-notes/fe/javascript/es-study/static"}},m={},s=[{value:"CommonJS",id:"commonjs",level:2},{value:"AMD",id:"amd",level:2},{value:"CMD",id:"cmd",level:2},{value:"\u4e0eAMD\u533a\u522b",id:"\u4e0eamd\u533a\u522b",level:3},{value:"UMD",id:"umd",level:2},{value:"ES Module",id:"es-module",level:2},{value:"\u6a21\u5757\u6784\u5efa\u6b65\u9aa4",id:"\u6a21\u5757\u6784\u5efa\u6b65\u9aa4",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6a21\u5757\u5316\u65b9\u6848"},"\u6a21\u5757\u5316\u65b9\u6848"),(0,o.kt)("h2",{id:"commonjs"},"CommonJS"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Node")," \u5e94\u7528\u7531\u6a21\u5757\u7ec4\u6210\uff0c\u91c7\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS")," \u6a21\u5757\u89c4\u8303\u3002"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u6587\u4ef6\u5c31\u662f\u4e00\u4e2a\u6a21\u5757\uff0c\u6709\u81ea\u5df1\u7684\u4f5c\u7528\u57df\u3002\u5728\u4e00\u4e2a\u6587\u4ef6\u91cc\u9762\u5b9a\u4e49\u7684\u53d8\u91cf\u3001\u51fd\u6570\u3001\u7c7b\uff0c\u90fd\u662f\u79c1\u6709\u7684\uff0c\u5bf9\u5176\u4ed6\u6587\u4ef6\u4e0d\u53ef\u89c1\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u89c4\u8303\u89c4\u5b9a: \u6bcf\u4e2a\u6a21\u5757\u5185\u90e8\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"module"),"\u53d8\u91cf\u4ee3\u8868\u5f53\u524d\u6a21\u5757\u3002\u8fd9\u4e2a\u53d8\u91cf\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"exports"),"\u5c5e\u6027\uff08\u5373",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports"),"\uff09\u662f\u5bf9\u5916\u7684\u63a5\u53e3\u3002\u52a0\u8f7d\u67d0\u4e2a\u6a21\u5757\uff0c\u5176\u5b9e\u662f\u52a0\u8f7d\u8be5\u6a21\u5757\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"module.exports"),"\u5c5e\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5bfc\u51fa info.js\nmodule.exports = {\n  name: 'Rain120'\n}\n\n// Node \u4e3a\u6bcf\u4e2a\u6a21\u5757\u63d0\u4f9b\u4e00\u4e2a exports \u53d8\u91cf\uff0c\u6307\u5411 module.exports\u3002\nexports.name = 'Rain120'\n\n// \u5bfc\u5165\nconst info = require('info')\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS")," \u6a21\u5757\u7684\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6240\u6709\u4ee3\u7801\u90fd\u8fd0\u884c\u5728\u6a21\u5757\u4f5c\u7528\u57df\uff0c\u4e0d\u4f1a\u6c61\u67d3\u5168\u5c40\u4f5c\u7528\u57df\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757\u53ef\u4ee5\u591a\u6b21\u52a0\u8f7d\uff0c\u4f46\u662f\u53ea\u4f1a\u5728\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6\u8fd0\u884c\u4e00\u6b21\uff0c\u7136\u540e\u8fd0\u884c\u7ed3\u679c\u5c31\u88ab\u7f13\u5b58\u4e86\uff0c\u4ee5\u540e\u518d\u52a0\u8f7d\uff0c\u5c31\u76f4\u63a5\u8bfb\u53d6\u7f13\u5b58\u7ed3\u679c\u3002\u8981\u60f3\u8ba9\u6a21\u5757\u518d\u6b21\u8fd0\u884c\uff0c\u5fc5\u987b\u6e05\u9664\u7f13\u5b58\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6a21\u5757\u52a0\u8f7d\u7684\u987a\u5e8f\uff0c\u6309\u7167\u5176\u5728\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u6027\u662f\u6a21\u5757\u7684\u91cd\u8981\u7279\u70b9\u5c31\uff0c\u6a21\u5757\u5185\u90e8\u6700\u597d\u4e0d\u4e0e\u7a0b\u5e8f\u7684\u5176\u4ed6\u90e8\u5206\u76f4\u63a5\u4ea4\u4e92\u3002")),(0,o.kt)("h2",{id:"amd"},"AMD"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AMD")," \u5168\u79f0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Asynchronous Module Definition"),"\uff0c\u5373\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"AMD")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"RequireJS")," \u5728\u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u5bf9\u6a21\u5757\u5b9a\u4e49\u7684\u89c4\u8303\u5316\u4ea7\u51fa\u3002"),(0,o.kt)("p",null,"\u5b83\u91c7\u7528\u5f02\u6b65\u65b9\u5f0f\u52a0\u8f7d\u6a21\u5757\uff0c\u6a21\u5757\u7684\u52a0\u8f7d\u4e0d\u5f71\u54cd\u5b83\u540e\u9762\u8bed\u53e5\u7684\u8fd0\u884c\u3002\u6240\u6709\u4f9d\u8d56\u8fd9\u4e2a\u6a21\u5757\u7684\u8bed\u53e5\uff0c\u90fd\u5b9a\u4e49\u5728\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u7b49\u5230\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\uff0c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u624d\u4f1a\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u9664\u4e86\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS")," \u540c\u6b65\u52a0\u8f7d\u65b9\u5f0f\u4e0d\u540c\u4e4b\u5916\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"AMD")," \u5728\u6a21\u5757\u7684\u5b9a\u4e49\u4e0e\u5f15\u7528\u4e0a\u4e5f\u6709\u6240\u4e0d\u540c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5bfc\u51fa\n// id \u6a21\u5757\u540d\u79f0\n// dependencies \u4f9d\u8d56\u6a21\u5757\uff0c\u9ed8\u8ba4\u662f['require', 'exports', 'modules']\n// factory \u6a21\u5757\u521d\u59cb\u5316\u6267\u884c\u7684\u51fd\u6570(\u53ea\u6267\u884c\u4e00\u6b21)\u6216\u5bf9\u8c61(\u8fd4\u56de\u8f93\u51fa\u503c)\ndefine(id?, dependencies?, factory);\n\n// \u5bfc\u5165\nrequire([module], callback);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AMD")," \u6a21\u5757\u7684\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u52a0\u8f7d"),(0,o.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u6a21\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u6027\uff0c\u4fbf\u4e8e\u4ee3\u7801\u7684\u7f16\u5199\u548c\u7ef4\u62a4\u3002")),(0,o.kt)("h2",{id:"cmd"},"CMD"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," \u5168\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Module Definition"),"\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"CMD")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"SeaJS")," \u5728\u63a8\u5e7f\u8fc7\u7a0b\u4e2d\u5bf9\u6a21\u5757\u5b9a\u4e49\u7684\u89c4\u8303\u5316\u4ea7\u51fa\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"define(function(require, exports, module) {\n  var a = require('./a');\n  a.doSomething();\n  var b = require('./b'); \n  b.doSomething();\n  ...\n})\n")),(0,o.kt)("h3",{id:"\u4e0eamd\u533a\u522b"},"\u4e0eAMD\u533a\u522b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u4f9d\u8d56\u7684\u6a21\u5757\uff0cAMD \u662f",(0,o.kt)("strong",{parentName:"p"},"\u63d0\u524d\u6267\u884c"),"\uff0cCMD \u662f",(0,o.kt)("strong",{parentName:"p"},"\u5ef6\u8fdf\u6267\u884c"),"\u3002\u4e0d\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"RequireJS")," \u4ece 2.0 \u5f00\u59cb\uff0c\u4e5f\u6539\u6210\u53ef\u4ee5\u5ef6\u8fdf\u6267\u884c\uff08\u6839\u636e\u5199\u6cd5\u4e0d\u540c\uff0c\u5904\u7406\u65b9\u5f0f\u4e0d\u540c\uff09\u3002CMD \u63a8\u5d07 as lazy as possible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CMD \u63a8\u5d07",(0,o.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u5c31\u8fd1"),"\uff0cAMD \u63a8\u5d07",(0,o.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u524d\u7f6e"),"\u3002"))),(0,o.kt)("h2",{id:"umd"},"UMD"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UMD"),"\uff0c\u5168\u79f0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Universal Module Definition"),"\uff0c\u5373\u901a\u7528\u6a21\u5757\u89c4\u8303\u3002\u53ef\u5e94\u7528\u4e8e\u6d4f\u89c8\u5668\u6216\u670d\u52a1\u5668\u73af\u5883\uff0c\u517c\u5bb9",(0,o.kt)("inlineCode",{parentName:"p"},"AMD"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS"),"\u89c4\u8303\u7684\u540c\u65f6\uff0c\u8fd8\u517c\u5bb9\u5168\u5c40\u5f15\u7528\u7684\u65b9\u5f0f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(function (factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD. Register as an anonymous module.\n        define(['jquery'], factory);\n    } else if (typeof module === 'object' && module.exports) {\n        // Node/CommonJS\n        module.exports = function( root, jQuery ) {\n            if ( jQuery === undefined ) {\n                // require('jQuery') returns a factory that requires window to\n                // build a jQuery instance, we normalize how we use modules\n                // that require this pattern but the window provided is a noop\n                // if it's defined (how jquery works)\n                if ( typeof window !== 'undefined' ) {\n                    jQuery = require('jquery');\n                }\n                else {\n                    jQuery = require('jquery')(root);\n                }\n            }\n            factory(jQuery);\n            return jQuery;\n        };\n    } else {\n        // Browser globals\n        factory(jQuery);\n    }\n}(function ($) {\n    $.fn.jqueryPlugin = function () { return true; };\n}));\n")),(0,o.kt)("h2",{id:"es-module"},"ES Module"),(0,o.kt)("p",null,"ES6 \u6a21\u5757\u7684\u8bbe\u8ba1\u601d\u60f3\u662f\u5c3d\u91cf\u7684\u9759\u6001\u5316\uff0c\u4f7f\u5f97\u7f16\u8bd1\u65f6\u5c31\u80fd\u786e\u5b9a\u6a21\u5757\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4ee5\u53ca\u8f93\u5165\u548c\u8f93\u51fa\u7684\u53d8\u91cf\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"ES Module")," \uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5305\u542b\u4e09\u4e2a\u9636\u6bb5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6784\u5efa"),"\uff1a\u67e5\u627e\uff0c\u4e0b\u8f7d\uff0c\u7136\u540e\u628a\u6240\u6709\u6587\u4ef6\u89e3\u6790\u6210\u6a21\u5757\u8bb0\u5f55\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b\u5316"),"\uff1a\u4e3a\u6240\u6709\u6a21\u5757\u5206\u914d\u5185\u5b58\u7a7a\u95f4(\u6b64\u523b\u8fd8\u6ca1\u6709\u586b\u5145\u503c)\uff0c\u7136\u540e\u4f9d\u7167\u5bfc\u51fa\u3001\u5bfc\u5165\u8bed\u53e5\u628a\u6a21\u5757\u6307\u5411\u5bf9\u5e94\u7684\u5185\u5b58\u5730\u5740\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u79f0\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"\u94fe\u63a5")," ",(0,o.kt)("inlineCode",{parentName:"p"},"(Linking)"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u8fd0\u884c"),"\uff1a\u8fd0\u884c\u4ee3\u7801\uff0c\u4ece\u800c\u628a\u5185\u5b58\u7a7a\u95f4\u586b\u5145\u4e3a\u771f\u5b9e\u503c\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u5bfc\u51fa\nepxort default {}\n// \u901a\u8fc7 as \u5173\u952e\u5b57\u91cd\u547d\u540d\nexport {\n  name as realName\n}\n\n// \u590d\u5408\u7528\u6cd5\n\nexport { name } from './xxx'\nexport { name as default } from './xxx'\n\nimport * as name from \"./xxx\";\nexport {name};\n// \u7b49\u540c\u4e8e \ud83d\udc46\ud83d\udc46\ud83d\udc46 \u4e24\u53e5\nexport * as name from \"./xxx\";\n\n// \u5bfc\u5165\nimport Module from './xxxx'\n// \u901a\u8fc7 as \u5173\u952e\u5b57\u91cd\u547d\u540d\nimport { default as AllModule } from './xxxx'\n")),(0,o.kt)("h2",{id:"\u6a21\u5757\u6784\u5efa\u6b65\u9aa4"},"\u6a21\u5757\u6784\u5efa\u6b65\u9aa4"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u6a21\u5757\uff0c\u5728\u6784\u5efa\u9636\u6bb5\u4f1a\u505a\u4e09\u4e2a\u5904\u7406\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u8981\u4ece\u54ea\u91cc\u4e0b\u8f7d\u5305\u542b\u8be5\u6a21\u5757\u7684\u6587\u4ef6\uff0c\u4e5f\u79f0\u4e3a\u6a21\u5757\u5b9a\u4f4d ",(0,o.kt)("inlineCode",{parentName:"li"},"(Module Resolution)")),(0,o.kt)("li",{parentName:"ol"},"\u63d0\u53d6\u6587\u4ef6\uff0c\u901a\u8fc7\u4ece ",(0,o.kt)("inlineCode",{parentName:"li"},"URL")," \u4e0b\u8f7d\u6216\u8005\u4ece\u6587\u4ef6\u7cfb\u7edf\u52a0\u8f7d"),(0,o.kt)("li",{parentName:"ol"},"\u89e3\u6790\u6587\u4ef6\u4e3a\u6a21\u5757\u8bb0\u5f55")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2012/11/require_js.html"},"Javascript\u6a21\u5757\u5316\u7f16\u7a0b\uff08\u4e09\uff09\uff1arequire.js\u7684\u7528\u6cd5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://javascript.ruanyifeng.com/nodejs/module.html"},"CommonJS\u89c4\u8303")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/20351507/answer/14859415"},"AMD \u548c CMD \u7684\u533a\u522b\u6709\u54ea\u4e9b\uff1f - \u7389\u4f2f\u7684\u56de\u7b54 - \u77e5\u4e4e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/"},"ES modules: A cartoon deep-dive")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://es6.ruanyifeng.com/#docs/module"},"ECMAScript 6 \u5165\u95e8 - Module \u7684\u8bed\u6cd5")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#sec-modules"},"TC39 modules")))}c.isMDXComponent=!0}}]);