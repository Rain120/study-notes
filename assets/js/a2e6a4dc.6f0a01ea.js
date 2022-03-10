"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1188],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],p={sidebar_position:2},s=void 0,c={unversionedId:"react/hooks/useEffect",id:"react/hooks/useEffect",title:"useEffect",description:"Effect Hook \u53ef\u4ee5\u8ba9\u4f60\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u6267\u884c\u526f\u4f5c\u7528(\u6307\u90a3\u4e9b\u6ca1\u6709\u53d1\u751f\u5728\u6570\u636e\u5411\u89c6\u56fe\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u7684\u903b\u8f91)\u64cd\u4f5c\u3002",source:"@site/fe/react/hooks/useEffect.md",sourceDirName:"react/hooks",slug:"/react/hooks/useEffect",permalink:"/study-notes/fe/react/hooks/useEffect",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1646902378,formattedLastUpdatedAt:"3/10/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"useState",permalink:"/study-notes/fe/react/hooks/useState"},next:{title:"useLayoutEffect",permalink:"/study-notes/fe/react/hooks/useLayoutEffect"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Effect Hook")," \u53ef\u4ee5\u8ba9\u4f60\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u6267\u884c\u526f\u4f5c\u7528",(0,r.kt)("strong",{parentName:"p"},"(\u6307\u90a3\u4e9b\u6ca1\u6709\u53d1\u751f\u5728\u6570\u636e\u5411\u89c6\u56fe\u8f6c\u6362\u8fc7\u7a0b\u4e2d\u7684\u903b\u8f91)"),"\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u4f5c\u7528: \u7ed9\u51fd\u6570\u7ec4\u4ef6\u589e\u52a0\u4e86\u64cd\u4f5c\u526f\u4f5c\u7528\u7684\u80fd\u529b\u3002",(0,r.kt)("strong",{parentName:"p"},"React \u4fdd\u8bc1\u4e86\u6bcf\u6b21\u8fd0\u884c effect \u7684\u540c\u65f6\uff0cDOM \u90fd\u5df2\u7ecf\u66f4\u65b0\u5b8c\u6bd5\u3002")),(0,r.kt)("p",null,"\u5206\u7c7b:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u6e05\u9664\u7684"),(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u6e05\u9664\u7684")),(0,r.kt)("p",null,"\u53c2\u6570:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5904\u7406\u526f\u4f5c\u7528\u7684\u51fd\u6570",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"li"},"\u80fd\u6e05\u9664\u526f\u4f5c\u7528\u7684\u51fd\u6570"),",",(0,r.kt)("inlineCode",{parentName:"li"},"React")," \u4f1a\u5728\u7ec4\u4ef6\u5378\u8f7d\u7684\u65f6\u5019\u6267\u884c\u6e05\u9664\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u8fd4\u56de\u4efb\u4f55\u5185\u5bb9"))),(0,r.kt)("li",{parentName:"ol"},"\u4f9d\u8d56\u9879\u6570\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"li"},"deps"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect\u5bf9\u5e94\u7740 class")," \u7ec4\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," \u548c  ",(0,r.kt)("inlineCode",{parentName:"p"},"componentWillUnmount"),"\uff0c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Effect Hooks"),"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," \u4e0d\u540c\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u8c03\u5ea6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"effect")," \u4e0d\u4f1a\u963b\u585e\u6d4f\u89c8\u5668\u66f4\u65b0\u5c4f\u5e55\uff0c\u8fd9\u8ba9\u4f60\u7684\u5e94\u7528\u770b\u8d77\u6765\u54cd\u5e94\u66f4\u5feb\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"effect")," \u4e0d\u9700\u8981\u540c\u6b65\u5730\u6267\u884c\u3002\u5728\u4e2a\u522b\u60c5\u51b5\u4e0b\uff08\u4f8b\u5982\u6d4b\u91cf\u5e03\u5c40\uff09\uff0c\u6709\u5355\u72ec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect"},(0,r.kt)("inlineCode",{parentName:"a"},"useLayoutEffect"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook")," \u4f9b\u4f60\u4f7f\u7528\uff0c\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u76f8\u540c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  // Similar to componentDidMount and componentDidUpdate:\n  useEffect(() => {\n    // Update the document title using the browser API\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528Tips")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2705 \u4f7f\u7528\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Effect")," \u5b9e\u73b0\u5173\u6ce8\u70b9\u5206\u79bb"),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 Hook \u5176\u4e2d\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/hooks-intro.html#complex-components-become-hard-to-understand"},"\u76ee\u7684"),"\u5c31\u662f\u8981\u89e3\u51b3 class \u4e2d\u751f\u547d\u5468\u671f\u51fd\u6570\u7ecf\u5e38\u5305\u542b\u4e0d\u76f8\u5173\u7684\u903b\u8f91\uff0c\u4f46\u53c8\u628a\u76f8\u5173\u903b\u8f91\u5206\u79bb\u5230\u4e86\u51e0\u4e2a\u4e0d\u540c\u65b9\u6cd5\u4e2d\u7684\u95ee\u9898\u3002\u4e0b\u8ff0\u4ee3\u7801\u662f\u5c06\u524d\u8ff0\u793a\u4f8b\u4e2d\u7684\u8ba1\u6570\u5668\u548c\u597d\u53cb\u5728\u7ebf\u72b6\u6001\u6307\u793a\u5668\u903b\u8f91\u7ec4\u5408\u5728\u4e00\u8d77\u7684\u7ec4\u4ef6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class FriendStatusWithCounter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0, isOnline: null };\n    this.handleStatusChange = this.handleStatusChange.bind(this);\n  }\n\n  componentDidMount() {\n    document.title = `You clicked ${this.state.count} times`;\n    ChatAPI.subscribeToFriendStatus(\n      this.props.friend.id,\n      this.handleStatusChange\n    );\n  }\n\n  componentDidUpdate() {\n    document.title = `You clicked ${this.state.count} times`;\n  }\n\n  componentWillUnmount() {\n    ChatAPI.unsubscribeFromFriendStatus(\n      this.props.friend.id,\n      this.handleStatusChange\n    );\n  }\n\n  handleStatusChange(status) {\n    this.setState({\n      isOnline: status.isOnline\n    });\n  }\n  // ...\n")),(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u53d1\u73b0\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"document.title")," \u7684\u903b\u8f91\u662f\u5982\u4f55\u88ab\u5206\u5272\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," \u4e2d\u7684\uff0c\u8ba2\u9605\u903b\u8f91\u53c8\u662f\u5982\u4f55\u88ab\u5206\u5272\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," \u4e2d\u7684\u3002\u800c\u4e14 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidMount")," \u4e2d\u540c\u65f6\u5305\u542b\u4e86\u4e24\u4e2a\u4e0d\u540c\u529f\u80fd\u7684\u4ee3\u7801\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Hooks")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function FriendStatusWithCounter(props) {\n  const [count, setCount] = useState(0);\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  const [isOnline, setIsOnline] = useState(null);\n  useEffect(() => {\n    function handleStatusChange(status) {\n      setIsOnline(status.isOnline);\n    }\n\n    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);\n    return () => {\n      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);\n    };\n  });\n  // ...\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Hook \u5141\u8bb8\u6211\u4eec\u6309\u7167\u4ee3\u7801\u7684\u7528\u9014\u5206\u79bb\u4ed6\u4eec\uff0c")," \u800c\u4e0d\u662f\u50cf\u751f\u547d\u5468\u671f\u51fd\u6570\u90a3\u6837\u3002React \u5c06\u6309\u7167 effect \u58f0\u660e\u7684\u987a\u5e8f\u4f9d\u6b21\u8c03\u7528\u7ec4\u4ef6\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u4e00\u4e2a")," ",(0,r.kt)("inlineCode",{parentName:"p"},"effect"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2705 \u901a\u8fc7\u8df3\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Effect")," \u8fdb\u884c\u6027\u80fd\u4f18\u5316"),(0,r.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6bcf\u6b21\u6e32\u67d3\u540e\u90fd\u6267\u884c\u6e05\u7406\u6216\u8005\u6267\u884c effect \u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," \u7ec4\u4ef6\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," \u4e2d\u6dfb\u52a0\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"prevProps")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"prevState")," \u7684\u6bd4\u8f83\u903b\u8f91\u89e3\u51b3\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"componentDidUpdate(prevProps, prevState) {\n  if (prevState.count !== this.state.count) {\n    document.title = `You clicked ${this.state.count} times`;\n  }\n}\n")),(0,r.kt)("p",{parentName:"li"},"\u5b83\u88ab\u5185\u7f6e\u5230\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hook API")," \u4e2d\u3002\u5982\u679c\u67d0\u4e9b\u7279\u5b9a\u503c\u5728\u4e24\u6b21\u91cd\u6e32\u67d3\u4e4b\u95f4\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u4f60\u53ef\u4ee5\u901a\u77e5 React ",(0,r.kt)("strong",{parentName:"p"},"\u8df3\u8fc7"),"\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"effect")," \u7684\u8c03\u7528\uff0c\u53ea\u8981\u4f20\u9012\u6570\u7ec4\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," \u7684\u7b2c\u4e8c\u4e2a\u53ef\u9009\u53c2\u6570\u5373\u53ef\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"useEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]); // \u4ec5\u5728 count \u66f4\u6539\u65f6\u66f4\u65b0\n")),(0,r.kt)("p",{parentName:"li"},"\u63a8\u8350\u542f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks#installation"},(0,r.kt)("inlineCode",{parentName:"a"},"eslint-plugin-react-hooks"))," \u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/14920"},(0,r.kt)("inlineCode",{parentName:"a"},"exhaustive-deps"))," \u89c4\u5219\u3002"))))}m.isMDXComponent=!0}}]);