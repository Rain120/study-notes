"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4623],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var m=r.createContext({}),o=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=o(t),d=p,k=u["".concat(m,".").concat(d)]||u[d]||s[d]||i;return t?r.createElement(k,a(a({ref:n},c),{},{components:t})):r.createElement(k,a({ref:n},c))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var o=2;o<i;o++)a[o]=t[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94656:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=t(87462),p=t(63366),i=(t(67294),t(3905)),a=["components"],l={},m="npm install vs npm ci",o={unversionedId:"git-npm/npm/npm-install-vs-npm-ci",id:"git-npm/npm/npm-install-vs-npm-ci",title:"npm install vs npm ci",description:"\u4ec0\u4e48\u662fnpm ci?",source:"@site/engineering/git-npm/npm/npm-install-vs-npm-ci.md",sourceDirName:"git-npm/npm",slug:"/git-npm/npm/npm-install-vs-npm-ci",permalink:"/study-notes/engineering/git-npm/npm/npm-install-vs-npm-ci",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646190597,formattedLastUpdatedAt:"3/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Npx\u5982\u4f55run",permalink:"/study-notes/engineering/git-npm/npm/how-npx-to-run"},next:{title:"Npm \u77e5\u8bc6\u50a8\u5907",permalink:"/study-notes/engineering/git-npm/npm/npm-knowledge-reserve"}},c=[{value:"\u4ec0\u4e48\u662f<code>npm ci</code>?",id:"\u4ec0\u4e48\u662fnpm-ci",children:[],level:2},{value:"npm install VS npm ci",id:"npm-install-vs-npm-ci-1",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],s={toc:c};function u(e){var n=e.components,t=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"npm-install-vs-npm-ci"},"npm install vs npm ci"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662fnpm-ci"},"\u4ec0\u4e48\u662f",(0,i.kt)("inlineCode",{parentName:"h2"},"npm ci"),"?"),(0,i.kt)("p",null,"\u6b64\u547d\u4ee4\u7c7b\u4f3c\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"npm-install"),"\uff0c\u4f46\u5b83\u65e8\u5728\u7528\u4e8e\u81ea\u52a8\u5316\u73af\u5883\uff0c\u5982\u6d4b\u8bd5\u5e73\u53f0\uff0c\u6301\u7eed\u96c6\u6210\u548c\u90e8\u7f72\u3002\u901a\u8fc7\u8df3\u8fc7\u67d0\u4e9b\u9762\u5411\u7528\u6237\u7684\u529f\u80fd\uff0c\u5b83\u53ef\u4ee5\u6bd4\u5e38\u89c4\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm "),"\u5b89\u88c5\u5feb\u5f97\u591a\u3002\u5b83\u4e5f\u6bd4\u5e38\u89c4\u5b89\u88c5\u66f4\u4e25\u683c\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u6355\u83b7\u7531\u5927\u591a\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm "),"\u7528\u6237\u7684\u589e\u91cf\u5b89\u88c5\u7684\u672c\u5730\u73af\u5883\u5f15\u8d77\u7684\u9519\u8bef\u6216\u4e0d\u4e00\u81f4\u3002"),(0,i.kt)("h2",{id:"npm-install-vs-npm-ci-1"},"npm install VS npm ci"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8be5\u9879\u76ee\u5fc5\u987b\u5177\u6709\u73b0\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u7a0b\u5e8f\u5305\u9501\u4e2d\u7684\u4f9d\u8d56\u9879\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u7684\u4f9d\u8d56\u9879\u4e0d\u5339\u914d\uff0c\u5219",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci"),"\u5c06\u9000\u51fa\u5e76\u663e\u793a\u9519\u8bef\uff0c\u800c\u4e0d\u662f\u66f4\u65b0\u7a0b\u5e8f\u5305\u9501\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"npm ci")," \u4e00\u6b21\u53ea\u80fd\u5b89\u88c5\u6574\u4e2a\u9879\u76ee\uff1a\u6b64\u547d\u4ee4\u4e0d\u80fd\u6dfb\u52a0\u5355\u4e2a\u4f9d\u8d56\u9879\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uff0c\u5b83\u5c06\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci"),"\u5f00\u59cb\u5b89\u88c5\u4e4b\u524d\u88ab\u81ea\u52a8\u5220\u9664\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u5199\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"\u6216\u4efb\u4f55\u5305\u9501 ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\uff1a\u5b89\u88c5\u5b9e\u9645\u4e0a\u662f\u51bb\u7ed3\u7684\u3002"))),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("p",null,"\u786e\u4fdd\u60a8\u62e5\u6709\u5305\u9501\u548c\u6700\u65b0\u5b89\u88c5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ cd ./my/npm/project\n$ npm install\nadded 154 packages in 10s\n$ ls | grep package-lock\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm ci"),"\u5728\u8be5\u9879\u76ee\u4e2d\u8fd0\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm ci\nadded 154 packages in 5s\n")),(0,i.kt)("p",null,"\u914d\u7f6eTravis\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci"),"\u800c\u4e0d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'# .travis.yml\ninstall:\n- npm ci\n# keep the npm cache around to speed up installs\ncache:\n  directories:\n  - "$HOME/.npm"\n')),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/ci.html"},"npm ci")))}u.isMDXComponent=!0}}]);