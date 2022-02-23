# Decorator (装饰器) 实现原理及其使用

## 定义

装饰器 `(Decorator)`  是 `ES7` 中的一个提案, 目前仍处于 [stage-2: 草稿状态](https://github.com/tc39/proposal-decorators)。它是一种与类 `(class)` 相关的语法, 用来注释或修改类和类方法。装饰器是一种函数, 写成`@ + 函数名`, 它可以放在类和类方法的定义前面。

## 作用

它们不仅增加了代码的可读性, 清晰地表达了意图, 而且提供一种方便的手段, **增加或修改类的功能**。

## 使用

### 前提

由于目前原生的JavaScript还不支持装饰器, 所以, 我们需要借助 babel 的能力来实现。

1. 安装`babel` 以及 `decorator` 插件

```sh
npm install @babel/cli @babel/core --save-dev
npm install @babel/proposal-decorators @babel/proposal-class-properties --save-dev
```

2. 配置 `.babelrc`

```
"plugins": [
	["@babel/proposal-decorators", {
		"legency": true
	}],
  ["@babel/proposal-class-properties", {
		"loose": true
	}]
]
```

当然你也可以到这里看 `babel` 编译结果 [I'm here !!](https://babeljs.io/repl/?spm=taofed.bloginfo.blog.4.46f85ac8ur2znZ#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAZzgWwKYBEMTgJwEMoCAKAawBtDlkAaRcjATwYBMNkIBKRAbwBQiRPgxQQ-JBy4BuAQF8BAiNVqIAYnDj8hwxAAFUmHHiIl8u4QHMxKdBgCCECJ1T5SvPovlA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=stage-2&prettier=true&targets=&version=7.10.4&externalPlugins=)

### 类装饰器

```js
function decorator(target, key, descriptor) {
  // target -> 所要装饰的目标类, Foo 类
  // key -> undefined
  // descriptor -> undefined
}

@decorator
class Foo {}

// ===> 

Foo = decorator(Foo) || Foo
```

**装饰器对类的行为的改变, 是代码编译时发生的, 而不是在运行时**。这意味着, 装饰器能在编译阶段运行代码。也就是说, **装饰器本质就是编译时执行的函数**。

### 类方法, 类属性装饰器

```js
class Person {
  @readonly
  name() { return `${this.first} ${this.last}` }
}

function readonly(target, name, descriptor) {
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}

readonly(Person.prototype, 'name', descriptor);
// 类似于
Object.defineProperty(Person.prototype, 'name', descriptor);
```

### 函数方法的装饰

**装饰器只能用于类和类的方法, 不能用于函数, 因为存在函数提升**。如果一定要装饰函数, 可以采用高阶函数的形式直接执行。

```js
function doSomething(name) {
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
  return function() {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  }
}

const wrapped = loggingDecorator(doSomething);
```

### 执行顺序

1. 属性装饰器
2. 方法装饰器
3. 方法参数装饰器: 从后往前
   ```js
   function Test(
       // 后执行
       @Param1() name,
       // 先执行
       @Param2() age,
    ) {
        // ...
    }
   ```
4. 类装饰器: 从后往前
   ```js
   // 后执行
   @decorator1()
   // 先执行
   @decorator2()
   class Test {
       // ...
   }
   ```


## 实现原理

装饰器实际是一种编译时执行的函数, 它的实现依赖于 `JavaScript`的 `Object.defineProperty`。

### Object.defineProperty(obj, prop, descriptor)

**参数**

- `obj`

  要定义属性的对象。

- `prop`

  要定义或修改的属性的名称或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 。

- `descriptor`

  要定义或修改的属性描述符。

  - `configurable`

    当且仅当该属性的 `configurable` 键值为 `true` 时, 该属性的描述符才能够被改变, 同时该属性也能从对应的对象上被删除。 **默认为** **false**。

  - `enumerable`

    当且仅当该属性的 `enumerable` 键值为 `true` 时, 该属性才会出现在对象的枚举属性中。 **默认为 false**。

  数据描述符还具有以下可选键值：

  - `value`

    该属性对应的值。可以是任何有效的 `JavaScript` 值（数值, 对象, 函数等）。 **默认为 undefined**。

  - `writable`

    当且仅当该属性的 `writable` 键值为 `true` 时, 属性的值, 也就是上面的 `value`, 才能被[`赋值运算符`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)改变。 **默认为 false。**

  存取描述符还具有以下可选键值：

  - `get`

    属性的 `getter` 函数, 如果没有 `getter`, 则为 `undefined`。当访问该属性时, 会调用此函数。执行时不传入任何参数, 但是会传入 `this` 对象（由于继承关系, 这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。 **默认为 undefined**。

  - `set`

    属性的 `setter` 函数, 如果没有 `setter`, 则为 `undefined`。当属性值被修改时, 会调用此函数。该方法接受一个参数（也就是被赋予的新值）, 会传入赋值时的 `this` 对象。 **默认为 undefined**。

### babel 转换

我们通过 `babel` 转换的结果来理解 `decorator` 是如何实现的。

编译前

```js
class Foo {
	@readonly
	get name() {
		return 'Rain120';
	}
}

function readonly(target, name, descriptor) {
  return descriptor;
}
```

编译后

```js
var _class;

function _applyDecoratedDescriptor(
	 target, // _class.prototype,
   property, // "name",
   decorators, // [readonly],
   descriptor, // Object.getOwnPropertyDescriptor(_class.prototype, "name"),
   context // _class.prototype
  ) {
  var desc = {};
  // 拷贝属性
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  // 应用多个 decorators
  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  // 设置 decorators 修改的属性
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

function readonly(target, key, descriptor) {
  return descriptor;
}

let Foo = (
  _class = class Foo {
    get name() {
      return 'Rain120';
    }

  },
  _applyDecoratedDescriptor(
      _class.prototype,
      "name", [readonly],
      Object.getOwnPropertyDescriptor(_class.prototype, "name"),
      _class.prototype
  ),
  _class
);
```

### 自己实现

- `Decorator` 装饰方法时, `descriptor`的参数和 `Object.defineProperty` 的 `descriptor` 一致
- `Decorator` 装饰类属性时, `descriptor`没有`value`和`get`或`set`, 且多出一个`initializer`方法, 返回值作为属性的值

无参的 `decorator`

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

带参的 `decorator`

```js
/**
 * @description 装饰器函数
 * @param target 被装饰器装饰的目标对象原型
 * @param key 要定义或修改的属性, 类和方法的名称或Symbol
 * @param descriptor 要定义或修改的属性, 类和方法的描述符
 */
function Decorator(props) {
  return (target, key, descriptor) => {
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
}
```

## 参考资料

[ECMAScript 6 入门 装饰器](https://es6.ruanyifeng.com/#docs/decorator)

[Object.defineProperty - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

[JavaScript Decorators 提案地址](https://github.com/tc39/proposal-decorators)

[Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.cmajiy3p1)

[javascript-decorators](https://github.com/wycats/javascript-decorators)

[introduction-to-es-decorator](https://efe.baidu.com/blog/introduction-to-es-decorator/)

[ES7 Decorator 装饰者模式](https://fed.taobao.org/blog/taofed/do71ct/es7-decorator/?spm=taofed.homepage.header.22.7eab5ac8PULUNx)

[ES6 系列之我们来聊聊装饰器](https://github.com/mqyqingfeng/Blog/issues/109)

[ES Decorators简介](https://efe.baidu.com/blog/introduction-to-es-decorator/)

[JS 中的装饰器模式](https://imcuttle.github.io/js-%E4%B8%AD%E7%9A%84%E8%A3%85%E9%A5%B0%E5%99%A8%E6%A8%A1%E5%BC%8F)

