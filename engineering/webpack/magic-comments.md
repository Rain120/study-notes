#### 前言

#### 什么是魔法注释？

魔术注释`(Magic Comments)`是由 `Webpack` 提供的，可以为代码分割服务的一种技术。通过在 `import` 关键字后的括号中使用指定注释，我们可以对代码分割后的 `chunk` 有更多的控制权。

#### 常用的魔术注释 (Magic Comments)

##### webpackChunkName

生成新 `chunk` 的名称。可以和`index`、`request`变量一起使用。

参数列表: `path`(相对路径)

`index`在当前**动态导入**声明中表示文件的索引

`request`表示导入文件的动态部分。

```js
import(/* webpackChunkName: "lodash-es" */ 'lodash');
// 输出新的chunk名字为lodash-es.js
```



##### webpackPrefetch

提升加载速度, 资源预拉取，可能在后续被用到。`prefect`会与父` chunk`并行，在浏览器空闲时间`(idle)`被下载

```js
import(/* webpackPrefetch: true */ 'module1')
```

**Note**: `webpack 4.6.0+` 

##### webpackPreload

提升加载速度, 资源预加载，可能在在当前被用到。`preload`会与父` chunk`并行，立即被下载

```javascript
import(/* webpackPreload: true */ 'module2')
```

**Note**: `webpack 4.6.0+` 

##### webpackMode

指定以不同的模式解析动态导入。

参数列表:

- `lazy`: 默认, 生成一个可延迟加载 `(lazy-loadable) chunk`。
- `lazy-once`: 生成一个可以满足所有 `import()` 调用的单个可延迟加载 `(lazy-loadable) chunk`。
- `eager`: 不会生成额外的 `chunk`，所有模块都被当前 `chunk` 引入，并且没有额外的网络请求
- `weak`: 尝试加载模块，如果该模块函数已经以其他方式加载`(即，另一个 chunk 导入过此模块，或包含模块的脚本被加载)`。

```js
import(/* webpackMode: "lazy" */ 'module3');
```

##### webpackInclude

任何匹配到的文件都将被打包进来。

参数列表: 正则表达式

```javascript
import(/* webpackInclude: /\.json$/ */ 'module4');
```



##### webpackExclude

过滤不可被导入的文件。任何匹配到的文件都不会被打包进来。

参数列表: 正则表达式

```javascript
import(/* webpackExclude: /\.noimport\.json$/ */ 'module5');
```



#### 参考资料

[magic-comments](https://webpack.js.org/api/module-methods/#magic-comments)

