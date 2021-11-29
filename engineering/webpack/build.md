### 前言

由于代码篇幅过长，请各位同学移步步到 [here](https://github.com/Rain120/study-notes/issues/6) 查看代码，当然，如果你想本地查看，也可以下载这个 [源码包](https://github.com/Rain120/study-notes/files/6108125/code.zip)。

[Webpack 5 输出](https://github.com/Rain120/study-notes/issues/6#issuecomment-793838018)

[Webpack 4 输出](https://github.com/Rain120/study-notes/issues/6#issuecomment-793838779)

接下来，就是我们掀起红盖头的时候了，凎。

#### [TL;DR](#总结)

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

#### `__webpack_require__`

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
      l: false, // loaded 是否被加载
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

##### `__webpack_require__` 的属性

- 所有的模块(IIFE 传入的模块参数)对象

```js
// expose the modules object (__webpack_modules__)
__webpack_require__.m = modules;
```

- 已导入`(require())`的模块对象

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

- 用于标记一个`ES Module`

```js
// define __esModule on exports
__webpack_require__.r = function (exports) {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
  }
  Object.defineProperty(exports, '__esModule', {value: true});
};
```

- 给 `ES Module` 的定义一个 `getter` 方法

```js
// define getter function for harmony exports
__webpack_require__.d = function (exports, name, getter) {
  if (!__webpack_require__.o(exports, name)) {
    Object.defineProperty(exports, name, {enumerable: true, get: getter});
  }
};
```

**Note:** `harmony module` 其实是指 `ES Module`。 直到`2008`年`8`月，`ECMAScript`第四版提案被命名为一个名为`ECMAScript Harmony`的项目。

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
- 针对非 `ES Module( 👆👆👆 )`  模块的输出定义函数做一些兼容

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

在 `IIFE` 的参数，我们发现同步导入是如何实现的，即同步 `import` 实际上是执行 `__webpack_require__()`。

```js
(function (modules) { // webpackBootstrap
  // ...
	// Load entry module and return exports
	return __webpack_require__(__webpack_require__.s = "./index.js");
})({
   "./index.js": (function (module, __webpack_exports__, __webpack_require__) {
     __webpack_require__.r(__webpack_exports__);
     // ...
   })
})
```

#### 异步导入

- 异步引入实现

```js
(function (modules) { // webpackBootstrap
  // ...
  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = "./index.js");
})({
  "./index.js": (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    // ...
    const asyncImport = async () => await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./async */ "./async.js", 7));
    // ...
  }
})
```

从代码里面，我们发现异步导入实际上是调用 `__webpack_require__.e()` 方法`(异步 import实际上是转换成__webpack_require__.e())`，而且，使用的 `async-await` 方法，所以我们知道这个函数的返回值一定是个 `promise` 对象，我们接着往下看吧。

```js
// script path function
function jsonpScriptSrc (chunkId) {
  return __webpack_require__.p + "" + ({}[chunkId] || chunkId) + ".js"
}

// object to store loaded and loading chunks
// undefined = chunk not loaded, null = chunk preloaded/prefetched
// Promise = chunk loading, 0 = chunk loaded
var installedChunks = {
  "main": 0
};

// This file contains only the entry chunk.
// The chunk loading function for additional chunks
__webpack_require__.e = function requireEnsure (chunkId) {
  var promises = [];
  
  // JSONP chunk loading for javascript
  // Javescript JSONP chunk加载中
  var installedChunkData = installedChunks[chunkId];
  if (installedChunkData !== 0) {
    // 0 means "already installed".
    // 0 代表已经完成
    // a Promise means "currently loading".
    // installedChunkData 不为undefined，表示 promise 正在加载中
    if (installedChunkData) {
      promises.push(installedChunkData[2]);
    } else {
      // setup Promise in chunk cache
      var promise = new Promise(function (resolve, reject) {
        // 把 resolve 保存到 installedChunks[chunkId] 中，等待代码加载好再执行 resolve() 以返回 promise
        installedChunkData = installedChunks[chunkId] = [resolve, reject];
      });
      promises.push(installedChunkData[2] = promise);

      // start chunk loading
      // 通过往head头部插入script标签异步加载到chunk代码
      var script = document.createElement('script');
      var onScriptComplete;

      script.charset = 'utf-8';
      script.timeout = 120;
      if (__webpack_require__.nc) {
        script.setAttribute("nonce", __webpack_require__.nc);
      }
      script.src = jsonpScriptSrc(chunkId);

      // create error before stack unwound to get useful stacktrace later
      // 在堆栈展开之前创建错误，以便以后获得有用的堆栈跟踪
      var error = new Error();
      onScriptComplete = function (event) {
        // avoid mem leaks in IE.
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        var chunk = installedChunks[chunkId];
        if (chunk !== 0) {
          if (chunk) {
            var errorType = event && (event.type === 'load' ? 'missing' : event.type);
            var realSrc = event && event.target && event.target.src;
            error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
            error.name = 'ChunkLoadError';
            error.type = errorType;
            error.request = realSrc;
            chunk[1](error);
          }
          installedChunks[chunkId] = undefined;
        }
      };
      var timeout = setTimeout(function () {
        onScriptComplete({ type: 'timeout', target: script });
      }, 120000);
      script.onerror = script.onload = onScriptComplete;
      document.head.appendChild(script);
    }
  }
  return Promise.all(promises);
};
```

我们发现，`installedChunkData`的值代表着**缓存模块的状态**:

- `0` 代表 `chunk` 已经加载完毕
- `undefined` 代表 `chunk` 加载失败、加载超时、从未加载过
- `null` 代表 `chunk` `preloaded/prefetched`
- `promise`代表 `chunk` 正在加载

```js
installedChunkData = installedChunks[chunkId] = [resolve, reject];
promises.push(installedChunkData[2] = promise);

// installedChunkData = [resolve, reject, promise]
```

`__webpack_require__.e()` 通过传入的`chunkId`，来加载对应此 `chunkId` 对应的异步 `chunk` 文件，它返回一个`promise`。通过`jsonp`的方式使用`script`标签去加载。这个函数调用多次，还是只会发起一次请求 `js` 的请求。若已加载完成，这时候异步的模块文件已经被注入到立即执行函数的入参`modules`变量中了，这个时候和同步执行`import`调用`__webpack_require__`的效果就一样了(这个注入由`webpackJsonpCallback`函数完成)。

`webpackJsonpCallback` 其实就是加载异步模块完成的回调。

```js
(function (modules) {
  // ...
  
  // install a JSONP callback for chunk loading
  function webpackJsonpCallback (data) {
    var chunkIds = data[0];
    var moreModules = data[1];

    // add "moreModules" to the modules object,
    // then flag all "chunkIds" as loaded and fire callback
    var moduleId, chunkId, i = 0, resolves = [];
    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];
      // installedChunks[chunkId] = [resolve, reject, promise]
      if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
        resolves.push(installedChunks[chunkId][0]);
      }
      // 标记成已经执行完
      installedChunks[chunkId] = 0;
    }
    
    // 将异步 chunk 中的 module 加入主 chunk 的 modules(IIFE的参数)数组中
    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }
    
    // 将 data 加入 window["webpackJsonp"] 数组
    if (parentJsonpFunction) parentJsonpFunction(data);

    // __webpack_require__.e 中每一个 Promise 的返回结果
    while (resolves.length) {
      resolves.shift()();
    }
  };

  var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
  // 保存原始的 Array.prototype.push 方法
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  // 将 push 方法的实现修改为 webpackJsonpCallback
  // 这样我们在异步 chunk 中执行的 window['webpackJsonp'].push 其实是 webpackJsonpCallback 函数。
  jsonpArray.push = webpackJsonpCallback;
  jsonpArray = jsonpArray.slice();
  // 对已在数组中的元素依次执行 webpackJsonpCallback 方法
  for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
  var parentJsonpFunction = oldJsonpFunction;
  
  // ...
})({
  // ...
})
```

- 异步加载错误日志打印

```js
// on error function for async loading
__webpack_require__.oe = function (err) { console.error(err); throw err; };
```

#### 总结

- `webpack` 打包出来的结果实际上是一个 `IIFE`, 参数是模块的文件 `chunks`
  - 会对引用过的模块进行缓存
- `webpack IIFE` 通过实现 `__webpack_require__` 模拟 `import` 一个模块，并 `export` 该模块。
- `webpack` 通过 `__webpack_require__.r` 方法用来标记一个`ES Module` ，通过`__webpack_require__.n` 方法针对非 `ES Module( 👆👆👆 )`  模块的输出定义函数做一些兼容，即 `__esModule` 为 `true` 使用 `module.default` 导出模块，否则使用 `module` 导出模块
- 异步加载 `import()` 的实现主要是使用 `JSONP` 动态加载模块，并通过 `webpackJsonpCallback` 判断加载的结果
  - 缓存异步模块的状态

    - `0` 代表 `chunk` 已经加载完毕
    - `undefined` 代表 `chunk` 加载失败、加载超时、从未加载过
    - `null` 代表 `chunk` `preloaded/prefetched`
    - `promise`代表 `chunk` 正在加载

#### 参考资料

[ECMAScript 4th_Edition_(abandoned)](https://en.wikipedia.org/wiki/ECMAScript#4th_Edition_(abandoned))

