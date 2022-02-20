---
sidebar_position: 5
---

参数: `null or DOM` , 用来初始化`ref`对象的 `.current` 属性。

`useRef` 返回一个可变的 `ref 对象`。**返回的 `ref` 对象在组件的整个生命周期内保持不变, 使用 `React.createRef` ，每次重新渲染组件都会重新创建 `ref`。**

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

- 当 `ref` 对象内容发生变化时，`useRef` 并*不会*通知你。修改`ref.current` 不会引发组件重新渲染。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用[回调 ref](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node) 来实现。
- `useRef` 在渲染周期内永远不变，所以可以用来引用某些值。
- 类组件、`React` 元素用 `React.createRef` 。

#### useRef vs createRef

- `useRef` 只能用于 **函数组件**，`createRef` 可以用在类组件上。
- `useRef` 在每次重新渲染后都保持不变，`createRef` 每次都会发生变化。
