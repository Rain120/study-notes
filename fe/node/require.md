#### require 解析规则

```
当 Node 遇到 require(X) 时，按下面的顺序处理。
（1）如果 X 是内置模块（比如 require('http'）)
　　a. 返回该模块。
　　b. 不再继续执行。
（2）如果 X 以 "./" 或者 "/" 或者 "../" 开头
　　a. 根据 X 所在的父模块，确定 X 的绝对路径。
　　b. 将 X 当成文件，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
      X
      X.js
      X.json
      X.node
　　c. 将 X 当成目录，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
      X/package.json（main字段）
      X/index.js
      X/index.json
      X/index.node
（3）如果 X 不带路径
　　a. 根据 X 所在的父模块，确定 X 可能的安装目录。
　　b. 依次在每个目录中，将 X 当成文件名或目录名加载。
（4） 抛出 "not found"
```

#### require.resolve 方法

- `request`: 需要解析的模块路径。

- `options`
  - `paths: string` 从中解析模块位置的路径。 如果存在，则使用这些路径而不是默认的解析路径，但 [GLOBAL_FOLDERS](http://nodejs.cn/api/modules.html#modules_loading_from_the_global_folders) 除外，例如 `$HOME/.node_modules`，它们总是包含在内。 这些路径中的每一个都用作模块解析算法的起点，这意味着从该位置开始检查 `node_modules` 层次结构。

```sh
.
├── index.js
├── package.json
├── test
│   ├── package.json
│   └── templateName
│       └── package.json
```

`index.js`

```js
console.log(
    require.resolve('./test/templateName/package.json', {path: './templateName'})
);

// 字符串: /Users/xxxx/test/test/templateName/package.json
```



使用内部的 `require()` 机制查询模块的位置，此操作只返回解析后的文件名，不会加载该模块。

如果找不到模块，则会抛出 `MODULE_NOT_FOUND` 错误。

#### 参考地址

[modules all together](https://nodejs.org/api/modules.html#modules_all_together)

[阮一峰require() 源码解读](http://www.ruanyifeng.com/blog/2015/05/require.html)

[require.resolve(request[, options])](https://nodejs.org/api/modules.html#modules_require_resolve_request_options)

