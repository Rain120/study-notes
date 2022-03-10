"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5342],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67829:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],p={},i="\u95ed\u5305",c={unversionedId:"javascript/key-concept/closure",id:"javascript/key-concept/closure",title:"\u95ed\u5305",description:"\u4ec0\u4e48\u662f\u95ed\u5305",source:"@site/fe/javascript/key-concept/closure.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/closure",permalink:"/study-notes/fe/javascript/key-concept/closure",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646902378,formattedLastUpdatedAt:"3/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"call apply bind",permalink:"/study-notes/fe/javascript/key-concept/call-apply-bind"},next:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/study-notes/fe/javascript/key-concept/event-loop"}},s=[{value:"\u4ec0\u4e48\u662f\u95ed\u5305",id:"\u4ec0\u4e48\u662f\u95ed\u5305",children:[],level:2},{value:"\u95ed\u5305\u4ea7\u751f\u7684\u539f\u56e0",id:"\u95ed\u5305\u4ea7\u751f\u7684\u539f\u56e0",children:[],level:2},{value:"\u5982\u4f55\u7406\u89e3\u95ed\u5305\uff1f",id:"\u5982\u4f55\u7406\u89e3\u95ed\u5305",children:[{value:"\u53d8\u91cf\u7684\u4f5c\u7528\u57df",id:"\u53d8\u91cf\u7684\u4f5c\u7528\u57df",children:[],level:3}],level:2},{value:"\u95ed\u5305\u7684\u4f5c\u7528",id:"\u95ed\u5305\u7684\u4f5c\u7528",children:[],level:2},{value:"Note",id:"note",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u95ed\u5305"},"\u4ec0\u4e48\u662f\u95ed\u5305"),(0,l.kt)("p",null,"\u51fd\u6570\u548c\u5bf9\u5176\u5468\u56f4\u72b6\u6001",(0,l.kt)("inlineCode",{parentName:"p"},"(lexical environment\uff0c\u8bcd\u6cd5\u73af\u5883)"),"\u7684\u5f15\u7528\u6346\u7ed1\u5728\u4e00\u8d77\u6784\u6210",(0,l.kt)("strong",{parentName:"p"},"\u95ed\u5305"),(0,l.kt)("inlineCode",{parentName:"p"},"(closure)"),"\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u95ed\u5305\u53ef\u4ee5\u8ba9\u4f60\u4ece\u5185\u90e8\u51fd\u6570\u8bbf\u95ee\u5916\u90e8\u51fd\u6570\u4f5c\u7528\u57df\u3002"),"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u4e2d\uff0c\u6bcf\u5f53\u51fd\u6570\u88ab\u521b\u5efa\uff0c\u5c31\u4f1a\u5728\u51fd\u6570\u751f\u6210\u65f6\u751f\u6210\u95ed\u5305\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u7b80\u800c\u8a00\u4e4b: \u95ed\u5305\u662f\u6307\u90a3\u4e9b\u80fd\u591f\u8bbf\u95ee",(0,l.kt)("strong",{parentName:"p"},"\u81ea\u7531\u53d8\u91cf(\u5728\u51fd\u6570\u4e2d\u4f7f\u7528\uff0c\u4f46\u65e2\u4e0d\u662f\u5f62\u53c2\u4e5f\u4e0d\u662f\u5c40\u90e8\u53d8\u91cf)"),"\u7684\u51fd\u6570\u3002"))),(0,l.kt)("h2",{id:"\u95ed\u5305\u4ea7\u751f\u7684\u539f\u56e0"},"\u95ed\u5305\u4ea7\u751f\u7684\u539f\u56e0"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"ES5")," \u4e2d\u53ea\u5b58\u5728\u4e24\u79cd\u4f5c\u7528\u57df: ",(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u4f5c\u7528\u57df\u548c\u51fd\u6570\u4f5c\u7528\u57df"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5f53\u8bbf\u95ee\u4e00\u4e2a\u53d8\u91cf\u65f6\uff0c\u89e3\u91ca\u5668\u4f1a\u9996\u5148\u5728\u5f53\u524d\u4f5c\u7528\u57df\u67e5\u627e\u6807\u793a\u7b26\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u5c31\u53bb\u7236\u4f5c\u7528\u57df\u627e\uff0c\u76f4\u5230\u627e\u5230\u8be5\u53d8\u91cf\u7684\u6807\u793a\u7b26\u6216\u8005\u4e0d\u5728\u7236\u4f5c\u7528\u57df\u4e2d\uff0c\u8fd9\u5c31\u662f\u4f5c\u7528\u57df\u94fe"),"\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6bcf\u4e00\u4e2a\u5b50\u51fd\u6570\u90fd\u4f1a\u62f7\u8d1d\u4e0a\u7ea7\u7684\u4f5c\u7528\u57df\uff0c\u5f62\u6210\u4e00\u4e2a\u4f5c\u7528\u57df\u7684\u94fe\u6761, \u5f53\u524d\u73af\u5883\u4e2d\u5b58\u5728\u6307\u5411\u7236\u7ea7\u4f5c\u7528\u57df\u7684\u5f15\u7528\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u7406\u89e3\u95ed\u5305"},"\u5982\u4f55\u7406\u89e3\u95ed\u5305\uff1f"),(0,l.kt)("h3",{id:"\u53d8\u91cf\u7684\u4f5c\u7528\u57df"},"\u53d8\u91cf\u7684\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"\u4e00\u822c\u7684\uff0c\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u6709\uff0c\u5168\u5c40\u53d8\u91cf\u548c\u5c40\u90e8\u53d8\u91cf\u4e24\u79cd\u3002\u4f8b\u5982"),(0,l.kt)("p",null,"\u5168\u5c40\u53d8\u91cf: \u4e0d\u5728\u4efb\u4f55\u51fd\u6570\u5185\u5b9a\u4e49\u7684\u53d8\u91cf"),(0,l.kt)("p",null,"Note: \u5982\u679c",(0,l.kt)("strong",{parentName:"p"},"\u53d8\u91cf\u5728\u51fd\u6570\u5185\u6ca1\u6709\u58f0\u660e"),"(\u6ca1\u6709\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u5173\u952e\u5b57), \u8be5\u53d8\u91cf\u4e3a\u5168\u5c40\u53d8\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let name = 'Rain120';\n\nfunction getName() {\n  console.log(name);\n}\n\ngetName(); // Rain120\n")),(0,l.kt)("p",null,"\u5c40\u90e8\u53d8\u91cf:  \u5728\u51fd\u6570\u5185\u90e8\u5b9a\u4e49\u7684\u53d8\u91cf, \u53ea\u80fd\u5728\u51fd\u6570\u5185\u90e8\u4e0d\u80fd\u4f7f\u7528, \u51fd\u6570\u5916\u90e8\u4e0d\u80fd\u4f7f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"function getName() {\n  let name = 'Rain120';\n}\n\ngetName();\nconsole.log(name); // undefined\n")),(0,l.kt)("p",null,"\u90a3\u4e48\u95ee\u9898\u6765\u4e86, ",(0,l.kt)("strong",{parentName:"p"},"\u5982\u4f55\u4ece\u51fd\u6570\u5916\u90e8\u8bfb\u53d6\u51fd\u6570\u5185\u7684\u5c40\u90e8\u53d8\u91cf\uff1f")),(0,l.kt)("p",null,"\u7b54\u6848\u5c31\u662f\u4f7f\u7528\u95ed\u5305\u3002"),(0,l.kt)("h2",{id:"\u95ed\u5305\u7684\u4f5c\u7528"},"\u95ed\u5305\u7684\u4f5c\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u8bfb\u53d6\u51fd\u6570\u5185\u90e8\u7684\u53d8\u91cf \u2460")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8ba9\u8fd9\u4e9b\u53d8\u91cf\u7684\u503c\u59cb\u7ec8\u4fdd\u6301\u5728\u5185\u5b58\u4e2d \u2461")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bbe\u8ba1\u79c1\u6709\u7684\u65b9\u6cd5\u548c\u53d8\u91cf \u2462"))),(0,l.kt)("h2",{id:"note"},"Note"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e\ud83d\udc46\ud83d\udc46\ud83d\udc46\u2460\u7684\u539f\u56e0\uff0c\u5728\u7236\u51fd\u6570\u5916\u90e8\u4f1a\u6539\u53d8\u7236\u51fd\u6570\u5185\u90e8\u53d8\u91cf\u7684\u503c\u3002\u56e0\u4e3a",(0,l.kt)("strong",{parentName:"li"},"\u51fd\u6570\u662f\u5f15\u7528\u7c7b\u578b"),"\uff0c\u66f4\u591a\u8be6\u89c1",(0,l.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/key-concept/values-vs-reference"},"\u503c\u7c7b\u578b vs \u5f15\u7528\u7c7b\u578b")),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u7684\uff0c\u51fd\u6570\u7684\u4f5c\u7528\u57df\u53ca\u5176\u6240\u6709\u53d8\u91cf\u90fd\u4f1a\u5728\u51fd\u6570\u6267\u884c\u7ed3\u675f\u540e\u88ab\u9500\u6bc1\u3002\u4f46\u662f\uff0c\u5728\u521b\u5efa\u4e86\u4e00\u4e2a\u95ed\u5305\u4ee5\u540e\uff0c\u8fd9\u4e2a\u51fd\u6570\u7684\u4f5c\u7528\u57df\u5c31\u4f1a\u4e00\u76f4\u4fdd\u5b58\u5230\u95ed\u5305\u4e0d\u5b58\u5728\u4e3a\u6b62\u3002\u6240\u4ee5\u6ee5\u7528\u95ed\u5305\uff0c\u5426\u5219\u4f1a\u9020\u6210\u7f51\u9875\u7684\u6027\u80fd\u95ee\u9898, \u539f\u56e0\u662f\ud83d\udc46\ud83d\udc46\ud83d\udc46\u2461")),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html"},"\u962e\u4e00\u5cf0 \u5b66\u4e60Javascript\u95ed\u5305\uff08Closure\uff09")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures"},"MDN Closures")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/stephentian/33-js-concepts#8-%E9%97%AD%E5%8C%85"},"JavaScript\u5f00\u53d1\u8005\u5e94\u61c2\u768433\u4e2a\u6982\u5ff5  \u95ed\u5305")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.im/post/6844903974378668039#heading-23"},"\u8c08\u8c08\u4f60\u5bf9\u95ed\u5305\u7684\u7406\u89e3")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8"},"I never understood JavaScript closures")))}m.isMDXComponent=!0}}]);