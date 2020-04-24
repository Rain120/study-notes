#### 为什么需要内联?

将 `js`、`css` 等代码 **内联进 html 中**，减少文件的请求，优化加载速度。

#### Loader 类型

- `pre Loader`: 前置 `loader`
- `normal Loader`: 普通 `loader`
- `inline Loader`: 内联`loader`
- `post Loader`: 后置`loader`

#### Loader 配置

我们知道 `webpack`中 `loader`的常见配置如下

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            laoder: 'css-loader'
          }
        ]
      }
    ]
  }
}
```

除此之外，`webpack`还有另一种配置方式, 也就是我们今天的主角: **内联元素**

```javascript
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

通过前置所有规则及使用 `!`，可以对应覆盖到配置中的任意 `loader`。

选项可以传递查询参数，例如 `?key=value&foo=bar`，或者一个 `JSON` 对象，例如 `?{"key":"value","foo":"bar"}`。



#### 参考资料

[内联]([https://www.webpackjs.com/concepts/loaders/#%E5%86%85%E8%81%94](https://www.webpackjs.com/concepts/loaders/#内联))