# 模块化方案

## CommonJS

`Node` 应用由模块组成，采用 `CommonJS` 模块规范。

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

`CommonJS`规范规定: 每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。加载某个模块，其实是加载该模块的`module.exports`属性。

```js
// 导出 info.js
module.exports = {
  name: 'Rain120'
}

// Node 为每个模块提供一个 exports 变量，指向 module.exports。
exports.name = 'Rain120'

// 导入
const info = require('info')
```

`CommonJS` 模块的特点：

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
- 模块加载的顺序，按照其在代码中出现的顺序。
- 独立性是模块的重要特点就，模块内部最好不与程序的其他部分直接交互。

## AMD

`AMD` 全称 `Asynchronous Module Definition`，即异步模块定义。`AMD` 是 `RequireJS` 在推广过程中对模块定义的规范化产出。

它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

除了和 `CommonJS` 同步加载方式不同之外，`AMD` 在模块的定义与引用上也有所不同。

```js
// 导出
// id 模块名称
// dependencies 依赖模块，默认是['require', 'exports', 'modules']
// factory 模块初始化执行的函数(只执行一次)或对象(返回输出值)
define(id?, dependencies?, factory);

// 导入
require([module], callback);
```

`AMD` 模块的特点：

- 异步加载
- 管理模块之间的依赖性，便于代码的编写和维护。

## CMD

`CMD` 全称为 `Common Module Definition`。`CMD` 是 `SeaJS` 在推广过程中对模块定义的规范化产出。

```js
define(function(require, exports, module) {
  var a = require('./a');
  a.doSomething();
  var b = require('./b'); 
  b.doSomething();
  ...
})
```

### 与AMD区别

- 对于依赖的模块，AMD 是**提前执行**，CMD 是**延迟执行**。不过 `RequireJS` 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.

- CMD 推崇**依赖就近**，AMD 推崇**依赖前置**。

## UMD

`UMD`，全称 `Universal Module Definition`，即通用模块规范。可应用于浏览器或服务器环境，兼容`AMD`和`CommonJS`规范的同时，还兼容全局引用的方式。

```js
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.jqueryPlugin = function () { return true; };
}));
```

## ES Module

ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。

对于 `ES Module` ，这个过程包含三个阶段：

- **构建**：查找，下载，然后把所有文件解析成模块记录。

- **实例化**：为所有模块分配内存空间(此刻还没有填充值)，然后依照导出、导入语句把模块指向对应的内存地址。这个过程称为 **链接** `(Linking)`。

- **运行**：运行代码，从而把内存空间填充为真实值。

```js
// 导出
epxort default {}
// 通过 as 关键字重命名
export {
  name as realName
}

// 复合用法

export { name } from './xxx'
export { name as default } from './xxx'

import * as name from "./xxx";
export {name};
// 等同于 👆👆👆 两句
export * as name from "./xxx";

// 导入
import Module from './xxxx'
// 通过 as 关键字重命名
import { default as AllModule } from './xxxx'
```



## 模块构建步骤

对于每个模块，在构建阶段会做三个处理：

1. 确定要从哪里下载包含该模块的文件，也称为模块定位 `(Module Resolution)`
2. 提取文件，通过从 `URL` 下载或者从文件系统加载
3. 解析文件为模块记录

## 参考资料

[Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

[CommonJS规范](https://javascript.ruanyifeng.com/nodejs/module.html)

[AMD 和 CMD 的区别有哪些？ - 玉伯的回答 - 知乎](https://www.zhihu.com/question/20351507/answer/14859415)

[ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

[ECMAScript 6 入门 - Module 的语法](https://es6.ruanyifeng.com/#docs/module)

[TC39 modules](https://tc39.es/ecma262/#sec-modules)

