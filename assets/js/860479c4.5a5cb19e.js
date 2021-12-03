"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8261],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=a,N=k["".concat(p,".").concat(c)]||k[c]||s[c]||l;return n?i.createElement(N,r(r({ref:t},m),{},{components:n})):i.createElement(N,r({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var i=n(87462),a=n(63366),l=(n(67294),n(3905)),r=["components"],o={},p="\u83b7\u53d6DOM\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8",d={unversionedId:"javascript/notes/get-dom-property",id:"javascript/notes/get-dom-property",isDocsHomePage:!1,title:"\u83b7\u53d6DOM\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8",description:"\u7f18\u7531",source:"@site/fe/javascript/notes/get-dom-property.md",sourceDirName:"javascript/notes",slug:"/javascript/notes/get-dom-property",permalink:"/study-notes/fe/javascript/notes/get-dom-property",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"\u6d45\u8c08\u524d\u7aef\u4e8b\u4ef6\u9a71\u52a8\u548c\u6570\u636e\u9a71\u52a8",permalink:"/study-notes/fe/javascript/notes/event-driven-vs-data-driven"},next:{title:"console\u5168\u5bb6\u6876",permalink:"/study-notes/fe/javascript/notes/console/console-related-note"}},m=[{value:"\u7f18\u7531",id:"\u7f18\u7531",children:[],level:2},{value:"1. <code>DOM</code>",id:"1-dom",children:[{value:"<strong>Scroll\u5bb6\u65cf</strong>",id:"scroll\u5bb6\u65cf",children:[],level:3},{value:"<strong>Client\u5bb6\u65cf</strong>",id:"client\u5bb6\u65cf",children:[],level:3},{value:"<strong>Offset\u5bb6\u65cf</strong>",id:"offset\u5bb6\u65cf",children:[],level:3}],level:2}],s={toc:m};function k(e){var t=e.components,o=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u83b7\u53d6dom\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8"},"\u83b7\u53d6DOM\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8"),(0,l.kt)("h2",{id:"\u7f18\u7531"},"\u7f18\u7531"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"CSS"),"\u4e2d\uff0c\u6bcf\u4e00\u4e2a\u5143\u7d20\u90fd\u662f\u4e00\u4e2a\u76d2\u5b50\uff0c\u90fd\u6709\u7740\u63cf\u8ff0\u76d2\u5b50\u5927\u5c0f\u548c\u4f4d\u7f6e\u7684\u76f8\u5173\u5c5e\u6027\u3002\u6bd4\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"position: trbl(top, right, bottom, left)"),"\u3002\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u6765\u83b7\u53d6\u5b83\u4eec\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8\u5173\u7cfb\uff0c\u8fd9\u7bc7\u7b14\u8bb0\u5c31\u662f\u8bb0\u5f55\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e0d\u778e",(0,l.kt)("inlineCode",{parentName:"p"},"BB"),"\u4e86, \u6211\u4eec\u76f4\u63a5\u8fdb\u5165\u6b63\u9898\u3002"),(0,l.kt)("h2",{id:"1-dom"},"1. ",(0,l.kt)("inlineCode",{parentName:"h2"},"DOM")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dom-size-position",src:n(23221).Z})),(0,l.kt)("p",null,"\u67e5\u770b\u5404\u6d4f\u89c8\u5668\u7248\u672c\u662f\u5426\u517c\u5bb9\u5c5e\u6027: ",(0,l.kt)("a",{parentName:"p",href:"https://caniuse.com/"},"Can I Use")),(0,l.kt)("h3",{id:"scroll\u5bb6\u65cf"},(0,l.kt)("strong",{parentName:"h3"},"Scroll\u5bb6\u65cf")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"scroll-position-1",src:n(60334).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"scroll-position-2",src:n(63269).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scroll"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrollHeight"),": \u53ea\u8bfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"\u8868\u793a\u5143\u7d20\u7684\u6eda\u52a8\u89c6\u56fe\u9ad8\u5ea6, \u5305\u62ec\u7531\u4e8e\u6ea2\u51fa\u800c\u65e0\u6cd5\u5c55\u793a\u5728\u7f51\u9875\u7684\u4e0d\u53ef\u89c1\u90e8\u5206\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrollHeight")," >= ",(0,l.kt)("inlineCode",{parentName:"li"},"clientHeight")),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6eda\u52a8\u6761\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"scrollHeight")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"clientHeight")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"height")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-top"),"+ ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-bottom")),(0,l.kt)("li",{parentName:"ul"},"\u6709\u6c34\u5e73\u6eda\u52a8\u6761\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"scrollHeight")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"clientHeight")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"horizontal scroll bar")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"height")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-top"),"+ ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-bottom")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"horizontal scroll bar")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrollWidth"),": \u53ea\u8bfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"\u8868\u793a\u5143\u7d20\u7684\u6eda\u52a8\u89c6\u56fe\u5bbd\u5ea6, \u5305\u62ec\u7531\u4e8e\u6ea2\u51fa\u800c\u65e0\u6cd5\u5c55\u793a\u5728\u7f51\u9875\u7684\u4e0d\u53ef\u89c1\u90e8\u5206\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrollWidth")," >= ",(0,l.kt)("inlineCode",{parentName:"li"},"clientWidth")),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6eda\u52a8\u6761\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"scrollWidth")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"clientWidth")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"width")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-left"),"+ ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-right")),(0,l.kt)("li",{parentName:"ul"},"\u6709\u5782\u76f4\u6eda\u52a8\u6761\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"scrollWidth")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"clientWidth")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"vertical scroll bar")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"width")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-left"),"+ ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-right")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"vertical scroll bar")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrollTop"),": \u53ef\u8bfb\u53ef\u5199",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"\u8868\u793a\u8be5\u5143\u7d20\u7eb5\u5411\u6eda\u52a8\u6761\u8ddd\u79bb"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scrollLeft")," : \u53ef\u8bfb\u53ef\u5199",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"\u8868\u793a\u8be5\u5143\u7d20\u6a2a\u5411\u6eda\u52a8\u6761\u8ddd\u79bb\u6700\u5de6\u7684\u4f4d\u79fb.")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"getBoundingClientRect()"),": \u8fd4\u56de\u5143\u7d20\u7684\u5927\u5c0f\u53ca\u5176\u76f8\u5bf9\u4e8e\u89c6\u53e3\u7684\u4f4d\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"getBoundingClientRect-trbl",src:n(66018).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5224\u5b9a\u5143\u7d20\u662f\u5426\u6eda\u52a8\u5230\u5e95")),(0,l.kt)("p",null,"\u5982\u679c\u5143\u7d20\u6eda\u52a8\u5230\u5e95\uff0c\u4e0b\u9762\u7b49\u5f0f\u8fd4\u56detrue\uff0c\u6ca1\u6709\u5219\u8fd4\u56defalse."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"element.scrollHeight - element.scrollTop === element.clientHeight\n")),(0,l.kt)("p",null,"\u5f53\u5bb9\u5668\u4e0d\u6eda\u52a8\u4f46\u6709\u6ea2\u51fa\u7684\u5b50\u5bb9\u5668\u65f6\uff0c\u8fd9\u4e9b\u68c0\u67e5\u53ef\u4ee5\u786e\u5b9a\u5bb9\u5668\u80fd\u5426\u6eda\u52a8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"window.getComputedStyle(element).overflowY === 'visible' window.getComputedStyle(element).overflowY !== 'hidden'\n")),(0,l.kt)("h3",{id:"client\u5bb6\u65cf"},(0,l.kt)("strong",{parentName:"h3"},"Client\u5bb6\u65cf")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"client-position",src:n(32538).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"client"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientHeight"),": \u53ea\u8bfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"\u8868\u793a\u5185\u90e8\u76f8\u5bf9\u4e8e\u5916\u5c42\u5143\u7d20\u7684\u9ad8\u5ea6."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientHeight")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"height")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-top")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-bottom")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"horizontal scroll bar"),"(?)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientWidth"),": \u53ea\u8bfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"\u8868\u793a\u8be5\u5143\u7d20\u5b83\u5185\u90e8\u7684\u5bbd\u5ea6."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientWidth")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"width")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-left")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-right")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"vertical scroll bar"),"(?)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientTop"),": \u53ea\u8bfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"\u8868\u793a\u8be5\u5143\u7d20\u8ddd\u79bb\u5b83\u4e0a\u8fb9\u754c\u7684\u9ad8\u5ea6."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientTop")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"border-top")," + \u4e0a\u8fb9\u7684\u6eda\u52a8\u6761\u5927\u5c0f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientLeft"),": \u53ea\u8bfb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Number"),"\u8868\u793a\u8be5\u5143\u7d20\u8ddd\u79bb\u5b83\u5de6\u8fb9\u754c\u7684\u5bbd\u5ea6."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clientLeft")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"border-left")," + \u5de6\u8fb9 \u7684\u6eda\u52a8\u6761\u5927\u5c0f")))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Note"),": (?) \u662f\u5426\u5b58\u5728"),(0,l.kt)("h3",{id:"offset\u5bb6\u65cf"},(0,l.kt)("strong",{parentName:"h3"},"Offset\u5bb6\u65cf")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dom-offset",src:n(61222).Z})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"#content {\n  width: 300px;\n  height: 200px;\n  border: 25px;\n  padding: 20px;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"window-scroll",src:n(77576).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"offset")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetHeight"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"double"),", \u9ad8\u5ea6\u5305\u542b\u8be5\u5143\u7d20\u7684\u5782\u76f4\u5185\u8fb9\u8ddd(",(0,l.kt)("inlineCode",{parentName:"li"},"padding-top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-bottom"),")\u548c\u8fb9\u6846(",(0,l.kt)("inlineCode",{parentName:"li"},"border-top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"border-bottom"),")\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetHeight")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"height")," (\u542b\u6eda\u52a8\u6761\u5bbd\u5ea6)+ ",(0,l.kt)("inlineCode",{parentName:"li"},"border-top")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"border-bottom")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-top")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-bottom"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetWidth"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"double"),", \u9ad8\u5ea6\u5305\u542b\u8be5\u5143\u7d20\u7684\u6c34\u5e73\u5185\u8fb9\u8ddd(",(0,l.kt)("inlineCode",{parentName:"li"},"padding-left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-right"),")\u548c\u8fb9\u6846(",(0,l.kt)("inlineCode",{parentName:"li"},"border-left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"border-right"),")\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetWidth")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"width")," (\u542b\u6eda\u52a8\u6761\u5bbd\u5ea6)+ ",(0,l.kt)("inlineCode",{parentName:"li"},"border-left")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"border-right")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-left")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"padding-right"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetTop"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"double"),",\u5f53\u524d\u5143\u7d20",(0,l.kt)("inlineCode",{parentName:"li"},"border"),"\u9876\u90e8\u8ddd\u79bb\u7236\u5143\u7d20\u9876\u90e8\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"li"},"body"),"\u5143\u7d20",(0,l.kt)("inlineCode",{parentName:"li"},"border"),"\u9876\u90e8\u7684\u8ddd\u79bb\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetTop")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"marginTop?")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"paddingTop?")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"top"),"(\u5148\u627e\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"offsetParent"),")"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetLeft"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"double"),", \u5f53\u524d\u5143\u7d20\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"border"),"\u5de6\u8fb9\u8ddd\u79bb\u7236\u5143\u7d20",(0,l.kt)("inlineCode",{parentName:"li"},"border"),"\u5de6\u8fb9\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"li"},"body"),"\u5143\u7d20",(0,l.kt)("inlineCode",{parentName:"li"},"border"),"\u5de6\u8fb9\u7684\u8ddd\u79bb\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetLeft")," = ",(0,l.kt)("inlineCode",{parentName:"li"},"marginLeft?")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"paddingLeft?")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),"(\u5148\u627e\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"offsetParent"),")"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"offsetParent"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"HTMLElement"),", \u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u6700\u8fd1\u7684(",(0,l.kt)("inlineCode",{parentName:"li"},"closest"),"\uff0c\u6307\u5305\u542b\u5c42\u7ea7\u4e0a\u7684\u6700\u8fd1), \u5305\u542b\u8be5\u5143\u7d20\u7684\u5b9a\u4f4d\u5143\u7d20\uff0c\u5982\u679c\u6ca1\u6709\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"body"),"\u5143\u7d20\u3002\u5f53\u5143\u7d20\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"style.display")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"none")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"offsetParent")," \u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"\u3002(\u4e0e\u5f53\u524d\u5143\u7d20\u6700\u8fd1\u7684\u7ecf\u8fc7\u5b9a\u4f4d(",(0,l.kt)("inlineCode",{parentName:"li"},"position"),"\u4e0d\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"static"),")\u7684\u7236\u7ea7\u5143\u7d20)")))),(0,l.kt)("p",{parentName:"li"},"\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"offsetParent"),"\u60c5\u51b5\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"1\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"position: fixed")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"offsetParent = null")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"fix-position-dom",src:n(39838).Z})),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"display-none-offsetParent",src:n(32847).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2 \u7236\u5143\u7d20\u662f\u6839\u636e\u5176\u7236\u5143\u7d20\u5b9a\u4f4d\u540e\u5143\u7d20\uff0c\u5f53\u524d\u5143\u7d20\u65e0\u5b9a\u4f4d -> ",(0,l.kt)("inlineCode",{parentName:"p"},"offsetParent = current parent dom")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"parent-position-dom",src:n(80256).Z})),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"parent-position-offsetParent",src:n(15816).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"3 \u7236\u5143\u7d20\u662f\u65e0\u5b9a\u4f4d\u540e\u5143\u7d20\uff0c\u5f53\u524d\u5143\u7d20\u65e0\u5b9a\u4f4d  -> ",(0,l.kt)("inlineCode",{parentName:"p"},"offsetParent = <body></body>")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"parent-none-position-dom",src:n(59489).Z})),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"parent-none-position-offsetParent",src:n(82127).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"4  ",(0,l.kt)("inlineCode",{parentName:"p"},"display: none")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"offsetParent = null")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"display-none-dom",src:n(66992).Z})),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"display-none-offsetParent",src:n(32847).Z}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"5  ",(0,l.kt)("inlineCode",{parentName:"p"},"<body></body>"),"\u5143\u7d20 -> ",(0,l.kt)("inlineCode",{parentName:"p"},"offsetParent = null")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"body-offsetParent",src:n(77103).Z})))),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1\u3001\u9700\u8981\u8003\u8651\u76d2\u6a21\u578b\uff0c\u5373",(0,l.kt)("inlineCode",{parentName:"li"},"box-sizing"),"\u5c5e\u6027\u5bf9\u5143\u7d20\u7684\u5f71\u54cd\uff1b"),(0,l.kt)("li",{parentName:"ul"},"2\u3001\u9700\u8981\u8003\u8651\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"overflow"),"\u6216\u8005\u5185\u5bb9\u6491\u5f00\u51fa\u73b0\u7684\u6eda\u52a8\u6761\uff1b"),(0,l.kt)("li",{parentName:"ul"},"3\u3001\u6709\u4e9b\u9ad8\u5ea6\u662f\u6709\u5185\u5bb9\u81ea\u52a8\u6491\u5f00\u7684\uff0c\u5373\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"li"},"width"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"height"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"auto"),"\u3002")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u5143\u7d20\u4f4d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function getPosition(el) {\n\xa0\xa0var _x = 0;\n\xa0\xa0var _y = 0;\n\xa0\n\xa0\xa0while (el) {\n\xa0\xa0\xa0\xa0if (el.tagName.toUpperCase() == "BODY") {\n\xa0\xa0\xa0\xa0\xa0\xa0// deal with browser quirks with body/window/document and page scroll\n\xa0\xa0\xa0\xa0\xa0\xa0var xScroll = el.scrollLeft || document.documentElement.scrollLeft;\n\xa0\xa0\xa0\xa0\xa0\xa0var yScroll = el.scrollTop || document.documentElement.scrollTop;\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0_x += (el.offsetLeft - xScroll + el.clientLeft);\n\xa0\xa0\xa0\xa0\xa0\xa0_y += (el.offsetTop - yScroll + el.clientTop);\n\xa0\xa0\xa0\xa0} else {\n\xa0\xa0\xa0\xa0\xa0\xa0// for all other non-BODY elements\n\xa0\xa0\xa0\xa0\xa0\xa0_x += (el.offsetLeft - el.scrollLeft + el.clientLeft);\n\xa0\xa0\xa0\xa0\xa0\xa0_y += (el.offsetTop - el.scrollTop + el.clientTop);\n\xa0\xa0\xa0\xa0}\n\xa0\n\xa0\xa0\xa0\xa0el = el.offsetParent;\n\xa0\xa0}\n\xa0\xa0return {\n\xa0\xa0\xa0\xa0x: _x,\n\xa0\xa0\xa0\xa0y: _y\n\xa0\xa0};\n}\n\n/ deal with the page getting resized or scrolled\nwindow.addEventListener("scroll", updatePosition, false);\nwindow.addEventListener("resize", updatePosition, false);\n\nfunction updatePosition() {\n  // add your code to update the position when your browser\n  // is resized or scrolled\n  var position = getPosition(myElement);\n}\n')),(0,l.kt)("p",null,"\u53c2\u8003\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element"},"MDN - Element")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.w3cplus.com/javascript/get-element-position-and-size-using-javascript.html"},"DOM\u7cfb\u5217\uff1a\u83b7\u53d6\u5143\u7d20\u4f4d\u7f6e\u548c\u5c3a\u5bf8")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.w3cplus.com/javascript/offset-scroll-client.html"},"JavaScript\u5b66\u4e60\u7b14\u8bb0\uff1a\u89c6\u53e3\u5bbd\u9ad8\u3001\u4f4d\u7f6e\u4e0e\u6eda\u52a8\u9ad8\u5ea6")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.kirupa.com/html5/get_element_position_using_javascript.htm"},"Get an Element's Position Using JavaScript")))}k.isMDXComponent=!0},77103:function(e,t,n){t.Z=n.p+"assets/images/body-offsetParent-683dd022fd8daa873fb36ee300ccf789.png"},32538:function(e,t,n){t.Z=n.p+"assets/images/client-position-1d2d1314b66500cd93973ec7894c7eca.png"},66992:function(e,t,n){t.Z=n.p+"assets/images/display-none-dom-be5978925d4411c1936f162add3ecf56.png"},32847:function(e,t,n){t.Z=n.p+"assets/images/display-none-offsetParent-cea372c693c67377a9cfd13c7b453a35.png"},61222:function(e,t,n){t.Z=n.p+"assets/images/dom-offset-d9db7b18faccaddca4b3d70f33b9e534.png"},23221:function(e,t,n){t.Z=n.p+"assets/images/dom-size-position-33fc46e0aa8c0571984f50c3e8ecaa47.png"},39838:function(e,t,n){t.Z=n.p+"assets/images/fix-position-dom-fb41ba1f9a3cccf09457d7a9e2f751ab.png"},66018:function(e,t,n){t.Z=n.p+"assets/images/getBoundingClientRect-trbl-115746273b5051d4a372e75d49ccccb4.png"},59489:function(e,t,n){t.Z=n.p+"assets/images/parent-none-position-dom-b91c7981189602c8f9add497d6232dc9.png"},82127:function(e,t,n){t.Z=n.p+"assets/images/parent-none-position-offsetParent-946928e608d647c7876d560f91b592ae.png"},80256:function(e,t,n){t.Z=n.p+"assets/images/parent-position-dom-d1ecbee683fee349395316fc54066891.png"},15816:function(e,t,n){t.Z=n.p+"assets/images/parent-position-offsetParent-a2c7c907cf4f8db62e84eae4c8d3db6e.png"},60334:function(e,t,n){t.Z=n.p+"assets/images/scroll-position-1-b15c3e4ef62e7b178c32d2fdd7e2722f.png"},63269:function(e,t,n){t.Z=n.p+"assets/images/scroll-position-2-afe996b7cab560ec6e8b965265213645.png"},77576:function(e,t,n){t.Z=n.p+"assets/images/window-scroll-31a1c3825eda81b6e9d70fb9fa73fe27.png"}}]);