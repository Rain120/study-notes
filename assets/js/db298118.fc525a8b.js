"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[559],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=d(t),p=o,g=f["".concat(s,".").concat(p)]||f[p]||u[p]||i;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},18747:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return f}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"Configuration"},s=void 0,d={unversionedId:"vscode/settings",id:"vscode/settings",title:"Configuration",description:"\u6211\u7684VS Code \u914d\u7f6e",source:"@site/tools/vscode/settings.md",sourceDirName:"vscode",slug:"/vscode/settings",permalink:"/study-notes/tools/vscode/settings",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1641816162,formattedLastUpdatedAt:"1/10/2022",frontMatter:{title:"Configuration"},sidebar:"sidebar",previous:{title:"\u63d2\u4ef6",permalink:"/study-notes/tools/vscode/extensions"},next:{title:"Tips",permalink:"/study-notes/tools/vscode/tips"}},l=[{value:"\u6211\u7684VS Code \u914d\u7f6e",id:"\u6211\u7684vs-code-\u914d\u7f6e",children:[],level:3}],u={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u6211\u7684vs-code-\u914d\u7f6e"},"\u6211\u7684VS Code \u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tabnine.experimentalAutoImports": true,\n    "todo-tree.tree.showScanModeButton": false,\n    "workbench.iconTheme": "vscode-icons",\n    "editor.suggestSelection": "first",\n    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",\n    "editor.fontSize": 16,\n    // \u8986\u76d6\u5f53\u524d\u9009\u5b9a\u989c\u8272\u4e3b\u9898\u7684\u989c\u8272\u3002\n    "workbench.colorCustomizations": {\n        // \u6d3b\u52a8\u901a\u77e5\u5fbd\u7ae0\u7684\u80cc\u666f\u989c\u8272\u3002\u6d3b\u52a8\u680f\u663e\u793a\u5728\u6700\u5de6\u8fb9\u6216\u53f3\u8fb9\uff0c\u5141\u8bb8\u5728\u4fa7\u8fb9\u680f\u7684\u89c6\u56fe\u4e4b\u95f4\u5207\u6362\u3002\n        // "activityBarBadge.background": "#F44336",\n        // \u80cc\u666f \u8272\n        // "editor.background": "#0f0909",\n        "editor.background": "#000000",\n        // \u5f53\u5217\u8868/\u6811\u6d3b\u52a8\u65f6\u6240\u9009\u9879\u76ee\u7684\u5217\u8868/\u6811\u524d\u666f\u989c\u8272\u3002\u6d3b\u52a8\u5217\u8868/\u6811\u5177\u6709\u952e\u76d8\u7126\u70b9\uff0c\u975e\u6d3b\u52a8\u5217\u8868/\u6811\u6ca1\u6709\u3002\n        // "list.activeSelectionForeground": "#F44336",\n        // \u5f53\u5217\u8868/\u6811\u4e0d\u6d3b\u52a8\u65f6\uff0c\u6240\u9009\u9879\u76ee\u7684\u5217\u8868/\u6811\u524d\u666f\u989c\u8272\u3002\u6d3b\u52a8\u5217\u8868/\u6811\u5177\u6709\u952e\u76d8\u7126\u70b9\uff0c\u975e\u6d3b\u52a8\u5217\u8868/\u6811\u6ca1\u6709\u3002\n        // "list.inactiveSelectionForeground": "#09ff00",\n        // \u5728\u5217\u8868/\u6811\u4e2d\u641c\u7d22\u65f6\uff0c\u5339\u914d\u7684\u5217\u8868/\u6811\u7684\u524d\u666f\u989c\u8272\u5c06\u7a81\u51fa\u663e\u793a\u3002\n        // "list.highlightForeground": "#F44336",\n        // \u5f53\u70b9\u51fb\u6eda\u52a8\u6761\u6ed1\u5757\u7684\u80cc\u666f\u989c\u8272\u3002\n        // "scrollbarSlider.activeBackground": "#F4433650",\n        // \u5339\u914d\u7684\u989c\u8272\u5728 suggest\u5c0f\u90e8\u4ef6\u4e2d\u7a81\u51fa\u663e\u793a\u3002\n        // "editorSuggestWidget.highlightForeground": "#F44336",\n        // \u6587\u672c\u94fe\u63a5\u7684\u524d\u666f\u8272\u3002\n        // "textLink.foreground": "#F44336",\n        // \u8fdb\u5ea6\u6761\u7684\u80cc\u666f\u989c\u8272\uff0c\u53ef\u4ee5\u663e\u793a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u64cd\u4f5c\u3002\n        // "progressBar.background": "#F44336",\n        // \u5feb\u901f\u9009\u62e9\u989c\u8272\u5206\u7ec4\u6807\u7b7e\u3002\n        // "pickerGroup.foreground": "#F44336",\n        // \u6d3b\u52a8\u9009\u9879\u5361\u5e95\u90e8\u7684\u8fb9\u6846\u3002\u9009\u9879\u5361\u662f\u7f16\u8f91\u5668\u533a\u57df\u4e2d\u7f16\u8f91\u5668\u7684\u5bb9\u5668\u3002\u53ef\u4ee5\u5728\u4e00\u4e2a\u7f16\u8f91\u5668\u7ec4\u4e2d\u6253\u5f00\u591a\u4e2a\u9009\u9879\u5361\u3002\u53ef\u4ee5\u6709\u591a\u4e2a\u7f16\u8f91\u5668\u7ec4\u3002\n        "tab.activeBorder": "#F44336"\n        // \u901a\u77e5\u94fe\u63a5\u524d\u666f\u989c\u8272\u3002\u901a\u77e5\u4ece\u7a97\u53e3\u7684\u53f3\u4e0b\u89d2\u6ed1\u5165\u3002\n        // "notificationLink.foreground": "#F44336",\n        // \u7f16\u8f91\u5668\u5c0f\u90e8\u4ef6\u7684\u8c03\u6574\u5927\u5c0f\u680f\u7684\u8fb9\u6846\u989c\u8272\u3002\u53ea\u6709\u5f53\u5c0f\u90e8\u4ef6\u9009\u62e9\u5177\u6709\u8c03\u6574\u5927\u5c0f\u7684\u8fb9\u6846\uff0c\u5e76\u4e14\u8be5\u989c\u8272\u6ca1\u6709\u88ab\u5c0f\u90e8\u4ef6\u8986\u76d6\u65f6\uff0c\u624d\u4f7f\u7528\u8be5\u989c\u8272\u3002\n        // "editorWidget.resizeBorder": "#F44336",\n        // \u7f16\u8f91\u5668\u5c0f\u90e8\u4ef6\u7684\u8fb9\u6846\u989c\u8272\u3002\u53ea\u6709\u5f53\u5c0f\u90e8\u4ef6\u9009\u62e9\u5177\u6709\u8fb9\u6846\u4e14\u989c\u8272\u672a\u88ab\u5c0f\u90e8\u4ef6\u8986\u76d6\u65f6\uff0c\u624d\u4f7f\u7528\u8be5\u989c\u8272\u3002\n        // "editorWidget.border": "#F44336",\n        // (\u7528\u4e8e\u8bbe\u7f6e\u7f16\u8f91\u5668\u9884\u89c8)\u4fee\u6539\u540e\u7684\u8bbe\u7f6e\u6307\u793a\u5668\u7684\u989c\u8272\n        // "settings.modifiedItemIndicator": "#F44336",\n        // (\u7528\u4e8e\u8bbe\u7f6e\u7f16\u8f91\u5668\u9884\u89c8)\u8282\u6807\u9898\u6216\u6d3b\u52a8\u6807\u9898\u7684\u524d\u666f\u8272\u3002\n        // "settings.headerForeground": "#F44336",\n        // \u6d3b\u52a8\u9762\u677f\u6807\u9898\u7684\u8fb9\u6846\u989c\u8272\u3002\u9762\u677f\u663e\u793a\u5728\u7f16\u8f91\u5668\u533a\u57df\u4e0b\u9762\uff0c\u5176\u4e2d\u5305\u542b\u8f93\u51fa\u548c\u96c6\u6210\u7ec8\u7aef\u7b49\u89c6\u56fe\u3002\n        // "panelTitle.activeBorder": "#F44336",\n        // \u9009\u5b9a\u9762\u5305\u5c51\u9879\u7684\u989c\u8272\u3002\n        // "breadcrumb.activeSelectionForeground": "#F44336",\n        // \u83dc\u5355\u4e2d\u6240\u9009\u83dc\u5355\u9879\u7684\u524d\u666f\u8272\n        // "menu.selectionForeground": "#F44336",\n        // \u83dc\u5355\u680f\u4e2d\u6240\u9009\u83dc\u5355\u9879\u7684\u524d\u666f\u8272\u3002\n        // "menubar.selectionForeground": "#F44336",\n        // \u5f53\u524d\u641c\u7d22\u5339\u914d\u7684\u8fb9\u6846\u989c\u8272\u3002\n        // "editor.findMatchBorder": "#F44336",\n        // \u5de5\u4f5c\u53f0\u4e2d\u6587\u672c\u9009\u62e9\u7684\u80cc\u666f\u989c\u8272(\u4f8b\u5982\u7528\u4e8e\u8f93\u5165\u5b57\u6bb5\u6216\u6587\u672c\u533a\u57df)\u3002\u6ce8\u610f\uff0c\u8fd9\u4e0d\u9002\u7528\u4e8e\u7f16\u8f91\u5668\u4e2d\u7684\u9009\u62e9\u3002\n        // "selection.background": "#F4433640",\n    },\n    "editor.tokenColorCustomizations": {\n        // \u6ce8\u91ca\n        // "comments": "#9f9fa1",\n        // \u53d8\u91cf\u540d\n        // "variables": "#05e3f3",\n        // \u51fd\u6570\u540d\n        // "functions": "#0771fc",\n        // \u6570\u5b57\n        // "numbers": "#AE81FF",\n        // \u5173\u952e\u5b57\n        // "keywords": "#0a0",\n        // \u5b57\u7b26\u4e32\n        // "strings": "#e2d75dbd",\n    },\n    "terminal.integrated.fontSize": 14,\n    "files.autoSave": "onWindowChange",\n    "fileheader.customMade": {\n        "Author": "Rainy [https://github.com/rain120]",\n        "Date": "Do not edit",\n        "LastEditors": "Rainy",\n        "LastEditTime": "Do not edit"\n    },\n    "fileheader.configObj": {\n        "createHeader": false,\n        "autoAdd": false\n    },\n    "javascript.updateImportsOnFileMove.enabled": "always",\n    "[javascript]": {\n        "editor.defaultFormatter": "esbenp.prettier-vscode"\n    },\n    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,\n    // \u89e3\u51b3 code helper \u5403\u8fdb\u7a0b\u95ee\u9898\n    "files.exclude": {\n        "**/.git": true,\n        "**/.svn": true,\n        "**/.hg": true,\n        "**/CVS": true,\n        "**/.DS_Store": true,\n        // "**/tmp": true,\n        // "**/node_modules": true,\n        "**/bower_components": true\n        // "**/dist": true\n    },\n    "files.watcherExclude": {\n        "**/.git/objects/**": true,\n        "**/.git/subtree-cache/**": true,\n        "**/node_modules/**": true,\n        "**/tmp/**": true,\n        "**/bower_components/**": true,\n        "**/dist/**": true\n    },\n    "search.exclude": {\n        "!/system/**/*.ps*": true,\n        "**/node_modules": false,\n        "system/": true\n    },\n    "search.useIgnoreFiles": false,\n    "typescript.updateImportsOnFileMove.enabled": "always",\n    "tslint.autoFixOnSave": true,\n    "diffEditor.ignoreTrimWhitespace": false,\n    "editor.columnSelection": false,\n    "editor.multiCursorModifier": "alt",\n    // TODO Tree Setting\n    // "todo-tree.regex.regex": "((//|#|\x3c!--|;|/\\\\*|^)\\\\s*(@?)($TAGS):|^\\\\s*- \\\\[ \\\\])",\n    "todo-tree.regex.regex": "(//|#|\x3c!--|;|/\\\\*|^|^\\\\s*(-|\\\\d+.))\\\\s*(@?)($TAGS)",\n    // INFO: \u5ffd\u7565\u5927\u5c0f\u5199\n    "todo-tree.regex.regexCaseSensitive": false,\n    "todo-tree.tree.autoRefresh": true,\n    "todo-tree.general.tags": [\n        "TODO:",\n        "HOTFIX:",\n        "BUGFIX",\n        "DONE:",\n        "NOTE:",\n        "INFO:",\n        "LINK_TO",\n        "TAG",\n        "N.B.",\n        "HACK",\n        "[ ]",\n        "[x]"\n    ],\n    "todo-tree.highlights.defaultHighlight": {\n        "gutterIcon": true\n        // "type": "text-and-comment"\n    },\n    // icon: https://microsoft.github.io/vscode-codicons/dist/codicon.html\n    "todo-tree.highlights.customHighlight": {\n        "[ ]": {\n            "background": "#F44336"\n        },\n        "[x]": {\n            "background": "#00de00"\n        },\n        "TODO:": {\n            "foreground": "#fff",\n            "background": "#ffbd2a",\n            "iconColour": "#ffbd2a",\n        },\n        "HOTFIX:": {\n            "foreground": "#fff",\n            "background": "#f06292",\n            "icon": "flame",\n            "iconColour": "#f06292"\n        },\n        "DONE": {\n            "background": "#2BBE4E",\n            "icon": "issue-closed",\n            "rulerColour": "#2BBE4E",\n            "iconColour": "#2BBE4E"\n        },\n        "INFO:": {\n            "foreground": "#fff",\n            "background": "#3f83f8",\n            "icon": "info",\n            "iconColour": "#3f83f8"\n        },\n        "LINK_TO:": {\n            "foreground": "#fff",\n            "background": "#3f33f8",\n            "icon": "info",\n            "iconColour": "#3f33f8"\n        },\n        "NOTE:": {\n            "foreground": "#fff",\n            "background": "#3f83f8",\n            "icon": "note",\n            "iconColour": "#3f83f8"\n        },\n        "TAG": {\n            "foreground": "#fff",\n            "background": "#03A9F4",\n            "icon": "tag",\n            "rulerColour": "#03A9F4",\n            "iconColour": "#03A9F4",\n            "rulerLane": "full"\n        },\n        "BUGFIX": {\n            "foreground": "#fff",\n            "background": "#ee3c2c",\n            "icon": "bug",\n            "rulerColour": "#ee3c2c",\n            "iconColour": "#ee3c2c",\n            "rulerLane": "full"\n        },\n        "N.B.": {\n            "foreground": "#fff",\n            "background": "#ffbd2a",\n            "icon": "shield",\n            "rulerColour": "#ffbd2a",\n            "iconColour": "#ffbd2a",\n            "rulerLane": "full"\n        },\n        "HACK": {\n            "foreground": "#fff",\n            "background": "#cb2431",\n            "icon": "thumbsdown",\n            "rulerColour": "#cb2431",\n            "iconColour": "#cb2431",\n            "rulerLane": "full"\n        }\n    },\n    "editor.formatOnSave": true,\n    /*  prettier\u7684\u914d\u7f6e */\n    // "prettier.jsxSingleQuote": true,\n    "prettier.useEditorConfig": false, // \u5ffd\u7565.editorconfig\n    "prettier.printWidth": 90, // \u8d85\u8fc7\u6700\u5927\u503c\u6362\u884c\n    "prettier.tabWidth": 4, // \u7f29\u8fdb\u5b57\u8282\u6570\n    //  "prettier.tabWidth": 2, // \u7f29\u8fdb\u5b57\u8282\u6570\n    "prettier.useTabs": false, // \u7f29\u8fdb\u4e0d\u4f7f\u7528tab\uff0c\u4f7f\u7528\u7a7a\u683c\n    "prettier.semi": true, // \u53e5\u5c3e\u6dfb\u52a0\u5206\u53f7\n    "prettier.singleQuote": true, // \u4f7f\u7528\u5355\u5f15\u53f7\u4ee3\u66ff\u53cc\u5f15\u53f7\n    "prettier.proseWrap": "preserve", // \u9ed8\u8ba4\u503c\u3002\u56e0\u4e3a\u4f7f\u7528\u4e86\u4e00\u4e9b\u6298\u884c\u654f\u611f\u578b\u7684\u6e32\u67d3\u5668\uff08\u5982GitHub comment\uff09\u800c\u6309\u7167markdown\u6587\u672c\u6837\u5f0f\u8fdb\u884c\u6298\u884c\n    "prettier.arrowParens": "avoid", //  (x) => {} \u7bad\u5934\u51fd\u6570\u53c2\u6570\u53ea\u6709\u4e00\u4e2a\u65f6\u662f\u5426\u8981\u6709\u5c0f\u62ec\u53f7\u3002avoid\uff1a\u7701\u7565\u62ec\u53f7\n    "prettier.bracketSpacing": false, // \u5728\u5bf9\u8c61\uff0c\u6570\u7ec4\u62ec\u53f7\u4e0e\u6587\u5b57\u4e4b\u95f4\u52a0\u7a7a\u683c "{ foo: bar }"\n    "prettier.disableLanguages": ["vue"], // \u4e0d\u683c\u5f0f\u5316vue\u6587\u4ef6\uff0cvue\u6587\u4ef6\u7684\u683c\u5f0f\u5316\u5355\u72ec\u8bbe\u7f6e\n    "prettier.endOfLine": "auto", // \u7ed3\u5c3e\u662f \\n \\r \\n\\r auto\n    // "prettier.eslintIntegration": false, //\u4e0d\u8ba9prettier\u4f7f\u7528eslint\u7684\u4ee3\u7801\u683c\u5f0f\u8fdb\u884c\u6821\u9a8c\n    "prettier.htmlWhitespaceSensitivity": "ignore",\n    "prettier.ignorePath": ".prettierignore", // \u4e0d\u4f7f\u7528prettier\u683c\u5f0f\u5316\u7684\u6587\u4ef6\u586b\u5199\u5728\u9879\u76ee\u7684.prettierignore\u6587\u4ef6\u4e2d\n    "prettier.jsxBracketSameLine": false, // \u5728jsx\u4e2d\u628a\'>\' \u662f\u5426\u5355\u72ec\u653e\u4e00\u884c\n    "prettier.jsxSingleQuote": true, // \u5728jsx\u4e2d\u4f7f\u7528\u5355\u5f15\u53f7\u4ee3\u66ff\u53cc\u5f15\u53f7\n    // "prettier.parser": "babylon", // \u683c\u5f0f\u5316\u7684\u89e3\u6790\u5668\uff0c\u9ed8\u8ba4\u662fbabylon\n    "prettier.requireConfig": false, // Require a \'prettierconfig\' to format prettier\n    // "prettier.stylelintIntegration": false, //\u4e0d\u8ba9prettier\u4f7f\u7528stylelint\u7684\u4ee3\u7801\u683c\u5f0f\u8fdb\u884c\u6821\u9a8c\n    // "prettier.trailingComma": "none", // \u5728\u5bf9\u8c61\u6216\u6570\u7ec4\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u540e\u9762\u662f\u5426\u52a0\u9017\u53f7\uff08\u5728ES5\u4e2d\u52a0\u5c3e\u9017\u53f7\uff09\n    "[json]": {\n        "editor.defaultFormatter": "esbenp.prettier-vscode"\n    },\n    "[jsonc]": {\n        "editor.defaultFormatter": "esbenp.prettier-vscode"\n    },\n    "git.autofetch": true,\n    "[typescriptreact]": {\n        "editor.defaultFormatter": "esbenp.prettier-vscode"\n    },\n    "hediet.vscode-drawio.local-storage": "eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWw7dW1sO2VyO2JwbW47Zmxvd2NoYXJ0O2Jhc2ljO2Fycm93czJcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltcIm5vbmVcIixcIkZGRkZDQ1wiLFwiMzMzM0ZGXCIsXCIwMDAwMDBcIixcIjY2QjJGRlwiLFwiMDAwMEZGXCIsXCJFQTZCNjZcIixcIjk3RDA3N1wiLFwiMDA2NkNDXCJdLFwiZm9ybWF0V2lkdGhcIjoyNDAsXCJjcmVhdGVUYXJnZXRcIjpmYWxzZSxcInBhZ2VGb3JtYXRcIjp7XCJ4XCI6MCxcInlcIjowLFwid2lkdGhcIjo4MjcsXCJoZWlnaHRcIjoxMTY5fSxcInNlYXJjaFwiOnRydWUsXCJzaG93U3RhcnRTY3JlZW5cIjp0cnVlLFwiZ3JpZENvbG9yXCI6XCIjZDBkMGQwXCIsXCJkYXJrR3JpZENvbG9yXCI6XCIjRDREMEMwXCIsXCJhdXRvc2F2ZVwiOnRydWUsXCJyZXNpemVJbWFnZXNcIjpudWxsLFwib3BlbkNvdW50ZXJcIjowLFwidmVyc2lvblwiOjE4LFwidW5pdFwiOjEsXCJpc1J1bGVyT25cIjpmYWxzZSxcInVpXCI6XCJcIn0ifQ==",\n    "timeline.pageSize": 0,\n    "search.actionsPosition": "right",\n    "cSpell.userWords": ["Mobx", "customizer"],\n    "leetcode.endpoint": "leetcode-cn",\n    "leetcode.workspaceFolder": "/Users/zhongchao03/.leetcode",\n    "leetcode.defaultLanguage": "javascript",\n    "auto-close-tag.activationOnLanguage": [\n        "xml",\n        "php",\n        "blade",\n        "ejs",\n        "jinja",\n        "javascript",\n        "javascriptreact",\n        "typescript",\n        "typescriptreact",\n        "plaintext",\n        "markdown",\n        "vue",\n        "liquid",\n        "erb",\n        "lang-cfml",\n        "cfml",\n        "HTML (EEx)",\n        "HTML (Eex)",\n        "plist"\n    ],\n    "[html]": {\n        "editor.defaultFormatter": "vscode.html-language-features"\n    },\n    // "[typescript]": {\n    //     "editor.defaultFormatter": "esbenp.prettier-vscode"\n    // },\n    "editor.linkedEditing": true,\n    "[markdown]": {\n        "editor.defaultFormatter": "esbenp.prettier-vscode"\n    },\n    "[less]": {\n        "editor.defaultFormatter": "esbenp.prettier-vscode"\n    },\n    "commentTranslate.targetLanguage": "zh-CN",\n    "commentTranslate.multiLineMerge": true,\n    "commentTranslate.concise": true,\n    "[dockerfile]": {\n        "editor.defaultFormatter": "ms-azuretools.vscode-docker"\n    },\n    "vscodeGoogleTranslate.preferredLanguage": "Chinese (Simplified)",\n    "editor.codeActionsOnSave": {\n        "source.fixAll.eslint": true\n    },\n    "[yaml]": {\n        "editor.defaultFormatter": "redhat.vscode-yaml"\n    },\n    "color-highlight.languages": ["*"],\n    "typescript.locale": "en",\n    "cSpell.enableFiletypes": ["typescriptreact"],\n    "workbench.colorTheme": "One Dark Pro",\n    "editor.inlineSuggest.enabled": true,\n    "security.workspace.trust.untrustedFiles": "open",\n    "github.copilot.enable": {\n        "*": true,\n        "yaml": true,\n        "plaintext": false,\n        "markdown": false\n    },\n    "workbench.editorAssociations": {\n        "*.sketch": "default"\n    },\n    "diffEditor.maxComputationTime": 0,\n    "[typescript]": {\n        "editor.defaultFormatter": "esbenp.prettier-vscode"\n    }\n}\n\n')))}f.isMDXComponent=!0}}]);