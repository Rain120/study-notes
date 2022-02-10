"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[8586],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10052:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return m}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],p={},s="Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e00\u96c6",o={unversionedId:"lerna/build-cli/1",id:"lerna/build-cli/1",title:"Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e00\u96c6",description:"\u524d\u7f6e\u5b66\u4e60",source:"@site/engineering/lerna/build-cli/1.md",sourceDirName:"lerna/build-cli",slug:"/lerna/build-cli/1",permalink:"/study-notes/engineering/lerna/build-cli/1",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1644461031,formattedLastUpdatedAt:"2/10/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"\u5feb\u901f\u521b\u5efaLerna\u9879\u76ee",permalink:"/study-notes/engineering/lerna/quick-start"},next:{title:"Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e8c\u96c6",permalink:"/study-notes/engineering/lerna/build-cli/2"}},u=[{value:"\u524d\u7f6e\u5b66\u4e60",id:"\u524d\u7f6e\u5b66\u4e60",children:[],level:2},{value:"TL;DR",id:"tldr",children:[],level:2},{value:"\u7f18\u7531",id:"\u7f18\u7531",children:[],level:2},{value:"\u671f\u671b",id:"\u671f\u671b",children:[],level:2},{value:"\u6280\u672f\u9009\u62e9",id:"\u6280\u672f\u9009\u62e9",children:[],level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",children:[],level:2},{value:"\u4ee3\u7801\u68c0\u67e5 &amp; \u683c\u5f0f\u5316 &amp; \u89c4\u8303\u63d0\u4ea4",id:"\u4ee3\u7801\u68c0\u67e5--\u683c\u5f0f\u5316--\u89c4\u8303\u63d0\u4ea4",children:[],level:2},{value:"\u521b\u5efa<code>package</code>",id:"\u521b\u5efapackage",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lerna-\u642d\u5efa\u811a\u624b\u67b6-\u7b2c\u4e00\u96c6"},"Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e00\u96c6"),(0,l.kt)("h2",{id:"\u524d\u7f6e\u5b66\u4e60"},"\u524d\u7f6e\u5b66\u4e60"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/study-notes/engineering/lerna/base"},"Lerna \u5165\u95e8\u7bc7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/study-notes/engineering/lerna/commands"},"Lerna \u547d\u4ee4"))),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("p",null,"\u76f4\u63a5\u4f53\u9a8c \ud83d\udc49\ud83d\udc49\ud83d\udc49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Rain120/infinity-gems"},"\u9879\u76ee\u5730\u5740")),(0,l.kt)("h2",{id:"\u7f18\u7531"},"\u7f18\u7531"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d6a\u8d39\u5927\u91cf\u65f6\u95f4\u53bb\u521b\u5efa\uff0c\u914d\u7f6e\u76f8\u540c\u7ed3\u6784\u7684\u9879\u76ee"),(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4e60",(0,l.kt)("inlineCode",{parentName:"li"},"lerna"),"\u591a\u5305\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u5f00\u53d1\u811a\u624b\u67b6")),(0,l.kt)("h2",{id:"\u671f\u671b"},"\u671f\u671b"),(0,l.kt)("p",null,"\u5f85\u66f4\u65b0..."),(0,l.kt)("h2",{id:"\u6280\u672f\u9009\u62e9"},"\u6280\u672f\u9009\u62e9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/lerna/lerna"},"lerna"),": \u591a\u5305\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript"},"typescript"),": \u9759\u6001\u8bed\u6cd5\u68c0\u67e5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tj/commander.js/"},"commander"),": \u547d\u4ee4\u884c\u547d\u4ee4\u89e3\u6790"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/SBoudrias/Inquirer.js"},"Inquirer"),": \u7ec8\u7aef\u4ea4\u4e92"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/ora"},"ora"),": \u7ec8\u7aef\u52a0\u8f7d\u5668"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/chalk/chalk"},"chalk"),": \u7ec8\u7aef\u5b57\u7b26\u4e32\u6837\u5f0f")),(0,l.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir infinity-gems && cd infinity-gems\n\nnpm i lerna typescript -D\n\nlerna init -i\n")),(0,l.kt)("h2",{id:"\u4ee3\u7801\u68c0\u67e5--\u683c\u5f0f\u5316--\u89c4\u8303\u63d0\u4ea4"},"\u4ee3\u7801\u68c0\u67e5 & \u683c\u5f0f\u5316 & \u89c4\u8303\u63d0\u4ea4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u68c0\u67e5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D\n\neslint --init\n")),(0,l.kt)("p",null,"\u4f1a\u6839\u636e\u4f60\u7684\u9009\u62e9\u751f\u6210\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),"\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6, \u6211\u9009\u62e9\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"js"),"\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  env: {\n    browser: true,\n    es6: true,\n    node: true,\n  },\n  extends: [\n    \'standard\'\n  ],\n  globals: {\n    Atomics: \'readonly\',\n    SharedArrayBuffer: \'readonly\'\n  },\n  parser: \'@typescript-eslint/parser\',\n  parserOptions: {\n    ecmaVersion: 2018\n  },\n  plugins: [\n    \'@typescript-eslint\',\n  ],\n  rules: {\n    \'no-var\': \'error\',\n    \'semi\': [\'error\', \'always\'],\n    \'indent\': [ \'error\', 2 ],\n    \'quotes\': [ \'error\', \'single\' ],\n    \'no-extra-semi\': \'error\',\n    \'prettier/prettier\': \'error\',\n    "space-before-function-paren": ["error", {\n      "anonymous": "never",\n      "named": "never",\n      "asyncArrow": "never"\n    }],\n    "comma-dangle": ["error", {\n      "arrays": "always-multiline",\n      "exports": "always-multiline",\n      "functions": "never",\n      "imports": "always-multiline",\n      "objects": "always-multiline",\n    }]\n  }\n}\n\n')),(0,l.kt)("p",null,"\u4ee5\u53ca\u5ffd\u7565\u683c\u5f0f\u5316\u7684\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintignore ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"packages/**/**.test.ts\nnode_modules/\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n        "eslint": "eslint --fix --color --ext .ts packages/**"\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u5316")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i  prettier eslint-plugin-prettier -D\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  ...,\n  plugins: [\n    '@typescript-eslint',\n+   'prettier'\n  ],\n  ...,\n}\n")),(0,l.kt)("p",null,"\u518d\u5728\u6839\u76ee\u5f55\u4e0b\u914d\u7f6e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},".prettierrc"),"\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "printWidth": 120,\n  "trailingComma": "all",\n  "tabWidth": 2,\n  "semi": true,\n  "bracketSpacing": true,\n  "singleQuote": true,\n  "arrowParens": "avoid"\n}\n')),(0,l.kt)("p",null,"\u4ee5\u53ca\u5ffd\u7565\u683c\u5f0f\u5316\u7684\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},".prettierignore ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"packages/**/**.test.ts\nnode_modules/\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "prettier": "prettier --write packages/**/**.ts"\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i husky @commitlint/cli @commitlint/config-conventional lint-staged -D\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "lint-staged": "lint-staged"\n  },\n  "lint-staged": {\n    "packages/**/**.{ts}": [\n      "npm run prettier",\n      "npm run eslint",\n      "git add"\n    ]\n  },\n  "husky": {\n    "hooks": {\n      "pre-commit": [\n        "lint-staged"\n      ],\n      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n    }\n  },\n}\n')),(0,l.kt)("p",null,"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"commitlint.config.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  extends: ['@commitlint/config-conventional'],\n  rules: {\n    'type-enum': [\n      2,\n      'always',\n      [\n        'feat',\n        'fix',\n        'docs',\n        'style',\n        'refactor',\n        'perf',\n        'test',\n        'build',\n        'ci',\n        'chore',\n        'revert',\n        'config'\n      ]\n    ],\n    'subject-full-stop': [0, 'never'],\n    'subject-case': [0, 'never'],\n    'header-max-length': [0, 'always', 150]\n  }\n};\n\n")),(0,l.kt)("h2",{id:"\u521b\u5efapackage"},"\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"h2"},"package")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"lerna create thanos\n\nlerna create thanos\n")),(0,l.kt)("p",null,"\u751f\u6210\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 .npmignore\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 __tests__\n\u2502   \u2514\u2500\u2500 power-gem.test.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 lib\n\u2502   \u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 package.json\n")),(0,l.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u5168\u90e8\u5b8c\u6210\u4e86\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vue-cli"},"vue-cli")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/study-notes/engineering/lerna/build-cli/qa"},"\u9047\u5230\u7684\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5")))}m.isMDXComponent=!0}}]);