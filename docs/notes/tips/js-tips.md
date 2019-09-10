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

