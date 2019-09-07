### Js长按图片

##### 原理: 监听`touchstart`到`touchend`的时间差

```javascript
let imgs = document.querySelectorAll('img')
this.longPress({
  ctx: imgs,
  () => {}
})
  
longPress({
  ctx = [],
  cb,
  time = 500
}) {
  let timeout = null;
  for (let i = 0; i < ctx.length; i++) {
    if (ctx[i] && cb) {
      ctx[i].addEventListener('touchstart', () => {
        timeout = setTimeout(cb, time);
      }, false);
      
      ctx[i].addEventListener('touchend', () => {
        clearTimeout(timeout);
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

