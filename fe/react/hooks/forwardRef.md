---
sidebar_position: 5
---

**因为函数组件没有实例**, 所以函数组件无法接收`ref`属性，可以通过`React.forwardRef()`来实现。

`React.forwardRef` 会创建一个`React`组件，这个组件能够将其接受的 [ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 属性转发到**其组件树下的另一个组件(子组件)**中。它接受渲染函数作为参数。`React` 将使用 `props` 和 `ref` 作为参数来调用此函数。此函数应返回 `React` 节点。

```jsx
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));
```