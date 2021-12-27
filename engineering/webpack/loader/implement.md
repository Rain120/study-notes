---
sidebar_position: 6
---

# 如何编写一个 Loader

`loader` 是导出为一个函数的 `node` 模块。该函数在 `loader` 转换资源的时候调用。给定的函数将调用 [loader API](https://www.webpackjs.com/api/loaders/)，并通过 `this` 上下文访问。

## 编写原则

- 单一原则: 每个 `Loader` 只做一件事;
- 链式调用: `Webpack` 会按顺序链式调用每个 `Loader`;
- 统一原则: 遵循 `Webpack` 制定的设计规则和结构，输入与输出均为字符串，各个 `Loader` 完全独立，即插即用;

[用法准则](https://www.webpackjs.com/contribute/writing-a-loader/#用法准则-guidelines-)

[Loader API](https://www.webpackjs.com/api/loaders/)