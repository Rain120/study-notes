---
sidebar_position: 2
---

# 前期准备

:::tip
见仁见智, 我只是收集了我在准备面试之前, 我看过的资料, 欢迎PR, 或者提issue.
:::

## 个人复习提纲

https://github.com/Rain120/Web-Study/issues/16

## 八股文

## React

[React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)

[React Fiber很难？六个问题助你理解 React Fiber](https://juejin.cn/post/6984949525928476703#heading-22)

## 浏览器相关

[图解浏览器的基本工作原理](https://zhuanlan.zhihu.com/p/47407398)

[How browsers work](https://web.dev/howbrowserswork/) 注意：生肉

### Google Blog

[Round-up of web browser internals resources](https://developer.chrome.com/blog/round-up-of-web-browser-internals-resources/) 主要收集web浏览器内部工作原理的资源。

- Inside look at modern web browser
  - [Part 1](https://developer.chrome.com/blog/inside-browser-part1/)
  - [Part 2](https://developer.chrome.com/blog/inside-browser-part2/)
  - [Part 3](https://developer.chrome.com/blog/inside-browser-part3/)
  - [Part 4](https://developer.chrome.com/blog/inside-browser-part4/)

## 事件循环(Event Loop)

[一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.cn/post/6844903764202094606)

[一篇文章教会你Event loop——浏览器和Node](https://segmentfault.com/a/1190000013861128)

### Node

[不要混淆nodejs和浏览器中的event loop](https://cnodejs.org/topic/5a9108d78d6e16e56bb80882)

- timer(setTimeout, setInterval callback)
- pending callbacks
- idle, prepare(内部使用)
- poll(connections, data, etc.) 阻塞等待监听的事件来临，然后执行对应的callback
- check(setImmediate callback)
- close callback(socket.on('close', () => {}))

```
   ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<─────┤  connections, │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```

## HTTP

个人提纲: https://github.com/Rain120/Web-Study/issues/16#issuecomment-1028776101

[HTTPS 温故知新](https://halfrost.com/https-begin/)

[HTTP 版本对比](https://rain120.github.io/study-notes/engineering/http/version-compare)

[TLS 对称加密、非对称加密](http://www.ruanyifeng.com/blog/2014/09/illustration-ssl.html)

### TCP

[淘宝二面，面试官居然把TCP三次握手问的这么详细](https://www.eet-china.com/mp/a44399.html)

[TCP流量控制、拥塞控制](https://zhuanlan.zhihu.com/p/37379780)

[TCP 的那些事儿](https://coolshell.cn/articles/11564.html)

[30张图解： TCP 重传、滑动窗口、流量控制、拥塞控制](https://www.cnblogs.com/xiaolincoding/p/12732052.html)

## 浏览器

个人提纲: https://github.com/Rain120/Web-Study/issues/16#issuecomment-1028776609

[浏览器工作原理与实践](https://blog.poetries.top/browser-working-principle/)

### 浏览器缓存

[深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)

[一文读懂前端缓存](https://juejin.cn/post/6844903747357769742)

[使用 HTTP 缓存避免不必要的网络请求](https://web.dev/http-cache/)

[A Tale of Four Caches(四个缓存位置)](https://calendar.perfplanet.com/2016/a-tale-of-four-caches/)

### 跨域

[跨源资源共享（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

[跨域资源共享 CORS 详解](https://www.ruanyifeng.com/blog/2016/04/cors.html)

**简单请求**

请求方法包括
- get
- post
- head

请求头仅限于下面这些:
- content-type
  - text/plain
  - multipart/form-data
  - application/x-www-form-urlencoded
- Content-Language
- Accept
- Accept-Language
- Last-Event-ID

**非简单请求**

不是简单请求就是非简单请求, 会发生预检请求(preflight request)。

**配置**
与CORS请求相关的字段，都以Access-Control-开头

- Access-Control-Allow-Origin
  表示接受什么域名的请求
- Access-Control-Allow-Credentials
  表示是否允许发送Cookie，默认情况下，Cookie不包括在CORS请求之中。若服务端配置为 true, 客户端必须在AJAX请求中打开withCredentials属性。
- Access-Control-Expose-Headers

## 前端面试题库

[前端面试题宝典](https://fe.ecool.fun/)

[互联网大厂面试每日一题](https://q.shanyue.tech/)

[木易杨前端进阶](https://muyiy.cn/)

## LeetCode

[LeetCode 刷题](https://leetcode-cn.com/)是必备的一项工作, 推荐 [剑指 Offer](https://leetcode-cn.com/study-plan/lcof/) 和 [🔥 LeetCode 热题 HOT 100](https://leetcode-cn.com/problem-list/2cktkvj/) 两个题库。

Github 上有一个[互联网公司技术岗考察Leetcode题目的热度](https://github.com/afatcoder/LeetcodeTop)的仓库，也可以去参考刷题。