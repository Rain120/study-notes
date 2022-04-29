"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2436],{49613:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(59496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var k=a.createContext({}),o=function(e){var n=a.useContext(k),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(k.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,k=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=o(t),u=l,N=d["".concat(k,".").concat(u)]||d[u]||c[u]||r;return t?a.createElement(N,p(p({ref:n},m),{},{components:t})):a.createElement(N,p({ref:n},m))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var k in n)hasOwnProperty.call(n,k)&&(i[k]=n[k]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96911:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return k},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var a=t(62848),l=t(79213),r=(t(59496),t(49613)),p=["components"],i={},k="package-lock.json \u4e0e yarn.lock \u7684\u4f5c\u7528\u548c\u533a\u522b",o={unversionedId:"git-npm/npm/package-lock-vs-yarn-lock",id:"git-npm/npm/package-lock-vs-yarn-lock",title:"package-lock.json \u4e0e yarn.lock \u7684\u4f5c\u7528\u548c\u533a\u522b",description:"Npm vs Yarn",source:"@site/engineering/git-npm/npm/package-lock-vs-yarn-lock.md",sourceDirName:"git-npm/npm",slug:"/git-npm/npm/package-lock-vs-yarn-lock",permalink:"/study-notes/engineering/git-npm/npm/package-lock-vs-yarn-lock",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1639054678,formattedLastUpdatedAt:"12/9/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"Npm \u77ed\u547d\u4ee4",permalink:"/study-notes/engineering/git-npm/npm/npm-short-commands"},next:{title:"\u4ece\u8bf7\u6c42\u5230\u6e32\u67d3\u9875\u9762\u7684\u8fc7\u7a0b",permalink:"/study-notes/engineering/http/request-to-page"}},m={},c=[{value:"Npm vs Yarn",id:"npm-vs-yarn",level:2},{value:"\u524d\u7f6e\u77e5\u8bc6",id:"\u524d\u7f6e\u77e5\u8bc6",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 lock \u6587\u4ef6 ?",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-lock-\u6587\u4ef6-",level:2},{value:"lock \u7684\u4f5c\u7528",id:"lock-\u7684\u4f5c\u7528",level:2},{value:"\u4f55\u65f6\u751f\u6210 lock \u6587\u4ef6",id:"\u4f55\u65f6\u751f\u6210-lock-\u6587\u4ef6",level:2},{value:"lock \u6587\u4ef6\u8bb0\u5f55\u4e86\u54ea\u4e9b\u4fe1\u606f\uff1f",id:"lock-\u6587\u4ef6\u8bb0\u5f55\u4e86\u54ea\u4e9b\u4fe1\u606f",level:2},{value:"package-lock.json",id:"package-lockjson",level:3},{value:"yarn.lock",id:"yarnlock",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:c};function u(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"package-lockjson-\u4e0e-yarnlock-\u7684\u4f5c\u7528\u548c\u533a\u522b"},"package-lock.json \u4e0e yarn.lock \u7684\u4f5c\u7528\u548c\u533a\u522b"),(0,r.kt)("h2",{id:"npm-vs-yarn"},"Npm vs Yarn"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"npm")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"yarn")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u7ba1\u7406\u5668"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u7ba1\u7406\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5\u9879\u76ee\u4f9d\u8d56"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"npm install")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u4f9d\u8d56"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"npm install pkg --global (-g)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn add pkg --global (-g)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"npm install pkg"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"npm install pkg --save (-S)")," \u9ed8\u8ba4\u6a21\u5f0f ",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"npm install pkg --save-dev (-D)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn add pkg"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"yarn add pkg"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"yarn add pkg --dev"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5378\u8f7d\u4f9d\u8d56"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"npm uninstall pkg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn remove pkg"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u9879\u76ee\u4f9d\u8d56"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"npm update pkg")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn upgrade pkg"))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/yarn-vs-npm/"},"yarn-vs-npm")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc"},"NPM vs Yarn Cheat Sheet")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u7684\u4f18\u52bf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e16\u754c\u4e0a\u6700\u5927\u7684\u6ce8\u518c\u8868",(0,r.kt)("inlineCode",{parentName:"li"},"(registry)"),", \u4e00\u4e2a\u5de8\u578b\u6570\u636e\u5e93, \u4fdd\u5b58\u7740\u6bcf\u4e2a\u5305\u7684\u4fe1\u606f "),(0,r.kt)("li",{parentName:"ul"},"\u793e\u533a\u5b8c\u5584"),(0,r.kt)("li",{parentName:"ul"},"\u80fd\u591f\u8f7b\u677e\u7ba1\u7406\u4f9d\u8d56\u548c\u7248\u672c")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," \u7684\u4f18\u52bf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u901f\u5ea6\u5feb "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5e76\u884c\u5b89\u88c5"),(0,r.kt)("p",{parentName:"li"},"\u65e0\u8bba ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," \u5728\u6267\u884c\u5305\u7684\u5b89\u88c5\u65f6\uff0c\u90fd\u4f1a\u6267\u884c\u4e00\u7cfb\u5217\u4efb\u52a1\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u662f\u6309\u7167\u961f\u5217\u6267\u884c\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"package"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u5fc5\u987b\u8981\u7b49\u5230\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," \u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u624d\u80fd\u7ee7\u7eed\u540e\u9762\u7684\u5b89\u88c5\u3002\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," \u662f\u540c\u6b65\u6267\u884c\u6240\u6709\u4efb\u52a1\uff0c\u63d0\u9ad8\u4e86\u6027\u80fd\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u79bb\u7ebf\u6a21\u5f0f"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u4e4b\u524d\u5df2\u7ecf\u5b89\u88c5\u8fc7\u4e00\u4e2a\u8f6f\u4ef6\u5305\uff0c\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," \u518d\u6b21\u5b89\u88c5\u65f6\u4e4b\u95f4\u4ece\u7f13\u5b58\u4e2d\u83b7\u53d6\uff0c\u5c31\u4e0d\u7528\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u90a3\u6837\u518d\u4ece\u7f51\u7edc\u4e0b\u8f7d\u4e86\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u7248\u672c\u7edf\u4e00"),(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u9632\u6b62\u62c9\u53d6\u5230\u4e0d\u540c\u7684\u7248\u672c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn"),"\u6709\u4e00\u4e2a\u9501\u5b9a\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"(lock file)")," \u8bb0\u5f55\u4e86\u88ab\u786e\u5207\u5b89\u88c5\u4e0a\u7684\u6a21\u5757\u7684\u7248\u672c\u53f7\u3002\u6bcf\u6b21\u53ea\u8981\u65b0\u589e\u4e86\u4e00\u4e2a\u6a21\u5757\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," \u5c31\u4f1a\u521b\u5efa(\u6216\u66f4\u65b0) ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn.lock"),"\u8fd9\u4e2a\u6587\u4ef6\u3002\u8fd9\u4e48\u505a\u5c31\u4fdd\u8bc1\u4e86\uff0c\u6bcf\u4e00\u6b21\u62c9\u53d6\u540c\u4e00\u4e2a\u9879\u76ee\u4f9d\u8d56\u65f6\uff0c\u4f7f\u7528\u7684\u90fd\u662f\u4e00\u6837\u7684\u6a21\u5757\u7248\u672c\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u66f4\u597d\u7684\u8bed\u4e49\u5316"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"\u6539\u53d8\u4e86\u4e00\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"\u547d\u4ee4\u7684\u540d\u79f0\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add/remove"),"\uff0c\u611f\u89c9\u4e0a\u6bd4 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u539f\u672c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"install/uninstall"),"\u8981\u66f4\u6e05\u6670\u3002"))),(0,r.kt)("h2",{id:"\u524d\u7f6e\u77e5\u8bc6"},"\u524d\u7f6e\u77e5\u8bc6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/study-notes/engineering/git-npm/npm/npm-knowledge-reserve#%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF"},"\u7248\u672c\u4fe1\u606f")),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-lock-\u6587\u4ef6-"},"\u4e3a\u4ec0\u4e48\u9700\u8981 lock \u6587\u4ef6 ?"),(0,r.kt)("p",null,"\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u53ea\u80fd\u9501\u5b9a\u76f8\u5173\u4f9d\u8d56\u5305\u7684\u5927\u7248\u672c, \u6bcf\u6b21\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install")," \u65f6\u90fd\u4f1a\u6839\u636e\u5927\u7248\u672c\u81ea\u52a8\u63d0\u5347\u5230 ",(0,r.kt)("strong",{parentName:"p"},"\u5927\u7248\u672c\u7684\u6700\u65b0\u7248\u672c"),", \u800c\u6709\u4e9b\u65f6\u5019\u8fd9\u4e9b\u7248\u672c\u4f1a\u5f71\u54cd\u6211\u4eec\u7684\u5f00\u53d1\uff0c\u751a\u81f3\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898, \u6240\u4ee5\u6211\u4eec\u9700\u8981 ",(0,r.kt)("strong",{parentName:"p"},"\u9501\u5b9a\u7248\u672c"),"\u3002"),(0,r.kt)("h2",{id:"lock-\u7684\u4f5c\u7528"},"lock \u7684\u4f5c\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u80fd\u83b7\u5f97\u53ef\u91cd\u590d\u7684\u6784\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"(repeatable build)"),"\uff0c\u5f53\u4f60\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"CI(\u6301\u7eed\u96c6\u6210)")," \u4e0a\u91cd\u590d ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," \u7684\u65f6\u5019\uff0c\u5f97\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"artifact")," \u662f\u4e00\u6837\u7684\uff0c\u56e0\u4e3a\u4f9d\u8d56\u7684\u7248\u672c\u90fd\u88ab\u9501\u4f4f\u4e86\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u7531\u4e8e\u5f00\u53d1\u4eba\u5458\u610f\u5916\u66f4\u6539\u6216\u8005\u66f4\u65b0\u7248\u672c\uff0c\u800c\u5bfc\u81f4\u9879\u76ee\u4e0d\u517c\u5bb9\u7b49\u95ee\u9898")),(0,r.kt)("h2",{id:"\u4f55\u65f6\u751f\u6210-lock-\u6587\u4ef6"},"\u4f55\u65f6\u751f\u6210 lock \u6587\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm 5.x")," \u4e4b\u524d\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/shrinkwrap"},"npm shrinkwrap")," \u547d\u4ee4\u6765\u751f\u6210\u4e00\u4e2a\u9501\u5b9a\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),", \u53d7 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),"\u7684\u5f71\u54cd, ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"5.x")," \u4e4b\u540e\u4e5f\u4f1a\u751f\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," \u6587\u4ef6, \u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"package-lock.json"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," \u5728\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"install")," \u65f6\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn.lock")," \u6587\u4ef6\u7528\u6765\u4fdd\u5b58\u6240\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u7684\u786e\u5207\u7248\u672c\u3002"),(0,r.kt)("h2",{id:"lock-\u6587\u4ef6\u8bb0\u5f55\u4e86\u54ea\u4e9b\u4fe1\u606f"},"lock \u6587\u4ef6\u8bb0\u5f55\u4e86\u54ea\u4e9b\u4fe1\u606f\uff1f"),(0,r.kt)("p",null,"\u5b83\u5305\u542b\u4e86\u91cd\u73b0\u5168\u90e8\u7684\u4f9d\u8d56\u6e90\u7801\u6811\u9700\u8981\u7684\u6240\u6709\u4fe1\u606f\u3001\u4f60\u7684\u9879\u76ee\u4f9d\u8d56\u4e2d\u7684\u6240\u6709\u4fe1\u606f\uff0c\u4ee5\u53ca\u5b83\u4eec\u5404\u81ea\u7684\u7248\u672c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u5305\u7684\u51c6\u786e\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Hash")," \u6821\u9a8c\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u7684\u5305\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"URL")),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u4ee5\u53ca\u4f9d\u8d56\u7248\u672c")),(0,r.kt)("h3",{id:"package-lockjson"},(0,r.kt)("a",{parentName:"h3",href:"https://docs.npmjs.com/configuring-npm/package-lock-json#file-format"},"package-lock.json")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("p",{parentName:"li"},"\u5f53\u524d\u5305\u540d\u79f0\u3002\u8fd9\u5fc5\u987b\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u5339\u914d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"version")),(0,r.kt)("p",{parentName:"li"},"\u5f53\u524d\u5305\u7684\u7248\u672c\u3002\u8fd9\u5fc5\u987b\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," \u5339\u914d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"lockFileVersion")),(0,r.kt)("p",{parentName:"li"},"\u9501\u5b9a\u6587\u4ef6\u7248\u672c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")),(0,r.kt)("p",{parentName:"li"},"\u8bb0\u5f55\u4e86\u5305\u7684\u4f9d\u8d56")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"requires")),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u662f\u6a21\u5757\u540d\u79f0\u5230\u7248\u672c\u7684\u6620\u5c04\u3002 \u8fd9\u662f\u6b64\u6a21\u5757\u6240\u9700\u7684\u6240\u6709\u5185\u5bb9\u7684\u5217\u8868\uff0c\u65e0\u8bba\u5b83\u5c06\u5b89\u88c5\u5728\u4f55\u5904\u3002 \u8be5\u7248\u672c\u5e94\u901a\u8fc7\u5e38\u89c4\u5339\u914d\u89c4\u5219\u5728\u6211\u4eec\u7684\u4f9d\u8d56\u9879\u6216\u9ad8\u4e8e\u6211\u4eec\u7684\u7ea7\u522b\u4e2d\u5339\u914d\u4e00\u4e2a\u4f9d\u8d56\u9879\u3002"))),(0,r.kt)("h3",{id:"yarnlock"},"yarn.lock"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"#"," yarn lockfile v1"),(0,r.kt)("p",{parentName:"li"},"\u8bb0\u5f55\u7248\u672c\u662f\u4e3a\u4e86\u4fbf\u4e8e\u4ee5\u540e\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"lockfile")," \u7684\u8bed\u6cd5\u6216\u8bed\u4e49\u3002\u4ee5\u540e\u4e00\u65e6\u66f4\u65b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"lockfile"),"\uff0c\u5c31\u589e\u52a0\u7248\u672c\u53f7\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," \u5c31\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u7684\u7248\u672c\u505a\u51fa\u4e0d\u540c\u7684\u52a8\u4f5c\uff0c\u4ece\u800c\u4fdd\u8bc1\u5411\u540e\u7684\u517c\u5bb9\u6027\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"version")),(0,r.kt)("p",{parentName:"li"},"\u8bb0\u5f55\u4e86\u5305\u7684\u786e\u5207\u7248\u672c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"resolved")),(0,r.kt)("p",{parentName:"li"},"\u5b57\u6bb5\u8bb0\u5f55\u4e86\u5305\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"URL"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")),(0,r.kt)("p",{parentName:"li"},"\u8bb0\u5f55\u4e86\u5305\u7684\u4f9d\u8d56"))),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/configuring-npm/package-locks.html"},"npm-package-locks")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package-locks"},"package-locks")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/configuring-npm/package-lock-json"},"package-lock-json")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/yarn-lock"},"yarn-lock")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codertx.github.io/2018/01/09/about-package-json/"},"\u5173\u4e8epackage-lock.json\u7684\u4e00\u5207")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/62331583"},"npm install \u751f\u6210\u7684package-lock.json\u662f\u4ec0\u4e48\u6587\u4ef6\uff1f\u6709\u4ec0\u4e48\u7528\uff1f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json"},"why-does-npm-install-rewrite-package-lock-json")))}u.isMDXComponent=!0}}]);