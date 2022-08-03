---
sidebar_position: 2
---

参数列表与 [useEffect()](./useEffect) 一样

**区别:**

- 使用场景
  - useEffect 是异步的 (不会阻塞浏览器渲染)，用于绝大多数场景
  - useLayoutEffect 会在所有的 DOM 变更之后同步调用 (会阻塞浏览器渲染)，主要用于处理 DOM 操作、调整样式、避免页面闪烁等问题。**需要避免在 useLayoutEffect 做计算量较大的耗时任务从而造成阻塞。**

- 使用效果
  - useEffect 是按照顺序执行代码的，会在全部渲染完毕后才会执行
  - useLayoutEffect 会在 浏览器 layout 之后，painting(渲染) 之前执行
  - **useLayoutEffect 总是比 useEffect 先执行。**

![layout-paint.png](./images/layout-paint.png)

[你可能不是“我”所认识的useEffect](https://imweb.io/topic/5cd845cadcd62f86299fcd76)
