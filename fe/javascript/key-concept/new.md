#### new 原理

`new`关键字做了哪些事？

- 创建一个 **新对象**
- 将构造函数的作用域赋值给这个新对象 -> `this` 指向这个 **新对象**
- 执行构造函数中的代码 -> 为 **新对象** 添加属性
- 返回 **新对象**

#### 实现代码

```javascript
export function _new(...arg: any): any {
  // 1
  let obj: any = new Object();
  // 获取构造函数
  let _constructor = Array.prototype.shift.call(arg);
  // 2
  obj.__proto__ = _constructor.prototype;
  // 3
  let result = _constructor.apply(obj, arg);
  // 4
  return typeof result === 'object' && result !== null ? result : obj;
}
```



#### 参考地址

[new](https://rain120.github.io/awesome-javascript-code-implementation/zh/primitive/new)

