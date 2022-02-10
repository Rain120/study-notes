"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[634],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70808:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={},l=void 0,s={unversionedId:"react/setState",id:"react/setState",title:"setState",description:"setState()",source:"@site/fe/react/setState.md",sourceDirName:"react",slug:"/react/setState",permalink:"/study-notes/fe/react/setState",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1644461031,formattedLastUpdatedAt:"2/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4e8b\u4ef6\u673a\u5236",permalink:"/study-notes/fe/react/events"},next:{title:"BrowserRouter\u548cHashRouter\u7684\u533a\u522b?",permalink:"/study-notes/fe/react/router/router-diff-with-browser-and-hash"}},c=[{value:"setState()",id:"setstate",children:[],level:4},{value:"setState\u662f\u5f02\u6b65\u7684\u5417\uff1f",id:"setstate\u662f\u5f02\u6b65\u7684\u5417",children:[],level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:4}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"setstate"},"setState()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"setState(updater, [callback])\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setState()")," \u5c06\u5bf9\u7ec4\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u66f4\u6539\u6392\u5165\u961f\u5217\uff0c\u5e76\u901a\u77e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," \u9700\u8981\u4f7f\u7528\u66f4\u65b0\u540e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u91cd\u65b0\u6e32\u67d3\u6b64\u7ec4\u4ef6\u53ca\u5176\u5b50\u7ec4\u4ef6\u3002\u8fd9\u662f\u7528\u4e8e\u66f4\u65b0\u7528\u6237\u754c\u9762\u4ee5\u54cd\u5e94\u4e8b\u4ef6\u5904\u7406\u5668\u548c\u5904\u7406\u670d\u52a1\u5668\u6570\u636e\u7684\u4e3b\u8981\u65b9\u5f0f"),(0,o.kt)("h4",{id:"setstate\u662f\u5f02\u6b65\u7684\u5417"},"setState\u662f\u5f02\u6b65\u7684\u5417\uff1f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u53ea\u5728\u5408\u6210\u4e8b\u4ef6\u548c\u94a9\u5b50\u51fd\u6570\u4e2d\u662f\u201c\u5f02\u6b65\u201d\u7684\uff0c\u5728\u539f\u751f\u4e8b\u4ef6\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout"),"\u4e2d\u90fd\u662f\u540c\u6b65\u7684\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u7684\u201c\u5f02\u6b65\u201d\u5e76\u4e0d\u662f\u8bf4\u5185\u90e8\u7531\u5f02\u6b65\u4ee3\u7801\u5b9e\u73b0\uff0c\u5176\u5b9e\u672c\u8eab\u6267\u884c\u7684\u8fc7\u7a0b\u548c\u4ee3\u7801\u90fd\u662f\u540c\u6b65\u7684\uff0c\u53ea\u662f\u5408\u6210\u4e8b\u4ef6\u548c\u94a9\u5b50\u51fd\u6570\u7684\u8c03\u7528\u987a\u5e8f\u5728\u66f4\u65b0\u4e4b\u524d\uff0c\u5bfc\u81f4\u5728\u5408\u6210\u4e8b\u4ef6\u548c\u94a9\u5b50\u51fd\u6570\u4e2d\u6ca1\u6cd5\u7acb\u9a6c\u62ff\u5230\u66f4\u65b0\u540e\u7684\u503c\uff0c\u5f62\u5f0f\u4e86\u6240\u8c13\u7684\u201c\u5f02\u6b65\u201d\uff0c\u5f53\u7136\u53ef\u4ee5\u901a\u8fc7\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"setState(partialState, callback)")," \u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"callback"),"\u62ff\u5230\u66f4\u65b0\u540e\u7684\u7ed3\u679c\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u7684\u6279\u91cf\u66f4\u65b0\u4f18\u5316\u4e5f\u662f\u5efa\u7acb\u5728\u201c\u5f02\u6b65\u201d\uff08\u5408\u6210\u4e8b\u4ef6\u3001\u94a9\u5b50\u51fd\u6570\uff09\u4e4b\u4e0a\u7684\uff0c\u5728\u539f\u751f\u4e8b\u4ef6\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u4e2d\u4e0d\u4f1a\u6279\u91cf\u66f4\u65b0\uff0c\u5728\u201c\u5f02\u6b65\u201d\u4e2d\u5982\u679c\u5bf9\u540c\u4e00\u4e2a\u503c\u8fdb\u884c\u591a\u6b21 ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u7684\u6279\u91cf\u66f4\u65b0\u7b56\u7565\u4f1a\u5bf9\u5176\u8fdb\u884c\u8986\u76d6\uff0c\u53d6\u6700\u540e\u4e00\u6b21\u7684\u6267\u884c\uff0c\u5982\u679c\u662f\u540c\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"setState"),"\u591a\u4e2a\u4e0d\u540c\u7684\u503c\uff0c\u5728\u66f4\u65b0\u65f6\u4f1a\u5bf9\u5176\u8fdb\u884c\u5408\u5e76\u6279\u91cf\u66f4\u65b0\u3002"))),(0,o.kt)("h4",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html#setstate"},"React setState")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/11527#issuecomment-360199710"},"React Dan Abramov \u7684\u89e3\u91ca")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://juejin.im/post/6844903636749778958"},"\u4f60\u771f\u7684\u7406\u89e3setState\u5417\uff1f")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://imweb.io/topic/5b189d04d4c96b9b1b4c4ed6"},"\u63ed\u5bc6React setState"),": \u8868\u793a\u4e0d\u540c\u610f\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," \u662f\u5f02\u6b65\u7684\u89c2\u70b9"))}m.isMDXComponent=!0}}]);