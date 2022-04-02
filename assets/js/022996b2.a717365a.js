"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[7178],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},71863:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={},p="null \u548c undefined \u7684\u533a\u522b",u={unversionedId:"javascript/key-concept/null-vs-undefined",id:"javascript/key-concept/null-vs-undefined",title:"null \u548c undefined \u7684\u533a\u522b",description:'null\u8868\u793a"\u6ca1\u6709\u5bf9\u8c61"\uff0c\u5373\u8be5\u5904\u4e0d\u5e94\u8be5\u6709\u503c\u3002\u5178\u578b\u7528\u6cd5\u662f\uff1a',source:"@site/fe/javascript/key-concept/null-vs-undefined.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/null-vs-undefined",permalink:"/study-notes/fe/javascript/key-concept/null-vs-undefined",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648899683,formattedLastUpdatedAt:"4/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"new",permalink:"/study-notes/fe/javascript/key-concept/new"},next:{title:"\u539f\u578b\u94fe",permalink:"/study-notes/fe/javascript/key-concept/prototype-chain"}},c={},d=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],s={toc:d};function f(e){var n=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"null-\u548c-undefined-\u7684\u533a\u522b"},"null \u548c undefined \u7684\u533a\u522b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'null\u8868\u793a"\u6ca1\u6709\u5bf9\u8c61"\uff0c\u5373\u8be5\u5904\u4e0d\u5e94\u8be5\u6709\u503c\u3002'),"\u5178\u578b\u7528\u6cd5\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f5c\u4e3a\u51fd\u6570\u7684\u53c2\u6570\uff0c\u8868\u793a\u8be5\u51fd\u6570\u7684\u53c2\u6570\u4e0d\u662f\u5bf9\u8c61\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f5c\u4e3a\u5bf9\u8c61\u539f\u578b\u94fe\u7684\u7ec8\u70b9\u3002"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'undefined\u8868\u793a"\u7f3a\u5c11\u503c"\uff0c\u5c31\u662f\u6b64\u5904\u5e94\u8be5\u6709\u4e00\u4e2a\u503c\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709\u5b9a\u4e49\u3002'),"\u5178\u578b\u7528\u6cd5\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u88ab\u58f0\u660e\u4e86\uff0c\u4f46\u6ca1\u6709\u8d4b\u503c\u65f6\uff0c\u5c31\u7b49\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u5e94\u8be5\u63d0\u4f9b\u7684\u53c2\u6570\u6ca1\u6709\u63d0\u4f9b\uff0c\u8be5\u53c2\u6570\u7b49\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u6ca1\u6709\u8d4b\u503c\u7684\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u7684\u503c\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\u65f6\uff0c\u9ed8\u8ba4\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"undefined-vs-null.png",src:t(20710).Z,width:"790",height:"180"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"void \u8fd0\u7b97\u7b26")," \u5bf9\u7ed9\u5b9a\u7684\u8868\u8fbe\u5f0f\u8fdb\u884c\u6c42\u503c\uff0c\u7136\u540e\u8fd4\u56de ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined"},(0,i.kt)("inlineCode",{parentName:"a"},"undefined")),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"void")," \u8fd0\u7b97\u7b26\u901a\u5e38\u53ea\u7528\u4e8e\u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\u7684\u539f\u59cb\u503c\uff0c\u4e00\u822c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"void(0)"),"\uff08\u7b49\u540c\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"void 0"),"\uff09\u3002"),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html"},"undefined\u4e0enull\u7684\u533a\u522b")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void"},"void")))}f.isMDXComponent=!0},20710:function(e,n,t){n.Z=t.p+"assets/images/undefined-vs-null-adcd99260cb93863daefc63a4ae85232.png"}}]);