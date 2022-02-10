"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[4830],{3905:function(e,n,a){a.d(n,{Zo:function(){return i},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},i=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),g=u(a),d=r,m=g["".concat(o,".").concat(d)]||g[d]||c[d]||l;return a?t.createElement(m,s(s({ref:n},i),{},{components:a})):t.createElement(m,s({ref:n},i))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var u=2;u<l;u++)s[u]=a[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},16476:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return i},default:function(){return g}});var t=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],p={},o="\u65e5\u5e38\u4f7f\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",u={unversionedId:"javascript/regular-expression/common-reg-exps",id:"javascript/regular-expression/common-reg-exps",title:"\u65e5\u5e38\u4f7f\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",description:"\u8bb0\u5f55\u5de5\u4f5c\u3001\u5b66\u4e60\u6240\u4f7f\u7528\u5230\u7684\u6b63\u5219\u8868\u8fbe\u5f0f",source:"@site/fe/javascript/regular-expression/common-reg-exps.md",sourceDirName:"javascript/regular-expression",slug:"/javascript/regular-expression/common-reg-exps",permalink:"/study-notes/fe/javascript/regular-expression/common-reg-exps",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1644461031,formattedLastUpdatedAt:"2/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5e38\u7528\u57fa\u7840\u77e5\u8bc6",permalink:"/study-notes/fe/javascript/regular-expression/"},next:{title:"React \u751f\u547d\u5468\u671f",permalink:"/study-notes/fe/react/lifecycle"}},i=[{value:"\u68c0\u6d4b\u5b57\u7b26\u4e32\u4e2d\u7279\u6b8a\u7b26\u53f7",id:"\u68c0\u6d4b\u5b57\u7b26\u4e32\u4e2d\u7279\u6b8a\u7b26\u53f7",children:[],level:2},{value:"\u65e5\u671f\u9a8c\u8bc1",id:"\u65e5\u671f\u9a8c\u8bc1",children:[],level:2},{value:"\u65f6\u95f4\u683c\u5f0f\u9a8c\u8bc1",id:"\u65f6\u95f4\u683c\u5f0f\u9a8c\u8bc1",children:[],level:2},{value:"\u90ae\u7bb1\u683c\u5f0f\u9a8c\u8bc1",id:"\u90ae\u7bb1\u683c\u5f0f\u9a8c\u8bc1",children:[],level:2},{value:"\u8eab\u4efd\u8bc1\u53f7",id:"\u8eab\u4efd\u8bc1\u53f7",children:[],level:2},{value:"\u5343\u5206\u4f4d",id:"\u5343\u5206\u4f4d",children:[],level:2},{value:"\u5224\u65adHEX 16\u8fdb\u5236\u989c\u8272",id:"\u5224\u65adhex-16\u8fdb\u5236\u989c\u8272",children:[],level:2},{value:"\u5224\u65adRGB, RGBA\u989c\u8272",id:"\u5224\u65adrgb-rgba\u989c\u8272",children:[],level:2},{value:"\u5224\u65adHSL, HSLA\u989c\u8272",id:"\u5224\u65adhsl-hsla\u989c\u8272",children:[],level:2},{value:"\u6a21\u677f",id:"\u6a21\u677f",children:[],level:2}],c={toc:i};function g(e){var n=e.components,p=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},c,p,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65e5\u5e38\u4f7f\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"},"\u65e5\u5e38\u4f7f\u7528\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8bb0\u5f55\u5de5\u4f5c\u3001\u5b66\u4e60\u6240\u4f7f\u7528\u5230\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"))),(0,l.kt)("h2",{id:"\u68c0\u6d4b\u5b57\u7b26\u4e32\u4e2d\u7279\u6b8a\u7b26\u53f7"},"\u68c0\u6d4b\u5b57\u7b26\u4e32\u4e2d\u7279\u6b8a\u7b26\u53f7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,l.kt)("p",null,"\u82f1\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/[~!@#$%^&*()/\\|,.<>?\"'();:_+-=\\[\\]{}\\s+]/\n")),(0,l.kt)("p",null,"\u4e2d\u6587\u7279\u6b8a\u5b57\u7b26"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/[`~!@#$^&*()=|{}':;',\\\\[\\\\].<>\\/?~\uff01@#\uffe5\u2026\u2026&*\uff08\uff09\u2014\u2014|{}\u3010\u3011\u2018\uff1b\uff1a\u201d\u201c'\u3002\uff0c\u3001\uff1f%+_\\s+]/ig\n")),(0,l.kt)("p",null,"\u82f1\u6587"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-special-symbol-us",src:a(57078).Z})),(0,l.kt)("p",null,"\u4e2d\u6587"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-special-symbol-zh",src:a(84343).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg = /[~!@#$%^&*()/\\|,.<>?\"'();:_+-=\\[\\]{}\\s+]/ig;\n'java -enableassertions -enablesystemassertions -classpath /usr/share/opentsdb/*.jar:/usr/share/opentsdb:/usr/share/opentsdb/bin:/usr/share/opentsdb/lib/async-1.4.0.jar:/usr/share/opentsdb/lib/asynchbase-1.7.2.jar:/usr/share/opentsdb/lib/commons-jexl-2.1.1.jar:/usr/share/opentsdb/lib/commons-logging-1.1.1.jar:/usr/share/opentsdb/lib/commons-math3-3.4.1.jar:/usr/share/opentsdb/lib/guava-18.0.jar:/usr/share/opentsdb/lib/jackson-annotations-2.4.3.jar:/usr/share/opentsdb/lib/jackson-core-2.4.3.jar:/usr/share/opentsdb/lib/jackson-databind-2.4.3.jar:/usr/share/opentsdb/lib/javacc-6.1.2.jar:/usr/share/opentsdb/lib/jgrapht-core-0.9.1.jar:/usr/share/opentsdb/lib/log4j-over-slf4j-1.7.7.jar:/usr/share/opentsdb/lib/logback-classic-1.0.13.jar:/usr/share/opentsdb/lib/logback-core-1.0.13.jar:/usr/share/opentsdb/lib/mysql-connector-java-5.1.39.jar:/usr/share/opentsdb/lib/netty-3.9.4.Final.jar:/usr/share/opentsdb/lib/protobuf-java-2.5.0.jar:/usr/share/opentsdb/lib/slf4j-api-1.7.7.jar:/usr/share/opentsdb/lib/tsdb-2.3.0.jar:/usr/share/opentsdb/lib/zookeeper-3.4.6.jar:/etc/opentsdb net.opentsdb.tools.TSDMain --port=4242 --staticroot=/usr/share/opentsdb/static --cachedir=/tmp/opentsdb --config=/etc/opentsdb/opentsdb.conf'.split(reg).join('')\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'\n"javaenableassertionsenablesystemassertionsclasspathusrshareopentsdbjarusrshareopentsdbusrshareopentsdbbinusrshareopentsdblibasyncjarusrshareopentsdblibasynchbasejarusrshareopentsdblibcommonsjexljarusrshareopentsdblibcommonsloggingjarusrshareopentsdblibcommonsmathjarusrshareopentsdblibguavajarusrshareopentsdblibjacksonannotationsjarusrshareopentsdblibjacksoncorejarusrshareopentsdblibjacksondatabindjarusrshareopentsdblibjavaccjarusrshareopentsdblibjgraphtcorejarusrshareopentsdbliblogjoverslfjjarusrshareopentsdbliblogbackclassicjarusrshareopentsdbliblogbackcorejarusrshareopentsdblibmysqlconnectorjavajarusrshareopentsdblibnettyFinaljarusrshareopentsdblibprotobufjavajarusrshareopentsdblibslfjapijarusrshareopentsdblibtsdbjarusrshareopentsdblibzookeeperjaretcopentsdbnetopentsdbtoolsTSDMainportstaticrootusrshareopentsdbstaticcachedirtmpopentsdbconfigetcopentsdbopentsdbconf"\n')),(0,l.kt)("h2",{id:"\u65e5\u671f\u9a8c\u8bc1"},"\u65e5\u671f\u9a8c\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5e74",(0,l.kt)("inlineCode",{parentName:"p"},"(/.-)"),"\u6708",(0,l.kt)("inlineCode",{parentName:"p"},"(/._)"),"\u65e5, \u5e38\u89c1\u95f4\u9694\u7b26\u5408",(0,l.kt)("inlineCode",{parentName:"p"},"[/.-]"),", \u683c\u5f0f",(0,l.kt)("inlineCode",{parentName:"p"},"YYYY(/.-)(M|MM)(/.-)(D|DD)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u95f0\u5e74: ",(0,l.kt)("strong",{parentName:"p"},"\u767e\u5e74\u4e0d\u95f0\uff0c\u56db\u767e\u5e74\u518d\u95f0"),"\uff0c\u6570\u5b66\u8ba1\u7b97\u65b9\u5f0f\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"Year/  400 === 0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\u6708\u7279\u6b8a\u6708\u4efd: \u95f0\u5e74",(0,l.kt)("inlineCode",{parentName:"p"},"29"),"\u5929\uff0c\u5e73\u5e74",(0,l.kt)("inlineCode",{parentName:"p"},"28"),"\u5929")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"1, 3, 5, 7, 8, 10, 12"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"31"),"\u5929")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"4, 6, 9, 11"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"30"),"\u5929")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b63\u5219\u8868\u8fbe\u5f0f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"# `MSDN`\u4e2d\u5b9a\u4e49\u7684`DateTime`\u5bf9\u8c61:\n/^(?:(?!0000)[0-9]{4}([-/.]?)(?:(?:0?[1-9]|1[0-2])\\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\\1(?:29|30)|(?:0?[13578]|1[02])\\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\\2(?:29))$/\n\n# `Unix`\u65f6\u95f4\u6233:\n/^(?:(?:1[6-9]|[2-9][0-9])[0-9]{2}([-/.]?)(?:(?:0?[1-9]|1[0-2])\\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\\1(?:29|30)|(?:0?[13578]|1[02])\\1(?:31))|(?:(?:1[6-9]|[2-9][0-9])(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)([-/.]?)0?2\\2(?:29))$/\n\n# \u65f6\u95f4`YYYY-MM-DD HH:mm:ss`:\n/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MSDN"),"\u4e2d\u5b9a\u4e49\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DateTime"),"\u5bf9\u8c61"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-date-msdn",src:a(27011).Z})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Unix"),"\u65f6\u95f4\u6233"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-date-unix",src:a(84036).Z})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD HH:mm:ss")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-date-ymd",src:a(44488).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg = /^(?:(?!0000)[0-9]{4}([-/.]?)(?:(?:0?[1-9]|1[0-2])\\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\\1(?:29|30)|(?:0?[13578]|1[02])\\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2\\2(?:29))$/\nvar dates = [\n    '2019-01-01',\n    '2019/01/01',\n    '2019-1-01',\n    '2019-01-1',\n    '2019-02-28',\n    '2019-02-29',\n    '1-01-01',\n    '2019-04-31',\n    '2019-11-07',\n];\ndates.map(date => {\n    console.log(date, reg.test(date));\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"2019-01-01 true\n2019/01/01 true\n2019-1-01 true\n2019-01-1 true\n2019-02-28 true\n2019-02-29 false\n1-01-01 false\n2019-04-31 false\n2019-11-07 true\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/lxcnn/article/details/4362500"},"\u6b63\u5219\u5e94\u7528\u4e4b\u2014\u2014\u65e5\u671f\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,l.kt)("h2",{id:"\u65f6\u95f4\u683c\u5f0f\u9a8c\u8bc1"},"\u65f6\u95f4\u683c\u5f0f\u9a8c\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("p",null,"24\u5c0f\u65f6"),(0,l.kt)("p",null,"12\u5c0f\u65f6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// 24h\n/^((?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$)/\n\n// 12\n/^(1[0-2]|0?[1-9]):[0-5]\\d:[0-5]\\d$/\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"24h")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-time-24",src:a(30572).Z})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"12h")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-time-12",src:a(72364).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg_12 = /^(1[0-2]|0?[1-9]):[0-5]\\d:[0-5]\\d$/;\nvar reg_24 = /^((?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$)/;\nvar times = [\n    '00:00:00',\n    '0:00:0',\n    '12:12:12',\n    '23:59:59',\n    '24:00:00',\n    '11:59:59',\n    '12:00:00',\n    '12:12:12',\n    '23:59:59',\n    '24:00:00',\n];\ntimes.map(time => {\n    console.log(time);\n    console.group();\n    console.log('reg_12', reg_12.test(time));\n    console.log('reg_24', reg_24.test(time));\n    console.groupEnd();\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"00:00:00\nconsole.group\nreg_12 false\nreg_24 true\n0:00:0\nconsole.group\nreg_12 false\nreg_24 false\n12:12:12\nconsole.group\nreg_12 true\nreg_24 true\n23:59:59\nconsole.group\nreg_12 false\nreg_24 true\n24:00:00\nconsole.group\nreg_12 false\nreg_24 false\n11:59:59\nconsole.group\nreg_12 true\nreg_24 true\n12:00:00\nconsole.group\nreg_12 true\nreg_24 true\n12:12:12\nconsole.group\nreg_12 true\nreg_24 true\n23:59:59\nconsole.group\nreg_12 false\nreg_24 true\n24:00:00\nconsole.group\nreg_12 false\nreg_24 false\n")),(0,l.kt)("h2",{id:"\u90ae\u7bb1\u683c\u5f0f\u9a8c\u8bc1"},"\u90ae\u7bb1\u683c\u5f0f\u9a8c\u8bc1"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u5934\uff1a\u4ee5\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u6ed1\u7ebf",(0,l.kt)("inlineCode",{parentName:"p"},"[_]"),"\u3001\u51cf\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"[-]"),"\uff0c\u5e76\u9700\u8981\u91cd\u590d\u4e00\u6b21\u81f3\u591a\u6b21\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e2d\u95f4\uff1a\u5fc5\u987b\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"p"},"@"),"\u7b26\u53f7\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"@"),"\u4e4b\u540e\u5230\u7ed3\u5c3e\uff0c\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u6ed1\u7ebf",(0,l.kt)("inlineCode",{parentName:"p"},"[_]"),"\u3001\u51cf\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"[-]"),"\uff0c\u5e76\u9700\u8981\u91cd\u590d\u4e00\u6b21\u81f3\u591a\u6b21\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7ed3\u5c3e\uff1a\u5fc5\u987b\u662f\u70b9\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"[.]"),"\u52a0\u5b57\u6bcd\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u8003\u8651\u4e2d\u6587\u3001\u4ee5\u53ca\u90ae\u7bb1\u57df\u540d\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b63\u5219\u8868\u8fbe\u5f0f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"}," /^\\w+([-_+.]+\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-email",src:a(51477).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg = /^\\w+([-_+.]+\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/;\nvar emails = [\n    '11@qq',\n    '11@qq.com',\n    'Rainy@qq.com',\n    'Rainy_123@qq.io',\n    'Rainy_123-+asd@qq.outlook.com',\n    'Rainy@qq.com.cn',\n    '.11@qq.com',\n    '_Rainy@qq.com',\n];\nemails.map(email => {\n    console.log(email, reg.test(email));\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"11@qq false\n11@qq.com true\nRainy@qq.com true\nRainy_123@qq.io true\nRainy_123-+asd@qq.outlook.com true\nRainy@qq.com.cn true\n.11@qq.com false\n_Rainy@qq.com true\n")),(0,l.kt)("p",null,"##\u624b\u673a\u53f7\u7801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("p",null,"\u7269\u8054\u7f51\u4e13\u7528\u53f7\u6bb5: \u7269"),(0,l.kt)("p",null,"\u536b\u661f\u7535\u8bdd\u4e13\u7528: \u536b"),(0,l.kt)("p",null,"\u865a\u62df\u8fd0\u8425\u5546\u53f7\u6bb5: \u865a"),(0,l.kt)("p",null,"\u4e09\u5927\u8fd0\u8425\u5546\u533a\u6bb5:"),(0,l.kt)("p",null,"\u79fb\u52a8:"),(0,l.kt)("p",null,"134, 135, 136, 137, 138, 139"),(0,l.kt)("p",null,"144(\u7269), 147, 148"),(0,l.kt)("p",null,"150, 151, 152, 157, 158, 159"),(0,l.kt)("p",null,"165(\u865a)"),(0,l.kt)("p",null,"1703(\u865a), 1705(\u865a), 1706(\u865a), 178"),(0,l.kt)("p",null,"182, 183, 184, 187, 188"),(0,l.kt)("p",null,"198"),(0,l.kt)("p",null,"\u8054\u901a:"),(0,l.kt)("p",null,"130, 131, 132"),(0,l.kt)("p",null,"140(\u7269), 145, 146"),(0,l.kt)("p",null,"155, 156"),(0,l.kt)("p",null,"166, 167(\u865a)"),(0,l.kt)("p",null,"1704(\u865a), 1707(\u865a), 1708(\u865a), 1709(\u865a), 171(\u865a), 175, 176"),(0,l.kt)("p",null,"185, 186"),(0,l.kt)("p",null,"\u7535\u4fe1:"),(0,l.kt)("p",null,"133, 1349"),(0,l.kt)("p",null,"141(\u7269), 149"),(0,l.kt)("p",null,"153"),(0,l.kt)("p",null,"1700(\u865a), 1701(\u865a), 1702(\u865a),173,  1740(\u536b), 177"),(0,l.kt)("p",null,"180, 181, 189"),(0,l.kt)("p",null,"191, 199"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"2019_phone_numbers",src:a(3040).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u4e25\u683c\u6a21\u5f0f\u4e0b\n/^1((3[\\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\\d])|(9[1,8,9]))\\d{8}$/\n// \u5bbd\u677e\u6a21\u5f0f\u4e0b\n/^1([3-9])\\d{9}$/\n")),(0,l.kt)("p",null,"\u4e25\u683c\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-phone-number-s",src:a(48904).Z})),(0,l.kt)("p",null,"\u5bbd\u677e\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-phone-number",src:a(14442).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg_loose = /^1([3-9])\\d{9}$/;\nvar reg_strict = /^1((3[\\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\\d])|(9[1,8,9]))\\d{8}$/;\nvar phonenumbers = [\n    '10123456775',\n    '11123456775',\n    '12345678910',\n    '13123456775',\n    '14123456775',\n    '15123456775',\n    '16123456775',\n    '17345678910',\n    '18123456775',\n    '19123456775',\n];\nphonenumbers.map(phonenumber => {\n    console.log(phonenumber)\n    console.group();\n    console.log('reg_loose', reg_loose.test(phonenumber));\n    console.log('reg_strict', reg_strict.test(phonenumber));\n    console.groupEnd();\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"10123456775\nconsole.group\nreg_loose false\nreg_strict false\n11123456775\nconsole.group\nreg_loose false\nreg_strict false\n12345678910\nconsole.group\nreg_loose false\nreg_strict false\n13123456775\nconsole.group\nreg_loose true\nreg_strict true\n14123456775\nconsole.group\nreg_loose true\nreg_strict false\n15123456775\nconsole.group\nreg_loose true\nreg_strict true\n16123456775\nconsole.group\nreg_loose true\nreg_strict false\n17345678910\nconsole.group\nreg_loose true\nreg_strict true\n18123456775\nconsole.group\nreg_loose true\nreg_strict true\n19123456775\nconsole.group\nreg_loose true\nreg_strict true\n")),(0,l.kt)("h2",{id:"\u8eab\u4efd\u8bc1\u53f7"},"\u8eab\u4efd\u8bc1\u53f7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u4ee3 15\u4f4d: 6\u4f4d\u5730\u533a\u7801\uff0c6\u4f4d\u751f\u65e5\uff0c3\u4f4d\u987a\u5e8f\u7801")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e8c\u4ee318\u4f4d\uff0c\u6700\u540e\u4e00\u4f4d\u53ef\u80fd\u4e3a\u6570\u5b57\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"X"),": 6\u4f4d\u5730\u533a\u7801\uff0c8\u4f4d\u751f\u65e5\uff0c3\u4f4d\u987a\u5e8f\u7801, 1\u4f4d\u6821\u9a8c\u7801")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u540c\u65f6\u5339\u914d"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// 15\n/^\\d{8}(0\\d|11|12)(0[1-9]|[1-2]\\d|30|31)\\d{3}$/\n\n// 18\n/^\\d{6}(18|19|20)\\d{2}(0\\d|11|12)(0[1-9]|[1-2]\\d|30|31)\\d{3}(\\d|X|x)$/\n                                                      \n// 15 | 18\n/(^\\d{8}(0\\d|11|12)(0[1-9]|[1-2]\\d|30|31)\\d{3}$)|(^\\d{6}(18|19|20)\\d{2}(0\\d|11|12)(0[1-9]|[1-2]\\d|30|31)\\d{3}(\\d|X|x)$)/\n")),(0,l.kt)("p",null,"15\u4f4d"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-id-card-15",src:a(40159).Z})),(0,l.kt)("p",null,"18\u4f4d"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-id-card-18",src:a(55244).Z})),(0,l.kt)("p",null,"15 & 18\u4f4d"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-id-card-15-18",src:a(93449).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg_15 = /^\\d{8}(0\\d|11|12)(0[1-9]|[1-2]\\d|30|31)\\d{3}$/\nvar reg_18 = /^\\d{6}(18|19|20)\\d{2}(0\\d|11|12)(0[1-9]|[1-2]\\d|30|31)\\d{3}(\\d|X|x)$/\nvar reg_15_18 = /(^\\d{8}(0\\d|11|12)(0[1-9]|[1-2]\\d|30|31)\\d{3}$)|(^\\d{6}(18|19|20)\\d{2}(0\\d|11|12)(0[1-9]|[1-2]\\d|30|31)\\d{3}(\\d|X|x)$)/\nvar id_numbers = [\n    '345678001100234',\n    '345678991100234',\n    '345678001101234',\n    '345678991101234',\n    '345678991101234',\n    '345678199911002345',\n    '345678119911002345',\n    '345678199911012345',\n    '34567819991101234x',\n    '34567819991101234X',\n];\nid_numbers.map(id_number => {\n    console.log(id_number)\n    console.group();\n    console.log('reg_15', reg_15.test(id_number));\n    console.log('reg_18', reg_18.test(id_number));\n    console.log('reg_15_18', reg_15_18.test(id_number));\n    console.groupEnd();\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"345678001100234\nconsole.group\nreg_15 false\nreg_18 false\nreg_15_18 false\n345678991100234\nconsole.group\nreg_15 false\nreg_18 false\nreg_15_18 false\n345678001101234\nconsole.group\nreg_15 true\nreg_18 false\nreg_15_18 true\n345678991101234\nconsole.group\nreg_15 true\nreg_18 false\nreg_15_18 true\n345678991101234\nconsole.group\nreg_15 true\nreg_18 false\nreg_15_18 true\n345678199911002345\nconsole.group\nreg_15 false\nreg_18 false\nreg_15_18 false\n345678119911002345\nconsole.group\nreg_15 false\nreg_18 false\nreg_15_18 false\n345678199911012345\nconsole.group\nreg_15 false\nreg_18 true\nreg_15_18 true\n34567819991101234x\nconsole.group\nreg_15 false\nreg_18 true\nreg_15_18 true\n34567819991101234X\nconsole.group\nreg_15 false\nreg_18 true\nreg_15_18 true\n")),(0,l.kt)("h2",{id:"\u5343\u5206\u4f4d"},"\u5343\u5206\u4f4d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b63\u5219\u8868\u8fbe\u5f0f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"}," /(\\d{1,3})(?=(\\d{3})+(?:$|\\.))/g\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-thousands",src:a(78167).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg = /(\\d{1,3})(?=(\\d{3})+(?:$|\\.))/g;\nvar numbers = [\n    123,\n    123456,\n    1234123256,\n    1234123256.23,\n    123412345434.543,\n    1233456345643.45434,\n    1234123454345434.5562,\n    123345634564345434.1232,\n    '1234qweqw56',\n    '1234qwe56',\n    '1234wqeqw56',\n];\nnumbers.map(number => {\n    var val = (number + '').replace(reg, '$1,');\n    console.log(number, reg.test(number), val);\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'123 false "123"\n123456 true "123,456"\n1234123256 true "1,234,123,256"\n1234123256.23 true "1,234,123,256.23"\n123412345434.543 true "123,412,345,434.543"\n1233456345643.4543 true "1,233,456,345,643.4,543"\n1234123454345434.5 true "1,234,123,454,345,434.5"\n123345634564345440 true "123,345,634,564,345,440"\n1234qweqw56 false 1234qweqw56\n1234qwe56 false 1234qwe56\n1234wqeqw56 false 1234wqeqw56\n')),(0,l.kt)("h2",{id:"\u5224\u65adhex-16\u8fdb\u5236\u989c\u8272"},"\u5224\u65adHEX 16\u8fdb\u5236\u989c\u8272"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"16\u8fdb\u5236"),(0,l.kt)("li",{parentName:"ol"},"\u4e24\u4e24\u76f8\u7b49\u53ef\u4ee5\u7f29\u5199"),(0,l.kt)("li",{parentName:"ol"},"A-F",(0,l.kt)("inlineCode",{parentName:"li"},"+"),"0-9`"),(0,l.kt)("li",{parentName:"ol"},"\u4e09\u4f4d\u6216\u8005\u516d\u4f4d"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u533a\u5206\u5927\u5c0f\u5199")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6b63\u5219\u8868\u8fbe\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// 1\n/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/\n\n// 2\n/(^#[\\dA-F]{6}$)|(^#[\\dA-F]{3}$)/i\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-rgb",src:a(50161).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// 1\nvar reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;\nvar colors = [\n    '123',\n    '123456',\n    '#ff00ff',\n    '#f0f',\n    '#FF00FF',\n    '#F0F',\n    '#123456',\n    '#FFFFFG',\n];\ncolors.map(color => {\n    console.log(color, reg.test(color));\n});\n\n// 2\nvar reg = /(^#[\\dA-F]{6}$)|(^#[\\dA-F]{3}$)/i;\nvar colors = [\n    'FFF',\n    '#fsa',\n    '#FFF',\n    '#fff',\n    '#FFF000',\n    '#fff123',\n    '#adf123',\n];\ncolors.map(color => {\n    console.log(color, reg.test(color));\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// 1\n123 true\n123456 true\n#ff00ff true\n#f0f true\n#FF00FF true\n#F0F true\n#123456 true\n#FFFFFG false\n// 2\nFFF false\n#fsa false\n#FFF true\n#fff true\n#FFF000 true\n#fff123 true\n#adf123 true\n")),(0,l.kt)("h2",{id:"\u5224\u65adrgb-rgba\u989c\u8272"},"\u5224\u65adRGB, RGBA\u989c\u8272"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"rgb("),"\u6216\u8005",(0,l.kt)("inlineCode",{parentName:"p"},"rgba"),"\u5f00\u5934, \u4e0d\u533a\u5206\u5927\u5c0f\u5199")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"r"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"g"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," \u503c\u8303\u56f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"[0-255]"),", \u6bcf\u4e00\u4e2a\u503c\u540e\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},","),"\u524d\u540e\u53ef\u63a5",(0,l.kt)("inlineCode",{parentName:"p"},"0-n"),"\u4e2a\u7a7a\u683c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"a")," \u503c\u8303\u56f4 ",(0,l.kt)("inlineCode",{parentName:"p"},"[0-1]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"a < 1"),"\u65f6\u53ef\u7701\u7565 ",(0,l.kt)("inlineCode",{parentName:"p"},"0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b63\u5219\u8868\u8fbe\u5f0f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// 1\n// rgb\n/^rgb\\(((\\d{1,2}|1\\d{2}|2([0-4]\\d|5[0-5]))\\s*,\\s*){2}((\\d{1,2}|1\\d\\d|2([0-4]\\d|5[0-5]))\\s*)\\)$/i\n// rgba\n/^rgba\\(((\\d{1,2}|1\\d{2}|2([0-4]\\d|5[0-5]))\\s*,\\s*){2}((\\d{1,2}|1\\d\\d|2([0-4]\\d|5[0-5]))\\s*)(,\\s*(0?\\.\\d+|1|0)+)+\\)$/i\n\n// Group\n// rgb\n/^rgb\\(((\\d{1,2}|1\\d{2}|2([0-4]\\d|5[0-5]))(\\s*,\\s*)){2}\\2\\)$/i\n// rgba\n/^rgba\\(((\\d{1,2}|1\\d{2}|2([0-4]\\d|5[0-5]))(\\s*,\\s*)){2}\\2\\4+(0?\\.\\d+|1|0)+\\)$/i\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RGB")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-rgb",src:a(33133).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Group")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-rgb-group",src:a(47798).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"RGBA")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-rgba",src:a(91128).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Group")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-rgba-group",src:a(9201).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg = /^rgba\\(((\\d{1,2}|1\\d{2}|2([0-4]\\d|5[0-5]))\\s*,\\s*){2}((\\d{1,2}|1\\d\\d|2([0-4]\\d|5[0-5]))\\s*)(,\\s*(0?\\.\\d+|1|0)+)+\\)$/i;\nvar colors = [\n    'rgba(0, 0, 0, 1)',\n    'rgba(255, 0, 0, 1)',\n    'rgba(0, 255, 0, 1)',\n    'rgba(0, 0, 255, 1)',\n    'rgba(256, 0, 0, 1)',\n    'rgba(0, 256, 0, 1)',\n    'rgba(0, 0, 256, 1)',\n    'rgba(255, 255, 255, 0)',\n    'rgba(0, 255, 0, 0.2)',\n    'rgba(0, 255, 0, .2)',\n    'rgba(255, 255, 255)',\n    'rgba(255, 255, 255, )',\n    'RGBA(0, 0, 255, 1)',\n    'RGBA(0, 255, 0, 0.2)',\n    'RGBA(0, 255, 0, .2)',\n    'RGBA(0, 255, 0, )',\n];\ncolors.map(color => {\n    console.log(color, reg.test(color));\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"rgba(0, 0, 0, 1) true\nrgba(255, 0, 0, 1) true\nrgba(0, 255, 0, 1) true\nrgba(0, 0, 255, 1) true\nrgba(256, 0, 0, 1) false\nrgba(0, 256, 0, 1) false\nrgba(0, 0, 256, 1) false\nrgba(255, 255, 255, 0) true\nrgba(0, 255, 0, 0.2) true\nrgba(0, 255, 0, .2) true\nrgba(255, 255, 255) false\nrgba(255, 255, 255, ) false\nRGBA(0, 0, 255, 1) true\nRGBA(0, 255, 0, 0.2) true\nRGBA(0, 255, 0, .2) true\nRGBA(0, 255, 0, ) false\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.zhangxinxu.com/wordpress/2010/03/javascript-hex-rgb-hsl-color-convert/"},"JS HEX\u5341\u516d\u8fdb\u5236\u4e0eRGB, HSL\u989c\u8272\u7684\u76f8\u4e92\u8f6c\u6362")),(0,l.kt)("h2",{id:"\u5224\u65adhsl-hsla\u989c\u8272"},"\u5224\u65adHSL, HSLA\u989c\u8272"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Hue(\u8272\u8c03)")," \u53d6\u503c\u8303\u56f4",(0,l.kt)("inlineCode",{parentName:"p"},"[0-360]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Saturation(\u9971\u548c\u5ea6)")," \u53d6\u503c\u8303\u56f4",(0,l.kt)("inlineCode",{parentName:"p"},"[0%-100%]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Lightness (\u4eae\u5ea6)"),"  \u53d6\u503c\u8303\u56f4",(0,l.kt)("inlineCode",{parentName:"p"},"[0%-100%]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"alpha (\u900f\u660e\u5ea6)")," \u53d6\u503c\u8303\u56f4",(0,l.kt)("inlineCode",{parentName:"p"},"[0-1]"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b63\u5219\u8868\u8fbe\u5f0f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// HSL\n/^hsl\\(\\s*((\\d{1,2}|[1-2]\\d{2}|3([0-5]\\d|60)))\\s*,(\\s*(((\\d{1,2}|100)%)|0)\\s*,)(\\s*(((\\d{1,2}|100)%)|0)\\s*)\\)$/i\n\n// HSLA\n/^hsla\\(\\s*((\\d{1,2}|[1-2]\\d{2}|3([0-5]\\d|60)))\\s*,(\\s*(((\\d{1,2}|100)%)|0)\\s*,){2}\\s*(0?\\.\\d+|1|0)\\)$/i\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"HSL")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-rgba-group",src:a(21257).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"HSLA")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"reg-rgba-group",src:a(98326).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var reg = /^hsla\\(\\s*((\\d{1,2}|[1-2]\\d{2}|3([0-5]\\d|60)))\\s*,(\\s*(((\\d{1,2}|100)%)|0)\\s*,){2}\\s*(0?\\.\\d+|1|0)\\)$/i;\nvar colors = [\n    'hsla(0, 0, 0, 1)',\n    'hsla(360, 0, 0, 1)',\n    'hsla(0, 100%, 0, 1)',\n    'hsla(0, 0, 100%, 1)',\n    'hsla(361, 0, 0, 1)',\n    'hsla(0, 101%, 0, 1)',\n    'hsla(0, 0, 101%, 1)',\n    'hsla(360, 100%, 100%, 1)',\n    'hsla(0, 100%, 0, 0.2)',\n    'hsla(0, 100%, 0, .2)',\n    'hsla(360, 100%, 100%)',\n    'hsla(255, 100%, 100%, )',\n    'HSLA(0, 0, 100%, 1)',\n    'HSLA(0, 100%, 0, 0.2)',\n    'HSLA(0, 100%, 0, .2)',\n    'HSLA(0, 100%, 0, )',\n];\ncolors.map(color => {\n    console.log(color, reg.test(color));\n});\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"hsla(0, 0, 0, 1) true\nhsla(360, 0, 0, 1) true\nhsla(0, 100%, 0, 1) true\nhsla(0, 0, 100%, 1) true\nhsla(361, 0, 0, 1) false\nhsla(0, 101%, 0, 1) false\nhsla(0, 0, 101%, 1) false\nhsla(360, 100%, 100%, 1) true\nhsla(0, 100%, 0, 0.2) true\nhsla(0, 100%, 0, .2) true\nhsla(360, 100%, 100%) false\nhsla(255, 100%, 100%, ) false\nHSLA(0, 0, 100%, 1) true\nHSLA(0, 100%, 0, 0.2) true\nHSLA(0, 100%, 0, .2) true\nHSLA(0, 100%, 0, ) false\n")),(0,l.kt)("h2",{id:"\u6a21\u677f"},"\u6a21\u677f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5339\u914d\u89c4\u5219")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6b63\u5219\u8868\u8fbe\u5f0f"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"")),(0,l.kt)("h2",{id:""}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jex.im/regulex"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u53ef\u89c6\u5316 1")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://regex101.com/"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u53ef\u89c6\u5316 2")))}g.isMDXComponent=!0},3040:function(e,n,a){n.Z=a.p+"assets/images/2019_phone_numbers-b157a6777945ea65a7d8d3e5e4e4928f.png"},27011:function(e,n,a){n.Z=a.p+"assets/images/reg-date-msdn-b2e7488b6a97ceffcb2e911e9da3b46a.png"},84036:function(e,n,a){n.Z=a.p+"assets/images/reg-date-unix-b16672924df069388eccd00383645423.png"},44488:function(e,n,a){n.Z=a.p+"assets/images/reg-date-ymd-09748ae97ad3c62af9c170ef2a449e48.png"},51477:function(e,n,a){n.Z=a.p+"assets/images/reg-email-aae8ceb9374d8c2370be4c18e8729e26.png"},50161:function(e,n,a){n.Z=a.p+"assets/images/reg-hex-a9165d95157aeaf4aad82b76adee75b2.png"},21257:function(e,n,a){n.Z=a.p+"assets/images/reg-hsl-87be6b989fafe542a8de7bd92edc3d28.png"},98326:function(e,n,a){n.Z=a.p+"assets/images/reg-hsla-2e26f945d3e0c6d7734f7a219a43bebd.png"},93449:function(e,n,a){n.Z=a.p+"assets/images/reg-id-card-15-18-6f3c001fea1413fadf4d4e0cd9056a32.png"},40159:function(e,n,a){n.Z=a.p+"assets/images/reg-id-card-15-c822e011b6dc6abfc7374233f3665372.png"},55244:function(e,n,a){n.Z=a.p+"assets/images/reg-id-card-18-aa6707cd439f7e56c4e9af95efe4c2bb.png"},48904:function(e,n,a){n.Z=a.p+"assets/images/reg-phone-number-s-3451b760c224a5cb10b3b95dc2f847a1.png"},14442:function(e,n,a){n.Z=a.p+"assets/images/reg-phone-number-90261431e69662d03dc2664569bc0633.png"},47798:function(e,n,a){n.Z=a.p+"assets/images/reg-rgb-group-24e2578b883142806fa223af23a462a3.png"},33133:function(e,n,a){n.Z=a.p+"assets/images/reg-rgb-a44a0fc52002bfc13aff56f6f3c23bcf.png"},9201:function(e,n,a){n.Z=a.p+"assets/images/reg-rgba-group-c15f6b9b1382bd388dbad87ebdf63e2f.png"},91128:function(e,n,a){n.Z=a.p+"assets/images/reg-rgba-cfda0c05c96872ccbc6bec152ef83ad1.png"},57078:function(e,n,a){n.Z=a.p+"assets/images/reg-special-symbol-us-82f4d6a51eeeb55c9dfd8c7789d009b3.png"},84343:function(e,n,a){n.Z=a.p+"assets/images/reg-special-symbol-zh-beacaccdc384e2343ee1bc093edcb66e.png"},78167:function(e,n,a){n.Z=a.p+"assets/images/reg-thousands-484d17eb5c7b50d74525f9d4f405ba90.png"},72364:function(e,n,a){n.Z=a.p+"assets/images/reg-time-12-6a25df28e86774ade2d5cc4cd1852d15.png"},30572:function(e,n,a){n.Z=a.p+"assets/images/reg-time-24-a51fc8635a114d51ec1924ec2fa48e61.png"}}]);