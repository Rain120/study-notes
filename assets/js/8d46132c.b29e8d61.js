"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2803],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70066:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={},c="Shell \u4e2d\u5e38\u7528\u7684 Git \u547d\u4ee4",s={unversionedId:"shell/common-git-commands",id:"shell/common-git-commands",isDocsHomePage:!1,title:"Shell \u4e2d\u5e38\u7528\u7684 Git \u547d\u4ee4",description:"Bash \u83b7\u53d6 git\u5f53\u524d\u7684\u5206\u652f\u540d",source:"@site/engineering/shell/common-git-commands.md",sourceDirName:"shell",slug:"/shell/common-git-commands",permalink:"/study-notes/engineering/shell/common-git-commands",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638952634,formattedLastUpdatedAt:"12/8/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Shell \u57fa\u7840\u77e5\u8bc6",permalink:"/study-notes/engineering/shell/shell"},next:{title:"\u5206\u4eab\u8d44\u6e90",permalink:"/study-notes/engineering/shell/resources"}},u=[{value:"<code>Bash</code> \u83b7\u53d6 <code>git</code>\u5f53\u524d\u7684\u5206\u652f\u540d",id:"bash-\u83b7\u53d6-git\u5f53\u524d\u7684\u5206\u652f\u540d",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shell-\u4e2d\u5e38\u7528\u7684-git-\u547d\u4ee4"},"Shell \u4e2d\u5e38\u7528\u7684 Git \u547d\u4ee4"),(0,a.kt)("h2",{id:"bash-\u83b7\u53d6-git\u5f53\u524d\u7684\u5206\u652f\u540d"},(0,a.kt)("inlineCode",{parentName:"h2"},"Bash")," \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"git"),"\u5f53\u524d\u7684\u5206\u652f\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git rev-parse --abbrev-ref HEAD\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git symbolic-ref --short -q HEAD\n\ngit symbolic-ref HEAD | sed 's!refs\\/heads\\/!!'\n")))}m.isMDXComponent=!0}}]);