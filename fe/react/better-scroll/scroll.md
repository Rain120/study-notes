# Scroll

[代码仓库](https://github.com/Rain120/better-scroll-for-react-usage)

通过文档我们阅读[BetterScroll 2.x官方文档](https://better-scroll.github.io/docs/en-US/)，我们需要对该插件需要的属性进行设置。

`type`定义

```typescript
interface ListenScrollProps {
  beforeScroll?: boolean;
  scroll?: boolean;
  scrollEnd?: boolean;
}

type NoopFunction = () => any;

type ScrollFunction = (pos?: object) => any;

export interface ScrollProps {
  data: object[];
  probeType: number;
  click?: boolean;
  scrollY?: boolean;
  scrollX?: boolean;
  listenScroll?: ListenScrollProps;
  listenBeforeScroll?: boolean;
  direction?: string;
  beforeScrollStart?: NoopFunction;
  scroll?: ScrollFunction;
  scrollEnd?: ScrollFunction;
  scrollbar?: NoopFunction;
  pullUpLoad?: NoopFunction;
  startY?: number;
  refreshDelay?: number;
  freeScroll?: boolean;
  mouseWheel?: boolean;
  bounce?: boolean | object;
  momentum?: boolean;
  useTransition?: boolean;
  slide?: object;
  stopPropagation?: boolean;
}

```

## 代码仓库

[Scroll](https://github.com/Rain120/better-scroll-for-react-usage/blob/master/src/base/Scroll/index.tsx)

[Type定义](https://github.com/Rain120/better-scroll-for-react-usage/blob/master/src/base/Scroll/types.ts)

