---
sidebar_position: 4
---

# Loader 执行

## 前置知识

### 什么是pitch

Webpack 允许在 loader 函数上挂载一个名为 pitch 的函数，**运行时 pitch 会比 Loader 本身更早执行**。它可以阻断 loader 链。

```js
function pitch(
  // 当前 loader 之后的资源请求字符串
  // 以 ! 分割组成的字符串
  remainingRequest: string, 
  // 在执行当前 loader 之前经历过的 loader 列表
  // 已经迭代过(pitch)的 loader 以 ! 分割组成的字符串
  previousRequest: string,
  // 与 Loader 函数的 data 相同，用于传递需要在 Loader 传播的信息
  // 可以在执行 loaderA 时或者 loaderA.pitch 传递的参数
  data = {}
): void {
  // balabala ...
}
```

举个🌰

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader", "css-loader", "less-loader"
        ],
      },
    ],
  },
};
```

当执行到 css-loader.pitch 时，

```js
// css-loader 之后的 loader 列表及资源路径
remainingRequest = less-loader!./xxx.less
// css-loader 之前的 loader 列表
previousRequest = style-loader
// 默认值
data = {}
```

## Loader 链式执行

Loader 的执行顺序遵循后进先出(Last In First Out)。

```javascript
module.exports = {
  // ...
  module: {
    // ...
    rules: [
      {
        test: /\.css$/,
        // 执行顺序, css-loader -> style-loader
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
```

或者你是这样配置的 👇🏻

```javascript
module.exports = {
  // ...
  module: {
    // ...
    // 执行顺序, css-loader -> style-loader
    rules: [
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader'
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader'
        }
      }
    ]
  },
  // ...
}
```

每个`loader`默认的执行阶段(`normal execution`)的执行顺序是从 pre --> normal --> inline --> post, 即，从后往前执行。
某些情况下，`loader` 只关心 `request` 后面的**元数据(metadata)**，并且忽略前一个 `loader` 的结果。
在实际执行 loader 之前，会先**从左到右**调用 `loader` 上的 `pitch` 方法，`pitch` 阶段的执行顺序是 post --> inline --> normal --> pre。对于以下 [`use`](https://webpack.docschina.org/configuration/module#rule-use) 配置:

```javascript
module.exports = {
  //...
  module: {
    rules: [
      {
        //...
        use: ['a-loader', 'b-loader', 'c-loader'],
      },
    ],
  },
  // ...
};
```

`pitch` 和 `normal execution` 执行结果如下

```sh
|- a-loader `pitch`
  |- b-loader `pitch`
    |- c-loader `pitch`
      |- requested module is picked up as a dependency
    |- c-loader normal execution
  |- b-loader normal execution
|- a-loader normal execution
```

正常执行

![webpack-loader.png](../images/webpack-loader.png)

在这个过程中如果任何 `pitch` 有返回值，则 `loader` 执行链被阻断。`webpack` 会跳过后面所有的的 `pitch` 和 `loader`，直接进入上一个`loader` 的 `normal execution`。

![webpack-loader-pitch.png](../images/webpack-loader-pitch.png)

更多参考 [pitching-loader](https://webpack.js.org/api/loaders/#pitching-loader) 和 [Rule.enforce](https://webpack.js.org/configuration/module/#ruleenforce)
