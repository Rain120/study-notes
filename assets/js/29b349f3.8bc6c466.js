"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[187],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6510:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=r(45443),a=r(13010),o=(r(59496),r(49613)),s=["components"],i={sidebar_position:1},c="\u5b66\u4e60\u8d44\u6e90",p={unversionedId:"css/resource",id:"css/resource",title:"\u5b66\u4e60\u8d44\u6e90",description:"CSS \u76f8\u5173",source:"@site/fe/css/resource.md",sourceDirName:"css",slug:"/css/resource",permalink:"/study-notes/fe/css/resource",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648650815,formattedLastUpdatedAt:"3/30/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Summary",permalink:"/study-notes/fe/guide"},next:{title:"CSS \u4fee\u6539 input, textarea \u7b49\u63a7\u4ef6 placeholder \u7684\u989c\u8272",permalink:"/study-notes/fe/css/change-inputs-placeholder"}},u={},l=[{value:"CSS \u76f8\u5173",id:"css-\u76f8\u5173",level:2}],f={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b66\u4e60\u8d44\u6e90"},"\u5b66\u4e60\u8d44\u6e90"),(0,o.kt)("h2",{id:"css-\u76f8\u5173"},"CSS \u76f8\u5173"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://daneden.github.io/animate.css/"},"Animate.css"),": \u4e00\u4e2a\u4f7f\u7528CSS3\u7684animation\u5236\u4f5c\u7684\u52a8\u753b\u6548\u679c\u7684CSS\u96c6\u5408\uff0c\u91cc\u9762\u9884\u8bbe\u4e86\u5f88\u591a\u79cd\u5e38\u7528\u7684\u52a8\u753b\uff0c\u4e14\u4f7f\u7528\u975e\u5e38\u7b80\u5355\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://ianlunn.github.io/Hover/"},"Hover")," -> ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/IanLunn/Hover"},"Github"),": CSS3\u52a8\u529b\u60ac\u505c\u6548\u679c\u7684\u96c6\u5408\uff0c\u9002\u7528\u4e8e\u94fe\u63a5\uff0c\u6309\u94ae\uff0c\u5fbd\u6807\uff0cSVG\uff0c\u7279\u8272\u56fe\u50cf\u7b49\u3002 \u8f7b\u677e\u5e94\u7528\u4e8e\u60a8\u81ea\u5df1\u7684\u5143\u7d20\uff0c\u4fee\u6539\u6216\u4ec5\u7528\u4e8e\u7075\u611f\u3002 \u63d0\u4f9bCSS\uff0cSass\u548cLESS\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://css-tricks.com/"},"css-tricks"),": \u5206\u4eab\u4f7f\u7528CSS\u6837\u5f0f\u7684\u6280\u5de7\u3001\u7ecf\u9a8c\u548c\u6559\u7a0b\u7b49\u3002\u503c\u5f97\u524d\u7aef\u5f00\u53d1\u8005\u9605\u8bfb\u6536\u85cf\u7684\u56fd\u5916\u7f51\u7ad9\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cssbattle.dev/"},"CSS Battle"),": \u4e00\u4e9b",(0,o.kt)("inlineCode",{parentName:"p"},"CSS"),"\u7684\u6311\u6218\u9898\u76ee"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cssreference.io/"},"cssreference"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"cssreference.io"),"\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"CSS"),"\u7684\u514d\u8d39\u53ef\u89c6\u6307\u5357\u3002 \u5b83\u5177\u6709\u6700\u53d7\u6b22\u8fce\u7684\u5c5e\u6027\uff0c\u5e76\u901a\u8fc7\u63d2\u56fe\u548c\u52a8\u753b\u793a\u4f8b\u5bf9\u5176\u8fdb\u884c\u8bf4\u660e\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://grid.malven.co/"},"grid"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"CSS Grid"),"\u5e03\u5c40"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://macsvg.org/"},"Mac Svg \u751f\u6210\u5668")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://apps.eky.hk/css-triangle-generator/zh-hant"},"css-triangle-generator"),": \u5feb\u901f\u751f\u6210\u4e09\u89d2\u5f62\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"css")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://csstriggers.com/"},"csstriggers"),":  CSS \u5c5e\u6027\u5728\u4e0d\u540c\u7684\u6e32\u67d3\u5f15\u64ce\u4e2d\u662f\u5426\u4f1a\u89e6\u53d1\u91cd\u6392\u6216\u91cd\u7ed8"))}m.isMDXComponent=!0}}]);