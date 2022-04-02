"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[56],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=l,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20457:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=["components"],i={},d="Vue2",p={unversionedId:"vue/lifecycle/vue2",id:"vue/lifecycle/vue2",title:"Vue2",description:"vue-lifecycle",source:"@site/fe/vue/lifecycle/vue2.md",sourceDirName:"vue/lifecycle",slug:"/vue/lifecycle/vue2",permalink:"/study-notes/fe/vue/lifecycle/vue2",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648899683,formattedLastUpdatedAt:"4/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u4e00\u4e9b\u5c0f\u7684\u77e5\u8bc6\u70b9",permalink:"/study-notes/fe/promise/little-knowledge"},next:{title:"\u5de6\u53f3\u83dc\u5355\u8054\u52a8",permalink:"/study-notes/fe/vue/cascade-menu"}},s={},m=[{value:"create + mounted",id:"create--mounted",level:2},{value:"update + destory",id:"update--destory",level:2}],u={toc:m};function c(e){var t=e.components,i=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vue2"},"Vue2"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://vue.docschina.org/images/lifecycle.png",alt:"vue-lifecycle"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vue.docschina.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E7%A4%BA%E6%84%8F%E5%9B%BE"},"\u8be6\u89c1Vue \u751f\u547d\u5468\u671f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vue.docschina.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90"},"\u9009\u9879 / \u751f\u547d\u5468\u671f\u94a9\u5b50")),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"Vue"),"\u63d0\u4f9b\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"Vue"),"\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u6765\u52a0\u6df1\u6211\u4eec\u5bf9\u5b83\u7684\u7406\u89e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/y0117q1y41"},"\u6d4b\u8bd5\u4ee3\u7801\u5730\u5740")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"App.vue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<template>\n  <div id="app">\n    <el-button type="primary" size="small" @click="update">Update</el-button>\n    <el-button type="danger" size="small" @click="destory">Destory</el-button>\n    <div>Input Lazy: <input v-model.lazy="message" /></div>\n    <div>Input: <input v-model="message" /></div>\n    <div>{{ message }}</div>\n  </div>\n</template>\n\n<script>\nimport ChildLifeCycle from "./components/ChildLifeCycle.vue";\n\nexport default {\n  name: "App",\n  data() {\n    return {\n      message: "hello"\n    };\n  },\n  beforeCreate() {\n    console.group("beforeCreate");\n    console.log(`      el: ${this.$el}`);\n    console.log(`    data: ${this.$data}`);\n    console.log(` message: ${this.message}`);\n  },\n  created() {\n    console.group("created");\n    console.log(`      el: ${this.$el}`);\n    console.log(`    data: ${this.$data}`);\n    console.log(` message: ${this.message}`);\n  },\n  beforeMount() {\n    console.group("beforeMount");\n    console.log(`      el: ${this.$el}`);\n    console.log(this.$el);\n    console.log(`    data: ${this.$data}`);\n    console.log(` message: ${this.message}`);\n  },\n  mounted() {\n    console.group("mounted");\n    console.log(`      el: ${this.$el}`);\n    console.log(this.$el);\n    console.log(`    data: ${this.$data}`);\n    console.log(` message: ${this.message}`);\n  },\n  beforeUpdate() {\n    console.group("beforeUpdate");\n    console.log(`      el: ${this.$el}`);\n    console.log(this.$el);\n    console.log(`    data: ${this.$data}`);\n    console.log(` message: ${this.message}`);\n  },\n  updated() {\n    console.group("updated");\n    console.log(`      el: ${this.$el}`);\n    console.log(this.$el);\n    console.log(`    data: ${this.$data}`);\n    console.log(` message: ${this.message}`);\n  },\n  beforeDestroy() {\n    console.group("beforeDestroy");\n    console.log(`      el: ${this.$el}`);\n    console.log(this.$el);\n    console.log(`    data: ${this.$data}`);\n    console.log(` message: ${this.message}`);\n  },\n  destroyed() {\n    console.group("destroyed");\n    console.log(`      el: ${this.$el}`);\n    console.log(this.$el);\n    console.log(`    data: ${this.$data}`);\n    console.log(` message: ${this.message}`);\n  },\n  methods: {\n    update() {\n      this.message = "update hello";\n    },\n    destory() {\n      this.$destroy();\n    }\n  },\n  components: {\n    ChildLifeCycle\n  }\n};\n<\/script>\n\n<style></style>\n\n')),(0,r.kt)("h2",{id:"create--mounted"},"create + mounted"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"create+mounte",src:n(36701).Z,width:"1245",height:"532"})),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u6267\u884c\u7ed3\u679c\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"beforeCreate"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"created"),",\u5728\u8fd9\u4e24\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"hook"),"\u4e4b\u95f4\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Vue"),"\u5b9e\u4f8b\u4f1a\u8fdb\u884c\u4e8b\u4ef6\u521d\u59cb\u5316, \u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"watch"),",\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),",",(0,r.kt)("inlineCode",{parentName:"p"},"computed"),"\u8fdb\u884c\u6570\u636e\u89c2\u6d4b(",(0,r.kt)("inlineCode",{parentName:"p"},"data observer"),")\u3002\u6b64\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"$el"),"\u8fd8\u4e0d\u5b58\u5728\uff0c\u4f46\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u5c5e\u6027\u5df2\u7ecf\u5b58\u5728\uff0c\u6240\u4ee5\uff0c\u5982\u679c\u6211\u4eec\u7684\u6570\u636e\u4e0d\u4f9d\u8d56",(0,r.kt)("inlineCode",{parentName:"p"},"dom"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"hook"),"\u4e2d\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"API"),"\u6570\u636e\u83b7\u53d6\u3002"),(0,r.kt)("p",null,"\u4ece\u751f\u547d\u5468\u671f\u56fe\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"console"),"\u4e0a\u6211\u4eec\u770b\u51fa\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"this.$el"),"\u8fd8\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u6240\u4ee5\u6b64\u5904\u4f1a\u7b49\u5f85",(0,r.kt)("inlineCode",{parentName:"p"},"Vue"),"\u5b9e\u4f8b\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"vm.mounted($el)"),"\uff0c\u63a5\u7740\u5224\u65ad\u662f\u5426\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"template"),"\u914d\u7f6e\uff0c\u6709\u5c31\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"template"),"\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"render"),"\u51fd\u6570\uff0c\u6ca1\u6709\u5c31\u901a\u8fc7\u7f16\u8f91",(0,r.kt)("inlineCode",{parentName:"p"},"outHTML"),"\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"template"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"render"),"\u51fd\u6570\u9009\u9879 > ",(0,r.kt)("inlineCode",{parentName:"p"},"template"),"\u9009\u9879 > ",(0,r.kt)("inlineCode",{parentName:"p"},"outer HTML"),"\u3002\u6b64\u65f6",(0,r.kt)("inlineCode",{parentName:"p"},"mounted"),"\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"el"),",",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u90fd\u5df2\u7ecf\u521d\u59cb\u5316\u4e86\uff0c\u5f53\u6211\u4eec\u7684\u6570\u636e\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"DOM"),"\u6709\u76f8\u5bf9\u5e94\u7684\u4f9d\u8d56\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"hook"),"\u4e0b\u8fdb\u884c\u6570\u636e\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create"),"\u94a9\u5b50\u6570\u636e\u8bf7\u6c42",(0,r.kt)("inlineCode",{parentName:"p"},"demo"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"created-axios",src:n(57014).Z,width:"604",height:"198"})),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"axios-methods",src:n(71606).Z,width:"764",height:"584"})),(0,r.kt)("h2",{id:"update--destory"},"update + destory"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"update+destory",src:n(66324).Z,width:"1240",height:"924"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"beforeDestroy"),"\u94a9\u5b50\u51fd\u6570\u5728\u5b9e\u4f8b\u9500\u6bc1\u4e4b\u524d\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u4ecd\u7136\u5b8c\u5168\u53ef\u7528, this\u4ecd\u80fd\u83b7\u53d6\u5230\u5b9e\u4f8b\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"destroyed"),"\u94a9\u5b50\u51fd\u6570\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Vue "),"\u5b9e\u4f8b\u9500\u6bc1\u540e\u8c03\u7528\u3002\u8c03\u7528\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Vue "),"\u5b9e\u4f8b\u6307\u793a\u7684\u6240\u6709\u4e1c\u897f\u90fd\u4f1a\u89e3\u7ed1\u5b9a\uff0c\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u4f1a\u88ab\u79fb\u9664\uff0c\u6240\u6709\u7684\u5b50\u5b9e\u4f8b\u4e5f\u4f1a\u88ab\u9500\u6bc1\u3002\u7ec4\u4ef6\u4e0a\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u4e1c\u897f\u3002 \u4e0e\u4e4b\u76f8\u5173\u7684\u4e00\u5207\u90fd\u88ab\u9500\u6bc1\u4e86\u3002 "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u751f\u547d\u5468\u671f\u94a9\u5b50"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8be6\u7ec6\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beforeCreate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vue"),": \u5728\u5b9e\u4f8b\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u7acb\u5373\u540c\u6b65\u8c03\u7528\uff0c\u5728\u6570\u636e\u89c2\u5bdf(",(0,r.kt)("inlineCode",{parentName:"td"},"data observer"),")\u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"event/watcher")," \u914d\u7f6e\u4e4b\u524d\u88ab\u8c03\u7528\u3002",(0,r.kt)("br",null),"\u5728\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u65f6\u8fd0\u884c\u3002 ",(0,r.kt)("inlineCode",{parentName:"td"},"data"),"\u5c1a\u672a\u88ab\u53cd\u5e94\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"event"),"\u5c1a\u672a\u5efa\u7acb\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e38\u7528\u4e8e\u521d\u59cb\u5316\u975e\u54cd\u5e94\u5f0f\u53d8\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vue"),": \u5b9e\u4f8b\u5df2\u7ecf\u521b\u5efa\u5b8c\u6210\u4e4b\u540e\u88ab\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u5df2\u5b8c\u6210\u4ee5\u4e0b\u7684\u914d\u7f6e\uff1a\u6570\u636e\u89c2\u6d4b(",(0,r.kt)("inlineCode",{parentName:"td"},"data observer"),")\uff0c\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u8fd0\u7b97\uff0c ",(0,r.kt)("inlineCode",{parentName:"td"},"watch/event "),"\u4e8b\u4ef6\u56de\u8c03\u3002\u7136\u800c\uff0c\u6302\u8f7d\u9636\u6bb5\u8fd8\u6ca1\u5f00\u59cb\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"$el")," \u5c5e\u6027\u76ee\u524d\u4e0d\u53ef\u89c1\u3002",(0,r.kt)("br",null),"\u5728\u8fd9\u4e2a\u94a9\u5b50\u4e2d\u80fd\u591f\u8bbf\u95ee\u88ab\u52a8\u6570\u636e\u5e76\u4e14",(0,r.kt)("inlineCode",{parentName:"td"},"event"),"\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002 \u6a21\u677f\u548c\u865a\u62df",(0,r.kt)("inlineCode",{parentName:"td"},"DOM"),"\u5c1a\u672a",(0,r.kt)("inlineCode",{parentName:"td"},"mounted"),"\u6216",(0,r.kt)("inlineCode",{parentName:"td"},"render"),"\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"ajax"),"\u8bf7\u6c42\uff0c\u9875\u9762\u7684\u521d\u59cb\u5316")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beforeMount")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vue"),": \u5728\u6302\u8f7d\u5f00\u59cb\u4e4b\u524d\u88ab\u8c03\u7528\uff1a\u76f8\u5173\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"render")," \u51fd\u6570\u9996\u6b21\u88ab\u8c03\u7528\u3002",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"beforeMount hook"),":\u5728\u521d\u59cb\u6e32\u67d3\u53d1\u751f\u4e4b\u524d\u4ee5\u53ca\u7f16\u8bd1\u6a21\u677f\u6216\u6e32\u67d3\u51fd\u6570\u4e4b\u540e\u8fd0\u884c\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f88\u53ef\u80fd\u4f60\u6c38\u8fdc\u4e0d\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u94a9\u5b50\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mounted")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vue")," : \u5728\u5b9e\u4f8b\u6302\u8f7d\u4e4b\u540e\u8c03\u7528\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"td"},"el")," \u88ab\u65b0\u521b\u5efa\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"vm.$el")," \u66ff\u4ee3\u3002\u5982\u679c root \u5b9e\u4f8b\u6302\u8f7d\u4e86\u4e00\u4e2a\u6587\u6863\u5185\u5143\u7d20\uff0c\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"mounted")," \u88ab\u8c03\u7528\u65f6 ",(0,r.kt)("inlineCode",{parentName:"td"},"vm.$el")," \u4e5f\u5728\u6587\u6863\u5185\u3002",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"mounted hook"),"\uff0c\u53ef\u4ee5\u5b8c\u5168\u8bbf\u95ee\u88ab\u52a8\u7ec4\u4ef6\uff0c\u6a21\u677f\u548c\u5448\u73b0\u7684DOM\uff08\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"td"},"this.$el"),")\u3002 ",(0,r.kt)("inlineCode",{parentName:"td"},"Mounted"),"\u662f\u6700\u5e38\u7528\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"td"},"ajax"),"\u83b7\u53d6\u7ec4\u4ef6\u7684\u6570\u636e\uff08\u4e3a\u6b64\u521b\u5efa\u7684\u7528\u9014\uff09\u548c\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"td"},"DOM"),"\uff0c\u901a\u5e38\u7528\u4e8e\u96c6\u6210\u975e",(0,r.kt)("inlineCode",{parentName:"td"},"Vue"),"\u5e93\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beforeupdate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vue"),": \u5728 DOM \u88ab patch \u4e4b\u524d\u8c03\u7528\u6570\u636e\u4fee\u6539\u3002\u8fd9\u662f\u5728 DOM \u66f4\u65b0\u4e4b\u524d\uff0c\u8bbf\u95ee\u5df2\u6709 DOM \u7684\u6700\u4f73\u65f6\u673a\uff0c\u4f8b\u5982\uff0c\u624b\u52a8\u5730\u79fb\u9664\u4e4b\u524d\u6dfb\u52a0\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"beforeUpdate hook"),"\u5728\u7ec4\u4ef6\u4e0a\u7684\u6570\u636e\u66f4\u6539\u548c\u66f4\u65b0\u5468\u671f\u5f00\u59cb\u4e4b\u540e\u8fd0\u884c\uff0c\u5c31\u5728",(0,r.kt)("inlineCode",{parentName:"td"},"patched"),"\u548c",(0,r.kt)("inlineCode",{parentName:"td"},"re-render DOM"),"\u4e4b\u524d\u3002 \u5b83\u5141\u8bb8\u60a8\u5728\u7ec4\u4ef6\u5b9e\u9645\u5448\u73b0\u4e4b\u524d\u83b7\u53d6\u7ec4\u4ef6\u4e0a\u4efb\u4f55\u88ab\u52a8\u6570\u636e\u7684\u65b0\u72b6\u6001\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updated")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vue"),": \u7531\u4e8e\u6570\u636e\u66f4\u6539\u5bfc\u81f4\u7684\u865a\u62df DOM \u91cd\u65b0\u6e32\u67d3\u548c\u6253\u8865\u4e01\uff0c\u5728\u8fd9\u4e4b\u540e\u4f1a\u8c03\u7528\u8be5\u94a9\u5b50\u3002\u5f53\u8fd9\u4e2a\u94a9\u5b50\u88ab\u8c03\u7528\u65f6\uff0c\u7ec4\u4ef6 DOM \u5df2\u7ecf\u66f4\u65b0\uff0c\u6240\u4ee5\u4f60\u73b0\u5728\u53ef\u4ee5\u6267\u884c\u4f9d\u8d56\u4e8e DOM \u7684\u64cd\u4f5c\u3002\u7136\u800c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e94\u8be5\u907f\u514d\u5728\u6b64\u671f\u95f4\u66f4\u6539\u72b6\u6001\u3002\u5982\u679c\u8981\u76f8\u5e94\u72b6\u6001\u6539\u53d8\uff0c\u901a\u5e38\u6700\u597d\u4f7f\u7528",(0,r.kt)("a",{parentName:"td",href:"https://vue.docschina.org/v2/api/#computed"},"\u8ba1\u7b97\u5c5e\u6027"),"\u6216 ",(0,r.kt)("a",{parentName:"td",href:"https://vue.docschina.org/v2/api/#watch"},"watcher")," \u53d6\u800c\u4ee3\u4e4b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u60a8\u9700\u8981\u5728\u66f4\u6539\u5c5e\u6027\u540e\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"td"},"DOM"),"\uff0c\u8fd9\u53ef\u80fd\u662f\u6700\u5b89\u5168\u7684\u5730\u65b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beforeDestroy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u9500\u6bc1\u4e4b\u524d\u8c03\u7528\u3002\u5728\u8fd9\u4e00\u6b65\uff0c\u5b9e\u4f8b\u4ecd\u7136\u5b8c\u5168\u53ef\u7528\uff0cthis\u4ecd\u80fd\u83b7\u53d6\u5230\u5b9e\u4f8b\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e38\u7528\u4e8e\u9500\u6bc1\u5b9a\u65f6\u5668\u3001\u6e05\u7406\u4e8b\u4ef6\u6216\u8005\u88ab\u52a8\u8ba2\u9605\u3001\u9500\u6bc1\u63d2\u4ef6\u5bf9\u8c61\u7b49\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"destroyed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Vue"),": Vue \u5b9e\u4f8b\u9500\u6bc1\u540e\u8c03\u7528\u3002\u8c03\u7528\u540e\uff0cVue \u5b9e\u4f8b\u6307\u793a\u7684\u6240\u6709\u4e1c\u897f\u90fd\u4f1a\u89e3\u7ed1\u5b9a\uff0c\u6240\u6709\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u4f1a\u88ab\u79fb\u9664\uff0c\u6240\u6709\u7684\u5b50\u5b9e\u4f8b\u4e5f\u4f1a\u88ab\u9500\u6bc1\u3002",(0,r.kt)("br",null),"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"td"},"destroyed"),"\u65f6\uff0c\u7ec4\u4ef6\u4e0a\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u4e1c\u897f\u3002 \u4e0e\u4e4b\u76f8\u5173\u7684\u4e00\u5207\u90fd\u88ab\u9500\u6bc1\u4e86\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Note"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mounted"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"updated"),"\u4e0d\u80fd\u786e\u4fdd\u6240\u6709\u5b50\u7ec4\u4ef6\u4e5f\u88ab",(0,r.kt)("inlineCode",{parentName:"li"},"mounted or updated "),",\u5982\u679c\u4f60\u60f3\u8981\u7b49\u5230\u6574\u4e2a\u89c6\u56fe\u90fd\u6e32\u67d3\u5b8c\u6bd5\uff0c\u8bf7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"vm.$nextTick"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"mounted: function () {\n  this.$nextTick(function () {\n    // Code that will run only after the\n    // entire view has been rendered\n  })\n}\n// or\nupdated: function () {\n  this.$nextTick(function () {\n    // Code that will run only after the\n    // entire view has been rendered\n  })\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u671f\u95f4\u4e0d\u88ab\u8c03\u7528: ",(0,r.kt)("inlineCode",{parentName:"li"},"beforeMount"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mounted"),",",(0,r.kt)("inlineCode",{parentName:"li"},"beforeupdate"),"(\u5728\u670d\u52a1\u5668\u7aef\u53ea\u6267\u884c\u521d\u59cb\u6e32\u67d3),",(0,r.kt)("inlineCode",{parentName:"li"},"updated")," ,",(0,r.kt)("inlineCode",{parentName:"li"},"beforeDestroy"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"destroyed"))))}c.isMDXComponent=!0},71606:function(e,t,n){t.Z=n.p+"assets/images/axios-methods-a05e467ccdecba971faa69362f9764ad.png"},36701:function(e,t,n){t.Z=n.p+"assets/images/create+mounte-da9c45815adfc074da02014cc4ba226b.png"},57014:function(e,t,n){t.Z=n.p+"assets/images/created-axios-37b237e23fbef89a6097840774f7ac4a.png"},66324:function(e,t,n){t.Z=n.p+"assets/images/update+destory-95787aabcab014b55660e950b566be8b.png"}}]);