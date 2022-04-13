"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2506],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),f=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},a=function(e){var t=f(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),p=f(n),d=l,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},a),{},{components:n})):r.createElement(h,i({ref:t},a))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var f=2;f<o;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},32503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var r=n(87462),l=n(63366),o=(n(67294),n(3905)),i=["components"],c={},s="\u4e00\u6b21\u6027\u641e\u61c2\u5143\u7d20\u5927\u5c0f\u548c\u6eda\u52a8",f={unversionedId:"css/client-scroll-offset",id:"css/client-scroll-offset",title:"\u4e00\u6b21\u6027\u641e\u61c2\u5143\u7d20\u5927\u5c0f\u548c\u6eda\u52a8",description:"css-size.png",source:"@site/fe/css/client-scroll-offset.md",sourceDirName:"css",slug:"/css/client-scroll-offset",permalink:"/study-notes/fe/css/client-scroll-offset",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649822765,formattedLastUpdatedAt:"4/13/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"CSS \u4fee\u6539 input, textarea \u7b49\u63a7\u4ef6 placeholder \u7684\u989c\u8272",permalink:"/study-notes/fe/css/change-inputs-placeholder"},next:{title:"CSS \u5e38\u89c1\u7684\u9009\u62e9\u5668",permalink:"/study-notes/fe/css/css-selector"}},a={},u=[{value:"offsetParent",id:"offsetparent",level:2},{value:"offsetHeight, offsetWidth",id:"offsetheight-offsetwidth",level:2},{value:"offsetLeft, offsetTop",id:"offsetleft-offsettop",level:2},{value:"clientHeight, clientWidth",id:"clientheight-clientwidth",level:2},{value:"clientLeft, clientTop",id:"clientleft-clienttop",level:2},{value:"scrollHeight, scrollWidth",id:"scrollheight-scrollwidth",level:2},{value:"scrollLeft, scrollTop",id:"scrollleft-scrolltop",level:2},{value:"getBoundingClientRect",id:"getboundingclientrect",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],p={toc:u};function d(e){var t=e.components,c=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e00\u6b21\u6027\u641e\u61c2\u5143\u7d20\u5927\u5c0f\u548c\u6eda\u52a8"},"\u4e00\u6b21\u6027\u641e\u61c2\u5143\u7d20\u5927\u5c0f\u548c\u6eda\u52a8"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"css-size.png",src:n(4570).Z,width:"1390",height:"1244"})),(0,o.kt)("h2",{id:"offsetparent"},"offsetParent"),(0,o.kt)("h2",{id:"offsetheight-offsetwidth"},"offsetHeight, offsetWidth"),(0,o.kt)("h2",{id:"offsetleft-offsettop"},"offsetLeft, offsetTop"),(0,o.kt)("h2",{id:"clientheight-clientwidth"},"clientHeight, clientWidth"),(0,o.kt)("h2",{id:"clientleft-clienttop"},"clientLeft, clientTop"),(0,o.kt)("h2",{id:"scrollheight-scrollwidth"},"scrollHeight, scrollWidth"),(0,o.kt)("h2",{id:"scrollleft-scrolltop"},"scrollLeft, scrollTop"),(0,o.kt)("h2",{id:"getboundingclientrect"},"getBoundingClientRect"),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zh.javascript.info/size-and-scroll"},"\u5143\u7d20\u5927\u5c0f\u548c\u6eda\u52a8")))}d.isMDXComponent=!0},4570:function(e,t,n){t.Z=n.p+"assets/images/css-size-e3c2e27c6f364f1f376b2617a7d213f6.png"}}]);