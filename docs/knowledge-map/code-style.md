#### 前言

**代码风格** (`Programming style` / `code style`)即[程序](https://zh.wikipedia.org/wiki/程序)开发人员所编写源代码的书写风格。良好代码风格的特点是使代码易读。

总结程序设计实践中的经验，代码风格的要素包括（但不限于）以下几点：

- 名字的使用（参见：[驼峰式大小写](https://zh.wikipedia.org/wiki/駝峰式大小寫)、[标识符命名约定](https://zh.wikipedia.org/w/index.php?title=标识符命名约定&action=edit&redlink=1)、[匈牙利命名法](https://zh.wikipedia.org/wiki/匈牙利命名法)）
- [表达式](https://zh.wikipedia.org/wiki/表达式)与语句
- 常量的使用
- 注释的使用
- [缩进](https://zh.wikipedia.org/wiki/缩进)（参见：[缩进风格](https://zh.wikipedia.org/wiki/缩进风格)）
- 代码的布局

下面我们将通过以上几点来介绍我对 **代码风格** 的一些理解和个人建议。

#### 命名

我们知道，对于一样物品，一个生物来说，一个好的名字可以让你更快的记住他，认识他，这个规则，在代码里面也适应。

##### 命名风格

![code-name-style](./images/code-name-style.png)

[`@tinyfe/naming-transform` 文档](https://github.com/tinyfe/one-utils/blob/main/packages/naming-transform/README.md#%E5%91%BD%E5%90%8D%E9%A3%8E%E6%A0%BCnaming-style)

##### 命名习惯建议

规则: **动词 + 名词 + 状态**

- 看变量类型是什么
- 变量意思是什么



#### 表达式与语句



#### 变量

- 总是使用`const`或 `let` 来声明变量。不这样做会导致全局变量。我们希望避免污染全局名称空间。`eslint: no-undef no-var prefer-const`

  ```js
  // bad
  superPower = new SuperPower();
  var captain = new Captain();
  
  // good
  const superPower = new SuperPower();
  let captain = new Captain();
  ```

- 总是单独声明变量，不建议分组。

  为什么？因为这样在重构，调整位置，删除，`debugger`等场景下，你都会有很好的体验，也不会有分隔符`,` ，`;`等其他分隔符的差异。

  ```js
  // bad
  const items = getItems(),
      goSportsTeam = true,
      dragonball = 'z';
  
  // bad
  // (compare to above, and try to spot the mistake)
  const items = getItems(),
      goSportsTeam = true;
      dragonball = 'z';
  
  // good
  const items = getItems();
  const goSportsTeam = true;
  const dragonball = 'z';
  
  ```

- 不许链式声明一个变量 `eslint: no-multi-assign `

  为什么?链接变量赋值会创建隐式全局变量。

  ```js
  // bad
  (function example() {
    // JavaScript interprets this as
    // let a = ( b = ( c = 1 ) );
    // The let keyword only applies to variable a; variables b and c become
    // global variables.
    let a = b = c = 1;
  }());
  
  console.log(a); // throws ReferenceError
  console.log(b); // 1
  console.log(c); // 1
  
  // good
  (function example() {
    let a = 1;
    let b = a;
    let c = a;
  }());
  
  console.log(a); // throws ReferenceError
  console.log(b); // throws ReferenceError
  console.log(c); // throws ReferenceError
  
  // the same applies for `const`
  ```

#### 常量

- 定义常量使用`const`关键词
- 定义常量使用**大写英文字母**, 尽量见名知意，每个单词之间用 `_` 分隔。
- 常量不能重复定义和不能被改变

```js
const SOME_DAY_I_CAN_GET_IT = true;
```

#### 注释

多行注释 `/** ... */`

单行注释 `//`

更多可以转我另一篇文章 [一目了然的代码注释和技巧](knowledge-map/code-annotation.md)

#### 缩进

`eslint: indent`

##### 水平

一般是 **2 或 4 个空格**，或者 **Tab制表符**。这个其实遵循每个团队或者公司的规范即可，但是，我个人喜欢 **2个空格**，因为这样阅读代码可以更舒服写。

```js
// 2
function getName(profile) {
  return profile?.name;
}

// 4
function getName(profile) {
    return profile?.name;
}
```

##### 垂直

#### 代码的布局

在代码来看，所有的代码都是以 **块代码** 和 **行代码** 组成。

- 块代码

  每个块代码后面保留一个空行。

  ```js
  const info = {
    name: 'Rain120',
    gender: 'male',
    job: 'fe',
    workTime: 3,
    age: 25
  };
  // ---> here新增一个空行
  const github = 'https://github.com/rain120';
  
  ```

- 行代码

  一行限制在 `80-120` 以内，链式调用，尽量以连接函数换行。

  ```js
  // end
  const info = Object.keys(info).map(k => ({ label: k, value:  info[k]})).filter(item => ['name', 'age', 'gender'].includes(item));
  
  // good
  const info = Object.keys(info)
  		.map(k => ({ label: k, value:  info[k]}))
  		.filter(item => ['name', 'age', 'gender'].includes(item));
  ```

#### 个人建议

##### 是否自动格式化

目前，大部分公司和个人开发的项目，都会使用 `eslint` 进行代码(自动保存格式化，`precommit` 自动`eslint --fix`)检查，但是，从个人的角度来看，初学者，不建议自动化处理，而适合手动敲代码，养成习惯，只保留 `precommit fix` 的操作；对于，有经验的同学，我觉得可以，开启这些，用来节省开发时间。



#### 参考资料

[Wiki - Programming style](https://en.wikipedia.org/wiki/Programming_style)

[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

