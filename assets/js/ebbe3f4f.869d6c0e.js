"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2561],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),o=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(t),d=r,s=m["".concat(c,".").concat(d)]||m[d]||k[d]||l;return t?a.createElement(s,p(p({ref:n},u),{},{components:t})):a.createElement(s,p({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26e3:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),p=["components"],i={},c="Webpack \u9b54\u6cd5\u6ce8\u91ca(Magic Comments)",o={unversionedId:"webpack/magic-comments",id:"webpack/magic-comments",title:"Webpack \u9b54\u6cd5\u6ce8\u91ca(Magic Comments)",description:"\u524d\u8a00",source:"@site/engineering/webpack/magic-comments.md",sourceDirName:"webpack",slug:"/webpack/magic-comments",permalink:"/study-notes/engineering/webpack/magic-comments",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643793612,formattedLastUpdatedAt:"2/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Webpack \u6253\u5305\u8f93\u51fa\u4ee3\u7801\u90fd\u6709\u4ec0\u4e48\uff1f",permalink:"/study-notes/engineering/webpack/build"},next:{title:"\u4ece\u96f6\u5b9e\u73b0\u4e00\u4e2a Webpack",permalink:"/study-notes/engineering/webpack/mini-webpack"}},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u4ec0\u4e48\u662f\u9b54\u6cd5\u6ce8\u91ca\uff1f",id:"\u4ec0\u4e48\u662f\u9b54\u6cd5\u6ce8\u91ca",children:[],level:2},{value:"\u5e38\u7528\u7684\u9b54\u672f\u6ce8\u91ca (Magic Comments)",id:"\u5e38\u7528\u7684\u9b54\u672f\u6ce8\u91ca-magic-comments",children:[{value:"webpackChunkName",id:"webpackchunkname",children:[],level:3},{value:"webpackPrefetch",id:"webpackprefetch",children:[],level:3},{value:"webpackPreload",id:"webpackpreload",children:[],level:3},{value:"webpackMode",id:"webpackmode",children:[],level:3},{value:"webpackInclude",id:"webpackinclude",children:[],level:3},{value:"webpackExclude",id:"webpackexclude",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],k={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"webpack-\u9b54\u6cd5\u6ce8\u91camagic-comments"},"Webpack \u9b54\u6cd5\u6ce8\u91ca(Magic Comments)"),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u9b54\u6cd5\u6ce8\u91ca"},"\u4ec0\u4e48\u662f\u9b54\u6cd5\u6ce8\u91ca\uff1f"),(0,l.kt)("p",null,"\u9b54\u672f\u6ce8\u91ca",(0,l.kt)("inlineCode",{parentName:"p"},"(Magic Comments)"),"\u662f\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"Webpack")," \u63d0\u4f9b\u7684\uff0c\u53ef\u4ee5\u4e3a\u4ee3\u7801\u5206\u5272\u670d\u52a1\u7684\u4e00\u79cd\u6280\u672f\u3002\u901a\u8fc7\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u5173\u952e\u5b57\u540e\u7684\u62ec\u53f7\u4e2d\u4f7f\u7528\u6307\u5b9a\u6ce8\u91ca\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u4ee3\u7801\u5206\u5272\u540e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk")," \u6709\u66f4\u591a\u7684\u63a7\u5236\u6743\u3002"),(0,l.kt)("h2",{id:"\u5e38\u7528\u7684\u9b54\u672f\u6ce8\u91ca-magic-comments"},"\u5e38\u7528\u7684\u9b54\u672f\u6ce8\u91ca (Magic Comments)"),(0,l.kt)("h3",{id:"webpackchunkname"},"webpackChunkName"),(0,l.kt)("p",null,"\u751f\u6210\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"chunk")," \u7684\u540d\u79f0\u3002\u53ef\u4ee5\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"index"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"request"),"\u53d8\u91cf\u4e00\u8d77\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u53c2\u6570\u5217\u8868: ",(0,l.kt)("inlineCode",{parentName:"p"},"path"),"(\u76f8\u5bf9\u8def\u5f84)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"index"),"\u5728\u5f53\u524d",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u6001\u5bfc\u5165"),"\u58f0\u660e\u4e2d\u8868\u793a\u6587\u4ef6\u7684\u7d22\u5f15"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"request"),"\u8868\u793a\u5bfc\u5165\u6587\u4ef6\u7684\u52a8\u6001\u90e8\u5206\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackChunkName: \"lodash-es\" */ 'lodash');\n// \u8f93\u51fa\u65b0\u7684chunk\u540d\u5b57\u4e3alodash-es.js\n")),(0,l.kt)("h3",{id:"webpackprefetch"},"webpackPrefetch"),(0,l.kt)("p",null,"\u63d0\u5347\u52a0\u8f7d\u901f\u5ea6, \u8d44\u6e90\u9884\u62c9\u53d6\uff0c\u53ef\u80fd\u5728\u540e\u7eed\u88ab\u7528\u5230\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"prefect"),"\u4f1a\u4e0e\u7236",(0,l.kt)("inlineCode",{parentName:"p"}," chunk"),"\u5e76\u884c\uff0c\u5728\u6d4f\u89c8\u5668\u7a7a\u95f2\u65f6\u95f4",(0,l.kt)("inlineCode",{parentName:"p"},"(idle)"),"\u88ab\u4e0b\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackPrefetch: true */ 'module1')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack 4.6.0+")," "),(0,l.kt)("h3",{id:"webpackpreload"},"webpackPreload"),(0,l.kt)("p",null,"\u63d0\u5347\u52a0\u8f7d\u901f\u5ea6, \u8d44\u6e90\u9884\u52a0\u8f7d\uff0c\u53ef\u80fd\u5728\u5728\u5f53\u524d\u88ab\u7528\u5230\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"preload"),"\u4f1a\u4e0e\u7236",(0,l.kt)("inlineCode",{parentName:"p"}," chunk"),"\u5e76\u884c\uff0c\u7acb\u5373\u88ab\u4e0b\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import(/* webpackPreload: true */ 'module2')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack 4.6.0+")," "),(0,l.kt)("h3",{id:"webpackmode"},"webpackMode"),(0,l.kt)("p",null,"\u6307\u5b9a\u4ee5\u4e0d\u540c\u7684\u6a21\u5f0f\u89e3\u6790\u52a8\u6001\u5bfc\u5165\u3002"),(0,l.kt)("p",null,"\u53c2\u6570\u5217\u8868:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lazy"),": \u9ed8\u8ba4, \u751f\u6210\u4e00\u4e2a\u53ef\u5ef6\u8fdf\u52a0\u8f7d ",(0,l.kt)("inlineCode",{parentName:"li"},"(lazy-loadable) chunk"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lazy-once"),": \u751f\u6210\u4e00\u4e2a\u53ef\u4ee5\u6ee1\u8db3\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"import()")," \u8c03\u7528\u7684\u5355\u4e2a\u53ef\u5ef6\u8fdf\u52a0\u8f7d ",(0,l.kt)("inlineCode",{parentName:"li"},"(lazy-loadable) chunk"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eager"),": \u4e0d\u4f1a\u751f\u6210\u989d\u5916\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk"),"\uff0c\u6240\u6709\u6a21\u5757\u90fd\u88ab\u5f53\u524d ",(0,l.kt)("inlineCode",{parentName:"li"},"chunk")," \u5f15\u5165\uff0c\u5e76\u4e14\u6ca1\u6709\u989d\u5916\u7684\u7f51\u7edc\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weak"),": \u5c1d\u8bd5\u52a0\u8f7d\u6a21\u5757\uff0c\u5982\u679c\u8be5\u6a21\u5757\u51fd\u6570\u5df2\u7ecf\u4ee5\u5176\u4ed6\u65b9\u5f0f\u52a0\u8f7d",(0,l.kt)("inlineCode",{parentName:"li"},"(\u5373\uff0c\u53e6\u4e00\u4e2a chunk \u5bfc\u5165\u8fc7\u6b64\u6a21\u5757\uff0c\u6216\u5305\u542b\u6a21\u5757\u7684\u811a\u672c\u88ab\u52a0\u8f7d)"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import(/* webpackMode: \"lazy\" */ 'module3');\n")),(0,l.kt)("h3",{id:"webpackinclude"},"webpackInclude"),(0,l.kt)("p",null,"\u4efb\u4f55\u5339\u914d\u5230\u7684\u6587\u4ef6\u90fd\u5c06\u88ab\u6253\u5305\u8fdb\u6765\u3002"),(0,l.kt)("p",null,"\u53c2\u6570\u5217\u8868: \u6b63\u5219\u8868\u8fbe\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import(/* webpackInclude: /\\.json$/ */ 'module4');\n")),(0,l.kt)("h3",{id:"webpackexclude"},"webpackExclude"),(0,l.kt)("p",null,"\u8fc7\u6ee4\u4e0d\u53ef\u88ab\u5bfc\u5165\u7684\u6587\u4ef6\u3002\u4efb\u4f55\u5339\u914d\u5230\u7684\u6587\u4ef6\u90fd\u4e0d\u4f1a\u88ab\u6253\u5305\u8fdb\u6765\u3002"),(0,l.kt)("p",null,"\u53c2\u6570\u5217\u8868: \u6b63\u5219\u8868\u8fbe\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import(/* webpackExclude: /\\.noimport\\.json$/ */ 'module5');\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/module-methods/#magic-comments"},"magic-comments")))}m.isMDXComponent=!0}}]);