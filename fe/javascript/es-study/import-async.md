标准用法的`import`导入的模块是静态的，会使所有被导入的模块，在加载时就被编译 (无法做到按需编译，降低首页加载速度)。

有些场景中，你可能希望根据条件导入模块或者按需导入模块，这时你可以使用动态导入代替静态导入。

**Note:** 请不要滥用动态导入(只有在必要情况下采用)。静态框架能更好的初始化依赖，而且更有利于静态分析工具和 [tree shaking](https://wiki.developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)发挥作用

#### 使用

```js
import('/modules/my-module.js').then((module) => {
  // Do something with the module.
});
```

这种使用方式也支持 `await` 关键字。

```js
let module = await import('/modules/my-module.js');
```

#### webpack 异步逻辑

**延迟加载** 或 **按需加载** 本质上涉及在逻辑断点处 **[分割代码 (code splitting)](https://webpack.js.org/guides/code-splitting/)**，然后在用户完成需要或将需要新代码块的操作后加载代码。 这会加快应用程序的初始加载速度，并减轻其总体重量，因为某些块甚至可能永远不会加载。

`webpack`可以使用两种方式进行异步导入模块

##### require.ensure

```js
require.ensure(
  dependencies: String[],
  callback: function(require),
  errorCallback: function(error),
  chunkName: String
)
```

> Note: **`require.ensure` 现在依赖原生的 `Promise` 。如果不支持 Promise 的环境中使用 `require.ensure` ，你需要添加 polyfill.** 。
>
> [`require.ensure()`](https://webpack.js.org/api/module-methods/#requireensure) 是 webpack 特有的，已被 `import()` 取代。

当然了，`webpack` 也可以使用符合 [ECMAScript 提案](https://github.com/tc39/proposal-dynamic-import) 的 [`import()` 语法](https://webpack.docschina.org/api/module-methods/#import-1) 来实现动态导入，需要借助 `babel` 插件 [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)。

##### import

```js
import('/modules/my-module.js').then((module) => {
  // Do something with the module.
});
```

`webpack v4.6.0+` 增加了对预获取和预加载的支持。

在声明 `import` 时，使用下面这些内置指令，可以让 `webpack` 输出 `resource hint(资源提示)`，来告知浏览器：

- **prefetch**(预获取)：将来某些导航下可能需要的资源
- **preload**(预加载)：当前导航下可能需要资源

`Eg:`

```js
//...
import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
```

这会生成 `<link rel="prefetch" href="login-modal-chunk.js">` 并追加到页面头部，指示着浏览器在闲置时间预取 `login-modal-chunk.js` 文件。

> 只要父 `chunk` 完成加载，`webpack` 就会添加 `prefetch hint(预取提示)`。

与 `prefetch` 指令相比，`preload` 指令有许多不同之处：

- `preload chunk` 会在父 `chunk` 加载时，以并行方式开始加载。`prefetch chunk` 会在父 `chunk` 加载结束后开始加载。
- `preload chunk` 具有中等优先级，并立即下载。`prefetch chunk` 在浏览器闲置时下载。
- `preload chunk` 会在父 `chunk` 中立即请求，用于当下时刻。`prefetch chunk` 会用于未来的某个时刻。
- 浏览器支持程度不同。

```js
//...
import(/* webpackPreload: true */ 'ChartingLibrary');
```

> 不正确地使用 `webpackPreload` 会有损性能，请谨慎使用。

#### Webpack 如何实现

TODO: Link Webpack 打包输出代码都有什么？ ../../../engineering/webpack/build.md

#### 参考资料

[MDN - 动态import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import#%E5%8A%A8%E6%80%81import)

[webpack - dynamic-imports](https://webpack.docschina.org/guides/code-splitting/#dynamic-imports)

[webpack - requireensure-and-amd-require-are-asynchronous](https://webpack.docschina.org/migrate/3/#requireensure-and-amd-require-are-asynchronous)

[Module 的加载实现](https://es6.ruanyifeng.com/#docs/module-loader)

