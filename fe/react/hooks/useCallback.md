---
sidebar_position: 3
---

返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调。

参数: **内联回调**和**一组输入**。

 `useCallback` 将返回一个 `callback(回调)` 的 `memoized` 版本，该版本仅在其中一个输入发生更改时才会更改。 当将回调传递给依赖于引用相等性的优化子组件，以防止不必要的渲染（例如，`shouldComponentUpdate`）时，这非常有用。

`useCallback(fn, inputs)` 等价于 `useMemo(() => fn, inputs)`。

> **注意**
>
> 输入数组不作为参数传递给效果函数。 但从概念上讲，这就是它们所代表的内容：效果函数中引用的每个值也应出现在输入数组中。 将来，一个足够先进的编译器可以自动创建这个数组。

```jsx
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

`useMemo()`和`useCallback()`的区别

-  `useMemo` 缓存的是计算数据的值, 返回的是函数运行的结果; `useCallback` 缓存的是函数的引用，所以返回的是函数。
-  `useMemo` 专注于避免繁重的计算, `useCalback`专注于不同的事情, 它修复了内联事件处理程序时的性能问题
