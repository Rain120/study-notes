"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1931],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},70736:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={sidebar_position:2},p="Loader \u914d\u7f6e",s={unversionedId:"webpack/loader/config",id:"webpack/loader/config",title:"Loader \u914d\u7f6e",description:"\u914d\u7f6e",source:"@site/engineering/webpack/loader/config.md",sourceDirName:"webpack/loader",slug:"/webpack/loader/config",permalink:"/study-notes/engineering/webpack/loader/config",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1640606278,formattedLastUpdatedAt:"12/27/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"\u90a3\u4e9b\u6709\u5173\u4e8eLoader\u7684\u77e5\u8bc6",permalink:"/study-notes/engineering/webpack/loader/base"},next:{title:"Loader \u79cd\u7c7b",permalink:"/study-notes/engineering/webpack/loader/category"}},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[],level:3},{value:"\u5185\u8054\u914d\u7f6e Loader",id:"\u5185\u8054\u914d\u7f6e-loader",children:[],level:3},{value:"Cli \u914d\u7f6e Loader",id:"cli-\u914d\u7f6e-loader",children:[],level:3}],d={toc:c};function u(e){var n=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loader-\u914d\u7f6e"},"Loader \u914d\u7f6e"),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u7684\u914d\u7f6e\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [\n          {\n            loader: 'style-loader',\n          },\n          {\n            loader: 'css-loader',\n          },\n        ],\n      },\n    ],\n  },\n};\n")),(0,o.kt)("h3",{id:"\u5185\u8054\u914d\u7f6e-loader"},"\u5185\u8054\u914d\u7f6e Loader"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import '!style-loader!css-loader!less-loader?name=Rain120!./styles.less';\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u5185\u8054\u5f15\u5165\u6a21\u5757\u76f8\u5f53\u4e8e\u5982\u4e0b\u914d\u7f6e ",(0,o.kt)("strong",{parentName:"p"},"(\u5185\u90e8\u6267\u884c\u8f6c\u6362\u8fc7\u7684rule\u914d\u7f6e)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // ...\n  module: {\n    // ...\n    rules: [\n      {\n        test: /\\.less$/,\n        use: [\n          {\n            loader: 'style-loader',\n            options: {},\n          },\n          {\n            laoder: 'css-loader',\n            options: {},\n          },\n          {\n            laoder: 'less-loader',\n            options: '?name=Rain120',\n          },\n        ],\n      },\n    ],\n  },\n  // ...\n};\n")),(0,o.kt)("p",null,"\u518d\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import '-!my-loader!my-loader2!./styles.css';\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"inline-loader-process.png",src:t(17317).Z})),(0,o.kt)("p",null,"\u901a\u8fc7\u524d\u7f6e\u6240\u6709\u89c4\u5219\u53ca\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"!"),"\uff0c\u53ef\u4ee5\u5bf9\u5e94\u8986\u76d6\u5230\u914d\u7f6e\u4e2d\u7684\u4efb\u610f ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),", \u66f4\u591a\u53c2\u6570\u8bf7\u5230 ",(0,o.kt)("a",{parentName:"p",href:"#Loader%E5%8C%B9%E9%85%8D%E8%A7%84%E5%88%99"},"Loader \u5339\u914d\u89c4\u5219")," \u67e5\u770b\u3002"),(0,o.kt)("p",null,"\u9009\u9879\u53ef\u4ee5\u4f20\u9012\u67e5\u8be2\u53c2\u6570\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"?key=value&foo=bar"),"\uff0c\u6216\u8005\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," \u5bf9\u8c61\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},'?{"key":"value","foo":"bar"}'),"\u3002"),(0,o.kt)("h3",{id:"cli-\u914d\u7f6e-loader"},"Cli \u914d\u7f6e Loader"),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"CLI")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'\n")),(0,o.kt)("p",null,"\u8fd9\u4f1a\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},".jade")," \u6587\u4ef6\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"jade-loader"),"\uff0c\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},".css")," \u6587\u4ef6\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/loaders/style-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"style-loader"))," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/loaders/css-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"css-loader")),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.webpackjs.com/concepts/loaders/#%E4%BD%BF%E7%94%A8-loader"},"webpack \u4f7f\u7528 Loader")))}u.isMDXComponent=!0},17317:function(e,n,t){n.Z=t.p+"assets/images/inline-loader-process-fc749c095ba05a146e674f9477dfced2.png"}}]);