"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8710],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),o=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(k.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,c=m["".concat(k,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(c,p(p({ref:t},s),{},{components:a})):n.createElement(c,p({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82925:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return k},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),p=["components"],i={},k="Map Vs WeakMap, Set Vs WeakSet",o={unversionedId:"javascript/es-study/map-weakmap-set-weakset",id:"javascript/es-study/map-weakmap-set-weakset",title:"Map Vs WeakMap, Set Vs WeakSet",description:"\u524d\u7f6e\u6982\u5ff5",source:"@site/fe/javascript/es-study/map-weakmap-set-weakset.md",sourceDirName:"javascript/es-study",slug:"/javascript/es-study/map-weakmap-set-weakset",permalink:"/study-notes/fe/javascript/es-study/map-weakmap-set-weakset",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643793612,formattedLastUpdatedAt:"2/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u76ee\u5f55",permalink:"/study-notes/fe/javascript/es-study/es-guide"},next:{title:"\u6a21\u5757\u5316\u65b9\u6848",permalink:"/study-notes/fe/javascript/es-study/module"}},s=[{value:"\u524d\u7f6e\u6982\u5ff5",id:"\u524d\u7f6e\u6982\u5ff5",children:[{value:"\u5f3a\u5f15\u7528",id:"\u5f3a\u5f15\u7528",children:[],level:3},{value:"\u5f31\u5f15\u7528",id:"\u5f31\u5f15\u7528",children:[],level:3}],level:2},{value:"Map",id:"map",children:[],level:2},{value:"WeakMap",id:"weakmap",children:[],level:2},{value:"Map Vs WeakMap",id:"map-vs-weakmap",children:[{value:"Map",id:"map-1",children:[],level:3},{value:"WeakMap",id:"weakmap-1",children:[],level:3}],level:2},{value:"Set",id:"set",children:[],level:2},{value:"WeakSet",id:"weakset",children:[],level:2},{value:"Set Vs WeakSet",id:"set-vs-weakset",children:[{value:"Set",id:"set-1",children:[],level:3},{value:"WeakSet",id:"weakset-1",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],u={toc:s};function m(e){var t=e.components,i=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"map-vs-weakmap-set-vs-weakset"},"Map Vs WeakMap, Set Vs WeakSet"),(0,l.kt)("h2",{id:"\u524d\u7f6e\u6982\u5ff5"},"\u524d\u7f6e\u6982\u5ff5"),(0,l.kt)("h3",{id:"\u5f3a\u5f15\u7528"},"\u5f3a\u5f15\u7528"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u4e2d\uff0c\u4e00\u822c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90fd\u662f\u5efa\u7acb\u4e00\u4e2a\u5f3a\u5f15\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let rain120 = { name: "rain120" };\n')),(0,l.kt)("p",null,"\u53ea\u6709\u5f53\u6211\u4eec\u624b\u52a8\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"rain120 = null")," \u7684\u65f6\u5019\uff0c\u624d\u6709\u53ef\u80fd\u56de\u6536 ",(0,l.kt)("inlineCode",{parentName:"p"},"rain120")," \u6240\u5f15\u7528\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("h3",{id:"\u5f31\u5f15\u7528"},"\u5f31\u5f15\u7528"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1"},"\u8ba1\u7b97\u673a\u7a0b\u5e8f\u8bbe\u8ba1"),"\u4e2d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5f31\u5f15\u7528"),"\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/w/index.php?title=%E5%BC%BA%E5%BC%95%E7%94%A8&action=edit&redlink=1"},"\u5f3a\u5f15\u7528"),"\u76f8\u5bf9\uff0c\u662f\u6307\u4e0d\u80fd\u786e\u4fdd\u5176\u5f15\u7528\u7684",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)"},"\u5bf9\u8c61"),"\u4e0d\u4f1a\u88ab",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8"},"\u5783\u573e\u56de\u6536\u5668"),"\u56de\u6536\u7684\u5f15\u7528\u3002\u4e00\u4e2a\u5bf9\u8c61\u82e5\u53ea\u88ab\u5f31\u5f15\u7528\u6240\u5f15\u7528\uff0c\u5219\u88ab\u8ba4\u4e3a\u662f",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E4%B8%8D%E5%8F%AF%E8%AE%BF%E9%97%AE%E5%86%85%E5%AD%98"},"\u4e0d\u53ef\u8bbf\u95ee"),"\uff08\u6216\u5f31\u53ef\u8bbf\u95ee\uff09\u7684\uff0c\u5e76\u56e0\u6b64\u53ef\u80fd\u5728\u4efb\u4f55\u65f6\u523b\u88ab\u56de\u6536\u3002   --- ",(0,l.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/zh-cn/%E5%BC%B1%E5%BC%95%E7%94%A8"},"Wiki"))),(0,l.kt)("h2",{id:"map"},"Map"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Map"))," \u5bf9\u8c61\u4fdd\u5b58\u952e\u503c\u5bf9\uff0c\u5e76\u4e14\u80fd\u591f\u8bb0\u4f4f\u952e\u7684\u539f\u59cb\u63d2\u5165\u987a\u5e8f\u3002\u4efb\u4f55\u503c(\u5bf9\u8c61\u6216\u8005",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive"},"\u539f\u59cb\u503c"),") \u90fd\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u952e\u6216\u4e00\u4e2a\u503c\u3002"),(0,l.kt)("h2",{id:"weakmap"},"WeakMap"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"WeakMap"))," \u5bf9\u8c61\u662f\u4e00\u7ec4\u952e/\u503c\u5bf9\u7684\u96c6\u5408\uff0c\u5176\u4e2d\u7684\u952e\u662f",(0,l.kt)("strong",{parentName:"p"},"\u5f31\u5f15\u7528"),"\u7684\u3002\u5176\u952e",(0,l.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u662f\u5bf9\u8c61"),"\uff0c\u800c\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WeakMap")," \u4e2d\uff0c\u6bcf\u4e2a\u952e\u5bf9\u81ea\u5df1\u6240\u5f15\u7528\u5bf9\u8c61\u7684\u5f15\u7528\u90fd\u662f\u5f31\u5f15\u7528\uff0c\u5728\u6ca1\u6709\u5176\u4ed6\u5f15\u7528\u548c\u8be5\u952e\u5f15\u7528\u540c\u4e00\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c06\u4f1a\u88ab\u5783\u573e\u56de\u6536(\u76f8\u5e94\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\u5219\u53d8\u6210\u65e0\u6548\u7684)\uff0c\u6240\u4ee5\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"WeakMap")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u662f\u4e0d\u53ef\u679a\u4e3e\u7684\u3002"),(0,l.kt)("h2",{id:"map-vs-weakmap"},"Map Vs WeakMap"),(0,l.kt)("h3",{id:"map-1"},"Map"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Map-value.png",src:a(52903).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u8d28\u4e0a\u662f\u952e\u503c\u5bf9\u7684\u96c6\u5408\uff0c\u7c7b\u4f3c\u96c6\u5408\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"[{ key: addKey, value: addValue }]")," \u7684\u5f62\u5f0f\u50a8\u5b58\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53ef\u4ee5\u904d\u5386"))),(0,l.kt)("h3",{id:"weakmap-1"},"WeakMap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53ea\u63a5\u53d7\u5bf9\u8c61\u4f5c\u4e3a\u952e\u540d"),"(",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"\u9664\u5916)\uff0c\u4e0d\u63a5\u53d7\u5176\u4ed6\u7c7b\u578b\u7684\u503c\u4f5c\u4e3a\u952e\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u952e\u540d\u6240\u6307\u5411\u7684\u5bf9\u8c61\uff0c\u4e0d\u8ba1\u5165\u5783\u573e\u56de\u6536\u673a\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u80fd\u904d\u5386"),"\uff0c\u5373\u6ca1\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"keys()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"values()"),"\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"entries()"),"\u65b9\u6cd5\uff0c\u4e5f\u6ca1\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"size"),"\u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WeakMap")," \u53ea\u6709\u4ee5\u4e0b\u7684\u65b9\u6cd5\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weakMap.get(key)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weakMap.set(key, value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weakMap.delete(key)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weakMap.has(key)"))))),(0,l.kt)("h2",{id:"set"},"Set"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Set"))," \u5bf9\u8c61\u5141\u8bb8\u4f60\u5b58\u50a8\u4efb\u4f55\u7c7b\u578b\u7684\u552f\u4e00\u503c\uff0c\u65e0\u8bba\u662f",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive"},"\u539f\u59cb\u503c"),"\u6216\u8005\u662f\u5bf9\u8c61\u5f15\u7528\u3002"),(0,l.kt)("h2",{id:"weakset"},"WeakSet"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"WeakSet"))," \u5bf9\u8c61\u5141\u8bb8\u4f60\u5c06 ",(0,l.kt)("strong",{parentName:"p"},"\u5f31\u5f15\u7528")," \u5b58\u50a8\u5728\u4e00\u4e2a\u96c6\u5408\u4e2d\u3002"),(0,l.kt)("h2",{id:"set-vs-weakset"},"Set Vs WeakSet"),(0,l.kt)("h3",{id:"set-1"},"Set"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Set-value.png",src:a(83905).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6210\u5458\u4e0d\u80fd\u91cd\u590d\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"[{ value: addValue }]")," \u7684\u5f62\u5f0f\u50a8\u5b58\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u6709\u952e\u503c\uff0c\u6ca1\u6709\u952e\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53ef\u4ee5\u904d\u5386"),"\u3002")),(0,l.kt)("h3",{id:"weakset-1"},"WeakSet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6210\u5458\u90fd\u662f\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u80fd\u904d\u5386"),"\uff0c\u6210\u5458\u90fd\u662f\u5f31\u5f15\u7528\uff0c\u968f\u65f6\u53ef\u4ee5\u6d88\u5931\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u6765\u4fdd\u5b58DOM\u8282\u70b9\uff0c\u4e0d\u5bb9\u6613\u9020\u6210\u5185\u5b58\u6cc4\u6f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WeakSet")," \u53ea\u6709\u4ee5\u4e0b\u7684\u65b9\u6cd5\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weakSet.add(key, value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weakSet.delete(key)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weakSet.has(key)"))))),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/study-notes/fe/javascript/key-concept/garbage-collection"},"Javascript \u5783\u573e\u56de\u6536")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://es6.ruanyifeng.com/#docs/set-map"},"ECMAScript 6 \u5165\u95e8 - Set \u548c Map \u6570\u636e\u7ed3\u6784")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map"},"MDN Map")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap"},"MDN WeakMap")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set"},"MDN Set")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"},"MDN WeakSet")))}m.isMDXComponent=!0},52903:function(e,t,a){t.Z=a.p+"assets/images/Map-value-acec2b8b47db0704607c71e72a3354b4.png"},83905:function(e,t,a){t.Z=a.p+"assets/images/Set-value-402681d6a7426f1099495889fb76eb59.png"}}]);