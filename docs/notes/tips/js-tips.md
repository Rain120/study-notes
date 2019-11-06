### Js长按图片

##### 原理: 监听`touchstart`到`touchend`的时间差

```javascript
let imgs = document.querySelectorAll('img');
let timeout = 0;
this.longPress({
  ctx: imgs,
  () => {}
})
  
export function longPress({
  ctx = [],
  logpressCallback = () => null,
  clickCallback = () => null,
  time = 500
}) {
  let timeout = null;
  for (let i = 0; i < ctx.length; i++) {
    if (ctx[i] && logpressCallback) {
      ctx[i].addEventListener('touchstart', e => {
        console.log('touchstart')
        timeout = setTimeout(logpressCallback, time);
        return false;
      }, false);
      
      ctx[i].addEventListener('touchmove', e => {
        e.preventDefault()
        console.log('touchmove')
        clearTimeout(this.imgTouchTimer)
				timeout = 0;
      }
      
      ctx[i].addEventListener('touchend', e => {
        console.log('touchend')
        clearTimeout(this.imgTouchTimer)
        if (timeout !== 0) {
          clickCallback && clickCallback();
        }
        return false;
      }, false);
    }
  }
}
```

#### JS给当前元素增加父元素

##### 原理: 复制当前元素，给复制的元素添加父元素，并将该元素替换原有的元素即可

```javascript
let catalogueDrawer = document.querySelector('.catalogue-drawer')
if (catalogueDrawer) {
    let tables = catalogueDrawer.querySelectorAll('table')

    if (tables && tables.length) {
        for (let index = 0; index < tables.length; index++) {
            let table = tables[index]
            let node = table.cloneNode(true)
            let tableWrapper = document.createElement('div')
            tableWrapper.setAttribute('class', 'content-table-wrapper')
            tableWrapper.appendChild(node)
            table.parentNode.replaceChild(tableWrapper, table)
        }
    }
}
 
```

#### `encodeURI`、 `encodeURIComponent`的区别

- `encodeURI`用于编码整个`URI`,因为`URI`中的合法字符都不会被编码转换。
- `encodeURIComponent`方法在编码单个`URIComponent`（指请求参数）应当是最常用的，它可以将参数中的中文、特殊字符进行转义，而不会影响整个`URL`。转义除了字母、数字、`(`、`)`、`.`、`!`、`~`、`*`、`'`、`-`和`_`之外的所有字符。

[MDN encodeURI](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

[MDN encodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

#### `decodeURI`、`decodeURIComponent`的区别

- `decodeURI`: 解码一个由[`encodeURI`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 先前创建的统一资源标识符（URI）或类似的例程。
- `decodeURIComponent`: 解码由 [`encodeURIComponent`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 方法或者其它类似方法编码的部分统一资源标识符（URI）

[MDN decodeURI](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)

[MDN decodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)

#### JS 缓慢回到顶部

原生`Javascript`实现

```javascript
const isWebkit = navigator.userAgent.toLowerCase().match(/webkit\/([\d.]+)/);
const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

function backTop() {
  function step() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      requestAnimationFrame(step);
      window.scrollTo (0, currentScroll - (currentScroll / 5));
    }
  }

  requestAnimationFrame(step);
}
```

`Jquery`实现

```javascript
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script>
    let fadeTime = 1500;
    let animateTime = 1000;
    let height = 100;
    $(function() {
            $(function () {
                $(window).scroll(function() {
                    if ($(window).scrollTop() > height) {
                        $("#back-to-top").fadeIn(fadeTime);
                    } else {
                        $("#back-to-top").fadeOut(fadeTime);
                    }
                });
                $("#back-to-top").click(function() {
                if ($('html').scrollTop()) {
                    $('html').animate({ scrollTop: 0 }, animateTime);
                    return false;
                }
                $('body').animate({ scrollTop: 0 }, animateTime);
                    return false;            
              });       
        })   
    });
  </script>
```

#### 让当前的元素滚动到浏览器窗口的可视区域内。

```javascript
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "instant", block: "end", inline: "nearest"});
```

[Element.scrollIntoView 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)

#### 文件上传预览文件

##### 单文件

**HTML**

```html
<input type="file" onchange="previewFile()"><br>
<img src="" height="200" alt="Image preview...">
```

**JavaScript**

```javascript
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

##### 多文件

**HTML**

```html
<input id="browse" type="file" onchange="previewFiles()" multiple>
<div id="preview"></div>
```

**JavaScript**

```javascript
function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // 确保 `file.name` 符合我们要求的扩展名
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

}
```

[FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)

[readAsDataURL](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL)

```javascript
const video = document.getElementById('video');
const obj_url = window.URL.createObjectURL(blob);
video.src = obj_url;
video.play()
window.URL.revokeObjectURL(obj_url);
```

[createObjectURL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)

[在web应用程序中使用文件](https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications#Example.3A_Using_object_URLs_to_display_images)

