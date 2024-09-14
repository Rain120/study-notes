"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8183],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});n(59496);var r=n(49613);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},l="\u8def\u7531\u52ab\u6301 (WIP)",p={unversionedId:"micro-frontends/route",id:"micro-frontends/route",title:"\u8def\u7531\u52ab\u6301 (WIP)",description:"\u601d\u8003",source:"@site/engineering/micro-frontends/route.md",sourceDirName:"micro-frontends",slug:"/micro-frontends/route",permalink:"/study-notes/engineering/micro-frontends/route",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1651584303,formattedLastUpdatedAt:"May 3, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/study-notes/engineering/micro-frontends/lifecycle"},next:{title:"\u6c99\u7bb1",permalink:"/study-notes/engineering/micro-frontends/sandbox"}},s={},c=[{value:"\u601d\u8003",id:"\u601d\u8003",level:2},{value:"\u8def\u7531\u7684\u5206\u7c7b",id:"\u8def\u7531\u7684\u5206\u7c7b",level:2},{value:"\u52ab\u6301\u5b9e\u73b0",id:"\u52ab\u6301\u5b9e\u73b0",level:2},{value:"\u601d\u8def",id:"\u601d\u8def",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"\u4f18\u5316\u70b9",id:"\u4f18\u5316\u70b9",level:3}],u={toc:c};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"\u8def\u7531\u52ab\u6301-wip"}),"\u8def\u7531\u52ab\u6301 (WIP)"),(0,r.kt)("h2",o({},{id:"\u601d\u8003"}),"\u601d\u8003"),(0,r.kt)("p",null,"\u5fae\u524d\u7aef\u53ef\u4ee5\u5177\u6709 SPA (Single-page Application) \u7684\u5f00\u53d1\u4f53\u9a8c, \u4e5f\u53ef\u4ee5\u5177\u5907 MPA(Multi-page Application) \u5e94\u7528\u5e26\u6765\u7684\u7075\u6d3b\u6027\u3002\u4f46\u662f\u5728 SPA \u9875\u9762\u4e2d, \u8def\u7531\u53d8\u5316\u662f\u4e0d\u4f1a\u5f15\u53d1\u9875\u9762\u5237\u65b0\u7684\u3002\u6211\u4eec\u8981\u5982\u4f55\u76d1\u542c\u8def\u7531\u7684\u53d8\u5316\u5462\uff1f"),(0,r.kt)("h2",o({},{id:"\u8def\u7531\u7684\u5206\u7c7b"}),"\u8def\u7531\u7684\u5206\u7c7b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"hash"),(0,r.kt)("admonition",o({parentName:"li"},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"\u8868\u73b0\u5f62\u5f0f: ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," \u4e2d\u643a\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),", \u4e3e\u4e2a \ud83c\udf30 ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx.com/#/rain120"),"\n\u65b9\u5f0f: \u53ef\u4ee5\u901a\u8fc7\u76d1\u542c ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/hashchange_event"}),"window hashchange")," \u4e8b\u4ef6\u83b7\u53d6\u8def\u7531\u7684\u53d8\u5316"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history"}),"history")),(0,r.kt)("admonition",o({parentName:"li"},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"\u8868\u73b0\u5f62\u5f0f: \u5e38\u89c1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"URL")," \u5f62\u5f0f\n\u65b9\u5f0f:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u524d\u8fdb(forward), \u540e\u9000(back), \u8df3\u8f6c(go) \u53ef\u4ee5\u901a\u8fc7\u76d1\u542c popstate \u7684\u53d8\u5316"),(0,r.kt)("li",{parentName:"ol"},"\u8def\u7531\u7684\u5207\u6362\u53ef\u4ee5\u901a\u8fc7\u76d1\u542c pushState, replaceState \u7684\u53d8\u5316"))))),(0,r.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u53c2\u8003",(0,r.kt)("a",o({parentName:"p"},{href:"https://rain120.github.io/study-notes/fe/javascript/key-concept/router"}),"Javascript \u6838\u5fc3\u6982\u5ff5 \u8def\u7531")),(0,r.kt)("h2",o({},{id:"\u52ab\u6301\u5b9e\u73b0"}),"\u52ab\u6301\u5b9e\u73b0"),(0,r.kt)("h3",o({},{id:"\u601d\u8def"}),"\u601d\u8def"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76d1\u542c ",(0,r.kt)("inlineCode",{parentName:"li"},"hashchange")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"popstate")," \u4e8b\u4ef6\uff0c\u5e76\u5b9e\u73b0\u5904\u7406\u903b\u8f91"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u5199 ",(0,r.kt)("inlineCode",{parentName:"li"},"pushState")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"replaceState"),"\uff0c\u5e76\u5b9e\u73b0\u5904\u7406\u903b\u8f91")),(0,r.kt)("h3",o({},{id:"\u5b9e\u73b0"}),"\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"// route/index.ts\n\n// restore origin history method\nconst originPushState = window.history.pushState;\nconst originReplaceState = window.history.replaceState;\n\nexport const onRouteChange = () => {\n    window.addEventListener(\n        'popstate',\n        () => {\n            console.log('The popstate has changed!');\n\n            // other things to do here\n        },\n        false\n    );\n\n    window.addEventListener(\n        'hashchange',\n        () => {\n            console.log('The hash has changed!');\n\n            // other things to do here\n        },\n        false\n    );\n\n    window.history.pushState = (...args) => {\n        originPushState.apply(window.history, args);\n\n        // other things to do here\n    };\n\n    window.history.replaceState = (...args) => {\n        originReplaceState.apply(window.history, args);\n\n        // other things to do here\n    };\n};\n")),(0,r.kt)("h3",o({},{id:"\u4f18\u5316\u70b9"}),"\u4f18\u5316\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316\u65f6\u8def\u7531\u4fe1\u606f\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u91cd\u590d URL \u5904\u7406\u903b\u8f91"),(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u8def\u7531\u5904\u7406")))}d.isMDXComponent=!0}}]);