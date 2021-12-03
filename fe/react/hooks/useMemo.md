---
sidebar_position: 5
---

作用: 有助于避免在每次渲染时都进行高开销的计算。

参数: **创建函数**和**依赖项数组**, 它仅会在某个依赖项改变时才重新计算 `memoized` 值。

返回: 返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值。

:::tip
- 传入 `useMemo` 的函数会**在渲染期间执行**, 所以为了避免一些没必要重复执行的方法, 可以使用`useMemo`。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 `useEffect` 的适用范畴，而不是 `useMemo`。

- 如果没有提供依赖项数组，`useMemo` 在每次渲染时都会计算新的值。

- 你可以把 `useMemo` 作为性能优化的手段，但不要把它当成语义上的保证。

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
:::
