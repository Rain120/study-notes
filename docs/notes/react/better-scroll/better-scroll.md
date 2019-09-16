### better-scroll是什么?

`BetterScroll `是一款重点解决移动端（已支持` PC`）各种滚动场景需求的插件。它的核心是借鉴的 [iscroll](https://github.com/cubiq/iscroll) 的实现，它的 API 设计基本兼容` iscroll`，在` iscroll` 的基础上又扩展了一些 `feature `以及做了一些性能优化。

### 为什么要使用better-scroll?

- 优雅的滚动：为移动端（已支持 PC）各种滚动场景提供丝滑的滚动效果。
- 零依赖：基于原生 JS 实现的，不依赖任何框架。完美运用于 Vue、React 等 MVVM 框架。
- 插件灵活：提供了插件机制，便于对基础滚动进行功能扩展。

### 实践内容

`react`: `16.8.6`

`better-scroll`: `2.0.0-bate.2`

- [Slider 组件开发](notes/react/better-scroll/slider.md) 
- [Sticky 组件开发](notes/react/better-scroll/sticky.md)
- `SlideMenu`
- `CascaMenu`

接下来我会以视频的方式，来讲解如何开发这些组件。

<iframe src="https://codesandbox.io/embed/react-better-scroll-8gghg?autoresize=1&eslint=1&fontsize=14" title="react-better-scroll" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
### 参考资料

[BetterScroll 2.x官方文档](https://better-scroll.github.io/docs/en-US/)

