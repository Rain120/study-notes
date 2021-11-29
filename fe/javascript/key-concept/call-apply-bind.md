#### call 原理

使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

#### 实现代码

```javascript
import { ObjectMap } from 'types';

// @ts-ignore
Function.prototype._call = function(context: ObjectMap<any>, ...arg: any): any {
  /* istanbul ignore next */
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  /* istanbul ignore next */
  context = context ? Object(context) : window

  context.fn = this;

  const result = context.fn(...arg);

  delete context.fn;

  return result;
};
```



#### apply 原理

调用一个具有给定 `this` 值的函数，以及作为一个数组(或类似数组对象)提供的参数。

**Note:** `call()` 方法的作用和 `apply()` 方法类似，区别就是 `call()` 方法接受的是参数列表，而 `apply()` 方法接受的是一个参数数组。

#### 实现代码

```javascript
import { ObjectMap } from 'types';

// @ts-ignore
Function.prototype._apply = function(context: ObjectMap<any>, arg: any): any {
  /* istanbul ignore next */
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  /* istanbul ignore next */
  context = context ? Object(context) : window

  context.fn = this;

  const result = context.fn(...arg);

  delete context.fn;

  return result;
};
```



#### bind 原理

创建一个新的函数, 在 `bind()` 被调用时, 这个新函数的 `this` 被指定为 `bind()` 的第一个参数, 而其余参数将作为新函数的参数, 供调用时使用。

特点:

- 改变 `this` 指向
- 返回一个函数
- 可以传入参数

**Note:**

- `new` 的优先级大于 `bind`, 如果 `bind` 绑定后的函数被 `new`了, `this` 会指向当前函数的实例
- 需要保留 **原函数的原型链** 上的属性和方法

#### 实现代码

```javascript
import { ObjectMap } from 'types';

// @ts-ignore
Function.prototype._bind = function(context: ObjectMap<any>, ...args: any): any {
  /* istanbul ignore next */
  if (typeof this !== 'function') {
    throw new TypeError('Bind must be called with a function');
  }

  const _context = this;
  
  const fb = function() {
    // @ts-ignore
    _context.apply(this instanceof fb ? this : context, args.concat(Array.prototype.slice.call(arguments)));
  };

  fb.prototype = Object.create(_context.prototype);

  return fb;
};
```



#### 参考资料

[call 实现](https://rain120.github.io/awesome-javascript-code-implementation/zh/primitive/call)

[apply 实现](https://rain120.github.io/awesome-javascript-code-implementation/zh/primitive/apply)

[bind 实现](https://rain120.github.io/awesome-javascript-code-implementation/zh/primitive/bind)



