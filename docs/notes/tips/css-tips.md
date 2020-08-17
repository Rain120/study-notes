#### `ios`端`fixed`遇上`transition`会失效

```
如果设置fixed元素的父级或祖先级元素设置为transform属性，则fixed相对于该元素定位。
因为设置transform属性的元素建立了一个新的坐标系
```

#### 实现兼容性的CSS粗虚线边框(dashed)效果

```scss
.border_dashed {
    width:260px;
    height:180px;
    border-width:6px;
    /*IE*/
    border:2px dashed red\9;
   /*Firefox*/
    -moz-border-image:url(http://www.zhangxinxu.com/study/image/dashed_red.png) 6 repeat;
    /*Chrome & Safari*/
    -webkit-border-image:url(http://www.zhangxinxu.com/study/image/dashed_red.png) 6 repeat;
   /*Opera*/
    border-image:url(http://www.zhangxinxu.com/study/image/dashed_red.png) 6 repeat;
    background:yellow;
}
```

[参考资料](https://www.zhangxinxu.com/wordpress/2010/05/实现兼容性的css粗虚线边框dashed效果/)

#### `flex` 在`safari`上出现压缩

```
设置flex 布局的子元素 flex-shrink: 0;
```

#### 实现不规则两端对齐布局

![css-left-right-layout.png](./images/css-left-right-layout.png)

`HTML`

```html
<div class='wrapper'>
  <li class='left'>#101923</li>
  <li class='right'>1次</li>
</div>
```

`CSS`

```less
.wrapper {
  display: flex;
  width: 100%;
  .right {
    margin-left: auto;
  }
}
```

#### 下面的宽度是多少

```css
div {
  min-width: 40rem;
  max-width: 20rem;
  width: 30rem;
}
```

##### 答案: 30rem

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
  <div style="margin-bottom: 10px;">
      <div style="border: 1px solid blue; padding: 5px;margin-bottom: 10px; height: 170px;">
        <h4>no min-width max-width</h4>
        width: 30px;
        <br />
        height: 50px;
        <br />
        background: red;
    </div>
    <div style="
      width: 30px;
      height: 50px;
      line-height: 50px;
      background: red;
      color: #fff;
      text-align: center;
    ">30</div>
  </div>
  <div style="margin-bottom: 10px;">
      <div style="border: 1px solid blue; padding: 5px;margin-bottom: 10px; height: 170px;">
        <h4>min-width</h4>
        min-width: 40px;
        <br />
        width: 30px;
        <br />
        height: 50px;
        <br />
        background: red;
    </div>
    <div style="
      min-width: 40px;
      width: 30px;
      height: 50px;
      line-height: 50px;
      background: red;
      color: #fff;
      text-align: center;
    ">40</div>
  </div>
  <div style="margin-bottom: 10px;">
      <div style="border: 1px solid blue; padding: 5px;margin-bottom: 10px; height: 170px;">
        <h4>max-width</h4>
        max-width: 20px;
        <br />
        width: 30px;
        <br />
        height: 50px;
        <br />
        background: red;
    </div>
    <div style="
      max-width: 20px;
      width: 30px;
      height: 50px;
      line-height: 50px;
      background: red;
      color: #fff;
      text-align: center;
    ">20</div>
  </div>
  <div style="margin-bottom: 10px;">
      <div style="border: 1px solid blue; padding: 5px;margin-bottom: 10px; height: 170px;">
        <h4>width & min-width & max-width</h4>
        max-width: 20px;
        <br />
        min-width: 40px;
        <br />
        width: 30px;
        <br />
        height: 50px;
        <br />
        background: red;
    </div>
    <div style="
      max-width: 20px;
      min-width: 40px;
      width: 30px;
      height: 50px;
      line-height: 50px;
      background: red;
      color: #fff;
      text-align: center;
    ">40</div>
  </div>
  <div style="margin-bottom: 10px;">
      <div style="border: 1px solid blue; padding: 5px;margin-bottom: 10px; height: 170px;">
        <h4>min-width < width < max-width</h4>
        max-width: 20px;
        <br />
        min-width: 40px;
        <br />
        width: 30px;
        <br />
        height: 50px;
        <br />
        background: red;
    </div>
    <div style="
      max-width: 40px;
      min-width: 20px;
      width: 30px;
      height: 50px;
      line-height: 50px;
      background: red;
      color: #fff;
      text-align: center;
    ">30</div>
  </div>
</div>





匹配规则

1. `no min-width, max-width -> width`
2. `width < min-width -> min-width`
3. `width > max-width -> max-width`







