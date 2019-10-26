[目录 -> 学习笔记](notes/guide.md)

[目录 -> 上一级](notes/vue/guide.md)

#### 1.  Vue是什么

> Vue.js（读音 /vjuː/，类似于 **view** 的读音）是一套构建用户界面(user interface)的**渐进式框架**。与其他重量级框架不同的是，Vue 从根本上采用最小成本、渐进增量(incrementally adoptable)的设计。Vue 的核心库只专注于视图层，并且很容易与其他第三方库或现有项目集成。另一方面，当与[单文件组件](https://vue.docschina.org/v2/guide/single-file-components.html)和 [Vue 生态系统支持的库](https://github.com/vuejs/awesome-vue#components--libraries)结合使用时，Vue 也完全能够为复杂的单页应用程序提供有力驱动。
>
> Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。

#### 2. 学习Vue的原因

 - Vue GitHub star第二
 - Vue 入门比React、Angular简单，[Vue对比其他框架](https://vue.docschina.org/v2/guide/comparison.html)
 - 简答易用、广泛灵活、性能高效

#### 3. 源码学习路径

​	**预知知识**

​		[Proxy](http://es6.ruanyifeng.com/#docs/proxy): 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”(`meta programming`)，即对编程语言进行编程。

1. [数据驱动](notes/vue/code-review/data-driver.md)

   指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据。

2. [生命周期](notes/vue/code-review/lifecycle.md)

3. 组件注册

4. [响应式原理](notes/vue/code-review/responsive-principle.md)

5. 依赖

源码目录

```
├── src
│   ├── compiler # 编译相关(ing)
│   │   ├── codegen
│   │   ├── create-compiler.js
│   │   ├── directives
│   │   ├── error-detector.js
│   │   ├── helpers.js
│   │   ├── index.js
│   │   ├── optimizer.js
│   │   ├── parser
│   │   └── to-function.js
│   ├── core # 核心代码(ing)
│   │   ├── components
│   │   ├── config.js
│   │   ├── global-api
│   │   ├── index.js
│   │   ├── instance
│   │   ├── observer
│   │   ├── util
│   │   └── vdom
│   ├── platforms # 不同平台的支持(❎)
│   │   ├── web
│   │   └── weex
│   ├── server # 服务端渲染(❎)
│   │   ├── bundle-renderer
│   │   ├── create-basic-renderer.js
│   │   ├── create-renderer.js
│   │   ├── optimizing-compiler
│   │   ├── render-context.js
│   │   ├── render-stream.js
│   │   ├── render.js
│   │   ├── template-renderer
│   │   ├── util.js
│   │   ├── webpack-plugin
│   │   └── write.js
│   ├── sfc # .vue 文件解析(❎)
│   │   └── parser.js
│   └── shared # 共享代码(✅)
│       ├── constants.js
│       └── util.js
```



#### 参考资料

[Vue.js](https://vue.docschina.org/)

[尤雨溪- Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551)

[Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)

