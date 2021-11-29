

### <span id="top">快速导航</span>

[HTML学习](./knowledge-map/fe/html.md) | [CSS - 从入门到放弃](./knowledge-map/fe/css.md) | [JavaScript学习](./knowledge-map/fe/javascript.md) | [浏览器相关](./knowledge-map/fe/browser.md) | [Nodejs学习](./knowledge-map/fe/nodejs.md)| [框架学习之React & Vue](./knowledge-map/fe/react-vue.md)

[Q1: 浏览器的工作原理](#q1)

<span id="q1">1</span>. **浏览器的工作原理**

![layers](../images/layers.png)

<center>  浏览器结构</center>

**用户界面(User Interface)** - 包括地址栏、前进/后退按钮、书签菜单等。除了浏览器主窗口显示的您请求的页面外，其他显示的各个部分都属于用户界面。

**浏览器引擎(Browser engine)** - 在用户界面和呈现引擎之间传送指令。

**呈现引擎(Rendering engine)** - 负责显示请求的内容。如果请求的内容是 `HTML`，它就负责解析 `HTML` 和 `CSS` 内容，并将解析后的内容显示在屏幕上。

**网络(Networking)** - 用于网络调用，比如 `HTTP` 请求。其接口与平台无关，并为所有平台提供底层实现。

**用户界面后端** - 用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。

**JavaScript 解释器(Javascript Interpreter)** -用于解析和执行 JavaScript 代码。

**数据存储(Data Persistence)** - 这是持久层。浏览器需要在硬盘上保存各种数据，例如 `Cookie`。新的 `HTML` 规范 `(HTML5)` 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库。

![webkit-dom-render](../images/webkit-dom-render.png)

<center>Webkit Dom Render过程</center>

![gecko-dom-render.png](../images/gecko-dom-render.png)

<center>Gecko Dom Render过程</center>

```javascript
1. HTML通过Parser编译解析为DOM Tree
2. CSS通过Parser编译解析为CSSOM Tree
3. DOM和CSSOM合并就产生了Render Tree
4. 然后绘制Render Tree
5. 页面展示
```

[浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

[Back Top](#top)

<span id="q2">2</span>. 

