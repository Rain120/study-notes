"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8266],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||r;return t?i.createElement(k,l(l({ref:n},u),{},{components:t})):i.createElement(k,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},57748:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],o={},p="Plugin",c={unversionedId:"webpack/plugins",id:"webpack/plugins",title:"Plugin",description:"\u5b9a\u4e49",source:"@site/engineering/webpack/plugins.md",sourceDirName:"webpack",slug:"/webpack/plugins",permalink:"/study-notes/engineering/webpack/plugins",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649150699,formattedLastUpdatedAt:"4/5/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Module Chunk Bundle \u4e4b\u95f4\u7684\u533a\u522b",permalink:"/study-notes/engineering/webpack/module-chunk-bundle"},next:{title:"Webpack Tapable",permalink:"/study-notes/engineering/webpack/tapable"}},u={},m=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"Compiler &amp;&amp; Compilation",id:"compiler--compilation",level:2},{value:"Compiler",id:"compiler",level:3},{value:"Compilation",id:"compilation",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:2},{value:"\u5199\u4e00\u4e2aPlugin",id:"\u5199\u4e00\u4e2aplugin",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],s={toc:m};function d(e){var n=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plugin"},"Plugin"),(0,r.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.kt)("p",null,"plugin\u662f\u4e00\u4e2a\u6269\u5c55\u5668\uff0c\u5b83\u4e30\u5bcc\u4e86webpack\u672c\u8eab\uff0c\u9488\u5bf9\u662floader\u7ed3\u675f\u540e\uff0cwebpack\u6253\u5305\u7684\u6574\u4e2a\u8fc7\u7a0b\uff0c\u5b83\u5e76\u4e0d\u76f4\u63a5\u64cd\u4f5c\u6587\u4ef6\uff0c\u800c\u662f\u57fa\u4e8e\u4e8b\u4ef6\u673a\u5236\u5de5\u4f5c\uff0c\u4f1a\u76d1\u542cwebpack\u6253\u5305\u8fc7\u7a0b\u4e2d\u7684\u67d0\u4e9b\u8282\u70b9\uff0c\u6267\u884c\u5e7f\u6cdb\u7684\u4efb\u52a1\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"plugin-run",src:t(34872).Z,width:"1300",height:"856"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zoobestik/csso-webpack-plugin"},"\ud83d\udc46\ud83c\udffb\u56fe\u7247\u5730\u5740")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6b63\u5728\u5b66\u4e60\u4e2d"))),(0,r.kt)("h2",{id:"compiler--compilation"},"Compiler && Compilation"),(0,r.kt)("p",null,"\u5728\u7406\u89e3\u6216\u8005\u5f00\u53d1\u63d2\u4ef6\u4e4b\u524d\uff0c\u5fc5\u987b\u8981\u7406\u89e3\u4e24\u4e2a\u6700\u91cd\u8981\u7684\u6982\u5ff5\u5c31\u662f Compiler \u548c Compilation\u3002\u7406\u89e3\u5b83\u4eec\u662f\u6700\u91cd\u8981\u4e00\u6b65\u3002"),(0,r.kt)("h3",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,"\u6574\u4e2a Webpack \u914d\u7f6e\u7684\u5b9e\u4f8b"),(0,r.kt)("h3",{id:"compilation"},"Compilation"),(0,r.kt)("p",null,"Compilation \u7ee7\u627f\u81ea Compiler\uff0c\u5b83\u662f\u52a8\u6001\u7684\u8d44\u6e90\u96c6\u5408\uff0c\u5305\u542b\u4e86 chunks, modules, cache, assets, \u5728\u67d0\u4e2a\u7f16\u8bd1\u9636\u6bb5\uff0c\u4ea7\u751f\u7684\u7f16\u8bd1\u8d44\u6e90\u662f\u4e0d\u76f8\u540c\u7684\u3002\u6bcf\u4e2a\u9636\u6bb5\u90fd\u4f1a\u6709\u5404\u81ea\u7684Compilation"),(0,r.kt)("h2",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"compile: \u8fdb\u5165\u7f16\u8f91\u73af\u5883, \u5f00\u59cb\u7f16\u8bd1"),(0,r.kt)("li",{parentName:"ol"},"compilation: \u521b\u5efa compilation \u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ol"},"make: compilation \u5b9e\u4f8b\u542f\u52a8\u5bf9\u4ee3\u7801\u7684\u7f16\u8bd1\u548c\u6784\u5efa"),(0,r.kt)("li",{parentName:"ol"},"optimize: \u5f00\u59cb\u4f18\u5316\u9636\u6bb5"),(0,r.kt)("li",{parentName:"ol"},"after-compile: \u7f16\u8bd1\u5b8c\u6210"),(0,r.kt)("li",{parentName:"ol"},"emit: \u6240\u6709\u6253\u5305\u751f\u6210\u7684\u6587\u4ef6\u5185\u5bb9\u6309\u7167\u4f9d\u8d56\u56fe\u5df2\u7ecf\u5904\u7406\u5b8c\u6bd5, (\u6700\u540e\u4e00\u5904\u6dfb\u52a0\u8d44\u6e90\u5230\u8d44\u6e90\u96c6\u5408\u7684\u5730\u65b9)"),(0,r.kt)("li",{parentName:"ol"},"after-emit: \u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u5df2\u7ecf\u8f93\u51fa\u5230\u76ee\u6807\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ol"},"done: \u6574\u4f53\u4ee3\u7801\u7684\u6784\u5efa\u5de5\u4f5c\u7ed3\u675f\u65f6\u89e6\u53d1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 1\ncompiler.plugin('compile', function (params) {\n    // compile\n});\n// 2\ncompiler.plugin('compilation', function (compilation, params) {\n    // compilation\n    // 4\n    compilation.plugin('optimize', function () {\n        // optimize\n    });\n});\n// 3\ncompiler.plugin('make', function (compiler, callback) {\n    // make\n    callback();\n});\n// 5\ncompiler.plugin('after-compile', function (compilation) {\n    // after-compile\n});\n// 6\ncompiler.plugin('emit', function (compilation, callback) {\n    // emit\n    callback();\n});\n// 7\ncompiler.plugin('after-emit', function (compilation) {\n    // after-emit\n})\n")),(0,r.kt)("h2",{id:"\u5199\u4e00\u4e2aplugin"},"\u5199\u4e00\u4e2aPlugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default class MyPlugin {\n    constructor(options) {\n        this.options = options;\n    }\n\n    apply(compiler, () => {})\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/docs/wiki/how-to-write-a-plugin"},"how to write a plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://beacelee.com/2018-01-18-%E8%A7%A3%E6%9E%90webpack%20plugin%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%EF%BC%8C%E4%B9%A6%E5%86%99%E8%87%AA%E5%B7%B1%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AAplugin/"},"\u89e3\u6790webpack plugin\u7684\u751f\u547d\u5468\u671f\uff0c\u4e66\u5199\u81ea\u5df1\u7684\u7b2c\u4e00\u4e2aplugin")))),(0,r.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/plugins/"},"Webpack Plugins")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/37452402/webpack-loaders-vs-plugins-whats-the-difference/46176755#46176755"},"Webpack loaders vs plugins; what's the difference?")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308"},"webpack \u4e2d loader \u548c plugin \u7684\u533a\u522b\u662f\u4ec0\u4e48 ")))}d.isMDXComponent=!0},34872:function(e,n,t){n.Z=t.p+"assets/images/plugin-run-09803cb63bb093d0187298ade7b6deeb.png"}}]);