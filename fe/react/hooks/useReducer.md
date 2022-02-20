---
sidebar_position: 2
---

熟悉`Redux`的应该知道`Redux`的核心概念是 **组件发出 action 与状态管理器通信，状态管理器收到 action 以后，使用 Reducer 函数算出新的状态**。

参数: 接收一个形如 `(state, action) => newState` 的 `reducer`

返回: [当前的 `state` , 其配套的 `dispatch` 方法。]

**Note:**

- 在某些场景下，`useReducer` 会比 `useState` 更适用，例如 `state` 逻辑较复杂且包含多个子值，或者下一个 `state `依赖于之前的 `state` 等

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

你可以[惰性初始化](https://zh-hans.reactjs.org/docs/hooks-reference.html#lazy-initialization) `state`,需要将 `init` 函数作为 `useReducer` 的第三个参数传入，这样初始 `state` 将被设置为 `init(initialArg)`

```jsx
function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>

        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

```

### 