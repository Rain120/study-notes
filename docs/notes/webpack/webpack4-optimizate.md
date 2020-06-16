#### 模块热替换(HMR)

#### 懒加载(按需加载)

#### 抽离公共代码

#### loader 配置

#### resolve 配置

#### noParse

#### ignorePlugin

#### 动态链接库(dllPlugin)

#### HappyPack

##### 作用

将文件解析任务分解成多个子进程并发执行。子进程处理完任务后再将结果发送给主进程。所以可以大大提升 `Webpack` 的项目构件速度。`Happypack` 只作用在 `loader` 上，使用多个进程同时对文件进行编译。

**Note**: `HappyPack` 对`file-loader`、url-loader 支持的不友好。

##### 运行原理

![happypack-workflow.png](./images/happypack-workflow.png)

##### 使用

```sh
npm install --save-dev happypack
```

##### 配置

```javascript
// webpack.config.js
const Happypack = require('happypack');
const threadPool = Happypack.ThreadPool({ size: 5});

module.export = {
	// ...
  module: {
      rules: [{
        test: /\.js$/,
        // ① use: 'babel-loader?cacheDirectory',
        // ② use: ['babel-loader?cacheDirectory'],
				// ③ use: ['happypack/loader?id=babel'],
        use: [{
          // ④ loader: 'babel-loader?cacheDirectory',
          // ⑤
          loader: 'happypack/loader?id=babel',
        }]
      }]
  },
  plugins: [
    new Happypack({
      // 与rules 中loader query中设置的id保持一致，唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
      id: 'babel',
      // 指定对应 loader 编译源文件时同时使用的进程数，默认是 3
      threads: 3,
      // 代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多
      threadPool,
      // 写法与webpack loaders配置一致
      // ① loaders: 'babel-loader?cacheDirectory',
      // ② loaders: ['babel-loader?cacheDirectory'],
      // loaders: ['babel-loader'],
      // ① ② ④ loader有 options时可以这样写
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
      // 是否允许 happypack 输出日志，默认是 true
      verbose: true,
      // 是否允许 happypack 在运行 webpack --profile 时输出日志，默认是 false
      verboseWhenProfiling: false,
      // 是否允许 happypack 打印 log 分析信息，默认是 false
      debug: false,
    }),
  ]
  // ...
}

```

##### 参数列表

- `id:string`: 唯一的标识符 `id` 来代表当前的 `HappyPack` 是用来处理一类特定的文件, 默认是 `1`
- `loader: Array`: 写法与 `webpack loaders` 配置一致
- `threads: Number`: 指定对应 `loader` 编译源文件时同时使用的进程数，默认是 `3`
- `threadPool: Happypack.ThreadPool`
  - 默认: `null`
- `verbose: boolean`: 是否允许 `happypack` 输出日志，默认是 `true`
- `verboseWhenProfiling: boolean`:  是否允许 `happypack` 在运行 `webpack --profile` 时输出日志，默认是 `false`
- `debug: boolean`: 是否允许 `happypack` 打印 `log` 分析信息，默认是 `false`

[Github: HappyPack](https://github.com/amireh/happypack)

[淘系前端团队: happypack 原理解析](https://fed.taobao.org/blog/taofed/do71ct/happypack-source-code-analysis)

#### thread-loader

##### 作用

`thread-loader` 能将 `loader` 放置在一个 `worker` 池里面运行，以达到多线程构建。

**Note**: 每个 `worker` 都是一个单独的有 `600ms` 限制的 `node.js` 进程。同时跨进程的数据交换也会被限制。

##### 使用

```sh
npm install --save-dev thread-loader
```

##### 配置

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve("src"),
      use: use: [
        {
          loader: "thread-loader",
          // 有同样配置的 loader 会共享一个 worker 池(worker pool)
          options: {
            // 产生的 worker 的数量，默认是 cpu 的核心数
            workers: 2,

            // 一个 worker 进程中并行执行工作的数量
            // 默认为 20
            workerParallelJobs: 50,

            // 额外的 node.js 参数
            workerNodeArgs: ['--max-old-space-size', '1024'],

            // 闲置时定时删除 worker 进程
            // 默认为 500ms
            // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
            poolTimeout: 2000,

            // 池(pool)分配给 worker 的工作数量
            // 默认为 200
            // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
            poolParallelJobs: 50,

            // 池(pool)的名称
            // 可以修改名称来创建其余选项都一样的池(pool)
            name: "my-pool"
          }
        }
      ]
    }]
  }
  // ..
}
```



[Github: thread-loader](https://github.com/webpack-contrib/thread-loader)

[Webpack thread-loader](https://webpack.js.org/loaders/thread-loader/)

#### Tree Shaking

#### 参考资料

[Webpack](https://webpack.js.org/)

