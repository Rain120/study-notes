#### flex-grow

**Note:** 默认是 **0** 。

**flex-grow** 设置了一个 `flex` 项[主尺寸](https://www.w3.org/TR/css-flexbox/#main-size)的 `flex` 增长系数。它指定了 `flex` 容器中 **剩余空间** 的多少应该分配给项目 `(flex增长系数)`。

##### 不设置flex-grow

<div style="
  margin: 10px;
  display: flex;
  width: 500px;
  height: 200px;
  background-color: #fff;
  color: #000;
  text-align: center;
  border: 1px solid red;
  box-sizing: content-box;
">
    <div style="
  width: 100px;
  background-color: #e84242;
">
      <p>width 100</p>
    </div>
    <div style="
  width: 200px;
  background-color: #44ff76;
">
      <p>width 200</p>
    </div>
    <div style="
  width: 100px;
  background-color: #61dafb;
">
      <p>width 100</p>
    </div>
</div>

##### 设置flex-grow

<div style="
  margin: 10px;
  display: flex;
  width: 500px;
  height: 200px;
  background-color: #fff;
  color: #000;
  text-align: center;
  border: 1px solid red;
  box-sizing: content-box;
">
    <div style="
  width: 100px;
  flex-grow: 2;
  background-color: #e84242;
">
      <p>width 100</p>
      <p>flex-grow: 2</p>
    </div>
    <div style="
  width: 200px;
  flex-grow: 1;
  background-color: #44ff76;
">
      <p>width 200</p>
      <p>flex-grow: 1</p>
    </div>
    <div style="
  width: 100px;
  flex-grow: 1;
  background-color: #61dafb;
">
      <p>width 100</p>
      <p>flex-grow: 1</p>
    </div>
</div>

如何计算`flex-grow` 要占多少空间呢？

从上面例子来看剩余内容 `(rest_content = 100)`, `sum(flew-grow) = 2 + 1 + 1`，所以每一块区域内容会根据剩余内容的宽度拓展宽度为 `100 / 4 * flex-grow`，即 `50`, `25`, `25`。



#### flex-shrink

**flex-shrink** 属性指定了 `flex` 元素的收缩规则。`flex` 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 `flex-shrink` 的值



#### flex-basis

**flex-basis** 指定了 `flex` 元素在主轴方向上的初始大小。如果不使用  [`box-sizing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing) 改变盒模型的话，那么这个属性就决定了 `flex` 元素的内容盒 `(content-box)` 的尺寸。



#### flex

[CSS](https://developer.mozilla.org/zh-CN/css)属性 **flex** 规定了弹性元素如何伸长或缩短以适应 `flex` 容器中的可用空间。这是一个[简写属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties)，用来设置 [`flex-grow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow), [`flex-shrink`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink) 与 [`flex-basis`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis), 默认值为`0 1 auto`。后两个属性可选。

#### flex-wrap



#### order



#### align-self



#### 参考资料

[flex-grow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)

[flex-shrink](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)

[flex-basis](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)

