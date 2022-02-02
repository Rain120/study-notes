"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[734],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),k=a,m=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51340:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={},d="CSS \u5e38\u89c1\u7684\u9009\u62e9\u5668",c={unversionedId:"css/css-selector",id:"css/css-selector",title:"CSS \u5e38\u89c1\u7684\u9009\u62e9\u5668",description:"\u672c\u6587\u53ea\u8bb2\u89e3 \u6982\u5ff5\u548c\u7b80\u5355\u7528\u6cd5\u3002\u4e0d\u6d89\u53ca\u6df1\u5c42\u6b21\u7684\u5206\u6790\u548c\u4f7f\u7528\u3002",source:"@site/fe/css/css-selector.md",sourceDirName:"css",slug:"/css/css-selector",permalink:"/study-notes/fe/css/css-selector",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643793612,formattedLastUpdatedAt:"2/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"CSS \u4fee\u6539 input, textarea \u7b49\u63a7\u4ef6 placeholder \u7684\u989c\u8272",permalink:"/study-notes/fe/css/change-inputs-placeholder"},next:{title:"CSS3 Masks",permalink:"/study-notes/fe/css/css3-masks"}},p=[{value:"\u57fa\u7840\u9009\u62e9\u5668",id:"\u57fa\u7840\u9009\u62e9\u5668",children:[{value:"* \u901a\u7528\u9009\u62e9\u5668",id:"-\u901a\u7528\u9009\u62e9\u5668",children:[],level:3},{value:"\u5143\u7d20\u9009\u62e9\u5668",id:"\u5143\u7d20\u9009\u62e9\u5668",children:[],level:3},{value:"id \u9009\u62e9\u5668",id:"id-\u9009\u62e9\u5668",children:[],level:3},{value:"\u7c7b\u9009\u62e9\u5668",id:"\u7c7b\u9009\u62e9\u5668",children:[],level:3},{value:"Demo",id:"demo",children:[],level:3}],level:2},{value:"\u7ec4\u5408\u9009\u62e9\u5668",id:"\u7ec4\u5408\u9009\u62e9\u5668",children:[{value:"\u5206\u7ec4\u9009\u62e9\u5668 <code>,</code>",id:"\u5206\u7ec4\u9009\u62e9\u5668-",children:[],level:3},{value:"\u540e\u4ee3\u5143\u7d20\u7ec4\u5408\u5668 <code>\u7a7a\u683c</code>",id:"\u540e\u4ee3\u5143\u7d20\u7ec4\u5408\u5668-\u7a7a\u683c",children:[],level:3},{value:"\u76f4\u63a5\u5b50\u5143\u7d20\u7ec4\u5408\u5668 <code>&gt;</code>",id:"\u76f4\u63a5\u5b50\u5143\u7d20\u7ec4\u5408\u5668-",children:[],level:3},{value:"\u4e00\u822c\u5b50\u4ee3\u7ec4\u5408\u5668 <code>~</code>",id:"\u4e00\u822c\u5b50\u4ee3\u7ec4\u5408\u5668-",children:[],level:3},{value:"\u7d27\u90bb\u5143\u7d20\u7ec4\u5408\u5668 <code>+</code>",id:"\u7d27\u90bb\u5143\u7d20\u7ec4\u5408\u5668-",children:[],level:3},{value:"\u5217\u7ec4\u5408\u5668 <code>|| </code>",id:"\u5217\u7ec4\u5408\u5668--",children:[],level:3},{value:"Demo",id:"demo-1",children:[],level:3}],level:2},{value:"\u5c5e\u6027\u9009\u62e9\u5668",id:"\u5c5e\u6027\u9009\u62e9\u5668",children:[{value:"Eatt",id:"eatt",children:[],level:3},{value:"Eatt=val",id:"eattval",children:[],level:3},{value:"Eatt~=val",id:"eattval-1",children:[],level:3},{value:"Eatt|=val",id:"eattval-2",children:[],level:3}],level:2},{value:"\u4f2a\u9009\u62e9\u5668",id:"\u4f2a\u9009\u62e9\u5668",children:[{value:"\u4f2a\u7c7b <code>:</code>",id:"\u4f2a\u7c7b-",children:[],level:3},{value:"\u4f2a\u5143\u7d20 <code>::</code>",id:"\u4f2a\u5143\u7d20-",children:[],level:3}],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],s={toc:p};function u(e){var n=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"css-\u5e38\u89c1\u7684\u9009\u62e9\u5668"},"CSS \u5e38\u89c1\u7684\u9009\u62e9\u5668"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u672c\u6587\u53ea\u8bb2\u89e3 ",(0,l.kt)("strong",{parentName:"p"},"\u6982\u5ff5\u548c\u7b80\u5355\u7528\u6cd5"),"\u3002\u4e0d\u6d89\u53ca\u6df1\u5c42\u6b21\u7684\u5206\u6790\u548c\u4f7f\u7528\u3002"))),(0,l.kt)("h2",{id:"\u57fa\u7840\u9009\u62e9\u5668"},"\u57fa\u7840\u9009\u62e9\u5668"),(0,l.kt)("h3",{id:"-\u901a\u7528\u9009\u62e9\u5668"},"*"," \u901a\u7528\u9009\u62e9\u5668"),(0,l.kt)("p",null,"\u9009\u62e9\u6240\u6709\u5143\u7d20\u3002\uff08\u53ef\u9009\uff09\u53ef\u4ee5\u5c06\u5176\u9650\u5236\u4e3a\u7279\u5b9a\u7684\u540d\u79f0\u7a7a\u95f4\u6216\u6240\u6709\u540d\u79f0\u7a7a\u95f4\u3002"),(0,l.kt)("h3",{id:"\u5143\u7d20\u9009\u62e9\u5668"},"\u5143\u7d20\u9009\u62e9\u5668"),(0,l.kt)("p",null,"\u6309\u7167\u7ed9\u5b9a\u7684\u8282\u70b9\u540d\u79f0\uff0c\u9009\u62e9\u6240\u6709\u5339\u914d\u7684\u5143\u7d20\u3002"),(0,l.kt)("h3",{id:"id-\u9009\u62e9\u5668"},"id \u9009\u62e9\u5668"),(0,l.kt)("p",null,"\u6309\u7167 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u5c5e\u6027\u9009\u62e9\u4e00\u4e2a\u4e0e\u4e4b\u5339\u914d\u7684\u5143\u7d20\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e00\u4e2a\u6587\u6863\u4e2d\uff0c\u6bcf\u4e2a ID \u5c5e\u6027\u90fd\u5e94\u5f53\u662f\u552f\u4e00\u7684\u3002"),(0,l.kt)("h3",{id:"\u7c7b\u9009\u62e9\u5668"},"\u7c7b\u9009\u62e9\u5668"),(0,l.kt)("p",null,"\u6309\u7167\u7ed9\u5b9a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," \u5c5e\u6027\u7684\u503c\uff0c\u9009\u62e9\u6240\u6709\u5339\u914d\u7684\u5143\u7d20\u3002"),(0,l.kt)("h3",{id:"demo"},"Demo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"* {\n    padding: 10px;\n    font-size: 16px;\n}\n\np {\n    border: 1px solid #ccc;\n    margin: 5px 0;\n}\n\n#info {\n    background: rgb(143, 238, 19);\n}\n\np#info {\n    background: (143, 238, 19);\n}\n\n.warning {\n    background: #ff0;\n}\n\np.warning {\n    background: #ff0;\n}\n\np.error {\n    color: rgb(184, 0, 0);\n    font-weight: bold;\n}\n\np.warning.error {\n    color: rgb(184, 0, 0);\n    font-weight: bold;\n}\n")),(0,l.kt)("h2",{id:"\u7ec4\u5408\u9009\u62e9\u5668"},"\u7ec4\u5408\u9009\u62e9\u5668"),(0,l.kt)("h3",{id:"\u5206\u7ec4\u9009\u62e9\u5668-"},"\u5206\u7ec4\u9009\u62e9\u5668 ",(0,l.kt)("inlineCode",{parentName:"h3"},",")),(0,l.kt)("p",null,"\u5c06\u4e0d\u540c\u7684\u9009\u62e9\u5668\u7ec4\u5408\u5728\u4e00\u8d77\u7684\u65b9\u6cd5\uff0c\u5b83\u9009\u62e9\u6240\u6709\u80fd\u88ab\u5217\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u9009\u62e9\u5668\u9009\u4e2d\u7684\u8282\u70b9\u3002"),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6b64\u5904DOM\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"~")," ",(0,l.kt)("inlineCode",{parentName:"p"},">")," ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," \u4e09\u79cd\u5143\u7d20\u9009\u62e9\u5668\u7684\u6d4b\u8bd5\u7ed3\u6784\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="general-sibling-combinator flex">\n  <ul>\n    <li>li - 1</li>\n    <li>li - 2</li>\n    <div>div(inside) - 1</div>\n    <div>div(inside) - 2</div>\n  </ul>\n  <div>div(ouside) - 1</div>\n  <div>div(ouside) - 2</div>\n</div>\n')),(0,l.kt)("h3",{id:"\u540e\u4ee3\u5143\u7d20\u7ec4\u5408\u5668-\u7a7a\u683c"},"\u540e\u4ee3\u5143\u7d20\u7ec4\u5408\u5668 ",(0,l.kt)("inlineCode",{parentName:"h3"},"\u7a7a\u683c")),(0,l.kt)("p",null,"\u7ec4\u5408\u5668\u9009\u62e9\u524d\u4e00\u4e2a\u5143\u7d20\u7684\u540e\u4ee3\u8282\u70b9"),(0,l.kt)("h3",{id:"\u76f4\u63a5\u5b50\u5143\u7d20\u7ec4\u5408\u5668-"},"\u76f4\u63a5\u5b50\u5143\u7d20\u7ec4\u5408\u5668 ",(0,l.kt)("inlineCode",{parentName:"h3"},">")),(0,l.kt)("p",null,"\u9009\u62e9\u524d\u4e00\u4e2a\u5143\u7d20\u7684",(0,l.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u5b50\u4ee3"),"\u7684\u8282\u70b9",(0,l.kt)("strong",{parentName:"p"},"(\u4e0d\u4f1a\u518d\u5f80\u4e0b\u627e\u8282\u70b9\u4e86)"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"selector-&gt;.png",src:t(78877).Z})),(0,l.kt)("h3",{id:"\u4e00\u822c\u5b50\u4ee3\u7ec4\u5408\u5668-"},"\u4e00\u822c\u5b50\u4ee3\u7ec4\u5408\u5668 ",(0,l.kt)("inlineCode",{parentName:"h3"},"~")),(0,l.kt)("p",null,"\u540e\u4e00\u4e2a\u8282\u70b9\u5728\u524d\u4e00\u4e2a\u8282\u70b9\u540e\u9762\u7684\u4efb\u610f\u4f4d\u7f6e\uff0c\u5e76\u4e14\u5171\u4eab\u540c\u4e00\u4e2a\u7236\u8282"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"selector-~.png",src:t(84066).Z})),(0,l.kt)("h3",{id:"\u7d27\u90bb\u5143\u7d20\u7ec4\u5408\u5668-"},"\u7d27\u90bb\u5143\u7d20\u7ec4\u5408\u5668 ",(0,l.kt)("inlineCode",{parentName:"h3"},"+")),(0,l.kt)("p",null,"\u540e\u4e00\u4e2a\u5143\u7d20\u7d27\u8ddf\u5728\u524d\u4e00\u4e2a\u4e4b\u540e\uff0c\u5e76\u4e14\u5171\u4eab\u540c\u4e00\u4e2a\u7236\u8282\u70b9\u3002\n",(0,l.kt)("img",{alt:"selector-+.png",src:t(312).Z})),(0,l.kt)("h3",{id:"\u5217\u7ec4\u5408\u5668--"},"\u5217\u7ec4\u5408\u5668 ",(0,l.kt)("inlineCode",{parentName:"h3"},"|| ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u5c5e\u6027\uff0c\u6682\u65f6\u5ffd\u7565")),(0,l.kt)("h3",{id:"demo-1"},"Demo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* \u5206\u7ec4\u9009\u62e9\u5668 */\ndiv,\nspan {\n    margin: 0 10px;\n    font-size: 20px;\n    background: #ff0;\n    border: 1px solid #36f5c5;\n}\n\n/* \u540e\u4ee3\u9009\u62e9\u5668(\u7a7a\u683c) */\ndiv span {\n    margin: 0 10px;\n    font-size: 20px;\n    background: #ff0;\n    border: 1px solid #36f5c5;\n}\n\n/* \u76f4\u63a5\u5b50\u4ee3\u7ec4\u5408\u5668(>) */\nul > li {\n    margin: 0 10px;\n    font-size: 20px;\n    background: #ff0;\n    border: 1px solid #36f5c5;\n}\n\n/* \u4e00\u822c\u5b50\u4ee3\u7ec4\u5408\u5668(~) */\nli ~ div {\n    margin: 10px;\n    font-size: 20px;\n    background: rgb(161, 73, 0);\n    border: 1px solid #348d00;\n}\n\nul ~ div {\n    margin: 0 10px;\n    font-size: 20px;\n    background: rgb(0, 217, 255);\n    border: 1px solid #348d00;\n}\n\n/* \u7d27\u90bb\u5144\u5f1f\u7ec4\u5408\u5668(+) */\nli + div {\n    margin: 10px;\n    font-size: 20px;\n    background: rgb(161, 73, 0);\n    border: 1px solid #348d00;\n}\nul + div {\n    margin: 0 10px;\n    font-size: 20px;\n    background: rgb(0, 217, 255);\n    border: 1px solid #348d00;\n}\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63a5\u4e0b\u6765\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5c5e\u6027\u9009\u62e9\u5668")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"\u4f2a\u9009\u62e9\u5668"),"\uff0c\u53ea\u8bb2\u89e3\u6982\u5ff5\u548c\u7528\u6cd5\uff0c\u5173\u4e8e\u8fd9\u4e24\u79cd\u9009\u62e9\u5668\u7684\u5185\u7f6e\u9009\u62e9\u5668\u7b49\u77e5\u8bc6\u8bf7\u79fb\u6b65 ",(0,l.kt)("inlineCode",{parentName:"p"},"MDN")," ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors"},"\u5c5e\u6027\u9009\u62e9\u5668")," ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes"},"\u4f2a\u7c7b"),", ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements"},"\u4f2a\u5143\u7d20"))),(0,l.kt)("h2",{id:"\u5c5e\u6027\u9009\u62e9\u5668"},"\u5c5e\u6027\u9009\u62e9\u5668"),(0,l.kt)("h3",{id:"eatt"},"E","[att]"),(0,l.kt)("p",null,'\u5339\u914d\u6240\u6709\u5177\u6709 att \u5c5e\u6027\u7684 E \u5143\u7d20\uff0c\u4e0d\u8003\u8651\u5b83\u7684\u503c\u3002\uff08\u6ce8\u610f\uff1aE \u5728\u6b64\u5904\u53ef\u4ee5\u7701\u7565\uff0c\u6bd4\u5982"',"[cheacked]",'"\u3002\u4ee5\u4e0b\u540c\u3002\uff09'),(0,l.kt)("h3",{id:"eattval"},"E","[att=val]"),(0,l.kt)("p",null,'\u5339\u914d\u6240\u6709 att \u5c5e\u6027\u7b49\u4e8e"val"\u7684 E \u5143\u7d20'),(0,l.kt)("h3",{id:"eattval-1"},"E","[att~=val]"),(0,l.kt)("p",null,'\u5339\u914d\u6240\u6709 att \u5c5e\u6027\u5177\u6709\u591a\u4e2a\u7a7a\u683c\u5206\u9694\u7684\u503c\u3001\u5176\u4e2d\u4e00\u4e2a\u503c\u7b49\u4e8e"val"\u7684 E \u5143\u7d20'),(0,l.kt)("h3",{id:"eattval-2"},"E","[att|=val]"),(0,l.kt)("p",null,'\u5339\u914d\u6240\u6709 att \u5c5e\u6027\u5177\u6709\u591a\u4e2a\u8fde\u5b57\u53f7\u5206\u9694\uff08hyphen-separated\uff09\u7684\u503c\u3001\u5176\u4e2d\u4e00\u4e2a\u503c\u4ee5"val"\u5f00\u5934\u7684 E \u5143\u7d20\uff0c\u4e3b\u8981\u7528\u4e8e lang \u5c5e\u6027\uff0c\u6bd4\u5982"en"\u3001"en-us"\u3001"en-gb"\u7b49\u7b49'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"div[id^='attr2'] {\n    background: #ff0;\n}\n\ndiv[id$='end'] {\n    background: #ff0;\n}\n\ndiv[id*='attr'] {\n    border: 1px solid #348d00;\n    padding: 10px;\n}\n")),(0,l.kt)("h2",{id:"\u4f2a\u9009\u62e9\u5668"},"\u4f2a\u9009\u62e9\u5668"),(0,l.kt)("h3",{id:"\u4f2a\u7c7b-"},"\u4f2a\u7c7b ",(0,l.kt)("inlineCode",{parentName:"h3"},":")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},":")," \u4f2a\u9009\u62e9\u5668\u652f\u6301\u6309\u7167\u672a\u88ab\u5305\u542b\u5728\u6587\u6863\u6811\u4e2d\u7684\u72b6\u6001\u4fe1\u606f\u6765\u9009\u62e9\u5143\u7d20\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"span:nth-child(3) {\n    color: #f00;\n}\n\nspan:hover {\n    cursor: pointer;\n    color: rgb(11, 137, 211);\n}\n\nspan::before {\n    content: '\u963f\u8fbe: ';\n}\n\np::first-line {\n    color: rgb(72, 88, 0);\n}\n\nspan::after {\n    content: 'I Do';\n}\n")),(0,l.kt)("h3",{id:"\u4f2a\u5143\u7d20-"},"\u4f2a\u5143\u7d20 ",(0,l.kt)("inlineCode",{parentName:"h3"},"::")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"::")," \u4f2a\u9009\u62e9\u5668\u7528\u4e8e\u8868\u793a\u65e0\u6cd5\u7528 HTML \u8bed\u4e49\u8868\u8fbe\u7684\u5b9e\u4f53\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"span::before {\n    content: '\u963f\u8fbe: ';\n}\n\np::first-line {\n    color: rgb(72, 88, 0);\n}\n\nspan:nth-child(3) {\n    color: #f00;\n}\n\nspan::after {\n    content: 'I Do';\n}\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors"},"MDN CSS Selectors")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.456bereastreet.com/archive/200509/css_21_selectors_part_1/"},"CSS 2.1 selectors, Part 1")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2009/03/css_selectors.html"},"CSS \u9009\u62e9\u5668\u7b14\u8bb0")))}u.isMDXComponent=!0},312:function(e,n,t){n.Z=t.p+"assets/images/selector-+-2d454f9586265c8e8ce9a714f0e3c336.png"},78877:function(e,n,t){n.Z=t.p+"assets/images/selector->-915313a7ae0876629576ee6135f4ed09.png"},84066:function(e,n,t){n.Z=t.p+"assets/images/selector-~-4170bf25e9ce00ea40396a62c018275d.png"}}]);