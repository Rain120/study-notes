---
sidebar_position: 6
---

# Loader 的实现

注意: 这里并不是教你如何实现一个 Loader，我们只讨论实现原理和官方的编写原则，只要你遵守，肯定可以实现一个很 Nice 的 loader，trust yourself。

我们知道 loader 是导出为一个函数的 node 模块，该函数在 loader 转换资源的时候调用。

## 实现原理

给定的函数将调用 loader API，并通过 this 上下文访问。

```js
// somepath/loader.js
export default function loader(source) {
  const options = this.getOptions();

  console.log('This loader options', JSON.stringify(options);

  return `export default ${JSON.stringify(source)}`;
}
```

然后修改配置文件

```js
// webpack.config.js
// ...
module: {
    rules: [
        {
        test: /\.txt$/,
        use: {
            loader: path.resolve(__dirname, '../somepath/loader.js'),
            options: {
                name: 'Rain120'
            },
        },
        },
    ],
},
// ...
```

That's all.

更多参考 [Webpack Writing a Loader](https://webpack.js.org/contribute/writing-a-loader/)。

## 编写原则

看着写一个 loader 很简单，但是，希望你在实现的时候遵循下面的规则，可以避免一些问题。

- 单一原则: 每个 `Loader` 只做一件事;
- 链式调用: `Webpack` 会按顺序链式调用每个 `Loader`;
- 统一原则: 遵循 `Webpack` 制定的设计规则和结构，输入与输出均为字符串，各个 `Loader` 完全独立，即插即用;

[用法准则](https://www.webpackjs.com/contribute/writing-a-loader/#用法准则-guidelines-)

[Loader API](https://www.webpackjs.com/api/loaders/)

## 常用包

[loader-utils](https://www.npmjs.com/package/loader-utils)

- getOptions: 获取 loader 的配置项。
- interpolateName: 处理生成文件的名字。
- stringifyRequest: 把绝对路径处理成相对根目录的相对路径。

[schema-utils](https://www.npmjs.com/package/schema-utils)

验证 loader option 配置的合法性。