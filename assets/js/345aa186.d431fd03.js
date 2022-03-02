"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1931],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35820:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],i={sidebar_position:2},p="Loader \u914d\u7f6e",s={unversionedId:"webpack/loader/config",id:"webpack/loader/config",title:"Loader \u914d\u7f6e",description:"\u914d\u7f6e",source:"@site/engineering/webpack/loader/config.md",sourceDirName:"webpack/loader",slug:"/webpack/loader/config",permalink:"/study-notes/engineering/webpack/loader/config",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646190597,formattedLastUpdatedAt:"3/2/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"\u90a3\u4e9b\u6709\u5173\u4e8eLoader\u7684\u77e5\u8bc6",permalink:"/study-notes/engineering/webpack/loader/base"},next:{title:"Loader \u79cd\u7c7b",permalink:"/study-notes/engineering/webpack/loader/category"}},d=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:3},{value:"\u5185\u8054\u914d\u7f6e Loader",id:"\u5185\u8054\u914d\u7f6e-loader",children:[],level:3},{value:"Cli \u914d\u7f6e Loader",id:"cli-\u914d\u7f6e-loader",children:[],level:3}],c={toc:d};function u(e){var n=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loader-\u914d\u7f6e"},"Loader \u914d\u7f6e"),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u7684\u914d\u7f6e\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          {\n            loader: 'style-loader',\n          },\n          {\n            loader: 'css-loader',\n          },\n        ],\n      },\n    ],\n  },\n};\n")),(0,o.kt)("h3",{id:"\u5185\u8054\u914d\u7f6e-loader"},"\u5185\u8054\u914d\u7f6e Loader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import '!style-loader!css-loader!less-loader?name=Rain120!./styles.less';\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u5185\u8054\u5f15\u5165\u6a21\u5757\u76f8\u5f53\u4e8e\u5982\u4e0b\u914d\u7f6e ",(0,o.kt)("strong",{parentName:"p"},"(\u5185\u90e8\u6267\u884c\u8f6c\u6362\u8fc7\u7684rule\u914d\u7f6e)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // ...\n  module: {\n    // ...\n    rules: [\n      {\n        test: /\\.less$/,\n        use: [\n          {\n            loader: 'style-loader',\n            options: {},\n          },\n          {\n            loader: 'css-loader',\n            options: {},\n          },\n          {\n            loader: 'less-loader',\n          },\n        ],\n      },\n    ],\n  },\n  // ...\n};\n")),(0,o.kt)("p",null,"\u518d\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import '-!my-loader!my-loader2!./styles.css';\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u8bed\u53e5\u5728\u6267\u884c\u65f6\u4f1a\u88ab\u8f6c\u6362\u6210\u53f3\u8fb9\u914d\u7f6e\u8fdb\u884c\u6267\u884c\u3002"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1a\u6b64\u5904\u5e76\u4e0d\u4f1a\u6539\u53d8\u9884\u8bbe\u914d\u7f6e\uff0c\u800c\u662f\u5728\u6267\u884c\u65f6\u8f6c\u6362\u6210\u53f3\u8fb9\u914d\u7f6e\u3002"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"webpack-loader-transform.png",src:t(106).Z})),(0,o.kt)("p",null,"\u901a\u8fc7\u524d\u7f6e\u6240\u6709\u89c4\u5219\u53ca\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"!"),"\uff0c\u53ef\u4ee5\u5bf9\u5e94\u8986\u76d6\u5230\u914d\u7f6e\u4e2d\u7684\u4efb\u610f ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),", \u66f4\u591a\u53c2\u6570\u8bf7\u5230 ",(0,o.kt)("a",{parentName:"p",href:"#Loader%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99"},"Loader \u5339\u914d\u89c4\u5219")," \u67e5\u770b\u3002"),(0,o.kt)("p",null,"Loader\u53ef\u4ee5\u901a\u8fc7 options \u4f20\u9012\u67e5\u8be2\u53c2\u6570\uff0c\u4f8b\u5982"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n    // ...\n    loader: 'less-loader',\n    // options: '?name=Rain120&age=18',\n    options: {\n        name\uff1a 'Rain120',\n        age: 18\n    }\n}\n")),(0,o.kt)("h3",{id:"cli-\u914d\u7f6e-loader"},"Cli \u914d\u7f6e Loader"),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"CLI")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'\n")),(0,o.kt)("p",null,"\u8fd9\u4f1a\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},".jade")," \u6587\u4ef6\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"jade-loader"),"\uff0c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},".css")," \u6587\u4ef6\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/loaders/style-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"style-loader"))," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/loaders/css-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"css-loader")),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/concepts/loaders/#%E4%BD%BF%E7%94%A8-loader"},"webpack \u4f7f\u7528 Loader")))}u.isMDXComponent=!0},106:function(e,n,t){n.Z=t.p+"assets/images/webpack-loader-transform-93ec84cf0a4e45527b57a6878511b222.png"}}]);