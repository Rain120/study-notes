# React 脚手架 Typescript 多入口配置
## 新建项目

```sh
npx create-react-app my-app --template typescript
```

## 自定义配置

`create-react-app` 让我们可以快速和专注项目的开发而不用过多的去关心工具和服务的配置，但是有些场景我们还是需要自定配置的，可以执行下面的命令:

```sh
npm run eject
```

**Note:** 这个操作是不可逆的操作。

如果你还是想让你的项目清新点，可以使用 [react-app-rewired](https://github.com/timarney/react-app-rewired)。

`Typescript` 项目，需要在 `tsconfig.json` 中进一步设置，如果直接在 `tsconfig.json` 文件中直接设置 `paths` 属性，当重新`run` 的时候，属性又会被删除。

[解决办法](https://github.com/facebook/create-react-app/issues/5645#issuecomment-435201019):

`paths.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "svg/*": ["src/svg/*"],
      "components/*": ["src/components/*"]
    }
  }
}
```

`tsconfig.json`

```json
{
  "extends": "./paths.json"
}
```

参考: [Add baseUrl and paths in tsconfig.json and jsconfig.json #5645](https://github.com/facebook/create-react-app/issues/5645)

## 多入口配置

我们知道 `webpack` 打包最重要的几个参数有 `entry`, `output`, `plugins`，所以我们针对这几个参数进行修改即可。

### entry

动态 `paths`

```js
const path = require('path');
const fs = require('fs');
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
// ...
/**
 * @description fetch entry map src/${file}/index
 * @example src/window/index,
 */
function fetchEntryMap() {
  const dirs = fs.readdirSync(resolveApp('src/'));
  const map = {};
  dirs.forEach(file => {
    const state = fs.statSync(resolveApp(`src/${file}`));
    if (state.isDirectory()) {
      map[file] = resolveModule(resolveApp, `src/${file}/index`);
    }
  });
  return map;
}

const entryMap = fetchEntryMap();

module.exports = {
  // ...
  entryMap
}
```

接下来我们需要魔改下 `webpack.config.js`中的 `entry`属性

```js
// ...
/**
 * @description setupMultiEntryConfig
 * @param {string} webpackEnv
 * @param {boolean} shouldUseReactRefresh
 */
function setupMultiEntryConfig(webpackEnv, shouldUseReactRefresh) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  const entry = {};

  Object.keys(paths.entryMap).forEach(key => {
    const entryPath = paths.entryMap[key];
    // entry[key] = isEnvDevelopment && !shouldUseReactRefresh
    //   ? [isEnvDevelopment && webpackDevClientEntry, entryPath]
    //   : entryPath;

    entry[key] = [isEnvDevelopment && webpackDevClientEntry, entryPath].filter(Boolean);
  });

  return { entry };
}

module.exports = function (webpackEnv) {
  // ...
  const { entry, plugins = [] } = setupMultiEntryConfig(webpackEnv, shouldUseReactRefresh);
  
  return {
    entry,
  }
}
```

### output

配置打包输出的不同 `bundle`

```js
module.exports = function (webpackEnv) {
  // ...
  
  return {
    output: {
      filename: isEnvProduction ? 'static/js/[name].js' : isEnvDevelopment && 'static/js/[name].bundle.js',
      chunkFilename: isEnvProduction ? 'static/js/[name].chunk.js' : isEnvDevelopment && 'static/js/[name].chunk.js',
      // ...
    },
    // ...
  }
}
```

### plugins

在 `webpack.config.js`中的方法 `setupMultiEntryConfig`上增加一些处理，

```js
function setupMultiEntryConfig(webpackEnv, shouldUseReactRefresh) {
  // ...
  const plugins = [];

  Object.keys(paths.entryMap).forEach(key => {
    const entryPath = paths.entryMap[key];
    
    // ...

    // Generates an `index.html` file with the <script> injected.
    const htmlPlugin = new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          chunks: [key],
          inject: true,
          template: paths.appHtml,
          filename: `${key}.html`,
        },
        isEnvProduction
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined,
      ),
    );
    plugins.push(htmlPlugin);
  });
  
  return { entry, plugins };
}

module.exports = function (webpackEnv) {
  // ...
  const { entry, plugins = [] } = setupMultiEntryConfig(webpackEnv, shouldUseReactRefresh);
  
  return {
    // ...
    plugins: [
      ...plugins,
      // Generate an asset manifest file with the following content:
      // - "files" key: Mapping of all asset filenames to their corresponding
      //   output file so that tools can pick it up without having to parse
      //   `index.html`
      // - "entrypoints" key: Array of files which are included in `index.html`,
      //   can be used to reconstruct the HTML if necessary
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: paths.publicUrlOrPath,
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          // const entrypointFiles = entrypoints.main.filter(
          //   fileName => !fileName.endsWith('.map')
          // );
          let entrypointFiles = [];
          for (let [entryFile, fileName] of Object.entries(entrypoints)) {
            let notMapFiles = fileName.filter(fileName => !fileName.endsWith('.map'));
            entrypointFiles = entrypointFiles.concat(notMapFiles);
          }

          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
          };
        },
      }),
      // ...
    ],
    // ...
  }
}
```

### start.js

```js
// entry map
const appIndexFiles = Object.keys(paths.entryMap).map(key => paths.entryMap[key]);

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml].concat(appIndexFiles))) {
  process.exit(1);
}
```

### build.js

```js
// entry map
const appIndexFiles = Object.keys(paths.entryMap).map(key => paths.entryMap[key]);

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml].concat(appIndexFiles))) {
  process.exit(1);
}
```



## 参考资料

[Get Start](https://create-react-app.dev/docs/getting-started)

[多入口配置](https://xuxun.cool/2020/09/multiple-entry-with-create-react-app-v3/)

