"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8301],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return s}});var p=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,p,r=function(e,n){if(null==e)return{};var t,p,r={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=p.createContext({}),m=function(e){var n=p.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return p.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},u=p.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(t),s=r,k=u["".concat(l,".").concat(s)]||u[s]||d[s]||a;return t?p.createElement(k,i(i({ref:n},c),{},{components:t})):p.createElement(k,i({ref:n},c))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<a;m++)i[m]=t[m];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}u.displayName="MDXCreateElement"},56428:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var p=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],o={},l=void 0,m={unversionedId:"git-npm/how-npx-to-run",id:"git-npm/how-npx-to-run",isDocsHomePage:!1,title:"how-npx-to-run",description:"\u4ec0\u4e48\u662fnpx?",source:"@site/engineering/git-npm/how-npx-to-run.md",sourceDirName:"git-npm",slug:"/git-npm/how-npx-to-run",permalink:"/study-notes/engineering/git-npm/how-npx-to-run",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638186201,formattedLastUpdatedAt:"11/29/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"guide",permalink:"/study-notes/engineering/git-npm/guide"},next:{title:"npm-install-vs-npm-ci",permalink:"/study-notes/engineering/git-npm/npm-install-vs-npm-ci"}},c=[{value:"\u4ec0\u4e48\u662f<code>npx</code>?",id:"\u4ec0\u4e48\u662fnpx",children:[],level:3},{value:"\u600e\u4e48\u4f7f\u7528<code>npx</code>?",id:"\u600e\u4e48\u4f7f\u7528npx",children:[],level:3},{value:"\u4e3a\u4ec0\u4e48npx\u80fd\u5728\u4e0d\u5b89\u88c5\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff1f",id:"\u4e3a\u4ec0\u4e48npx\u80fd\u5728\u4e0d\u5b89\u88c5\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528",children:[],level:3},{value:"<code>npx</code>\u7684\u4f7f\u7528\u573a\u666f",id:"npx\u7684\u4f7f\u7528\u573a\u666f",children:[],level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[],level:3}],d={toc:c};function u(e){var n=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662fnpx"},"\u4ec0\u4e48\u662f",(0,a.kt)("inlineCode",{parentName:"h3"},"npx"),"?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/releases/tag/v5.2.0"},"npm@5.2.0"),"\u7248\u672c\u66f4\u65b0\u6700\u5927\u7684\u4e00\u4e2a\u7279\u6027\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"npx"),"\u547d\u4ee4\uff0c\u90a3\u4e48",(0,a.kt)("inlineCode",{parentName:"p"},"npx"),"\u662f\u4e2a\u4ec0\u4e48\u5462\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"npx is a tool intended to help round out the experience of using packages from the npm registry\u200a\u2014\u200athe same way npm makes it super easy to install and manage dependencies hosted on the registry, npx is meant to make it easy to use CLI tools and other executables hosted on the registry. It greatly simplifies a number of things that, until now, required a bit of ceremony to do with plain npm.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npx"),"\u662f\u4e00\u4e2a\u5de5\u5177\uff0c\u65e8\u5728\u5e2e\u52a9\u5b8c\u5584\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"\u6ce8\u518c\u8868\u4e2d\u7684\u5305\u7684\u4f53\u9a8c\uff0c \u5b83\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\u4f7f\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"\u5b89\u88c5\u548c\u7ba1\u7406\u6258\u7ba1\u5728\u6ce8\u518c\u8868\u4e0a\u7684\u4f9d\u8d56\u9879\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"npx"),"\u65e8\u5728\u4f7f\u5176\u6613\u4e8e\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Cli"),"\u5de5\u5177\u548c\u5176\u4ed6 \u6ce8\u518c\u8868\u4e0a\u6258\u7ba1\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002 \u5b83\u5927\u5927\u7b80\u5316\u4e86\u8bb8\u591a\u4e8b\u60c5\uff0c\u76f4\u5230\u73b0\u5728\uff0c\u8fd8\u9700\u8981\u4e00\u4e9b\u4e0e\u666e\u901a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"\u6709\u5173\u7684\u6b65\u9aa4\u3002"),(0,a.kt)("h3",{id:"\u600e\u4e48\u4f7f\u7528npx"},"\u600e\u4e48\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h3"},"npx"),"?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"npx",src:t(46964).Z})),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48npx\u80fd\u5728\u4e0d\u5b89\u88c5\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528"},"\u4e3a\u4ec0\u4e48npx\u80fd\u5728\u4e0d\u5b89\u88c5\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"npx"),"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"<command>"),"\u4ece\u672c\u5730",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\uff0c\u6216\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"cache"),"\u5b89\u88c5\uff0c\u4ee5\u4fbf\u9700\u8981\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"packages")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<command>"),"\u6765\u8fd0\u884c\u3002")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"npx"),"\u5c06\u68c0\u67e5\u662f\u5426",(0,a.kt)("inlineCode",{parentName:"p"},"<command>"),"\u5b58\u5728\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),"\u672c\u5730\u9879\u76ee\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u5e76\u6267\u884c\u8be5\u64cd\u4f5c\u3002\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"<command>"),"\u672a\u627e\u5230\uff0c\u5219\u4f1a\u5728\u6267\u884c\u4e4b\u524d\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u9664\u975e",(0,a.kt)("inlineCode",{parentName:"p"},"--package"),"\u6307\u5b9a\u4e86\u9009\u9879\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"npx"),"\u5426\u5219\u5c06\u5c1d\u8bd5\u6839\u636e\u63d0\u4f9b\u7684\u8bf4\u660e\u7b26\u731c\u6d4b\u8981\u8c03\u7528\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u540d\u79f0\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),"\u53ef\u4ee5\u4f7f\u7528\u6240\u7406\u89e3\u7684\u6240\u6709\u5305\u8bf4\u660e\u7b26",(0,a.kt)("inlineCode",{parentName:"p"},"npx"),"\uff0c\u5305\u62ec",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\u8bf4\u660e\u7b26\uff0c\u8fdc\u7a0b",(0,a.kt)("inlineCode",{parentName:"p"},"tarball"),"\uff0c\u672c\u5730\u76ee\u5f55\u6216\u4f5c\u7528\u57df\u5305\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5305\u542b\u5b8c\u6574\u8bf4\u660e\u7b26\uff0c\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},"--package"),"\u4f7f\u7528\u4e86\u5b8c\u6574\u8bf4\u660e\u7b26\uff0c\u5219npx\u5c06\u59cb\u7ec8\u4f7f\u7528\u65b0\u5b89\u88c5\u7684\u4e34\u65f6\u7248\u672c\u7684\u7a0b\u5e8f\u5305\u3002\u8fd9\u4e5f\u53ef\u4ee5\u7528\u4f7f\u7528\u6807\u5fd7\u4f4d",(0,a.kt)("inlineCode",{parentName:"p"},"--ignore-existing"),"\u6765\u5f3a\u5236\u5ffd\u7565\u3002"),(0,a.kt)("p",null,"\u5f53\u7528\u6237\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5148\u6253\u5f00\u53e6\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"shell"),"\u7a97\u53e3\u5e76\u8fdb\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"~/.npm/_npx"),"\u76ee\u5f55\uff0c\u4f60\u53ef\u4ee5\u53d1\u73b0\u5f53\u524d\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"_npx"),"\u76ee\u5f55\u4e00\u65e0\u6240\u6709\uff0c\u7136\u540e\u4f60\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npx node@11 -v"),", \u4f60\u4f1a\u53d1\u73b0",(0,a.kt)("inlineCode",{parentName:"p"},"_npx"),"\u76ee\u5f55\u5f00\u59cb\u5199\u4e1c\u897f\u8fdb\u6765\u4e86\uff0c\u8fdb\u5165\u4e4b\u540e\u53ef\u4ee5\u53d1\u73b0\u5c31\u662f\u5f53\u524d\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"node"),"\u5305\u3002"),(0,a.kt)("p",null,"\u540c\u6837\u7684, \u4f60\u53ef\u4ee5\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},'npx node@10 -e "console.log(process.execPath)"'),", \u4f1a\u8f93\u51fa\u5f53\u524d",(0,a.kt)("inlineCode",{parentName:"p"},"node"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"npx-cache-path",src:t(74668).Z})),(0,a.kt)("h3",{id:"npx\u7684\u4f7f\u7528\u573a\u666f"},(0,a.kt)("inlineCode",{parentName:"h3"},"npx"),"\u7684\u4f7f\u7528\u573a\u666f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e0d\u540c\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"node"),"\u7248\u672c"),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"github gist")),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"npm"),"\u4e8c\u8fdb\u5236\u5305"),(0,a.kt)("li",{parentName:"ol"},"\u4ee5\u4ea4\u4e92\u65b9\u5f0f\u5f00\u53d1",(0,a.kt)("inlineCode",{parentName:"li"},"npm run-scripts"))),(0,a.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zkat/npx"},"npx")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"Introducing npx: an npm package runner")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/libnpx"},"npm package npx")))}u.isMDXComponent=!0},74668:function(e,n,t){n.Z=t.p+"assets/images/npx-cache-path-049b44545dc70d35027a8cb83669a7b9.png"},46964:function(e,n,t){n.Z=t.p+"assets/images/npx-581d2eb79069506d6563baffdc3e3c32.gif"}}]);