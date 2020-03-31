#### 场景

`webpack`配置 `alias`之后，很多路径变成了**相对路径**, `VS Code`找不到，无法快速定位到位置。

#### 解决方案

**在项目根目录下添加 `jsconfig.json` 并添加以下配置**
目录中`jsconfig.json`文件的存在表示该目录是`JavaScript`项目的根。` jsconfig.json`文件指定了根文件以及`JavaScript`语言服务提供的功能的选项。

>  提示：如果您不使用`JavaScript`，则无需担心`jsconfig.json`。

>  提示：`jsconfig.json`是`tsconfig.json`的后代，`tsconfig.json`是`TypeScript`的配置文件。 `jsconfig.json`是`tsconfig.json`，其 `allowJs`属性设置为`true`。

##### 为什么需要jsconfig.json文件？

`Visual Studio Code`的`JavaScript`支持可以在两种不同的模式下运行：

- 文件范围-没有`jsconfig.json`：在这种模式下，在`Visual Studio Code`中打开的`JavaScript`文件被视为独立的单元。只要文件`a.js`没有显式引用文件b.ts（使用`import`或`CommonJS`模块），两个文件之间就没有公共项目上下文。

- 显式项目-带有`jsconfig.json`：通过`jsconfig.json`文件定义一个`JavaScript`项目。目录中是否存在此类文件表示该目录是`JavaScript`项目的根目录。该文件本身可以选择列出属于该项目的文件，要从该项目中排除的文件以及编译器选项。

当工作空间中有一个定义项目上下文的 `jsconfig.json`文件时，可以改善JavaScript体验。因此，当您在新的工作区中打开`JavaScript`文件时，我们提供了创建`jsconfig.json`文件的提示。

##### 配置

```json
{
    "compilerOptions": {
        "baseUrl": "./",
        "experimentalDecorators": true,
        "paths": {
            "src/*": [
                "src/*"
            ]
        }
    },
    "include": [
        "./src/**/*"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

**Note:** 重启一下`vscode`

#### 参考资料

[jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)

[Tips to use VSCode more efficiently](https://sudolabs.io/blog/tips-to-use-vscode-more-efficiently)

