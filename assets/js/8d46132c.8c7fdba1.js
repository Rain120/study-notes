"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2803],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70066:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},s=void 0,l={unversionedId:"shell/common-git-commands",id:"shell/common-git-commands",isDocsHomePage:!1,title:"common-git-commands",description:"Bash \u83b7\u53d6 git\u5f53\u524d\u7684\u5206\u652f\u540d",source:"@site/engineering/shell/common-git-commands.md",sourceDirName:"shell",slug:"/shell/common-git-commands",permalink:"/study-notes/engineering/shell/common-git-commands",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638186201,formattedLastUpdatedAt:"11/29/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"note",permalink:"/study-notes/engineering/nginx/note"},next:{title:"guide",permalink:"/study-notes/engineering/shell/guide"}},u=[{value:"<code>Bash</code> \u83b7\u53d6 <code>git</code>\u5f53\u524d\u7684\u5206\u652f\u540d",id:"bash-\u83b7\u53d6-git\u5f53\u524d\u7684\u5206\u652f\u540d",children:[],level:4}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"bash-\u83b7\u53d6-git\u5f53\u524d\u7684\u5206\u652f\u540d"},(0,a.kt)("inlineCode",{parentName:"h4"},"Bash")," \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h4"},"git"),"\u5f53\u524d\u7684\u5206\u652f\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git rev-parse --abbrev-ref HEAD\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git symbolic-ref --short -q HEAD\n\ngit symbolic-ref HEAD | sed 's!refs\\/heads\\/!!'\n")))}m.isMDXComponent=!0}}]);