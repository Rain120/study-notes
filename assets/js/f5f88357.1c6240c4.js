"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[7123],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51753:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={sidebar_position:5},s=void 0,c={unversionedId:"react/hooks/useMemo",id:"react/hooks/useMemo",title:"useMemo",description:"\u4f5c\u7528: \u6709\u52a9\u4e8e\u907f\u514d\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u90fd\u8fdb\u884c\u9ad8\u5f00\u9500\u7684\u8ba1\u7b97\u3002",source:"@site/fe/react/hooks/useMemo.md",sourceDirName:"react/hooks",slug:"/react/hooks/useMemo",permalink:"/study-notes/fe/react/hooks/useMemo",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646190597,formattedLastUpdatedAt:"3/2/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"useImperativeHandle",permalink:"/study-notes/fe/react/hooks/useImperativeHandle"},next:{title:"useRef",permalink:"/study-notes/fe/react/hooks/useRef"}},u=[],l={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f5c\u7528: \u6709\u52a9\u4e8e\u907f\u514d\u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u90fd\u8fdb\u884c\u9ad8\u5f00\u9500\u7684\u8ba1\u7b97\u3002"),(0,o.kt)("p",null,"\u53c2\u6570: ",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u51fd\u6570"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u9879\u6570\u7ec4"),", \u5b83\u4ec5\u4f1a\u5728\u67d0\u4e2a\u4f9d\u8d56\u9879\u6539\u53d8\u65f6\u624d\u91cd\u65b0\u8ba1\u7b97 ",(0,o.kt)("inlineCode",{parentName:"p"},"memoized")," \u503c\u3002"),(0,o.kt)("p",null,"\u8fd4\u56de: \u8fd4\u56de\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Memoization"},"memoized")," \u503c\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," \u7684\u51fd\u6570\u4f1a",(0,o.kt)("strong",{parentName:"p"},"\u5728\u6e32\u67d3\u671f\u95f4\u6267\u884c"),", \u6240\u4ee5\u4e3a\u4e86\u907f\u514d\u4e00\u4e9b\u6ca1\u5fc5\u8981\u91cd\u590d\u6267\u884c\u7684\u65b9\u6cd5, \u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\u3002\u8bf7\u4e0d\u8981\u5728\u8fd9\u4e2a\u51fd\u6570\u5185\u90e8\u6267\u884c\u4e0e\u6e32\u67d3\u65e0\u5173\u7684\u64cd\u4f5c\uff0c\u8bf8\u5982\u526f\u4f5c\u7528\u8fd9\u7c7b\u7684\u64cd\u4f5c\u5c5e\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7684\u9002\u7528\u8303\u7574\uff0c\u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\u4f9d\u8d56\u9879\u6570\u7ec4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," \u5728\u6bcf\u6b21\u6e32\u67d3\u65f6\u90fd\u4f1a\u8ba1\u7b97\u65b0\u7684\u503c\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," \u4f5c\u4e3a\u6027\u80fd\u4f18\u5316\u7684\u624b\u6bb5\uff0c\u4f46\u4e0d\u8981\u628a\u5b83\u5f53\u6210\u8bed\u4e49\u4e0a\u7684\u4fdd\u8bc1\u3002"))),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n")))))}m.isMDXComponent=!0}}]);