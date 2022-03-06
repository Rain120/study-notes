"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5737],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},u="\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1",c={unversionedId:"javascript/key-concept/bubble-capture",id:"javascript/key-concept/bubble-capture",title:"\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1",description:"DOM2 \u4e8b\u4ef6\u6a21\u578b\u5305\u542b\u4e09\u4e2a\u9636\u6bb5\u3002",source:"@site/fe/javascript/key-concept/bubble-capture.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/bubble-capture",permalink:"/study-notes/fe/javascript/key-concept/bubble-capture",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646553624,formattedLastUpdatedAt:"3/6/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5b66\u4e60\u8d44\u6e90",permalink:"/study-notes/fe/javascript/resource"},next:{title:"call apply bind",permalink:"/study-notes/fe/javascript/key-concept/call-apply-bind"}},p=[{value:"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6",id:"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1"},"\u4e8b\u4ef6\u7684\u6355\u83b7\u548c\u5192\u6ce1"),(0,o.kt)("p",null,"DOM2 \u4e8b\u4ef6\u6a21\u578b\u5305\u542b\u4e09\u4e2a\u9636\u6bb5\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"dom.addEventListener(\n    event,\n    function(e) {\n        // \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\n    },\n    // \u4e8b\u4ef6\u6355\u83b7\u9636\u6bb5\n    // useCapture \n    true\n);\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5904\u4e8e\u76ee\u6807\u9636\u6bb5"),(0,o.kt)("li",{parentName:"ol"},"\u4e8b\u4ef6\u5192\u6ce1\u9636\u6bb5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"dom.addEventListener(\n    event,\n    function(e) {\n        // \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\n    },\n    // \u4e8b\u4ef6\u5192\u6ce1\u9636\u6bb5\n    // useCapture \n    true\n);\n")),(0,o.kt)("p",null,"\u6355\u83b7\u662f\u4ece\u4e0a\u5f80\u4e0b\u5230\u8fbe\u76ee\u6807\u5143\u7d20, \u5192\u6ce1\u662f\u4ece\u76ee\u6807\u5143\u7d20\u5f80\u4e0a\u5230\u8fbe window\u3002"),(0,o.kt)("h2",{id:"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6"},"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e0d\u4f1a\u89e6\u53d1\u5192\u6ce1\u7684\u4e8b\u4ef6\u51e0\u4e4e\u90fd\u65e0\u6cd5\u53d6\u6d88\u3002\u5373: preventDefault \u548c stopPropagation \u4e0d\u4f1a\u8d77\u4f5c\u7528\u3002"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"blur & focus")),(0,o.kt)("p",null,"Note: focusout/focusin \u4e8b\u4ef6\u4f1a\u5192\u6ce1\u3002\u5982\u679c\u540c\u65f6\u5b58\u5728\u7684\u8bdd, focus \u5148\u4e8e focusin, blur \u5148\u4e8e focusout\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"scroll")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"mouseleave & mouseenter"))),(0,o.kt)("p",null,"Note: mouseout/mouseover \u4f1a\u89e6\u53d1\u5192\u6ce1\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Media\u4e8b\u4ef6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"onpause \u5f53\u5a92\u4ecb\u88ab\u7528\u6237\u6216\u7a0b\u5e8f\u6682\u505c\u65f6\u8fd0\u884c\u7684\u811a\u672c\nonplay  \u5f53\u5a92\u4ecb\u5df2\u5c31\u7eea\u53ef\u4ee5\u5f00\u59cb\u64ad\u653e\u65f6\u8fd0\u884c\u7684\u811a\u672c\nonplaying \u5f53\u5a92\u4ecb\u5df2\u5f00\u59cb\u64ad\u653e\u65f6\u8fd0\u884c\u7684\u811a\u672c\nonsuspend \u5728\u5a92\u4ecb\u6570\u636e\u5b8c\u5168\u52a0\u8f7d\u4e4b\u524d\u4e0d\u8bba\u4f55\u79cd\u539f\u56e0\u7ec8\u6b62\u53d6\u56de\u5a92\u4ecb\u6570\u636e\u65f6\u8fd0\u884c\n")))}d.isMDXComponent=!0}}]);