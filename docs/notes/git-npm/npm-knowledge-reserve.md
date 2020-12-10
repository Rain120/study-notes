本文是对`npm`的学习上的一篇理解笔记，主要通过当前使用到的一些功能进行理解，解释。

### [安装 install](https://docs.npmjs.com/cli/install) & [更新 update](https://docs.npmjs.com/cli/update)

```bash
npm install package
```

`install`之前，`npm install`会先检查，`node_modules`目录之中是否已经存在指定模块。如果存在，就不再重新安装了。

1. 发出`npm install`命令
2. `npm` 向 `registry` 查询模块压缩包的网址
3. 下载压缩包，存放在`~/.npm`目录
4. 解压压缩包到当前项目的`node_modules`目录

```bash
npm update package
```

`update`会先到远程仓库查询最新版本，然后查询本地版本。如果本地版本不存在，或者远程版本较新，就会安装。

`install`和`update`区别:

`package.json`

```json
{
  "name":          "my-project",
  "version":       "1.0",                             // install   update
  "dependencies":  {                                  // ------------------
    "already-installed-versionless-module":  "*",     // ignores   "1.0" -> "1.1"
    "already-installed-semver-module":       "^1.4.3" // ignores   "1.4.3" -> "1.5.2"
    "already-installed-versioned-module":    "3.4.1"  // ignores   ignores
    "not-yet-installed-versionless-module":  "*",     // installs  installs
    "not-yet-installed-semver-module":       "^4.2.1" // installs  installs
    "not-yet-installed-versioned-module":    "2.7.8"  // installs  installs
  }
}
```

1. 已经安装过的包，没有明确版本号的包, `install`会忽略，`update`会升级。

2. `install`和`update`在`devDependecies`上也是有差别的

   `install`默认会安装`devDependecies`，除非加上`--production`参数; `update`不会默认安装，除非手动加上`--dev`参数

### 安装依赖

在**[npm](https://www.npmjs.com/)**有以下**5**种依赖:

- [dependencies](https://docs.npmjs.com/files/package.json#dependencies): 
- [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies): 开发依赖
- [peerDependencies](https://docs.npmjs.com/files/package.json#peerdependencies): 
- [bundledDependencies](https://docs.npmjs.com/files/package.json#bundleddependencies): 
- [optionalDependencies](https://docs.npmjs.com/files/package.json#optionaldependencies): 

### 版本信息

有关指定版本范围的更多详细信息，请参阅**[Semver](https://docs.npmjs.com/misc/semver)**。

**`npm`**依赖包的版本格式一般为：**主版本号.次版本号.修订号**(`major.minor.patch`)

- **`major`**: 主版本号

  意味着可能存在与低版本不兼容的`API`或者用法。

- **`minor`**: 次版本号

  兼容同一个主版本内的`API`和用法，新增了向下兼容的功能特性。

- **`patch`**: 修订号

  意味着你当前版本只是做了一些向下兼容的问题修正。

[高级范围语法](https://docs.npmjs.com/misc/semver#advanced-range-syntax)

**npm** 版本规则如下:

- "1.2.3"

  固定版本号

- "^2.1.1"

  **能够兼容`[major, minor, patch]`元组中最左边的非0数字的版本 。**即同一主版本号中，不小于指定版本号的版本号。

  ```json
  {
    "package1": "^1.1.1", // [1.1.1, 2.0.0)
    "package2": "^0.1.1", // [0.1.1, 0.2.0)
    "package3": "^0.0.1", // [0.0.1, 0.0.2)
  }
  ```

  

- "~9.8.5"

  如果版本号上指定了**次要版本**，则允许**修订号**更改。如果没有，则允许**次要版本**更改。

  ```json
  {
    "package1": "~1.1.1", // [1.1.1, 1.2.0)
    "package2": "~1.1", // [1.1.0, 1.2.0)
    "package3": "~1", // [1.0.0, 2.0.0)
  }
  ```

  

- "x" "X"

  `x`，`X`或`*`可被用来代替`[major, minor, patch]`元组中的站位。

  ```json
  {
    "package1": "*", // [0.0.0, lasted) 任何版本都满足
    "package11": "", // - [0.0.0, lasted) 任何版本都满足
    "package2": "1.2.x", // [1.2.0, 1.3.0) 匹配主要版本和次要版本
    "package22": "1.2", // 1.2.x [1.2.0, 1.3.0) 匹配主要版本和次要版本
    "package3": "1.x", // [1.0.0, 2.0.0) 匹配主要版本
    "package33": "1", // 1.x.x [1.0.0, 2.0.0) 匹配主要版本
  }
  ```

  

- 连字符范围`-`

  

  ```json
  {
    "package1": "1.2.3 - 2.3.4", // [1.2.3, 2.3.4]
    "package2": "1.2 - 2.3.4", // [1.2.0, 2.3.4]
    "package1": "1.2.3 - 2.3", // [1.2.3, 2.4.0)
    "package2": "1.2.3 - 2", // [1.2.3, 3.0.0)
  }
  ```

  

- ### `>`、`<`、`=`、`>=`、`<=`

  指定满足范围的版本。

- `||`

  ```json
  {
    "package": "1.2.7 || >=1.2.9 <2.0.0" // 1.2.7 || [1.2.9, 2.0.0)
  }
  ```

  

### 发布版本

- **`alpha(α)`**: 内部测试版。α是希腊字母的第一个，表示最早的版本，一般用户不要下载这个版本，这个版本包含很多BUG，功能也不全，主要是给开发人员和 测试人员测试和找`BUG`用的。

- **`beta(β)`**:公开测试版。β是希腊字母的第二个，顾名思义，这个版本比alpha版发布得晚一些，主要是给“部落”用户和忠实用户测试用的，该版本任然存 在很多`BUG`，但是相对`alpha`版要稳定一些。这个阶段版本的软件还会不断增加新功能。如果你是发烧友，可以下载这个版本。

- **`rc(release candidate)`**:该版本又较`beta`版更进一步了，该版本功能不再增加，和最终发布版功能一样。这个版本有点像最终发行版之前的一个类似 预览版，这个的发布就标明离最终发行版不远了。作为普通用户，如果你很急着用这个软件的话，也可以下载这个版本。
- **`stable`版**:稳定版。在开源软件中，都有`stable`版，这个就是开源软件的最终发行版，用户可以放心大胆的用了。

### 缓存

### 参考

[npm cache](https://docs.npmjs.com/cli/cache)

[npm cli](https://github.com/npm/cli)

[pacote](https://github.com/npm/pacote)

[unpkg npm](https://unpkg.com/browse/npm@6.10.3/lib/)

[npm 模块安装机制简介](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)

[2018 年了，你还是只会 npm install 吗？](https://juejin.im/post/5ab3f77df265da2392364341)

[前端工程化（5）：你所需要的npm知识储备都在这了](https://juejin.im/post/5d08d3d3f265da1b7e103a4d)

[npm install vs. update - what's the difference?](https://stackoverflow.com/questions/12478679/npm-install-vs-update-whats-the-difference)



