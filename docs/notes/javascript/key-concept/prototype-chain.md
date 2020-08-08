#### 原型链

`JavaScript` 只有一种结构：对象。每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（**prototype** ）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 `null`。根据定义，`null` 没有原型，并作为这个**原型链**中的最后一个环节。

几乎所有 JavaScript 中的对象都是位于原型链顶端的 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 的实例。

它包括四个部分：原型、构造函数、实例、原型链

![prototype-chain.jpg](./images/prototype-chain.jpg)

例如

```js
// 构造函数 Person, 实例 person 关系如下

person = new Person()

person.__proto__ === Person.prototype 

Person.prototype.contructor === Person

Person.prototype.__proto__ === Object.prototype

```



![prototype-chain-all.jpg](./images/prototype-chain-all.jpg)

#### 参考资料

[MDN - 继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)