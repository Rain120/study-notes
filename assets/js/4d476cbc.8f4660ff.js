"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6949],{49613:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return c}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),o=m(n),c=r,g=o["".concat(d,".").concat(c)]||o[c]||N[c]||l;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},50996:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return N}});var a=n(62848),r=n(79213),l=(n(59496),n(49613)),i=["components"],p={sidebar_position:1},d="\u5e38\u7528\u57fa\u7840\u77e5\u8bc6",m={unversionedId:"javascript/regular-expression/regular-expression",id:"javascript/regular-expression/regular-expression",title:"\u5e38\u7528\u57fa\u7840\u77e5\u8bc6",description:"\u5c0f\u767d\u6b63\u5219\u8868\u8fbe\u5f0f\u5165\u95e8\u5b66\u4e60\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f30\u5206\u949f\u5165\u95e8\u6559\u7a0b",source:"@site/fe/javascript/regular-expression/regular-expression.md",sourceDirName:"javascript/regular-expression",slug:"/javascript/regular-expression/",permalink:"/study-notes/fe/javascript/regular-expression/",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638522136,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"static",permalink:"/study-notes/fe/javascript/es-study/static"},next:{title:"\u65e5\u5e38\u4f7f\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/study-notes/fe/javascript/regular-expression/common-reg-exps"}},k={},N=[{value:"1. \u5143\u5b57\u7b26",id:"1-\u5143\u5b57\u7b26",level:2},{value:"2. \u53c2\u6570",id:"2-\u53c2\u6570",level:2},{value:'<span id="func">3. \u65b9\u6cd5</span>',id:"3-\u65b9\u6cd5",level:2},{value:"4. <code>search(pattern)</code>",id:"4-searchpattern",level:3},{value:"5. <code>replace(regexp|substr, newSubStr|function)</code>",id:"5-replaceregexpsubstr-newsubstrfunction",level:3},{value:"6. <code>split(pattern\uff0c limit\uff1f)</code>",id:"6-splitpattern-limit",level:3}],o={toc:N};function c(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5e38\u7528\u57fa\u7840\u77e5\u8bc6"},"\u5e38\u7528\u57fa\u7840\u77e5\u8bc6"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5c0f\u767d\u6b63\u5219\u8868\u8fbe\u5f0f\u5165\u95e8\u5b66\u4e60\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://www.runoob.com/w3cnote/regular-expression-30-minutes-tutorial.html#alternative"},"\u6b63\u5219\u8868\u8fbe\u5f0f30\u5206\u949f\u5165\u95e8\u6559\u7a0b")),(0,l.kt)("p",{parentName:"div"},"\u6b63\u5219\u8868\u8fbe\u5f0fRegular Expression\u662f\u4e00\u79cd\u6587\u672c\u6a21\u5f0f\u3002\u5b83\u63cf\u8ff0\u4e86\u4e00\u79cd\u5b57\u7b26\u4e32\u5339\u914d\u7684\u6a21\u5f0fpattern\uff0c\u53ef\u4ee5\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u4e32\u662f\u5426\u542b\u6709\u67d0\u79cd\u5b50\u4e32\u3001\u5c06\u5339\u914d\u7684\u5b50\u4e32\u66ff\u6362\u6216\u8005\u4ece\u67d0\u4e2a\u4e32\u4e2d\u53d6\u51fa\u7b26\u5408\u67d0\u4e2a\u6761\u4ef6\u7684\u5b50\u4e32\u7b49\u3002\n\u6211\u4eec\u5c06\u6b63\u5219\u8868\u8fbe\u5f0f\u5206\u4e3a\u51e0\u4e2a\u90e8\u5206\u8bb0\u4e0b\u7b14\u8bb0\uff0c\u4fbf\u4e8e\u7406\u89e3\u4e0e\u4f7f\u7528\u3002"))),(0,l.kt)("h2",{id:"1-\u5143\u5b57\u7b26"},"1. \u5143\u5b57\u7b26"),(0,l.kt)("p",null,"\u6211\u4eec\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"MDN-Regular_Expression")," \u4e0a\u5f97\u77e5\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u4f1a\u6709\u4e00\u4e9b\u7279\u6b8a\u5b57\u7b26\uff0c\u4e5f\u53eb\u4f5c\u5143\u5b57\u7b26\u3002\u5982\u4e0b\u8868\u793a\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u7b26"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u82f1\u8bed\u8bb0\u5fc6\u6216\u8005\u4e2a\u4eba\u8bb0\u5fc6\u65b9\u6cd5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u5355\u8bcd\u8fb9\u754c\uff0c\u4e5f\u5c31\u662f\u6307\u5355\u8bcd\u548c\u7a7a\u683c\u95f4\u7684\u4f4d\u7f6e\u3002\u4e00\u4e2a\u5339\u914d\u7684\u8bcd\u7684\u8fb9\u754c\u7684\u5185\u5bb9\u7684\u957f\u5ea6\u662f0\u3002\uff08\u4e0d\u8981\u548c","[\\b]","\u6df7\u6dc6\u4e86\uff09"),(0,l.kt)("td",{parentName:"tr",align:"center"},"blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\B"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u975e\u5355\u8bcd\u8fb9\u754c\u3002\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u5f00\u59cb\u548c\u7ed3\u5c3e\u90fd\u88ab\u8ba4\u4e3a\u4e0d\u662f\u201c\u5b57\u201d\u5b57\u7b26\uff0c\u6216\u8005\u7a7a\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Blank\uff0cb\u4e0eB\u76f8\u53cd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u6570\u5b57\u5b57\u7b26\u3002\u7b49\u4ef7\u4e8e ","[0-9]"),(0,l.kt)("td",{parentName:"tr",align:"center"},"digit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\D"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u975e\u6570\u5b57\u5b57\u7b26\u3002\u7b49\u4ef7\u4e8e ","[\\^0-9]"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Digit\uff0cd\u4e0eD\u76f8\u53cd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\s"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4efb\u4f55\u7a7a\u767d\u5b57\u7b26\uff0c\u5305\u62ec\u7a7a\u683c\u3001\u5236\u8868\u7b26\u3001\u6362\u9875\u7b26\u7b49\u7b49\u3002\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"[ \\f\\n\\r\\t\\v]")),(0,l.kt)("td",{parentName:"tr",align:"center"},"space")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\S"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4efb\u4f55\u975e\u7a7a\u767d\u5b57\u7b26\u3002\u7b49\u4ef7\u4e8e",(0,l.kt)("inlineCode",{parentName:"td"},"[^ \\f\\n\\r\\t\\v]")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Space, s\u4e0eS\u76f8\u53cd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\w"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u3002\u7b49\u4ef7\u4e8e'","[","A-Za-z0-9_]'"),(0,l.kt)("td",{parentName:"tr",align:"center"},"word")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\W"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u975e\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u3002\u7b49\u4ef7\u4e8e '","[","^A-Za-z0-9_]'"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Word\uff0cw\u4e0eW\u76f8\u53cd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d\u7279\u6b8a\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\t"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u5236\u8868\u7b26 (\\x09)\u3002"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\n"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u6362\u884c\u7b26 (\\x09A)\u3002"),(0,l.kt)("td",{parentName:"tr",align:"center"},"New line")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/?title=%5Cf&redirect=no"},"\\f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u6362\u9875\u7b26 (\\x09C)\u3002"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Page break#Form feed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\v"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u5782\u76f4\u5236\u8868\u7b26\u3002\u7b49\u4ef7\u4e8e \\x0b \u548c \\cK\u3002"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Vertical table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\r"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u4e00\u4e2a\u56de\u8f66\u7b26 (\\x09D)\u3002"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Return")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\\ "),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u4e0b\u4e00\u4e2a\u5b57\u7b26\u6807\u8bb0\u4e3a\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26\u3001\u6216\u4e00\u4e2a\u539f\u4e49\u5b57\u7b26\u3001\u6216\u4e00\u4e2a \u5411\u540e\u5f15\u7528\u3001\u6216\u4e00\u4e2a\u516b\u8fdb\u5236\u8f6c\u4e49\u7b26\u3002"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u53cd\u659c\u6760\u4e5f\u53ef\u4ee5\u5c06\u5176\u540e\u7684\u7279\u6b8a\u5b57\u7b26\uff0c\u8f6c\u4e49\u4e3a\u5b57\u9762\u91cf,\u5f53\u9700\u8981\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"td"},"\\"),"\u65f6\u4e5f\u9700\u8981\u5c06\u5176\u8f6c\u4e49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"x ","|"," y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d x \u6216 y"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6216\u8fd0\u7b97")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"^"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u8f93\u5165\u5b57\u7b26\u4e32\u7684\u5f00\u59cb\u4f4d\u7f6e\u3002\u5982\u679c\u8bbe\u7f6e\u4e86 RegExp \u5bf9\u8c61\u7684 Multiline \u5c5e\u6027\uff0c^ \u4e5f\u5339\u914d '\\n' \u6216 '\\r' \u4e4b\u540e\u7684\u4f4d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"$"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u8f93\u5165\u5b57\u7b26\u4e32\u7684\u7ed3\u675f\u4f4d\u7f6e\u3002\u5982\u679c\u8bbe\u7f6e\u4e86RegExp \u5bf9\u8c61\u7684 Multiline \u5c5e\u6027\uff0c$ \u4e5f\u5339\u914d '\\n' \u6216 '\\r' \u4e4b\u524d\u7684\u4f4d\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u7ed3\u675f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d\u5185\u5bb9\u6b21\u6570"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u524d\u9762\u7684\u5b50\u8868\u8fbe\u5f0f\u96f6\u6b21\u6216\u591a\u6b21"),(0,l.kt)("td",{parentName:"tr",align:"center"},"`{0, n}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u524d\u9762\u7684\u5b50\u8868\u8fbe\u5f0f\u4e00\u6b21\u6216\u591a\u6b21"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{1, n}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u524d\u9762\u7684\u5b50\u8868\u8fbe\u5f0f\u96f6\u6b21\u6216\u4e00\u6b21"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{0, 1}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d\u5206\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"(pattern)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"td"},"pattern")," \u5e76\u83b7\u53d6\u8fd9\u4e00\u5339\u914d\u3002\u6240\u83b7\u53d6\u7684\u5339\u914d\u53ef\u4ee5\u4ece\u4ea7\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"Matches")," \u96c6\u5408\u5f97\u5230\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"JS"),"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"$0\u2026$9")," \u5c5e\u6027\u83b7\u53d6\u5339\u914d\u7ed3\u679c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d\u62ec\u53f7\u5185\u90e8\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"[xy]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u96c6\u5408,\u5339\u914d\u6240\u5305\u542b\u7684\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d[]\u5185\u90e8\u7684\u5185\u5bb9,\u5373",(0,l.kt)("inlineCode",{parentName:"td"},"x")," ",(0,l.kt)("inlineCode",{parentName:"td"},"y"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("sup",{parentName:"td",id:"fnref-xy"},(0,l.kt)("a",{parentName:"sup",href:"#fn-xy",className:"footnote-ref"},"xy"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u96c6\u5408,\u5339\u914d\u6240\u5305\u542b\u7684\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d[]\u5185\u90e8\u7684\u5185\u5bb9,\u5373\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"x")," ",(0,l.kt)("inlineCode",{parentName:"td"},"y"),"\u7684\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"[a-z]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u96c6\u5408,\u5339\u914d\u6240\u5305\u542b\u7684\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d[]\u5185\u90e8\u7684\u5185\u5bb9,\u5373",(0,l.kt)("inlineCode",{parentName:"td"},"a-z"),"\u4e4b\u95f4\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("sup",{parentName:"td",id:"fnref-a-z"},(0,l.kt)("a",{parentName:"sup",href:"#fn-a-z",className:"footnote-ref"},"a-z"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d1f\u503c\u5b57\u7b26\u8303\u56f4\u3002\u5339\u914d\u4efb\u4f55\u4e0d\u5728\u6307\u5b9a\u8303\u56f4\u5185\u7684\u4efb\u610f\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d[]\u5185\u90e8\u7684\u5185\u5bb9,\u5373\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"a-z"),"\u4e4b\u95f4\u4efb\u610f\u4e00\u4e2a\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{n}"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"n")," \u662f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u3002\u5339\u914d\u786e\u5b9a\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," \u6b21"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d\u8fde\u7eed\u51fa\u73b0",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u6b21\u7684\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{n,}"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"n")," \u662f\u4e00\u4e2a\u975e\u8d1f\u6574\u6570\u3002\u81f3\u5c11\u5339\u914d",(0,l.kt)("inlineCode",{parentName:"td"},"n")," \u6b21"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d\u81f3\u5c11\u51fa\u73b0",(0,l.kt)("inlineCode",{parentName:"td"},"n"),"\u6b21\u7684\u5b57\u7b26")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{n,m}"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"m")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," \u5747\u4e3a\u975e\u8d1f\u6574\u6570\uff0c\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"td"},"n")," <= ",(0,l.kt)("inlineCode",{parentName:"td"},"m"),"\u3002\u6700\u5c11\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," \u6b21\u4e14\u6700\u591a\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"td"},"m")," \u6b21"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5339\u914d\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"td"},"[n, m]"),"\u6b21\u5b57\u7b26")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7\uff1a\u6b63\u5219\u8868\u8fbe\u5f0f\u4ece\u5de6\u5230\u53f3\u8fdb\u884c\u8ba1\u7b97\uff0c\u5e76\u9075\u5faa\u4f18\u5148\u7ea7\u987a\u5e8f")),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u8bb2\u4e0a\u8ff0\u5143\u5b57\u7b26\u4e00\u4e2a\u4e00\u4e2a\u7684\u6d4b\u8bd5\u3002"),(0,l.kt)("span",{id:"test"},"\u4e0d\u8fc7"),"\uff0c\u5728\u6d4b\u8bd5\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u4e86\u89e3\u4e24\u4e2a[\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u65b9\u6cd5](#func)\uff0c[test()](#test) \u548c [exec()](#exec)\u3002",(0,l.kt)("p",null,"\u5143\u5b57\u7b26",(0,l.kt)("inlineCode",{parentName:"p"},"\\b"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"\\B")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test \b B",src:n(46725).Z,width:"821",height:"206"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test \b B",src:n(39316).Z,width:"782",height:"219"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\b",src:n(39057).Z,width:"933",height:"669"}),"\n\u4ece\u4e0a\u9762\u7ed3\u679c\u5f97\u77e5\uff0cb\u5339\u914d\u7684\u662f\u5355\u8bcd\u7684\u8fb9\u754c\uff0cB\u5339\u914d\u7684\u662f\u975e\u5355\u8bcd\u7684\u8fb9\u754c"),(0,l.kt)("p",null,"\u5143\u5b57\u7b26",(0,l.kt)("inlineCode",{parentName:"p"},"\\d"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"\\D"),"\n",(0,l.kt)("img",{alt:"test d D",src:n(65064).Z,width:"767",height:"228"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test d D 1",src:n(84576).Z,width:"930",height:"359"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test d D",src:n(26745).Z,width:"794",height:"205"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6119).Z,width:"914",height:"327"}),"\n\u5143\u5b57\u7b26",(0,l.kt)("inlineCode",{parentName:"p"},"\\s"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"\\S")),(0,l.kt)("p",null,"\u5143\u5b57\u7b26",(0,l.kt)("inlineCode",{parentName:"p"},"\\w"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"\\W")),(0,l.kt)("h2",{id:"2-\u53c2\u6570"},"2. \u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u53c2\u6570\u5217\u8868"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u82f1\u8bed\u8bb0\u5fc6\u6216\u8005\u4e2a\u4eba\u8bb0\u5fc6\u65b9\u6cd5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"i"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u5927\u5c0f\u5199"),(0,l.kt)("td",{parentName:"tr",align:"center"},"ignoreCase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"g"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5168\u6587\u67e5\u627e\u51fa\u73b0\u7684\u6240\u6709\u5339\u914d\u5b57\u7b26"),(0,l.kt)("td",{parentName:"tr",align:"center"},"global")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"\u591a\u884c\u67e5\u627e"),(0,l.kt)("td",{parentName:"tr",align:"center"},"multiline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u201c\u7c98\u6027\u201d\u641c\u7d22,\u5339\u914d\u4ece\u76ee\u6807\u5b57\u7b26\u4e32\u7684\u5f53\u524d\u4f4d\u7f6e\u5f00\u59cb\uff0c\u53ef\u4ee5\u4f7f\u7528y\u6807\u5fd7"),(0,l.kt)("td",{parentName:"tr",align:"center"},"sticky")))),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u4e0a\u9762\u8fd9\u51e0\u79cd\u5339\u914d\u89c4\u5219\u53ef\u4ee5\u7ed3\u5408\u4f7f\u7528\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"/ig"),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"/gi"),"\u90fd\u662f\u5168\u6587\u67e5\u627e\u3001\u5ffd\u7565\u5927\u5c0f\u5199"),(0,l.kt)("h2",{id:"3-\u65b9\u6cd5"},(0,l.kt)("span",{id:"func"},"3. \u65b9\u6cd5")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5339\u914d\u8fd4\u56de\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u672a\u5339\u914d\u8fd4\u56de\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"#test"},"test()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u662f\u5426\u5339\u914d\u7684RegExp\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"true"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"#exec"},"exec()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u67e5\u627e\u5339\u914d\u7684RegExp\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"#match"},"match(pattern)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u67e5\u627e\u5339\u914d\u7684String\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"#search"},"search(pattern)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4b\u8bd5\u5339\u914d\u7684String\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8fd4\u56de\u5339\u914d\u5230\u7684\u4f4d\u7f6e\u7d22\u5f15"),(0,l.kt)("td",{parentName:"tr",align:"center"},"-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"#replace"},"replace(pattern, obj ","|","|"," callback)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u67e5\u627e\u5339\u914d\u7684String\u65b9\u6cd5\uff0c\u5e76\u4e14\u4f7f\u7528\u66ff\u6362\u5b57\u7b26\u4e32\u66ff\u6362\u6389\u5339\u914d\u5230\u7684\u5b50\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"#split"},"split")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u6216\u8005\u4e00\u4e2a\u56fa\u5b9a\u5b57\u7b26\u4e32\u5206\u9694\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5206\u9694\u540e\u7684\u5b50\u5b57\u7b26\u4e32\u5b58\u50a8\u5230\u6570\u7ec4\u4e2d\u7684String\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:"center"},"null")))),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u8bb2\u4e0a\u8ff0\u65b9\u6cd5\u4e00\u4e2a\u4e00\u4e2a\u7684\u6d4b\u8bd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("h3",{parentName:"li",id:"teststr"},(0,l.kt)("inlineCode",{parentName:"h3"},"test(str)")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"param"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"str")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u5339\u914d\u6210\u529f\uff1a")," \u5982\u679c\u6b63\u5219\u8868\u8fbe\u5f0f\u4e0e\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u5339\u914d \uff0c\u8fd4\u56detrue"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u5339\u914d\u5931\u8d25\uff1a")," false"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test test",src:n(29388).Z,width:"927",height:"210"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("h3",{parentName:"li",id:"execstr"},(0,l.kt)("inlineCode",{parentName:"h3"},"exec(str)")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"param"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"str")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result"),":"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u5339\u914d\u6210\u529f\uff1a"),"exec() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5e76\u66f4\u65b0\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\u7684\u5c5e\u6027\u3002\u8fd4\u56de\u7684\u6570\u7ec4\u5c06\u5b8c\u5168\u5339\u914d\u6210\u529f\u7684\u6587\u672c\u4f5c\u4e3a\u7b2c\u4e00\u9879\uff0c\u5c06\u6b63\u5219\u62ec\u53f7\u91cc\u5339\u914d\u6210\u529f\u7684\u4f5c\u4e3a\u6570\u7ec4\u586b\u5145\u5230\u540e\u9762\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u5339\u914d\u5931\u8d25\uff1a")," \u5982\u679c\u5339\u914d\u5931\u8d25\uff0cexec() \u65b9\u6cd5\u8fd4\u56de null\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5bf9\u8c61"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5c5e\u6027/\u7d22\u5f15"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"result"),(0,l.kt)("td",{parentName:"tr",align:"center"},"[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5339\u914d\u7684\u5168\u90e8\u5b57\u7b26\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"[1]",", ...","[n ]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"input")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"regexp"),(0,l.kt)("td",{parentName:"tr",align:"center"},"lastIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u4e00\u6b21\u5339\u914d\u5f00\u59cb\u7684\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"ignoreCase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"global")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"multiline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:null},"source")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"test exec",src:n(9395).Z,width:"930",height:"219"})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("h3",{parentName:"li",id:"matchpattern"},(0,l.kt)("inlineCode",{parentName:"h3"},"match(pattern)")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"param"),": \u4f20\u5165\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61, \u5982\u679c\u4f20\u5165\u4e00\u4e2a\u975e\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\uff0c\u5219\u4f1a\u9690\u5f0f\u5730\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"new RegExp(obj)")," \u5c06\u5176\u8f6c\u6362\u4e3a\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp"},(0,l.kt)("inlineCode",{parentName:"a"},"RegExp"))," \u3002\u5982\u679c\u4f60\u6ca1\u6709\u7ed9\u51fa\u4efb\u4f55\u53c2\u6570\u5e76\u76f4\u63a5\u4f7f\u7528match() \u65b9\u6cd5 \uff0c\u4f60\u5c06\u4f1a\u5f97\u5230\u4e00 \u4e2a\u5305\u542b\u7a7a\u5b57\u7b26\u4e32\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array"},(0,l.kt)("inlineCode",{parentName:"a"},"Array"))," \uff1a",'[""]'," \u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"return"),":  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"g"),"\u6807\u5fd7\uff0c\u5219\u5c06\u8fd4\u56de\u4e0e\u5b8c\u6574\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u6240\u6709\u7ed3\u679c\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"Array"),"\uff09\uff0c\u4f46\u4e0d\u4f1a\u8fd4\u56de\u6355\u83b7\u7ec4\uff0c\u6216\u8005\u672a\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"g"),"\u6807\u5fd7\uff0c\u5219\u4ec5\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5b8c\u6574\u5339\u914d\u53ca\u5176\u76f8\u5173\u7684\u6355\u83b7\u7ec4\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"Array"),"\uff09\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u7684\u9879\u76ee\u5c06\u5177\u6709\u5982\u4e0b\u6240\u8ff0\u7684\u5176\u4ed6\u5c5e\u6027\uff0c\u6216\u8005\u672a\u5339\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"null"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5339\u914d\u6210\u529f"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"groups"),": \u4e00\u4e2a\u6355\u83b7\u7ec4\u6570\u7ec4 \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff08\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u547d\u540d\u6355\u83b7\u7ec4\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index"),": \u5339\u914d\u7684\u7ed3\u679c\u7684\u5f00\u59cb\u4f4d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"input"),": \u641c\u7d22\u7684\u5b57\u7b26\u4e32\u3002")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"match",src:n(40084).Z,width:"642",height:"232"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"match[0]"),": \u6574\u6761\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7ed3\u679c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"match[1]"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"(\\w+)"),"\u5339\u914d\u7ed3\u679c"),(0,l.kt)("h3",{id:"4-searchpattern"},"4. ",(0,l.kt)("inlineCode",{parentName:"h3"},"search(pattern)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"param"),": \u4f20\u5165\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\uff0c \u5982\u679c\u4f20\u5165\u4e00\u4e2a\u975e\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\uff0c\u5219\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"new RegExp(obj)")," \u9690\u5f0f\u5730\u5c06\u5176\u8f6c\u6362\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"return"),": \u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"},"search()")," \u8fd4\u56de\u6b63\u5219\u8868\u8fbe\u5f0f\u5728\u5b57\u7b26\u4e32\u4e2d\u9996\u6b21\u5339\u914d\u9879\u7684\u7d22\u5f15\u3002\u5426\u5219\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"-1"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"search",src:n(14365).Z,width:"644",height:"133"})),(0,l.kt)("p",null,"\u5f88\u7c7b\u4f3c",(0,l.kt)("inlineCode",{parentName:"p"},"indexof"),"\u8fd9\u4e2a\u65b9\u6cd5"),(0,l.kt)("h3",{id:"5-replaceregexpsubstr-newsubstrfunction"},"5. ",(0,l.kt)("inlineCode",{parentName:"h3"},"replace(regexp|substr, newSubStr|function)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"param"),": "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f",(0,l.kt)("inlineCode",{parentName:"li"},"or"),"\u5b57\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u6216\u8005\u51fd\u6570")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"return"),": \u4e00\u4e2a\u90e8\u5206\u6216\u5168\u90e8\u5339\u914d\u7531\u66ff\u4ee3\u6a21\u5f0f\u6240\u53d6\u4ee3\u7684\u65b0\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"replace",src:n(18557).Z,width:"644",height:"397"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4ee3\u8868\u7684\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$$")),(0,l.kt)("td",{parentName:"tr",align:null},'\u63d2\u5165\u4e00\u4e2a "$"\u3002')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$&")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u5165\u5339\u914d\u7684\u5b50\u4e32\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"`$``"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u5165\u5f53\u524d\u5339\u914d\u7684\u5b50\u4e32\u5de6\u8fb9\u7684\u5185\u5bb9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$'")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u5165\u5f53\u524d\u5339\u914d\u7684\u5b50\u4e32\u53f3\u8fb9\u7684\u5185\u5bb9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5047\u5982\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/RegExp"},(0,l.kt)("inlineCode",{parentName:"a"},"RegExp")),"\u5bf9\u8c61\uff0c\u5e76\u4e14 n \u662f\u4e2a\u5c0f\u4e8e100\u7684\u975e\u8d1f\u6574\u6570\uff0c\u90a3\u4e48\u63d2\u5165\u7b2c n \u4e2a\u62ec\u53f7\u5339\u914d\u7684\u5b57\u7b26\u4e32\u3002\u63d0\u793a\uff1a\u7d22\u5f15\u662f\u4ece1\u5f00\u59cb")))),(0,l.kt)("h3",{id:"6-splitpattern-limit"},"6. ",(0,l.kt)("inlineCode",{parentName:"h3"},"split(pattern\uff0c limit\uff1f)")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"param"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pattern"),": \u6307\u5b9a\u8868\u793a\u6bcf\u4e2a\u62c6\u5206\u5e94\u53d1\u751f\u7684\u70b9\u7684\u5b57\u7b26\u4e32, \u53ef\u4ee5\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limit"),": \u4e00\u4e2a\u6574\u6570\uff0c\u9650\u5b9a\u8fd4\u56de\u7684\u5206\u5272\u7247\u6bb5\u6570\u91cf\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"return"),": \u8fd4\u56de\u6e90\u5b57\u7b26\u4e32\u4ee5\u5206\u9694\u7b26\u51fa\u73b0\u4f4d\u7f6e\u5206\u9694\u800c\u6210\u7684\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Array")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"split",src:n(58955).Z,width:"649",height:"145"})))}c.isMDXComponent=!0},46725:function(t,e,n){e.Z=n.p+"assets/images/1-bcf83d072934fc129811f44b588fb703.png"},39316:function(t,e,n){e.Z=n.p+"assets/images/2-b4399e248c5bdf5e8ce9705b723cea62.png"},39057:function(t,e,n){e.Z=n.p+"assets/images/3-1463037d82d579da677da8dc5a43ab4e.png"},65064:function(t,e,n){e.Z=n.p+"assets/images/4-bc647eb1f758768e5cace87739e33f5e.png"},84576:function(t,e,n){e.Z=n.p+"assets/images/5-5dc2ba849f14f1680cf4579cb548be23.png"},26745:function(t,e,n){e.Z=n.p+"assets/images/6-d9e0be7964685df38a4ceab96c128df3.png"},6119:function(t,e,n){e.Z=n.p+"assets/images/7-8d7ae5558f724b4d67de4162913a969a.png"},29388:function(t,e,n){e.Z=n.p+"assets/images/8-8d924f01b41a779aa75311e15e92411a.png"},9395:function(t,e,n){e.Z=n.p+"assets/images/9-d334cec763470b5e763d7954516a0498.png"},40084:function(t,e,n){e.Z=n.p+"assets/images/match-d5afb0dfc8c5d562abfd85f0ce0f406d.png"},18557:function(t,e,n){e.Z=n.p+"assets/images/replace-8dbc53fd7cfcb0a1016b22963b287f6d.png"},14365:function(t,e,n){e.Z=n.p+"assets/images/search-e1e87e40071c34e319b2c8b96776e662.png"},58955:function(t,e,n){e.Z=n.p+"assets/images/split-23aff398a7c4d04a92e51e11cfefac8d.png"}}]);