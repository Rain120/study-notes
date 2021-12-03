---
sidebar_position: 2
---

`Effect Hook` 可以让你在函数组件中执行副作用**(指那些没有发生在数据向视图转换过程中的逻辑)**操作。

作用: 给函数组件增加了操作副作用的能力。**React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。**

分类:

1. 需要清除的
2. 不需要清除的

参数:

1. 处理副作用的函数
   1. 返回一个**能清除副作用的函数**,`React` 会在组件卸载的时候执行清除操作。
   2. 不返回任何内容
2. 依赖项数组 `deps`

`useEffect对应着 class` 组件中的 `componentDidMount`、`componentDidUpdate` 和  `componentWillUnmount`，

**Tips:** `Effect Hooks`与 `componentDidMount` 或 `componentDidUpdate` 不同，使用 `useEffect` 调度的 `effect` 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，`effect` 不需要同步地执行。在个别情况下（例如测量布局），有单独的 [`useLayoutEffect`](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect) `Hook` 供你使用，其 `API` 与 `useEffect` 相同。

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**使用Tips**

- ✅ 使用多个 `Effect` 实现关注点分离

  使用 Hook 其中一个[目的](https://zh-hans.reactjs.org/docs/hooks-intro.html#complex-components-become-hard-to-understand)就是要解决 class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题。下述代码是将前述示例中的计数器和好友在线状态指示器逻辑组合在一起的组件

  ```jsx
  class FriendStatusWithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0, isOnline: null };
      this.handleStatusChange = this.handleStatusChange.bind(this);
    }
  
    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
      ChatAPI.subscribeToFriendStatus(
        this.props.friend.id,
        this.handleStatusChange
      );
    }
  
    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times`;
    }
  
    componentWillUnmount() {
      ChatAPI.unsubscribeFromFriendStatus(
        this.props.friend.id,
        this.handleStatusChange
      );
    }
  
    handleStatusChange(status) {
      this.setState({
        isOnline: status.isOnline
      });
    }
    // ...
  ```

  可以发现设置 `document.title` 的逻辑是如何被分割到 `componentDidMount` 和 `componentDidUpdate` 中的，订阅逻辑又是如何被分割到 `componentDidMount` 和 `componentWillUnmount` 中的。而且 `componentDidMount` 中同时包含了两个不同功能的代码。

  使用`Hooks`

  ```jsx
  function FriendStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }
  
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });
    // ...
  }
  ```

  **Hook 允许我们按照代码的用途分离他们，** 而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的**每一个** `effect`。

- ✅ 通过跳过 `Effect` 进行性能优化

  在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。在 `class` 组件中，我们可以通过在 `componentDidUpdate` 中添加对 `prevProps` 或 `prevState` 的比较逻辑解决。

  ```jsx
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`;
    }
  }
  ```

  它被内置到了 `useEffect` 的 `Hook API` 中。如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React **跳过**对 `effect` 的调用，只要传递数组作为 `useEffect` 的第二个可选参数即可。

  ```jsx
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 更改时更新
  ```

  推荐启用 [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 中的 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 规则。