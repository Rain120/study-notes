"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1889],{49613:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return u}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),N=m(n),u=r,d=N["".concat(o,".").concat(u)]||N[u]||s[u]||p;return n?a.createElement(d,i(i({ref:t},k),{},{components:n})):a.createElement(d,i({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=N;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<p;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},26143:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var a=n(665),r=n(40151),p=(n(59496),n(49613)),i=["components"],l={},o="AST",m={unversionedId:"babel/ast/ast",id:"babel/ast/ast",title:"AST",description:"\u5de5\u5177",source:"@site/fe/babel/ast/ast.md",sourceDirName:"babel/ast",slug:"/babel/ast/",permalink:"/study-notes/fe/babel/ast/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1654655684,formattedLastUpdatedAt:"Jun 8, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Typescript Eslint QA",permalink:"/study-notes/fe/typescript/ts-eslint-qa"},next:{title:"EsTree \u89c4\u8303",permalink:"/study-notes/fe/babel/ast/estree-spec"}},k={},s=[{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"AST\u6b65\u9aa4(I/O)",id:"ast\u6b65\u9aa4io",level:2},{value:"Acron",id:"acron",level:2},{value:"parse(input, options)",id:"parseinput-options",level:3},{value:"parseExpressionAt(input, offset, options)",id:"parseexpressionatinput-offset-options",level:3},{value:"tokenizer(input, options)",id:"tokenizerinput-options",level:3},{value:"Parse\u7c7b",id:"parse\u7c7b",level:3},{value:"EsTree\u89c4\u8303",id:"estree\u89c4\u8303",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],N={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"ast"},"AST"),(0,p.kt)("h2",{id:"\u5de5\u5177"},"\u5de5\u5177"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://astexplorer.net/"},"AST\u5728\u7ebf\u9884\u89c8")),(0,p.kt)("h2",{id:"ast\u6b65\u9aa4io"},"AST\u6b65\u9aa4(I/O)"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"I")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Parse")," -> \u8bed\u6cd5\u5206\u6790"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u8bcd\u6cd5\u5206\u6790",(0,p.kt)("inlineCode",{parentName:"p"},"(Lexical Analysis)")),(0,p.kt)("p",{parentName:"li"},"\u5c06\u6574\u4e2a\u4ee3\u7801\u5b57\u7b26\u4e32\u5206\u5272\u6210\u6700\u5c0f\u8bed\u6cd5\u5355\u5143\u6570\u7ec4\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u8bed\u6cd5\u5206\u6790",(0,p.kt)("inlineCode",{parentName:"p"},"(Syntactic Analysis\uff0c\u4e5f\u79f0 Parsing)")),(0,p.kt)("p",{parentName:"li"},"\u5728\u5206\u8bcd\u57fa\u7840\u4e0a\u5efa\u7acb\u5206\u6790\u8bed\u6cd5\u5355\u5143\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u7ec4\u5408\u5206\u8bcd\u7684\u7ed3\u679c\uff0c\u786e\u5b9a\u8bcd\u8bed\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u786e\u5b9a\u8bcd\u8bed\u6700\u7ec8\u7684\u8868\u8fbe\u542b\u4e49\uff0c\u751f\u6210\u62bd\u8c61\u8bed\u6cd5\u6811\u3002")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"Traverse "),"-> \u904d\u5386")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"O")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Manipulate")," -> \u64cd\u4f5c"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Generate Code")," -> \u751f\u6210\u4ee3\u7801")))),(0,p.kt)("h2",{id:"acron"},"Acron"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/acornjs/acorn"},"acorn")," \u662f\u57fa\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u5f00\u53d1\u7684\u4e00\u4e2a\u5c0f\u578b\u3001\u5feb\u901f\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u89e3\u6790\u5668\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/acornjs/acorn/blob/master/acorn/"},"acorn"),": \u89e3\u6790\u5668"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/acornjs/acorn/blob/master/acorn-loose/"},"acorn-loose"),": \u89e3\u6790\u5668",(0,p.kt)("inlineCode",{parentName:"li"},"(\u5bbd\u677e\u6a21\u5f0f)")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/acornjs/acorn/blob/master/acorn-walk/"},"acorn-walk"),": \u904d\u5386 ",(0,p.kt)("inlineCode",{parentName:"li"},"ast")," \u6811 \u7684 ",(0,p.kt)("inlineCode",{parentName:"li"},"node"))),(0,p.kt)("h3",{id:"parseinput-options"},"parse(input, options)"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/acornjs/acorn/blob/master/acorn/README.md"},"Github acorn \u5b98\u65b9\u82f1\u6587\u6587\u6863")),(0,p.kt)("p",null,"\u8f93\u5165\u53c2\u6570\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32, \u9009\u9879\u5fc5\u987b\u662f\u8bbe\u7f6e\u4ee5\u4e0b\u5217\u51fa\u7684\u4e00\u4e9b\u9009\u9879\u7684\u5bf9\u8c61\u3002\u8fd4\u56de\u503c\u5c06\u662f ",(0,p.kt)("a",{parentName:"p",href:"#EsTree%E8%A7%84%E8%8C%83"},"ESTree \u89c4\u8303")," \u6307\u5b9a\u7684\u62bd\u8c61\u8bed\u6cd5\u6811\u5bf9\u8c61\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'let acorn = require("acorn");\nconsole.log(acorn.parse("1 + 1", {ecmaVersion: 2020}));\n')),(0,p.kt)("p",null,"\u9047\u5230\u8bed\u6cd5\u9519\u8bef\u65f6, \u89e3\u6790\u5668\u5c06\u5f15\u53d1\u5e26\u6709\u6709\u610f\u4e49\u6d88\u606f\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"SyntaxError")," \u5bf9\u8c61\u3002 \u9519\u8bef\u5bf9\u8c61\u5c06\u5177\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"pos")," \u5c5e\u6027, \u8be5\u5c5e\u6027\u6307\u793a\u53d1\u751f\u9519\u8bef\u7684\u5b57\u7b26\u4e32\u504f\u79fb\u91cf, \u4ee5\u53ca\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"loc")," \u5bf9\u8c61, \u5176\u4e2d\u5305\u542b\u5f15\u7528\u540c\u4e00\u4f4d\u7f6e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"{line, column}")," \u5bf9\u8c61\u3002"),(0,p.kt)("p",null,"\u9009\u9879\u7531\u7b2c\u4e8c\u4e2a\u53c2\u6570\u63d0\u4f9b, \u8be5\u53c2\u6570\u5e94\u8be5\u662f\u5305\u542b\u4ee5\u4e0b\u4efb\u4f55\u5b57\u6bb5\u7684\u5bf9\u8c61 ",(0,p.kt)("strong",{parentName:"p"},"(\u4ec5ecmaVersion\u662f\u5fc5\u9700\u7684)"),":"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"options")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"ecmaVersion")," "),(0,p.kt)("p",{parentName:"li"},"\u6307\u5b9a\u8981\u89e3\u6790\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"ECMAScript"),"\u7248\u672c\u3002\u5fc5\u987b\u4e3a3, 5, 6(2015), 7(2016), 8(2017), 9(2018), 10(2019), 11(2020)\u621612(2021, \u90e8\u5206\u652f\u6301)\u6216 ",(0,p.kt)("strong",{parentName:"p"},"\u6700\u65b0"),"(\u8be5\u5e93\u652f\u6301\u7684\u6700\u65b0\u7248\u672c)\u3002 \u8fd9\u4f1a\u5f71\u54cd\u5bf9\u4e25\u683c\u6a21\u5f0f\u7684\u652f\u6301, \u4fdd\u7559\u5b57\u7684\u8bbe\u7f6e\u4ee5\u53ca\u5bf9\u65b0\u8bed\u6cd5\u529f\u80fd\u7684\u652f\u6301\u3002\n",(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Acorn")," \u53ea\u5b9e\u73b0\u4e86 ",(0,p.kt)("em",{parentName:"p"},"\u9636\u6bb54(\u6700\u7ec8\u5b9a\u7a3f)"),"\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"ECMAScript")," \u7279\u6027\u3002\u5176\u4ed6\u63d0\u8bae\u7684\u65b0\u7279\u6027\u5fc5\u987b\u901a\u8fc7\u63d2\u4ef6\u6765\u5b9e\u73b0\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"sourceType")),(0,p.kt)("p",{parentName:"li"}," \u6307\u5b9a\u4ee3\u7801\u5e94\u8be5\u88ab\u89e3\u6790\u7684\u6a21\u5f0f\u3002\u53ef\u4ee5\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"script"),"\u6216",(0,p.kt)("inlineCode",{parentName:"p"},"module"),"\u3002 \u8fd9\u5c06\u5f71\u54cd\u5168\u5c40\u7684\u4e25\u683c\u6a21\u5f0f, \u548c\u89e3\u6790 ",(0,p.kt)("inlineCode",{parentName:"p"},"import")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"export"),"\u7684\u58f0\u660e\u3002"),(0,p.kt)("p",{parentName:"li"}," ",(0,p.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"module"),", \u5373\u4f7f ",(0,p.kt)("inlineCode",{parentName:"p"},"ecmaVersion"),"\u5c0f\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"6"),", \u9759\u6001 ",(0,p.kt)("inlineCode",{parentName:"p"},"import")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"export"),"\u8bed\u6cd5\u4e5f\u5c06\u6709\u6548\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"onInsertedSemicolon")," "),(0,p.kt)("p",{parentName:"li"}," \u5982\u679c\u6709\u56de\u8c03\u51fd\u6570, \u5219\u53ea\u8981\u89e3\u6790\u5668\u63d2\u5165\u4e86\u4e00\u4e2a\u7f3a\u5c11\u7684\u5206\u53f7, \u5c31\u4f1a\u8c03\u7528\u8be5\u56de\u8c03\u51fd\u6570\u3002 \u56de\u8c03\u51fd\u6570\u5c06\u88ab\u8d4b\u4e88\u63d2\u5165\u5206\u53f7\u7684\u70b9\u7684\u5b57\u7b26\u504f\u79fb\u91cf\u4f5c\u4e3a\u53c2\u6570, \u5982\u679c",(0,p.kt)("inlineCode",{parentName:"p"},"locations"),"\u88ab\u8bbe\u7f6e, \u5219\u8868\u793a\u6b64\u4f4d\u7f6e\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"{line, column}")," \u5bf9\u8c61\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"onTrailingComma")," "),(0,p.kt)("p",{parentName:"li"}," \u7c7b\u4f3conInsertedSemicolon`, \u4f46\u662f\u4e3a\u4e86\u8ddf\u8e2a\u9017\u53f7\u63d2\u5165\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"allowReserved"),"  "),(0,p.kt)("p",{parentName:"li"}," \u5982\u679c\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"false"),", \u5219\u4f7f\u7528\u4fdd\u7559\u5b57\u4f1a\u4ea7\u751f\u9519\u8bef\u3002 \u5bf9\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"ecmaVersion 3"),", \u9ed8\u8ba4\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"true"),", \u5bf9\u4e8e\u8f83\u9ad8\u7248\u672c, \u9ed8\u8ba4\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\u3002 \u5f53 ",(0,p.kt)("inlineCode",{parentName:"p"},"value")," \u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"never")," \u65f6, \u4fdd\u7559\u5b57\u548c\u5173\u952e\u5b57\u4e5f\u4e0d\u80fd\u7528\u4f5c\u5c5e\u6027\u540d\u79f0 (\u5982IE\u4f4e\u7248\u672c\u6d4f\u89c8\u5668) ")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"allowReturnOutsideFunction"),"   "),(0,p.kt)("p",{parentName:"li"}," \u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u9876\u5c42\u7684return\u8bed\u53e5\u4f1a\u5f15\u53d1\u9519\u8bef\u3002 \u5c06\u5176\u8bbe\u7f6e\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\u4ee5\u63a5\u53d7\u6b64\u7c7b\u4ee3\u7801\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"allowImportExportEverywhere")," "),(0,p.kt)("p",{parentName:"li"}," \u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u5bfc\u5165\u548c\u5bfc\u51fa\u58f0\u660e\u53ea\u80fd\u663e\u793a\u5728\u7a0b\u5e8f\u7684\u9876\u5c42\u3002 \u5c06\u6b64\u9009\u9879\u8bbe\u7f6e\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\u53ef\u4ee5\u5141\u8bb8\u5728\u5141\u8bb8\u8bed\u53e5\u7684\u4efb\u4f55\u5730\u65b9")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"allowAwaitOutsideFunction")),(0,p.kt)("p",{parentName:"li"}," \u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u7b49\u5f85\u8868\u8fbe\u5f0f\u53ea\u80fd\u51fa\u73b0\u5728\u5f02\u6b65\u51fd\u6570\u4e2d\u3002 \u5c06\u6b64\u9009\u9879\u8bbe\u7f6e\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\u5141\u8bb8\u5177\u6709 ",(0,p.kt)("inlineCode",{parentName:"p"},"top level await"),"\u8868\u8fbe\u5f0f\u3002 \u4e0d\u8fc7, \u975e\u5f02\u6b65",(0,p.kt)("inlineCode",{parentName:"p"},"(no-async)"),"\u529f\u80fd\u4ecd\u4e0d\u5141\u8bb8\u4f7f\u7528\u5b83\u4eec\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"allowHashBang")),(0,p.kt)("p",{parentName:"li"}," \u542f\u7528\u6b64\u529f\u80fd (\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5173\u95ed) , \u5982\u679c\u4ee3\u7801\u4ee5",(0,p.kt)("inlineCode",{parentName:"p"},"#!")," \u5f00\u59cb (\u5982\u5728shellscript\u4e2d) , \u7b2c\u4e00\u884c\u5c06\u88ab\u89c6\u4e3a\u6ce8\u91ca\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"locations")," "),(0,p.kt)("p",{parentName:"li"}," \u5f53\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\u65f6, \u6bcf\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"Node"),"\u90fd\u6709\u4e00\u4e2a\u8fde\u63a5\u8d77\u59cb\u548c\u7ec8\u6b62\u5b50\u5bf9\u8c61\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"loc"),"\u5bf9\u8c61, \u6bcf\u4e2a\u5bf9\u8c61\u5305\u542b",(0,p.kt)("inlineCode",{parentName:"p"},"{line, column"),"}\u5f62\u5f0f\u7684\u4e00\u4e2a\u884c\u53f7\u548c\u5217\u53f7\u3002 \u9ed8\u8ba4\u503c\u4e3afalse\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"onToken"),"  "),(0,p.kt)("p",{parentName:"li"},"   \u5982\u679c\u4e3a\u6b64\u9009\u9879\u4f20\u9012\u4e86\u4e00\u4e2a\u51fd\u6570, \u5219\u6bcf\u4e2a\u53d1\u73b0\u7684token\u5c06\u4ee5\u4e0e\u4ece",(0,p.kt)("inlineCode",{parentName:"p"},"tokenizer() getToken()"),"\u8fd4\u56de\u7684tokens\u76f8\u540c\u7684\u683c\u5f0f\u4f20\u9012\u3002\n\u5982\u679c\u53c2\u6570\u662farray, \u5219\u6bcf\u4e2a\u53d1\u73b0\u7684token\u5c06\u88abpush\u5230array\u4e2d\u3002\n\u6ce8\u610f\u4e0d\u80fd\u4ece\u56de\u8c03\u4e2d\u8c03\u7528\u89e3\u6790\u5668, \u4ece\u800c\u7834\u574f\u5176\u5185\u90e8\u72b6\u6001\u3002\n")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"onComment")," "),(0,p.kt)("p",{parentName:"li"},"\u5982\u679c\u4e3a\u6b64\u9009\u9879\u4f20\u9012\u51fd\u6570, \u6bcf\u5f53\u9047\u5230\u6ce8\u91ca\u65f6, \u5c06\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\u8c03\u7528\u8be5\u51fd\u6570: "),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"block"),": \u5982\u679c\u6ce8\u91ca\u662f\u5757\u6ce8\u91ca, \u5219\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),", \u5982\u679c\u662f\u884c\u6ce8\u91ca, \u5219\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"text"),": \u8bc4\u8bba\u7684\u5185\u5bb9\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"start"),": \u6ce8\u91ca\u5f00\u5934\u7684\u5b57\u7b26\u504f\u79fb\u91cf\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"end"),": \u6ce8\u91ca\u7ed3\u5c3e\u7684\u5b57\u7b26\u504f\u79fb\u91cf\u3002\n\u5f53",(0,p.kt)("inlineCode",{parentName:"p"},"locations"),"\u53c2\u6570\u88ab\u8bbe\u7f6e\u65f6, \u6ce8\u91ca\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u4f4d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"{line, column}")," \u5c06\u4f5c\u4e3a\u4e24\u4e2a\u9644\u52a0\u53c2\u6570\u4f20\u9012\u3002\u5f53\u6b64\u9009\u9879\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"array")," \u65f6, \u6bcf\u4e2a\u6ce8\u91ca\u88ab ",(0,p.kt)("inlineCode",{parentName:"p"},"push")," \u5230\u5b83\u4f5c\u4e3a\u5bf9\u8c61\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"Esprima")," \u683c\u5f0f: "),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Line" | "Block",\n  "value": "comment text",\n  "start": Number,\n  "end": Number,\n  // If `locations` option is on:\n  "loc": {\n    "start": {line: Number, column: Number}\n    "end": {line: Number, column: Number}\n  },\n  // If `ranges` option is on:\n  "range": [Number, Number]\n}\n')))),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f"),", \u60a8\u4e0d\u80fd\u4ece\u56de\u8c03\u51fd\u6570\u4e2d\u8c03\u7528\u89e3\u6790\u5668, \u4ece\u800c\u7834\u574f\u5176\u5185\u90e8\u72b6\u6001\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"ranges")," "),(0,p.kt)("p",{parentName:"li"}," \u8282\u70b9\u7684\u8d77\u59cb\u548c\u7ec8\u6b62\u5b57\u7b26\u504f\u79fb\u8bb0\u5f55\u5728\u8d77\u59cb\u548c\u7ed3\u675f\u5c5e\u6027\u4e2d (\u76f4\u63a5\u5728\u8282\u70b9\u4e0a, \u800c\u4e0d\u662f\u4fdd\u5b58\u884c/\u5217\u6570\u636e\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"loc"),"\u5bf9\u8c61) , \u8fd8\u8981\u6dfb\u52a0\u4e00\u4e2a\u4fdd\u6301",(0,p.kt)("inlineCode",{parentName:"p"},"[start, end]"),"\u6570\u7ec4\u7684",(0,p.kt)("a",{parentName:"p",href:"https://bugzilla.mozilla.org/show_bug.cgi?id=745678"},"\u534a\u6807\u51c6\u5316(semi-standardized)"),"\u8303\u56f4\u5c5e\u6027, \u4f7f\u7528\u76f8\u540c\u7684\u6570\u5b57, \u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"ranges"),"\u8bbe\u7f6e\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"program")," "),(0,p.kt)("p",{parentName:"li"}," \u901a\u8fc7\u89e3\u6790\u7b2c\u4e00\u4e2a\u6587\u4ef6\u751f\u6210\u7684\u6811, \u4f5c\u4e3a\u540e\u7eed\u89e3\u6790\u4e2d\u7684\u7a0b\u5e8f\u9009\u9879\u4f20\u9012\u591a\u4e2a\u6587\u4ef6, \u53ef\u4ee5\u5c06\u591a\u4e2a\u6587\u4ef6\u89e3\u6790\u4e3a\u5355\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"AST"),"\u3002 \u4f1a\u5c06\u5df2\u89e3\u6790\u7684\u6587\u4ef6\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"top level")," \u5f62\u5f0f\u6dfb\u52a0\u5230\u73b0\u6709\u89e3\u6790\u6811\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"Program")," ",(0,p.kt)("strong",{parentName:"p"},"(program\u5373\u9876\u90e8\u8282\u70b9)")," \u8282\u70b9\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"sourceFile")," "),(0,p.kt)("p",{parentName:"li"}," \u5f53",(0,p.kt)("inlineCode",{parentName:"p"},"locations"),"\u9009\u9879\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"\u65f6, \u60a8\u53ef\u4ee5\u4f20\u9012\u6b64\u9009\u9879\u4ee5\u5728\u6bcf\u4e2a\u8282\u70b9\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"loc"),"\u5bf9\u8c61\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u6e90\u5c5e\u6027\u3002 \u8bf7\u6ce8\u610f, \u6b64\u9009\u9879\u7684\u5185\u5bb9\u4e0d\u4ee5\u4efb\u4f55\u65b9\u5f0f\u8fdb\u884c\u68c0\u67e5\u6216\u5904\u7406; \u60a8\u53ef\u4ee5\u968f\u610f\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u4efb\u4f55\u683c\u5f0f\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"directSourceFile")," "),(0,p.kt)("p",{parentName:"li"}," \u7c7b\u4f3c",(0,p.kt)("inlineCode",{parentName:"p"},"sourceFile"),"\u4e00\u6837, \u4f46\u662f\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"sourceFile"),"\u5c5e\u6027\u5c06\u76f4\u63a5\u6dfb\u52a0\u5230\u8282\u70b9, \u800c\u4e0d\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"loc"),"\u5bf9\u8c61\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"preserveParens"),"  "),(0,p.kt)("p",{parentName:"li"}," \u5982\u679c\u6b64\u9009\u9879\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"true"),", \u5219\u62ec\u53f7\u8868\u8fbe\u5f0f\u7531 (\u975e\u6807\u51c6) \u62ec\u53f7\u5316\u8868\u8fbe\u5f0f\u8282\u70b9\u8868\u793a, \u8be5\u8282\u70b9\u5177\u6709\u5305\u542b\u62ec\u53f7\u5185\u7684\u8868\u8fbe\u5f0f\u7684\u5355\u4e2a\u8868\u8fbe\u5f0f\u5c5e\u6027\u3002"))))),(0,p.kt)("h3",{id:"parseexpressionatinput-offset-options"},"parseExpressionAt(input, offset, options)"),(0,p.kt)("p",null,"\u5c06\u89e3\u6790\u5b57\u7b26\u4e32\u4e2d\u7684\u5355\u4e2a\u8868\u8fbe\u5f0f, \u5e76\u8fd4\u56de\u5176",(0,p.kt)("inlineCode",{parentName:"p"},"AST"),"\u3002 \u5982\u679c\u8868\u8fbe\u5f0f\u4e4b\u540e\u8fd8\u6709\u66f4\u591a\u7684\u5b57\u7b26\u4e32, \u4e0d\u4f1a\u53bb\u89e3\u6790\u3002"),(0,p.kt)("h3",{id:"tokenizerinput-options"},"tokenizer(input, options)"),(0,p.kt)("p",null,"\u8fd4\u56de\u5177\u6709",(0,p.kt)("inlineCode",{parentName:"p"},"getToken"),"\u65b9\u6cd5\u7684\u5bf9\u8c61, \u8be5\u65b9\u6cd5\u53ef\u4ee5\u91cd\u590d\u8c03\u7528\u4ee5\u83b7\u53d6\u4e0b\u4e00\u4e2atoken\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"{start, end, type, value}"),"\u5bf9\u8c61 (\u542f\u7528\u4e86",(0,p.kt)("inlineCode",{parentName:"p"},"location"),"\u9009\u9879\u65f6\u6dfb\u52a0\u4e86",(0,p.kt)("inlineCode",{parentName:"p"},"loc"),"\u5c5e\u6027, \u5e76\u4e14\u542f\u7528\u4e86",(0,p.kt)("inlineCode",{parentName:"p"},"ranges"),"\u9009\u9879\u65f6\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"range"),"\u5c5e\u6027) \u3002 \u5f53\u4ee4\u724c\u7684\u7c7b\u578b\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"tokTypes.eof"),"\u65f6, \u60a8\u5e94\u8be5\u505c\u6b62\u8c03\u7528\u8be5\u65b9\u6cd5, \u56e0\u4e3a\u5b83\u5c06\u6c38\u8fdc\u8fd4\u56de\u76f8\u540c\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"token"),"\u3002"),(0,p.kt)("p",null,"\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"ES6"),"\u73af\u5883\u4e2d, \u8fd4\u56de\u7684\u7ed3\u679c\u53ef\u4ee5\u7528\u4f5c\u4efb\u4f55\u5176\u4ed6\u7b26\u5408\u534f\u8bae\u7684\u53ef\u8fed\u4ee3\u9879"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"for (let token of acorn.tokenizer(str)) {\n  // iterate over the tokens\n}\n\n// transform code to array of tokens:\nvar tokens = [...acorn.tokenizer(str)];\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"tokTypes")," \u6709\u4e00\u4e2a\u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"name"),"\u6620\u5c04\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"token object"),"\u7684\u5bf9\u8c61, \u8be5\u5bf9\u8c61\u6700\u7ec8\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"token"),"\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\u4e2d\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"getLineInfo(input, offset)")," \u53ef\u7528\u4e8e\u4e3a\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\u548c\u504f\u79fb\u91cf\u83b7\u53d6",(0,p.kt)("inlineCode",{parentName:"p"},"{line, column}"),"\u5bf9\u8c61\u3002"),(0,p.kt)("h3",{id:"parse\u7c7b"},"Parse\u7c7b"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Parser"),"\u7c7b\u7684\u5b9e\u4f8b\u5305\u542b\u6240\u6709\u9a71\u52a8\u89e3\u6790\u7684\u72b6\u6001\u548c\u903b\u8f91\u3002 \u5b83\u5177\u6709\u9759\u6001\u65b9\u6cd5",(0,p.kt)("inlineCode",{parentName:"p"},"parse"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"parseExpressionAt"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"tokenizer"),", \u5b83\u4eec\u4e0e\u540c\u540d\u7684\u9876\u7ea7\u51fd\u6570\u5339\u914d\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u63d2\u4ef6\u6269\u5c55\u89e3\u6790\u5668\u65f6, \u9700\u8981\u5728\u7c7b\u7684\u6269\u5c55\u7248\u672c\u4e0a\u8c03\u7528\u8fd9\u4e9b\u65b9\u6cd5\u3002 \u8981\u4f7f\u7528\u63d2\u4ef6\u6269\u5c55\u89e3\u6790\u5668, \u53ef\u4ee5\u4f7f\u7528\u5176\u9759\u6001\u6269\u5c55\u65b9\u6cd5\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'var acorn = require("acorn");\nvar jsx = require("acorn-jsx");\nvar JSXParser = acorn.Parser.extend(jsx());\nJSXParser.parse("foo(<bar/>)", {ecmaVersion: 2020});\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"expand")," \u65b9\u6cd5\u91c7\u7528\u4efb\u610f\u6570\u91cf\u7684\u63d2\u4ef6\u503c, \u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"Parser"),"\u7c7b, \u5176\u4e2d\u5305\u62ec\u63d2\u4ef6\u63d0\u4f9b\u7684\u989d\u5916\u7684\u89e3\u6790\u5668\u903b\u8f91\u3002"),(0,p.kt)("h2",{id:"estree\u89c4\u8303"},"EsTree\u89c4\u8303"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/study-notes/fe/babel/ast/estree-spec"},"Here")),(0,p.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=C06MohLG_3s"},"Vedio -> Master the Art of the AST and Take Control of Your JS")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/Rain120/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md"},"Babel \u63d2\u4ef6\u624b\u518c \u4e2d\u6587\u6587\u6863")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://blog.bitsrc.io/build-a-js-interpreter-in-javascript-using-acorn-as-a-parser-5487bb53390c"},"Build a JS Interpreter in JavaScript Using Acorn as a Parser")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lexical_analysis"},"Wiki \u8bcd\u6cd5\u5206\u6790")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90"},"Wiki \u8bed\u6cd5\u5206\u6790")))}u.isMDXComponent=!0}}]);