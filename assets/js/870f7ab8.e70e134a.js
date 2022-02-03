"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4316],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50998:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),l=["components"],i={},o="\u503c\u7c7b\u578b vs \u5f15\u7528\u7c7b\u578b",c={unversionedId:"javascript/key-concept/values-vs-reference",id:"javascript/key-concept/values-vs-reference",title:"\u503c\u7c7b\u578b vs \u5f15\u7528\u7c7b\u578b",description:"\u533a\u522b",source:"@site/fe/javascript/key-concept/values-vs-reference.mdx",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/values-vs-reference",permalink:"/study-notes/fe/javascript/key-concept/values-vs-reference",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643879380,formattedLastUpdatedAt:"2/3/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4ece\u8f93\u5165URL \u5230\u663e\u793a\u9875\u9762",permalink:"/study-notes/fe/javascript/key-concept/url-to-page"},next:{title:"var let const function \u751f\u547d\u5468\u671f",permalink:"/study-notes/fe/javascript/key-concept/var-let-const-function-lifecycle"}},s=[{value:"\u533a\u522b",id:"\u533a\u522b",children:[{value:"1. <strong>\u53ef\u53d8\u6027</strong>",id:"1-\u53ef\u53d8\u6027",children:[],level:3},{value:"2. <strong>\u590d\u5236</strong>",id:"2-\u590d\u5236",children:[],level:3}],level:2},{value:"\u5bf9\u8c61\u5f15\u7528",id:"\u5bf9\u8c61\u5f15\u7528",children:[],level:2}],u={toc:s};function m(e){var t=e.components,i=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u503c\u7c7b\u578b-vs-\u5f15\u7528\u7c7b\u578b"},"\u503c\u7c7b\u578b vs \u5f15\u7528\u7c7b\u578b"),(0,p.kt)("h2",{id:"\u533a\u522b"},"\u533a\u522b"),(0,p.kt)("h3",{id:"1-\u53ef\u53d8\u6027"},"1. ",(0,p.kt)("strong",{parentName:"h3"},"\u53ef\u53d8\u6027")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u503c\u7c7b\u578b\u7684\u6570\u636e\u662f\u4e0d\u53ef\u53d8(immutable)\u7684\u3002"),"\u6307\u503c\u672c\u8eab\uff0c\u4e00\u65e6\u521b\u5efa\uff0c\u4fbf\u4e0d\u53ef\u66f4\u6539\u3002"),(0,p.kt)("p",null,"\u503c\u7c7b\u578b\u662f\u5b58\u50a8\u5728\u5806\u5185\u5b58\u4e2d\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = 1, b = 2;\na = 11;\n")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"value-assignment.png",src:n(24081).Z})),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u7c7b\u578b"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"symbol")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u5f15\u7528\u7c7b\u578b\u503c\u662f\u53ef\u4ee5\u6539\u53d8\u7684\u3002")),(0,p.kt)("p",null,"\u5f15\u7528\u7c7b\u578b\u7684\u503c\u662f\u5c06\u53d8\u91cf\u540d\u79f0\u548c\u5f15\u7528\u5730\u5740\u5b58\u50a8 \u4fdd\u5b58\u5728",(0,p.kt)("strong",{parentName:"p"},"\u5806\u5185\u5b58")," ",(0,p.kt)("inlineCode",{parentName:"p"},"(Heap)")," \u4e2d\u7684\u5bf9\u8c61 ",(0,p.kt)("inlineCode",{parentName:"p"},"(Object)"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = { name: 'Rainy' };\nlet b = a;\nb.github = 'Rain120'\nlet c = { job: 'front-end' };\n")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"reference-assignment.png",src:n(35332).Z})),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u7c7b\u578b"),": \u5bf9\u8c61",(0,p.kt)("inlineCode",{parentName:"p"},"object"),", \u51fd\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"function"),", \u6570\u7ec4",(0,p.kt)("inlineCode",{parentName:"p"},"array"),", \u7c7b\u578b\u7684\u5305\u88c5\u51fd\u6570",(0,p.kt)("inlineCode",{parentName:"p"},"Object")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Array")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Number"),"  ",(0,p.kt)("inlineCode",{parentName:"p"},"String")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Boolean"),",  ",(0,p.kt)("inlineCode",{parentName:"p"},"Math")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Date")," ",(0,p.kt)("inlineCode",{parentName:"p"},"RegExp")," \u5e93\u51fd\u6570\u7b49"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u4e0d\u80fd\u76f4\u63a5\u64cd\u4f5c\u5bf9\u8c61\u7684\u5185\u5b58\u7a7a\u95f4 ",(0,p.kt)("strong",{parentName:"p"},"(\u5806\u5185\u5b58)"),"\u3002"),(0,p.kt)("h3",{id:"2-\u590d\u5236"},"2. ",(0,p.kt)("strong",{parentName:"h3"},"\u590d\u5236")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u503c\u7c7b\u578b\u590d\u5236\u662f\u503c\u672c\u8eab\u590d\u5236")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = 1;\nlet b = a;\n")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"value-copy.png",src:n(40472).Z})),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u5f15\u7528\u7c7b\u578b\u590d\u5236\u662f\u503c\u7684\u5f15\u7528\u590d\u5236")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = { name: 'Rainy' }\nlet b = a;\nb.github = 'Rain120'\n")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"reference-copy.png",src:n(56470).Z})),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note:")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u51fd\u6570\u4f20\u9012\u7684\u53c2\u6570\u662f",(0,p.kt)("strong",{parentName:"li"},"\u5f15\u7528\u7c7b\u578b"),"\u65f6\uff0c\u51fd\u6570\u7684\u53c2\u6570\u662f\u4f20\u5165\u7684\u53c2\u6570\u7684\u5f15\u7528\uff0c\u6240\u4ee5",(0,p.kt)("strong",{parentName:"li"},"\u51fd\u6570\u5185\u90e8\u64cd\u4f5c\u53c2\u6570"),"\u4f1a\u5bf9\u4f20\u5165\u7684\u53c2\u6570\u9020\u6210\u526f\u4f5c\u7528"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"==")," \u548c ",(0,p.kt)("inlineCode",{parentName:"li"},"==="),"\u5bf9\u5f15\u7528\u7c7b\u578b\u7684\u503c\u5224\u65ad\u7ed3\u679c\u662f\u4e00\u6837\u7684\uff0c\u4e0d\u51c6\u786e\u3002")),(0,p.kt)("h2",{id:"\u5bf9\u8c61\u5f15\u7528"},"\u5bf9\u8c61\u5f15\u7528"),(0,p.kt)("p",null,"\u5bf9\u8c61\u5f15\u7528\u5c31\u662f\u5c06\u4e00\u4e2a",(0,p.kt)("strong",{parentName:"p"},"\u5f15\u7528\u7c7b\u578b\u7684\u503c"),"\u590d\u5236\u7ed9 ",(0,p.kt)("strong",{parentName:"p"},"\u53e6\u4e00\u4e2a\u53d8\u91cf"),"\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u5c06 ",(0,p.kt)("strong",{parentName:"p"},"\u5f15\u7528\u7c7b\u578b\u7684\u5806\u5730\u5740")," \u590d\u5236\u7ed9\u65b0\u53d8\u91cf\u3002"),(0,p.kt)("p",null,"\u8be6\u7ec6\u89c1\u4e0a\u56fe"))}m.isMDXComponent=!0},35332:function(e,t,n){t.Z=n.p+"assets/images/reference-assignment-5f18aa1d3d69fd466ae93c931f4fbad2.png"},56470:function(e,t,n){t.Z=n.p+"assets/images/reference-copy-9d6d52356e772bd48edc4de1ba16980f.png"},24081:function(e,t,n){t.Z=n.p+"assets/images/value-assignment-5cf82cbd5243e25d3118960472d02ccb.png"},40472:function(e,t,n){t.Z=n.p+"assets/images/value-copy-a703cd7fe119738238812ec4e7a7e96b.png"}}]);