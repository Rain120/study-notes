"use strict";(self.webpackChunkstudy_notes=self.webpackChunkstudy_notes||[]).push([[9070],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var o=2;o<i;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33842:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],p={},l=void 0,o={unversionedId:"react/crd",id:"react/crd",isDocsHomePage:!1,title:"crd",description:"\u65b0\u5efa\u9879\u76ee",source:"@site/fe/react/crd.md",sourceDirName:"react",slug:"/react/crd",permalink:"/study-notes/fe/react/crd",tags:[],version:"current",lastUpdatedBy:"Rain120",lastUpdatedAt:1638186201,formattedLastUpdatedAt:"11/29/2021",frontMatter:{},sidebar:"sidebar",previous:{title:"require",permalink:"/study-notes/fe/node/require"},next:{title:"events",permalink:"/study-notes/fe/react/events"}},c=[{value:"\u65b0\u5efa\u9879\u76ee",id:"\u65b0\u5efa\u9879\u76ee",children:[],level:4},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",children:[],level:4},{value:"\u591a\u5165\u53e3\u914d\u7f6e",id:"\u591a\u5165\u53e3\u914d\u7f6e",children:[{value:"entry",id:"entry",children:[],level:5},{value:"output",id:"output",children:[],level:5},{value:"plugins",id:"plugins",children:[],level:5},{value:"start.js",id:"startjs",children:[],level:5},{value:"build.js",id:"buildjs",children:[],level:5}],level:4},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:4}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"\u65b0\u5efa\u9879\u76ee"},"\u65b0\u5efa\u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template typescript\n")),(0,i.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u8ba9\u6211\u4eec\u53ef\u4ee5\u5feb\u901f\u548c\u4e13\u6ce8\u9879\u76ee\u7684\u5f00\u53d1\u800c\u4e0d\u7528\u8fc7\u591a\u7684\u53bb\u5173\u5fc3\u5de5\u5177\u548c\u670d\u52a1\u7684\u914d\u7f6e\uff0c\u4f46\u662f\u6709\u4e9b\u573a\u666f\u6211\u4eec\u8fd8\u662f\u9700\u8981\u81ea\u5b9a\u914d\u7f6e\u7684\uff0c\u53ef\u4ee5\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run eject\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," \u8fd9\u4e2a\u64cd\u4f5c\u662f\u4e0d\u53ef\u9006\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u8fd8\u662f\u60f3\u8ba9\u4f60\u7684\u9879\u76ee\u6e05\u65b0\u70b9\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Typescript")," \u9879\u76ee\uff0c\u9700\u8981\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e2d\u8fdb\u4e00\u6b65\u8bbe\u7f6e\uff0c\u5982\u679c\u76f4\u63a5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u6587\u4ef6\u4e2d\u76f4\u63a5\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")," \u5c5e\u6027\uff0c\u5f53\u91cd\u65b0",(0,i.kt)("inlineCode",{parentName:"p"},"run")," \u7684\u65f6\u5019\uff0c\u5c5e\u6027\u53c8\u4f1a\u88ab\u5220\u9664\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/5645#issuecomment-435201019"},"\u89e3\u51b3\u529e\u6cd5"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"paths.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "svg/*": ["src/svg/*"],\n      "components/*": ["src/components/*"]\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./paths.json"\n}\n')),(0,i.kt)("p",null,"\u53c2\u8003: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/5645"},"Add baseUrl and paths in tsconfig.json and jsconfig.json #5645")),(0,i.kt)("h4",{id:"\u591a\u5165\u53e3\u914d\u7f6e"},"\u591a\u5165\u53e3\u914d\u7f6e"),(0,i.kt)("p",null,"\u6211\u4eec\u77e5\u9053 ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," \u6253\u5305\u6700\u91cd\u8981\u7684\u51e0\u4e2a\u53c2\u6570\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"entry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"output"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),"\uff0c\u6240\u4ee5\u6211\u4eec\u9488\u5bf9\u8fd9\u51e0\u4e2a\u53c2\u6570\u8fdb\u884c\u4fee\u6539\u5373\u53ef\u3002"),(0,i.kt)("h5",{id:"entry"},"entry"),(0,i.kt)("p",null,"\u52a8\u6001 ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst fs = require('fs');\nconst resolveApp = relativePath => path.resolve(appDirectory, relativePath);\n// ...\n/**\n * @description fetch entry map src/${file}/index\n * @example src/window/index,\n */\nfunction fetchEntryMap() {\n  const dirs = fs.readdirSync(resolveApp('src/'));\n  const map = {};\n  dirs.forEach(file => {\n    const state = fs.statSync(resolveApp(`src/${file}`));\n    if (state.isDirectory()) {\n      map[file] = resolveModule(resolveApp, `src/${file}/index`);\n    }\n  });\n  return map;\n}\n\nconst entryMap = fetchEntryMap();\n\nmodule.exports = {\n  // ...\n  entryMap\n}\n")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u9b54\u6539\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"entry"),"\u5c5e\u6027"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n/**\n * @description setupMultiEntryConfig\n * @param {string} webpackEnv\n * @param {boolean} shouldUseReactRefresh\n */\nfunction setupMultiEntryConfig(webpackEnv, shouldUseReactRefresh) {\n  const isEnvDevelopment = webpackEnv === 'development';\n  const isEnvProduction = webpackEnv === 'production';\n\n  const entry = {};\n\n  Object.keys(paths.entryMap).forEach(key => {\n    const entryPath = paths.entryMap[key];\n    // entry[key] = isEnvDevelopment && !shouldUseReactRefresh\n    //   ? [isEnvDevelopment && webpackDevClientEntry, entryPath]\n    //   : entryPath;\n\n    entry[key] = [isEnvDevelopment && webpackDevClientEntry, entryPath].filter(Boolean);\n  });\n\n  return { entry };\n}\n\nmodule.exports = function (webpackEnv) {\n  // ...\n  const { entry, plugins = [] } = setupMultiEntryConfig(webpackEnv, shouldUseReactRefresh);\n  \n  return {\n    entry,\n  }\n}\n")),(0,i.kt)("h5",{id:"output"},"output"),(0,i.kt)("p",null,"\u914d\u7f6e\u6253\u5305\u8f93\u51fa\u7684\u4e0d\u540c ",(0,i.kt)("inlineCode",{parentName:"p"},"bundle")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (webpackEnv) {\n  // ...\n  \n  return {\n    output: {\n      filename: isEnvProduction ? 'static/js/[name].js' : isEnvDevelopment && 'static/js/[name].bundle.js',\n      chunkFilename: isEnvProduction ? 'static/js/[name].chunk.js' : isEnvDevelopment && 'static/js/[name].chunk.js',\n      // ...\n    },\n    // ...\n  }\n}\n")),(0,i.kt)("h5",{id:"plugins"},"plugins"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"\u4e2d\u7684\u65b9\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"setupMultiEntryConfig"),"\u4e0a\u589e\u52a0\u4e00\u4e9b\u5904\u7406\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function setupMultiEntryConfig(webpackEnv, shouldUseReactRefresh) {\n  // ...\n  const plugins = [];\n\n  Object.keys(paths.entryMap).forEach(key => {\n    const entryPath = paths.entryMap[key];\n    \n    // ...\n\n    // Generates an `index.html` file with the <script> injected.\n    const htmlPlugin = new HtmlWebpackPlugin(\n      Object.assign(\n        {},\n        {\n          chunks: [key],\n          inject: true,\n          template: paths.appHtml,\n          filename: `${key}.html`,\n        },\n        isEnvProduction\n          ? {\n              minify: {\n                removeComments: true,\n                collapseWhitespace: true,\n                removeRedundantAttributes: true,\n                useShortDoctype: true,\n                removeEmptyAttributes: true,\n                removeStyleLinkTypeAttributes: true,\n                keepClosingSlash: true,\n                minifyJS: true,\n                minifyCSS: true,\n                minifyURLs: true,\n              },\n            }\n          : undefined,\n      ),\n    );\n    plugins.push(htmlPlugin);\n  });\n  \n  return { entry, plugins };\n}\n\nmodule.exports = function (webpackEnv) {\n  // ...\n  const { entry, plugins = [] } = setupMultiEntryConfig(webpackEnv, shouldUseReactRefresh);\n  \n  return {\n    // ...\n    plugins: [\n      ...plugins,\n      // Generate an asset manifest file with the following content:\n      // - \"files\" key: Mapping of all asset filenames to their corresponding\n      //   output file so that tools can pick it up without having to parse\n      //   `index.html`\n      // - \"entrypoints\" key: Array of files which are included in `index.html`,\n      //   can be used to reconstruct the HTML if necessary\n      new ManifestPlugin({\n        fileName: 'asset-manifest.json',\n        publicPath: paths.publicUrlOrPath,\n        generate: (seed, files, entrypoints) => {\n          const manifestFiles = files.reduce((manifest, file) => {\n            manifest[file.name] = file.path;\n            return manifest;\n          }, seed);\n          // const entrypointFiles = entrypoints.main.filter(\n          //   fileName => !fileName.endsWith('.map')\n          // );\n          let entrypointFiles = [];\n          for (let [entryFile, fileName] of Object.entries(entrypoints)) {\n            let notMapFiles = fileName.filter(fileName => !fileName.endsWith('.map'));\n            entrypointFiles = entrypointFiles.concat(notMapFiles);\n          }\n\n          return {\n            files: manifestFiles,\n            entrypoints: entrypointFiles,\n          };\n        },\n      }),\n      // ...\n    ],\n    // ...\n  }\n}\n")),(0,i.kt)("h5",{id:"startjs"},"start.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// entry map\nconst appIndexFiles = Object.keys(paths.entryMap).map(key => paths.entryMap[key]);\n\n// Warn and crash if required files are missing\nif (!checkRequiredFiles([paths.appHtml].concat(appIndexFiles))) {\n  process.exit(1);\n}\n")),(0,i.kt)("h5",{id:"buildjs"},"build.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// entry map\nconst appIndexFiles = Object.keys(paths.entryMap).map(key => paths.entryMap[key]);\n\n// Warn and crash if required files are missing\nif (!checkRequiredFiles([paths.appHtml].concat(appIndexFiles))) {\n  process.exit(1);\n}\n")),(0,i.kt)("h4",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/getting-started"},"Get Start")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://xuxun.cool/2020/09/multiple-entry-with-create-react-app-v3/"},"\u591a\u5165\u53e3\u914d\u7f6e")))}d.isMDXComponent=!0}}]);