"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[9944],{49613:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return u}});var n=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),N=p(a),u=r,f=N["".concat(m,".").concat(u)]||N[u]||o[u]||l;return a?n.createElement(f,i(i({ref:e},k),{},{components:a})):n.createElement(f,i({ref:e},k))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},40114:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return o}});var n=a(45443),r=a(13010),l=(a(59496),a(49613)),i=["components"],d={},m="JSON Schema",p={unversionedId:"typescript/json-schema",id:"typescript/json-schema",title:"JSON Schema",description:"\u5b9a\u4e49",source:"@site/fe/typescript/json-schema.md",sourceDirName:"typescript",slug:"/typescript/json-schema",permalink:"/study-notes/fe/typescript/json-schema",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"\u57fa\u7840\u914d\u7f6e",permalink:"/study-notes/fe/typescript/base"},next:{title:"QA",permalink:"/study-notes/fe/typescript/qa"}},k={},o=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"Array \u7c7b\u578b\u5c5e\u6027",id:"array-\u7c7b\u578b\u5c5e\u6027",level:2},{value:"Object \u7c7b\u578b\u5c5e\u6027",id:"object-\u7c7b\u578b\u5c5e\u6027",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],N={toc:o};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"json-schema"},"JSON Schema"),(0,l.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"JSON Schema")," \u662f\u4e00\u4e2a\u8bcd\u6c47\u8868\uff0c\u53ef\u7528\u4e8e\u6ce8\u91ca\u548c\u9a8c\u8bc1",(0,l.kt)("inlineCode",{parentName:"p"},"JSON"),"\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u73b0\u6709\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"json"),"\u6570\u636e\u683c\u5f0f\u8fdb\u884c\u63cf\u8ff0\uff08\u5b57\u6bb5\u7c7b\u578b\u3001\u5185\u5bb9\u957f\u5ea6\u3001\u662f\u5426\u5fc5\u987b\u5b58\u5728\u3001\u53d6\u503c\u793a\u4f8b\u7b49\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u662f\u4e00\u4e2a\u63cf\u8ff0\u6e05\u6670\u3001\u4eba\u673a\u53ef\u8bfb\u7684\u6587\u6863\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u6d4b\u8bd5\u3001\u9a8c\u8bc1\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u6570\u636e\uff1b")),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5173\u952e\u5b57"),(0,l.kt)("th",{parentName:"tr",align:"left"},"value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"$schema")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"http://json-schema.org/draft-04/schema#"},"http://json-schema.org/draft-04/schema#"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"http://json-schema.org/draft-06/schema#"},"http://json-schema.org/draft-06/schema#"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"http://json-schema.org/draft-07/schema#"},"http://json-schema.org/draft-07/schema#")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"$schema")," \u5173\u952e\u5b57\u72b6\u6001\uff0c\u8868\u793a\u8fd9\u4e2a\u6a21\u5f0f\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"v4")," \u89c4\u8303\u8349\u6848\u4e66\u5199\u4e00\u81f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"$ref")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u7528\u5b57\u6bb5, \u901a\u5e38\u7528\u4e8e\u590d\u6742\u8bf4\u660e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u5b83\u7ed9\u6211\u4eec\u7684\u6a21\u5f0f\u63d0\u4f9b\u4e86\u6807\u9898\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u610f\u7c7b\u578b\uff0c\u8868\u793a\u5f53\u524d\u5bf9\u8c61\u7684\u9ed8\u8ba4\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u901a\u5e38\u642d\u914d",(0,l.kt)("inlineCode",{parentName:"td"},"$ref"),"\u4e00\u8d77\u8bf4\u660e\u4f7f\u7528",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'{"$ref": "#/definnitions/xxx"}')),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5173\u4e8e\u6a21\u5f0f\u7684\u63cf\u8ff0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"definitions")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"td"},"object"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"object"),"\u4e0b\u6240\u6709\u5c5e\u6027\u7684\u503c\u90fd\u5fc5\u987b\u662f\u6709\u6548\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"JSON Schema")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u4e49\u5b50\u6a21\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u8005\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u53d6\u503c\u5fc5\u987b\u5728Schema\u57fa\u672c\u7c7b\u578b\u8303\u56f4\u5185\uff0c\u8be6\u89c1",(0,l.kt)("a",{parentName:"td",href:"#%E7%B1%BB%E5%9E%8B"},"\u7c7b\u578b")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"type")," \u5173\u952e\u5b57\u5728\u6211\u4eec\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"JSON")," \u6570\u636e\u4e0a\u5b9a\u4e49\u4e86\u7b2c\u4e00\u4e2a\u7ea6\u675f\uff1a\u5fc5\u987b\u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"td"},"JSON")," \u5bf9\u8c61\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"enum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b\u662f\u6570\u7ec4\uff0c\u800c\u4e14\u6570\u7ec4\u91cc\u9762\u7684\u5143\u7d20\u81f3\u5c11\u5fc5\u987b\u6709\u4e00\u4e2a\u800c\u4e14\u4e0d\u80fd\u6709\u91cd\u590d\u503c\u3002"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u679a\u4e3e\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"properties")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object"),"\uff0c\u5c5e\u6027\u7684\u503c\u5fc5\u987b\u90fd\u662f\u6709\u6548\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"JSON Schema"),"\u5b9e\u4f8b"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b9a\u4e49\u5404\u79cd\u952e\u548c\u4ed6\u4eec\u7684\u503c\u7c7b\u578b\uff0c\u4ee5\u53ca\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"JSON")," \u6587\u4ef6\u4e2d\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u81f3\u5c11\u5fc5\u987b\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u6570\u7ec4\u5185\u4e0d\u80fd\u6709\u91cd\u590d\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"td"},"object")," \u7c7b\u578b\u7684\u54ea\u4e9b\u5b57\u6bb5\u662f\u5fc5\u987b\u7684\u5b58\u5728\u4e14\u4e0d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," \u7684")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"minimum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ed9\u503c\u8bbe\u7f6e\u7684\u7ea6\u675f\u6761\u4ef6\uff0c\u8868\u793a\u53ef\u4ee5\u63a5\u53d7\u7684\u6700\u5c0f\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"exclusiveMinimum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e03\u5c14\u503c\uff0c\u5fc5\u987b\u4e0e",(0,l.kt)("inlineCode",{parentName:"td"},"minimum"),"\u4e00\u8d77\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u5b58\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"exclusiveMinimum")," \u5e76\u4e14\u5177\u6709\u5e03\u5c14\u503c ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5982\u679c\u5b83\u4e25\u683c\u610f\u4e49\u4e0a\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"minimum")," \u7684\u503c\u5219\u5b9e\u4f8b\u6709\u6548\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maximum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6570\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ed9\u503c\u8bbe\u7f6e\u7684\u7ea6\u675f\u6761\u4ef6\uff0c\u8868\u793a\u53ef\u4ee5\u63a5\u53d7\u7684\u6700\u5927\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"exclusiveMaximum")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e03\u5c14\u503c\uff0c\u5fc5\u987b\u4e0e",(0,l.kt)("inlineCode",{parentName:"td"},"maximum"),"\u4e00\u8d77\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u5b58\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"exclusiveMinimum")," \u5e76\u4e14\u5177\u6709\u5e03\u5c14\u503c ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u5982\u679c\u5b83\u4e25\u683c\u610f\u4e49\u4e0a\u5c0f\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"maximum")," \u7684\u503c\u5219\u5b9e\u4f8b\u6709\u6548\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"multipleOf")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5927\u4e8e",(0,l.kt)("inlineCode",{parentName:"td"},"0"),"\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"JSON"),"\u6570\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u901a\u8fc7\u8fd9\u4e2a\u5173\u952e\u5b57\u7684\u503c\u5206\u5272\u5b9e\u4f8b\u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u6570\u5b57\u5219\u8868\u793a\u7d27\u9760 ",(0,l.kt)("inlineCode",{parentName:"td"},"multipleOf")," \u7684\u6570\u5b57\u5b9e\u4f8b\u662f\u6709\u6548\u7684\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oneOf")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"object Schema"),"\u5b9e\u4f8b\u6570\u7ec4\uff0c\u800c\u4e14\u6570\u7ec4\u91cc\u9762\u7684\u5143\u7d20\u81f3\u5c11\u5fc5\u987b\u6709\u4e00\u4e2a\u800c\u4e14\u4e0d\u80fd\u6709\u91cd\u590d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ee1\u8db3\u5176\u4e2d\u4e00\u4e2a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"allOf")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"object Schema"),"\u5b9e\u4f8b\u6570\u7ec4\uff0c\u800c\u4e14\u6570\u7ec4\u91cc\u9762\u7684\u5143\u7d20\u5fc5\u987b\u6240\u6709\u800c\u4e14\u4e0d\u80fd\u6709\u91cd\u590d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6ee1\u8db3\u5168\u90e8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"anyOf")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b\u662f",(0,l.kt)("inlineCode",{parentName:"td"},"object Schema"),"\u5b9e\u4f8b\u6570\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4efb\u610f\u6ee1\u8db3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"not")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u987b\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"td"},"object"),"\uff0c\u800c\u4e14\u662f\u4e00\u4e2a\u6709\u6548\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"JSON Schema")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53d6\u53cd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maxLength")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5927\u4e8e\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"td"},"0"),"\u7684\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u7b26\u4e32\u5b9e\u4f8b\u5b57\u7b26\u7684\u6700\u5927\u957f\u5ea6\u6570\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"minLength")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5927\u4e8e\u7b49\u4e8e",(0,l.kt)("inlineCode",{parentName:"td"},"0"),"\u7684\u6574\u6570"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u7b26\u4e32\u5b9e\u4f8b\u5b57\u7b26\u7684\u6700\u5c0f\u957f\u5ea6\u6570\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pattern")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u7b26\u4e32\uff0c\u5fc5\u987b\u662f\u6709\u6548\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5b9e\u4f8b\u6210\u529f\u5219\u5b57\u7b26\u4e32\u5b9e\u4f8b\u88ab\u8ba4\u4e3a\u662f\u6709\u6548\u7684\u3002")))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u542b\u5c0f\u6570\u6216\u6307\u6570\u90e8\u5206\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"JSON"),"\u6570\u503c\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4efb\u4f55JSON\u7c7b\u578b\u3002 \u6570\u5b57\u5305\u62ec\u6574\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\u5b57\u7b26\u4e32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"array")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"The JSON null value.")))),(0,l.kt)("h2",{id:"array-\u7c7b\u578b\u5c5e\u6027"},"Array \u7c7b\u578b\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minItems")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f ",(0,l.kt)("inlineCode",{parentName:"td"},"item")," \u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maxItems")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927 ",(0,l.kt)("inlineCode",{parentName:"td"},"item")," \u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uniqueItems")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u9879\u76ee\u90fd\u662f\u552f\u4e00\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"[\u9ed8\u8ba4\uff1afalse]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"items")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4\u6bcf\u9879\u7684\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"additionalItems")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ef\u4ee5\u989d\u5916\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"td"},"item"),"\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"td"},"item")," \u662f\u5355\u4e2a\u6a21\u5f0f\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"additionalItems")," \u5173\u952e\u5b57\u662f\u6ca1\u6709\u610f\u4e49\u7684\uff0c\u56e0\u6b64\u4e0d\u5e94\u4f7f\u7528\u3002")))),(0,l.kt)("h2",{id:"object-\u7c7b\u578b\u5c5e\u6027"},"Object \u7c7b\u578b\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5 ",(0,l.kt)("inlineCode",{parentName:"td"},"object")," \u7c7b\u578b\u7684\u54ea\u4e9b\u5b57\u6bb5\u662f\u5fc5\u987b\u7684\u5b58\u5728\u4e14\u4e0d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," \u7684")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"properties")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5404\u79cd\u952e\u548c\u4ed6\u4eec\u7684\u503c\u7c7b\u578b\uff0c\u4ee5\u53ca\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"JSON")," \u6587\u4ef6\u4e2d\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maxProperties")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5c5e\u6027\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minProperties")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u5c5e\u6027\u6570\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dependencies")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u54ea\u4e9b\u5c5e\u6027\u7684\u5b58\u5728\u5fc5\u987b\u4f9d\u8d56\u53e6\u5916\u4e00\u4e9b\u5c5e\u6027\u7684\u5b58\u5728")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patternProperties")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u6240\u6709\u5c5e\u6027\u540d\u5339\u914d\u4e0a\u7684\u90fd\u5fc5\u987b\u6ee1\u8db3\u4e00\u5b9a\u7684\u6761\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"additionalProperties")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a ",(0,l.kt)("inlineCode",{parentName:"td"},"json")," \u53ef\u4ee5\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"td"},"object")," \u672a\u5b9a\u4e49\uff0c\u4f46\u662f\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684\u6570\u636e")))),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON Schema\u5b98\u7f51")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.jsonschemavalidator.net/"},"JSON Schema Validator")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://json-schema.org/draft/2019-09/json-schema-validation.html"},"JSON Schema Validator \u5b98\u65b9\u6587\u6863")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://imweb.io/topic/57b5f69373ac222929653f23"},"JSON Schema \u53c2\u8003\u4e66")))}u.isMDXComponent=!0}}]);