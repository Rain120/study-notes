---
draft: true
---

# 浏览器的每一帧

![browser-a-frame.png](./images/browser-a-frame.png)

## 渲染进程中的线程

- 合成线程 (Compositor Thread)
- 主线程 (Main Thread)
- 合成图块栅格化线程 (Compositor Tile Worker)

## 运行过程

- 开始新的一帧
- 处理输入事件
- requestAnimationFrame
- 解析 HTML (Parse HTML)
- 重新计算样式 (Recalculate Styles)
- 布局 (Layout)
- 更新图层树 (Update Layer Tree)
- 绘制 (Paint)
- 合成 (Composite)
- 栅格化规划 (Raster Scheduled) 和 栅格化 (Rasterize)
  在 Paint 任务中记录的 draw 调用现在执行。过程是在合成图块栅格化线程 (Compositor Tile Workers) 中进行，线程的数量取决于平台和设备性能。
- 帧结束
  如果还有剩余事件, 就会执行 requestIdleCallback
- 发送帧

## 参考资料

[The Anatomy of a Frame](https://aerotwist.com/blog/the-anatomy-of-a-frame/)
[前端代码如何通过浏览器演化为屏幕显示的像素](https://zhuanlan.zhihu.com/p/44737615) [Slide](https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y) [Video](https://drive.google.com/file/d/1Ky59m-F79ULs4ydMbD4Mp1dBXvs_eDes/view)
