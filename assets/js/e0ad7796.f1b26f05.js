"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8831],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),d=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,k=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return t?n.createElement(k,l(l({ref:r},c),{},{components:t})):n.createElement(k,l({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<a;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94340:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],s={title:"\u5b89\u88c5\u542f\u52a8"},o=void 0,d={unversionedId:"redis/install-run",id:"redis/install-run",isDocsHomePage:!1,title:"\u5b89\u88c5\u542f\u52a8",description:"\u4f7f\u7528homebrew\u5b89\u88c5",source:"@site/backend/redis/install-run.md",sourceDirName:"redis",slug:"/redis/install-run",permalink:"/study-notes/backend/redis/install-run",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{title:"\u5b89\u88c5\u542f\u52a8"},sidebar:"sidebar",previous:{title:"\u95ee\u9898\u6c47\u603b",permalink:"/study-notes/backend/mongoDB/issue"},next:{title:"\u95ee\u9898\u6c47\u603b",permalink:"/study-notes/backend/redis/issue"}},c=[{value:"\u4f7f\u7528homebrew\u5b89\u88c5",id:"\u4f7f\u7528homebrew\u5b89\u88c5",children:[],level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[],level:2},{value:"\u542f\u52a8/\u505c\u6b62Redis\u670d\u52a1\u5668\u4f5c\u4e3a\u540e\u53f0\u670d\u52a1",id:"\u542f\u52a8\u505c\u6b62redis\u670d\u52a1\u5668\u4f5c\u4e3a\u540e\u53f0\u670d\u52a1",children:[{value:"\u670d\u52a1\u5217\u8868",id:"\u670d\u52a1\u5217\u8868",children:[],level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8-1",children:[],level:3},{value:"\u505c\u6b62",id:"\u505c\u6b62",children:[],level:3},{value:"\u91cd\u542f",id:"\u91cd\u542f",children:[],level:3}],level:2},{value:"\u68c0\u67e5Redis\u662f\u5426\u542f\u52a8",id:"\u68c0\u67e5redis\u662f\u5426\u542f\u52a8",children:[],level:2},{value:"\u914d\u7f6eRedis",id:"\u914d\u7f6eredis",children:[],level:2},{value:"\u5378\u8f7dRedis\u53ca\u5176\u6587\u4ef6",id:"\u5378\u8f7dredis\u53ca\u5176\u6587\u4ef6",children:[],level:2},{value:"\u5f02\u5e38\u5904\u7406",id:"\u5f02\u5e38\u5904\u7406",children:[],level:2}],p={toc:c};function u(e){var r=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528homebrew\u5b89\u88c5"},"\u4f7f\u7528homebrew\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," \u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"homebrew")," ",(0,a.kt)("inlineCode",{parentName:"p"},"or")," \u56fd\u5185\u5b89\u88c5\uff0c\u8bf7\u5230 \ud83d\udc49\ud83d\udc49\ud83d\udc49\n// TODO: \u7b49\u65b0\u7248\u672c\u5730\u5740"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install redis\n")),(0,a.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"redis-server\n")),(0,a.kt)("h2",{id:"\u542f\u52a8\u505c\u6b62redis\u670d\u52a1\u5668\u4f5c\u4e3a\u540e\u53f0\u670d\u52a1"},"\u542f\u52a8/\u505c\u6b62Redis\u670d\u52a1\u5668\u4f5c\u4e3a\u540e\u53f0\u670d\u52a1"),(0,a.kt)("h3",{id:"\u670d\u52a1\u5217\u8868"},"\u670d\u52a1\u5217\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew service list\n")),(0,a.kt)("h3",{id:"\u542f\u52a8-1"},"\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew service start redis\n")),(0,a.kt)("h3",{id:"\u505c\u6b62"},"\u505c\u6b62"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew service stop redis\n")),(0,a.kt)("h3",{id:"\u91cd\u542f"},"\u91cd\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew service restart redis\n")),(0,a.kt)("h2",{id:"\u68c0\u67e5redis\u662f\u5426\u542f\u52a8"},"\u68c0\u67e5Redis\u662f\u5426\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"redis-cli ping\n")),(0,a.kt)("p",null,"\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"redis-cli ping")," \u54cd\u5e94",(0,a.kt)("inlineCode",{parentName:"p"},"PONG")," \u8bf4\u660e\u670d\u52a1\u6b63\u5e38\u542f\u52a8\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"alias")," \u6765\u5feb\u6377\u542f\u52a8\uff0c\u6bd4\u5982\u8bf4\u6211\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"zsh"),", \u6211\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc or .bash_profile")," \u4e2d\u5982\u4e0b\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'alias redis-start="brew services start redis"\nalias redis-stop="brew services stop redis"\nalias redis-restart="brew services restart redis"\n# \u76d1\u89c6\u5668 commandis \u662f\u4e00\u4e2a\u8d85\u7ea7\u6709\u7528\u7684\uff0c\u5b83\u8bb0\u5f55\u6240\u6709 redis \u63a5\u6536\u5230\u7684\u547d\u4ee4\nalias redis-monitor="redis-cli monitor"\n')),(0,a.kt)("h2",{id:"\u914d\u7f6eredis"},"\u914d\u7f6eRedis"),(0,a.kt)("p",null,"\u8981\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"Redis"),"\u5e76\u66f4\u6539\u9ed8\u8ba4\u503c\uff0c\u8bf7\u7f16\u8f91",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/redis.conf"),"\u6587\u4ef6\uff0c\u7136\u540e\u91cd\u65b0\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"Redis"),"\u670d\u52a1\u5668\u3002"),(0,a.kt)("p",null,"\u68c0\u67e5\u914d\u7f6e\u90e8\u5206\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u4ee5\u914d\u7f6e\u7528\u6237\u68c0\u67e5 ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/topics/acl"},(0,a.kt)("inlineCode",{parentName:"a"},"ACL"),"(\u8bbf\u95ee\u63a7\u5236\u5217\u8868)")),(0,a.kt)("h2",{id:"\u5378\u8f7dredis\u53ca\u5176\u6587\u4ef6"},"\u5378\u8f7dRedis\u53ca\u5176\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew uninstall redis\nrm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist\n")),(0,a.kt)("h2",{id:"\u5f02\u5e38\u5904\u7406"},"\u5f02\u5e38\u5904\u7406"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/study-notes/backend/redis/issue"},"redis \u5f02\u5e38\u5904\u7406")))}u.isMDXComponent=!0}}]);