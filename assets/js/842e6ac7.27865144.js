"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5833],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=c(n),d=i,u=k["".concat(p,".").concat(d)]||k[d]||m[d]||r;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},81398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return k}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={},p="\u6267\u884c\u4e0a\u4e0b\u6587",c={unversionedId:"javascript/key-concept/execution-context",id:"javascript/key-concept/execution-context",title:"\u6267\u884c\u4e0a\u4e0b\u6587",description:"\u6b64\u7b14\u8bb0\u6709\u5f88\u591a\u95ee\u9898, \u5bfc\u81f4\u7b14\u8005\u6709\u4e9b\u6df7\u4e71, \u5f85\u7b14\u8005\u6709\u7a7aReview\u5e76\u91cd\u65b0\u6574\u7406",source:"@site/fe/javascript/key-concept/execution-context.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/execution-context",permalink:"/study-notes/fe/javascript/key-concept/execution-context",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1639103785,formattedLastUpdatedAt:"12/10/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Decorator (\u88c5\u9970\u5668) \u5b9e\u73b0\u539f\u7406\u53ca\u5176\u4f7f\u7528",permalink:"/study-notes/fe/javascript/key-concept/decorator"},next:{title:"extends \u7ee7\u627f",permalink:"/study-notes/fe/javascript/key-concept/extends"}},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u4f5c\u7528\u57df\u94fe (Scope chain)",id:"\u4f5c\u7528\u57df\u94fe-scope-chain",children:[],level:2},{value:"\u6267\u884c\u4e0a\u4e0b\u6587 (Execution Context or EC)",id:"\u6267\u884c\u4e0a\u4e0b\u6587-execution-context-or-ec",children:[{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",children:[],level:3},{value:"\u6267\u884c\u4e0a\u4e0b\u6587\u7c7b\u578b",id:"\u6267\u884c\u4e0a\u4e0b\u6587\u7c7b\u578b",children:[],level:3}],level:2},{value:"\u6267\u884c\u4e0a\u4e0b\u6587\u6808 (Execution Context Stack or ECS)",id:"\u6267\u884c\u4e0a\u4e0b\u6587\u6808-execution-context-stack-or-ecs",children:[],level:2},{value:"\u53d8\u91cf\u5bf9\u8c61 (Variable object\uff0cVO)",id:"\u53d8\u91cf\u5bf9\u8c61-variable-objectvo",children:[],level:2},{value:"\u6d3b\u52a8\u5bf9\u8c61 (Activation object\uff0cAO)",id:"\u6d3b\u52a8\u5bf9\u8c61-activation-objectao",children:[],level:2},{value:"\u4e3e\u4e2a\ud83c\udf30",id:"\u4e3e\u4e2a",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[{value:"\u53d8\u91cf\u63d0\u5347",id:"\u53d8\u91cf\u63d0\u5347",children:[],level:3},{value:"<code>this</code> \u6307\u5411",id:"this-\u6307\u5411",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],m={toc:s};function k(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6267\u884c\u4e0a\u4e0b\u6587"},"\u6267\u884c\u4e0a\u4e0b\u6587"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6b64\u7b14\u8bb0\u6709\u5f88\u591a\u95ee\u9898, \u5bfc\u81f4\u7b14\u8005\u6709\u4e9b\u6df7\u4e71, \u5f85\u7b14\u8005\u6709\u7a7aReview\u5e76\u91cd\u65b0\u6574\u7406"))),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u60f3\u8981\u4e86\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"EC"),"\uff0c\u9700\u8981\u5148\u4e86\u89e3\u4e00\u4e0b\u51e0\u4e2a\u6982\u5ff5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/key-concept/scope-chain"},"\u4f5c\u7528\u57df\u94fe",(0,r.kt)("inlineCode",{parentName:"a"},"(Scope chain)"))),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e0a\u4e0b\u6587",(0,r.kt)("inlineCode",{parentName:"li"},"(Execution Context or EC)")),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u73af\u5883\u6808 ",(0,r.kt)("inlineCode",{parentName:"li"},"(Execution Context Stack or ECS)")),(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"(Variable object\uff0cVO)")),(0,r.kt)("li",{parentName:"ul"},"\u6d3b\u52a8\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"li"},"(Activation object\uff0cAO)"))),(0,r.kt)("h2",{id:"\u4f5c\u7528\u57df\u94fe-scope-chain"},"\u4f5c\u7528\u57df\u94fe (Scope chain)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/study-notes/fe/javascript/key-concept/scope-chain"},"\u8be6\u89c1")),(0,r.kt)("h2",{id:"\u6267\u884c\u4e0a\u4e0b\u6587-execution-context-or-ec"},"\u6267\u884c\u4e0a\u4e0b\u6587 (Execution Context or EC)"),(0,r.kt)("p",null,"\u6267\u884c\u4e0a\u4e0b\u6587",(0,r.kt)("inlineCode",{parentName:"p"},"(EC)"),"\u662f\u8bc4\u4f30\u548c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u4ee3\u7801\u7684\u73af\u5883\u7684\u62bd\u8c61\u6982\u5ff5\u3002\u6bcf\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"Javascript")," \u4ee3\u7801\u5728\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u5b83\u90fd\u662f\u5728\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u8fd0\u884c\u3002"),(0,r.kt)("h3",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,r.kt)("p",null,"\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u751f\u547d\u5468\u671f\u5305\u62ec\u4e09\u4e2a\u9636\u6bb5\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa\u9636\u6bb5\ud83d\udc49\u6267\u884c\u9636\u6bb5\ud83d\udc49\u56de\u6536\u9636\u6bb5"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa\u9636\u6bb5")),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"(ECMA 3 \u89c4\u8303)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u53d8\u91cf\u5bf9\u8c61 ",(0,r.kt)("strong",{parentName:"p"},"(\u5f53\u524d\u6267\u884c\u4e0a\u4e0b\u6587)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"li"},"arguments"),"\u5bf9\u8c61",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4e0a\u4e0b\u6587\uff0c\u521d\u59cb\u5316\u53c2\u6570\u540d\u79f0\u548c\u503c\u5e76\u521b\u5efa\u5f15\u7528\u7684\u590d\u5236"))),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u51fd\u6570\u58f0\u660e (\u5b58\u5728\u7684\u8bdd)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u51fd\u6570\u58f0\u660e\u7684\u540d\u5b57\u5728",(0,r.kt)("a",{parentName:"li",href:"#%E5%8F%98%E9%87%8F%E5%AF%B9%E8%B1%A1-variable-object%EF%BC%8Cvo"},"\u53d8\u91cf\u5bf9\u8c61")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u5c5e\u6027\uff0c\u5e76\u6307\u5411\u51fd\u6570\u5b58\u653e\u7684\u5f15\u7528\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u82e5\u9047\u5230\u91cd\u590d\u7684\u51fd\u6570\u540d\uff0c\u5c06\u8986\u76d6\u4e0a\u4e00\u6b21\u5f15\u7528\u5730\u5740")))),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u53d8\u91cf (\u5b58\u5728\u7684\u8bdd)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u53d8\u91cf\u540d\u5728",(0,r.kt)("a",{parentName:"li",href:"#%E5%8F%98%E9%87%8F%E5%AF%B9%E8%B1%A1-variable-object%EF%BC%8Cvo"},"\u53d8\u91cf\u5bf9\u8c61")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u5c5e\u6027\uff0c\u5e76\u7ed9\u5f53\u524d\u53d8\u91cf\u8d4b\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u82e5\u9047\u5230\u91cd\u590d\u7684\u53d8\u91cf\u540d\uff0c\u4e0d\u8fdb\u884c\u4efb\u4f55\u76f8\u5173\u8d4b\u503c\u64cd\u4f5c\uff0c\u7ee7\u7eed\u4e0b\u4e00\u6b65")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5efa\u7acb\u4f5c\u7528\u57df\u94fe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u786e\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u5411\u95ee\u9898\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/key-concept/this"},"Javascript this"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"(ECMA 5 \u89c4\u8303)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u786e\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u6307\u5411\u95ee\u9898\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"/study-notes/fe/javascript/key-concept/this"},"Javascript this")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u8bcd\u6cd5\u73af\u5883 ",(0,r.kt)("inlineCode",{parentName:"p"},"(Lexical Environment)")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("em",{parentName:"p"},"Lexical Environment")," is a specification type used to define the association of ",(0,r.kt)("em",{parentName:"p"},"Identifiers")," to specific variables and functions based upon the lexical nesting structure of ECMAScript code. A Lexical Environment consists of an ",(0,r.kt)("a",{parentName:"p",href:"https://www.ecma-international.org/ecma-262/5.1/#sec-10.2.1"},"Environment Record")," and a possibly null reference to an ",(0,r.kt)("em",{parentName:"p"},"outer")," Lexical Environment. Usually a Lexical Environment is associated with some specific syntactic structure of ECMAScript code such as a ",(0,r.kt)("em",{parentName:"p"},"FunctionDeclaration"),", a ",(0,r.kt)("em",{parentName:"p"},"WithStatement"),", or a ",(0,r.kt)("em",{parentName:"p"},"Catch")," clause of a ",(0,r.kt)("em",{parentName:"p"},"TryStatement")," and a new Lexical Environment is created each time such code is evaluated.")),(0,r.kt)("p",{parentName:"li"},"\u8bcd\u6cd5\u73af\u5883\u662f\u4e00\u79cd\u89c4\u8303\u7c7b\u578b\uff0c\u7528\u4e8e\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"ECMAScript"),"\u4ee3\u7801\u7684\u8bcd\u6cd5\u5d4c\u5957\u7ed3\u6784\u6765\u5b9a\u4e49\u6807\u8bc6\u7b26\u4e0e\u7279\u5b9a\u53d8\u91cf\u548c\u51fd\u6570\u7684\u5173\u8054\u3002 \u8bcd\u6cd5\u73af\u5883\u7531\u73af\u5883\u8bb0\u5f55\u548c\u5bf9\u5916\u90e8\u8bcd\u6cd5\u73af\u5883\u7684\u53ef\u80fd\u4e3a\u7a7a\u7684\u5f15\u7528\u7ec4\u6210\u3002 \u901a\u5e38\uff0c\u8bcd\u6cd5\u73af\u5883\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"ECMAScript"),"\u4ee3\u7801\u7684\u67d0\u4e9b\u7279\u5b9a\u8bed\u6cd5\u7ed3\u6784\uff08\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"FunctionDeclaration"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"WithStatement"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"TryStatement"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Catch"),"\u5b50\u53e5\uff09\u76f8\u5173\u8054\uff0c\u5e76\u4e14\u6bcf\u6b21\u8bc4\u4f30\u6b64\u7c7b\u4ee3\u7801\u65f6\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8bcd\u6cd5\u73af\u5883\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u53d8\u91cf\u73af\u5883 ",(0,r.kt)("inlineCode",{parentName:"p"},"(Variable Environment)")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Identifies the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ecma-international.org/ecma-262/5.1/#sec-10.2"},"Lexical Environment")," whose environment record holds bindings created by ",(0,r.kt)("em",{parentName:"p"},"VariableStatements")," and ",(0,r.kt)("em",{parentName:"p"},"FunctionDeclarations")," within this execution context.")),(0,r.kt)("p",{parentName:"li"},"\u6807\u8bc6\u8bcd\u6cd5\u73af\u5883\uff0c\u8be5\u8bcd\u6cd5\u73af\u5883\u7684\u73af\u5883\u8bb0\u5f55\u5305\u542b\u6b64\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"VariableStatements"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"FunctionDeclarations"),"\u521b\u5efa\u7684\u7ed1\u5b9a\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u9636\u6bb5")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u8d4b\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u5f15\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u5176\u4ed6\u4ee3\u7801")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u56de\u6536\u9636\u6bb5")),(0,r.kt)("p",null,"\u6267\u884c\u5b8c\u6bd5\u51fa\u6808\uff0c\u7b49\u5f85\u88ab\u865a\u62df\u673a\u56de\u6536"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"execution-context-lifecycle.png",src:n(28088).Z})),(0,r.kt)("h3",{id:"\u6267\u884c\u4e0a\u4e0b\u6587\u7c7b\u578b"},"\u6267\u884c\u4e0a\u4e0b\u6587\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u4e2d\u6709\u4e09\u79cd\u6267\u884c\u4e0a\u4e0b\u6587\u7c7b\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(global)")),(0,r.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u4efb\u4f55\u4e0d\u5728\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\u90fd\u5728\u5168\u5c40\u4e0a\u4e0b\u6587\u4e2d\u3002\u5b83\u4f1a\u6267\u884c\u4e24\u4ef6\u4e8b\uff1a\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," \u5bf9\u8c61\uff08\u6d4f\u89c8\u5668\u7684\u60c5\u51b5\u4e0b\uff09\uff0c\u5e76\u4e14\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u7684\u503c\u7b49\u4e8e\u8fd9\u4e2a\u5168\u5c40\u5bf9\u8c61\u3002\u4e00\u4e2a\u7a0b\u5e8f\u4e2d\u53ea\u4f1a\u6709\u4e00\u4e2a\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(function)")),(0,r.kt)("p",{parentName:"li"},"\u6bcf\u5f53\u4e00\u4e2a\u51fd\u6570\u88ab\u8c03\u7528\u65f6, \u90fd\u4f1a\u4e3a\u8be5\u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4e0a\u4e0b\u6587\u3002\u6bcf\u4e2a\u51fd\u6570\u90fd\u6709\u5b83\u81ea\u5df1\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u4e0d\u8fc7\u662f\u5728\u51fd\u6570\u88ab\u8c03\u7528\u65f6\u521b\u5efa\u7684\u3002\u51fd\u6570\u4e0a\u4e0b\u6587\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u5f53\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u88ab\u521b\u5efa\uff0c\u5b83\u4f1a\u6309\u5b9a\u4e49\u7684\u987a\u5e8f\u6267\u884c\u4e00\u7cfb\u5217\u6b65\u9aa4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Eval \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(Eval)")),(0,r.kt)("p",{parentName:"li"},"\u6267\u884c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"eval"),"\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\u4e5f\u4f1a\u6709\u5b83\u5c5e\u4e8e\u81ea\u5df1\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u3002"))),(0,r.kt)("h2",{id:"\u6267\u884c\u4e0a\u4e0b\u6587\u6808-execution-context-stack-or-ecs"},"\u6267\u884c\u4e0a\u4e0b\u6587\u6808 (Execution Context Stack or ECS)"),(0,r.kt)("p",null,"\u4e5f\u79f0",(0,r.kt)("strong",{parentName:"p"},"\u8c03\u7528\u6808"),", \u662f\u4e00\u79cd\u62e5\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"LIFO(\u540e\u8fdb\u5148\u51fa)"),"\u6570\u636e\u7ed3\u6784\u7684\u6808\uff0c\u88ab\u7528\u6765\u5b58\u50a8\u4ee3\u7801\u8fd0\u884c\u65f6\u521b\u5efa\u7684\u6240\u6709",(0,r.kt)("strong",{parentName:"p"},"\u6267\u884c\u4e0a\u4e0b\u6587"),"\u3002 \u5b83\u662f\u4e00\u79cd\u8bb0\u5f55\u4fdd\u5b58\u7ed3\u6784\uff0c\u5141\u8bb8\u6211\u4eec\u6267\u884c\u51fd\u6570\u8c03\u7528\u3002 \u6bcf\u4e2a\u51fd\u6570\u8c03\u7528\u5728\u8c03\u7528\u5806\u6808\u4e0a\u90fd\u8868\u793a\u4e3a\u4e00\u4e2a\u6846\u67b6\u3002 \u8fd9\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u5f15\u64ce\u8ddf\u8e2a\u5df2\u8c03\u7528\u54ea\u4e9b\u51fd\u6570\u4ee5\u53ca\u8c03\u7528\u987a\u5e8f\u7684\u65b9\u5f0f\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"JS"),"\u5f15\u64ce\u4f7f\u7528\u6b64\u4fe1\u606f\u6765\u786e\u4fdd\u51fd\u6570\u8fd4\u56de\u540e\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\u91cd\u65b0\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u7a0b\u5e8f\u9996\u6b21\u5f00\u59cb\u6267\u884c\u65f6\uff0c\u8c03\u7528\u6808\u4e3a\u7a7a\u3002 \u8fdb\u884c\u7b2c\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\u65f6\uff0c\u65b0\u7684\u6846\u67b6\u5c06\u88ab\u63a8\u5230\u8c03\u7528\u5806\u6808\u7684\u9876\u90e8\u3002 \u5f53\u8be5\u51fd\u6570\u8fd4\u56de\u65f6\uff0c\u5176\u6846\u67b6\u4ece\u8c03\u7528\u5806\u6808\u5f39\u51fa\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"call-stack.gif",src:n(79255).Z})),(0,r.kt)("h2",{id:"\u53d8\u91cf\u5bf9\u8c61-variable-objectvo"},"\u53d8\u91cf\u5bf9\u8c61 (Variable object\uff0cVO)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Every execution context has associated with it a variable object. Variables and functions declared in the source text are added as properties of the variable object. For function code, parameters are added as properties of the variable object."),(0,r.kt)("p",{parentName:"blockquote"},"--- ",(0,r.kt)("a",{parentName:"p",href:"http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf"},"Standard ECMA-262 3r d Edition - December 1999 - 10.1.3 Variable Instantiation"))),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u90fd\u4f1a\u5206\u914d\u4e00\u4e2a\u53d8\u91cf\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"(variable object)"),"\uff0c\u53d8\u91cf\u5bf9\u8c61\u7684\u5c5e\u6027\u7531 ",(0,r.kt)("strong",{parentName:"p"},"\u53d8\u91cf"),(0,r.kt)("inlineCode",{parentName:"p"},"(variable)")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570\u58f0\u660e"),(0,r.kt)("inlineCode",{parentName:"p"},"(function declaration)")," \u6784\u6210\u3002\u5728\u51fd\u6570\u4e0a\u4e0b\u6587\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u5217\u8868"),(0,r.kt)("inlineCode",{parentName:"p"},"(parameter list)"),"\u4e5f\u4f1a\u88ab\u52a0\u5165\u5230\u53d8\u91cf\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"(variable object)"),"\u4e2d\u4f5c\u4e3a\u5c5e\u6027\u3002\u53d8\u91cf\u5bf9\u8c61\u4e0e\u5f53\u524d\u4f5c\u7528\u57df\u606f\u606f\u76f8\u5173\u3002\u4e0d\u540c\u4f5c\u7528\u57df\u7684\u53d8\u91cf\u5bf9\u8c61\u4e92\u4e0d\u76f8\u540c\uff0c\u5b83\u4fdd\u5b58\u4e86\u5f53\u524d\u4f5c\u7528\u57df\u7684\u6240\u6709\u51fd\u6570\u548c\u53d8\u91cf\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VO"),"\u521d\u59cb\u5316\u9636\u6bb5\u4f1a\u5c06\ud83d\udc47\ud83d\udc47\ud83d\udc47\u5185\u5bb9\u4f9d\u6b21\u521d\u59cb\u5316\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"VO"),"\u4e0a\uff0c\u4e0e\ud83d\udc46\ud83d\udc46\ud83d\udc46",(0,r.kt)("a",{parentName:"p",href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"},"\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u751f\u547d\u5468\u671f"),"\u521b\u5efa\u8fc7\u7a0b\u4e00\u81f4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u5f62\u53c2 ",(0,r.kt)("inlineCode",{parentName:"li"},"(function arguments)")),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u58f0\u660e",(0,r.kt)("inlineCode",{parentName:"li"},"(FunctionDeclaration, FD)"),"\uff0c\u6ce8\u610f\u51fd\u6570\u58f0\u660e\u4e0e",(0,r.kt)("strong",{parentName:"li"},"\u51fd\u6570\u8868\u8fbe\u5f0f"),"\u7684\u533a\u522b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u58f0\u660e ",(0,r.kt)("inlineCode",{parentName:"li"},"(var, VariableDeclaration)"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," \u51fd\u6570\u58f0\u660e\u5148\u4e8e\u53d8\u91cf\u58f0\u660e"),(0,r.kt)("h2",{id:"\u6d3b\u52a8\u5bf9\u8c61-activation-objectao"},"\u6d3b\u52a8\u5bf9\u8c61 (Activation object\uff0cAO)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When control enters an execution context for function code, an object called the activation object is created and associated with the execution context. The activation object is initialised with a property with name arguments and attributes { DontDelete }. The initial value of this property is the arguments object described below."),(0,r.kt)("p",{parentName:"blockquote"},"The activation object is then used as the variable object for the purposes of variable instantiation."),(0,r.kt)("p",{parentName:"blockquote"},"--- ",(0,r.kt)("a",{parentName:"p",href:"http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf"},"Standard ECMA-262 3r d Edition - December 1999 - 10.1.6 Activation Object"))),(0,r.kt)("p",null,"\u5f53\u63a7\u5236\u8fdb\u5165\u51fd\u6570\u4ee3\u7801\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u65f6\uff0c\u521b\u5efa\u4e00\u4e2a\u6d3b\u52a8\u5bf9\u8c61\u5e76\u5c06\u5b83\u4e0e\u8be5\u6267\u884c\u4e0a\u4e0b\u6587\u76f8\u5173\u8054\uff0c \u5e76\u4f7f\u7528\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"arguments"),"\u3001\u7279\u5f81\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"{ DontDelete }")," \u7684\u5c5e\u6027\u521d\u59cb\u5316\u8be5\u5bf9\u8c61\u3002\u8be5\u5c5e\u6027\u7684\u521d\u59cb\u503c\u662f\u7a0d\u540e\u5c06\u8981\u63cf\u8ff0\u7684\u4e00\u4e2a\u53c2\u6570\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments Object(\u7b80\u79f0ArgO)"),"\u3002 \u6d3b\u52a8\u5bf9\u8c61\u7eaf\u7cb9\u662f\u4e00\u79cd\u89c4\u8303\u6027\u673a\u5236\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ECMAScript")," \u8bbf\u95ee\u5b83\u662f\u4e0d\u53ef\u80fd\u7684\u3002\u53ea\u80fd\u8bbf\u95ee\u5176\u6210\u5458\u800c\u975e\u8be5\u6d3b\u52a8\u5bf9\u8c61\u672c\u8eab\u3002\u5bf9\u4e00\u4e2a\u57fa\u4e8e\u5bf9\u8c61\u4e3a\u6d3b\u52a8\u5bf9\u8c61\u7684\u5f15\u7528\u503c\u5e94\u7528\u8c03\u7528\u8fd0\u7b97\u7b26\u65f6\uff0c\u8fd9\u6b21\u8c03\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"}," null"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f53\u51fd\u6570\u88ab\u6fc0\u6d3b\uff0c\u90a3\u4e48\u4e00\u4e2a\u6d3b\u52a8\u5bf9\u8c61(activation object)\u5c31\u4f1a\u88ab\u521b\u5efa\u5e76\u4e14\u5206\u914d\u7ed9\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u6d3b\u52a8\u5bf9\u8c61\u7531\u7279\u6b8a\u5bf9\u8c61 arguments \u521d\u59cb\u5316\u800c\u6210\u3002\u968f\u540e\uff0c\u5b83\u88ab\u5f53\u505a\u53d8\u91cf\u5bf9\u8c61(variable object)\u7528\u4e8e\u53d8\u91cf\u521d\u59cb\u5316\u3002")),(0,r.kt)("h2",{id:"\u4e3e\u4e2a"},"\u4e3e\u4e2a\ud83c\udf30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var name = 'Rain';\n\nfunction getName(firstName) {\n    var lastName = 120;\n  \n    var test = function func() {};\n\n    function realName() {\n        var goal = 10;\n        return firstName + lastName;\n    }\n\n    return realName();\n}\n\nvar realName = getName(name);\n\nalert(realName);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," \u5148\u5728\u521b\u5efa\u9636\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"VO")," \u518d\u5230\u6fc0\u6d3b\u9636\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"AO")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Global EC")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"VO = {\n  scopChain\uff1a {...},\n  variableObject: {\n    window: global object,\n    this: undefined,\n    name: undefined,\n    getName: fn() reference address,\n    realName: fn() reference address,\n  },\n  activationObject: {\n    window: global object,\n    name: 'Rain',\n    getName: fn() reference address,\n    realName: fn() reference address,\n  },\n  this: window\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getName EC ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"VO = {\n    scopChain\uff1a {...},\n    variableObject: {\n        arguments: { 0: undefined, length: 1 }\n        lastName: undefined,\n        test: fn() reference address,\n        realName: fn() reference address,\n        firstName: undefined,\n   },\n   activationObject: {\n        arguments: { 0: 'Rain', length: 1 }\n        lastName: '120',\n        test: fn() reference address,\n        realName: fn() reference address,\n        firstName: 'Rain',\n   },\n   this: window\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"realName EC ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"EC = {\n    scopChain\uff1a {...},\n    variableObject: {\n        arguments: { length: 0 }\n        goal: undefined,\n    },\n    activationObject: {\n        arguments: { length: 0 }\n        goal: 10,\n   },\n   this: window\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vo-ao.gif",src:n(47978).Z})),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("h3",{id:"\u53d8\u91cf\u63d0\u5347"},"\u53d8\u91cf\u63d0\u5347"),(0,r.kt)("h3",{id:"this-\u6307\u5411"},(0,r.kt)("inlineCode",{parentName:"h3"},"this")," \u6307\u5411"),(0,r.kt)("p",null,"\u66f4\u5bf9\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/study-notes/fe/javascript/key-concept/this"},"Javascript this")),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0"},"Understanding Execution Context and Execution Stack in Javascript")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-2-lexical-environments-ecmascript-implementation/"},"Lexical environments: ECMAScript implementation")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.ecma-international.org/ecma-262/5.1/#sec-10.3"},"Execution Contexts")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#execution-context-stack"},"execution context stack")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://dmitrysoshnikov.com/ecmascript/chapter-2-variable-object/"},"ecmascript variable object")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://dmitrysoshnikov.com/ecmascript/javascript-the-core/"},"javascriptthe core")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Call_stack"},"\u8c03\u7528\u6808")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.zcfy.cc/article/javascript-engine-fundamentals-shapes-and-inline-caches"},"JavaScript \u5f15\u64ce\u57fa\u672c\u539f\u7406\uff1aShapes \u548c Inline Caches")))}k.isMDXComponent=!0},79255:function(e,t,n){t.Z=n.p+"assets/images/call-stack-00e456877d8b641f895ab57e3da7f6cc.gif"},28088:function(e,t,n){t.Z=n.p+"assets/images/execution-context-lifecycle-543da4b02a80464980f77fbd929f7d8a.png"},47978:function(e,t,n){t.Z=n.p+"assets/images/vo-ao-fd07d6c7ef05d61d8a8a47b9e17081d3.gif"}}]);