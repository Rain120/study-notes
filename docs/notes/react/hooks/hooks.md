### 什么是`Hooks`?

>  **Hook** 是 `React 16.8 `的新增特性。它可以让你在不编写 `class` 的情况下使用 `state` 以及其他的 `React` 特性。

### 为什么要使用`React Hooks`?

传统**组件类**的几个缺点:

- 大型组件很难拆分和重构，也很难测试。
- 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
- 组件类引入了复杂的编程模式，比如 `render props` 和高阶组件。

**详见**

[React Hooks 动机](https://zh-hans.reactjs.org/docs/hooks-intro.html#motivation)

[Redux 的作者 Dan Abramov的 总结](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)

`Hooks`的优势

- 能优化类组件的三大问题
- 能将组件中相互关联的部分拆分成更小的函数
- 能在无需修改组件结构的情况下复用状态逻辑

[Why React Hooks](https://tylermcginnis.com/why-react-hooks/)

### 使用注意事项

- ✅ 钩子一律使用`use`前缀命名，便于识别。你要使用 `xxx` 功能，钩子就命名为 `usexxx`
- ✅ 只在最顶层使用 `Hooks`，不要在循环，条件或嵌套函数中调用 `Hooks`
- ✅ 只在 `React` 函数中调用 `Hooks`, 不要在普通的 `JavaScript` 函数中调用 `Hooks`
- ✅ [Hookes 警告](https://reactjs.org/warnings/invalid-hook-call-warning.html)

[Hooks 规则](https://zh-hans.reactjs.org/docs/hooks-rules.html)

### 常用的Hooks

#### useState()

用于为函数组件引入状态 `(state)`。纯函数不能有状态，所以把状态放在钩子里面。

作用: 定义一个`state`

参数: 初始化 `state`

返回值: [当前 `state` , 更新 `state` 的函数] **Note**: 返回一个数组

```javascript
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

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



#### useEffect()

`Effect Hook` 可以让你在函数组件中执行副作用**(指那些没有发生在数据向视图转换过程中的逻辑)**操作。

作用: 给函数组件增加了操作副作用的能力。**React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。**

分类:

1. 需要清除的
2. 不需要清除的

参数:

 	1. 处理副作用的函数
      	1. 返回一个**能清除副作用的函数**,`React` 会在组件卸载的时候执行清除操作。
      	2. 不返回任何内容
 	2. 依赖项数组 `deps

`useEffect对应着 class` 组件中的 `componentDidMount`、`componentDidUpdate` 和  `componentWillUnmount`，

**Tips:** `Effect Hooks`与 `componentDidMount` 或 `componentDidUpdate` 不同，使用 `useEffect` 调度的 `effect` 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，`effect` 不需要同步地执行。在个别情况下（例如测量布局），有单独的 [`useLayoutEffect`](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect) `Hook` 供你使用，其 `API` 与 `useEffect` 相同。

```javascript
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

- 使用多个 `Effect` 实现关注点分离

  使用 Hook 其中一个[目的](https://zh-hans.reactjs.org/docs/hooks-intro.html#complex-components-become-hard-to-understand)就是要解决 class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题。下述代码是将前述示例中的计数器和好友在线状态指示器逻辑组合在一起的组件

  ```javascript
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

  ```javascript
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

  **Hook 允许我们按照代码的用途分离他们，** 而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的*每一个* effect。

- 通过跳过 Effect 进行性能优化

#### useContext()

#### useReducer()

### 参考资料

[React Hooks](https://reactjs.org/docs/hooks-intro.html)

[React Hooks 入门教程](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)

[React Hooks 详解 ](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)