#### 什么是`npm ci`?

此命令类似于`npm-install`，但它旨在用于自动化环境，如测试平台，持续集成和部署。通过跳过某些面向用户的功能，它可以比常规的 `npm `安装快得多。它也比常规安装更严格，它可以帮助捕获由大多数 `npm `用户的增量安装的本地环境引起的错误或不一致。

#### npm install VS npm ci

- 该项目必须具有现有的`package-lock.json`或`npm-shrinkwrap.json`。

- 如果程序包锁中的依赖项与`package.json`中的依赖项不匹配，则`npm ci`将退出并显示错误，而不是更新程序包锁。
- `npm ci` 一次只能安装整个项目：此命令不能添加单个依赖项。
- 如果已经存在一个`node_modules`，它将在`npm ci`开始安装之前被自动删除。
- 它永远不会写入`package.json`或任何包锁 `package-lock.json`：安装实际上是冻结的。

#### 使用

确保您拥有包锁和最新安装：

```sh
$ cd ./my/npm/project
$ npm install
added 154 packages in 10s
$ ls | grep package-lock
```

`npm ci`在该项目中运行

```sh
$ npm ci
added 154 packages in 5s
```

配置Travis以使用`npm ci`而不是`npm install`：

```yml
# .travis.yml
install:
- npm ci
# keep the npm cache around to speed up installs
cache:
  directories:
  - "$HOME/.npm"
```

#### 参考资料

[npm ci](https://docs.npmjs.com/cli/ci.html)

