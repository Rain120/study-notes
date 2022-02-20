#### setState()

```jsx
setState(updater, [callback])
```

`setState()` 将对组件 `state` 的更改排入队列，并通知 `React` 需要使用更新后的 `state` 重新渲染此组件及其子组件。这是用于更新用户界面以响应事件处理器和处理服务器数据的主要方式

#### setState是异步的吗？

- `setState`只在合成事件和钩子函数中是“异步”的，在原生事件和 `setTimeout`中都是同步的。

- `setState`的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 `setState(partialState, callback)` 中的`callback`拿到更新后的结果。

- `setState`的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和`setTimeout` 中不会批量更新，在“异步”中如果对同一个值进行多次 `setState`， `setState`的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 `setState`多个不同的值，在更新时会对其进行合并批量更新。

#### 参考资料

[React setState](https://reactjs.org/docs/react-component.html#setstate)

[React Dan Abramov 的解释](https://github.com/facebook/react/issues/11527#issuecomment-360199710)

[你真的理解setState吗？](https://juejin.im/post/6844903636749778958)

[揭密React setState](https://imweb.io/topic/5b189d04d4c96b9b1b4c4ed6): 表示不同意其中 `setState` 是异步的观点



