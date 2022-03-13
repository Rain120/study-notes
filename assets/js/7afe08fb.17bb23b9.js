"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1810],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),k=o,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25595:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={sidebar_position:2},u="Docker \u5feb\u901f\u5165\u95e8",s={unversionedId:"docker/quick-start",id:"docker/quick-start",title:"Docker \u5feb\u901f\u5165\u95e8",description:"Docker \u4e8b\u4ef6\u6d41",source:"@site/engineering/docker/quick-start.md",sourceDirName:"docker",slug:"/docker/quick-start",permalink:"/study-notes/engineering/docker/quick-start",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647177225,formattedLastUpdatedAt:"3/13/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Docker \u5b89\u88c5",permalink:"/study-notes/engineering/docker/docker-install"},next:{title:"CentOS\u4e0b\u5b89\u88c5 Node",permalink:"/study-notes/engineering/docker/centos-node-install"}},l={},p=[{value:"Docker \u4e8b\u4ef6\u6d41",id:"docker-\u4e8b\u4ef6\u6d41",level:2},{value:"\u53d1\u5e03\u5230 Docker Hub",id:"\u53d1\u5e03\u5230-docker-hub",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:p};function k(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-\u5feb\u901f\u5165\u95e8"},"Docker \u5feb\u901f\u5165\u95e8"),(0,a.kt)("h2",{id:"docker-\u4e8b\u4ef6\u6d41"},"Docker \u4e8b\u4ef6\u6d41"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"docker-event-state",src:r(50611).Z,width:"1129",height:"575"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/api/docker_remote_api/"},"Event")),(0,a.kt)("h2",{id:"\u53d1\u5e03\u5230-docker-hub"},"\u53d1\u5e03\u5230 Docker Hub"),(0,a.kt)("p",null,"\u767b\u9646 Docker\uff0c\u5df2\u767b\u9646\u7684\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e00\u6b65"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker login\n")),(0,a.kt)("p",null,"\u672c\u5730\u955c\u50cf\u6253\u6807\u7b7e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," \u4e0d\u5199\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# docker image tag [imageName] [username]/[repository]:[tag]\ndocker image tag qq-music-api rain120/qq-music-api\n")),(0,a.kt)("p",null,"\u53d1\u5e03\u955c\u50cf\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# docker image push [username]/[repository]:[tag]\ndocker image push rain120/qq-music-api\n")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"docker-hub-push.png",src:r(97825).Z,width:"945",height:"355"})),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://yeasy.gitbook.io/docker_practice/"},"Docker \u2014\u2014 \u4ece\u5165\u95e8\u5230\u5b9e\u8df5")))}k.isMDXComponent=!0},50611:function(e,t,r){t.Z=r.p+"assets/images/docker-event-state-0ecb35b10f47831cb26b991ae62b1035.png"},97825:function(e,t,r){t.Z=r.p+"assets/images/docker-hub-push-8f70eb0765c048749e7784d6acada680.png"}}]);