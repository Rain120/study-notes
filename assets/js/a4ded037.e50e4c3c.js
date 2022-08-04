"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6793],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59996:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});n(59496);var r=n(49613);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={sidebar_position:5},u=void 0,l={unversionedId:"react/hooks/useRef",id:"react/hooks/useRef",title:"useRef",description:"\u53c2\u6570: null or DOM , \u7528\u6765\u521d\u59cb\u5316ref\u5bf9\u8c61\u7684 .current \u5c5e\u6027\u3002",source:"@site/fe/react/hooks/useRef.md",sourceDirName:"react/hooks",slug:"/react/hooks/useRef",permalink:"/study-notes/fe/react/hooks/useRef",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"Dec 3, 2021",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"useMemo",permalink:"/study-notes/fe/react/hooks/useMemo"},next:{title:"useCustom",permalink:"/study-notes/fe/react/hooks/useCustom"}},c={},s=[{value:"useRef vs createRef",id:"useref-vs-createref",level:4}],p={toc:s};function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53c2\u6570: ",(0,r.kt)("inlineCode",{parentName:"p"},"null or DOM")," , \u7528\u6765\u521d\u59cb\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"ref"),"\u5bf9\u8c61\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".current")," \u5c5e\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRef")," \u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref \u5bf9\u8c61"),"\u3002",(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"ref")," \u5bf9\u8c61\u5728\u7ec4\u4ef6\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u5185\u4fdd\u6301\u4e0d\u53d8, \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"React.createRef")," \uff0c\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u90fd\u4f1a\u91cd\u65b0\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"strong"},"ref"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'function TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => {\n    // `current` \u6307\u5411\u5df2\u6302\u8f7d\u5230 DOM \u4e0a\u7684\u6587\u672c\u8f93\u5165\u5143\u7d20\n    inputEl.current.focus();\n  };\n  return (\n    <>\n      <input ref={inputEl} type="text" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," \u5bf9\u8c61\u5185\u5bb9\u53d1\u751f\u53d8\u5316\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"useRef")," \u5e76",(0,r.kt)("em",{parentName:"li"},"\u4e0d\u4f1a"),"\u901a\u77e5\u4f60\u3002\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"li"},"ref.current")," \u4e0d\u4f1a\u5f15\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002\u5982\u679c\u60f3\u8981\u5728 React \u7ed1\u5b9a\u6216\u89e3\u7ed1 DOM \u8282\u70b9\u7684 ref \u65f6\u8fd0\u884c\u67d0\u4e9b\u4ee3\u7801\uff0c\u5219\u9700\u8981\u4f7f\u7528",(0,r.kt)("a",o({parentName:"li"},{href:"https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node"}),"\u56de\u8c03 ref")," \u6765\u5b9e\u73b0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useRef")," \u5728\u6e32\u67d3\u5468\u671f\u5185\u6c38\u8fdc\u4e0d\u53d8\uff0c\u6240\u4ee5\u53ef\u4ee5\u7528\u6765\u5f15\u7528\u67d0\u4e9b\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"React")," \u5143\u7d20\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"React.createRef")," \u3002")),(0,r.kt)("h4",o({},{id:"useref-vs-createref"}),"useRef vs createRef"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useRef")," \u53ea\u80fd\u7528\u4e8e ",(0,r.kt)("strong",{parentName:"li"},"\u51fd\u6570\u7ec4\u4ef6"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"createRef")," \u53ef\u4ee5\u7528\u5728\u7c7b\u7ec4\u4ef6\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useRef")," \u5728\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u540e\u90fd\u4fdd\u6301\u4e0d\u53d8\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"createRef")," \u6bcf\u6b21\u90fd\u4f1a\u53d1\u751f\u53d8\u5316\u3002")))}f.isMDXComponent=!0}}]);