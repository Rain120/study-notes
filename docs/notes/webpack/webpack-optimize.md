#### 可视化依赖分析工具

##### [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

```sh
# NPM
npm install --save-dev webpack-bundle-analyzer
# Yarn
yarn add -D webpack-bundle-analyzer
```

```js
// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

```json
{
	"scripts": {
    "stats": "webpack --env production --json > stats.json"
  }
}
```

##### [webpack-chart](http://alexkuz.github.io/webpack-chart/)

##### [analyse](http://webpack.github.io/analyse)

##### SMP 时间分析

[speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin)

```sh
# npm 
npm install --save-dev speed-measure-webpack-plugin

# yarn
yarn add -D speed-measure-webpack-plugin
```

```js
// webpack.config.js
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const options = {};
const smp = new SpeedMeasurePlugin(options);

const webpackConfig = smp.wrap({
  plugins: [
    new MyPlugin(),
    new MyOtherPlugin()
  ]
});
```

#### 模块热替换(HMR)

模块热替换 `(Hot Module Replacement 或 HMR)` 是 `webpack` 提供的最有用的功能之一。它会在应用程序运行过程中替换、添加或删除[模块](https://www.webpackjs.com/concepts/modules/)，而无需进行完全刷新。

```js
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // ...
  devServer: {
    contentBase: [path.join(__dirname, "dist")],
    compress: true,
    port: 9527, // 启动端口号
    hot: true, // 启用 webpack 的模块热替换特性
    inline: true,
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
   	new webpack.NamedModulesPlugin(),
   	new webpack.HotModuleReplacementPlugin()
  ],
  // ...
}
```



```js
// index.js
if (module.hot) {
  module.hot.accept('./library.js', function() {
    // 使用更新过的 library 模块执行某些操作...
  })
}
```

#### 懒加载(按需加载)

TODO ing....

#### 抽离公共代码

将多次引入的模块抽离成公共代码块。

```js
// webpack.config.js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      // 缓存组
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          // 公共的代码块 引入模块的最小数量
          minChunks: 2,
          // 升级权重
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```



[splitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)

#### loader 配置

`loader` 让 `webpack` 能够去处理那些非 `JavaScript` 文件(`webpack` 自身只理解 `JavaScript`)。`loader` 可以将所有类型的文件转换为 `webpack` 能够处理的有效模块,然后你就可以利用 `webpack` 的打包能力,对它们进行处理。

`Webpack Loader` 更多 [Here](notes/webpack/webpack-loader.md)

```js
// webpack.config.js
const webpack = require('webpack');
const path = require('path');

// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory=true',
        include: [
          path.resolve('src')
        ],
        exclude: /node_modules/
      },
    ],
  },
  // ...
};
```

### externals

我们可以将一些JS文件存储在 `CDN` 上(减少 `Webpack`打包出来的 `js` 体积)，在 `index.html` 中通过 `<script>` 标签引入

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="root">root</div>
		<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
</body>
</html>
```

我们希望在使用时，仍然可以通过 `import` 的方式去引用(如 `import $ from 'jquery'`)，并且希望 `webpack` 不会对其进行打包，此时就可以配置 `externals`。

```js
//webpack.config.js
module.exports = {
    //...
    externals: {
        //jquery通过script引入之后，全局中即有了 jQuery 变量
        'jquery': 'jQuery'
    }
}

```



#### resolve 配置

