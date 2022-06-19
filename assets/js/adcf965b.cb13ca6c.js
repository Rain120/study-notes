"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5217],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(45443),r=n(13010),i=(n(59496),n(49613)),l=["components"],o={},c="var let const function \u751f\u547d\u5468\u671f",p={unversionedId:"javascript/key-concept/var-let-const-function-lifecycle",id:"javascript/key-concept/var-let-const-function-lifecycle",title:"var let const function \u751f\u547d\u5468\u671f",description:"\u524d\u8a00",source:"@site/fe/javascript/key-concept/var-let-const-function-lifecycle.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/var-let-const-function-lifecycle",permalink:"/study-notes/fe/javascript/key-concept/var-let-const-function-lifecycle",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638522136,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"\u503c\u7c7b\u578b vs \u5f15\u7528\u7c7b\u578b",permalink:"/study-notes/fe/javascript/key-concept/values-vs-reference"},next:{title:"JavaScript \u5e38\u89c1\u8fd0\u7b97\u7b26",permalink:"/study-notes/fe/javascript/notes/common-operator"}},s={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"var\u53d8\u91cf\u751f\u547d\u5468\u671f",id:"var\u53d8\u91cf\u751f\u547d\u5468\u671f",level:2},{value:"let \u53d8\u91cf\u751f\u547d\u5468\u671f",id:"let-\u53d8\u91cf\u751f\u547d\u5468\u671f",level:2},{value:"const \u53d8\u91cf\u751f\u547d\u5468\u671f",id:"const-\u53d8\u91cf\u751f\u547d\u5468\u671f",level:2},{value:"function \u58f0\u660e\u751f\u547d\u5468\u671f",id:"function-\u58f0\u660e\u751f\u547d\u5468\u671f",level:2},{value:"\u56db\u79cd\u58f0\u660e\u65b9\u5f0f",id:"\u56db\u79cd\u58f0\u660e\u65b9\u5f0f",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],f={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"var-let-const-function-\u751f\u547d\u5468\u671f"},"var let const function \u751f\u547d\u5468\u671f"),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0c\u5f53",(0,i.kt)("inlineCode",{parentName:"p"},"Javascript"),"\u5f15\u64ce\u4f7f\u7528\u53d8\u91cf\u65f6\uff0c\u751f\u547d\u5468\u671f\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u9636\u6bb5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u58f0\u660e\u9636\u6bb5"),"\u6b63\u5728\u8303\u56f4\u5185\u6ce8\u518c\u53d8\u91cf\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u521d\u59cb\u5316\u9636\u6bb5"),"\u662f\u5206\u914d\u5185\u5b58\u5e76\u4e3a\u4f5c\u7528\u57df\u4e2d\u7684\u53d8\u91cf\u521b\u5efa\u7ed1\u5b9a\u3002\u5728\u6b64\u6b65\u9aa4\u4e2d\uff0c\u53d8\u91cf\u5c06\u4f7f\u7528\u8fdb\u884c\u81ea\u52a8\u521d\u59cb\u5316",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\u5206\u914d(assign)\u9636\u6bb5"),"\u662f\u4e3a\u521d\u59cb\u5316\u53d8\u91cf\u5206\u914d\u4e00\u4e2a\u503c\u3002")),(0,i.kt)("p",null,"\u53d8\u91cf\u5728\u901a\u8fc7\u58f0\u660e\u9636\u6bb5\u65f6\u5df2",(0,i.kt)("strong",{parentName:"p"},"\u5904\u4e8e\u7edf\u4e00"),"\u72b6\u6001\uff0c\u4f46\u5c1a\u672a\u8fbe\u5230",(0,i.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316"),"\u72b6\u6001\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"variable-lifecycle.png",src:n(61524).Z,width:"524",height:"424"})),(0,i.kt)("p",null,"\u5373: ",(0,i.kt)("strong",{parentName:"p"},"\u58f0\u660e\u9636\u6bb5"),"\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u9636\u6bb5"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u8d4b\u503c\u9636\u6bb5"),"\u3002"),(0,i.kt)("h2",{id:"var\u53d8\u91cf\u751f\u547d\u5468\u671f"},"var\u53d8\u91cf\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"var-variable-lifecycle.png",src:n(43747).Z,width:"862",height:"573"})),(0,i.kt)("p",null,"\u5728\u6267\u884c\u4efb\u4f55\u8bed\u53e5\u4e4b\u524d\uff0c\u53d8\u91cf\u5728\u4f5c\u7528\u57df\u7684\u5f00\u5934\u901a\u8fc7",(0,i.kt)("strong",{parentName:"p"},"\u58f0\u660e\u9636\u6bb5"),"\u5e76\u7acb\u5373",(0,i.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u9636\u6bb5"),"\uff08\u6b65\u9aa41\uff09\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"var variable"),"\u8bed\u53e5\u5728\u51fd\u6570\u4f5c\u7528\u57df\u4e2d\u7684\u4f4d\u7f6e\u4e0d\u5f71\u54cd\u58f0\u660e\u548c\u521d\u59cb\u5316\u9636\u6bb5\u3002"),(0,i.kt)("p",null,"\u5728\u58f0\u660e\u548c\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u4f46\u662f\u5728\u8d4b\u503c\u9636\u6bb5\u4e4b\u524d\uff0c\u8be5\u53d8\u91cf\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\u503c\u5e76\u4e14\u53ef\u4ee5\u88ab\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u8d4b\u503c\u9636\u6bb5")," ",(0,i.kt)("inlineCode",{parentName:"p"},"variable = 'value'"),"\uff0c\u53d8\u91cf\u5c06\u63a5\u6536\u5176\u521d\u59cb\u503c\uff08\u6b65\u9aa42\uff09\u3002"),(0,i.kt)("p",null,"\u4e25\u683c",(0,i.kt)("strong",{parentName:"p"},"\u63d0\u5347"),(0,i.kt)("inlineCode",{parentName:"p"},"(\u5c06\u53d8\u91cf\u6216\u51fd\u6570\u5b9a\u4e49\u79fb\u52a8\u5230\u4f5c\u7528\u57df\u5934\u90e8\u7684\u8fc7\u7a0b)"),"\u7684\u601d\u60f3\u662f\uff0c\u5728\u51fd\u6570\u4f5c\u7528\u57df\u7684",(0,i.kt)("strong",{parentName:"p"},"\u5f00\u59cb\u5904\u58f0\u660e\u548c\u521d\u59cb\u5316")," \u53d8\u91cf\u3002\u58f0\u660e\u548c\u521d\u59cb\u5316\u9636\u6bb5\u4e4b\u95f4\u6ca1\u6709\u5dee\u8ddd\u3002"),(0,i.kt)("h2",{id:"let-\u53d8\u91cf\u751f\u547d\u5468\u671f"},"let \u53d8\u91cf\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"let"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"var"),"\u7684\u533a\u522b\u5728\u4e8e\u58f0\u660e\u548c\u521d\u59cb\u5316\u9636\u6bb5\u662f",(0,i.kt)("strong",{parentName:"p"},"\u5206\u5f00\u7684"),"\u3002\u53d8\u91cf\u5728\u58f0\u660e\u540e\uff0c\u521d\u59cb\u5316\u4e4b\u95f4\uff0c\u4f1a\u5b58\u653e\u5728\u4e00\u4e2a\u6682\u5b58\u6b7b\u533a\u4e4b\u4e2d\u3002"),(0,i.kt)("p",null,"\u90a3\u4ec0\u4e48\u662f",(0,i.kt)("strong",{parentName:"p"},"\u6682\u65f6\u6b7b\u533a"),"\u5462\uff1f\u6709\u4ec0\u4e48\u4f5c\u7528\u5462\uff1f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b9a\u4e49:")," \u5728\u76f8\u540c\u7684\u51fd\u6570\u6216\u5757\u4f5c\u7528\u57df\u5185\u91cd\u65b0\u58f0\u660e\u540c\u4e00\u4e2a\u53d8\u91cf\u4f1a\u5f15\u53d1",(0,i.kt)("inlineCode",{parentName:"p"},"SyntaxError"),"; \u4e5f\u79f0 ",(0,i.kt)("inlineCode",{parentName:"p"},"TDZ(Temporal dead zone)"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f5c\u7528:")," \u5728\u58f0\u660e\u53d8\u91cf\u6216\u5e38\u91cf\u4e4b\u524d\u4f7f\u7528\u5b83, \u4f1a\u5f15\u53d1",(0,i.kt)("inlineCode",{parentName:"p"},"ReferenceError"),"\uff0c\u5373\u4e0d\u80fd\u5728\u521d\u59cb\u5316\u4e4b\u524d\uff0c\u4f7f\u7528\u53d8\u91cf\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"let-variable-lifecycle.png",src:n(93656).Z,width:"894",height:"800"})),(0,i.kt)("h2",{id:"const-\u53d8\u91cf\u751f\u547d\u5468\u671f"},"const \u53d8\u91cf\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"const-variable-lifecycle.png",src:n(48481).Z,width:"852",height:"303"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"const-variable-test.png",src:n(18729).Z,width:"1356",height:"302"})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"const"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"class")," \u7c7b\u578b\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"let"),"\u5177\u6709\u76f8\u540c\u7684\u751f\u547d\u5468\u671f\uff0c\u53ea\u662f\u5206\u914d\u53ea\u80fd\u53d1\u751f\u4e00\u6b21",(0,i.kt)("inlineCode",{parentName:"p"},"(\u58f0\u660e\u65f6\u5019\u5fc5\u987b\u521d\u59cb\u5316)"),"\u3002"),(0,i.kt)("h2",{id:"function-\u58f0\u660e\u751f\u547d\u5468\u671f"},"function \u58f0\u660e\u751f\u547d\u5468\u671f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"function-declarations-lifecycle.png",src:n(2493).Z,width:"852",height:"441"})),(0,i.kt)("p",null,"\u5728\u5b9a\u4e49\u51fd\u6570\u65f6\uff0c\u58f0\u660e\u3001\u521d\u59cb\u5316\u548c\u8d4b\u503c\u9636\u6bb5\u540c\u65f6\u53d1\u751f\uff0c\u6240\u4ee5\u53ef\u4ee5\u5728\u4f5c\u7528\u57df\u5185\u7684\u4efb\u4f55\u5730\u65b9\u8c03\u7528\u51fd\u6570\uff0c\u5373\u51fd\u6570\u53d8\u91cf\u4f1a",(0,i.kt)("strong",{parentName:"p"},"\u63d0\u5347"),"\u3002"),(0,i.kt)("h2",{id:"\u56db\u79cd\u58f0\u660e\u65b9\u5f0f"},"\u56db\u79cd\u58f0\u660e\u65b9\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"variable-status.jpg",src:n(47115).Z,width:"1440",height:"785"})),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dmitripavlutin.com/variables-lifecycle-and-why-let-is-not-hoisted"},"variables-lifecycle-and-why-let-is-not-hoisted")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/how-to-declare-variables-javascript/"},"Quick Tip: How to Declare Variables in JavaScript")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/28140450"},"\u6211\u7528\u4e86\u4e24\u4e2a\u6708\u7684\u65f6\u95f4\u624d\u7406\u89e3 let")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6"},"are-variables-declared-with-let-or-const-not-hoisted-in-es6")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/getify/You-Dont-Know-JS/issues/767"},"let hoisting")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dmitripavlutin.com/variables-lifecycle-and-why-let-is-not-hoisted"},"variables-lifecycle-and-why-let-is-not-hoisted")))}d.isMDXComponent=!0},48481:function(e,t,n){t.Z=n.p+"assets/images/const-variable-lifecycle-00b94b0a4fd9579b6dc67e11b2329127.png"},18729:function(e,t,n){t.Z=n.p+"assets/images/const-variable-test-d904e68f24180cfaecfcf011c7324dc2.png"},2493:function(e,t,n){t.Z=n.p+"assets/images/function-declarations-lifecycle-a06b573c6d7d46db357144ff44479d4c.png"},93656:function(e,t,n){t.Z=n.p+"assets/images/let-variable-lifecycle-312accd76fe9310e1b1672398476b724.png"},43747:function(e,t,n){t.Z=n.p+"assets/images/var-variable-lifecycle-840a3a403a38ccd33a552e46f1a8bbe5.png"},61524:function(e,t,n){t.Z=n.p+"assets/images/variable-lifecycle-954057e65bebaafd865fe47725e160bc.png"},47115:function(e,t,n){t.Z=n.p+"assets/images/variable-status-f5c3c5ef4e7188ca7bd3e4c1146e20d5.jpg"}}]);