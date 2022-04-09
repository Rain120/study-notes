# React Fiber

## 浏览器一帧都做些什么？

浏览器的每一帧(WIP)

## Fiber

### 协调阶段 (Reconciliation Phase)

:::warning
**可被中断, 可恢复, 可让出执行控制权, 生命周期函数可能会执行多次, 页面不会发生变更**

主要是进行 VDom的 diff, 找出节点的变更(Effect), 比如说节点的更新, 新增, 删除, Props变更等, 一般会调用这些生命周期:

- constructor
- getDerivedStateFromProps
- shouldComponentUpdate
- render
:::

在执行完协调任务之后, 进入提交阶段之前, fiber 会执行 getSnapshotBeforeUpdate。

### 提交阶段 (Commit Phase)

:::warning
**不可被中断, 页面会发生变更**

主要是对上一阶段节点的变更(Effect)进行合并更新, 一般会调用这些生命周期:

- componentDidMount
- componentDidUpdate
- componentWillUnmount

所以, 尽量少在这个阶段去对 state 进行修改
:::

## Scheduler

## requestIdleCallback

[Using requestIdleCallback](https://developers.google.com/web/updates/2015/08/using-requestidlecallback)

### 自己实现的原因

- 浏览器兼容性的问题 [requestIdleCallback Usage](https://caniuse.com/?search=requestIdleCallback)
![requestIdleCallback-polyfill.png](../images/requestIdleCallback-polyfill.png)
- requestIdleCallback 依赖于显示器的刷新频率, 使用时需要看 vsync cycle（指硬件设备的频率）

### 实现方式

采用MessageChannel, 放弃了浏览器对帧的依赖策略, 转为认为控制调度的频率。提升了任务的处理速度, 优化React运行时的性能。

:::tip
MessageChannel（消息通道通信）是点对点的管道通信方式。它可将代码块独立地运行在不同的浏览器上下文中。不同的上下文, 通过它建立的管道进行消息传输。MessageChannel主要有以下特点：

- 两个只读的MessagePort: port1和port2, 这两个端口搭建起了消息通道接手的桥梁
- 一个端口作为本地端口, 另一个端口传递给远程窗口使用
- 消息将以DOM事件的方式传递, 不会中断或阻塞事件循环中的task任务
:::

### 任务优先级

```js
// React内部使用：初始化和重置root；用户自定义使用
export const NoPriority = 0; // 没有任何优先级
export const ImmediatePriority = 1; // 立即执行的优先级，级别最高
export const UserBlockingPriority = 2; // 用户阻塞级别的优先级
export const NormalPriority = 3; // 正常的优先级
export const LowPriority = 4; // 较低的优先级
export const IdlePriority = 5; // 优先级最低，表示任务可以闲置

// 不同优先级对应的不同的任务过期时间间隔
const IMMEDIATE_PRIORITY_TIMEOUT = -1;
const USER_BLOCKING_PRIORITY_TIMEOUT = 250;
const NORMAL_PRIORITY_TIMEOUT = 5000;
const LOW_PRIORITY_TIMEOUT = 10000;
// Never times out
const IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
```