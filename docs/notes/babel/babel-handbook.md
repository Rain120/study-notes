## 目录

[Babel 是什么？](#babel-是什么？)

[Babel 的作用](#作用)

[安装使用](#安装使用)

[配置Babel](#配置-babel)

[babel-core](#babel-core)

[babel-polyfill](#babel-polyfill)



### Babel 是什么？

`Babel` 是一个通用的多用途 `JavaScript `编译器。它主要用于将` ECMAScript 2015+` 版本的代码转换为向后兼容的 `JavaScript` 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

### 作用

- 语法转换
- 源码转换
- 通过 `Polyfill` 方式在目标环境中添加缺失的特性

### 安装使用

### [配置 Babel](https://www.babeljs.cn/docs/configuration)

### babel-core

**版本**

[babel-core](https://www.npmjs.com/package/babel-core)

[@babel/core](https://www.npmjs.com/package/@babel/core)

**作用**

- 加载和处理配置
- 加载插件
- 调用 `Parser` 进行语法解析，生成 `AST`
- 调用 `Traverser` 遍历AST，并使用`访问者模式`应用'插件'对 AST 进行转换
- 生成代码，包括`SourceMap`转换和源代码生成

**使用**

`Using npm`

```sh
npm install --save-dev babel-core

npm install --save-dev @babel/core
```

`or using yarn`

```sh
yarn add babel-core --dev

yarn add @babel/core --dev
```

`package.json`

```diff
{
	devDependencies: {
+ 	'@babel/core': '7.6.4',
+	 'babel-core': '6.26.3',
	}
}
```



### babel-polyfill

**版本**

[babel-polyfill](https://www.npmjs.com/package/babel-polyfill)

[@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill)

**作用**

------

**[Back To 目录](#目录)**

---

### 参考资料

[Babel官网](https://www.babeljs.cn/docs/)

[babel-handbook 中文文档](https://github.com/Rain120/babel-handbook/blob/master/translations/zh-Hans/README.md)

[深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.im/post/5d94bfbf5188256db95589be#heading-1)

