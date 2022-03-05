# 变量提升

## 定义

我们知道当我们定义一个变量时, 它一般分为几步, **声明, 初始化, 赋值**。

在JavaScript中, 变量可以在使用后再声明, 当发生这种情况时, 变量的声明阶段会被提升到代码的顶部, 即使它是在函数内部定义的。

:::warning
- JavaScript 只会提升声明, 不会提升其初始化
```js
console.log(num); // undefined
var num;
num = 6;
```

- 声明会被提升到当前作用域的顶端
:::

## 分类

### 函数

```js
function fn(a){
    console.log(a); // function a() {}
    var a = 123;
    console.log(a); // 123
    function a() {}
}

fn(1)
```

在定义函数时, 声明、初始化和赋值阶段同时发生, 所以可以在作用域内的任何地方调用函数。

- 函数声明和初始化都会被提升
- 函数表达式不会被提升

### 变量

#### var

```js
console.log(name)  // undefined
let name = 'Rain120';
```

声明被提升之后, 会被初始化成 undefined, 并且在编译阶段会被存放在变量环境中, 所以可以被使用

#### let const

```js
console.log(name)  // ReferenceError: name is not defined
let name = 'Rain120';
```

声明被提升之后, 但不会立即被初始化, 并且在编译阶段会被存放在词法环境中, 只有在执行到该变量的时候才会被初始化, 在此之前是不能被访问的, 这也就是我们常说的**暂时性死区(Temporal Dead Zone)**。

### class

同样会被提升, 也会产生 TDZ(Temporal Dead Zone)。

## 优先级

- 函数提升在变量提升之前

## 练习

```js
function fn(a){
    console.log(a); // function a() {}
    var a = 123;
    console.log(a); // 123
    function a() {}
    console.log(a); // 123
    var b = function() {}
    console.log(b); // function() {}
    a = function() {}
    console.log(a); // function() {}
}

fn(1)
```

Note: 函数 `function a() {}` 会被提升到顶部

```js
(function () {
    var x = y = 1
})();
console.log(y); // 1
console.log(x); // x is not defined
```

Note: 变量提升的范围, x的声明是在闭包内部, y的声明会被提升到 window 上, 因此 x 报错

## 参考资料

[Hoisting MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)
[var let const function 生命周期](https://rain120.github.io/study-notes/fe/javascript/key-concept/var-let-const-function-lifecycle)
