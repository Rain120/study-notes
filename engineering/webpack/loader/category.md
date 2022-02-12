---
sidebar_position: 3
---

# Loader 种类

关于 `loader`的种类, 可以通过`rule.enforce`来配置，如下

```javascript
module.exports = {
  // ...
	module: {
    // ...
    // 从下往上, css-loader -> style-loader
    rules: [
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader'
        },
        enforce:'pre'
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

此时，在普通 `loader`模式下`css-loader`将会在`style-laoder`之后执行。即由之前的`css-loader -> style-loader`变成`style-loader -> css-loader`。

`rule.enforce`的参数: `'pre'` `'post'`

`rule.enforce` 的参数: `pre, post`
- ① `pre Loader`: 前置 `loader`
  - 配置: `enforce: 'pre'`
- ② `normal Loader`: 普通 `loader`
  - 配置: 默认
- ③ `inline Loader`: 内联 `loader`
  - 在模块中指定使用的 `loader` 是内联 `loader`，例如 `import '!style-loader!css-loader!less-loader?name=Rain120!./styles.less'`;
- ④ `post Loader`: 后置 `loader`
  - 配置: `enforce: 'post'`

:::tip
请暂时先记住此处 ① ② ③ ④ 的编号，后续我们会用到他。
:::

## 参考资料

[图片获取地址](https://github.com/rain120/study-notes/blob/master/engineering/webpack/images/webpack-loader.drawio)