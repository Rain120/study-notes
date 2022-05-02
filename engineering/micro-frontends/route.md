# 路由劫持 (WIP)

## 思考

微前端可以具有 SPA (Single-page Application) 的开发体验, 也可以具备 MPA(Multi-page Application) 应用带来的灵活性。但是在SPA页面中, 路由变化是不会引发页面刷新的。我们要如何监听路由的变化呢？

## 路由的分类

- hash
    :::note
    表现形式:  `URL` 中携带 `#`, 举个🌰 `xxx.com/#/rain120`
    方式: 可以通过监听 [window hashchange](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/hashchange_event) 事件获取路由的变化
    :::
- [history](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history)
    :::note
    表现形式: 常见的 `URL` 形式
    方式:
    1. 前进(forward), 后退(back), 跳转(go) 可以通过监听 popstate 的变化
    2. 路由的切换可以通过监听 pushState, replaceState 的变化
    :::

更多信息参考[Javascript 核心概念 路由](https://rain120.github.io/study-notes/fe/javascript/key-concept/router)

## 劫持实现

### 思路

- 监听 `hashchange` 和 `popstate` 事件，并实现处理逻辑
- 重写 `pushState` 和 `replaceState`，并实现处理逻辑

### 实现

```ts
// route/index.ts

// restore origin history method
const originPushState = window.history.pushState;
const originReplaceState = window.history.replaceState;

export const onRouteChange = () => {
    window.addEventListener('popstate', () => {
        console.log('The popstate has changed!');

        // other things to do here
    }, false);

    window.addEventListener('hashchange', () => {
        console.log('The hash has changed!');

        // other things to do here
    }, false);

    window.history.pushState = (...args) => {
        originPushState.apply(window.history, args);
        
        // other things to do here
    };

    window.history.replaceState = (...args) => {
        originReplaceState.apply(window.history, args);

        // other things to do here
    };
}

```

### 优化点

- 初始化时路由信息处理
- 重复URL处理逻辑
- 缓存路由处理
