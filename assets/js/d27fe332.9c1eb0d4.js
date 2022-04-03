"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2851],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(t),k=r,c=d["".concat(o,".").concat(k)]||d[k]||s[k]||l;return t?a.createElement(c,i(i({ref:n},u),{},{components:t})):a.createElement(c,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38155:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],p={sidebar_position:1},o="Lerna \u5165\u95e8\u7bc7",m={unversionedId:"lerna/base",id:"lerna/base",title:"Lerna \u5165\u95e8\u7bc7",description:"\u591a\u5305\u7ba1\u7406\u65b9\u6848",source:"@site/engineering/lerna/base.md",sourceDirName:"lerna",slug:"/lerna/base",permalink:"/study-notes/engineering/lerna/base",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648975241,formattedLastUpdatedAt:"4/3/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"\u672c\u5730\u955c\u50cf\u7ba1\u7406",permalink:"/study-notes/engineering/docker/command/local-images-manage"},next:{title:"Lerna \u547d\u4ee4",permalink:"/study-notes/engineering/lerna/commands"}},u={},s=[{value:"\u591a\u5305\u7ba1\u7406\u65b9\u6848",id:"\u591a\u5305\u7ba1\u7406\u65b9\u6848",level:2},{value:"Multirepo",id:"multirepo",level:3},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:4},{value:"\u75db\u70b9",id:"\u75db\u70b9",level:4},{value:"Monorepo",id:"monorepo",level:3},{value:"\u4f18\u52bf",id:"\u4f18\u52bf-1",level:4},{value:"\u75db\u70b9",id:"\u75db\u70b9-1",level:4},{value:"lerna \u662f\u4ec0\u4e48\uff1f",id:"lerna-\u662f\u4ec0\u4e48",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 lerna?",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-lerna",level:2},{value:"\u5b89\u88c5 lerna",id:"\u5b89\u88c5-lerna",level:2},{value:"\u521b\u5efa lerna \u4ed3\u5e93",id:"\u521b\u5efa-lerna-\u4ed3\u5e93",level:2},{value:"Lerna \u5e38\u7528\u547d\u4ee4",id:"lerna-\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:s};function k(e){var n=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lerna-\u5165\u95e8\u7bc7"},"Lerna \u5165\u95e8\u7bc7"),(0,l.kt)("h2",{id:"\u591a\u5305\u7ba1\u7406\u65b9\u6848"},"\u591a\u5305\u7ba1\u7406\u65b9\u6848"),(0,l.kt)("h3",{id:"multirepo"},"Multirepo"),(0,l.kt)("p",null,"\u53c8\u79f0",(0,l.kt)("inlineCode",{parentName:"p"},"multiple repository"),", \u591a\u4ee3\u7801\u4ed3\u5e93"),(0,l.kt)("h4",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7075\u6d3b"),"\n\u5141\u8bb8\u591a\u5143\u5316\u53d1\u5c55, \u5404\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"module"),"\u6709\u5404\u81ea\u7684\u6784\u5efa\u7b49\u65b9\u5f0f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5b89\u5168"),"\n\u81ea\u7136\u7684\u6743\u9650\u63a7\u5236, \u53d1\u5e03\u4e0a\u7ebf\u5bf9\u5176\u4ed6\u9879\u76ee\u65e0\u5f71\u54cd"))),(0,l.kt)("h4",{id:"\u75db\u70b9"},"\u75db\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u590d\u7528\u6210\u672c\u8fc7\u9ad8"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"core repo"),"\u7248\u672c\u66f4\u65b0\u9ebb\u70e6, \u9700\u8981\u540c\u6b65\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"module"),"\u66f4\u65b0\u5176\u4f9d\u8d56\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"core repo"),"\u7248\u672c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8c03\u8bd5\u6210\u672c\u8fc7\u9ad8"),"\n\u6d89\u53ca\u591a\u4e2a\u9879\u76ee\u5f00\u53d1\u65f6, \u4f60\u53ef\u80fd\u9700\u8981\u5f00\u542f\u591a\u4e2aIDE\u7a97\u53e3\u8fdb\u884c\u5207\u6362\u5f00\u53d1, \u53e6\u5916\u867d\u7136\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"npm link"),"\u65b9\u5f0f\u8fdb\u884c\u8c03\u8bd5, \u4f46\u624b\u52a8\u7ba1\u7406\u8bf8\u591alink\u64cd\u4f5c\u5341\u5206\u4e0d\u4fbf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u9879\u76ee\u57fa\u5efa, \u5de5\u4f5c\u6d41\u6df7\u4e71"),"\n\u7531\u4e8e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Multirepo")," \u5f53\u4e2d, \u5404\u4e2a\u9879\u76ee\u7684\u5de5\u4f5c\u6d41\u662f\u5272\u88c2\u7684, \u56e0\u6b64\u6bcf\u4e2a\u9879\u76ee\u9700\u8981\u5355\u72ec\u914d\u7f6e\u5f00\u53d1\u73af\u5883\u3001\u914d\u7f6e CI \u6d41\u7a0b\u3001\u914d\u7f6e\u90e8\u7f72\u53d1\u5e03\u6d41\u7a0b\u7b49\u7b49, \u751a\u81f3\u6bcf\u4e2a\u9879\u76ee\u90fd\u6709\u81ea\u5df1\u5355\u72ec\u7684\u4e00\u5957\u811a\u624b\u67b6\u5de5\u5177, \u7136\u800c\u5f88\u591a\u60c5\u51b5\u4e0b\u8fd9\u4e9b\u9879\u76ee\u91cc\u7684\u57fa\u5efa\u548c\u903b\u8f91\u662f\u6709\u5f88\u5927\u90e8\u5206\u91cd\u590d\u7684, \u800c\u4e14\u5404\u4e2a\u9879\u76ee\u95f4\u5b58\u5728\u6784\u5efa\u3001\u90e8\u7f72\u548c\u53d1\u5e03\u7684\u89c4\u8303\u4e0d\u80fd\u7edf\u4e00\u7684\u60c5\u51b5\u4e0b\u7ef4\u62a4\u6210\u672c\u4e5f\u9ad8\u4e86\u8d77\u6765\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"issue\u7ba1\u7406\u6df7\u4e71"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"changelog\u96be\u4ee5\u6574\u5408"),"\n\u9700\u8981\u4eba\u5de5\u68b3\u7406\u6240\u6709\u53d8\u52a8\u7684\u4ed3\u5e93, \u5e76\u505a\u6574\u5408"))),(0,l.kt)("h3",{id:"monorepo"},"Monorepo"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"monolithic repository"),", \u5355\u4ee3\u7801\u4ed3\u5e93"),(0,l.kt)("h4",{id:"\u4f18\u52bf-1"},"\u4f18\u52bf"),(0,l.kt)("p",null,"\u53ef\u4ee5\u89e3\u51b3\u4e0a\u9762\u63cf\u8ff0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Multirepo")," \u7684\u75db\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7edf\u4e00\u5de5\u4f5c\u6d41"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u964d\u4f4e\u57fa\u5efa\u6210\u672c"),"\n\u6240\u6709\u9879\u76ee\u590d\u7528\u4e00\u5957\u6807\u51c6\u7684\u5de5\u5177\u548c\u89c4\u8303, \u65e0\u9700\u5207\u6362\u5f00\u53d1\u73af\u5883, \u5982\u679c\u6709\u65b0\u7684\u9879\u76ee\u63a5\u5165, \u4e5f\u53ef\u4ee5\u76f4\u63a5\u590d\u7528\u5df2\u6709\u7684\u57fa\u5efa\u6d41\u7a0b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u63d0\u5347\u56e2\u961f\u534f\u4f5c\u6548\u7387"),"\n\u96c6\u4e2d\u7ba1\u7406, \u51cf\u5c11\u4e0d\u540c\u4ed3\u5e93\u914d\u7f6e\u7684\u5dee\u5f02\u5e26\u6765\u7684\u6c9f\u901a\u6210\u672c"))),(0,l.kt)("h4",{id:"\u75db\u70b9-1"},"\u75db\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"repo\u4f53\u79ef\u8f83\u5927"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6743\u9650\u95ee\u9898"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7edf\u4e00\u6784\u5efa\u5de5\u5177, \u5bf9\u6784\u5efa\u5de5\u5177\u63d0\u51fa\u4e86\u66f4\u9ad8\u8981\u6c42, \u8981\u80fd\u6784\u5efa\u5404\u79cd\u76f8\u5173",(0,l.kt)("inlineCode",{parentName:"strong"},"module"))))),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"mono-vs-mutil.jpg",src:t(7736).Z,width:"960",height:"720"})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u5b9e\u9645\u573a\u666f\u6765\u843d\u5730 Monorepo, \u9700\u8981\u4e00\u5957\u5b8c\u6574\u7684\u5de5\u7a0b\u4f53\u7cfb\u6765\u8fdb\u884c\u652f\u6491, \u56e0\u4e3a\u57fa\u4e8e Monorepo \u7684\u9879\u76ee\u7ba1\u7406, \u7edd\u4e0d\u662f\u4ec5\u4ec5\u4ee3\u7801\u653e\u5230\u4e00\u8d77\u5c31\u53ef\u4ee5\u7684, \u8fd8\u9700\u8981\u8003\u8651\u9879\u76ee\u95f4",(0,l.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u5206\u6790"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u5b89\u88c5"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u6784\u5efa\u6d41\u7a0b"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5\u6d41\u7a0b"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"CI")," \u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"\u53d1\u5e03\u6d41\u7a0b"),"\u7b49\u8bf8\u591a\u5de5\u7a0b\u73af\u8282, \u540c\u65f6\u8fd8\u8981\u8003\u8651\u9879\u76ee\u89c4\u6a21\u5230\u8fbe\u4e00\u5b9a\u7a0b\u5ea6\u540e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u6027\u80fd"),"\u95ee\u9898, \u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6784\u5efa/\u6d4b\u8bd5\u65f6\u95f4"),"\u8fc7\u957f\u9700\u8981\u8fdb\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"\u589e\u91cf\u6784\u5efa/\u6d4b\u8bd5"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"\u6309\u9700\u6267\u884cCI"),"\u7b49\u7b49, \u5728\u5b9e\u73b0\u5168\u9762\u5de5\u7a0b\u5316\u80fd\u529b\u7684\u540c\u65f6, \u4e5f\u9700\u8981\u517c\u987e\u5230\u6027\u80fd\u95ee\u9898"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Tips: \u501f\u52a9 lerna + pnpm \u5b9e\u73b0\u591a\u4ed3\u5e93\u7ba1\u7406"),"\u3002(\u5f85\u5b9e\u8df5)"))),(0,l.kt)("h2",{id:"lerna-\u662f\u4ec0\u4e48"},"lerna \u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Lerna"),"\u662f\u4e00\u79cd\u5de5\u5177, \u7528\u4e8e\u4f18\u5316\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"git"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),"\u7ba1\u7406\u591a\u5305\u5b58\u50a8\u5e93\u7684\u5de5\u4f5c\u6d41\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528-lerna"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528 lerna?"),(0,l.kt)("p",null,"\u5c06\u5927\u578b\u4ee3\u7801\u5e93\u5206\u6210\u5355\u72ec\u7684\u72ec\u7acb\u7248\u672c\u5316\u7684\u8f6f\u4ef6\u5305\u5bf9\u4e8e\u4ee3\u7801\u5171\u4eab\u975e\u5e38\u6709\u7528\u3002 \u4f46\u662f, \u8de8\u8bb8\u591a\u5b58\u50a8\u5e93\u8fdb\u884c\u66f4\u6539\u5f88\u9ebb\u70e6\u4e14\u96be\u4ee5\u8ddf\u8e2a, \u5e76\u4e14\u8de8\u5b58\u50a8\u5e93\u7684\u6d4b\u8bd5\u53d8\u5f97\u975e\u5e38\u590d\u6742\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\uff08\u4ee5\u53ca\u8bb8\u591a\u5176\u4ed6\uff09\u95ee\u9898, \u67d0\u4e9b\u9879\u76ee\u4f1a\u5c06\u5176\u4ee3\u7801\u5e93\u7ec4\u7ec7\u5230\u591a\u5305\u5b58\u50a8\u5e93\u4e2d\u3002 \u4f17\u591a\u9879\u76ee\u4ee5\u53ca\u8bb8\u591a\u5176\u4ed6\u9879\u76ee\u90fd\u5728\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\u5f00\u53d1\u4e86\u6240\u6709\u8f6f\u4ef6\u5305\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"lerna"),"\u53ef\u4ee5\u8ba9\u4f60\u5728\u4e3b\u9879\u76ee\u4e0b\u7ba1\u7406\u591a\u4e2a\u5b50\u9879\u76ee, \u4ece\u800c\u89e3\u51b3\u4e86\u591a\u4e2a\u5305\u4e92\u76f8\u4f9d\u8d56, \u4e14\u53d1\u5e03\u65f6\u9700\u8981\u624b\u52a8\u7ef4\u62a4\u591a\u4e2a\u5305\u7684\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-lerna"},"\u5b89\u88c5 lerna"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g lerna\n\n# yarn\n\nyarn global add lerna\n")),(0,l.kt)("h2",{id:"\u521b\u5efa-lerna-\u4ed3\u5e93"},"\u521b\u5efa lerna \u4ed3\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git init lerna-repo && cd lerna-repo\n")),(0,l.kt)("h2",{id:"lerna-\u5e38\u7528\u547d\u4ee4"},"Lerna \u5e38\u7528\u547d\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/study-notes/engineering/lerna/commands"},"\u8be6\u89c1 Lerna \u547d\u4ee4")),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://lerna.js.org/"},"Lerna \u5b98\u65b9\u6587\u6863")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.sohu.com/a/343217202_463970"},"\u3010PPT\u3011\u767d\u9e6d\u5f15\u64ce\u9996\u5e2d\u67b6\u6784\u5e08@\u738b\u6cfd\uff1a\u6846\u67b6\u5f00\u53d1\u4e2d\u7684\u57fa\u7840\u8bbe\u65bd\u642d\u5efa ")))}k.isMDXComponent=!0},7736:function(e,n,t){n.Z=t.p+"assets/images/mono-vs-mutil-df6236ac05f42e52123fd688ce9185fe.jpg"}}]);