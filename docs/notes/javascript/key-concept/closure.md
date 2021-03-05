#### 什么是闭包

函数和对其周围状态`(lexical environment，词法环境)`的引用捆绑在一起构成**闭包**`(closure)`。也就是说，**闭包可以让你从内部函数访问外部函数作用域。**在 `JavaScript` 中，每当函数被创建，就会在函数生成时生成闭包。

#### 闭包产生的原因

在 `ES5` 中只存在两种作用域: **全局作用域和函数作用域**，**当访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去父作用域找，直到找到该变量的标示符或者不在父作用域中，这就是作用域链**，值得注意的是，每一个子函数都会拷贝上级的作用域，形成一个作用域的链条, 当前环境中存在指向父级作用域的引用。

#### 如何理解闭包？

##### 变量的作用域

一般的，变量的作用域有，全局变量和局部变量两种。例如

全局变量: 不在任何函数内定义的变量

Note: 如果**变量在函数内没有声明**(没有使用 `var` 关键字), 该变量为全局变量。

```javascript
let name = 'Rain120';

function getName() {
  console.log(name);
}

getName(); // Rain120
```

局部变量:  在函数内部定义的变量, 只能在函数内部不能使用, 函数外部不能使用。

```javascript
function getName() {
  let name = 'Rain120';
}

getName();
console.log(name); // undefined
```

那么问题来了, **如何从函数外部读取函数内的局部变量？**

答案就是使用闭包。

#### 闭包的作用

- 可以读取函数内部的变量 ①

- 让这些变量的值始终保持在内存中 ②
- 设计私有的方法和变量 ③

#### Note

- 由于👆👆👆①的原因，在父函数外部会改变父函数内部变量的值。因为**函数是引用类型**，更多详见[值类型 vs 引用类型](notes/javascript/key-concept/values-vs-reference.md)
- 一般的，函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止。所以滥用闭包，否则会造成网页的性能问题, 原因是👆👆👆②

#### 参考资料

[阮一峰 学习Javascript闭包（Closure）](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)

[MDN Closures](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

[JavaScript开发者应懂的33个概念  闭包](https://github.com/stephentian/33-js-concepts#8-闭包)

[谈谈你对闭包的理解](https://juejin.im/post/6844903974378668039#heading-23)

[I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

