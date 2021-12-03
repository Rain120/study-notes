"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[912],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,m=g["".concat(c,".").concat(d)]||g[d]||s[d]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25837:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={},c=void 0,p={unversionedId:"git-npm/github-action",id:"git-npm/github-action",isDocsHomePage:!1,title:"github-action",description:"github-actions.jpg",source:"@site/engineering/git-npm/github-action.md",sourceDirName:"git-npm",slug:"/git-npm/github-action",permalink:"/study-notes/engineering/git-npm/github-action",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"github-action-improve",permalink:"/study-notes/engineering/git-npm/github-action-improve"},next:{title:"github-profile",permalink:"/study-notes/engineering/git-npm/github-profile"}},u=[{value:"GitHub Actions",id:"github-actions",children:[],level:3},{value:"\u7533\u8bf7\u6743\u9650<code>Github Actions bete</code>",id:"\u7533\u8bf7\u6743\u9650github-actions-bete",children:[{value:"\u5982\u4f55\u4f7f\u7528<code>Github Actions</code>",id:"\u5982\u4f55\u4f7f\u7528github-actions",children:[],level:4}],level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:3}],s={toc:u};function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-actions.jpg",src:n(75994).Z})),(0,a.kt)("h3",{id:"github-actions"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/features/actions"},"GitHub Actions")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"GitHub Actions"),"\u662f\u73b0\u4eca\u975e\u5e38\u4f18\u79c0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"CI / CD"),"\u5de5\u5177\uff0c\u5b83\u4f7f\u4f60\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u6240\u6709\u8f6f\u4ef6\u5de5\u4f5c\u6d41\u7a0b\u7684\u81ea\u52a8\u5316\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub"),"\u4e2d\u6784\u5efa\uff0c\u6d4b\u8bd5\u548c\u90e8\u7f72\u4ee3\u7801\u3002\u6309\u7167\u4f60\u6240\u5e0c\u671b\u7684\u65b9\u5f0f\u8fdb\u884c\u4ee3\u7801\u68c0\u67e5\u3001\u5206\u652f\u7ba1\u7406\u548c\u95ee\u9898\u7b5b\u9009\u5de5\u4f5c\u3002")),(0,a.kt)("h3",{id:"\u7533\u8bf7\u6743\u9650github-actions-bete"},"\u7533\u8bf7\u6743\u9650",(0,a.kt)("inlineCode",{parentName:"h3"},"Github Actions bete")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sign-for-git-actions-bate.png",src:n(92304).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"enabled-git-actions-bate.png",src:n(16743).Z})),(0,a.kt)("h4",{id:"\u5982\u4f55\u4f7f\u7528github-actions"},"\u5982\u4f55\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"h4"},"Github Actions")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"git-actions",src:n(33275).Z})),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u505a\u4e00\u4e2a\u6700\u7b80\u5355\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"CI"),"\uff0c\u5c31\u662f\u5728\u7ebf",(0,a.kt)("inlineCode",{parentName:"p"},"Build and Deploy"),"\uff0c\u6211\u4eec\u4f7f\u7528\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rain120/better-scroll-for-react-usage"},"Demo"),"\u53ea\u9700\u8981\u5728\u7528\u6237",(0,a.kt)("inlineCode",{parentName:"p"},"push"),"\u4e4b\u540e,\u8fdb\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build"),"\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"Node.js")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"set_node_yml.png",src:n(53892).Z})),(0,a.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"workflow"),"\u4f1a\u5e2e\u6211\u4eec",(0,a.kt)("inlineCode",{parentName:"p"},"check node"),"\u7684\u7248\u672c\u4ee5\u53ca\u63d0\u4f9b\u4e00\u4e9b\u7b80\u5355\u7684\u6d41\u7a0b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u53ea\u8981\u8ba9\u4ed6\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\nnpm run changelog\nnpm run build\n")),(0,a.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u7684\u914d\u7f6e\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"edit-node-yml.png",src:n(19738).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"nodejs_yml.png",src:n(915).Z})),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5b8c\u4e86\u4e4b\u540e\uff0c\u6211\u4eec\u70b9\u51fb\u8fdb\u5165"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"workflow.png",src:n(76936).Z})),(0,a.kt)("p",null,"\ud83d\udc49\u6709\u4e2a\u6267\u884c\u6309\u94ae"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"run_yml1.png",src:n(81922).Z})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CI"),"\u5b8c\u6210\u72b6\u6001"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"run_yml.png",src:n(18357).Z})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"commit"),"\u63d0\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"CI"),"\u6210\u529f\u5931\u8d25"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"push_node_build.png",src:n(31787).Z})),(0,a.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"},"GitHub Actions \u5165\u95e8\u6559\u7a0b")))}g.isMDXComponent=!0},19738:function(e,t,n){t.Z=n.p+"assets/images/edit-node-yml-131a69517c093bb5c1146bbaec34c101.png"},16743:function(e,t,n){t.Z=n.p+"assets/images/enabled-git-actions-bate-f92c0bf958987df165e699b402f62ae8.png"},33275:function(e,t,n){t.Z=n.p+"assets/images/git-actions-6d6b1bf75d8c0a70cc923ad723816fc6.png"},75994:function(e,t,n){t.Z=n.p+"assets/images/github-actions-2cd69780ec250d9837f0f9d98db5852e.jpg"},915:function(e,t,n){t.Z=n.p+"assets/images/nodejs_yml-148590bca84c4369d2569771f03bbb87.png"},31787:function(e,t,n){t.Z=n.p+"assets/images/push_node_build-5082afc574ac262a6de77989ff704cdb.png"},18357:function(e,t,n){t.Z=n.p+"assets/images/run_yml-73f64a58f9423d0eb2d52c97ebd5e775.png"},81922:function(e,t,n){t.Z=n.p+"assets/images/run_yml1-4fd3edff3f15db2326abb091bbbec1e4.png"},53892:function(e,t,n){t.Z=n.p+"assets/images/set_node_yml-beeb594dfe969fb652aa0e1f7fc28db3.png"},92304:function(e,t,n){t.Z=n.p+"assets/images/sign-for-git-actions-bate-e3dcecf1350650c6ab085f22e8443dbb.png"},76936:function(e,t,n){t.Z=n.p+"assets/images/workflow-26fb9c3443997c648cd86edda32935fd.png"}}]);