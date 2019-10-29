### Babel 是什么？

`Babel` 是一个通用的多用途 `JavaScript `编译器。它主要用于将` ECMAScript 2015+` 版本的代码转换为向后兼容的 `JavaScript` 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

### 作用

- 语法转换
- 源码转换
- 通过 `Polyfill` 方式在目标环境中添加缺失的特性
- 等等...

### 安装使用

1. 安装所需的包

   ```sh
   npm install --save-dev @babel/core @babel/cli @babel/preset-env
   ```

   

2. [在你的项目中创建新文件]([https://www.babeljs.cn/docs/configuration#%E4%BD%A0%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF%E6%98%AF%E4%BB%80%E4%B9%88](https://www.babeljs.cn/docs/configuration#你的使用场景是什么))

   1. 你是否希望编译 `node_modules` 目录下的模块？

      [`babel.config.js`](https://www.babeljs.cn/docs/configuration#babelconfigjs) 文件可以满足你的的需求！

      ```javascript
      module.exports = function (api) {
        api.cache(true);
      
        const presets = [ ... ];
        const plugins = [ ... ];
      
        return {
          presets,
          plugins
        };
      }
      ```

      

   2. 你是否只是需要一个简单的并且只用于单个软件包的配置？

      [`.babelrc`](https://www.babeljs.cn/docs/configuration#babelrc) 文件适合你！

      ```json
      "babel": {
          "presets": [ ... ],
          "plugins": [ ... ],
      }
      ```

      

   3. `package.json`

      配置一个属性值`babel`。

      ```json
      {
        "name": "my-package",
        "version": "1.0.0",
        "babel": {
          "presets": [ ... ],
          "plugins": [ ... ],
        }
      }
      ```

### [配置 Babel](https://www.babeljs.cn/docs/configuration)

你可以通过安装 [**插件(plugins)** ](https://www.babeljs.cn/docs/plugins)或 [**预设(presets)** ](https://www.babeljs.cn/docs/presets)来指示 `Babel` 去做什么事情。 `preset `作为 `Babel` `plugins`的组合转换你的代码。

#### **Plugins**

**参数**

参数由插件名和参数对象组成一个数组，可以在配置文件中设置。

```json
{
  "plugins": [
    [
      "transform-async-to-module-method",
      {
        "module": "bluebird",
        "method": "coroutine"
      }
    ]
  ]
}
```

**执行顺序**

- 插件在 `Presets` 前运行
- 插件顺序从前往后排列

#### **Presets**

**参数**

参数由插件名和参数对象组成一个数组，可以在配置文件中设置。

```json
{
  "presets": [
    ["@babel/preset-env", {
      "loose": true,
      "modules": false
    }]
  ]
}
```

**执行顺序**

逆序排列的(从后往前)。

**[babel-preset-stage-x](https://www.babeljs.cn/docs/presets#stage-x-实验性质的-presets)**

`stage-x preset` 中的语法转换会随着被批准为` JavaScript` 新版本的组成部分而进行相应的改变(例如 `ES6/ES2015`)。

[TC39](https://github.com/tc39) 将提案分为以下几个阶段：

- [Stage 0](https://www.babeljs.cn/docs/babel-preset-stage-0) - 设想（Strawman）：只是一个想法，可能有 Babel插件。
- [Stage 1](https://www.babeljs.cn/docs/babel-preset-stage-1) - 建议（Proposal）：这是值得跟进的。
- [Stage 2](https://www.babeljs.cn/docs/babel-preset-stage-2) - 草案（Draft）：初始规范。
- [Stage 3](https://www.babeljs.cn/docs/babel-preset-stage-3) - 候选（Candidate）：完成规范并在浏览器上初步实现。
- Stage 4 - 完成（Finished）：将添加到下一个年度版本发布中。

### 常用包解释

#### babel-core

**版本**

[babel-core](https://www.npmjs.com/package/babel-core)

[@babel/core](https://www.npmjs.com/package/@babel/core)

**作用**

- 加载和处理配置
- 加载插件
- 调用 `Parser` 进行语法解析，生成 `AST`
- 调用 `Traverser` 遍历AST，并使用`访问者模式`应用'插件'对 AST 进行转换
- 生成代码，包括`SourceMap`转换和源代码生成

**使用**

`Using npm`

```sh
npm install --save-dev @babel/core
```

`or using yarn`

```sh
yarn add @babel/core --dev
```

`package.json`

```diff
{
	devDependencies: {
  	'@babel/core': '^x.x.x',
	}
}
```

#### babel-polyfill

**版本**

[babel-polyfill](https://www.npmjs.com/package/babel-polyfill)

[@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill)

**作用**

`Babel`默认只转换新的`JavaScript`句法(`syntax`)，而不转换新的`API`, 以及一些定义在全局对象上的方法都不会转码。`babel-polyfill`用于对已经存在的语法和`api`实现一些浏览器还没有实现的`api`，对浏览器的一些缺陷做一些修补。

**使用**

`Using npm`

```sh
npm install --save-dev @babel/polyfill
```

`or using yarn`

```sh
yarn add @babel/polyfill --dev
```

`package.json`

```diff
{
	devDependencies: {
	'@babel/polyfill': '^x.x.x',
	}
}
```

**Note**

`polyfill`的包有点大，在生产环境下并不需要全量引入，我们可以使用引入[`babel-plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime/)这个包。因为`Babel`使用很小的帮助器来完成诸如的功能`_extend`。默认情况下，它将被添加到需要它的每个文件中。有时不需要重复，特别是当您的应用程序分布在多个文件中时。

这是`@babel/plugin-transform-runtime`插件的来源：所有帮助程序都将引用该模块，`@babel/runtime`以避免在编译后的输出中出现重复。运行时将被编译到您的构建中。

该转换器的另一个目的是为您的代码创建一个沙盒环境。如果你直接导入[core-js](https://github.com/zloirock/core-js)或[@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)，它提供了诸如内置插件`Promise`，`Set`和`Map`那些会污染全局范围。尽管这对于应用程序或命令行工具可能是可以的，但是如果您的代码是要发布供他人使用的库，或者您无法完全控制代码运行的环境，则将成为一个问题。

转换器会将这些内置别名作为别名，`core-js`因此您可以无缝使用它们，而无需使用`polyfill`。

使用

生产环境

```sh
npm install --save-dev @babel/plugin-transform-runtime
```

并[`@babel/runtime`](https://babeljs.io/docs/en/babel-runtime)作为生产依赖性（因为它是针对“运行时(`runtime`)”的）

```sh
npm install --save @babel/runtime
```

转换插件通常仅在开发中使用，但是运行时本身将取决于部署的代码。

`.babelrc`

```json
{
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

带配置项

```json
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ]
}
```



------

**[Back To 目录](#目录)**

---

### 参考资料

[Babel官网](https://www.babeljs.cn/docs/)

[babel-handbook 中文文档](https://github.com/Rain120/babel-handbook/blob/master/translations/zh-Hans/README.md)

[深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.im/post/5d94bfbf5188256db95589be#heading-1)

