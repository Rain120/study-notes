### 前言

由于代码篇幅过长，请各位同学移步步到 [here](https://github.com/Rain120/study-notes/issues/6) 查看代码，当然，如果你想本地查看，也可以下载这个 [源码包](https://github.com/Rain120/study-notes/files/6108125/code.zip)。

[Webpack 5 输出](https://github.com/Rain120/study-notes/issues/6#issuecomment-793838018)

[Webpack 4 输出](https://github.com/Rain120/study-notes/issues/6#issuecomment-793838779)

接下来，就是我们掀起红盖头的时候了，凎。

### 初探源码

打开源码，移除无用代码，格式化，折叠，发现它实际上就是一个[IIFE(立即调用函数表达式)](https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE)。

```js
(function (modules) {
    // webpackBootstrap
})({
    './main.js': function (module, exports) {
        // ...
    },
});
```

#### **\_\_webpack_require\_\_**

```js
// The module cache
// 缓存 module
var installedModules = {};

// The require function
function __webpack_require__(moduleId) {
  // Check if module is in cache
  // 检查 module 是否在 cache 中
  if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
  }
  // Create a new module (and put it into the cache)
  // 不存在 cache 中就创建一个新的 module，使用 moduleId 作为 key, 所以 key 的唯一
  var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
  });

  // Execute the module function
  // 执行模块函数，挂载到 module.exports 上。此时 this 指向 module.exports
  // call(thisArg, args)
  modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

  // Flag the module as loaded
  // 标记这个 module 已经被加载
  module.l = true;

  // Return the exports of the module
  return module.exports;
}
```

从代码里，我们知道 `__webpack_require__` 方法会对 **已导入(require())的模块** 进行缓存，并将模块挂载到 `module.exports` 上。

**Note**: 通过 `moduleId(引入path)` 来决定模块是否需要缓存。

所以它其实是模拟 `import` 一个模块，并在最后返回所有模块`export` 的变量。

##### \_\_webpack_require\_\_ 的属性

- 所有的模块(IIFE 传入的模块参数)对象

```js
// expose the modules object (__webpack_modules__)
__webpack_require__.m = modules;
```

- 已导入(require())的模块对象

```js
// expose the module cache
__webpack_require__.c = installedModules;
```

- `Object.prototype.hasOwnProperty` 的 `polyfill`

```js
// Object.prototype.hasOwnProperty.call
__webpack_require__.o = function (object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
};
```

- 

```js
// define getter function for harmony exports
__webpack_require__.d = function (exports, name, getter) {
  if (!__webpack_require__.o(exports, name)) {
    Object.defineProperty(exports, name, {enumerable: true, get: getter});
  }
};
```



```js
// define __esModule on exports
__webpack_require__.r = function (exports) {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
  }
  Object.defineProperty(exports, '__esModule', {value: true});
};
```

- 

```js
// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 8|1: behave like require
__webpack_require__.t = function (value, mode) {
  if (mode & 1) value = __webpack_require__(value);
  if (mode & 8) return value;
  if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
  var ns = Object.create(null);
  __webpack_require__.r(ns);
  Object.defineProperty(ns, 'default', {enumerable: true, value: value});
  if (mode & 2 && typeof value != 'string')
    for (var key in value)
      __webpack_require__.d(
        ns,
        key,
        function (key) {
          return value[key];
        }.bind(null, key)
      );
  return ns;
};
```

- 

```js
// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function (module) {
  var getter =
    module && module.__esModule
      ? function getDefault() {
          return module['default'];
        }
      : function getModuleExports() {
          return module;
        };
  __webpack_require__.d(getter, 'a', getter);
  return getter;
};
```

- 配置文件中的 [output.publicPath](https://webpack.js.org/configuration/output/#output-publicpath)

```js
// __webpack_public_path__
__webpack_require__.p = '';
```

#### 同步导入

```js

```

#### 动态导入
