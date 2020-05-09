#### 前言

我们知道，当`Javascript`引擎使用变量时，它们的生命周期包括以下几个阶段：

1. **声明阶段**正在范围内注册变量。
2. **初始化阶段**是分配内存并为作用域中的变量创建绑定。在此步骤中，变量将使用进行自动初始化`undefined`。
3. **分配阶段**是为初始化变量分配一个值。

变量在通过声明阶段时已**处于统一**状态，但尚未达到**初始化**状态。

![variable-lifecycle.png](./images/variable-lifecycle.png)

即: **声明阶段**，**初始化阶段**和**赋值阶段**。

#### var变量生命周期

![var-variable-lifecycle.png](./images/var-variable-lifecycle.png)

在执行任何语句之前，变量在作用域的开头通过*声明阶段*并立即*初始化阶段*（步骤1）。 `var variable`语句在函数作用域中的位置不影响声明和初始化阶段。

在声明和初始化之后，但是在赋值阶段之前，该变量具有`undefined`值并且可以被使用。

在*赋值阶段* `variable = 'value'`，变量将接收其初始值（步骤2）。

严格*提升*的思想是，在函数作用域*的开始处声明和初始化*变量。声明和初始化阶段之间没有差距。

#### 参考资料

[variables-lifecycle-and-why-let-is-not-hoisted](https://dmitripavlutin.com/variables-lifecycle-and-why-let-is-not-hoisted)

