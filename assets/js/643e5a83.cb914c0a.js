"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5361],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),m=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=m(n),u=a,d=g["".concat(o,".").concat(u)]||g[u]||k[u]||r;return n?i.createElement(d,l(l({ref:t},s),{},{components:n})):i.createElement(d,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});n(59496);var i=n(49613);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={},p="Git \u5e95\u5c42\u6df1\u5165\u6d45\u6790 - \u76ee\u5f55\u7bc7",o={unversionedId:"git-npm/git/git-base-analysis",id:"git-npm/git/git-base-analysis",title:"Git \u5e95\u5c42\u6df1\u5165\u6d45\u6790 - \u76ee\u5f55\u7bc7",description:"\u524d\u8a00",source:"@site/engineering/git-npm/git/git-base-analysis.md",sourceDirName:"git-npm/git",slug:"/git-npm/git/git-base-analysis",permalink:"/study-notes/engineering/git-npm/git/git-base-analysis",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1659272173,formattedLastUpdatedAt:"Jul 31, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4f60\u5fc5\u987b\u77e5\u9053\u7684 Git \u547d\u4ee4",permalink:"/study-notes/engineering/git-npm/git/you-must-know-git-commands"},next:{title:"Git \u5206\u652f\u7684\u524d\u4e16\u4eca\u751f",permalink:"/study-notes/engineering/git-npm/git/git-branch-opinion"}},m={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u524d\u7f6e\u77e5\u8bc6",id:"\u524d\u7f6e\u77e5\u8bc6",level:2},{value:"<code>.git</code>\u76ee\u5f55",id:"git\u76ee\u5f55",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],k={toc:s};function g(e){var{components:t}=e,l=r(e,["components"]);return(0,i.kt)("wrapper",a({},k,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",a({},{id:"git-\u5e95\u5c42\u6df1\u5165\u6d45\u6790---\u76ee\u5f55\u7bc7"}),"Git \u5e95\u5c42\u6df1\u5165\u6d45\u6790 - \u76ee\u5f55\u7bc7"),(0,i.kt)("h2",a({},{id:"\u524d\u8a00"}),"\u524d\u8a00"),(0,i.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u5199\u8fd9\u4e2a\u5462\uff1f\u56e0\u4e3a\u4e00\u76f4\u4ee5\u6765\u5c31\u60f3\u5b66\u4e60\u66f4\u591a",(0,i.kt)("inlineCode",{parentName:"p"},"Git"),"\u7684\u76f8\u5173\u77e5\u8bc6\uff0c\u7136\u540e\u4e5f\u56e0\u4e3a\u67d0\u6b21\u6f14\u8bb2\u548c\u516c\u53f8\u5927\u4f6c\u7684\u5206\u4eab\uff0c\u6240\u4ee5\u6211\u60f3\u628a\u6211\u5b66\u4e60\u5230\u7684\u548c\u7406\u89e3\u7684\u5206\u4eab\u7ed9\u5927\u5bb6\u3002\u5982\u679c\u4f60\u4e5f\u60f3\u4e00\u8d77\u5b66\u4e60",(0,i.kt)("inlineCode",{parentName:"p"},"Git"),"\uff0c\u90a3\u5c31\u6765\u548c\u6211\u4e00\u8d77\u5b66\u4e60\u5427!! ",(0,i.kt)("inlineCode",{parentName:"p"},"Let's Go")," \ud83d\ude01"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": \u8fd9\u4e2a\u4e0d\u592a\u9002\u5408\u521d\u5b66\u8005\uff0c\u5982\u679c\u4f60\u60f3\u5b66\u4e60\u57fa\u7840\u77e5\u8bc6\uff0c\u8bf7\u79fb\u6b65 ",(0,i.kt)("a",a({parentName:"p"},{href:"https://git-scm.com/"}),"Git \u5b98\u7f51")," \u4ee5\u53ca",(0,i.kt)("a",a({parentName:"p"},{href:"./you-must-know-git-commands"}),"\u4f60\u5fc5\u987b\u77e5\u9053\u7684",(0,i.kt)("inlineCode",{parentName:"a"},"Git"),"\u547d\u4ee4")),(0,i.kt)("h2",a({},{id:"\u524d\u7f6e\u77e5\u8bc6"}),"\u524d\u7f6e\u77e5\u8bc6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e09\u4e2a\u5173\u952e\u8bcd: \u672c\u5730\u4ed3\u5e93 ",(0,i.kt)("inlineCode",{parentName:"li"},"(local)"),", \u6682\u5b58\u533a ",(0,i.kt)("inlineCode",{parentName:"li"},"(index or stage)"),", \u8fdc\u7a0b ",(0,i.kt)("inlineCode",{parentName:"li"},"(remote)"))),(0,i.kt)("p",null,"\u8981\u4e86\u89e3",(0,i.kt)("inlineCode",{parentName:"p"},"Git"),"\u5e95\u5c42\u5de5\u4f5c\u673a\u5236\uff0c\u5c31\u8981\u5148\u4e86\u89e3\u5b83\u662f\u4ec0\u4e48\uff1f\u5b83\u6709\u4ec0\u4e48\uff1f\u6211\u4eec\u5148\u6765\u4e86\u89e3\u4e00\u4e0b",(0,i.kt)("inlineCode",{parentName:"p"},".git"),"\u76ee\u5f55\u90fd\u6709\u4ec0\u4e48\u5427\u3002"),(0,i.kt)("h2",a({},{id:"git\u76ee\u5f55"}),(0,i.kt)("inlineCode",{parentName:"h2"},".git"),"\u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"cd .git\nls -al\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"_git.png",src:n(79996).Z,width:"1290",height:"852"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"info"),": \u76ee\u5f55\u5305\u542b\u4e00\u4e2a\u5168\u5c40\u6027\u6392\u9664 ",(0,i.kt)("inlineCode",{parentName:"li"},"(global exclude)")," \u6587\u4ef6\uff0c\u7528\u4ee5\u653e\u7f6e\u90a3\u4e9b\u4e0d\u5e0c\u671b\u88ab\u8bb0\u5f55\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore")," \u6587\u4ef6\u4e2d\u7684\u5ffd\u7565\u6a21\u5f0f ",(0,i.kt)("inlineCode",{parentName:"li"},"(ignored patterns)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": \u6587\u4ef6\u4ec5\u4f9b ",(0,i.kt)("inlineCode",{parentName:"li"},"GitWeb")," \u7a0b\u5e8f\u4f7f\u7528\uff0c\u6211\u4eec\u65e0\u9700\u5173\u5fc3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"stage"),"\u53c8\u79f0\u6682\u5b58\u533a, \u662f\u4e00\u4e2a\u7d22\u5f15"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config"),"\uff1a\u5b58\u653e\u5404\u79cd\u8bbe\u7f6e\u6587\u6863, \u5305\u542b\u9879\u76ee\u7279\u6709\u7684\u914d\u7f6e\u9009\u9879\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"cat .git/config\n")),(0,i.kt)("p",null,"\u5305\u62ec\u9ed8\u8ba4",(0,i.kt)("inlineCode",{parentName:"p"},"remote"),",  ",(0,i.kt)("inlineCode",{parentName:"p"},"branch"),", \u4e2a\u4eba\u8d26\u6237\u7b49\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-sh"}),'[core]\n    repositoryformatversion = 0\n    filemode = true\n    bare = false\n    logallrefupdates = true\n    ignorecase = true\n    precomposeunicode = true\n[remote "origin"]\n    url = git@github.com:Rain120/study-notes.git\n    fetch = +refs/heads/*:refs/remotes/origin/*\n[branch "master"]\n    remote = origin\n    merge = refs/heads/master\n[branch "note-template"]\n    remote = origin\n    merge = refs/heads/note-template\n')),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e0b\u547d\u4ee4\u6765\u67e5\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," \u914d\u7f6e\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),"\u4fe1\u606f"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"# \u7cfb\u7edf\u914d\u7f6e\ngit config --system --list\n\n# \u5168\u5c40\u914d\u7f6e\ngit config --global --list\n\n# \u5f53\u524d\u4ed3\u5e93\ngit config --local --list\n\n# \u6253\u5f00\u7f16\u8f91\u5668\u6765\u4fee\u6539\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6; --system, --global or repository (\u9ed8\u8ba4)\ngit config -e / --edit\n")),(0,i.kt)("p",null,"\u8be6\u89c1"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"git config --help\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HEAD"),"\uff1a\u6307\u5411\u5f53\u524d\u6240\u5728\u5206\u652f",(0,i.kt)("inlineCode",{parentName:"li"},"(current branch)"),"\u7684\u6307\u9488\u6587\u4ef6\u8def\u5f84",(0,i.kt)("inlineCode",{parentName:"li"},"(Hash)"),"\uff0c\u4e00\u822c\u6307\u5411",(0,i.kt)("inlineCode",{parentName:"li"},"refs"),"\u4e0b\u7684\u67d0\u6587\u4ef6")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-HEAD.png",src:n(8421).Z,width:"1430",height:"194"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-HEAD-sourcetree.png",src:n(88162).Z,width:"2880",height:"1800"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"refs"),"\uff1a\u5b58\u50a8\u6307\u5411\u5404\u4e2a\u5206\u652f\u7684\u6307\u9488",(0,i.kt)("inlineCode",{parentName:"p"},"(SHA-1\u6807\u8bc6)"),"\u6587\u4ef6, \u5305\u62ec\u5206\u652f\u548c\u6807\u7b7e\u7684\u5f15\u7528"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"git-refs.png",src:n(85608).Z,width:"1324",height:"222"})))),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"heads")),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"git-refs-heads.png",src:n(18557).Z,width:"1446",height:"182"})),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"remotes")),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"git-refs-remotes.png",src:n(79707).Z,width:"1440",height:"132"})),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"git-tag-add.png",src:n(73344).Z,width:"1264",height:"56"})),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{alt:"git-refs-tags.png",src:n(6830).Z,width:"1444",height:"132"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hooks"),"\uff1a\u5305\u542b\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u7aef\u7684\u94a9\u5b50\u811a\u672c ",(0,i.kt)("inlineCode",{parentName:"li"},"(hooks scripts)"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Git Hooks")," \u662f\u5b9a\u5236\u5316\u7684\u811a\u672c\u7a0b\u5e8f, \u5b83\u80fd\u5728\u7279\u5b9a\u4e8b\u4ef6\u53d1\u751f",(0,i.kt)("strong",{parentName:"p"},"\u4e4b\u524d"),"\u6216",(0,i.kt)("strong",{parentName:"p"},"\u4e4b\u540e"),"\u6267\u884c\u7279\u5b9a\u811a\u672c\u4ee3\u7801\u529f\u80fd\u3002\u5b83\u5206\u4e3a\u5ba2\u6237\u7aef",(0,i.kt)("inlineCode",{parentName:"p"},"hooks")," ",(0,i.kt)("inlineCode",{parentName:"p"},"(Client-Side Hooks)")," \u548c\u670d\u52a1\u7aef",(0,i.kt)("inlineCode",{parentName:"p"},"hooks")," ",(0,i.kt)("inlineCode",{parentName:"p"},"(Server-Side Hooks)"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client-Side Hooks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"pre-commit"))," : \u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"git commit"),"\u547d\u4ee4\u65f6\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u4ee3\u7801\u683c\u5f0f\u5316"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepare-commit-msg"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"commit message"),"\u7f16\u8f91\u5668\u542f\u52a8\u524d",(0,i.kt)("inlineCode",{parentName:"li"},"default commit message"),"\u521b\u5efa\u540e\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u751f\u6210\u9ed8\u8ba4\u7684",(0,i.kt)("a",a({parentName:"li"},{href:"https://conventionalcommits.org/"}),"\u6807\u51c6\u5316\u7684\u63d0\u4ea4\u8bf4\u660e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"commit-msg"))," :  \u5728",(0,i.kt)("inlineCode",{parentName:"li"},"git commit -m message"),"\u540e\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u6821\u9a8c",(0,i.kt)("inlineCode",{parentName:"li"},"commit message"),"\u662f\u5426\u6807\u51c6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"post-commit")," : \u6574\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"git commit"),"\u5b8c\u6210\u540e\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u90ae\u4ef6\u901a\u77e5\u3001\u63d0\u9192"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"applypatch-msg")," : \u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"git am"),"\u547d\u4ee4\u65f6\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u68c0\u67e5\u547d\u4ee4\u63d0\u53d6\u51fa\u6765\u7684\u63d0\u4ea4\u4fe1\u606f\u662f\u5426\u7b26\u5408\u7279\u5b9a\u683c\u5f0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pre-applypatch "),": ",(0,i.kt)("inlineCode",{parentName:"li"},"git am"),"\u63d0\u53d6\u51fa\u8865\u4e01\u5e76\u5e94\u7528\u4e8e\u5f53\u524d\u5206\u652f\u540e\uff0c\u51c6\u5907\u63d0\u4ea4\u524d\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u6216\u68c0\u67e5\u7f13\u51b2\u533a\u4ee3\u7801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"post-applypatch"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"git -am"),"\u63d0\u4ea4\u540e\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u901a\u77e5\u3001\u6216\u8865\u4e01\u90ae\u4ef6\u56de\u590d\uff08\u6b64\u94a9\u5b50\u4e0d\u80fd\u505c\u6b62",(0,i.kt)("inlineCode",{parentName:"li"},"git am"),"\u8fc7\u7a0b\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pre-rebase"),": \u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"git rebase"),"\u547d\u4ee4\u65f6\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"post-rewrite"),": \u6267\u884c\u4f1a\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"li"},"commit"),"\u7684\u547d\u4ee4\u65f6\u89e6\u53d1\uff0c\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"git rebase"),"\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"git commit --amend")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"post-checkout"),": \u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"git checkout"),"\u547d\u4ee4\u6210\u529f\u540e\u89e6\u53d1\uff0c\u53ef\u7528\u4e8e\u751f\u6210\u7279\u5b9a\u6587\u6863\uff0c\u5904\u7406\u5927\u4e8c\u8fdb\u5236\u6587\u4ef6\u7b49"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"post-merge"),": \u6210\u529f\u5b8c\u6210\u4e00\u6b21 ",(0,i.kt)("inlineCode",{parentName:"li"},"merge"),"\u884c\u4e3a\u540e\u89e6\u53d1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pre-push"),": \u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"git push"),"\u547d\u4ee4\u65f6\u89e6\u53d1\uff0c\u53ef\u7528\u4e8e\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pre-auto-gc"),": \u6267\u884c\u5783\u573e\u56de\u6536\u524d\u89e6\u53d1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Server-Side Hooks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pre-receive"),": \u5f53\u670d\u52a1\u7aef\u6536\u5230\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"push"),"\u64cd\u4f5c\u8bf7\u6c42\u65f6\u89e6\u53d1\uff0c\u53ef\u7528\u4e8e\u68c0\u6d4b",(0,i.kt)("inlineCode",{parentName:"li"},"push"),"\u7684\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"update"),": \u4e0epre-receive\u76f8\u4f3c\uff0c\u4f46\u5f53\u4e00\u6b21",(0,i.kt)("inlineCode",{parentName:"li"},"push"),"\u60f3\u66f4\u65b0\u591a\u4e2a\u5206\u652f\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"pre-receive"),"\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u800c\u6b64\u94a9\u5b50\u4f1a\u4e3a\u6bcf\u4e00\u5206\u652f\u90fd\u6267\u884c\u4e00\u6b21"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"post-receive"),": \u5f53\u6574\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"push"),"\u64cd\u4f5c\u5b8c\u6210\u65f6\u89e6\u53d1\uff0c\u5e38\u7528\u4e8e\u670d\u52a1\u4fa7\u540c\u6b65\u3001\u901a\u77e5")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-hooks.png",src:n(22959).Z,width:"1708",height:"558"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"}," ",(0,i.kt)("inlineCode",{parentName:"p"},".sample")," \u62d3\u5c55\u540d\u662f\u4e3a\u4e86\u9632\u6b62\u5b83\u4eec\u9ed8\u8ba4\u88ab\u6267\u884c\uff0c\u5b89\u88c5\u4e00\u4e2a\u94a9\u5b50\u53ea\u9700\u8981\u53bb\u6389 ",(0,i.kt)("inlineCode",{parentName:"p"},".sample"),"\u62d3\u5c55\u540d\u5373\u53ef\u3002")),(0,i.kt)("p",null,"\u76f8\u5173\u4f7f\u7528\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"husky")," ",(0,i.kt)("inlineCode",{parentName:"p"},"commitlint")),(0,i.kt)("h4",a({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/geeeeeeeeek/git-recipes/wiki/5.4-Git-%E9%92%A9%E5%AD%90%EF%BC%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BD%A0%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81"}),"\u81ea\u5b9a\u4e49\u4f60\u7684\u5de5\u4f5c\u6d41")),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90#r_git_hooks"}),"Git-\u94a9\u5b50")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"logs"),"\uff1a\u5b58\u50a8\u65e5\u5fd7\u7684\u6587\u4ef6\u5939"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"git log")," \u80fd\u591f\u8ba9\u6211\u4eec\u6e05\u6670\u7684\u77e5\u9053\u6211\u4eec ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," \u5176\u4ed6\u4eba\u5177\u4f53\u6bcf\u6b21\u63d0\u4ea4\u90fd\u505a\u4e86\u4ec0\u4e48\uff0c\u4ee5\u53ca\u7cbe\u786e\u5b9a\u4f4d\u5230\u6bcf\u4e00\u6b21\u4ee3\u7801\u4fee\u6539\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"# \u6700\u8fd1 n \u6761\u65e5\u5fd7\ngit log -n\n\ngit reflog\n\n# log \u63d0\u4ea4\u65f6\u95f4\u3001\u4f5c\u8005\u683c\u5f0f\u5316\ngit log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"objects"),"\uff1a\u5b58\u653e",(0,i.kt)("inlineCode",{parentName:"li"},"git"),"\u5bf9\u8c61")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Git "),"\u7684\u5e95\u5c42\u5b58\u50a8\u4ece\u672c\u8d28\u4e0a\u8bb2\u662f\u57fa\u4e8e\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u5b9e\u73b0\u7684 \u952e\u503c\u5bf9\u578b\u7684\u6570\u636e\u5e93, ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\u5bf9\u5e94\u5bf9\u8c61\u5185\u5bb9\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," \u503c, ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"p"}," git objects"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git objects"),"\u5206\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"\u7c7b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"commit"),": \u5bf9\u8c61\u5b58\u50a8",(0,i.kt)("inlineCode",{parentName:"li"},"git"),"\u4e2d\u7684\u63d0\u4ea4\u4fe1\u606f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tree "),": \u5bf9\u8c61\u5b58\u50a8",(0,i.kt)("inlineCode",{parentName:"li"}," git")," \u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u5143\u6570\u636e\u4fe1\u606f, \u5305\u62ec\u6587\u4ef6\u540d\u53ca\u76ee\u5f55\u7ed3\u6784\u4fe1\u606f\u7b49."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blob "),": \u5bf9\u5e94\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"git "),"\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u5185\u5bb9.")),(0,i.kt)("p",null,"\u6211\u4eec\u5c06\u5728\u4e0b\u8282\u66f4\u8be6\u7ec6\u7684\u8bb2\u8ff0 ",(0,i.kt)("a",a({parentName:"p"},{href:"./git-objects"}),"git objects"),"."),(0,i.kt)("h2",a({},{id:"\u53c2\u8003\u8d44\u6599"}),"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Git"}),"Git - Wiki")),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://git-scm.com/"}),"Git \u5b98\u7f51")),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://marklodato.github.io/visual-git-guide/index-en.html"}),"A Visual Git Reference")),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/Rain120/Free-Source#Git"}),"Git \u8d44\u6599\u5b66\u4e60")))}g.isMDXComponent=!0},79996:function(e,t,n){t.Z=n.p+"assets/images/_git-068297d983e013e210f5d0e561c69e82.png"},88162:function(e,t,n){t.Z=n.p+"assets/images/git-HEAD-sourcetree-68c59006e8a7cf150f35e9604aa40f9f.png"},8421:function(e,t,n){t.Z=n.p+"assets/images/git-HEAD-9c56b57d1dd145fb6684fb97064b96c0.png"},22959:function(e,t,n){t.Z=n.p+"assets/images/git-hooks-640ee87012076789901a0fb5d882eff7.png"},18557:function(e,t,n){t.Z=n.p+"assets/images/git-refs-heads-4adc70fe264f1d98fbe6203468faf5c6.png"},79707:function(e,t,n){t.Z=n.p+"assets/images/git-refs-remotes-60550eb7d4b498c6c299ee50464a513e.png"},6830:function(e,t,n){t.Z=n.p+"assets/images/git-refs-tags-e3300b88966393a50a0636374c649687.png"},85608:function(e,t,n){t.Z=n.p+"assets/images/git-refs-099ed2df1965420831eb9f6fe750c6a8.png"},73344:function(e,t,n){t.Z=n.p+"assets/images/git-tag-add-72f2951200679536ff7b4e0db8466c63.png"}}]);