[resolve](https://webpack.js.org/configuration/resolve/) 配置 `webpack` 如何去寻找模块对应的文件。

```js
// webpack.config.js
module.expotrs = {
  // ...
  resolve: {
    alias: {
      'utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  // ...
}
```

##### alias

创建 `import` 或 `require` 的别名，来确保模块引入变得更简单。

```js
// webpack.config.js
module.expotrs = {
  // ...
  resolve: {
    alias: {
      'utils': path.resolve(__dirname, 'src/utils'),
    }
  },
  // ...
}
```

##### extensions

试图按顺序解析这些后缀名。

**Note:** 如果有多个文件有相同的名字，但后缀名不同，`webpack` 会解析列在数组首位的后缀的文件 并跳过其余的后缀。

```js
// webpack.config.js
module.expotrs = {
  // ...
  resolve: {
    extensions: ['.js', '.json']
  },
  // ...
}
```

用户在引入模块时不带扩展,

```js
import File from '../path/to/file';
```

使用此选项会 **覆盖默认数组**，这就意味着 webpack 将不再尝试使用默认扩展来解析模块。

##### modules

告诉 `webpack` 解析模块时应该搜索的目录。

```js
// webpack.config.js
module.expotrs = {
  // ...
  resolve: {
    modules: ['node_modules']
  },
  // ...
}
```

#### noParse

[module.noParse](https://webpack.js.org/configuration/module/#modulenoparse) 是 `webpack` 中的一个配置项, 主要通过忽略对 `amd / cmd` 模块代码的递归解析和处理来提高构建性能。

参数: `RegExp[RegExp] function(resource) string[string]`

```javascript
noParse: RegExp[RegExp] | function(resource) | string[string]
```

**Demo**

```js
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ...
  module: {
    // noParse: 'lodash',
    // noParse: /lodash/,
    noParse: resource => /lodash/.test(resource)
  },
  // ...
}
```



#### IgnorePlugin

[IgnorePlugin](https://webpack.js.org/plugins/ignore-plugin/) 在 `import`或 `require` 调用时, 忽略第三方包指定模块, 使其不被打包。

参数列表:

- `requestRegExp` 匹配 `(test)` 资源请求路径的正则表达式。
- `contextRegExp` (可选) 匹配 `(test)` 资源上下文 (目录) 的正则表达式。

```javascript
new webpack.IgnorePlugin(requestRegExp, [contextRegExp])
```

**Demo**

```javascript
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.IgnorePlugin(/\.\/locale$/, /moment$/)
  ],
  // ...
}
```



#### 动态链接库(DllPlugin)

[DllPlugin](https://webpack.js.org/plugins/dll-plugin/#dllplugin) 和 [DllReferencePlugin](https://webpack.js.org/plugins/dll-plugin/#dllreferenceplugin) 可以实现对第三方依赖的拆分, 再次打包就不需要打包此模块了，从而提高构建速度。

##### DllPlugin

创建一个只有 `dll`的 `bundles`, 并生成一个 `mainfest.json`文件，用来让 `DllReferencePlugin` 映射到相关依赖上。

参数列表:

- `context` `(optional)`: `manifest` 文件中请求的上下文`(context)`(默认值为 `webpack` 的上下文`(context)`)
- `name`: 暴露出的 `DLL` 的函数名 ([TemplatePaths](https://github.com/webpack/webpack/blob/master/lib/TemplatedPathPlugin.js): `[hash]` & `[name]` )
- `path`: `manifest.json` 文件的**绝对路径** (输出文件)

```javascript
new webpack.DllPlugin(options)
```

**Demo**

```javascript
const path = require('path');
const webpack = require('webpack');

// webpack.config.js
module.exports = {
  // ...
  mode: 'development',
  entry: {
    react: ['react', 'react-dom'],
  },
  output: {
    filename: '__dll_[name].js',
    path: path.resolve(__dirname, 'dll'),
    library: '[name]-[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      // name 必须和 output.library 一致
      name: '[name]-[hash]',
      // 该属性需要与 DllReferencePlugin 中一致
      context: __dirname,
      path: path.join(__dirname, 'dll', '[name]-mainfest.json')
    }),
  ],
  // ...
}
```

##### DllReferencePlugin

把只有 `dll` 的 `bundles`引用到需要的预编译的依赖。

参数列表:

- `context`: (**绝对路径**) `manifest` (或者是内容属性)中请求的上下文
- `manifest`: 包含 `content` 和 `name` 的对象，或者在编译时`(compilation)`的一个用于加载的 `JSON manifest` 绝对路径
- `content`(optional): 请求到模块 `id` 的映射 (默认值为 `manifest.content`)
- `name` `(optional)`: `dll` 暴露的地方的名称 (默认值为 `manifest.name`) (可参考 [`externals`](https://www.webpackjs.com/configuration/externals/))
- `scope` `(optional):` `dll` 中内容的前缀
- `sourceType` `(optional)`: `dll` 是如何暴露的 ([libraryTarget](https://www.webpackjs.com/configuration/output/#output-librarytarget))

```javascript
new webpack.DllReferencePlugin(options)
```

**Demo**

```javascript
const path = require('path');
const webpack = require('webpack');

// webpack.config.js
module.exports = {
  // ...
  plugins: [
    new webpack.DllReferencePlugin({
      // 该属性需要与 DllPlugin 中的 context 一致
      context: __dirname,
      mainfest: require('path/react-mainfest.json')
    }),
  ],
  // ...
}
```

### HardSourceWebpackPlugin

`HardSourceWebpackPlugin` 为模块提供中间缓存，缓存默认的存放路径是: `node_modules/.cache/hard-source`。

##### 安装

```sh
# npm
npm install hard-source-webpack-plugin -D

# yarn
yarn add hard-source-webpack-plugin -D
```

##### 配置

```js
// webpack.config.js
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HardSourceWebpackPlugin({
        // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中，因此如 
        // 果清除了node_modules，则缓存也是如此
        cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
        // Either an absolute path or relative to webpack's options.context.
        // Sets webpack's recordsPath if not already set.
        recordsPath: 'node_modules/.cache/hard-source/[confighash]/records.json',
        // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配 
        // 置构建不同的缓存
        configHash: function(webpackConfig) {
           // node-object-hash on npm can be used to build this.
           return require('node-object-hash')({sort: false}).hash(webpackConfig);
        },
        // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输 
        // 出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
        environmentHash: {
           root: process.cwd(),
           directories: [],
           files: ['package-lock.json', 'yarn.lock'],
        },
    })
  ],
  // ...
}
```



[hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin)

#### HappyPack

##### 作用

将文件解析任务分解成多个子进程并发执行。子进程处理完任务后再将结果发送给主进程。所以可以大大提升 `Webpack` 的项目构件速度。`Happypack` 只作用在 `loader` 上，使用多个进程同时对文件进行编译。

**Note**: `HappyPack` 对`file-loader`、url-loader 支持的不友好。

##### 运行原理

![happypack-workflow.png](./images/happypack-workflow.png)

##### 使用

```sh
npm install --save-dev happypack
```

##### 配置

```javascript
// webpack.config.js
const webpack = require('webpack');
const Happypack = require('happypack');
const threadPool = Happypack.ThreadPool({ size: 5});

module.export = {
	// ...
  module: {
      rules: [{
        test: /\.js$/,
        // ① use: 'babel-loader?cacheDirectory',
        // ② use: ['babel-loader?cacheDirectory'],
				// ③ use: ['happypack/loader?id=babel'],
        use: [{
          // ④ loader: 'babel-loader?cacheDirectory',
          // ⑤
          loader: 'happypack/loader?id=babel',
        }]
      }]
  },
  plugins: [
    new Happypack({
      // 与rules 中loader query中设置的id保持一致，唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
      id: 'babel',
      // 指定对应 loader 编译源文件时同时使用的进程数，默认是 3
      threads: 3,
      // 代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多
      threadPool,
      // 写法与webpack loaders配置一致
      // ① loaders: 'babel-loader?cacheDirectory',
      // ② loaders: ['babel-loader?cacheDirectory'],
      // loaders: ['babel-loader'],
      // ① ② ④ loader有 options时可以这样写
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
      // 是否允许 happypack 输出日志，默认是 true
      verbose: true,
      // 是否允许 happypack 在运行 webpack --profile 时输出日志，默认是 false
      verboseWhenProfiling: false,
      // 是否允许 happypack 打印 log 分析信息，默认是 false
      debug: false,
    }),
  ]
  // ...
}

```

##### 参数列表

- `id:string`: 唯一的标识符 `id` 来代表当前的 `HappyPack` 是用来处理一类特定的文件, 默认是 `1`
- `loader: Array`: 写法与 `webpack loaders` 配置一致
- `threads: Number`: 指定对应 `loader` 编译源文件时同时使用的进程数，默认是 `3`
- `threadPool: Happypack.ThreadPool`
  - 默认: `null`
- `verbose: boolean`: 是否允许 `happypack` 输出日志，默认是 `true`
- `verboseWhenProfiling: boolean`:  是否允许 `happypack` 在运行 `webpack --profile` 时输出日志，默认是 `false`
- `debug: boolean`: 是否允许 `happypack` 打印 `log` 分析信息，默认是 `false`

[Github: HappyPack](https://github.com/amireh/happypack)

[淘系前端团队: happypack 原理解析](https://fed.taobao.org/blog/taofed/do71ct/happypack-source-code-analysis)

#### thread-loader

##### 作用

`thread-loader` 能将 `loader` 放置在一个 `worker` 池里面运行，以达到多线程构建。

**Note**: 每个 `worker` 都是一个单独的有 `600ms` 限制的 `node.js` 进程。同时跨进程的数据交换也会被限制。

##### 使用

```sh
npm install --save-dev thread-loader
```

##### 配置

```javascript
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve("src"),
      use: use: [
        {
          loader: "thread-loader",
          // 有同样配置的 loader 会共享一个 worker 池(worker pool)
          options: {
            // 产生的 worker 的数量，默认是 cpu 的核心数
            workers: 2,

            // 一个 worker 进程中并行执行工作的数量
            // 默认为 20
            workerParallelJobs: 50,

            // 额外的 node.js 参数
            workerNodeArgs: ['--max-old-space-size', '1024'],

            // 闲置时定时删除 worker 进程
            // 默认为 500ms
            // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
            poolTimeout: 2000,

            // 池(pool)分配给 worker 的工作数量
            // 默认为 200
            // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
            poolParallelJobs: 50,

            // 池(pool)的名称
            // 可以修改名称来创建其余选项都一样的池(pool)
            name: "my-pool"
          }
        }
      ]
    }]
  }
  // ..
}
```



[Github: thread-loader](https://github.com/webpack-contrib/thread-loader)

[Webpack thread-loader](https://webpack.js.org/loaders/thread-loader/)

#### Tree Shaking

##### 作用

用于移除 `JavaScript`上下文中未引用的代码`(dead-code)`。它只支持`ES2015(ES6)`模块语法的静态结构特性，例如`import` `export`。

##### 使用

```javascript
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ...
  mode: 'development',
  optimization: {
    useExports: true,
  }
  // ...
}
```



有时候，我们没办法保证项目中的资源的纯度，我们可以通过`package.json`的`sideEffects`来标识该文件没有副作用。

**Note**: 

`side effect (副作用)`的定义是: 在导入时会执行特殊行为代码，而不是仅仅暴露一个`export`或者多个`export`。

```json
// package.json
{
  // sideEffects: false,
  sideEffects: [
    "*.css",
    "path/file.js"
  ]
}
```

#### `sideEffects VS useExports`

`sideEffects`更为有效，因为它允许跳过整个模块或者文件和整个文件子树。

`useExports`依赖于 [terser](https://github.com/terser-js/terser) 去检测语句中的副作用。它是一个 JavaScript 任务而且没有像 `sideEffects` 一样简单直接。而且它不能跳转子树/依赖由于细则中说副作用需要被评估。尽管导出函数能运作如常，但 React 框架的高阶函数（HOC）在这种情况下是会出问题的。

[Webpack tree-shaking](https://webpack.js.org/guides/tree-shaking/)

[sideEffects](https://github.com/webpack/webpack/issues/8814#issuecomment-465223178)

#### 参考资料

[Webpack](https://webpack.js.org/)

[Webpack系列(优化篇)](https://juejin.im/post/6844904093463347208#heading-8)