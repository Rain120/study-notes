# 沙箱

## 前言

当多个子应用独立运行时，每个应用都会有自己的运行环境，这看起来很美好，对吧。但是运行在**宿主应用** 里应用，需要如何避免自身的环境被 **宿主应用** 影响，或者影响  **宿主应用**，即 **应用间运行时如何相互隔离**，比如说常见的如何实现JS隔离，CSS隔离。

一般的，常见的方案会有下面这些：

- 基于 iframe + 消息通信的实现
- 基于 Proxy 快照存储 + window 修改的实现
- 基于 Proxy 代理拦截 + window 激活/卸载的实现
- 基于普通对象快照存储的 window 属性 diff 实现
- 基于 [ShadowRealm](https://github.com/tc39/proposal-shadowrealm) 提案的实现
- 基于 with + eval 的简单实现
- Webpack 5 Module Federation(模块联邦)

## 为什么不选择 iframe

```ts
const iframe  = document.createElement('iframe', { src: 'about:blank' });
document.body.appendChild(iframe);
const sandboxGlobal = iframe.contentWindow;
```

[iframe sandbox](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe#attr-sandbox)

:::tip [引用 Why Not Iframe](https://www.yuque.com/kuitos/gky7yw/gesexv)
iframe 最大的特性就是提供了浏览器原生的硬隔离方案，不论是样式隔离、js 隔离这类问题统统都能被完美解决。但他的最大问题也在于他的隔离性无法被突破，导致应用间上下文无法被共享，随之带来的开发体验、产品体验的问题。

1. url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。**(好解决)**
2. UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中。 **(难以解决)**
3. 全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。**(难以解决)**
4. 慢。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程，加载优化、运行优化问题 **(好解决)**

:::

## 为什么不选择 Module Federation

Module Federation 支持多个独立的构建可以组成一个应用程序，这些独立的构建之间不应该存在依赖关系，因此可以单独开发和部署它们。

这个方案中有两个主体： Remote 和 Host ，可以把Remote理解为想要引入的子应用，把Host理解为主应用（但是一个应用既可以是Remote也可以是Host，并不矛盾）。

但是如果接入的应用对 **shared 依赖包** 有强依赖关系，就没办法使用这种方案，必须保持一致。

Module Federation的核心在于ModuleFederationPlugin这个插件：

```ts
new ModuleFederationPlugin({
 name: "App1",
 library: { type: "var", name: "App1" },
 filename: "remoteEntry.js",
 remotes: {
    app_02: 'App2',
    app_03: 'App3',  
},
  exposes: {
    antd: './src/antd',
    button: './src/button',  
},
  shared: ['react', 'react-dom'],
})
```

- name，必须，唯一ID，作为输出的模块名，使用的时通过name/{expose}的方式使用；
- library，必须，其中这里的name为作为umd的name。
- remotes，可选，表示作为Host时，去消费哪些Remote。
- exposes，可选，表示作为Remote时，export哪些属性被消费。
- shared，可选，优先用Host的依赖，如果Host没有，再用自己的。

## 定义

又称为 sandbox, 指一个允许你独立运行程序的虚拟环境。它能够有效地隔离、收集、清除应用在运行期间所产生的副作用，保证 **当前执行环境** 作用域和 **外部** 其他作用域相互独立，互不影响。

比如说全局变量、全局事件、定时器、网络请求、localStorage、Style 样式、DOM 元素。

## 沙盒的优势

- 开发者体验不到环境的区别
- 运行没有环境差异

## 分类

:::warning 前置
通过 [Garfish](https://github.com/modern-js-dev/garfish) 的实现原理来分析，欢迎和我一起看代码
:::

### 快照沙箱

它主要是通过对全局的 **window 变量** 进行操作，大致执行步骤是

1. 存储当前执行环境
2. 执行具备有副作用的代码
3. 恢复执行环境

code path: `packages/browser-snapshot/src/sandbox.ts:L31`

#### CSS styles

```ts
// github/garfish/packages/browser-snapshot/src/patchers/style.ts
export class PatchStyle {
  private domSnapshotBefore!: Snapshot;
  private domSnapshotMutated!: SnapshotDiff | null;

  public activate() {
    // 记录当前dom节点、恢复之前dom节点副作用
    this.domSnapshotBefore = Snapshot.take();

    if (this.domSnapshotMutated)
      this.headInterceptor.add(
        this.domSnapshotMutated.created,
        this.domSnapshotMutated.removed,
      );
  }

  public deactivate() {
    // 恢复沙盒运行前dom节点环境，并将差异值进行缓存
    const domSnapshot = Snapshot.take();
    this.domSnapshotMutated = domSnapshot.diff(this.domSnapshotBefore);

    if (!this.domSnapshotMutated) return;
    this.headInterceptor.remove(
      this.domSnapshotMutated.created,
      this.domSnapshotMutated.removed,
    );
  }

  // ...
}
```

### Proxy(代理)沙箱


## 参考资料

[Webpack 5 Module Federation(模块联邦)](https://webpack.js.org/concepts/module-federation/)
