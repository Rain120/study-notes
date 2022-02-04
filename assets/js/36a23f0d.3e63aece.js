"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1102],{3905:function(n,e,o){o.d(e,{Zo:function(){return l},kt:function(){return p}});var r=o(67294);function t(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function c(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,r)}return o}function u(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){t(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function f(n,e){if(null==n)return{};var o,r,t=function(n,e){if(null==n)return{};var o,r,t={},c=Object.keys(n);for(r=0;r<c.length;r++)o=c[r],e.indexOf(o)>=0||(t[o]=n[o]);return t}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)o=c[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var i=r.createContext({}),a=function(n){var e=r.useContext(i),o=e;return n&&(o="function"==typeof n?n(e):u(u({},e),n)),o},l=function(n){var e=a(n.components);return r.createElement(i.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var o=n.components,t=n.mdxType,c=n.originalType,i=n.parentName,l=f(n,["components","mdxType","originalType","parentName"]),s=a(o),p=t,g=s["".concat(i,".").concat(p)]||s[p]||d[p]||c;return o?r.createElement(g,u(u({ref:e},l),{},{components:o})):r.createElement(g,u({ref:e},l))}));function p(n,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var c=o.length,u=new Array(c);u[0]=s;var f={};for(var i in e)hasOwnProperty.call(e,i)&&(f[i]=e[i]);f.originalType=n,f.mdxType="string"==typeof n?n:t,u[1]=f;for(var a=2;a<c;a++)u[a]=o[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},66824:function(n,e,o){o.r(e),o.d(e,{frontMatter:function(){return f},contentTitle:function(){return i},metadata:function(){return a},toc:function(){return l},default:function(){return s}});var r=o(87462),t=o(63366),c=(o(67294),o(3905)),u=["components"],f={title:"\u63d2\u4ef6 Todo Tree \u914d\u7f6e"},i=void 0,a={unversionedId:"vscode/todo-tree",id:"vscode/todo-tree",title:"\u63d2\u4ef6 Todo Tree \u914d\u7f6e",description:"todo-icon",source:"@site/tools/vscode/todo-tree.md",sourceDirName:"vscode",slug:"/vscode/todo-tree",permalink:"/study-notes/tools/vscode/todo-tree",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1643963901,formattedLastUpdatedAt:"2/4/2022",frontMatter:{title:"\u63d2\u4ef6 Todo Tree \u914d\u7f6e"},sidebar:"sidebar",previous:{title:"Tips",permalink:"/study-notes/tools/vscode/tips"}},l=[{value:"VS Code \u914d\u7f6e",id:"vs-code-\u914d\u7f6e",children:[],level:3}],d={toc:l};function s(n){var e=n.components,f=(0,t.Z)(n,u);return(0,c.kt)("wrapper",(0,r.Z)({},d,f,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"todo-icon",src:o(81319).Z})),(0,c.kt)("h3",{id:"vs-code-\u914d\u7f6e"},"VS Code \u914d\u7f6e"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // TODO Tree Setting\n    // "todo-tree.regex.regex": "((//|#|\x3c!--|;|/\\\\*|^)\\\\s*(@?)($TAGS):|^\\\\s*- \\\\[ \\\\])",\n    // INFO: (@?) \u8fd9\u91cc\u53ef\u6dfb\u52a0\u4e00\u4e9b\u7279\u6b8a\u7b26\u53f7\n    "todo-tree.regex.regex": "(//|#|\x3c!--|;|/\\\\*|^|^\\\\s*(-|\\\\d+.))\\\\s*",\n    // INFO: \u5ffd\u7565\u5927\u5c0f\u5199\n    "todo-tree.regex.regexCaseSensitive": false,\n    "todo-tree.tree.autoRefresh": true,\n    "todo-tree.general.tags": [\n        "TODO:",\n        "HOTFIX:",\n        "BUGFIX",\n        "DONE:",\n        "NOTE:",\n        "INFO:",\n        "LINK_TO",\n        "TAG",\n        "N.B.",\n        "HACK",\n        "[ ]",\n        "[x]"\n    ],\n    "todo-tree.highlights.defaultHighlight": {\n        "gutterIcon": true\n        // "type": "text-and-comment"\n    },\n    // icon: https://microsoft.github.io/vscode-codicons/dist/codicon.html\n    "todo-tree.highlights.customHighlight": {\n        "[ ]": {\n            "background": "#F44336"\n        },\n        "[x]": {\n            "background": "#00de00"\n        },\n        "TODO:": {\n            "foreground": "#fff",\n            "background": "#ffbd2a",\n            "iconColour": "#ffbd2a",\n        },\n        "HOTFIX:": {\n            "foreground": "#fff",\n            "background": "#f06292",\n            "icon": "flame",\n            "iconColour": "#f06292"\n        },\n        "DONE": {\n            "background": "#2BBE4E",\n            "icon": "issue-closed",\n            "rulerColour": "#2BBE4E",\n            "iconColour": "#2BBE4E"\n        },\n        "INFO:": {\n            "foreground": "#fff",\n            "background": "#3f83f8",\n            "icon": "info",\n            "iconColour": "#3f83f8"\n        },\n        "LINK_TO:": {\n            "foreground": "#fff",\n            "background": "#3f33f8",\n            "icon": "info",\n            "iconColour": "#3f33f8"\n        },\n        "NOTE:": {\n            "foreground": "#fff",\n            "background": "#3f83f8",\n            "icon": "note",\n            "iconColour": "#3f83f8"\n        },\n        "TAG": {\n            "foreground": "#fff",\n            "background": "#03A9F4",\n            "icon": "tag",\n            "rulerColour": "#03A9F4",\n            "iconColour": "#03A9F4",\n            "rulerLane": "full"\n        },\n        "BUGFIX": {\n            "foreground": "#fff",\n            "background": "#ee3c2c",\n            "icon": "bug",\n            "rulerColour": "#ee3c2c",\n            "iconColour": "#ee3c2c",\n            "rulerLane": "full"\n        },\n        "N.B.": {\n            "foreground": "#fff",\n            "background": "#ffbd2a",\n            "icon": "shield",\n            "rulerColour": "#ffbd2a",\n            "iconColour": "#ffbd2a",\n            "rulerLane": "full"\n        },\n        "HACK": {\n            "foreground": "#fff",\n            "background": "#cb2431",\n            "icon": "thumbsdown",\n            "rulerColour": "#cb2431",\n            "iconColour": "#cb2431",\n            "rulerLane": "full"\n        }\n    },\n}\n')))}s.isMDXComponent=!0},81319:function(n,e,o){e.Z=o.p+"assets/images/todo-icon-f8006509bf569800faa911b4a148ec9f.png"}}]);