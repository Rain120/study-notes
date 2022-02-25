# 函数柯里化

## 定义

**函数柯里化**又称 **部分求值**, 是把接受多个参数的函数变换成接受一个单一参数 (最初函数的第一个参数) 的函数, 并且返回接受余下的参数而且返回结果的新函数的技术。

**核心思想**是把多参数传入的函数拆成单参数 (或部分) 函数, 内部再返回调用下一个单参数 (或部分) 函数, 依次处理剩余的参数。

按照Stoyan Stefanov(《JavaScript Pattern》作者)的说法，所谓 "柯里化" 就是**使函数理解并处理部分应用**。

## 常见作用

- 参数复用
- 提前返回
- 延迟计算/运行

## 举个栗子

```js
function add(x, y) {
    return x + y;
}
```

如果说x使用是某一个值的时候，我们应该怎么使用？

```js
add(10, 1);
add(10, 2);
add(10, 3);
// ...
```

这样每次都需要将相同的函数函数传递给他，未免太繁琐了，此时柯里化的作用就体现出来了

```js
function add(x) {
    return y => {
        return x + y;
    }
}

const addTen = add(10);

addTen(1);
addTen(2);
addTen(3);
// ...
```

尝试写一个不限参数的柯里化函数

```js
function curryInfinity(fn, ...args) {
    let params = [...args];

    const curried = (...rest) => {
        if(rest.length){
            params = [...params,...rest]
            return curried
        }

        return fn.apply(null, params)
    }

    return curried;
}

// test
function add(...arr){
   return arr.reduce((prev, cur) => prev + cur);
}
 
let curried = curryInfinity(add, 10);
console.log(curried(1)(2)(3)(4)(10,20)()); // 58
```

## 参考资料

[Mostly Adequate Guide](https://mostly-adequate.gitbook.io/mostly-adequate-guide/)