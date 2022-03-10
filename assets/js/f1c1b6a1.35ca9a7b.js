"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6707],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return y}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(t),y=a,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||l;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87847:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return d}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],p={},c="extends \u7ee7\u627f",i={unversionedId:"javascript/key-concept/extends",id:"javascript/key-concept/extends",title:"extends \u7ee7\u627f",description:"\u501f\u52a9\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u7ee7\u627f",source:"@site/fe/javascript/key-concept/extends.md",sourceDirName:"javascript/key-concept",slug:"/javascript/key-concept/extends",permalink:"/study-notes/fe/javascript/key-concept/extends",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646902378,formattedLastUpdatedAt:"3/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u6267\u884c\u4e0a\u4e0b\u6587",permalink:"/study-notes/fe/javascript/key-concept/execution-context"},next:{title:"\u5783\u573e\u56de\u6536",permalink:"/study-notes/fe/javascript/key-concept/garbage-collection"}},s=[{value:"\u501f\u52a9\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u7ee7\u627f",id:"\u501f\u52a9\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u7ee7\u627f",children:[],level:2},{value:"\u501f\u52a9\u539f\u578b\u94fe\u5b9e\u73b0\u7ee7\u627f",id:"\u501f\u52a9\u539f\u578b\u94fe\u5b9e\u73b0\u7ee7\u627f",children:[],level:2},{value:"\u7ec4\u5408\u65b9\u5f0f\u7ee7\u627f",id:"\u7ec4\u5408\u65b9\u5f0f\u7ee7\u627f",children:[],level:2},{value:"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u65b9\u5f0f",id:"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u65b9\u5f0f",children:[],level:2},{value:"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u65b9\u5f0f2",id:"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u65b9\u5f0f2",children:[],level:2}],u={toc:s};function d(e){var n=e.components,p=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"extends-\u7ee7\u627f"},"extends \u7ee7\u627f"),(0,l.kt)("h2",{id:"\u501f\u52a9\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u7ee7\u627f"},"\u501f\u52a9\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u7ee7\u627f"),(0,l.kt)("p",null,"\u539f\u7406\uff1a \u5c06\u7236\u7ea7\u6784\u9020\u51fd\u6570\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," \u6307\u5411\u5b50\u7c7b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function Parent () {\n    this.name = 'parent';\n}\nParent.prototype.say = function () {}\nfunction Child () {\n   // call\u6539\u53d8\u6267\u884c\u4e0a\u4e0b\u6587\uff0cthis\u6307\u5411\n   Parent.call(this);//\u5728\u5b50\u7c7b\u4e2d\u8c03\u7528\u7236\u7c7b\n   this.type = 'child';\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"extends-1.png",src:t(88320).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a\u5b9e\u73b0\u90e8\u5206\u7ee7\u627f\uff0c\u4f46\u662f\u65e0\u6cd5\u7ee7\u627f\u7236\u7c7b\u7684\u539f\u578b\u65b9\u6cd5")),(0,l.kt)("h2",{id:"\u501f\u52a9\u539f\u578b\u94fe\u5b9e\u73b0\u7ee7\u627f"},"\u501f\u52a9\u539f\u578b\u94fe\u5b9e\u73b0\u7ee7\u627f"),(0,l.kt)("p",null,"\u539f\u7406\uff1a\u6bcf\u4e2a\u51fd\u6570\u90fd\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"prototype"),"\u5c5e\u6027(\u662f\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),"\u5bf9\u8c61)\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"prototype"),"\u662f\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u7684\u5c5e\u6027\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Parent"),"\u7684\u5b9e\u4f8b\u8d4b\u503c\u7ed9\u8fd9\u4e2a\u5c5e\u6027\uff0c\u5373",(0,l.kt)("inlineCode",{parentName:"p"},"new Child().__proto__ = Child.prototype = new Parent")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function Parent () {\n    this.name = 'parent';\n    this.play = [1, 2, 3];\n}\nParent.prototype.say = function () {}\nfunction Child () {\n   this.type = 'child';\n}\nChild.prototype = new Parent();\nconsole.log(Child.prototype === new Child().__proto__);\nvar c1 = new Child();\nvar c2 = new Child();\nconsole.log(c1.play, c2.play);\nc1.play.push(4);\nconsole.log(c1.play, c2.play);\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"extends-2.jpg",src:t(66804).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a\u7ee7\u627f\u7684\u539f\u578b\u94fe\u5f15\u7528\u540c\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\uff0c\u591a\u4e2a\u5b9e\u4f8b\u66f4\u6539\u5176\u4e2d\u4e00\u4e2a\u4f1a\u5f15\u8d77\u5176\u4ed6\u5b9e\u4f8b\u4e5f\u53d1\u751f\u66f4\u6539\u3002")),(0,l.kt)("h2",{id:"\u7ec4\u5408\u65b9\u5f0f\u7ee7\u627f"},"\u7ec4\u5408\u65b9\u5f0f\u7ee7\u627f"),(0,l.kt)("p",null,"\u7ec4\u5408\u6784\u9020\u51fd\u6570\u7ee7\u627f\u548c\u539f\u578b\u94fe\u7ee7\u627f\u65b9\u5f0f\u7ee7\u627f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function Parent () {\n    this.name = 'parent';\n    this.play = [1, 2, 3];\n}\nParent.prototype.say = function () {}\nfunction Child () {\n   Parent.call(this);\n   this.type = 'child';\n}\nChild.prototype = new Parent();\nconsole.log(new Child());\nvar c1 = new Child();\nvar c2 = new Child();\nconsole.log(c1.play, c2.play);\nc1.play.push(4);\nconsole.log(c1.play, c2.play);\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"extends-3.png",src:t(47443).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a\u7236\u7c7b\u88ab\u6267\u884c\u4e86\u4e24\u6b21\uff0c\u51fa\u73b0\u4e0d\u5fc5\u8981\u7684\u5197\u4f59")),(0,l.kt)("h2",{id:"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u65b9\u5f0f"},"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function Parent () {\n    this.name = 'parent';\n    this.play = [1, 2, 3];\n}\nParent.prototype.say = function () {}\nfunction Child () {\n   Parent.call(this);\n   this.type = 'child';\n}\nChild.prototype = Parent.prototype;\nconsole.log(new Child());\nvar c1 = new Child();\nvar c2 = new Child();\nconsole.log(c1.play, c2.play);\nc1.play.push(4);\nconsole.log(c1.play, c2.play);\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"extends-4-1.jpg",src:t(93862).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"extends-4-2.png",src:t(21407).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a\u5b50\u7c7b\u6ca1\u6709constructor\uff0c\u5b50\u7c7b\u3001\u7236\u7c7b\u5171\u7528\u4e00\u4e2a\u539f\u578b\u7c7b")),(0,l.kt)("h2",{id:"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u65b9\u5f0f2"},"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u65b9\u5f0f2"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Object.create()")," \u65b9\u6cd5\u4f1a\u4f7f\u7528\u6307\u5b9a\u7684\u539f\u578b\u5bf9\u8c61\u53ca\u5176\u5c5e\u6027\u53bb\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function Parent () {\n    this.name = 'parent';\n    this.play = [1, 2, 3];\n}\nParent.prototype.say = function () {}\nfunction Child () {\n   Parent.call(this);\n   this.type = 'child';\n}\nChild.prototype = Object.create(Parent.prototype);\nChild.prototype.constructor = Child;\nconsole.log(new Child());\nvar c1 = new Child();\nvar c2 = new Child();\nconsole.log(c1.play, c2.play);\nc1.play.push(4);\nconsole.log(c1.play, c2.play);\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"extends-5.jpg",src:t(61877).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u603b\u7ed3: \u5b8c\u7f8e\u89e3\u51b3\u4e0a\u8ff0\u6240\u6709\u7684\u95ee\u9898")))}d.isMDXComponent=!0},88320:function(e,n,t){n.Z=t.p+"assets/images/extends-1-08646a5939f5cf910d392ea09f67d719.png"},66804:function(e,n,t){n.Z=t.p+"assets/images/extends-2-07a0370dc8383020d1e89a36344fbae5.jpg"},47443:function(e,n,t){n.Z=t.p+"assets/images/extends-3-b515e93f12e80d7d9a01ed7dac6abe10.png"},93862:function(e,n,t){n.Z=t.p+"assets/images/extends-4-1-732af648e57833d4c45541e2bf04ef61.jpg"},21407:function(e,n,t){n.Z=t.p+"assets/images/extends-4-2-4396754d258e3dbab10e6f50d1165281.png"},61877:function(e,n,t){n.Z=t.p+"assets/images/extends-5-fe6fb726692c06f95da6fa5f70c9ba3f.jpg"}}]);