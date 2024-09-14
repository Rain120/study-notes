"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8121],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(o,".").concat(k)]||d[k]||u[k]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26687:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});n(59496);var r=n(49613);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={},p="\u4ece\u8f93\u5165URL \u5230\u663e\u793a\u9875\u9762",o={unversionedId:"javascript/key-concept/url-to-page",id:"javascript/key-concept/url-to-page",title:"\u4ece\u8f93\u5165URL \u5230\u663e\u793a\u9875\u9762",description:"TL;DR",source:"@site/fe/javascript/key-concept/url-to-page.mdx",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/url-to-page",permalink:"/study-notes/fe/javascript/key-concept/url-to-page",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643793612,formattedLastUpdatedAt:"Feb 2, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"this",permalink:"/study-notes/fe/javascript/key-concept/this"},next:{title:"\u503c\u7c7b\u578b vs \u5f15\u7528\u7c7b\u578b",permalink:"/study-notes/fe/javascript/key-concept/values-vs-reference"}},c={},s=[{value:"TL;DR",id:"tldr",level:2},{value:"\u524d\u7f6e\u77e5\u8bc6",id:"\u524d\u7f6e\u77e5\u8bc6",level:3},{value:"DNS \u89e3\u6790",id:"dns-\u89e3\u6790",level:2},{value:"\u4e09\u6b21\u63e1\u624b",id:"\u4e09\u6b21\u63e1\u624b",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u4e09\u6b21\u63e1\u624b",id:"\u4e3a\u4ec0\u4e48\u8981\u4e09\u6b21\u63e1\u624b",level:3},{value:"\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42",id:"\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42",level:2},{value:"\u670d\u52a1\u5668\u54cd\u5e94\u8d44\u6e90",id:"\u670d\u52a1\u5668\u54cd\u5e94\u8d44\u6e90",level:2},{value:"\u6d4f\u89c8\u5668\u89e3\u6790\u5e76\u6e32\u67d3\u9875\u9762",id:"\u6d4f\u89c8\u5668\u89e3\u6790\u5e76\u6e32\u67d3\u9875\u9762",level:2},{value:"\u56db\u6b21\u6325\u624b",id:"\u56db\u6b21\u6325\u624b",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u56db\u6b21\u6325\u624b\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u56db\u6b21\u6325\u624b",level:3},{value:"\u72b6\u6001\u8f6c\u6362",id:"\u72b6\u6001\u8f6c\u6362",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:s};function d(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u4ece\u8f93\u5165url-\u5230\u663e\u793a\u9875\u9762"}),"\u4ece\u8f93\u5165URL \u5230\u663e\u793a\u9875\u9762"),(0,r.kt)("h2",a({},{id:"tldr"}),"TL;DR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DNS")," \u57df\u540d\u89e3\u6790"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP"),"\u4e09\u6b21\u63e1\u624b, ",(0,r.kt)("inlineCode",{parentName:"li"},"TCP")," \u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u54cd\u5e94\u8d44\u6e90"),(0,r.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u89e3\u6790\u5e76\u6e32\u67d3\u9875\u9762"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HTTP")," \u56db\u6b21\u6325\u624b, \u65ad\u5f00\u8fde\u63a5")),(0,r.kt)("h3",a({},{id:"\u524d\u7f6e\u77e5\u8bc6"}),"\u524d\u7f6e\u77e5\u8bc6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e8f\u5217\u53f7",(0,r.kt)("inlineCode",{parentName:"strong"},"seq"),"\uff1a")," \u7528\u6765\u6807\u8bb0\u6570\u636e\u6bb5\u7684\u987a\u5e8f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"TCP"),"\u628a\u8fde\u63a5\u4e2d\u53d1\u9001\u7684\u6240\u6709\u6570\u636e\u5b57\u8282\u90fd\u7f16\u4e0a\u4e00\u4e2a\u5e8f\u53f7\uff0c\u7b2c\u4e00\u4e2a\u5b57\u8282\u7684\u7f16\u53f7\u7531\u672c\u5730\u968f\u673a\u4ea7\u751f\uff1b\u7ed9\u5b57\u8282\u7f16\u4e0a\u5e8f\u53f7\u540e\uff0c\u5c31\u7ed9\u6bcf\u4e00\u4e2a\u62a5\u6587\u6bb5\u6307\u6d3e\u4e00\u4e2a\u5e8f\u53f7\uff1b\u5e8f\u5217\u53f7",(0,r.kt)("inlineCode",{parentName:"p"},"seq"),"\u5c31\u662f\u8fd9\u4e2a\u62a5\u6587\u6bb5\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5b57\u8282\u7684\u6570\u636e\u7f16\u53f7\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u786e\u8ba4\u53f7",(0,r.kt)("inlineCode",{parentName:"strong"},"ack"),"\uff1a")," \u671f\u5f85\u6536\u5230\u5bf9\u65b9\u4e0b\u4e00\u4e2a\u62a5\u6587\u6bb5\u7684\u7b2c\u4e00\u4e2a\u6570\u636e\u5b57\u8282\u7684\u5e8f\u53f7\uff1b\u5e8f\u5217\u53f7\u8868\u793a\u62a5\u6587\u6bb5\u643a\u5e26\u6570\u636e\u7684\u7b2c\u4e00\u4e2a\u5b57\u8282\u7684\u7f16\u53f7\uff1b\u800c\u786e\u8ba4\u53f7\u6307\u7684\u662f\u671f\u671b\u63a5\u6536\u5230\u4e0b\u4e00\u4e2a\u5b57\u8282\u7684\u7f16\u53f7\uff1b\u56e0\u6b64\u5f53\u524d\u62a5\u6587\u6bb5\u6700\u540e\u4e00\u4e2a\u5b57\u8282\u7684\u7f16\u53f7+1\u5373\u4e3a\u786e\u8ba4\u53f7\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u786e\u8ba4",(0,r.kt)("inlineCode",{parentName:"strong"},"ACK"),"\uff1a")," \u4ec5\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"ACK=1"),"\u65f6\uff0c\u786e\u8ba4\u53f7\u5b57\u6bb5\u624d\u6709\u6548\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"ACK=0"),"\u65f6\uff0c\u786e\u8ba4\u53f7\u65e0\u6548"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u540c\u6b65",(0,r.kt)("inlineCode",{parentName:"strong"},"SYN"),"\uff1a")," \u8fde\u63a5\u5efa\u7acb\u65f6\u7528\u4e8e\u540c\u6b65\u5e8f\u53f7\u3002\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"SYN=1"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ACK=0"),"\u65f6\u8868\u793a\uff1a\u8fd9\u662f\u4e00\u4e2a\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u3002\u82e5\u540c\u610f\u8fde\u63a5\uff0c\u5219\u5728\u54cd\u5e94\u62a5\u6587\u6bb5\u4e2d\u4f7f\u5f97",(0,r.kt)("inlineCode",{parentName:"p"},"SYN=1"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ACK=1"),"\u3002\u56e0\u6b64\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"SYN=1"),"\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u8fde\u63a5\u8bf7\u6c42\uff0c\u6216\u8fde\u63a5\u63a5\u53d7\u62a5\u6587\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"SYN"),"\u8fd9\u4e2a\u6807\u5fd7\u4f4d\u53ea\u6709\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"TCP"),"\u5efa\u4ea7\u8fde\u63a5\u65f6\u624d\u4f1a\u88ab\u7f6e1\uff0c\u63e1\u624b\u5b8c\u6210\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"SYN"),"\u6807\u5fd7\u4f4d\u88ab\u7f6e0\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ec8\u6b62",(0,r.kt)("inlineCode",{parentName:"strong"},"FIN"),"\uff1a")," \u7528\u6765\u91ca\u653e\u4e00\u4e2a\u8fde\u63a5\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"FIN=1"),"\u8868\u793a\uff1a\u6b64\u62a5\u6587\u6bb5\u7684\u53d1\u9001\u65b9\u7684\u6570\u636e\u5df2\u7ecf\u53d1\u9001\u5b8c\u6bd5\uff0c\u5e76\u8981\u6c42\u91ca\u653e\u8fd0\u8f93\u8fde\u63a5"),(0,r.kt)("h2",a({},{id:"dns-\u89e3\u6790"}),"DNS \u89e3\u6790"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TODO")),(0,r.kt)("h2",a({},{id:"\u4e09\u6b21\u63e1\u624b"}),"\u4e09\u6b21\u63e1\u624b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3-hand.png",src:n(41109).Z,width:"1410",height:"988"})),(0,r.kt)("h3",a({},{id:"\u4e3a\u4ec0\u4e48\u8981\u4e09\u6b21\u63e1\u624b"}),"\u4e3a\u4ec0\u4e48\u8981\u4e09\u6b21\u63e1\u624b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3a\u4e86\u9632\u6b62\u5df2\u5931\u6548\u7684\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u7a81\u7136\u53c8\u4f20\u9001\u5230\u4e86\u670d\u52a1\u7aef\uff0c\u56e0\u800c\u4ea7\u751f\u9519\u8bef\u3002")),(0,r.kt)("p",null,"\u8c22\u5e0c\u4ec1\u300a\u8ba1\u7b97\u673a\u7f51\u7edc\u300b\u4e66\u4e2d\u7684\u4e3e\u4f8b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201c\u5df2\u5931\u6548\u7684\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u201d\u7684\u4ea7\u751f\u5728\u8fd9\u6837\u4e00\u79cd\u60c5\u51b5\u4e0b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\u53d1\u51fa\u7684\u7b2c\u4e00\u4e2a\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u5e76\u6ca1\u6709\u4e22\u5931\uff0c\u800c\u662f\u5728\u67d0\u4e2a\u7f51\u7edc\u7ed3\u70b9\u957f\u65f6\u95f4\u7684\u6ede\u7559\u4e86\uff0c\u4ee5\u81f4\u5ef6\u8bef\u5230\u8fde\u63a5\u91ca\u653e\u4ee5\u540e\u7684\u67d0\u4e2a\u65f6\u95f4\u624d\u5230\u8fbe",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u3002\u672c\u6765\u8fd9\u662f\u4e00\u4e2a\u65e9\u5df2\u5931\u6548\u7684\u62a5\u6587\u6bb5\u3002\u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u6536\u5230\u6b64\u5931\u6548\u7684\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u540e\uff0c\u5c31\u8bef\u8ba4\u4e3a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\u518d\u6b21\u53d1\u51fa\u7684\u4e00\u4e2a\u65b0\u7684\u8fde\u63a5\u8bf7\u6c42\u3002\u4e8e\u662f\u5c31\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\u53d1\u51fa\u786e\u8ba4\u62a5\u6587\u6bb5\uff0c\u540c\u610f\u5efa\u7acb\u8fde\u63a5\u3002\u5047\u8bbe\u4e0d\u91c7\u7528\u201c\u4e09\u6b21\u63e1\u624b\u201d\uff0c\u90a3\u4e48\u53ea\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u53d1\u51fa\u786e\u8ba4\uff0c\u65b0\u7684\u8fde\u63a5\u5c31\u5efa\u7acb\u4e86\u3002\u7531\u4e8e\u73b0\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\u5e76\u6ca1\u6709\u53d1\u51fa\u5efa\u7acb\u8fde\u63a5\u7684\u8bf7\u6c42\uff0c\u56e0\u6b64\u4e0d\u4f1a\u7406\u776c",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u7684\u786e\u8ba4\uff0c\u4e5f\u4e0d\u4f1a\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u53d1\u9001\u6570\u636e\u3002\u4f46",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u5374\u4ee5\u4e3a\u65b0\u7684\u8fd0\u8f93\u8fde\u63a5\u5df2\u7ecf\u5efa\u7acb\uff0c\u5e76\u4e00\u76f4\u7b49\u5f85",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\u53d1\u6765\u6570\u636e\u3002\u8fd9\u6837\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u7684\u5f88\u591a\u8d44\u6e90\u5c31\u767d\u767d\u6d6a\u8d39\u6389\u4e86\u3002\u91c7\u7528\u201c\u4e09\u6b21\u63e1\u624b\u201d\u7684\u529e\u6cd5\u53ef\u4ee5\u9632\u6b62\u4e0a\u8ff0\u73b0\u8c61\u53d1\u751f\u3002\u4f8b\u5982\u521a\u624d\u90a3\u79cd\u60c5\u51b5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\u4e0d\u4f1a\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u7684\u786e\u8ba4\u53d1\u51fa\u786e\u8ba4\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"server"),"\u7531\u4e8e\u6536\u4e0d\u5230\u786e\u8ba4\uff0c\u5c31\u77e5\u9053",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\u5e76\u6ca1\u6709\u8981\u6c42\u5efa\u7acb\u8fde\u63a5\u3002\u201d")),(0,r.kt)("p",null,"\u6240\u4ee5\u4e3b\u8981\u76ee\u7684\u9632\u6b62server\u7aef\u4e00\u76f4\u7b49\u5f85\uff0c\u6d6a\u8d39\u8d44\u6e90\u3002"),(0,r.kt)("h2",a({},{id:"\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42"}),"\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TODO")),(0,r.kt)("h2",a({},{id:"\u670d\u52a1\u5668\u54cd\u5e94\u8d44\u6e90"}),"\u670d\u52a1\u5668\u54cd\u5e94\u8d44\u6e90"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TODO")),(0,r.kt)("h2",a({},{id:"\u6d4f\u89c8\u5668\u89e3\u6790\u5e76\u6e32\u67d3\u9875\u9762"}),"\u6d4f\u89c8\u5668\u89e3\u6790\u5e76\u6e32\u67d3\u9875\u9762"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"html-render",src:n(29042).Z,width:"900",height:"352"})),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u7684\u6e32\u67d3\u8fc7\u7a0b\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u51e0\u6b65\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u89e3\u6790",(0,r.kt)("inlineCode",{parentName:"li"},"HTML"),"\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"li"},"DOM"),"\u6811\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u89e3\u6790",(0,r.kt)("inlineCode",{parentName:"li"},"CSS"),"\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"li"},"CSSOM"),"\u89c4\u5219\u6811\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"DOM"),"\u6811\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"CSSOM"),"\u89c4\u5219\u6811\u5408\u6210\u5728\u4e00\u8d77\u751f\u6210\u6e32\u67d3\u6811\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u904d\u5386\u6e32\u67d3\u6811\u5f00\u59cb\u5e03\u5c40\uff0c\u8ba1\u7b97\u6bcf\u4e2a\u8282\u70b9\u7684\u4f4d\u7f6e\u7b49\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u6e32\u67d3\u6811\u6bcf\u4e2a\u8282\u70b9\u7ed8\u5236\u5230\u9875\u9762\u3002")),(0,r.kt)("h2",a({},{id:"\u56db\u6b21\u6325\u624b"}),"\u56db\u6b21\u6325\u624b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3-hand.png",src:n(5423).Z,width:"1410",height:"586"})),(0,r.kt)("h3",a({},{id:"\u4e3a\u4ec0\u4e48\u8981\u56db\u6b21\u6325\u624b"}),"\u4e3a\u4ec0\u4e48\u8981\u56db\u6b21\u6325\u624b\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TCP"),"\u662f\u5168\u53cc\u5de5\u6a21\u5f0f\uff0c\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u5f53\u4e3b\u673a1\u53d1\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"FIN"),"\u62a5\u6587\u6bb5\u65f6\uff0c\u53ea\u662f\u8868\u793a\u4e3b\u673a1\u5df2\u7ecf\u6ca1\u6709\u6570\u636e\u8981\u53d1\u9001\u4e86\uff0c\u4e3b\u673a1\u544a\u8bc9\u4e3b\u673a2\uff0c\u5b83\u7684\u6570\u636e\u5df2\u7ecf\u5168\u90e8\u53d1\u9001\u5b8c\u6bd5\u4e86\uff1b\u4f46\u662f\uff0c\u8fd9\u4e2a\u65f6\u5019\u4e3b\u673a1\u8fd8\u662f\u53ef\u4ee5\u63a5\u53d7\u6765\u81ea\u4e3b\u673a2\u7684\u6570\u636e\uff1b\u5f53\u4e3b\u673a2\u8fd4\u56de",(0,r.kt)("inlineCode",{parentName:"p"},"ACK"),"\u62a5\u6587\u6bb5\u65f6\uff0c\u8868\u793a\u5b83\u5df2\u7ecf\u77e5\u9053\u4e3b\u673a1\u6ca1\u6709\u6570\u636e\u53d1\u9001\u4e86\uff0c\u4f46\u662f\u4e3b\u673a2\u8fd8\u662f\u53ef\u4ee5\u53d1\u9001\u6570\u636e\u5230\u4e3b\u673a1\u7684\uff1b\u5f53\u4e3b\u673a2\u4e5f\u53d1\u9001\u4e86FIN\u62a5\u6587\u6bb5\u65f6\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u8868\u793a\u4e3b\u673a2\u4e5f\u6ca1\u6709\u6570\u636e\u8981\u53d1\u9001\u4e86\uff0c\u5c31\u4f1a\u544a\u8bc9\u4e3b\u673a1\uff0c\u6211\u4e5f\u6ca1\u6709\u6570\u636e\u8981\u53d1\u9001\uff0c\u4e4b\u540e\u5c31\u4f1a\u4e2d\u65ad\u8fd9\u6b21",(0,r.kt)("inlineCode",{parentName:"p"},"TCP"),"\u8fde\u63a5\u3002"),(0,r.kt)("h3",a({},{id:"\u72b6\u6001\u8f6c\u6362"}),"\u72b6\u6001\u8f6c\u6362"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3-hand-4-unshake-status.png",src:n(78941).Z,width:"1656",height:"1296"})),(0,r.kt)("h2",a({},{id:"\u53c2\u8003\u8d44\u6599"}),"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/Performance/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"}),"\u6e32\u67d3\u9875\u9762\uff1a\u6d4f\u89c8\u5668\u7684\u5de5\u4f5c\u539f\u7406")),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.google.com/speed/docs/insights/mobile"}),"\u5728 PageSpeed Insights \u4e2d\u9488\u5bf9\u7f51\u7ad9\u8fdb\u884c\u79fb\u52a8\u8bbe\u5907\u6d4f\u89c8\u4f53\u9a8c\u5206\u6790")),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://www.zhangxinxu.com/wordpress/2010/01/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%EF%BC%9Acss%E6%80%A7%E8%83%BD%E8%AE%A9javascript%E5%8F%98%E6%85%A2%EF%BC%9F/"}),"\u56de\u6d41\u4e0e\u91cd\u7ed8\uff1aCSS\u6027\u80fd\u8ba9JavaScript\u53d8\u6162\uff1f")),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://lotabout.me/2019/TCP-connection-establish-and-termination/"}),"TCP \u4e09\u6b21\u63e1\u624b\u3001\u56db\u6b21\u6325\u624b")),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://www.codingsky.com/doc/2021/12/10/484.html"}),"\u6362\u4e00\u79cd\u98ce\u683c\u7406\u89e3 Chrome \u6d4f\u89c8\u5668\u6e32\u67d3\u5168\u8fc7\u7a0b")))}d.isMDXComponent=!0},78941:function(e,t,n){t.Z=n.p+"assets/images/3-hand-4-unshake-status-041b730cb76cd748bd5897a9f73be133.png"},41109:function(e,t,n){t.Z=n.p+"assets/images/3-hand-4372749e384a4ca55cf067f347e17965.png"},5423:function(e,t,n){t.Z=n.p+"assets/images/4-unshake-9b236210467147cc01530e0c27746ec0.png"},29042:function(e,t,n){t.Z=n.p+"assets/images/html-render-0c088d1ea099c48d77187812aadf8d8c.png"}}]);