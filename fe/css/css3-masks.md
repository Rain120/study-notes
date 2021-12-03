# CSS3 Masks

## 定义

[CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 属性 **`mask`** 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

```html
<div id='masked'></div>
```

## 属性默认值

- [mask-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-image)

默认值是 `none`, 也就是无遮罩图片。指遮罩使用的图片资源。

```css
#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
}
```

`mask-image`支持多图片
```css
mask-image: url('mask1.png'), url('mask2.png');
```

- [mask-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-mode)

默认值是 `match-source`。根据资源的类型自动采用合适的遮罩模式。

- `mask-mode: alpha;` 使用遮罩图像的透明度 (`alpha`) 值。

- `mask-mode: luminance;` 使用遮罩图像的亮度值。

```css
#masked {
  width: 227px;
  height: 200px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  mask-mode: alpha; /* Can be changed in the live sample */
}
```

因为 `mask-image`支持多图片, 因此`mask-mode`也支持多属性值, 例如:

```css
mask-mode: alpha, match-source;
```

- [mask-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-repeat)

默认值是`no-repeat`。用来设置遮罩图片是否重复显示多个副本, 以及如何重复。一个遮罩图片可以水平重复、垂直重复或双向重复, 也可以不重复。

```css
#masked {
  width: 250px;
  height: 250px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-repeat: repeat; /* 可在实时示例 live sample 中修改 */
  margin-bottom: 10px;
}
```

因为 `mask-image`支持多图片, 因此`mask-repeat`也支持多方位, 例如:

```css
mask-repeat: repeat-x, repeat-y;
```

单值语法可将两个值简写为一个:

| **单值**    | **与之等效的双值**    |
| ----------- | --------------------- |
| `repeat-x`  | `repeat no-repeat`    |
| `repeat-y`  | `no-repeat repeat`    |
| `repeat`    | `repeat repeat`       |
| `space`     | `space space`         |
| `round`     | `round round`         |
| `no-repeat` | `no-repeat no-repeat` |


- [mask-position](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position)

默认值是`center`。`mask-position` 为每个定义好的遮罩图像设置相对于 [遮罩原点](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin) 设置的蒙版位置层的初始位置。

```css
#masked {
  width: 250px;
  height: 250px;
  background: blue linear-gradient(red, blue);
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-repeat: no-repeat;
  mask-position: top right; /* Can be changed in the live sample */
  margin-bottom: 10px;
}
```

由于`mask-image`支持多遮罩图片, 因此, `mask-position`也支持多属性值, 例如:

```css
mask-position: 0 0, center;
```

- [mask-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip)

默认值是`border-box`。用来确定受遮罩影响的区域。 元素的绘制内容必须限于此区域。

支持属性值如下:

```css
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

mask-clip: no-clip;
```

```css
.masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 20px;
  border: 20px solid #8ca0ff;
  padding: 20px;
  -webkit-mask-image: url(./MDN.svg);
  -webkit-mask-size: 100% 100%;
  -webkit-mask-clip: border-box;
  mask-image: url(./MDN.svg);
  mask-size: 100% 100%;
  mask-clip: border-box;
}
```

其中默认值是`border-box`和`background-clip`类似。同样也支持多属性值:

```css
mask-clip: content-box, border-box;
```

- [mask-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin)

默认值是`border-box`。设置遮罩的原点。

```css
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;
```

```css
#masked {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8CFFA0;
  padding: 10px;
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-origin: border-box; /* Can be changed in the live sample */
}
```

其中默认值是`border-box`和`background-origin`类似。同样也支持多属性值:

```css
mask-origin: content-box, border-box;
```

- [mask-size](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size)

默认值是`auto`。指定遮罩的大小。为了保持图像的固有比率, 可以对图像的大小进行完全或部分的限制。

属性性质上和`background-size`类似, 支持的属性值也类似

```css
#masked {
  width: 200px;
  height: 200px;
  background: blue linear-gradient(red, blue);
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%; /* Can be changed in the live sample */
  margin-bottom: 10px;
}
```

- [mask-composite](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite)

默认值是`add`。表示当同时使用多个图片进行遮罩时候的混合方式。支持属性值包括:

```css
mask-composite: add; // 遮罩累加
mask-composite: subtract; // 遮罩相减。也就是遮罩图片重合的地方不显示。意味着遮罩图片越多, 遮罩区域越小。
mask-composite: intersect; // 遮罩相交。也就是遮罩图片重合的地方才显示遮罩。
mask-composite: exclude; // 遮罩排除。也就是后面遮罩图片重合的地方排除, 当作透明处理。
```


## 参考资料

[客栈说书:CSS遮罩CSS3 mask/masks详细介绍](https://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/)

[MDN Mask (CSS)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask)

