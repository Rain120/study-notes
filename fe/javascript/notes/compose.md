# 组合

## 定义

组合就是将函数串联起来执行，将多个函数组合起来，一个函数的输出结果是另一个函数的输入参数。

## 举个栗子

```js
const getName = name => name.replace(/^\S/, $0 => $0.toUpperCase());

const greet = name => `Hello, ${name}`;

const welcome = greet(getName('rain120'));
```

从上面的例子来看，我们需要一层嵌套一层函数调用，看起来不太优雅，那如果是使用 **组合函数** 呢？

```js
// compose(f1, f2, f3)(args)
// => f1(f2(f3(args)))

function compose(...rest) {
    const len = rest.length;
    let index = len;

    while(index--) {
    if (typeof rest[index] !== 'function') {
      throw new TypeError(`${rest[index]} must be a function in params of ${index}`)
    }
  }

    return (...args) => {
        let last = len - 1;

        let result = len > 0
            ? rest[last].apply(this, args)
            : rest[0];
        
        while (last--) {
            result = rest[last].call(this, result);
        }

        return result;
    }
}

const welcome = compose(greet, getName);

welcome('rain120');
```

当然了，还支持从前往后执行
```js
function composeLeft() {
    return compose.apply(null, [].reverse.call(arguments));
}
```
[compose.js](https://github.com/Rain120/Web-Study/blob/master/compose.js)

## koa的洋葱模型

我们知道，koa在调用中间件的时候是如下使用方式的

```js
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    // 1
    await next();
    // 5
});

app.use(async (ctx, next) => {
    // 2
    await next();
    // 4
});

app.use(async (ctx, next) => {
    // 3
});

```

### 实现一下

```js
function compose(middleware) {
    if (!Array.isArray(middleware)) {
        throw new TypeError('Middleware stack must be an array!')
    }

    for (const fn of middleware) {
        if (typeof fn !=== 'function') {
            throw new TypeError('Middleware must be composed of functions!')
        }
    }

    return function (context, next) {
        let index = -1;

        function dispose(i) {
            if (i <= index) {
                return Promise.reject(new Error('next() called multiple times'));
            }

            index = i;
            let fn = middleware[i];

            if (i === middleware.length) {
                // 最后一个时，next为undefined，这里可以让中间件结束
                fn = next;
            }

            if (!fn) {
                return Promise.resolve()
            }

            try {
                return Promise.resolve(fn(context, function next() {
                        return dispose(i + 1);
                    }
                ));
            } catch(error) {
                return Promise.reject(error);
            }
        }

        return dispose(0);
    }

}
```
[koa-compose.js](https://github.com/Rain120/Web-Study/blob/master/koa-compose.js)