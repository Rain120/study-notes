"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[861],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(62848),r=n(79213),i=(n(59496),n(49613)),o=["components"],l={},c="React Fiber",s={unversionedId:"react/fiber",id:"react/fiber",title:"React Fiber",description:"\u6d4f\u89c8\u5668\u4e00\u5e27\u90fd\u505a\u4e9b\u4ec0\u4e48\uff1f",source:"@site/interview/react/fiber.md",sourceDirName:"react",slug:"/react/fiber",permalink:"/study-notes/interview/react/fiber",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649508805,formattedLastUpdatedAt:"4/9/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4f5c\u7528\u57df\u94fe",permalink:"/study-notes/interview/javascript/scope-chain"},next:{title:"CSRF \u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020(Cross-Site Request Forgery)",permalink:"/study-notes/interview/security/csrf"}},p={},d=[{value:"\u6d4f\u89c8\u5668\u4e00\u5e27\u90fd\u505a\u4e9b\u4ec0\u4e48\uff1f",id:"\u6d4f\u89c8\u5668\u4e00\u5e27\u90fd\u505a\u4e9b\u4ec0\u4e48",level:2},{value:"Fiber",id:"fiber",level:2},{value:"\u534f\u8c03\u9636\u6bb5 (Reconciliation Phase)",id:"\u534f\u8c03\u9636\u6bb5-reconciliation-phase",level:3},{value:"\u63d0\u4ea4\u9636\u6bb5 (Commit Phase)",id:"\u63d0\u4ea4\u9636\u6bb5-commit-phase",level:3},{value:"Scheduler",id:"scheduler",level:2},{value:"requestIdleCallback",id:"requestidlecallback",level:2},{value:"\u81ea\u5df1\u5b9e\u73b0\u7684\u539f\u56e0",id:"\u81ea\u5df1\u5b9e\u73b0\u7684\u539f\u56e0",level:3},{value:"\u5b9e\u73b0\u65b9\u5f0f",id:"\u5b9e\u73b0\u65b9\u5f0f",level:3},{value:"\u4efb\u52a1\u4f18\u5148\u7ea7",id:"\u4efb\u52a1\u4f18\u5148\u7ea7",level:3}],u={toc:d};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-fiber"},"React Fiber"),(0,i.kt)("h2",{id:"\u6d4f\u89c8\u5668\u4e00\u5e27\u90fd\u505a\u4e9b\u4ec0\u4e48"},"\u6d4f\u89c8\u5668\u4e00\u5e27\u90fd\u505a\u4e9b\u4ec0\u4e48\uff1f"),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u7684\u6bcf\u4e00\u5e27(WIP)"),(0,i.kt)("h2",{id:"fiber"},"Fiber"),(0,i.kt)("h3",{id:"\u534f\u8c03\u9636\u6bb5-reconciliation-phase"},"\u534f\u8c03\u9636\u6bb5 (Reconciliation Phase)"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u53ef\u88ab\u4e2d\u65ad, \u53ef\u6062\u590d, \u53ef\u8ba9\u51fa\u6267\u884c\u63a7\u5236\u6743, \u751f\u547d\u5468\u671f\u51fd\u6570\u53ef\u80fd\u4f1a\u6267\u884c\u591a\u6b21, \u9875\u9762\u4e0d\u4f1a\u53d1\u751f\u53d8\u66f4")),(0,i.kt)("p",{parentName:"div"},"\u4e3b\u8981\u662f\u8fdb\u884c VDom\u7684 diff, \u627e\u51fa\u8282\u70b9\u7684\u53d8\u66f4(Effect), \u6bd4\u5982\u8bf4\u8282\u70b9\u7684\u66f4\u65b0, \u65b0\u589e, \u5220\u9664, Props\u53d8\u66f4\u7b49, \u4e00\u822c\u4f1a\u8c03\u7528\u8fd9\u4e9b\u751f\u547d\u5468\u671f:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"constructor"),(0,i.kt)("li",{parentName:"ul"},"getDerivedStateFromProps"),(0,i.kt)("li",{parentName:"ul"},"shouldComponentUpdate"),(0,i.kt)("li",{parentName:"ul"},"render")))),(0,i.kt)("p",null,"\u5728\u6267\u884c\u5b8c\u534f\u8c03\u4efb\u52a1\u4e4b\u540e, \u8fdb\u5165\u63d0\u4ea4\u9636\u6bb5\u4e4b\u524d, fiber \u4f1a\u6267\u884c getSnapshotBeforeUpdate\u3002"),(0,i.kt)("h3",{id:"\u63d0\u4ea4\u9636\u6bb5-commit-phase"},"\u63d0\u4ea4\u9636\u6bb5 (Commit Phase)"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u88ab\u4e2d\u65ad, \u9875\u9762\u4f1a\u53d1\u751f\u53d8\u66f4")),(0,i.kt)("p",{parentName:"div"},"\u4e3b\u8981\u662f\u5bf9\u4e0a\u4e00\u9636\u6bb5\u8282\u70b9\u7684\u53d8\u66f4(Effect)\u8fdb\u884c\u5408\u5e76\u66f4\u65b0, \u4e00\u822c\u4f1a\u8c03\u7528\u8fd9\u4e9b\u751f\u547d\u5468\u671f:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"componentDidMount"),(0,i.kt)("li",{parentName:"ul"},"componentDidUpdate"),(0,i.kt)("li",{parentName:"ul"},"componentWillUnmount")),(0,i.kt)("p",{parentName:"div"},"\u6240\u4ee5, \u5c3d\u91cf\u5c11\u5728\u8fd9\u4e2a\u9636\u6bb5\u53bb\u5bf9 state \u8fdb\u884c\u4fee\u6539"))),(0,i.kt)("h2",{id:"scheduler"},"Scheduler"),(0,i.kt)("h2",{id:"requestidlecallback"},"requestIdleCallback"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2015/08/using-requestidlecallback"},"Using requestIdleCallback")),(0,i.kt)("h3",{id:"\u81ea\u5df1\u5b9e\u73b0\u7684\u539f\u56e0"},"\u81ea\u5df1\u5b9e\u73b0\u7684\u539f\u56e0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u7684\u95ee\u9898 ",(0,i.kt)("a",{parentName:"li",href:"https://caniuse.com/?search=requestIdleCallback"},"requestIdleCallback Usage"),(0,i.kt)("img",{alt:"requestIdleCallback-polyfill.png",src:n(31639).Z,width:"1813",height:"625"})),(0,i.kt)("li",{parentName:"ul"},"requestIdleCallback \u4f9d\u8d56\u4e8e\u663e\u793a\u5668\u7684\u5237\u65b0\u9891\u7387, \u4f7f\u7528\u65f6\u9700\u8981\u770b vsync cycle\uff08\u6307\u786c\u4ef6\u8bbe\u5907\u7684\u9891\u7387\uff09")),(0,i.kt)("h3",{id:"\u5b9e\u73b0\u65b9\u5f0f"},"\u5b9e\u73b0\u65b9\u5f0f"),(0,i.kt)("p",null,"\u91c7\u7528MessageChannel, \u653e\u5f03\u4e86\u6d4f\u89c8\u5668\u5bf9\u5e27\u7684\u4f9d\u8d56\u7b56\u7565, \u8f6c\u4e3a\u8ba4\u4e3a\u63a7\u5236\u8c03\u5ea6\u7684\u9891\u7387\u3002\u63d0\u5347\u4e86\u4efb\u52a1\u7684\u5904\u7406\u901f\u5ea6, \u4f18\u5316React\u8fd0\u884c\u65f6\u7684\u6027\u80fd\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"MessageChannel\uff08\u6d88\u606f\u901a\u9053\u901a\u4fe1\uff09\u662f\u70b9\u5bf9\u70b9\u7684\u7ba1\u9053\u901a\u4fe1\u65b9\u5f0f\u3002\u5b83\u53ef\u5c06\u4ee3\u7801\u5757\u72ec\u7acb\u5730\u8fd0\u884c\u5728\u4e0d\u540c\u7684\u6d4f\u89c8\u5668\u4e0a\u4e0b\u6587\u4e2d\u3002\u4e0d\u540c\u7684\u4e0a\u4e0b\u6587, \u901a\u8fc7\u5b83\u5efa\u7acb\u7684\u7ba1\u9053\u8fdb\u884c\u6d88\u606f\u4f20\u8f93\u3002MessageChannel\u4e3b\u8981\u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u53ea\u8bfb\u7684MessagePort: port1\u548cport2, \u8fd9\u4e24\u4e2a\u7aef\u53e3\u642d\u5efa\u8d77\u4e86\u6d88\u606f\u901a\u9053\u63a5\u624b\u7684\u6865\u6881"),(0,i.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7aef\u53e3\u4f5c\u4e3a\u672c\u5730\u7aef\u53e3, \u53e6\u4e00\u4e2a\u7aef\u53e3\u4f20\u9012\u7ed9\u8fdc\u7a0b\u7a97\u53e3\u4f7f\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u6d88\u606f\u5c06\u4ee5DOM\u4e8b\u4ef6\u7684\u65b9\u5f0f\u4f20\u9012, \u4e0d\u4f1a\u4e2d\u65ad\u6216\u963b\u585e\u4e8b\u4ef6\u5faa\u73af\u4e2d\u7684task\u4efb\u52a1")))),(0,i.kt)("h3",{id:"\u4efb\u52a1\u4f18\u5148\u7ea7"},"\u4efb\u52a1\u4f18\u5148\u7ea7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// React\u5185\u90e8\u4f7f\u7528\uff1a\u521d\u59cb\u5316\u548c\u91cd\u7f6eroot\uff1b\u7528\u6237\u81ea\u5b9a\u4e49\u4f7f\u7528\nexport const NoPriority = 0; // \u6ca1\u6709\u4efb\u4f55\u4f18\u5148\u7ea7\nexport const ImmediatePriority = 1; // \u7acb\u5373\u6267\u884c\u7684\u4f18\u5148\u7ea7\uff0c\u7ea7\u522b\u6700\u9ad8\nexport const UserBlockingPriority = 2; // \u7528\u6237\u963b\u585e\u7ea7\u522b\u7684\u4f18\u5148\u7ea7\nexport const NormalPriority = 3; // \u6b63\u5e38\u7684\u4f18\u5148\u7ea7\nexport const LowPriority = 4; // \u8f83\u4f4e\u7684\u4f18\u5148\u7ea7\nexport const IdlePriority = 5; // \u4f18\u5148\u7ea7\u6700\u4f4e\uff0c\u8868\u793a\u4efb\u52a1\u53ef\u4ee5\u95f2\u7f6e\n\n// \u4e0d\u540c\u4f18\u5148\u7ea7\u5bf9\u5e94\u7684\u4e0d\u540c\u7684\u4efb\u52a1\u8fc7\u671f\u65f6\u95f4\u95f4\u9694\nconst IMMEDIATE_PRIORITY_TIMEOUT = -1;\nconst USER_BLOCKING_PRIORITY_TIMEOUT = 250;\nconst NORMAL_PRIORITY_TIMEOUT = 5000;\nconst LOW_PRIORITY_TIMEOUT = 10000;\n// Never times out\nconst IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;\n")))}m.isMDXComponent=!0},31639:function(e,t,n){t.Z=n.p+"assets/images/requestIdleCallback-polyfill-705060e196dea04833ae2bdedde37d14.png"}}]);