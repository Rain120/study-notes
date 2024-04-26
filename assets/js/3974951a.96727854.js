"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3789],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,c(c({ref:n},s),{},{components:t})):r.createElement(m,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3905:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});t(59496);var r=t(49613);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={},i="CentOS\u4e0b\u5b89\u88c5 Node",l={unversionedId:"docker/centos-node-install",id:"docker/centos-node-install",title:"CentOS\u4e0b\u5b89\u88c5 Node",description:"Centos\u5b89\u88c5",source:"@site/engineering/docker/centos-node-install.md",sourceDirName:"docker",slug:"/docker/centos-node-install",permalink:"/study-notes/engineering/docker/centos-node-install",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638952634,formattedLastUpdatedAt:"Dec 8, 2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Docker \u5feb\u901f\u5165\u95e8",permalink:"/study-notes/engineering/docker/quick-start"},next:{title:"Docker \u547d\u4ee4",permalink:"/study-notes/engineering/docker/command/docker-command"}},u={},s=[{value:"<code>Centos</code>\u5b89\u88c5",id:"centos\u5b89\u88c5",level:2},{value:"<code>Wget</code>\u5b89\u88c5",id:"wget\u5b89\u88c5",level:2},{value:"<code>Node</code>\u5b89\u88c5",id:"node\u5b89\u88c5",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}],d={toc:s};function p(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"centos\u4e0b\u5b89\u88c5-node"}),"CentOS\u4e0b\u5b89\u88c5 Node"),(0,r.kt)("h2",o({},{id:"centos\u5b89\u88c5"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Centos"),"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"# search\ndocker search centos\n\n# install\ndocker pull centos:7\n")),(0,r.kt)("h2",o({},{id:"wget\u5b89\u88c5"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Wget"),"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"yum install wget\n")),(0,r.kt)("h2",o({},{id:"node\u5b89\u88c5"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Node"),"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"# \u4e0b\u8f7d node \u5305\nwget https://nodejs.org/dist/v10.18.0/node-v10.18.0-linux-x64.tar.xz\n\n# \u89e3\u538b\u5b89\u88c5\u5305\n\nxz -d node-v10.18.0-linux-x64.tar.xz\n\ntar -xf node-v10.18.0-linux-x64.tar\n\n# nodejs\u521b\u5efa\u8f6f\u8fde\u63a5\n\nln -s /node-v10.18.0-linux-x64/bin/node /usr/bin/node\n\nln -s /node-v10.18.0-linux-x64/bin/npm /usr/bin/npm\n")),(0,r.kt)("h2",o({},{id:"\u6d4b\u8bd5"}),"\u6d4b\u8bd5"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"node -v\n\nnpm -v\n")))}p.isMDXComponent=!0}}]);