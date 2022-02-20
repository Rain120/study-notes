# 一些调试技巧

## HTML

### 浮窗类的调试方式

当你遇到 **拖拽DOM**， **Popover**，**Select** 等类似组件时，你是如何debugger?

#### 拖拽类

![find-float-dom.gif](./images/find-float-dom.gif)

#### Select Options

![find-select-options-dom.gif](./images/find-select-options-dom.gif)

#### 修改数据测试

**contentEditable**

```js
document.body.contentEditable = true
```

![body-contentEditable.gif](./images/body-contentEditable.gif)

**Edit as HTML**

![edit-as-html.gif](./images/edit-as-html.gif)

### Debugger

#### Dom

![dom-break-on.png](./images/dom-break-on.png)

##### Attribute Modifications

![dom-debug-attr-modify.gif](./images/dom-debug-attr-modify.gif)

##### Subtree Modifications

![dom-debug-subtree-modifications.gif](./images/dom-debug-subtree-modifications.gif)

##### Node Removal

![dom-debug-node-removal.gif](./images/dom-debug-node-removal.gif)

#### Javascript

#### Log

![console-window.png](./images/console-window.png)

##### Code Debug

![devtools-sources.png](./images/devtools-sources.png)

- IDE Debug

  ![ide-debug.png](./images/ide-debug.png)

- Devtools Debug

  ![sources-debug.png](./images/sources-debug.png)

关于watch data 的相关操作

![sources-watch.png](./images/sources-watch.png)

- 断点之前 hover 参数
- 右边添加 watch params
- 直接在 console 输入字段

关于 devtools breakpoint

![devtools-edit-breakpoint.gif](./images/devtools-edit-breakpoint.gif)

##### Find the errors position by the throw from the console

![debug-with-throw-error.gif](./images/debug-with-throw-error.gif)



#### 更多调试相关的资源

[How I got better at debugging](http://jvns.ca/blog/2015/11/22/how-i-got-better-at-debugging/)

[使用开发者工具进行性能检查的高级技巧](https://docs.google.com/document/d/1K-mKOqiUiSjgZTEscBLjtjd6E67oiK8H2ztOiq5tigk/pub)

