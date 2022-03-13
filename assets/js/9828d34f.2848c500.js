"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2449],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},68627:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={sidebar_position:3},p="Loader \u79cd\u7c7b",d={unversionedId:"webpack/loader/category",id:"webpack/loader/category",title:"Loader \u79cd\u7c7b",description:"\u5173\u4e8e loader\u7684\u79cd\u7c7b, \u53ef\u4ee5\u901a\u8fc7rule.enforce\u6765\u914d\u7f6e\uff0c\u5982\u4e0b",source:"@site/engineering/webpack/loader/category.md",sourceDirName:"webpack/loader",slug:"/webpack/loader/category",permalink:"/study-notes/engineering/webpack/loader/category",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647177225,formattedLastUpdatedAt:"3/13/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Loader \u914d\u7f6e",permalink:"/study-notes/engineering/webpack/loader/config"},next:{title:"Loader \u6267\u884c",permalink:"/study-notes/engineering/webpack/loader/exec"}},c={},s=[{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loader-\u79cd\u7c7b"},"Loader \u79cd\u7c7b"),(0,o.kt)("p",null,"\u5173\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u7684\u79cd\u7c7b, \u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"rule.enforce"),"\u6765\u914d\u7f6e\uff0c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  // ...\n    module: {\n    // ...\n    // \u4ece\u4e0b\u5f80\u4e0a, css-loader -> style-loader\n    rules: [\n      {\n        test: /\\.css$/,\n        use: {\n          loader: 'style-loader'\n        },\n        enforce:'pre'\n      },\n      {\n        test: /\\.css$/,\n        use: {\n          loader: 'css-loader'\n        }\n      }\n    ]\n  },\n  // ...\n}\n")),(0,o.kt)("p",null,"\u6b64\u65f6\uff0c\u5728\u666e\u901a ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"\u6a21\u5f0f\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader"),"\u5c06\u4f1a\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"style-loader"),"\u4e4b\u540e\u6267\u884c\u3002\u5373\u7531\u4e4b\u524d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader -> style-loader"),"\u53d8\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"style-loader -> css-loader"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rule.enforce"),"\u7684\u53c2\u6570: ",(0,o.kt)("inlineCode",{parentName:"p"},"'pre'")," ",(0,o.kt)("inlineCode",{parentName:"p"},"'post'")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rule.enforce")," \u7684\u53c2\u6570: ",(0,o.kt)("inlineCode",{parentName:"p"},"pre, post")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pre Loader"),": \u524d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"loader"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e: ",(0,o.kt)("inlineCode",{parentName:"li"},"enforce: 'pre'")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"normal Loader"),": \u666e\u901a ",(0,o.kt)("inlineCode",{parentName:"li"},"loader"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e: \u9ed8\u8ba4"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inline Loader"),": \u5185\u8054 ",(0,o.kt)("inlineCode",{parentName:"li"},"loader"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5728\u6a21\u5757\u4e2d\u6307\u5b9a\u4f7f\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"loader")," \u662f\u5185\u8054 ",(0,o.kt)("inlineCode",{parentName:"li"},"loader"),"\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"import '!style-loader!css-loader!less-loader?name=Rain120!./styles.less'"),";"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"post Loader"),": \u540e\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"loader"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e: ",(0,o.kt)("inlineCode",{parentName:"li"},"enforce: 'post'"))))),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/rain120/study-notes/blob/master/engineering/webpack/images/webpack-loader.drawio"},"\u56fe\u7247\u83b7\u53d6\u5730\u5740")))}m.isMDXComponent=!0}}]);