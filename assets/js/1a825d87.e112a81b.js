"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3386],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),v=a,m=s["".concat(p,".").concat(v)]||s[v]||d[v]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63683:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},p="\u6d45\u8c08\u524d\u7aef\u4e8b\u4ef6\u9a71\u52a8\u548c\u6570\u636e\u9a71\u52a8",u={unversionedId:"javascript/notes/event-driven-vs-data-driven",id:"javascript/notes/event-driven-vs-data-driven",title:"\u6d45\u8c08\u524d\u7aef\u4e8b\u4ef6\u9a71\u52a8\u548c\u6570\u636e\u9a71\u52a8",description:"\u524d\u8a00",source:"@site/fe/javascript/notes/event-driven-vs-data-driven.md",sourceDirName:"javascript/notes",slug:"/javascript/notes/event-driven-vs-data-driven",permalink:"/study-notes/fe/javascript/notes/event-driven-vs-data-driven",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1645070404,formattedLastUpdatedAt:"2/17/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"JavaScript \u5e38\u89c1\u8fd0\u7b97\u7b26",permalink:"/study-notes/fe/javascript/notes/common-operator"},next:{title:"\u83b7\u53d6DOM\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u5c3a\u5bf8",permalink:"/study-notes/fe/javascript/notes/get-dom-property"}},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a",children:[],level:2},{value:"\u7406\u89e3",id:"\u7406\u89e3",children:[],level:2},{value:"\u4e8b\u4ef6\u9a71\u52a8",id:"\u4e8b\u4ef6\u9a71\u52a8",children:[],level:2},{value:"\u6570\u636e\u9a71\u52a8",id:"\u6570\u636e\u9a71\u52a8",children:[],level:2},{value:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u5462\uff1f",id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u5462",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6d45\u8c08\u524d\u7aef\u4e8b\u4ef6\u9a71\u52a8\u548c\u6570\u636e\u9a71\u52a8"},"\u6d45\u8c08\u524d\u7aef\u4e8b\u4ef6\u9a71\u52a8\u548c\u6570\u636e\u9a71\u52a8"),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a ?"),(0,i.kt)("li",{parentName:"ul"},"\u6211\u662f\u600e\u4e48\u7406\u89e3\u7684\uff1f")),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a"},"\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd9\u4e2a\uff1f"),(0,i.kt)("p",null,"\u968f\u7740\u524d\u7aef\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"MVC")," \u6a21\u5f0f\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"MVVM"),"\u6a21\u5f0f\u8f6c\u6362\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u7684\u601d\u60f3\u4e5f\u9700\u8981\u8f6c\u6362\u4e0b\uff0c\u4ece\u4e4b\u524d\u7684\u4e8b\u4ef6\u9a71\u52a8\u5230\u73b0\u5728\u6570\u636e\u9a71\u52a8\uff0c\u5f88\u591a\u670b\u53cb\u5728\u8fd9\u4e2a\u65b9\u9762\u7684\u7406\u89e3\u6709\u70b9\u95ee\u9898\uff0c\u6240\u4ee5\uff0c\u6211\u60f3\u628a\u6211\u81ea\u5df1\u7684\u7406\u89e3\u8ddf\u5927\u5bb6\u5206\u4eab\u4e0b\u3002"),(0,i.kt)("h2",{id:"\u7406\u89e3"},"\u7406\u89e3"),(0,i.kt)("p",null,"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5e0c\u671b\u7684\u662f\u4e13\u6ce8\u4e8e\u67d0\u4e9b\u5c42\u9762\uff0c\u800c\u4e0d\u662f\u88ab\u5176\u4ed6\u4e1c\u897f\u5438\u5f15\u6216\u8005\u88ab\u5176\u4ed6\u91cd\u590d\u7684\u6b65\u9aa4\u5f71\u54cd\uff0c\u6240\u4ee5\uff0c\u5f53\u6211\u4eec\u5728\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u4f1a\u6709\u4e24\u79cd\u64cd\u4f5c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u4e8b\u4ef6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u66f4\u65b0\u89e6\u53d1")),(0,i.kt)("p",null,"\u6211\u4e3e\u4e2a\u4f8b\u5b50\u6765\u89e3\u91ca\u4e0b\u8fd9\u4e24\u4e2a\u573a\u666f(\u6392\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"debounce"),"\u5904\u7406):"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u4e8b\u4ef6\u89e6\u53d1"),"\uff0c\u4f60\u5728\u8f93\u5165\u5185\u5bb9\u4e4b\u540e\uff0c\u70b9\u51fb\u641c\u7d22\u6309\u94ae\uff0c\u63a5\u7740\u8c03\u7528\u641c\u7d22\u63a5\u53e3"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6570\u636e\u66f4\u65b0\u89e6\u53d1"),"\uff0c\u4f60\u8f93\u5165\u7684\u5185\u5bb9\u53d8\u5316\u540e\uff0c\u8c03\u7528\u641c\u7d22\u63a5\u53e3"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e24\u79cd\u573a\u666f\u4e0b\uff0c\u4f60\u5e94\u8be5\u5c31\u80fd\u7406\u89e3\u8fd9\u4e24\u4e2a\u6982\u5ff5\u4e86\u3002"),(0,i.kt)("h2",{id:"\u4e8b\u4ef6\u9a71\u52a8"},"\u4e8b\u4ef6\u9a71\u52a8"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e8b\u4ef6\u9a71\u52a8")," \u662f\u4e00\u79cd",(0,i.kt)("strong",{parentName:"p"},"\u6839\u636e\u4e8b\u4ef6\u89e6\u53d1\u6765\u51b3\u5b9a\u7a0b\u5e8f\u6267\u884c\u903b\u8f91"),"\u7684\u7a0b\u5e8f\u8bbe\u8ba1\u601d\u60f3\u3002\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\u6211\u4eec\u66f4\u591a\u7684\u662f",(0,i.kt)("strong",{parentName:"p"},"\u8003\u8651UI\u7684\u53d8\u5316\u548c\u4e8b\u4ef6\u7684\u76d1\u542c"),"\u3002"),(0,i.kt)("p",null,"\u6d41\u5411: ",(0,i.kt)("strong",{parentName:"p"},"\u64cd\u4f5c => \u89e6\u53d1\u4e8b\u4ef6 => \u54cd\u5e94\u5904\u7406 => \u66f4\u65b0UI")),(0,i.kt)("h2",{id:"\u6570\u636e\u9a71\u52a8"},"\u6570\u636e\u9a71\u52a8"),(0,i.kt)("p",null,"\u6570\u636e\u662f\u6307\u7a0b\u5e8f\u8fd0\u884c\u4e2d\u7684\u53ef\u53d8\u5185\u5bb9\uff0c\u5b83\u51b3\u5b9a\u4e86\u9875\u9762\u52a0\u8f7d\u7684\u5185\u5bb9\u548c\u4fe1\u606f\u7684\u663e\u793a\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6570\u636e\u9a71\u52a8")," \u662f\u4e00\u79cd",(0,i.kt)("strong",{parentName:"p"},"\u6839\u636e\u6570\u636e\u6765\u51b3\u5b9a\u7a0b\u5e8f\u6267\u884c\u903b\u8f91"),"\u7684\u7a0b\u5e8f\u8bbe\u8ba1\u601d\u60f3\u3002\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\uff0c\u6211\u4eec\u66f4\u591a\u7684\u662f",(0,i.kt)("strong",{parentName:"p"},"\u601d\u8003\u6570\u636e\u7684\u7ef4\u62a4\u548c\u5904\u7406"),"\uff0c\u800c\u65e0\u9700\u8fc7\u4e8e\u8003\u8651UI\u7684\u53d8\u5316\u548c\u4e8b\u4ef6\u7684\u76d1\u542c\u3002"),(0,i.kt)("p",null,"\u6d41\u5411: ",(0,i.kt)("strong",{parentName:"p"},"\u64cd\u4f5c => \u89e6\u53d1\u4e8b\u4ef6 => \u54cd\u5e94\u5904\u7406 => \u66f4\u65b0\u6570\u636e => \u66f4\u65b0UI")),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u5462"},"\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u5462\uff1f"),(0,i.kt)("p",null,"\u5176\u5b9e\u5927\u90e8\u5206\u65f6\u5019\uff0c\u90fd\u662f\u53ef\u4ee5\u4f7f\u7528\u6570\u636e\u9a71\u52a8\u7684\uff0c\u53ea\u8981\u6570\u636e\u53d8\u4e86\uff0c\u5176\u5b9e\u5c31\u53ef\u4ee5\u9a71\u52a8\u89c6\u56fe\u53d8\u5316\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"model => vm => view"),"\uff0c\u4f46\u662f\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u4e0d\u5f97\u4e0d\u7528\u4e8b\u4ef6\u9a71\u52a8\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6bd4\u5982\u8bf4\u641c\u7d22\u7684\u6761\u4ef6\u662f\uff0c\u8f93\u5165\u5b8c\u4e86\u518d\u53bb\u641c\u7d22\uff0c\u5c31\u53ea\u80fd\u4eba\u4e3a\u51b3\u5b9a\u4ec0\u4e48\u65f6\u5019\u8f93\u5165\u5b8c\uff0c\u8fd9\u4e2a\u573a\u666f\u4e0b\u5c31\u5f97\u4eba\u4e3a\u89e6\u53d1\u4e8b\u4ef6\uff0c\u90a3\u5c31\u9002\u5408\u4e8b\u4ef6\u9a71\u52a8\uff0c\u5177\u4f53\u95ee\u9898\u5177\u4f53\u5206\u6790\uff0c\u5408\u7406\u4f7f\u7528\u4e0d\u540c\u7c7b\u578b\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.techopedia.com/definition/18687/data-driven"},"data-driven")))}s.isMDXComponent=!0}}]);