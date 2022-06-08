"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5367],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25447:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(45443),o=n(13010),a=(n(59496),n(49613)),i=["components"],p={sidebar_position:3},u=void 0,c={unversionedId:"react/hooks/useContext",id:"react/hooks/useContext",title:"useContext",description:"\u5171\u4eab\u72b6\u6001\u94a9\u5b50",source:"@site/fe/react/hooks/useContext.md",sourceDirName:"react/hooks",slug:"/react/hooks/useContext",permalink:"/study-notes/fe/react/hooks/useContext",draft:!1,tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"useCallback",permalink:"/study-notes/fe/react/hooks/useCallback"},next:{title:"forwardRef",permalink:"/study-notes/fe/react/hooks/forwardRef"}},l={},s=[],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5171\u4eab\u72b6\u6001\u94a9\u5b50"),(0,a.kt)("p",null,"\u53c2\u6570: \u63a5\u6536\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"context")," \u5bf9\u8c61"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"React.createContext")," \u7684\u8fd4\u56de\u503c\uff09"),(0,a.kt)("p",null,"\u8fd4\u56de: \u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u7684\u5f53\u524d\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 \u5f53\u524d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u503c\u7531\u4e0a\u5c42\u7ec4\u4ef6\u4e2d\u8ddd\u79bb\u5f53\u524d\u7ec4\u4ef6\u6700\u8fd1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," ",(0,a.kt)("inlineCode",{parentName:"p"},"prop")," \u51b3\u5b9a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext(MyContext)")," \u76f8\u5f53\u4e8e class \u7ec4\u4ef6\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"static contextType = MyContext")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyContext.Consumer>"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 ",(0,a.kt)("inlineCode",{parentName:"p"},"useContext(MyContext)")," \u53ea\u662f\u8ba9\u4f60\u80fd\u591f",(0,a.kt)("em",{parentName:"p"},"\u8bfb\u53d6")," ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u7684\u503c\u4ee5\u53ca\u8ba2\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u7684\u53d8\u5316\u3002\u4f60\u4ecd\u7136\u9700\u8981\u5728\u4e0a\u5c42\u7ec4\u4ef6\u6811\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," \u6765\u4e3a\u4e0b\u5c42\u7ec4\u4ef6",(0,a.kt)("em",{parentName:"p"},"\u63d0\u4f9b")," ",(0,a.kt)("inlineCode",{parentName:"p"},"context")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const themes = {\n  light: {\n    foreground: "#000000",\n    background: "#eeeeee"\n  },\n  dark: {\n    foreground: "#ffffff",\n    background: "#222222"\n  }\n};\n\nconst ThemeContext = React.createContext(themes.light);\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value={themes.dark}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar(props) {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n\n  return (\n    <button style={{ background: theme.background, color: theme.foreground }}>\n      I am styled by theme context!\n    </button>\n  );\n}\n')))}d.isMDXComponent=!0}}]);