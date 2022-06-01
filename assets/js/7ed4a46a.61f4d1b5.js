"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[3752],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return v}});var n=a(59496);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(a),v=i,k=c["".concat(p,".").concat(v)]||c[v]||d[v]||r;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},64019:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var n=a(62848),i=a(79213),r=(a(59496),a(49613)),o=["components"],l={},p="Code Review",m={unversionedId:"coding/code-review",id:"coding/code-review",title:"Code Review",description:"CR \u662f\u4ec0\u4e48",source:"@site/engineering/coding/code-review.md",sourceDirName:"coding",slug:"/coding/code-review",permalink:"/study-notes/engineering/coding/code-review",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1654090734,formattedLastUpdatedAt:"6/1/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4ee3\u7801\u6ce8\u91ca",permalink:"/study-notes/engineering/coding/annotation"},next:{title:"\u4ee3\u7801\u98ce\u683c",permalink:"/study-notes/engineering/coding/style"}},s={},d=[{value:"CR \u662f\u4ec0\u4e48",id:"cr-\u662f\u4ec0\u4e48",level:2},{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:3},{value:"\u5e38\u7528\u672f\u8bed",id:"\u5e38\u7528\u672f\u8bed",level:2},{value:"Developer",id:"developer",level:2},{value:"\u5b9a\u4e49\u597d\u4f60\u7684\u63d0\u4ea4\u7684\u7c7b\u578b",id:"\u5b9a\u4e49\u597d\u4f60\u7684\u63d0\u4ea4\u7684\u7c7b\u578b",level:3},{value:"\u5c3d\u53ef\u80fd\u5c0f\u7684 PR",id:"\u5c3d\u53ef\u80fd\u5c0f\u7684-pr",level:3},{value:"\u5199\u597d PR \u7684 CL",id:"\u5199\u597d-pr-\u7684-cl",level:3},{value:"\u600e\u4e48\u624d\u662f\u4e00\u4e2a\u597d\u7684 CL\uff1f",id:"\u600e\u4e48\u624d\u662f\u4e00\u4e2a\u597d\u7684-cl",level:4},{value:"\u6c42 CR\uff0c\u6311\u9009\u5408\u9002\u7684\u8bc4\u5ba1\u4eba",id:"\u6c42-cr\u6311\u9009\u5408\u9002\u7684\u8bc4\u5ba1\u4eba",level:3},{value:"\u8c03\u6574\u597d\u4f60\u7684\u5fc3\u6001",id:"\u8c03\u6574\u597d\u4f60\u7684\u5fc3\u6001",level:3},{value:"Reviewer",id:"reviewer",level:2},{value:"CR \u8fc7\u7a0b",id:"cr-\u8fc7\u7a0b",level:3},{value:"CR \u8981\u70b9",id:"cr-\u8981\u70b9",level:3},{value:"\u8bc4\u8bba\u76f8\u5173",id:"\u8bc4\u8bba\u76f8\u5173",level:3},{value:"CR \u6c89\u6dc0",id:"cr-\u6c89\u6dc0",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],c={toc:d};function v(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code-review"},"Code Review"),(0,r.kt)("h2",{id:"cr-\u662f\u4ec0\u4e48"},"CR \u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"\u5168\u79f0 Code Review, \u4ee3\u7801\u5ba1\u67e5\u3002\u6307\u5bf9\u8ba1\u7b97\u673a\u6e90\u4ee3\u7801\u7cfb\u7edf\u5316\u5730\u5ba1\u67e5\uff0c\u5e38\u7528\u8f6f\u4ef6\u540c\u884c\u8bc4\u5ba1\u7684\u65b9\u5f0f\u8fdb\u884c\uff0c\u5176\u76ee\u7684\u662f\u5728\u627e\u51fa\u53ca\u4fee\u6b63\u5728\u8f6f\u4ef6\u5f00\u53d1\u521d\u671f\u672a\u53d1\u73b0\u7684\u9519\u8bef\uff0c\u63d0\u5347\u8f6f\u4ef6\u8d28\u91cf\u53ca\u5f00\u53d1\u8005\u7684\u6280\u672f\u3002"),(0,r.kt)("h3",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u63d0\u5347\u4ee3\u7801\u8d28\u91cf"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u51fa\u6f5c\u5728 bug"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 review \u4ee3\u7801\u5b66\u4e60")),(0,r.kt)("h2",{id:"\u5e38\u7528\u672f\u8bed"},"\u5e38\u7528\u672f\u8bed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PR: Pull Request"),(0,r.kt)("li",{parentName:"ul"},"MR: Merge Request"),(0,r.kt)("li",{parentName:"ul"},"CL: \u53d8\u66f4\u5217\u8868 (changelist), \u8868\u793a\u5df2\u63d0\u4ea4\u5230\u7248\u672c\u63a7\u5236\u6216\u6b63\u5728\u8fdb\u884c\u4ee3\u7801\u5ba1\u67e5\u7684\u81ea\u5305\u542b\u66f4\u6539\u3002\u4e5f\u53ef\u4ee5\u53eb\u505a patch (\u8865\u4e01)\u3002"),(0,r.kt)("li",{parentName:"ul"},"WIP: Work In Progress"),(0,r.kt)("li",{parentName:"ul"},"LGTM \u5728\u6211\u770b\u6765\u4e0d\u9519(Looks Good to Me)"),(0,r.kt)("li",{parentName:"ul"},"ibid. \u540c\u4e0a")),(0,r.kt)("h2",{id:"developer"},"Developer"),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u9700\u8981\u6ce8\u610f \u26a0\ufe0e\u26a0\ufe0f\u3001\u601d\u8003 \ud83e\udd14 \u7684\u70b9"),(0,r.kt)("h3",{id:"\u5b9a\u4e49\u597d\u4f60\u7684\u63d0\u4ea4\u7684\u7c7b\u578b"},"\u5b9a\u4e49\u597d\u4f60\u7684\u63d0\u4ea4\u7684\u7c7b\u578b"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b commit type \u5c3d\u65e9\u53d8\u66f4\u53ef\u4ee5\u907f\u514d\u5728\u7ec6\u8282\u3001\u4fee\u9970\u3001\u6587\u6863\u7b49\u65b9\u9762\u6d6a\u8d39\u7cbe\u529b\u3002\u6bd4\u5982\u8bf4 ",(0,r.kt)("strong",{parentName:"p"},"WIP"),", ",(0,r.kt)("strong",{parentName:"p"},"doc"),", blah, blah, blah... \u66f4\u591a commit type \u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog/commitlint#what-is-commitlint"},"Commit Lint")))),(0,r.kt)("h3",{id:"\u5c3d\u53ef\u80fd\u5c0f\u7684-pr"},"\u5c3d\u53ef\u80fd\u5c0f\u7684 PR"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u505a Code Review \u7684\u65f6\u5019\uff0c\u5982\u679c\u6709\u5927\u91cf\u7684\u6587\u4ef6\u4fee\u6539\uff0c\u90a3\u4e48 Review \u8d77\u6765\u662f\u5f88\u56f0\u96be\u7684\uff0c\u6bd4\u8f83\u8d39\u4eba\u3002\n\u5982\u679c PR \u6bd4\u8f83\u5c0f\uff0c\u76f8\u5bf9\u5c31\u6bd4\u8f83\u5bb9\u6613 Review\uff0c\u4e5f\u5bb9\u6613\u53d1\u73b0\u4ee3\u7801\u4e2d\u53ef\u80fd\u5b58\u5728\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u662f\u4e00\u4e2a\u6bd4\u8f83\u5927\u7684\u6539\u52a8\uff0c\u90a3\u4e48\u6700\u597d\u5206\u6279\u63d0\u4ea4\uff0c\u4ee5\u51cf\u8f7b reviewer \u7684\u5ba1\u67e5\u538b\u529b\u3002"))),(0,r.kt)("p",null,"Note: ",(0,r.kt)("strong",{parentName:"p"},"\u6211\u4e2a\u4eba\u7684\u4e60\u60ef\u662f\uff0c\u591a commit\uff0c\u6bcf\u6b21 commit \u4f1a\u5927\u81f4\u63cf\u8ff0\u505a\u4e86\u4ec0\u4e48")),(0,r.kt)("p",null,"Eg:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git add common/components/wrapper/select\n\ngit commit -m 'feat(common): wrapper the component of select for expand it functions from the base'\n")),(0,r.kt)("h3",{id:"\u5199\u597d-pr-\u7684-cl"},"\u5199\u597d PR \u7684 CL"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"CL \u63cf\u8ff0\u662f\u8fdb\u884c\u4e86\u54ea\u4e9b\u66f4\u6539\u4ee5\u53ca\u4e3a\u4f55\u66f4\u6539\u7684\u516c\u5f00\u8bb0\u5f55\u3002CL \u5c06\u4f5c\u4e3a\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u4e2d\u7684\u6c38\u4e45\u8bb0\u5f55\uff0c\u53ef\u80fd\u4f1a\u5728\u957f\u65f6\u671f\u5185\u88ab\u9664\u5ba1\u67e5\u8005\u4e4b\u5916\u7684\u6570\u767e\u4eba\u9605\u8bfb\u3002"))),(0,r.kt)("h4",{id:"\u600e\u4e48\u624d\u662f\u4e00\u4e2a\u597d\u7684-cl"},"\u600e\u4e48\u624d\u662f\u4e00\u4e2a\u597d\u7684 CL\uff1f"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e00\u822c\u4e00\u4e2a CL \u4f1a\u5305\u62ec ",(0,r.kt)("strong",{parentName:"p"},"\u9996\u884c(First Line)"),", ",(0,r.kt)("strong",{parentName:"p"},"\u7a7a\u884c(Empty Line)"),", ",(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u4f53(Body)"),"\u3002"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u9996\u884c"),"\u4e3b\u8981\u662f\u7528\u6765\u544a\u8bc9 reviewer\uff0c\u672c\u6b21\u7684 PR \u6b63\u5728\u505a\u4ec0\u4e48\u7684\u7b80\u77ed\u6458\u8981\uff0c\u6700\u597d\u77ed\u5c0f\u800c\u7cbe\u608d\uff0c\u7c7b\u4f3c\u4e8e\u5199\u4e00\u4e2a Summary"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u7a7a\u884c"),"\u7528\u6765\u533a\u5206\u9996\u884c\u548c\u4e3b\u4f53\u90e8\u5206\uff0c\u8ba9 reviewer \u53ef\u4ee5\u7740\u91cd\u4e8e\u9996\u884c\u6458\u8981\u4fe1\u606f"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u4f53"),"\u53ef\u80fd\u5305\u62ec\u5bf9\u6b63\u5728\u89e3\u51b3\u7684\u95ee\u9898\u7684\u7b80\u8981\u63cf\u8ff0\uff0c\u95ee\u9898\uff0c\u89e3\u51b3\u601d\u8def\uff0c\u89e3\u51b3\u65b9\u6848\uff0c\u4e3a\u4ec0\u4e48\u4f7f\u7528\u8fd9\u79cd\u65b9\u6848\uff0cblah,blah,blah ..."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5230\u4e86\u5f00\u5fc3\u5feb\u4e50\u7684\u4e3e\u6817\u5b50 \ud83c\udf30 \u73af\u8282\u4e86")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83d\ude80Good CL \u63cf\u8ff0"),", \u770b\u5b8c\u5c31 TM \u4e00\u4e2a\u8bcd\u513f\uff0c\u6e05\u6670\u660e\u767d\uff0c\u8a00\u7b80\u610f\u8d45\uff0c\u500d\u723d\u513f~"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u529f\u80fd\u66f4\u65b0")),(0,r.kt)("p",{parentName:"blockquote"},"\u5728 heatmap \u4e2d\u6dfb\u52a0 borderRadius \u914d\u7f6e (\u53ef\u4ee5\u52a0\u7c97\u6216\u8005\u8bbe\u7f6e\u4e3a\u6807\u9898)"),(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6b21\u4fee\u6539\u662f\u4ece issue#xxx \u83b7\u53d6\u7684\uff0c\u9700\u8981\u5728 heatmap \u4e0a\u589e\u52a0 borderRadius \u914d\u7f6e\uff0c\u901a\u8fc7\u5c06\u7ec4\u4ef6\u7684 borderRadius \u900f\u4f20\u7ed9 zrender \u6765\u5b8c\u6210\uff0cblah, blah ...")),(0,r.kt)("p",null,"\u8be6\u7ec6\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/echarts/pull/16493"},"echarts issue 16493")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bad CL \u63cf\u8ff0(\u770b\u5b8c\u76f4\u63a5\u62a5\u8b66 \ud83d\ude93)"),"\uff0c\u9700\u8981\u770b\u5b8c\u4f60\u5199\u7684\u4e00\u5806\u4e1c\u897f\uff0c\u624d\u77e5\u9053\u4f60\u8981\u5e72\u4ec0\u4e48\uff0c\u66f4\u79bb\u8c31\u7684\u662f\uff0c\u770b\u5b8c\u4e86\u4e5f\u4e0d\u77e5\u9053\u4f60\u8981\u5e72\u4ec0\u4e48"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove something"),(0,r.kt)("li",{parentName:"ul"},"build something"),(0,r.kt)("li",{parentName:"ul"},"fix something"),(0,r.kt)("li",{parentName:"ul"},"blah, blah, blah...")),(0,r.kt)("p",null,"shit"),(0,r.kt)("h3",{id:"\u6c42-cr\u6311\u9009\u5408\u9002\u7684\u8bc4\u5ba1\u4eba"},"\u6c42 CR\uff0c\u6311\u9009\u5408\u9002\u7684\u8bc4\u5ba1\u4eba"),(0,r.kt)("p",null,"\u5728\u751f\u6d3b\u4e2d\uff0c\u826f\u5e08\u76ca\u53cb\u76ca\u4e8e\u884c\uff0c\u8981\u6709\u4e00\u6b21\u9ad8\u8d28\u91cf\u7684 CR\uff0c\u5fc5\u5b9a\u9700\u8981\u627e\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"\u201c\u597d\u7684 reviewer\u201d"),"(PS: \u4e0d\u8981\u62ac\u6760\uff0c\u662f\u4e0d\u662f\u8981\u627e\u5927\u4f6c\u624d\u53ef\u4ee5\uff0c\u5408\u9002\u6700\u6700\u91cd\u8981)\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e2a\u4eba\u7684\u5efa\u8bae\u662f\u53ef\u4ee5\u6839\u636e\u4e0b\u9762\u6b65\u9aa4\u53bb\u7b5b\u9009\u5230\u4e00\u4e2a\u5408\u9002\u7684\u540c\u5b66"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u4ee3\u7801",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f60\u9700\u8981\u6709\u4e00\u4e2a\u548c\u4f60\u540c\u5904\u4e8e\u4e00\u6761\u4e1a\u52a1\u7ebf\u7684\u540c\u5b66\uff0c\u4ed6\u5728\u4e1a\u52a1\u4e0a\u7684\u7406\u89e3\u53ef\u4ee5\u7ed9\u4f60\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u80fd\u7406\u89e3\u4f60\u7684\u4e0a\u4e0b\u6587\u5173\u7cfb\uff0c\u4e0d\u9700\u8981\u8fc7\u5ea6\u7684\u89e3\u91ca"))),(0,r.kt)("li",{parentName:"ul"},"\u901a\u7528\u4ee3\u7801 - \u7cbe\u901a\u4f60\u6b63\u5728\u4f7f\u7528\u7684\u8bed\u8a00\u3001\u6846\u67b6\u6216\u5de5\u5177 - \u5bf9\u8fd9\u4e00\u4e3b\u9898\u77e5\u4e4b\u751a\u6df1\uff0c\u6709\u81ea\u5df1\u7684\u7406\u89e3")))),(0,r.kt)("h3",{id:"\u8c03\u6574\u597d\u4f60\u7684\u5fc3\u6001"},"\u8c03\u6574\u597d\u4f60\u7684\u5fc3\u6001"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6211\u4eec\u77e5\u9053\uff0c\u4e0d\u540c\u4eba\u7684\u80fd\u529b\u4e0d\u540c\uff0c\u800c\u4e14\u7a0b\u5e8f\u5458\u5417\uff0c\u5f88\u591a\u4eba\u90fd\u5f88\u81ea\u8d1f\u7684\uff0c\u4f46\u662f\u4e0d\u8981\u56e0\u4e3a CR \u522b\u4eba\u63d0\u4e86\u81ea\u5df1\u4e0d\u5c11\u95ee\u9898\u5c31\u5f71\u54cd\u81ea\u5df1\u7684\u5fc3\u60c5\uff0c\u7136\u540e\u5c31\u8ddf\u522b\u4eba\u5e72\u8d77\u6765\uff0c\u4f55\u5fc5\u56e0\u4e3a\u8fd9\u4e2a\u5462\uff1ftake it easy\uff0cjust be smile! \u865a\u5fc3\u63a5\u53d7\u522b\u4eba\u7684\u5efa\u8bae\uff0c\u8bf4\u4e0d\u5b9a\u4f1a\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\u5462\uff1f"),(0,r.kt)("p",{parentName:"div"},"\u5f53\u522b\u4eba\u82b1\u8d39\u5927\u91cf\u7684\u65f6\u95f4\u7ed9\u4f60\u8bc4\u8bba\uff0c\u4e5f\u8bf7\u4f60\u5fc3\u5e73\u6c14\u548c\u7684\u4e0e\u5bf9\u65b9\u6c9f\u901a\u4ea4\u6d41\uff0c\u4e0d\u8981\u541d\u556c\u4f60\u7684\u611f\u8c22\uff0c\u7b14\u82af or \u2764 or \ud83e\udd1d"))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6760\u7cbe\u81ea\u52a8\u8df3\u8fc7\u8fd9\u6761\u5427\uff0c\u5f85\u4f1a\u4f60\u770b\u5b8c\u4e4b\u540e\u60f3\u8ddf\u6211\u5e72\u67b6\uff0c\u90a3\u53ef\u4e0d\u5212\u7b97\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," \u6211\u5e73\u5e38\u5728\u63d0\u4ea4\u4e4b\u524d\u4f1a review \u4e00\u4e0b\u81ea\u5df1\u6539\u52a8\u7684\u5730\u65b9\uff0c\u6bd4\u5982\u8bf4 console \u8981\u4e0d\u8981\u5220\u554a\uff0c\u4ee3\u7801\u98ce\u683c\u554a\uff0c\u80fd\u4e0d\u80fd\u7b80\u5355\u4f18\u5316\u4e00\u4e9b\u903b\u8f91\u5440\uff0cblah\uff0cblah...."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/eng-practices/blob/master/review/developer/index.md"},"Google Code Review Developer Guide")),(0,r.kt)("h2",{id:"reviewer"},"Reviewer"),(0,r.kt)("p",null,"\u8bc4\u5ba1\u8005\u9700\u8981\u6ce8\u610f \u26a0\ufe0e\u3001\u601d\u8003 \ud83e\udd14 \u7684\u70b9"),(0,r.kt)("h3",{id:"cr-\u8fc7\u7a0b"},"CR \u8fc7\u7a0b"),(0,r.kt)("h3",{id:"cr-\u8981\u70b9"},"CR \u8981\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bbe\u8ba1\u6a21\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u903b\u8f91")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u901a\u7528\u5305\u5efa\u8bae\u5173\u6ce8")," ")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ee3\u7801\u662f\u5426\u5177\u6709\u6b63\u786e\u4e14\u8bbe\u8ba1\u826f\u597d\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://docs.cypress.io/"},"cypress")," \u4e86\u89e3\u4e00\u4e0b"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u98ce\u683c")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://rain120.github.io/study-notes/engineering/coding/style"},"\u4ee3\u7801\u98ce\u683c")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u91ca \u6587\u6863")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://rain120.github.io/study-notes/engineering/coding/annotation"},"\u4ee3\u7801\u6ce8\u91ca")))),(0,r.kt)("h3",{id:"\u8bc4\u8bba\u76f8\u5173"},"\u8bc4\u8bba\u76f8\u5173"),(0,r.kt)("p",null,"\u5728\u505a CR \u65f6\uff0c\u6211\u4eec\u4f1a\u5bf9\u4ee3\u7801\u8fdb\u884c\u8bc4\u8bba\uff0c\u4f46\u662f\u8bc4\u8bba\u5982\u679c\u6ca1\u6709\u4ec0\u4e48\u7c7b\u76ee\u533a\u5206\uff0c\u5927\u90e8\u5206\u65f6\u5019\u4f1a\u6210\u4e3a\u4e00\u79cd\u8d1f\u62c5\uff0c\u6240\u4ee5\uff0c\u6211\u5efa\u8bae\uff0c\u6211\u4eec\u8981\u5bf9\u8bc4\u8bba\u8fdb\u884c\u5206\u7c7b\u5904\u7406\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6bd4\u5982\u8bf4\uff0c\u6211\u4eec\u4f7f\u7528 emoji \u6765\u533a\u5206\u5b9e\u73b0\u7684\u597d\u574f"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude41 \u6211\u89c9\u5f97\u8fd9\u91cc\u6709\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude10 \u6211\u80fd\u63a5\u53d7\u8fd9\u79cd\u5199\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude00 \u770b\u7740\u6ca1\u4ec0\u4e48\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd29 \u725b\u903c"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc4d \u4e0d\u9519\u4e0d\u9519"),(0,r.kt)("li",{parentName:"ul"},"\u2764 \u611f\u8c22")),(0,r.kt)("p",{parentName:"div"},"\u5f53\u7136\u4f60\u4eec\u53ef\u4ee5\u6839\u636e\u56e2\u961f\u89c4\u8303\u6765\u5236\u5b9a\u7c7b\u522b\uff0c\u6bd4\u5982\u8bf4\u7f29\u5199 \u524d\u7f00\u662f","[P0]",", ","[P1]",", ","[p2]",", ","[O]"," optional\uff0c","[Q]"," question"))),(0,r.kt)("h2",{id:"cr-\u6c89\u6dc0"},"CR \u6c89\u6dc0"),(0,r.kt)("p",null,"\u597d\u7684\u4e1c\u897f\uff0c\u5f53\u7136\u8981\u8bb0\u5f97\u5206\u4eab\u4e86\uff0cCR \u4e5f\u662f\u4e00\u6837\u7684\uff0c\u5f53\u51fa\u73b0\u4e86\u4e00\u4e2a\u6bd4\u8f83\u6709\u4ee3\u8868\u6027\u7684 CR\uff0c\u6bd4\u5982\u8bf4 ",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u597d\u7684\u89e3\u51b3\u65b9\u6848"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u6bd4\u8f83\u6709\u4ee3\u8868\u6027\u7684\u95ee\u9898"),"\uff0c\u8fd9\u7c7b\u7684 CR \u5c31\u5e94\u8be5\u6c89\u6dc0\u4e0b\u6765\u3002\u4ed6\u4eec\u6709\u7740\u5929\u7136\u7684\u4f18\u52bf:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76f8\u540c\u95ee\u9898\u501f\u9274"),(0,r.kt)("li",{parentName:"ul"},"\u53cd\u4f8b\u793a\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u7528\u65b9\u6848\u7684\u62bd\u79bb"),(0,r.kt)("li",{parentName:"ul"},"blah, blah, blah ...")),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Code_review"},"Code review")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/eng-practices"},"Google \u5f00\u53d1\u8005\u4ee3\u7801\u5ba1\u67e5\u6307\u5357 \u82f1\u6587\u7248")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jimmysong.io/eng-practices/docs/review/"},"Google \u5f00\u53d1\u8005\u4ee3\u7801\u5ba1\u67e5\u6307\u5357 \u4e2d\u6587\u7248")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://coolshell.cn/articles/1302.html"},"CODE REVIEW \u4e2d\u7684\u51e0\u4e2a\u63d0\u793a")))}v.isMDXComponent=!0}}]);