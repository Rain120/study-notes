### 判断是否是`IPhoneX`系列产品

因为`IPhoneX`后的产品底部返回键: `34pt`, 大概`45px` `(px = pt * 4 / 3)`

`iPhone X`、`iPhone XS`、`iPhone XS Max`刘海头高度`30px`，`iPhone XR`刘海头高度`33px`

```javascript
export const isIPhoneX = () => {
    if (typeof window !== 'undefined' && window) {
        // iPhone X、iPhone XS
        let isIPhoneX = /iphone/gi.test(window.navigator.userAgent)
            && window.devicePixelRatio
            && window.devicePixelRatio === 3
            && window.screen.width === 375
            && window.screen.height === 812
        // iPhone XS Max
        let isIPhoneXSMax = /iphone/gi.test(window.navigator.userAgent)
            && window.devicePixelRatio
            && window.devicePixelRatio === 3
            && window.screen.width === 414
            && window.screen.height === 896
        // iPhone XR
        let isIPhoneXR = /iphone/gi.test(window.navigator.userAgent)
            && window.devicePixelRatio
            && window.devicePixelRatio === 2
            && window.screen.width === 414
            && window.screen.height === 896
        return isIPhoneX || isIPhoneXSMax || isIPhoneXR
    }
    return false
}

```



