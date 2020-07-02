#### 定义

装饰器 `(Decorator)`  是 `ES7` 中的一个提案，它是一种与类 `(class)` 相关的语法，用来注释或修改类和类方法。装饰器是一种函数，写成`@ + 函数名`, 它可以放在类和类方法的定义前面。

#### 作用

它们不仅增加了代码的可读性，清晰地表达了意图，而且提供一种方便的手段，增加或修改类的功能。

#### 实现原理

装饰器实际是一种函数, 它的实现类似于 `JavaScript`的 `Object.defineProperty`。

##### Object.defineProperty(obj, prop, descriptor)

**参数**

- `obj`

  要定义属性的对象。

- `prop`

  要定义或修改的属性的名称或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 。

- `descriptor`

  要定义或修改的属性描述符。

  - `configurable`

    当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 **默认为** **false**。

  - `enumerable`

    当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。 **默认为 false**。

  数据描述符还具有以下可选键值：

  - `value`

    该属性对应的值。可以是任何有效的 `JavaScript` 值（数值，对象，函数等）。 **默认为 undefined**。

  - `writable`

    当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被[`赋值运算符`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)改变。 **默认为 false。**

  存取描述符还具有以下可选键值：

  - `get`

    属性的 `getter` 函数，如果没有 `getter`，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。 **默认为 undefined**。

  - `set`

    属性的 `setter` 函数，如果没有 `setter`，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。 **默认为 undefined**。

##### 实现

- `Decorator` 装饰方法时，`descriptor`的参数和 `Object.defineProperty` 的 `descriptor` 一致
- `Decorator` 装饰类属性时，`descriptor`没有`value`和`get`或`set`，且多出一个`initializer`方法, 返回值作为属性的值

```js
/**
 * @description 装饰器函数
 * @param target 被装饰器装饰的目标对象原型
 * @param key 要定义或修改的属性, 类和方法的名称或Symbol
 * @param descriptor 要定义或修改的属性, 类和方法的描述符
 */
function Decorator(target, key, descriptor) {
  let descriptorValue = descriptor.initializer && descriptor.initializer.call(this);
  const descriptor = {
      enumerable: false,
      configurable: true,
      writable: true,
      get() {
        return descriptorValue;
      },
      set(value) {
        descriptorValue = value;
      }
  };
  return descriptor;
}
```



#### 参考资料

[ECMAScript 6 入门 装饰器](https://es6.ruanyifeng.com/#docs/decorator)

[Object.defineProperty - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

[JavaScript Decorators 提案地址][https://github.com/tc39/proposal-decorators]

[Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.cmajiy3p1)

[javascript-decorators](https://github.com/wycats/javascript-decorators)

[introduction-to-es-decorator](https://efe.baidu.com/blog/introduction-to-es-decorator/)