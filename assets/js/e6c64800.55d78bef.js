"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5645],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(t),k=a,m=s["".concat(p,".").concat(k)]||s[k]||c[k]||l;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5643:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={},p=void 0,u={unversionedId:"webpack/build",id:"webpack/build",isDocsHomePage:!1,title:"build",description:"\u524d\u8a00",source:"@site/engineering/webpack/build.md",sourceDirName:"webpack",slug:"/webpack/build",permalink:"/study-notes/engineering/webpack/build",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"shell",permalink:"/study-notes/engineering/shell/shell"},next:{title:"guide",permalink:"/study-notes/engineering/webpack/guide"}},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[{value:"TL;DR",id:"tldr",children:[],level:4}],level:3},{value:"\u521d\u63a2\u6e90\u7801",id:"\u521d\u63a2\u6e90\u7801",children:[{value:"<code>__webpack_require__</code>",id:"__webpack_require__",children:[{value:"<code>__webpack_require__</code> \u7684\u5c5e\u6027",id:"__webpack_require__-\u7684\u5c5e\u6027",children:[],level:5}],level:4},{value:"\u540c\u6b65\u5bfc\u5165",id:"\u540c\u6b65\u5bfc\u5165",children:[],level:4},{value:"\u5f02\u6b65\u5bfc\u5165",id:"\u5f02\u6b65\u5bfc\u5165",children:[],level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:4}],level:3}],c={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u7531\u4e8e\u4ee3\u7801\u7bc7\u5e45\u8fc7\u957f\uff0c\u8bf7\u5404\u4f4d\u540c\u5b66\u79fb\u6b65\u6b65\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Rain120/study-notes/issues/6"},"here")," \u67e5\u770b\u4ee3\u7801\uff0c\u5f53\u7136\uff0c\u5982\u679c\u4f60\u60f3\u672c\u5730\u67e5\u770b\uff0c\u4e5f\u53ef\u4ee5\u4e0b\u8f7d\u8fd9\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Rain120/study-notes/files/6108125/code.zip"},"\u6e90\u7801\u5305"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Rain120/study-notes/issues/6#issuecomment-793838018"},"Webpack 5 \u8f93\u51fa")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Rain120/study-notes/issues/6#issuecomment-793838779"},"Webpack 4 \u8f93\u51fa")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c31\u662f\u6211\u4eec\u6380\u8d77\u7ea2\u76d6\u5934\u7684\u65f6\u5019\u4e86\uff0c\u51ce\u3002"),(0,l.kt)("h4",{id:"tldr"},(0,l.kt)("a",{parentName:"h4",href:"#%E6%80%BB%E7%BB%93"},"TL;DR")),(0,l.kt)("h3",{id:"\u521d\u63a2\u6e90\u7801"},"\u521d\u63a2\u6e90\u7801"),(0,l.kt)("p",null,"\u6253\u5f00\u6e90\u7801\uff0c\u79fb\u9664\u65e0\u7528\u4ee3\u7801\uff0c\u683c\u5f0f\u5316\uff0c\u6298\u53e0\uff0c\u53d1\u73b0\u5b83\u5b9e\u9645\u4e0a\u5c31\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE"},"IIFE(\u7acb\u5373\u8c03\u7528\u51fd\u6570\u8868\u8fbe\u5f0f)"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"(function (modules) {\n    // webpackBootstrap\n})({\n    './main.js': function (module, exports) {\n        // ...\n    },\n});\n")),(0,l.kt)("h4",{id:"__webpack_require__"},(0,l.kt)("inlineCode",{parentName:"h4"},"__webpack_require__")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// The module cache\n// \u7f13\u5b58 module\nvar installedModules = {};\n\n// The require function\nfunction __webpack_require__(moduleId) {\n  // Check if module is in cache\n  // \u68c0\u67e5 module \u662f\u5426\u5728 cache \u4e2d\n  if (installedModules[moduleId]) {\n      return installedModules[moduleId].exports;\n  }\n  // Create a new module (and put it into the cache)\n  // \u4e0d\u5b58\u5728 cache \u4e2d\u5c31\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 module\uff0c\u4f7f\u7528 moduleId \u4f5c\u4e3a key, \u6240\u4ee5 key \u7684\u552f\u4e00\n  var module = (installedModules[moduleId] = {\n      i: moduleId,\n      l: false, // loaded \u662f\u5426\u88ab\u52a0\u8f7d\n      exports: {},\n  });\n\n  // Execute the module function\n  // \u6267\u884c\u6a21\u5757\u51fd\u6570\uff0c\u6302\u8f7d\u5230 module.exports \u4e0a\u3002\u6b64\u65f6 this \u6307\u5411 module.exports\n  // call(thisArg, args)\n  modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n  // Flag the module as loaded\n  // \u6807\u8bb0\u8fd9\u4e2a module \u5df2\u7ecf\u88ab\u52a0\u8f7d\n  module.l = true;\n\n  // Return the exports of the module\n  return module.exports;\n}\n")),(0,l.kt)("p",null,"\u4ece\u4ee3\u7801\u91cc\uff0c\u6211\u4eec\u77e5\u9053 ",(0,l.kt)("inlineCode",{parentName:"p"},"__webpack_require__")," \u65b9\u6cd5\u4f1a\u5bf9 ",(0,l.kt)("strong",{parentName:"p"},"\u5df2\u5bfc\u5165(require())\u7684\u6a21\u5757")," \u8fdb\u884c\u7f13\u5b58\uff0c\u5e76\u5c06\u6a21\u5757\u6302\u8f7d\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"module.exports")," \u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"moduleId(\u5f15\u5165path)")," \u6765\u51b3\u5b9a\u6a21\u5757\u662f\u5426\u9700\u8981\u7f13\u5b58\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u5b83\u5176\u5b9e\u662f\u6a21\u62df ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u4e00\u4e2a\u6a21\u5757\uff0c\u5e76\u5728\u6700\u540e\u8fd4\u56de\u6240\u6709\u6a21\u5757",(0,l.kt)("inlineCode",{parentName:"p"},"export")," \u7684\u53d8\u91cf\u3002"),(0,l.kt)("h5",{id:"__webpack_require__-\u7684\u5c5e\u6027"},(0,l.kt)("inlineCode",{parentName:"h5"},"__webpack_require__")," \u7684\u5c5e\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u6a21\u5757(IIFE \u4f20\u5165\u7684\u6a21\u5757\u53c2\u6570)\u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// expose the modules object (__webpack_modules__)\n__webpack_require__.m = modules;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5df2\u5bfc\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"(require())"),"\u7684\u6a21\u5757\u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// expose the module cache\n__webpack_require__.c = installedModules;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Object.prototype.hasOwnProperty")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"polyfill"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Object.prototype.hasOwnProperty.call\n__webpack_require__.o = function (object, property) {\n  return Object.prototype.hasOwnProperty.call(object, property);\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6807\u8bb0\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"ES Module"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// define __esModule on exports\n__webpack_require__.r = function (exports) {\n  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n    Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});\n  }\n  Object.defineProperty(exports, '__esModule', {value: true});\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"li"},"ES Module")," \u7684\u5b9a\u4e49\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"getter")," \u65b9\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// define getter function for harmony exports\n__webpack_require__.d = function (exports, name, getter) {\n  if (!__webpack_require__.o(exports, name)) {\n    Object.defineProperty(exports, name, {enumerable: true, get: getter});\n  }\n};\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"harmony module")," \u5176\u5b9e\u662f\u6307 ",(0,l.kt)("inlineCode",{parentName:"p"},"ES Module"),"\u3002 \u76f4\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"2008"),"\u5e74",(0,l.kt)("inlineCode",{parentName:"p"},"8"),"\u6708\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ECMAScript"),"\u7b2c\u56db\u7248\u63d0\u6848\u88ab\u547d\u540d\u4e3a\u4e00\u4e2a\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"ECMAScript Harmony"),"\u7684\u9879\u76ee\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// create a fake namespace object\n// mode & 1: value is a module id, require it\n// mode & 2: merge all properties of value into the ns\n// mode & 4: return value when already ns object\n// mode & 8|1: behave like require\n__webpack_require__.t = function (value, mode) {\n  if (mode & 1) value = __webpack_require__(value);\n  if (mode & 8) return value;\n  if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;\n  var ns = Object.create(null);\n  __webpack_require__.r(ns);\n  Object.defineProperty(ns, 'default', {enumerable: true, value: value});\n  if (mode & 2 && typeof value != 'string')\n    for (var key in value)\n      __webpack_require__.d(\n        ns,\n        key,\n        function (key) {\n          return value[key];\n        }.bind(null, key)\n      );\n  return ns;\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u975e ",(0,l.kt)("inlineCode",{parentName:"li"},"ES Module( \ud83d\udc46\ud83d\udc46\ud83d\udc46 )"),"  \u6a21\u5757\u7684\u8f93\u51fa\u5b9a\u4e49\u51fd\u6570\u505a\u4e00\u4e9b\u517c\u5bb9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// getDefaultExport function for compatibility with non-harmony modules\n__webpack_require__.n = function (module) {\n  var getter =\n    module && module.__esModule\n      ? function getDefault() {\n          return module['default'];\n        }\n      : function getModuleExports() {\n          return module;\n        };\n  __webpack_require__.d(getter, 'a', getter);\n  return getter;\n};\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/output/#output-publicpath"},"output.publicPath"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// __webpack_public_path__\n__webpack_require__.p = '';\n")),(0,l.kt)("h4",{id:"\u540c\u6b65\u5bfc\u5165"},"\u540c\u6b65\u5bfc\u5165"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"IIFE")," \u7684\u53c2\u6570\uff0c\u6211\u4eec\u53d1\u73b0\u540c\u6b65\u5bfc\u5165\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff0c\u5373\u540c\u6b65 ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u5b9e\u9645\u4e0a\u662f\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"__webpack_require__()"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'(function (modules) { // webpackBootstrap\n  // ...\n    // Load entry module and return exports\n    return __webpack_require__(__webpack_require__.s = "./index.js");\n})({\n   "./index.js": (function (module, __webpack_exports__, __webpack_require__) {\n     __webpack_require__.r(__webpack_exports__);\n     // ...\n   })\n})\n')),(0,l.kt)("h4",{id:"\u5f02\u6b65\u5bfc\u5165"},"\u5f02\u6b65\u5bfc\u5165"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u5f15\u5165\u5b9e\u73b0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'(function (modules) { // webpackBootstrap\n  // ...\n  // Load entry module and return exports\n  return __webpack_require__(__webpack_require__.s = "./index.js");\n})({\n  "./index.js": (function (module, __webpack_exports__, __webpack_require__) {\n    __webpack_require__.r(__webpack_exports__);\n    // ...\n    const asyncImport = async () => await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./async */ "./async.js", 7));\n    // ...\n  }\n})\n')),(0,l.kt)("p",null,"\u4ece\u4ee3\u7801\u91cc\u9762\uff0c\u6211\u4eec\u53d1\u73b0\u5f02\u6b65\u5bfc\u5165\u5b9e\u9645\u4e0a\u662f\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"__webpack_require__.e()")," \u65b9\u6cd5",(0,l.kt)("inlineCode",{parentName:"p"},"(\u5f02\u6b65 import\u5b9e\u9645\u4e0a\u662f\u8f6c\u6362\u6210__webpack_require__.e())"),"\uff0c\u800c\u4e14\uff0c\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"async-await")," \u65b9\u6cd5\uff0c\u6240\u4ee5\u6211\u4eec\u77e5\u9053\u8fd9\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e00\u5b9a\u662f\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"promise")," \u5bf9\u8c61\uff0c\u6211\u4eec\u63a5\u7740\u5f80\u4e0b\u770b\u5427\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// script path function\nfunction jsonpScriptSrc (chunkId) {\n  return __webpack_require__.p + \"\" + ({}[chunkId] || chunkId) + \".js\"\n}\n\n// object to store loaded and loading chunks\n// undefined = chunk not loaded, null = chunk preloaded/prefetched\n// Promise = chunk loading, 0 = chunk loaded\nvar installedChunks = {\n  \"main\": 0\n};\n\n// This file contains only the entry chunk.\n// The chunk loading function for additional chunks\n__webpack_require__.e = function requireEnsure (chunkId) {\n  var promises = [];\n  \n  // JSONP chunk loading for javascript\n  // Javescript JSONP chunk\u52a0\u8f7d\u4e2d\n  var installedChunkData = installedChunks[chunkId];\n  if (installedChunkData !== 0) {\n    // 0 means \"already installed\".\n    // 0 \u4ee3\u8868\u5df2\u7ecf\u5b8c\u6210\n    // a Promise means \"currently loading\".\n    // installedChunkData \u4e0d\u4e3aundefined\uff0c\u8868\u793a promise \u6b63\u5728\u52a0\u8f7d\u4e2d\n    if (installedChunkData) {\n      promises.push(installedChunkData[2]);\n    } else {\n      // setup Promise in chunk cache\n      var promise = new Promise(function (resolve, reject) {\n        // \u628a resolve \u4fdd\u5b58\u5230 installedChunks[chunkId] \u4e2d\uff0c\u7b49\u5f85\u4ee3\u7801\u52a0\u8f7d\u597d\u518d\u6267\u884c resolve() \u4ee5\u8fd4\u56de promise\n        installedChunkData = installedChunks[chunkId] = [resolve, reject];\n      });\n      promises.push(installedChunkData[2] = promise);\n\n      // start chunk loading\n      // \u901a\u8fc7\u5f80head\u5934\u90e8\u63d2\u5165script\u6807\u7b7e\u5f02\u6b65\u52a0\u8f7d\u5230chunk\u4ee3\u7801\n      var script = document.createElement('script');\n      var onScriptComplete;\n\n      script.charset = 'utf-8';\n      script.timeout = 120;\n      if (__webpack_require__.nc) {\n        script.setAttribute(\"nonce\", __webpack_require__.nc);\n      }\n      script.src = jsonpScriptSrc(chunkId);\n\n      // create error before stack unwound to get useful stacktrace later\n      // \u5728\u5806\u6808\u5c55\u5f00\u4e4b\u524d\u521b\u5efa\u9519\u8bef\uff0c\u4ee5\u4fbf\u4ee5\u540e\u83b7\u5f97\u6709\u7528\u7684\u5806\u6808\u8ddf\u8e2a\n      var error = new Error();\n      onScriptComplete = function (event) {\n        // avoid mem leaks in IE.\n        script.onerror = script.onload = null;\n        clearTimeout(timeout);\n        var chunk = installedChunks[chunkId];\n        if (chunk !== 0) {\n          if (chunk) {\n            var errorType = event && (event.type === 'load' ? 'missing' : event.type);\n            var realSrc = event && event.target && event.target.src;\n            error.message = 'Loading chunk ' + chunkId + ' failed.\\n(' + errorType + ': ' + realSrc + ')';\n            error.name = 'ChunkLoadError';\n            error.type = errorType;\n            error.request = realSrc;\n            chunk[1](error);\n          }\n          installedChunks[chunkId] = undefined;\n        }\n      };\n      var timeout = setTimeout(function () {\n        onScriptComplete({ type: 'timeout', target: script });\n      }, 120000);\n      script.onerror = script.onload = onScriptComplete;\n      document.head.appendChild(script);\n    }\n  }\n  return Promise.all(promises);\n};\n")),(0,l.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"installedChunkData"),"\u7684\u503c\u4ee3\u8868\u7740",(0,l.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u6a21\u5757\u7684\u72b6\u6001"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," \u5df2\u7ecf\u52a0\u8f7d\u5b8c\u6bd5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," \u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," \u52a0\u8f7d\u5931\u8d25\u3001\u52a0\u8f7d\u8d85\u65f6\u3001\u4ece\u672a\u52a0\u8f7d\u8fc7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," \u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," ",(0,l.kt)("inlineCode",{parentName:"li"},"preloaded/prefetched")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," \u6b63\u5728\u52a0\u8f7d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"installedChunkData = installedChunks[chunkId] = [resolve, reject];\npromises.push(installedChunkData[2] = promise);\n\n// installedChunkData = [resolve, reject, promise]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"__webpack_require__.e()")," \u901a\u8fc7\u4f20\u5165\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"chunkId"),"\uff0c\u6765\u52a0\u8f7d\u5bf9\u5e94\u6b64 ",(0,l.kt)("inlineCode",{parentName:"p"},"chunkId")," \u5bf9\u5e94\u7684\u5f02\u6b65 ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk")," \u6587\u4ef6\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"promise"),"\u3002\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"jsonp"),"\u7684\u65b9\u5f0f\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"script"),"\u6807\u7b7e\u53bb\u52a0\u8f7d\u3002\u8fd9\u4e2a\u51fd\u6570\u8c03\u7528\u591a\u6b21\uff0c\u8fd8\u662f\u53ea\u4f1a\u53d1\u8d77\u4e00\u6b21\u8bf7\u6c42 ",(0,l.kt)("inlineCode",{parentName:"p"},"js")," \u7684\u8bf7\u6c42\u3002\u82e5\u5df2\u52a0\u8f7d\u5b8c\u6210\uff0c\u8fd9\u65f6\u5019\u5f02\u6b65\u7684\u6a21\u5757\u6587\u4ef6\u5df2\u7ecf\u88ab\u6ce8\u5165\u5230\u7acb\u5373\u6267\u884c\u51fd\u6570\u7684\u5165\u53c2",(0,l.kt)("inlineCode",{parentName:"p"},"modules"),"\u53d8\u91cf\u4e2d\u4e86\uff0c\u8fd9\u4e2a\u65f6\u5019\u548c\u540c\u6b65\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"import"),"\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"__webpack_require__"),"\u7684\u6548\u679c\u5c31\u4e00\u6837\u4e86(\u8fd9\u4e2a\u6ce8\u5165\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"webpackJsonpCallback"),"\u51fd\u6570\u5b8c\u6210)\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webpackJsonpCallback")," \u5176\u5b9e\u5c31\u662f\u52a0\u8f7d\u5f02\u6b65\u6a21\u5757\u5b8c\u6210\u7684\u56de\u8c03\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'(function (modules) {\n  // ...\n  \n  // install a JSONP callback for chunk loading\n  function webpackJsonpCallback (data) {\n    var chunkIds = data[0];\n    var moreModules = data[1];\n\n    // add "moreModules" to the modules object,\n    // then flag all "chunkIds" as loaded and fire callback\n    var moduleId, chunkId, i = 0, resolves = [];\n    for (; i < chunkIds.length; i++) {\n      chunkId = chunkIds[i];\n      // installedChunks[chunkId] = [resolve, reject, promise]\n      if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {\n        resolves.push(installedChunks[chunkId][0]);\n      }\n      // \u6807\u8bb0\u6210\u5df2\u7ecf\u6267\u884c\u5b8c\n      installedChunks[chunkId] = 0;\n    }\n    \n    // \u5c06\u5f02\u6b65 chunk \u4e2d\u7684 module \u52a0\u5165\u4e3b chunk \u7684 modules(IIFE\u7684\u53c2\u6570)\u6570\u7ec4\u4e2d\n    for (moduleId in moreModules) {\n      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {\n        modules[moduleId] = moreModules[moduleId];\n      }\n    }\n    \n    // \u5c06 data \u52a0\u5165 window["webpackJsonp"] \u6570\u7ec4\n    if (parentJsonpFunction) parentJsonpFunction(data);\n\n    // __webpack_require__.e \u4e2d\u6bcf\u4e00\u4e2a Promise \u7684\u8fd4\u56de\u7ed3\u679c\n    while (resolves.length) {\n      resolves.shift()();\n    }\n  };\n\n  var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];\n  // \u4fdd\u5b58\u539f\u59cb\u7684 Array.prototype.push \u65b9\u6cd5\n  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);\n  // \u5c06 push \u65b9\u6cd5\u7684\u5b9e\u73b0\u4fee\u6539\u4e3a webpackJsonpCallback\n  // \u8fd9\u6837\u6211\u4eec\u5728\u5f02\u6b65 chunk \u4e2d\u6267\u884c\u7684 window[\'webpackJsonp\'].push \u5176\u5b9e\u662f webpackJsonpCallback \u51fd\u6570\u3002\n  jsonpArray.push = webpackJsonpCallback;\n  jsonpArray = jsonpArray.slice();\n  // \u5bf9\u5df2\u5728\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u4f9d\u6b21\u6267\u884c webpackJsonpCallback \u65b9\u6cd5\n  for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);\n  var parentJsonpFunction = oldJsonpFunction;\n  \n  // ...\n})({\n  // ...\n})\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u52a0\u8f7d\u9519\u8bef\u65e5\u5fd7\u6253\u5370")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// on error function for async loading\n__webpack_require__.oe = function (err) { console.error(err); throw err; };\n")),(0,l.kt)("h4",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," \u6253\u5305\u51fa\u6765\u7684\u7ed3\u679c\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"IIFE"),", \u53c2\u6570\u662f\u6a21\u5757\u7684\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"chunks")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f1a\u5bf9\u5f15\u7528\u8fc7\u7684\u6a21\u5757\u8fdb\u884c\u7f13\u5b58"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"webpack IIFE")," \u901a\u8fc7\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"__webpack_require__")," \u6a21\u62df ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u4e00\u4e2a\u6a21\u5757\uff0c\u5e76 ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," \u8be5\u6a21\u5757\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"webpack")," \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"__webpack_require__.r")," \u65b9\u6cd5\u7528\u6765\u6807\u8bb0\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"ES Module")," \uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"__webpack_require__.n")," \u65b9\u6cd5\u9488\u5bf9\u975e ",(0,l.kt)("inlineCode",{parentName:"p"},"ES Module( \ud83d\udc46\ud83d\udc46\ud83d\udc46 )"),"  \u6a21\u5757\u7684\u8f93\u51fa\u5b9a\u4e49\u51fd\u6570\u505a\u4e00\u4e9b\u517c\u5bb9\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"__esModule")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"module.default")," \u5bfc\u51fa\u6a21\u5757\uff0c\u5426\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," \u5bfc\u51fa\u6a21\u5757")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f02\u6b65\u52a0\u8f7d ",(0,l.kt)("inlineCode",{parentName:"p"},"import()")," \u7684\u5b9e\u73b0\u4e3b\u8981\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"JSONP")," \u52a8\u6001\u52a0\u8f7d\u6a21\u5757\uff0c\u5e76\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpackJsonpCallback")," \u5224\u65ad\u52a0\u8f7d\u7684\u7ed3\u679c"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7f13\u5b58\u5f02\u6b65\u6a21\u5757\u7684\u72b6\u6001"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," \u5df2\u7ecf\u52a0\u8f7d\u5b8c\u6bd5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," \u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," \u52a0\u8f7d\u5931\u8d25\u3001\u52a0\u8f7d\u8d85\u65f6\u3001\u4ece\u672a\u52a0\u8f7d\u8fc7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"null")," \u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," ",(0,l.kt)("inlineCode",{parentName:"li"},"preloaded/prefetched")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"promise"),"\u4ee3\u8868 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," \u6b63\u5728\u52a0\u8f7d")))))),(0,l.kt)("h4",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ECMAScript#4th_Edition_(abandoned)"},"ECMAScript 4th",(0,l.kt)("em",{parentName:"a"},"Edition"),"(abandoned)")))}s.isMDXComponent=!0}}]);