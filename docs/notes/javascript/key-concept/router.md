### 前置知识

#### 单页应用

> 又称[SPA(Single Page Application)](https://zh.wikipedia.org/zh-cn/%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8)，它是一种[网络应用程序](https://zh.wikipedia.org/wiki/网络应用程序)或[网站](https://zh.wikipedia.org/wiki/網站)的模型，它通过动态重写当前页面来与用户交互，而非传统的从服务器重新加载整个新页面。这种方法避免了页面之间切换打断[用户体验](https://zh.wikipedia.org/wiki/用户体验)，使应用程序更像一个[桌面应用程序](https://zh.wikipedia.org/wiki/应用软件)。在单页应用中，所有必要的代码（[HTML](https://zh.wikipedia.org/wiki/HTML)、[JavaScript](https://zh.wikipedia.org/wiki/JavaScript)和[CSS](https://zh.wikipedia.org/wiki/层叠样式表)）都通过单个页面的加载而检索[[1\]](https://zh.wikipedia.org/zh-cn/单页应用#cite_note-Flanagan2006-1)，或者根据需要（通常是为响应用户操作）[动态装载](https://zh.wikipedia.org/wiki/動態裝載)适当的资源并添加到页面。   `---Wiki` 

### 什么是路由

> **路由** `(routing)` 就是通过互联的[网络](https://zh.wikipedia.org/wiki/互聯網)把[信息](https://zh.wikipedia.org/wiki/信息)从源地址传输到目的地址的活动。  `---Wiki` 

### 前端路由的由来

前端路由的概念来源于服务端，在服务端中路由描述的是 `URL` 与处理函数之间的映射关系。

在 `SPA` 中，路由描述的是 `URL` 与 `UI` 之间的映射关系，这种映射是单向的，即 `URL` 变化引起 `UI` 更新(无需刷新页面)。

### 前端路由有什么优点和缺点

#### 优点

- 用户体验好，不需要每次都从服务器全部获取，快速展现给用户

#### 缺点

- 使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存，单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置。

### 路由分类

#### hash模式

在`URL`中，用 **`#`** 来做为 `hash` 标志，`#`后面的字符串都称为 `hash`, 可以通过 [window.location.hash](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash)来读取， 常用作**锚点**在页面内进行导航，由于我们在 **改变 `url hash` 值的同时，不会引起页面刷新**，所以我们可以是通过监听`url`中的`hash`变化来进行路由跳转。

当然了，[window.location.hash](https://developer.mozilla.org/zh-CN/docs/Web/API/Location/hash) 这个属性可读可写。读取时，可以用来判断网页状态是否改变；写入时，则会在不重载网页的前提下，创造一条访问历史记录。我们还可以通过 [onhashchange](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onhashchange) 来判断网页状态是否改变。

```js
window.addEventListener("hashchange", event => {
  let newURL = event.newURL; // hash 改变后的新 url
  let oldURL = event.oldURL; // hash 改变前的旧 url
}, false);
```

**Note:** 对于不支持`onhashchange`的浏览器，可以用`setInterval`监控`location.hash`的变化。

##### 触发场景

- 通过`<a>`标签改变 URL
- 通过`window.location`改变`URL`
- 通过浏览器前进后退改变 `URL`

##### 实现原理

```js

```



#### history模式

在 `HTML5`之前， `DOM` 上的 [`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) 对象通过 [`history`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/history) 对象提供了对浏览器的会话历史的访问，它暴露了很多有用的方法和属性，允许你在用户浏览历史中向前和向后跳转。你可以使用 [`back()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/back),  [`forward()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/forward)和  [`go()`](https://developer.mozilla.org/zh-CN/docs/Web/API/History/go) 方法来完成在用户历史记录中向后和向前的跳转。

```js
history.forward();     // 前进一页
history.back();      // 后退一页
history.go(-1);       // 后退一页 === back()
window.history.go(1); // 前进一页 === forward()
history.go(2);        // 前进两页
```

您可以通过查看长度属性的值来确定的历史堆栈中页面的数量:

```js
 let numberOfEntries = window.history.length;
```

`MDN` 在 [添加和修改历史记录中的条目](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API#添加和修改历史记录中的条目) 中有这样的描述:

> `HTML5`引入了 [history.pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) 和 [history.replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_replaceState()_method) 方法，它们分别可以添加和修改历史记录条目。这些方法通常与[window.onpopstate](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/onpopstate) 配合使用。

```js
history.pushState(state, title, url);         // 添加新的状态到历史状态栈
history.replaceState(state, title, url);      // 用新的状态代替当前状态
history.state                // 返回当前状态对象
```

##### 二者参数说明

- `state`: 一个`JavaScript`对象，可以用在 popstate 事件中

- `title`: 现在大多浏览器忽略这个参数，可以直接用 `null` 代替

- `url`: 该参数定义了新的历史`URL`记录。键入任意有效的 `URL`，用于更新浏览器的地址栏

##### 区别

`pushState()` 是在保留现有历史记录的同时，将 `URL` 加入到历史记录中

`replaceState()` 是修改了当前的历史记录项而不是新建一个`URL`

##### 触发场景

- 通过`<a>`标签改变 URL
- 触发 `history.pushState / history.replaceState` 函数
- 通过浏览器前进后退改变 `URL`

##### 实现原理

```js

```



#### 区别

##### hash模式

- 兼容性更好，可以兼容到 `IE8`
- 无需服务端配合处理非单页的`url`地址
- 可以随意刷新

##### history模式

- `hash` 模式的 `URL` 中一直存在 `#`，不够美观， **`history` 模式不存在这个问题**
- 相同 hash,  `hash` 模式不会触发动作将记录加入到历史栈中, `history` 模式可以通过 `history.pushState` 来实现
- 同时使用 `hash` 模式和 **锚点功能**，锚点功能会失效， **`history` 模式不存在这个问题**
- 无法随意刷新，需要服务端覆盖所有情况的请求资源，当刷新时，如果服务器中没有相应的响应或者资源，会分分钟刷出一个404来。
- 不兼容低版本

**Note:** **如果需要兼容低版本**，选择 `hash` 模式即可；如果不需要兼容，后端(`or` 服务端)也配置了所有情况的请求资源，那选择 `history` 模式。

### 参考资料

[路由](https://zh.wikipedia.org/zh-cn/%E8%B7%AF%E7%94%B1)

[前端路由是什么东西？ - 知乎](https://www.zhihu.com/question/53064386)

[阮一峰 URL的井号](http://www.ruanyifeng.com/blog/2011/03/url_hash.html)

[wiki URI Fragment](https://en.wikipedia.org/wiki/URI_fragment)

[MDN History API](https://developer.mozilla.org/zh-CN/docs/Web/API/History)

[MDN Window location API](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location)



