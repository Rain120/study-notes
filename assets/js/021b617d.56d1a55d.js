"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[118],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15185:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),p=["components"],i={},c="\u539f\u578b\u94fe",l={unversionedId:"javascript/key-concept/prototype-chain",id:"javascript/key-concept/prototype-chain",title:"\u539f\u578b\u94fe",description:"\u539f\u578b\u94fe",source:"@site/fe/javascript/key-concept/prototype-chain.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/prototype-chain",permalink:"/study-notes/fe/javascript/key-concept/prototype-chain",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646375883,formattedLastUpdatedAt:"Mar 4, 2022",frontMatter:{},sidebar:"sidebar",previous:{title:"null \u548c undefined \u7684\u533a\u522b",permalink:"/study-notes/fe/javascript/key-concept/null-vs-undefined"},next:{title:"\u8def\u7531",permalink:"/study-notes/fe/javascript/key-concept/router"}},s={},u=[{value:"\u539f\u578b\u94fe",id:"\u539f\u578b\u94fe-1",level:2},{value:"\u539f\u578b\u94fe\u67e5\u627e\u95ee\u9898",id:"\u539f\u578b\u94fe\u67e5\u627e\u95ee\u9898",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],f={toc:u};function d(e){var t=e.components,i=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u539f\u578b\u94fe"},"\u539f\u578b\u94fe"),(0,a.kt)("h2",{id:"\u539f\u578b\u94fe-1"},"\u539f\u578b\u94fe"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u53ea\u6709\u4e00\u79cd\u7ed3\u6784\uff1a\u5bf9\u8c61\u3002\u6bcf\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\uff08 object \uff09\u90fd\u6709\u4e00\u4e2a\u79c1\u6709\u5c5e\u6027\uff08\u79f0\u4e4b\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"proto")," \uff09\u6307\u5411\u5b83\u7684\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\uff08",(0,a.kt)("strong",{parentName:"p"},"prototype")," \uff09\u3002\u8be5\u539f\u578b\u5bf9\u8c61\u4e5f\u6709\u4e00\u4e2a\u81ea\u5df1\u7684\u539f\u578b\u5bf9\u8c61( ",(0,a.kt)("strong",{parentName:"p"},"proto")," ) \uff0c\u5c42\u5c42\u5411\u4e0a\u76f4\u5230\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u3002\u6839\u636e\u5b9a\u4e49\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \u6ca1\u6709\u539f\u578b\uff0c\u5e76\u4f5c\u4e3a\u8fd9\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u539f\u578b\u94fe"),"\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u73af\u8282\u3002"),(0,a.kt)("p",null,"\u51e0\u4e4e\u6240\u6709 JavaScript \u4e2d\u7684\u5bf9\u8c61\u90fd\u662f\u4f4d\u4e8e\u539f\u578b\u94fe\u9876\u7aef\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object"},(0,a.kt)("inlineCode",{parentName:"a"},"Object"))," \u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("p",null,"\u5b83\u5305\u62ec\u56db\u4e2a\u90e8\u5206\uff1a\u539f\u578b\u3001\u6784\u9020\u51fd\u6570\u3001\u5b9e\u4f8b\u3001\u539f\u578b\u94fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"prototype-chain.jpg",src:n(87735).Z,width:"1065",height:"415"})),(0,a.kt)("p",null,"\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u6784\u9020\u51fd\u6570 Person, \u5b9e\u4f8b person \u5173\u7cfb\u5982\u4e0b\n\nperson = new Person()\n\nperson.__proto__ === Person.prototype \n\nPerson.prototype.contructor === Person\n\nPerson.prototype.__proto__ === Object.prototype\n\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"prototype-chain-all.jpg",src:n(99192).Z,width:"590",height:"525"})),(0,a.kt)("h2",{id:"\u539f\u578b\u94fe\u67e5\u627e\u95ee\u9898"},"\u539f\u578b\u94fe\u67e5\u627e\u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Person() {};\nPerson.prototype.name = 'Rainy';\n\nconst person = new Person();\nperson.__proto__.name = 'Rain120';\n\nconsole.log(Person.prototype.name); // Rain120\nconsole.log(person.name); // Rain120\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6cbf\u7740\u539f\u5f62\u94fe\u67e5\u627e")," \u5176\u5b9e\u4e0d\u662f\u6cbf\u7740 ",(0,a.kt)("inlineCode",{parentName:"p"},"prototype")," \u5c5e\u6027\u67e5\u627e\uff0c \u800c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u662f\u4e2a\u51fd\u6570\uff0c\u53ea\u80fd\u7b97",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),"\u7684\u5b9e\u4f8b, \u53ea\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u7684\u5b9e\u4f8b\u624d\u80fd\u8bbf\u95ee\u5f97\u5230"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/51820518/answer/127655677"},"javascript \u7ed9\u51fd\u6570\u52a0\u4e86\u539f\u578b\u5c5e\u6027\u540e\uff0c\u4e3a\u4ec0\u4e48\u7528\u51fd\u6570\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee\u8fd9\u4e2a\u5c5e\u6027\uff1f\u4ee3\u7801\u5982\u4e0b\uff1a - Jim Liu\u7684\u56de\u7b54 - \u77e5\u4e4e")),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"},"MDN - \u7ee7\u627f\u4e0e\u539f\u578b\u94fe")))}d.isMDXComponent=!0},99192:function(e,t,n){t.Z=n.p+"assets/images/prototype-chain-all-46bed03fd0e11fe004c6fb7da68b8616.jpg"},87735:function(e,t,n){t.Z=n.p+"assets/images/prototype-chain-5f0009495a458ab0365493b16c47956c.jpg"}}]);