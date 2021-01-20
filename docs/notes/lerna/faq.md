#### Lerna boostrap --hoist

在`lerna(v3.22.1)`中，当`npmClient`为`yarn`时加上`hoist`参数时执行会报错：

```sh
--hoist is not supported with --npm-client=yarn, use yarn workspaces instead
```

##### 解决办法

当使用`yarn workspace`，并在`lerna`中开启该功能时，`lerna bootstrap`命令由`yarn install`代理，等价于在`workspace`的根目录下执行`yarn install`。

相关配置：

`lerna.json`

```json
{
  "npmClient": "yarn",
  "useWorkspaces": true,
}
```

`package.json`

```json
{
  "workspaces": [
    "packages/*"
  ],
}
```

这么做是因为`yarn`本身提供了较`lerna`更好的依赖分析与`hoisting`的功能。`yarn`的[hoisting算法](https://github.com/yarnpkg/yarn/blob/master/src/package-hoister.js)。

默认情况下，`yarn`会开启`hoist`功能，也可以通过设置**nohoist选项**[手动关闭](https://yarnpkg.com/lang/en/docs/workspaces/#toc-limitations-caveats)。

```json
{
  "workspaces": {
    "packages": [
      "packages/*",
    ],
    "nohoist": [
      "**"
    ]
  }
}
```

虽然`yarn`提供的较好的底层依赖处理的支持，但`lerna`提供了更高层的更方便实用的各种命令。

#### 参考资料



