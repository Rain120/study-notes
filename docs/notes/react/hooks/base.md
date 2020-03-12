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

```jsx
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

  **Hook 允许我们按照代码的用途分离他们，** 而不是像生命周期函数那样。React 将按照 effect 声明的顺序依次调用组件中的*每一个* effect。

- ✅ 通过跳过 Effect 进行性能优化

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

#### useContext()

共享状态钩子

参数: 接收一个 **`context` 对象**（`React.createContext` 的返回值）

返回: 该 `context` 的当前值。

**Note:**

- ✅ 当前的 `context` 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` `prop` 决定
- ✅ `useContext(MyContext)` 相当于 class 组件中的 `static contextType = MyContext` 或者 `<MyContext.Consumer>`

- ✅ `useContext(MyContext)` 只是让你能够*读取* `context` 的值以及订阅 `context` 的变化。你仍然需要在上层组件树中使用 `<MyContext.Provider>` 来为下层组件*提供* `context`

```jsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```



#### useReducer()

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



#### useMemo()

作用: 有助于避免在每次渲染时都进行高开销的计算。

参数: **创建函数**和**依赖项数组**, 它仅会在某个依赖项改变时才重新计算 `memoized` 值。

返回: 返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值。

**Note:**

- 传入 `useMemo` 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 `useEffect` 的适用范畴，而不是 `useMemo`。

- 如果没有提供依赖项数组，`useMemo` 在每次渲染时都会计算新的值。

- 你可以把 `useMemo` 作为性能优化的手段，但不要把它当成语义上的保证。

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

#### useCallback()

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调。

参数: **内联回调**和**一组输入**。

 `useCallback` 将返回一个 `callback(回调)` 的 `memoized` 版本，该版本仅在其中一个输入发生更改时才会更改。 当将回调传递给依赖于引用相等性的优化子组件，以防止不必要的渲染（例如，`shouldComponentUpdate`）时，这非常有用。

`useCallback(fn, inputs)` 等价于 `useMemo(() => fn, inputs)`。

> 注意
>
> 输入数组不作为参数传递给效果函数。 但从概念上讲，这就是它们所代表的内容：效果函数中引用的每个值也应出现在输入数组中。 将来，一个足够先进的编译器可以自动创建这个数组。

```jsx
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```



#### useRef()

参数: `null or DOM` , 用来初始化`ref`对象的 `.current` 属性。

`useRef` 返回一个可变的 ref 对象。**返回的 `ref` 对象在组件的整个生命周期内保持不变, 使用 `React.createRef` ，每次重新渲染组件都会重新创建 `ref`。**

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );

```

**Note:**

- 当 `ref` 对象内容发生变化时，`useRef` 并*不会*通知你。变更 `.current` 属性不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用[回调 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) 来实现。

- 类组件、`React` 元素用 `React.createRef` 

##### React.forwardRef()

**因为函数组件没有实例**, 所以函数组件无法接收`ref`属性，可以通过`React.forwardRef()`来实现。

`React.forwardRef` 会创建一个`React`组件，这个组件能够将其接受的 [ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 属性转发到**其组件树下的另一个组件(子组件)**中。它接受渲染函数作为参数。`React` 将使用 `props` 和 `ref` 作为参数来调用此函数。此函数应返回 `React` 节点。

```jsx
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

那使用`Hooks`呢？

```jsx
const Child = (props, ref) => {
  return <input ref={ref} />
}

const ForwardChild = React.forwardRef(Child);

const Parent = () => {
  const inputRef = useRef();
 
  return <ForwardChild ref={inputRef} />
}

```

##### useImperativeHandle()

参数: `ref, createHandle, [deps]`

`useImperativeHandle` 可以让你在使用 `ref` 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。`useImperativeHandle` 应当与 `forwardRef` 一起使用：

```jsx
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```



#### useCutom 自定义Hooks

- ✅ 钩子一律使用`use`前缀命名，便于识别。你要使用 `xxx` 功能，钩子就命名为 `usexxx`
- ✅ 自定义 Hook 是一种重用**状态逻辑**的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 `Hook` 时，其中的所有 `state` 和副作用都是完全隔离的, 所以**使用相同的 Hook 是不会共享 state**
- ✅ 自定义 `Hook` 解决了以前在 `React` 组件中无法灵活共享逻辑的问题。

```jsx
const usePerson = (personId) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.co/api/people/${personId}/`)
      .then(response => response.json())
      .then(data => {
        setPerson(data);
        setLoading(false);
      });
  }, [personId]);  
  return [loading, person];
};
```

更多详见[Hooks索引](https://zh-hans.reactjs.org/docs/hooks-reference.html)

### Hooks 生命周期对应Class 组件类

| Hooks          | Class Componets                                              |
| -------------- | ------------------------------------------------------------ |
| `useEffect`    | `componentDidMount`,`componentDidUpdate`, `componentWillUnmount` |
| 函数没有       | `constructor`                                                |
| 函数组件体本身 | `render`                                                     |
| `React.memo`   | `shouldComponentUpdate`                                      |

详见[生命周期方法要如何对应到 Hook？](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks)

### 参考资料

[React Hooks](https://reactjs.org/docs/hooks-intro.html)

[React Hooks 入门教程](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)

[React Hooks 详解 ](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)

[When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback/)

