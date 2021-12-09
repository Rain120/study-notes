# Webpack 基础知识

## 什么是Webpack？

本质上，`webpack` 是一个现代 `JavaScript` 应用程序的**静态模块打包器(module bundler)**。当 `webpack` 处理应用程序时，它会递归地构建一个 **依赖关系图(dependency graph)**，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 `bundle`。

## Webpack核心概念

[官方文档](https://webpack.js.org/concepts/)

### `entry`

[官方文档 - 入口起点](https://webpack.js.org/concepts/entry-points/)

`entry` 指定`webpack` 应该使用哪个模块，来作为构建其内部 **依赖图** 的开始。进入入口起点后，`webpack` 会找出有哪些模块和库是入口起点 **(直接和间接)** 依赖的。

每个依赖项随即被处理，最后输出到称之为 `bundles` 的文件中。

**Note:** 可配置单文件入口，多文件入口

- `entry`
  - `type:` `String` | `Array` | `Object`

`String`: 入口模块的文件路径

`Array`: 与字符串类型不同的是数组可将多个文件打包为一个文件

`Object`: 配置多个入口，每个入口有一个 [Chunk](#chunck-gt-官方文档-代码块)

**webpack.config.js**

```js
module.exports = {
  entry: './src/index.js',
  
  // entry: ['./src/index.js', './src/index2.js'],
  // entry: {
  //   a: './src/index.js',
  //   b: ['./src/index2.js'],
  // },
}
```



### `output`

[官方文档 - 输出](https://webpack.js.org/concepts/output/)

**output** 属性告诉 `webpack` 在哪里输出它所创建的 `bundles`，以及如何命名这些文件，默认值为 `./dist`。基本上，整个应用程序结构，都会被编译到你指定的输出路径的文件夹中。

- `output`
  - `filename`: 用于输出文件的文件名。
  - `path`: 目标输出目录的绝对路径，**必须是绝对路径**。

**webpack.config.js**

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```

### `module`

[官方文档 - 模块](https://webpack.js.org/configuration/module/)

在[模块化编程](https://en.wikipedia.org/wiki/Modular_programming)中，开发者将程序分解成离散功能块(`discrete chunks of functionality`)，并称之为 **模块**。

在 `Webpack` 里一切皆模块,一个模块对应着一个文件。`Webpack` 会从配置的 `Entry` 开始递归找出所有依赖的模块。

请自行查阅 `module` 的 [官方`API` 描述](https://webpack.js.org/configuration/module)。

https://webpack.js.org/configuration/module/#condition

### `loaders`

[官方文档 - 模块转换器](https://webpack.js.org/concepts/loaders/)

`loader` 让 `webpack` 能够去处理那些非 `JavaScript` 文件(`webpack` 自身只理解 `JavaScript`)。`loader` 可以将所有类型的文件转换为 `webpack` 能够处理的有效模块,然后你就可以利用 `webpack` 的打包能力,对它们进行处理。

本质上, `webpack loader` 将所有类型的文件,转换为应用程序的 [**依赖图 (dependency graph)**](https://webpack.js.org/concepts/dependency-graph/) (和最终的 `bundle`)可以直接引用的模块。

**webpack.config.js**

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filenme: '[name].[hash:8].js'
  },
  module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
```

[`module.rules`参数列表 ](https://webpack.docschina.org/configuration/module/#module-rules)

### `plugins`

[官方文档 - 插件](https://webpack.js.org/concepts/plugins/)

- 用于扩展 `Webpack` 功能，执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量，模板编译输出，捆绑优化, 各种各样的 `Plugin` 几乎让 `Webpack` 可以做任何构建相关的事情。
- 在 `webpack` 运行的生命周期中会广播出许多事件，`Plugin` 可以监听这些事件，在合适的时机通过 `webpack` 提供的 `API` 改变输出结果。

**插件** 的目的在于解决` loader` 无法实现的其他事。

**webpack.config.js**

```js
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
    	path: path.resolve(__dirname, 'dist'),
    	filename: '[name].[hash:8].js',
    }
    plugins: [
	    new HTMLWebpackPlugin(),
      ...
    ],
};
```



- `plugin`原理

`webpack `插件 是一个具有 [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 属性的 `JavaScript` 对象。`apply` 属性会被 `webpack compiler` 调用，并且 `compiler` 对象可在 **整个编译生命周期** 访问。

- 插件函数。
- 在插件函数上定义一个 `apply` 方法。
- 指定一个绑定到 `webpack` 自身的事件钩子。
- 处理 `webpack` 内部实例的特定数据。
- 功能完成后调用 `webpack` 提供的回调。

**ConsoleLogOnBuildWebpackPlugin.js**

```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        });
    }
}
```

`compiler hook` 的 `tap` 方法的第一个参数，应该是驼峰式命名的插件名称。建议为此使用一个常量，以便它可以在所有 `hook` 中复用。

### chunck

一个 `Chunk` 由多个模块组合而成, 用于代码合并与分割。

- `chunk`
  - **id** :  `Chunk` 的唯一标识，从0开始
  - **name**:  `Chunk` 的名称
  - **hash**: `Chunk` 的唯一标识的 `Hash` 值
  - **chunkhash**: `Chunk` 内容的 `Hash` 值
