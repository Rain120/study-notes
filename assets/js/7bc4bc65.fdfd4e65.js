"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[1297],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),o=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97147:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],s={sidebar_position:4},p="\u5feb\u901f\u521b\u5efaLerna\u9879\u76ee",o={unversionedId:"lerna/quick-start",id:"lerna/quick-start",title:"\u5feb\u901f\u521b\u5efaLerna\u9879\u76ee",description:"\u521b\u5efa\u9879\u76ee",source:"@site/engineering/lerna/quick-start.md",sourceDirName:"lerna",slug:"/lerna/quick-start",permalink:"/study-notes/engineering/lerna/quick-start",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1649555275,formattedLastUpdatedAt:"4/10/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Lerna \u547d\u4ee4",permalink:"/study-notes/engineering/lerna/commands"},next:{title:"Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e00\u96c6",permalink:"/study-notes/engineering/lerna/build-cli/1"}},u={},c=[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u4ee3\u7801\u68c0\u67e5 &amp; \u683c\u5f0f\u5316 &amp; \u89c4\u8303\u63d0\u4ea4",id:"\u4ee3\u7801\u68c0\u67e5--\u683c\u5f0f\u5316--\u89c4\u8303\u63d0\u4ea4",level:2},{value:"Rollup \u6253\u5305",id:"rollup-\u6253\u5305",level:2},{value:"Jest",id:"jest",level:2},{value:"\u521b\u5efa<code>package</code>",id:"\u521b\u5efapackage",level:2},{value:"Lerna \u811a\u672c\u914d\u7f6e",id:"lerna-\u811a\u672c\u914d\u7f6e",level:2},{value:"lerna add \u591a\u4f9d\u8d56",id:"lerna-add-\u591a\u4f9d\u8d56",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],d={toc:c};function m(e){var n=e.components,s=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5feb\u901f\u521b\u5efalerna\u9879\u76ee"},"\u5feb\u901f\u521b\u5efaLerna\u9879\u76ee"),(0,l.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir infinity-gems && cd infinity-gems\n\nnpm i lerna typescript -D\n\nlerna init -i\n")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"sh-lerna-init-i.png",src:t(98425).Z,width:"1530",height:"408"})),(0,l.kt)("h2",{id:"\u4ee3\u7801\u68c0\u67e5--\u683c\u5f0f\u5316--\u89c4\u8303\u63d0\u4ea4"},"\u4ee3\u7801\u68c0\u67e5 & \u683c\u5f0f\u5316 & \u89c4\u8303\u63d0\u4ea4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u68c0\u67e5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D\n\n./node_modules/.bin/eslint --init\n")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"eslint-init.png",src:t(85730).Z,width:"2876",height:"958"})),(0,l.kt)("p",null,"\u4f1a\u6839\u636e\u4f60\u7684\u9009\u62e9\u751f\u6210\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),"\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6, \u6211\u9009\u62e9\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"js"),"\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  env: {\n    browser: true,\n    es6: true,\n    node: true,\n  },\n  extends: [\n    \'standard\'\n  ],\n  globals: {\n    Atomics: \'readonly\',\n    SharedArrayBuffer: \'readonly\'\n  },\n  parser: \'@typescript-eslint/parser\',\n  parserOptions: {\n    ecmaVersion: 2018\n  },\n  plugins: [\n    \'@typescript-eslint\',\n  ],\n  rules: {\n    \'no-var\': \'error\',\n    \'semi\': [\'error\', \'always\'],\n    \'indent\': [ \'error\', 2 ],\n    \'quotes\': [ \'error\', \'single\' ],\n    \'no-extra-semi\': \'error\',\n    \'prettier/prettier\': \'error\',\n    "space-before-function-paren": ["error", {\n      "anonymous": "never",\n      "named": "never",\n      "asyncArrow": "never"\n    }],\n    "comma-dangle": ["error", {\n      "arrays": "always-multiline",\n      "exports": "always-multiline",\n      "functions": "never",\n      "imports": "always-multiline",\n      "objects": "always-multiline",\n    }]\n  }\n}\n\n')),(0,l.kt)("p",null,"\u4ee5\u53ca\u5ffd\u7565\u683c\u5f0f\u5316\u7684\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintignore ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"packages/**/**.test.ts\nnode_modules/\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n        "eslint": "eslint --fix --color --ext .ts packages/**"\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u5316")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i prettier eslint-plugin-prettier -D\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  ...,\n  plugins: [\n    '@typescript-eslint',\n+   'prettier'\n  ],\n  ...,\n}\n")),(0,l.kt)("p",null,"\u518d\u5728\u6839\u76ee\u5f55\u4e0b\u914d\u7f6e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},".prettierrc"),"\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "printWidth": 120,\n  "trailingComma": "all",\n  "tabWidth": 2,\n  "semi": true,\n  "bracketSpacing": true,\n  "singleQuote": true,\n  "arrowParens": "avoid"\n}\n')),(0,l.kt)("p",null,"\u4ee5\u53ca\u5ffd\u7565\u683c\u5f0f\u5316\u7684\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},".prettierignore ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"packages/**/**.test.ts\nnode_modules/\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "prettier": "prettier --write packages/**/**.ts"\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i husky @commitlint/cli @commitlint/config-conventional lint-staged -D\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "lint-staged": "lint-staged"\n  },\n  "lint-staged": {\n    "packages/**/**.{ts}": [\n      "npm run prettier",\n      "npm run eslint",\n      "git add"\n    ]\n  },\n  "husky": {\n    "hooks": {\n      "pre-commit": [\n        "lint-staged"\n      ],\n      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n    }\n  },\n}\n')),(0,l.kt)("p",null,"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"commitlint.config.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  extends: ['@commitlint/config-conventional'],\n  rules: {\n    'type-enum': [\n      2,\n      'always',\n      [\n        'feat',\n        'fix',\n        'docs',\n        'style',\n        'refactor',\n        'perf',\n        'test',\n        'build',\n        'ci',\n        'chore',\n        'revert',\n        'config'\n      ]\n    ],\n    'subject-full-stop': [0, 'never'],\n    'subject-case': [0, 'never'],\n    'header-max-length': [0, 'always', 150]\n  }\n};\n\n")),(0,l.kt)("h2",{id:"rollup-\u6253\u5305"},"Rollup \u6253\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm i rollup @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-terser --save-dev\n")),(0,l.kt)("h2",{id:"jest"},"Jest"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D jest @types/jest ts-jest\n./node_modules/.bin/jest --init\n")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"jest-init.png",src:t(31029).Z,width:"2564",height:"816"})),(0,l.kt)("h2",{id:"\u521b\u5efapackage"},"\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"h2"},"package")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"lerna create thanos\n")),(0,l.kt)("p",null,"\u751f\u6210\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 .npmignore\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 __tests__\n\u2502   \u2514\u2500\u2500 power-gem.test.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 lib\n\u2502   \u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 package.json\n")),(0,l.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u5168\u90e8\u5b8c\u6210\u4e86\u3002"),(0,l.kt)("h2",{id:"lerna-\u811a\u672c\u914d\u7f6e"},"Lerna \u811a\u672c\u914d\u7f6e"),(0,l.kt)("h3",{id:"lerna-add-\u591a\u4f9d\u8d56"},"lerna add \u591a\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D commander shelljs prompts\n")),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vue-cli"},"vue-cli")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/study-notes/engineering/lerna/build-cli/qa"},"\u9047\u5230\u7684\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5")))}m.isMDXComponent=!0},85730:function(e,n,t){n.Z=t.p+"assets/images/eslint-init-80ef0c0d8102e7ba905c70111a014b4d.png"},31029:function(e,n,t){n.Z=t.p+"assets/images/jest-init-6c899dbf44a32e4bed3d1cefb03edad8.png"},98425:function(e,n,t){n.Z=t.p+"assets/images/sh-lerna-init-i-2d6a18069bd7e3ee40f242fed7025a07.png"}}]);