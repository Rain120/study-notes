#### Npm vs Yarn

|              | `npm`                                                        | `yarn`                                                       |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 定义         | 包管理器                                                     | 包管理器                                                     |
| 安装项目依赖 | `npm install`                                                | `yarn`                                                       |
| 全局依赖     | `npm install pkg --global (-g)`                              | `yarn add pkg --global (-g)`                                 |
| 添加依赖     | `npm install pkg`<br /><br />`npm install pkg --save (-S)` 默认模式 <br /><br />`npm install pkg --save-dev (-D)` | `yarn add pkg`<br /><br />`yarn add pkg`<br /><br />`yarn add pkg --dev` |
| 卸载依赖     | `npm uninstall pkg`                                          | `yarn remove pkg`                                            |
| 更新项目依赖 | `npm update pkg`                                             | `yarn upgrade pkg`                                           |

[yarn-vs-npm](https://www.sitepoint.com/yarn-vs-npm/)

[NPM vs Yarn Cheat Sheet](https://shift.infinite.red/npm-vs-yarn-cheat-sheet-8755b092e5cc)

`npm` 的优势

- 世界上最大的注册表`(registry)`, 一个巨型数据库, 保存着每个包的信息 
- 社区完善
- 能够轻松管理依赖和版本

`yarn` 的优势

- 速度快 

  - 并行安装

    无论 `npm` 还是 `Yarn` 在执行包的安装时，都会执行一系列任务。`npm` 是按照队列执行每个 `package`，也就是说必须要等到当前 `package` 安装完成之后，才能继续后面的安装。而 `Yarn` 是同步执行所有任务，提高了性能。

  - 离线模式

    如果之前已经安装过一个软件包，用 `Yarn` 再次安装时之间从缓存中获取，就不用像 `npm` 那样再从网络下载了。

- 安装版本统一

  为了防止拉取到不同的版本，`Yarn`有一个锁定文件 `(lock file)` 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，`Yarn` 就会创建(或更新) `yarn.lock`这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本。

- 更好的语义化

   `yarn`改变了一些`npm`命令的名称，比如 `yarn add/remove`，感觉上比 `npm` 原本的 `install/uninstall`要更清晰。

#### 前置知识

[版本信息](notes/git-npm/npm-knowledge-reserve.md#版本信息)

#### 为什么需要 lock 文件 ?

因为 `package.json` 文件只能锁定相关依赖包的大版本, 每次在 `npm install` 或者 `yarn install` 时都会根据大版本自动提升到 **大版本的最新版本**, 而有些时候这些版本会影响我们的开发，甚至存在兼容性问题, 所以我们需要 **锁定版本**。

#### lock 的作用

- 能获得可重复的构建 `(repeatable build)`，当你在 `CI(持续集成)` 上重复 `build` 的时候，得到的 `artifact` 是一样的，因为依赖的版本都被锁住了。
- 避免由于开发人员意外更改或者更新版本，而导致项目不兼容等问题

#### 何时生成 lock 文件

`npm 5.x` 之前可以通过 [npm shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap) 命令来生成一个锁定文件 `npm-shrinkwrap.json`, 受 `yarn`的影响, `npm` 在 `5.x` 之后也会生成 `lock` 文件, 即 `package-lock.json`。

`Yarn` 在运行 `install` 时会创建一个 `yarn.lock` 文件用来保存所安装的依赖包的确切版本。

#### lock 文件记录了哪些信息？

它包含了重现全部的依赖源码树需要的所有信息、你的项目依赖中的所有信息，以及它们各自的版本。

- 依赖包的准确版本
- `Hash` 校验值
- 依赖的包的 `URL`
- 依赖以及依赖版本

##### [package-lock.json](https://docs.npmjs.com/configuring-npm/package-lock-json#file-format)

- `name`

  当前包名称。这必须与 `package.json` 中的 `name` 匹配。

- `version`

  当前包的版本。这必须与 `package.json` 中的 `version` 匹配。

- `lockFileVersion`

  锁定文件版本

- `dependencies`

  记录了包的依赖

- `requires`

  这是模块名称到版本的映射。 这是此模块所需的所有内容的列表，无论它将安装在何处。 该版本应通过常规匹配规则在我们的依赖项或高于我们的级别中匹配一个依赖项。

##### yarn.lock

- \# yarn lockfile v1

  记录版本是为了便于以后更新 `lockfile` 的语法或语义。以后一旦更新了 `lockfile`，就增加版本号，而 `Yarn` 就可以根据不同的版本做出不同的动作，从而保证向后的兼容性。

- `version`

  记录了包的确切版本

- `resolved`

  字段记录了包的 `URL`

- `dependencies`

  记录了包的依赖

#### 参考资料

[npm-package-locks](https://docs.npmjs.com/configuring-npm/package-locks.html)

[package-locks](https://docs.npmjs.com/files/package-locks)

[package-lock-json](https://docs.npmjs.com/configuring-npm/package-lock-json)

[yarn-lock](https://classic.yarnpkg.com/en/docs/yarn-lock)

[关于package-lock.json的一切](https://codertx.github.io/2018/01/09/about-package-json/)

[npm install 生成的package-lock.json是什么文件？有什么用？](https://www.zhihu.com/question/62331583)

[why-does-npm-install-rewrite-package-lock-json](https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json)



