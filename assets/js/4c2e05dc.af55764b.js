"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[2671],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),k=a,s=u["".concat(c,".").concat(k)]||u[k]||m[k]||o;return t?r.createElement(s,i(i({ref:n},d),{},{components:t})):r.createElement(s,i({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61923:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={},c="\u5bb9\u5668 root fs\u547d\u4ee4",p={unversionedId:"docker/command/container-fs",id:"docker/command/container-fs",title:"\u5bb9\u5668 root fs\u547d\u4ee4",description:"cp \u547d\u4ee4",source:"@site/engineering/docker/command/container-fs.md",sourceDirName:"docker/command",slug:"/docker/command/container-fs",permalink:"/study-notes/engineering/docker/command/container-fs",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1648899683,formattedLastUpdatedAt:"4/2/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Docker \u547d\u4ee4",permalink:"/study-notes/engineering/docker/command/docker-command"},next:{title:"\u672c\u5730\u955c\u50cf\u7ba1\u7406",permalink:"/study-notes/engineering/docker/command/local-images-manage"}},d={},m=[{value:"<code>cp</code> \u547d\u4ee4",id:"cp-\u547d\u4ee4",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3},{value:"<code>commit</code>",id:"commit",level:2},{value:"<code>diff</code>",id:"diff",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b-1",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:m};function k(e){var n=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5bb9\u5668-root-fs\u547d\u4ee4"},"\u5bb9\u5668 root fs\u547d\u4ee4"),(0,o.kt)("h2",{id:"cp-\u547d\u4ee4"},(0,o.kt)("inlineCode",{parentName:"h2"},"cp")," \u547d\u4ee4"),(0,o.kt)("p",null,"\u7528\u4e8e\u5bb9\u5668\u4e0e\u4e3b\u673a\u4e4b\u95f4\u7684\u6570\u636e\u62f7\u8d1d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker cp [Options] Container:source_path dest_path/-\n\ndocker cp [Options] source_path- Container:dest_path\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--follow-link"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"-L")," : \u4fdd\u6301\u6e90\u76ee\u6807\u4e2d\u7684\u94fe\u63a5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--archive")," , ",(0,o.kt)("inlineCode",{parentName:"li"},"-a"),":  \u5b58\u6863\u6a21\u5f0f(\u590d\u5236\u6240\u6709",(0,o.kt)("inlineCode",{parentName:"li"},"uid / gid"),"\u4fe1\u606f)")),(0,o.kt)("h3",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u5c06\u4e3b\u673a ",(0,o.kt)("inlineCode",{parentName:"p"},"/path"),"\u76ee\u5f55\u62f7\u8d1d\u5230\u5bb9\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"68fe0d99b283")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/path"),"\u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp /path 68fe0d99b283:/path/\n")),(0,o.kt)("p",null,"\u5c06\u4e3b\u673a ",(0,o.kt)("inlineCode",{parentName:"p"},"/path"),"\u76ee\u5f55\u62f7\u8d1d\u5230\u5bb9\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"68fe0d99b283"),"\u4e2d\uff0c\u76ee\u5f55\u91cd\u547d\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"/rename"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp /www/runoob 68fe0d99b283:/rename`\n")),(0,o.kt)("p",null,"\u5c06\u5bb9\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"68fe0d99b283")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/path")," \u76ee\u5f55\u62f7\u8d1d\u5230\u4e3b\u673a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp"),"\u76ee\u5f55\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp  68fe0d99b283:/www /tmp/\n")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"docker-cp.png",src:t(50058).Z,width:"1390",height:"50"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"docker-cp-res.png",src:t(40010).Z,width:"1080",height:"232"})),(0,o.kt)("h2",{id:"commit"},(0,o.kt)("inlineCode",{parentName:"h2"},"commit")),(0,o.kt)("p",null,"\u4ece\u5bb9\u5668\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--author"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"-a")," : \u63d0\u4ea4\u7684\u955c\u50cf\u4f5c\u8005")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--change"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"-c")," : \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile"),"\u6307\u4ee4\u6765\u521b\u5efa\u955c\u50cf")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--message"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"-m")," : \u63d0\u4ea4\u65f6\u7684\u8bf4\u660e\u6587\u5b57")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--pause"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"-p")," : \u5728",(0,o.kt)("inlineCode",{parentName:"li"},"commit"),"\u65f6\uff0c\u5c06\u5bb9\u5668\u6682\u505c, \u9ed8\u8ba4\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"true"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'docker commit -a "rain120" -m "test" -=\'CMD ["apachectl", "-DFOREGROUND"]\' c3f279d17e0a  svendowideit/testimage:version4\n')),(0,o.kt)("h2",{id:"diff"},(0,o.kt)("inlineCode",{parentName:"h2"},"diff")),(0,o.kt)("p",null,"\u68c0\u67e5\u5bb9\u5668\u91cc\u6587\u4ef6\u7ed3\u6784\u7684\u66f4\u6539"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker diff [OPTIONS] CONTAINER\n")),(0,o.kt)("h3",{id:"\u5b9e\u4f8b-1"},"\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u67e5\u770b\u5bb9\u5668mymysql\u7684\u6587\u4ef6\u7ed3\u6784\u66f4\u6539\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker diff CONTAINER\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cp/"},"Docker commandline cp")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/commit/"},"Docker commandline commit")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/diff/"},"Docker commandline diff")))}k.isMDXComponent=!0},40010:function(e,n,t){n.Z=t.p+"assets/images/docker-cp-res-c9cf7a1e1dedb24ba4fb915f4a52bcd7.png"},50058:function(e,n,t){n.Z=t.p+"assets/images/docker-cp-8ae4d659f54c2cdb7b7d1b28c30796ab.png"}}]);