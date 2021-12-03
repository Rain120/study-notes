"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[5718],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={sidebar_position:2},u=void 0,s={unversionedId:"react/hooks/useReducer",id:"react/hooks/useReducer",isDocsHomePage:!1,title:"useReducer",description:"\u719f\u6089Redux\u7684\u5e94\u8be5\u77e5\u9053Redux\u7684\u6838\u5fc3\u6982\u5ff5\u662f \u7ec4\u4ef6\u53d1\u51fa action \u4e0e\u72b6\u6001\u7ba1\u7406\u5668\u901a\u4fe1\uff0c\u72b6\u6001\u7ba1\u7406\u5668\u6536\u5230 action \u4ee5\u540e\uff0c\u4f7f\u7528 Reducer \u51fd\u6570\u7b97\u51fa\u65b0\u7684\u72b6\u6001\u3002",source:"@site/fe/react/hooks/useReducer.md",sourceDirName:"react/hooks",slug:"/react/hooks/useReducer",permalink:"/study-notes/fe/react/hooks/useReducer",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638530590,formattedLastUpdatedAt:"12/3/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"useLayoutEffect",permalink:"/study-notes/fe/react/hooks/useLayoutEffect"},next:{title:"useCallback",permalink:"/study-notes/fe/react/hooks/useCallback"}},p=[],l={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u719f\u6089",(0,o.kt)("inlineCode",{parentName:"p"},"Redux"),"\u7684\u5e94\u8be5\u77e5\u9053",(0,o.kt)("inlineCode",{parentName:"p"},"Redux"),"\u7684\u6838\u5fc3\u6982\u5ff5\u662f ",(0,o.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u53d1\u51fa action \u4e0e\u72b6\u6001\u7ba1\u7406\u5668\u901a\u4fe1\uff0c\u72b6\u6001\u7ba1\u7406\u5668\u6536\u5230 action \u4ee5\u540e\uff0c\u4f7f\u7528 Reducer \u51fd\u6570\u7b97\u51fa\u65b0\u7684\u72b6\u6001"),"\u3002"),(0,o.kt)("p",null,"\u53c2\u6570: \u63a5\u6536\u4e00\u4e2a\u5f62\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"(state, action) => newState")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")),(0,o.kt)("p",null,"\u8fd4\u56de: ","[\u5f53\u524d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," , \u5176\u914d\u5957\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u65b9\u6cd5\u3002]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer")," \u4f1a\u6bd4 ",(0,o.kt)("inlineCode",{parentName:"li"},"useState")," \u66f4\u9002\u7528\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," \u903b\u8f91\u8f83\u590d\u6742\u4e14\u5305\u542b\u591a\u4e2a\u5b50\u503c\uff0c\u6216\u8005\u4e0b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"state "),"\u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," \u7b49")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const initialState = {count: 0};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return {count: state.count + 1};\n    case 'decrement':\n      return {count: state.count - 1};\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({type: 'decrement'})}>-</button>\n      <button onClick={() => dispatch({type: 'increment'})}>+</button>\n    </>\n  );\n}\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#lazy-initialization"},"\u60f0\u6027\u521d\u59cb\u5316")," ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),",\u9700\u8981\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," \u51fd\u6570\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer")," \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u4f20\u5165\uff0c\u8fd9\u6837\u521d\u59cb ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," \u5c06\u88ab\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"init(initialArg)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function init(initialCount) {\n  return {count: initialCount};\n}\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return {count: state.count + 1};\n    case 'decrement':\n      return {count: state.count - 1};\n    case 'reset':\n      return init(action.payload);\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter({initialCount}) {\n  const [state, dispatch] = useReducer(reducer, initialCount, init);\n  return (\n    <>\n      Count: {state.count}\n      <button\n        onClick={() => dispatch({type: 'reset', payload: initialCount})}>\n\n        Reset\n      </button>\n      <button onClick={() => dispatch({type: 'decrement'})}>-</button>\n      <button onClick={() => dispatch({type: 'increment'})}>+</button>\n    </>\n  );\n}\n\n")),(0,o.kt)("h3",{id:""}))}d.isMDXComponent=!0}}]);