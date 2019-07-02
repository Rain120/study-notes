#### 1.  Vue是什么

> Vue.js（读音 /vjuː/，类似于 **view** 的读音）是一套构建用户界面(user interface)的**渐进式框架**。与其他重量级框架不同的是，Vue 从根本上采用最小成本、渐进增量(incrementally adoptable)的设计。Vue 的核心库只专注于视图层，并且很容易与其他第三方库或现有项目集成。另一方面，当与[单文件组件](https://vue.docschina.org/v2/guide/single-file-components.html)和 [Vue 生态系统支持的库](https://github.com/vuejs/awesome-vue#components--libraries)结合使用时，Vue 也完全能够为复杂的单页应用程序提供有力驱动。
>
> Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。

#### 2. 学习Vue的原因

 - Vue GitHub star第二
 - Vue 入门比React、Angular简单，[Vue对比其他框架](https://vue.docschina.org/v2/guide/comparison.html)
 - 简答易用、广泛灵活、性能高效

#### 3. 源码学习路径

1. [数据驱动]()

   **VDom**

   ```
   create -> diff -> patch
   ```

   Vue初始化流程

   ```flow
   st=>start: new Vue()
   
   init=>operation: init
   mount=>operation: $mount
   render=>operation: render
   vnode=>operation: vnode
   patch=>operation: patch
   
   cond=>condition: compile
   
   e=>end: DOM
   
   st->init->mount->cond
   cond(yes)->render->vnode->patch->e
   cond(no)->render
   ```

   

2. 生命周期

3. 组件注册

4. 响应式

5. 依赖

#### 参考资料

[Vue.js](https://vue.docschina.org/)

[尤雨溪- Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551)

[Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)

