"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1058],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),m=c(n),g=i,f=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return n?r.createElement(f,a(a({ref:e},l),{},{components:n})):r.createElement(f,a({ref:e},l))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15807:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],p={},u="Github Actions \u63d0\u5347",c={unversionedId:"git-npm/git/github-action-improve",id:"git-npm/git/github-action-improve",title:"Github Actions \u63d0\u5347",description:"github-actions.jpg",source:"@site/engineering/git-npm/git/github-action-improve.md",sourceDirName:"git-npm/git",slug:"/git-npm/git/github-action-improve",permalink:"/study-notes/engineering/git-npm/git/github-action-improve",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646902378,formattedLastUpdatedAt:"3/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Git Tips",permalink:"/study-notes/engineering/git-npm/git/git-tips"},next:{title:"Github Actions \u521d\u5b9e\u8df5",permalink:"/study-notes/engineering/git-npm/git/github-action"}},l=[{value:"GitHub Actions",id:"github-actions",children:[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],s={toc:l};function m(t){var e=t.components,p=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github-actions-\u63d0\u5347"},"Github Actions \u63d0\u5347"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"github-actions.jpg",src:n(50942).Z})),(0,o.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"github actions")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"GitHub Actions"),"\u662f\u73b0\u4eca\u975e\u5e38\u4f18\u79c0\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"CI / CD"),"\u5de5\u5177\uff0c\u5b83\u4f7f\u4f60\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u6240\u6709\u8f6f\u4ef6\u5de5\u4f5c\u6d41\u7a0b\u7684\u81ea\u52a8\u5316\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"GitHub"),"\u4e2d\u6784\u5efa\uff0c\u6d4b\u8bd5\u548c\u90e8\u7f72\u4ee3\u7801\u3002\u6309\u7167\u4f60\u6240\u5e0c\u671b\u7684\u65b9\u5f0f\u8fdb\u884c\u4ee3\u7801\u68c0\u67e5\u3001\u5206\u652f\u7ba1\u7406\u548c\u95ee\u9898\u7b5b\u9009\u5de5\u4f5c\u3002")),(0,o.kt)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"workflow(\u5de5\u4f5c\u6d41\u7a0b)\uff1a\u6301\u7eed\u96c6\u6210\u4e00\u6b21\u8fd0\u884c\u7684\u8fc7\u7a0b\uff0c\u5c31\u662f\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"job(\u4efb\u52a1)\uff1a\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow")," \u7531\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"jobs")," \u6784\u6210\uff0c\u542b\u4e49\u662f\u4e00\u6b21\u6301\u7eed\u96c6\u6210\u7684\u8fd0\u884c\uff0c\u53ef\u4ee5\u5b8c\u6210\u591a\u4e2a\u4efb\u52a1\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"step(\u6b65\u9aa4)\uff1a\u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"job")," \u7531\u591a\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"step")," \u6784\u6210\uff0c\u4e00\u6b65\u6b65\u5b8c\u6210\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"action(\u52a8\u4f5c)\uff1a\u6bcf\u4e2a step \u53ef\u4ee5\u4f9d\u6b21\u6267\u884c\u4e00\u4e2a\u6216\u591a\u4e2a\u547d\u4ee4",(0,o.kt)("inlineCode",{parentName:"p"},"(action)"),"\u3002"))),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"},"GitHub Actions \u5165\u95e8\u6559\u7a0b")))}m.isMDXComponent=!0},50942:function(t,e,n){e.Z=n.p+"assets/images/github-actions-2cd69780ec250d9837f0f9d98db5852e.jpg"}}]);