"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2305],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8133:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});n(59496);var r=n(49613);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},o="\u57fa\u672c\u4ecb\u7ecd",p={unversionedId:"react/better-scroll/base",id:"react/better-scroll/base",title:"\u57fa\u672c\u4ecb\u7ecd",description:"better-scroll\u662f\u4ec0\u4e48?",source:"@site/fe/react/better-scroll/base.md",sourceDirName:"react/better-scroll",slug:"/react/better-scroll/base",permalink:"/study-notes/fe/react/better-scroll/base",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1659530206,formattedLastUpdatedAt:"Aug 3, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"React \u751f\u547d\u5468\u671f",permalink:"/study-notes/fe/react/lifecycle"},next:{title:"Scroll",permalink:"/study-notes/fe/react/better-scroll/scroll"}},c={},u=[{value:"better-scroll\u662f\u4ec0\u4e48?",id:"better-scroll\u662f\u4ec0\u4e48",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528better-scroll?",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528better-scroll",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u505a\u8fd9\u4e2a\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u505a\u8fd9\u4e2a",level:2},{value:"\u5b9e\u8df5\u5185\u5bb9",id:"\u5b9e\u8df5\u5185\u5bb9",level:2},{value:"\u9047\u5230\u7684\u95ee\u9898",id:"\u9047\u5230\u7684\u95ee\u9898",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],s={toc:u};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u57fa\u672c\u4ecb\u7ecd"}),"\u57fa\u672c\u4ecb\u7ecd"),(0,r.kt)("h2",a({},{id:"better-scroll\u662f\u4ec0\u4e48"}),"better-scroll\u662f\u4ec0\u4e48?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BetterScroll "),"\u662f\u4e00\u6b3e\u91cd\u70b9\u89e3\u51b3\u79fb\u52a8\u7aef\uff08\u5df2\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"}," PC"),"\uff09\u5404\u79cd\u6eda\u52a8\u573a\u666f\u9700\u6c42\u7684\u63d2\u4ef6\u3002\u5b83\u7684\u6838\u5fc3\u662f\u501f\u9274\u7684 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/cubiq/iscroll"}),"iscroll")," \u7684\u5b9e\u73b0\uff0c\u5b83\u7684 API \u8bbe\u8ba1\u57fa\u672c\u517c\u5bb9",(0,r.kt)("inlineCode",{parentName:"p"}," iscroll"),"\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"}," iscroll")," \u7684\u57fa\u7840\u4e0a\u53c8\u6269\u5c55\u4e86\u4e00\u4e9b ",(0,r.kt)("inlineCode",{parentName:"p"},"feature "),"\u4ee5\u53ca\u505a\u4e86\u4e00\u4e9b\u6027\u80fd\u4f18\u5316\u3002"),(0,r.kt)("h2",a({},{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528better-scroll"}),"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528better-scroll?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f18\u96c5\u7684\u6eda\u52a8\uff1a\u4e3a\u79fb\u52a8\u7aef\uff08\u5df2\u652f\u6301 PC\uff09\u5404\u79cd\u6eda\u52a8\u573a\u666f\u63d0\u4f9b\u4e1d\u6ed1\u7684\u6eda\u52a8\u6548\u679c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u96f6\u4f9d\u8d56\uff1a\u57fa\u4e8e\u539f\u751f JS \u5b9e\u73b0\u7684\uff0c\u4e0d\u4f9d\u8d56\u4efb\u4f55\u6846\u67b6\u3002\u5b8c\u7f8e\u8fd0\u7528\u4e8e Vue\u3001React \u7b49 MVVM \u6846\u67b6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u7075\u6d3b\uff1a\u63d0\u4f9b\u4e86\u63d2\u4ef6\u673a\u5236\uff0c\u4fbf\u4e8e\u5bf9\u57fa\u7840\u6eda\u52a8\u8fdb\u884c\u529f\u80fd\u6269\u5c55\u3002")),(0,r.kt)("h2",a({},{id:"\u4e3a\u4ec0\u4e48\u8981\u505a\u8fd9\u4e2a"}),"\u4e3a\u4ec0\u4e48\u8981\u505a\u8fd9\u4e2a\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b66\u4e60",(0,r.kt)("inlineCode",{parentName:"li"},"React Hooks"),"\u7684\u4f7f\u7528(\u6682\u672a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"hooks"),"\u76f8\u5173\u77e5\u8bc6)"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u81ea\u5df1\u7684\u524d\u7aef\u5f00\u53d1\u6280\u80fd"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},"\u5b66\u4e60\u5982\u4f55\u5206\u4eab\u4ee5\u53ca\u589e\u5f3a\u81ea\u5df1\u7684\u6f14\u8bf4\u80fd\u529b"))),(0,r.kt)("h2",a({},{id:"\u5b9e\u8df5\u5185\u5bb9"}),"\u5b9e\u8df5\u5185\u5bb9"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"16.8.6")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"better-scroll"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0.0-bate.2")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"./scroll"}),"\u57fa\u7840\u7ec4\u4ef6Scroll\u5f00\u53d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"./slider"}),"Slider \u7ec4\u4ef6\u5f00\u53d1")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"./sticky"}),"Sticky \u7ec4\u4ef6\u5f00\u53d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SlideMenu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CascaMenu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pullup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PullDown"))),(0,r.kt)("p",null,(0,r.kt)("del",{parentName:"p"},"\u63a5\u4e0b\u6765\u6211\u4f1a\u4ee5\u89c6\u9891\u7684\u65b9\u5f0f\uff0c\u6765\u8bb2\u89e3\u5982\u4f55\u5f00\u53d1\u8fd9\u4e9b\u7ec4\u4ef6\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"srr"),", \u7531\u4e8e\u5de5\u4f5c\u5173\u7cfb\uff0c\u6682\u65f6\u4e0d\u66f4\u65b0\u89c6\u9891\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"bug"),"\u4fee\u590d\uff0c"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://rain120.github.io/better-scroll-for-react-usage/dist/#/"}),"Online Demo")),(0,r.kt)("h2",a({},{id:"\u9047\u5230\u7684\u95ee\u9898"}),"\u9047\u5230\u7684\u95ee\u9898"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"create-react-app \u9879\u76ee\u5728 npm run build \u540e\uff0c index.html \u7684\u8def\u5f84 /static/xxx \u5bfc\u81f4\u8d44\u6e90\u627e\u4e0d\u5230")),(0,r.kt)("admonition",a({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"public/index.html"),"\u4e2d\u7684\u6ce8\u91ca\u8bf4\u9053"),(0,r.kt)("p",{parentName:"admonition"},"Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," folder during the build. Only files inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),' folder can be referenced from the HTML. Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will work correctly both with client-side routing and a non-root public URL. Learn how to configure a non-root public URL by running ',(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),"."),(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"\uff05PUBLIC_URL\uff05"),"\u7684\u8def\u5f84\u5728\u6784\u5efa\u671f\u95f4\uff0c\u5b83\u5c06\u88ab",(0,r.kt)("inlineCode",{parentName:"p"},"public"),"\u6587\u4ef6\u5939\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"URL"),"\u66ff\u6362\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"HTML"),"\u53ea\u80fd\u5f15\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"public"),"\u6587\u4ef6\u5939\u4e2d\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5b98\u65b9\u8fd8\u5728\u9879\u76ee\u4e2d\u6ce8\u5165\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"process.env.PUBLIC_URL"),"\u73af\u5883\u53d8\u91cf\uff0c\u540c\u6837\u5f15\u7528\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"public"),"\u76ee\u5f55\uff0c\u5177\u4f53\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",a({parentName:"p"},{href:"https://create-react-app.dev/docs/using-the-public-folder"}),"\u5b98\u65b9\u6587\u6863 - Using the Public Folder"),"\u548c\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"config/env.js"),"\u4e2d\u67e5\u627e\u5148\u5173\u5185\u5bb9\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Useful for resolving the correct path to static assets in ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),". For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"<img src={process.env.PUBLIC_URL + '/img/logo.png'} />"),". This should only be used as an escape hatch. Normally you would put images into the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," them in code to get their paths.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5:")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u589e\u52a0\u8fd9\u4e00\u6761\u5c5e\u6027\u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'// package.json\n{\n  "homepage": "."\n}\n')),(0,r.kt)("h2",a({},{id:"\u53c2\u8003\u8d44\u6599"}),"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://better-scroll.github.io/docs/en-US/"}),"BetterScroll 2.x\u5b98\u65b9\u6587\u6863")))}m.isMDXComponent=!0}}]);