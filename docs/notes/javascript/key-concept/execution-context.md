#### 执行上下文(Execution Context or EC)

执行上下文`(EC)`是评估和执行 `JavaScript` 代码的环境的抽象概念。每当 `Javascript` 代码在运行的时候，它都是在执行上下文中运行。

对于每个执行上下文，都有三个重要属性：

- 变量对象`(Variable object，VO)`
- 作用域链`(Scope chain)`
- `this`

#### 生命周期

执行上下文的生命周期包括三个阶段：**创建阶段👉执行阶段👉回收阶段**。

#### 执行上下文栈(Execution Context Stack or ECS)

JavaScript 中有三种执行上下文类型。

- **全局执行上下文**

  这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：创建一个全局的 `window` 对象（浏览器的情况下），并且设置 `this`的值等于这个全局对象。一个程序中只会有一个全局执行上下文。

- **函数执行上下文**

  每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建，它会按定义的顺序执行一系列步骤。

- **Eval 函数执行上下文**

  执行在 `eval`函数内部的代码也会有它属于自己的执行上下文。

#### 执行上下文栈

也称**调用栈**, 是一种拥有 `LIFO(后进先出)`数据结构的栈，被用来存储代码运行时创建的所有**执行上下文**。

#### 参考资料

[Understanding Execution Context and Execution Stack in Javascript](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)
