"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8083],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},u=void 0,p={unversionedId:"node/require",id:"node/require",title:"require",description:"require \u89e3\u6790\u89c4\u5219",source:"@site/fe/node/require.md",sourceDirName:"node",slug:"/node/require",permalink:"/study-notes/fe/node/require",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1639103785,formattedLastUpdatedAt:"12/10/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"path",permalink:"/study-notes/fe/node/path"},next:{title:"Vue2",permalink:"/study-notes/fe/vue/lifecycle/vue2"}},s=[{value:"require \u89e3\u6790\u89c4\u5219",id:"require-\u89e3\u6790\u89c4\u5219",children:[],level:2},{value:"require.resolve \u65b9\u6cd5",id:"requireresolve-\u65b9\u6cd5",children:[],level:2},{value:"\u53c2\u8003\u5730\u5740",id:"\u53c2\u8003\u5730\u5740",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"require-\u89e3\u6790\u89c4\u5219"},"require \u89e3\u6790\u89c4\u5219"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u5f53 Node \u9047\u5230 require(X) \u65f6\uff0c\u6309\u4e0b\u9762\u7684\u987a\u5e8f\u5904\u7406\u3002\n\uff081\uff09\u5982\u679c X \u662f\u5185\u7f6e\u6a21\u5757\uff08\u6bd4\u5982 require(\'http\'\uff09)\n\u3000\u3000a. \u8fd4\u56de\u8be5\u6a21\u5757\u3002\n\u3000\u3000b. \u4e0d\u518d\u7ee7\u7eed\u6267\u884c\u3002\n\uff082\uff09\u5982\u679c X \u4ee5 "./" \u6216\u8005 "/" \u6216\u8005 "../" \u5f00\u5934\n\u3000\u3000a. \u6839\u636e X \u6240\u5728\u7684\u7236\u6a21\u5757\uff0c\u786e\u5b9a X \u7684\u7edd\u5bf9\u8def\u5f84\u3002\n\u3000\u3000b. \u5c06 X \u5f53\u6210\u6587\u4ef6\uff0c\u4f9d\u6b21\u67e5\u627e\u4e0b\u9762\u6587\u4ef6\uff0c\u53ea\u8981\u5176\u4e2d\u6709\u4e00\u4e2a\u5b58\u5728\uff0c\u5c31\u8fd4\u56de\u8be5\u6587\u4ef6\uff0c\u4e0d\u518d\u7ee7\u7eed\u6267\u884c\u3002\n      X\n      X.js\n      X.json\n      X.node\n\u3000\u3000c. \u5c06 X \u5f53\u6210\u76ee\u5f55\uff0c\u4f9d\u6b21\u67e5\u627e\u4e0b\u9762\u6587\u4ef6\uff0c\u53ea\u8981\u5176\u4e2d\u6709\u4e00\u4e2a\u5b58\u5728\uff0c\u5c31\u8fd4\u56de\u8be5\u6587\u4ef6\uff0c\u4e0d\u518d\u7ee7\u7eed\u6267\u884c\u3002\n      X/package.json\uff08main\u5b57\u6bb5\uff09\n      X/index.js\n      X/index.json\n      X/index.node\n\uff083\uff09\u5982\u679c X \u4e0d\u5e26\u8def\u5f84\n\u3000\u3000a. \u6839\u636e X \u6240\u5728\u7684\u7236\u6a21\u5757\uff0c\u786e\u5b9a X \u53ef\u80fd\u7684\u5b89\u88c5\u76ee\u5f55\u3002\n\u3000\u3000b. \u4f9d\u6b21\u5728\u6bcf\u4e2a\u76ee\u5f55\u4e2d\uff0c\u5c06 X \u5f53\u6210\u6587\u4ef6\u540d\u6216\u76ee\u5f55\u540d\u52a0\u8f7d\u3002\n\uff084\uff09 \u629b\u51fa "not found"\n')),(0,o.kt)("h2",{id:"requireresolve-\u65b9\u6cd5"},"require.resolve \u65b9\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"request"),": \u9700\u8981\u89e3\u6790\u7684\u6a21\u5757\u8def\u5f84\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"options")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paths: string")," \u4ece\u4e2d\u89e3\u6790\u6a21\u5757\u4f4d\u7f6e\u7684\u8def\u5f84\u3002 \u5982\u679c\u5b58\u5728\uff0c\u5219\u4f7f\u7528\u8fd9\u4e9b\u8def\u5f84\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684\u89e3\u6790\u8def\u5f84\uff0c\u4f46 ",(0,o.kt)("a",{parentName:"li",href:"http://nodejs.cn/api/modules.html#modules_loading_from_the_global_folders"},"GLOBAL_FOLDERS")," \u9664\u5916\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.node_modules"),"\uff0c\u5b83\u4eec\u603b\u662f\u5305\u542b\u5728\u5185\u3002 \u8fd9\u4e9b\u8def\u5f84\u4e2d\u7684\u6bcf\u4e00\u4e2a\u90fd\u7528\u4f5c\u6a21\u5757\u89e3\u6790\u7b97\u6cd5\u7684\u8d77\u70b9\uff0c\u8fd9\u610f\u5473\u7740\u4ece\u8be5\u4f4d\u7f6e\u5f00\u59cb\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," \u5c42\u6b21\u7ed3\u6784\u3002")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},".\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 test\n\u2502   \u251c\u2500\u2500 package.json\n\u2502   \u2514\u2500\u2500 templateName\n\u2502       \u2514\u2500\u2500 package.json\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"index.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(\n    require.resolve('./test/templateName/package.json', {path: './templateName'})\n);\n\n// \u5b57\u7b26\u4e32: /Users/xxxx/test/test/templateName/package.json\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u5185\u90e8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," \u673a\u5236\u67e5\u8be2\u6a21\u5757\u7684\u4f4d\u7f6e\uff0c\u6b64\u64cd\u4f5c\u53ea\u8fd4\u56de\u89e3\u6790\u540e\u7684\u6587\u4ef6\u540d\uff0c\u4e0d\u4f1a\u52a0\u8f7d\u8be5\u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u627e\u4e0d\u5230\u6a21\u5757\uff0c\u5219\u4f1a\u629b\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"MODULE_NOT_FOUND")," \u9519\u8bef\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003\u5730\u5740"},"\u53c2\u8003\u5730\u5740"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_all_together"},"modules all together")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2015/05/require.html"},"\u962e\u4e00\u5cf0require() \u6e90\u7801\u89e3\u8bfb")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_require_resolve_request_options"},"require.resolve(request[, options])")))}d.isMDXComponent=!0}}]);