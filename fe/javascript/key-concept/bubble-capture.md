# 事件的捕获和冒泡

DOM2 事件模型包含三个阶段。

1. 事件捕获阶段

```js
dom.addEventListener(
    event,
    function(e) {
        // 事件处理函数
    },
    // 事件捕获阶段
    // useCapture 
    true
);
```

2. 处于目标阶段
3. 事件冒泡阶段
```js
dom.addEventListener(
    event,
    function(e) {
        // 事件处理函数
    },
    // 事件冒泡阶段
    // useCapture 
    true
);
```

捕获是从上往下到达目标元素, 冒泡是从目标元素往上到达 window。

## 不会触发冒泡的事件

:::warning
不会触发冒泡的事件几乎都无法取消。即: preventDefault 和 stopPropagation 不会起作用。
:::

### blur & focus

focusout/focusin 事件会冒泡。如果同时存在的话, focus 先于 focusin, blur 先于 focusout。

### scroll

### mouseleave & mouseenter

mouseout/mouseover 会触发冒泡。

### Media事件

```
onpause 当媒介被用户或程序暂停时运行的脚本
onplay  当媒介已就绪可以开始播放时运行的脚本
onplaying 当媒介已开始播放时运行的脚本
onsuspend 在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行
```