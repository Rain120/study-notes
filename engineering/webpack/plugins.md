# Plugin

## 定义

plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务。

![plugin-run](./images/plugin-run.png)
[👆🏻图片地址](https://github.com/zoobestik/csso-webpack-plugin)

:::tip
正在学习中
:::

## Compiler && Compilation

在理解或者开发插件之前，必须要理解两个最重要的概念就是 Compiler 和 Compilation。理解它们是最重要一步。

### Compiler

整个 Webpack 配置的实例

### Compilation

Compilation 继承自 Compiler，它是动态的资源集合，包含了 chunks, modules, cache, assets, 在某个编译阶段，产生的编译资源是不相同的。每个阶段都会有各自的Compilation

## 生命周期

1. compile: 进入编辑环境, 开始编译
2. compilation: 创建 compilation 对象
3. make: compilation 实例启动对代码的编译和构建
4. optimize: 开始优化阶段
5. after-compile: 编译完成
6. emit: 所有打包生成的文件内容按照依赖图已经处理完毕, (最后一处添加资源到资源集合的地方)
7. after-emit: 编译后的文件已经输出到目标目录
8. done: 整体代码的构建工作结束时触发

```js
// 1
compiler.plugin('compile', function (params) {
    // compile
});
// 2
compiler.plugin('compilation', function (compilation, params) {
    // compilation
    // 4
    compilation.plugin('optimize', function () {
        // optimize
    });
});
// 3
compiler.plugin('make', function (compiler, callback) {
    // make
    callback();
});
// 5
compiler.plugin('after-compile', function (compilation) {
    // after-compile
});
// 6
compiler.plugin('emit', function (compilation, callback) {
    // emit
    callback();
});
// 7
compiler.plugin('after-emit', function (compilation) {
    // after-emit
})
```

## 写一个Plugin

```js
export default class MyPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler, () => {})
}
```

- [how to write a plugin](https://github.com/webpack/docs/wiki/how-to-write-a-plugin)

- [解析webpack plugin的生命周期，书写自己的第一个plugin](https://beacelee.com/2018-01-18-%E8%A7%A3%E6%9E%90webpack%20plugin%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%EF%BC%8C%E4%B9%A6%E5%86%99%E8%87%AA%E5%B7%B1%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AAplugin/)

## 参考资料

[Webpack Plugins](https://webpack.js.org/concepts/plugins/)

[Webpack loaders vs plugins; what's the difference?](https://stackoverflow.com/questions/37452402/webpack-loaders-vs-plugins-whats-the-difference/46176755#46176755)

[webpack 中 loader 和 plugin 的区别是什么 ](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308)