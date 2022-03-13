"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[6459],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,i(i({ref:e},p),{},{components:t})):r.createElement(g,i({ref:e},p))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21496:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={},s="Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e8c\u96c6",c={unversionedId:"lerna/build-cli/2",id:"lerna/build-cli/2",title:"Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e8c\u96c6",description:"\u811a\u624b\u67b6\u7ed3\u6784",source:"@site/engineering/lerna/build-cli/2.md",sourceDirName:"lerna/build-cli",slug:"/lerna/build-cli/2",permalink:"/study-notes/engineering/lerna/build-cli/2",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1647177225,formattedLastUpdatedAt:"3/13/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e00\u96c6",permalink:"/study-notes/engineering/lerna/build-cli/1"},next:{title:"\u9047\u5230\u7684\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5",permalink:"/study-notes/engineering/lerna/build-cli/qa"}},p={},d=[{value:"\u811a\u624b\u67b6\u7ed3\u6784",id:"\u811a\u624b\u67b6\u7ed3\u6784",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u8c03\u8bd5\u914d\u7f6e",id:"\u8c03\u8bd5\u914d\u7f6e",level:2},{value:"\u811a\u624b\u67b6\u5f00\u53d1",id:"\u811a\u624b\u67b6\u5f00\u53d1",level:2},{value:"\u7248\u672c\u68c0\u6d4b",id:"\u7248\u672c\u68c0\u6d4b",level:3},{value:"\u547d\u4ee4\u8f93\u5165",id:"\u547d\u4ee4\u8f93\u5165",level:3},{value:"\u547d\u4ee4\u89e3\u6790",id:"\u547d\u4ee4\u89e3\u6790",level:3},{value:"\u6548\u679c",id:"\u6548\u679c",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:d};function m(n){var e=n.components,l=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lerna-\u642d\u5efa\u811a\u624b\u67b6-\u7b2c\u4e8c\u96c6"},"Lerna \u642d\u5efa\u811a\u624b\u67b6 \u7b2c\u4e8c\u96c6"),(0,a.kt)("h2",{id:"\u811a\u624b\u67b6\u7ed3\u6784"},"\u811a\u624b\u67b6\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"thanos.png",src:t(32898).Z,width:"3358",height:"1954"})),(0,a.kt)("p",null,"\u7ec4\u7ec7\u7ed3\u6784"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Thanos")," \u4e3b\u8981\u662f\u6267\u884c\u7528\u6237\u7684\u8f93\u5165\u547d\u4ee4\u89e3\u6790"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"space-gem")," \u4e3b\u8981\u662f\u5904\u7406\u4e0b\u8f7d\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"power-gem")," \u4e3b\u8981\u662f\u63d0\u4f9b\u6574\u4e2a\u811a\u624b\u67b6\u9700\u8981\u7684\u5305\u548c\u516c\u5171\u65b9\u6cd5")),(0,a.kt)("p",null,"\u5176\u4ed6\u7684\u8fd8\u6ca1\u60f3\u597d\uff0c\u76ee\u524d\u7b80\u5355\u7684\u811a\u624b\u67b6\uff0c\u8fd9\u4e9b\u5c31\u5df2\u7ecf\u8db3\u591f\u4e86\uff0c\u65e5\u540e\u8865\u5168\u3002"),(0,a.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"lerna create pkg-name\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"packages/thanos/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 .npmignore\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u2514\u2500\u2500 thanos.js\n\u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u251c\u2500\u2500 add.js\n\u2502\xa0\xa0 \u251c\u2500\u2500 create.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 package-lock.json\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"packages/space-gem/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 .npmignore\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2514\u2500\u2500 space-gem.test.ts\n\u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u251c\u2500\u2500 @types\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 gitClone.d.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 gitignore.d.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 lib\n\u2502\xa0\xa0     \u251c\u2500\u2500 gitClone.js\n\u2502\xa0\xa0     \u2514\u2500\u2500 gitignore.js\n\u251c\u2500\u2500 index.ts\n\u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u251c\u2500\u2500 gitClone.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 gitignore.ts\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"packages/power-gem/")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 .npmignore\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2514\u2500\u2500 power-gem.test.ts\n\u251c\u2500\u2500 index.ts\n\u251c\u2500\u2500 lib\n\u2502\xa0\xa0 \u251c\u2500\u2500 checkNodeVersion.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 clearConsole.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 logger.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 request.ts\n\u2502\xa0\xa0 \u251c\u2500\u2500 spinner.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 strip-ansi.ts\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 typings\n    \u251c\u2500\u2500 index.d.ts\n    \u2514\u2500\u2500 typings.d.ts\n")),(0,a.kt)("h2",{id:"\u8c03\u8bd5\u914d\u7f6e"},"\u8c03\u8bd5\u914d\u7f6e"),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"npm link")," \u5c06\u672c\u5730\u7684\u5305\u8bbe\u7f6e\u6210\u8f6f\u94fe\u63a5\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5f15\u7528\u5176\u4ed6",(0,a.kt)("inlineCode",{parentName:"p"},"ts"),"\u5f00\u53d1\u7684\u5305\uff0c\u9700\u8981\u8f6c\u6362\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"\u624d\u53ef\u4ee5\u5f15\u7528\uff0c\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"tsc - -w"),"\u53ef\u4ee5\u5b9e\u65f6\u76d1\u63a7\u5305\u5185\u5bb9\u7684\u53d8\u5316\uff0c\u5e76\u7f16\u8bd1\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),"\u3002"),(0,a.kt)("h2",{id:"\u811a\u624b\u67b6\u5f00\u53d1"},"\u811a\u624b\u67b6\u5f00\u53d1"),(0,a.kt)("h3",{id:"\u7248\u672c\u68c0\u6d4b"},"\u7248\u672c\u68c0\u6d4b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"power-gem/lib/checkNodeVersion.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import chalk from 'chalk';\nimport semver from 'semver';\n\nexport default function checkNodeVersion(wanted: string, id: string | number) {\n  if (!semver.satisfies(process.version, wanted)) {\n    console.log(\n      chalk.red(\n        'You are using Node ' +\n          process.version +\n          ', but this version of ' +\n          id +\n          ' requires Node ' +\n          wanted +\n          '.\\nPlease upgrade your Node version.',\n      ),\n    );\n    process.exit(1);\n  }\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"thanos/bin/thanos.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"#!/usr/bin/env node\n\nconst { checkNodeVersion, chalk } = require('power-gem');\nconst currentNodeVersion = process.versions.node;\nconst semver = currentNodeVersion.split('.');\nconst major = +semver[0];\n\nif (major < 8) {\n  checkNodeVersion(major, 'Rain120/thanos');\n  console.error(\n    'You are running Node ' +\n      currentNodeVersion +\n      '.\\n' +\n      'Thanos requires Node 8 or higher. \\n' +\n      'Please update your version of Node.',\n  );\n  process.exit(1);\n}\n")),(0,a.kt)("h3",{id:"\u547d\u4ee4\u8f93\u5165"},"\u547d\u4ee4\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const program = require('commander');\nconst minimist = require('minimist');\n\nprogram\n  .version(`Rain120/thanos ${require('../package').version}`)\n  .usage('<command> [options]');\n\nprogram\n  .command('init <app-name>')\n  .description('create a new project powered by thanos')\n  .option('-c, --custom', 'Custom init project')\n  .action((name, cmd) => {\n    console.log(name, cmd);\n  });\n\nprogram\n  .command('add [configOptions]')\n  .description('add config file in the current file folder')\n  .option('-g, --gitignore', 'add the file for gitignore')\n  .option('-tsc, --tsconfig', 'add the file for tsconfig.json')\n  .option('-c, --commitlint', 'add the file for commitlint.js')\n  .option('-p, --prettier', 'add the file for prettier')\n  .option('-es, --eslint', 'add the file for eslint')\n  .allowUnknownOption()\n  .action(type => {\n    require('../lib/add')(type, minimist(process.argv.slice(3)));\n  });\n\nprogram\n  .command('info')\n  .description('print debugging information about your environment')\n  .action((cmd) => {\n    console.log(chalk.bold('\\nEnvironment Info:'))\n    require('envinfo').run(\n      {\n        System: ['OS', 'CPU'],\n        Binaries: ['Node', 'Yarn', 'npm'],\n        Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],\n        npmPackages: '/**/{typescript,*gem*,*thanos*}',\n        npmGlobalPackages: ['Rain120/infinity-gauntlet-cli']\n      },\n      {\n        showNotFound: true,\n        duplicates: true,\n        fullTree: true\n      }\n    ).then(console.log)\n  })\n\n// output help information on unknown commands\nprogram\n  .arguments('<command>')\n  .action(cmd => {\n    program.outputHelp()\n    console.log(`  ` + chalk.red(`Unknown command about ${chalk.yellow(cmd)}.`))\n  })\n\n// add some useful info on help\nprogram.on('--help', () => {\n  console.log(`  Run ${chalk.cyan(`thanos <command> --help`)} for detailed usage of given command.`)\n})\n\nprogram.parse(process.argv);\n")),(0,a.kt)("h3",{id:"\u547d\u4ee4\u89e3\u6790"},"\u547d\u4ee4\u89e3\u6790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { gitignore } = require('space-gem');\n\nfunction add(options = {}, context = process.cwd()) {\n  console.log(options, context);\n  gitignore({\n    options,\n    context,\n  });\n}\n\nmodule.exports = (...args) => {\n  return add(...args);\n};\n\n")),(0,a.kt)("h3",{id:"\u6548\u679c"},"\u6548\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"thanos--help.png",src:t(60839).Z,width:"1602",height:"512"})),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/study-notes/engineering/lerna/build-cli/qa"},"\u9047\u5230\u7684\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5")))}m.isMDXComponent=!0},60839:function(n,e,t){e.Z=t.p+"assets/images/thanos--help-e69034fc513b1065bc6bc7488cdee43c.png"},32898:function(n,e,t){e.Z=t.p+"assets/images/thanos-255c727f4723143e4723a0c03b1ebaf4.png"}}]);