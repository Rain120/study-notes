#### Program

根节点, 即代表一整颗抽象语法树。

`body` 属性是一个数组,包含了多个 `Statement` 节点。

```ts
interface Program extends Node {
  type: 'Program';
  sourceType: 'script' | 'module';
  body: Array<Directive | Statement | ModuleDeclaration>;
  comments?: Array<Comment>;
}
```

#### Identifier

**标识符节点**

写 `JS` 时自定义的名称，如变量名，函数名，属性名，都归为标识符。

```ts
interface Identifier extends Expression, Pattern {
  type: 'Identifier';
  name: string;
}
```

一个标识符可能是一个表达式，或者是解构的模式（`ES6` 中的解构语法）。我们等会会看到 `Expression` 和 `Pattern` 相关的内容的。

#### Literal

**字面量**

这里不是指 `[]` 或者 `{}` 这些，而是本身语义就代表了一个值的字面量，如 `1`，`“hello”`, `true` 这些，还有正则表达式（有一个扩展的 `Node` 来表示正则表达式），如 `/\d?/`。我们看一下文档的定义

```ts
interface Literal extends Expression {
  type: 'Literal';
  value: string | boolean | number | null;
  raw?: string;
}
```

##### RegExpLiteral

这个针对正则字面量的，为了更好地来解析正则表达式的内容，添加多一个 `regex` 字段，里边会包括正则本身，以及正则的 `flags`。

```ts
interface RegExpLiteral extends Literal {
  type: 'Literal';
  value?: RegExp | null;
  regex: {
    pattern: string;
    flags: string;
  };
  raw?: string;
}
```

#### Statement

##### ExpressionStatement

**表达式语句节点。**

`expression` 属性指向一个表达式节点对象

```ts
interface ExpressionStatement extends Statement {
  type: 'ExpressionStatement';
  expression: Expression;
}
```

##### BlockStatement

**块语句节点**

举个例子：if (...) { // 这里是块语句的内容 }，块里边可以包含多个其他的语句，所以有一个 body 属性，是一个数组，表示了块里边的多个语句。

```ts
interface BlockStatement extends Statement {\
  type: 'BlockStatement';
  body: Array<Statement>;
  innerComments?: Array<Comment>;
}
```

##### ForStatement

**for 循环语句节点**

属性 `init/test/update` 分别表示了 `for` 语句括号中的三个表达式，初始化值，循环判断条件，每次循环执行的变量更新语句（`init` 可以是变量声明或者表达式）。这三个属性都可以为 `null`，即 `for(;;){}`。
`body` 属性用以表示要循环执行的语句。

```ts
interface ForStatement extends Statement {
  type: 'ForStatement';
  init?: VariableDeclaration | Expression | null;
  test?: Expression | null;
  update?: Expression | null;
  body: Statement;
}
```

#### Expression

##### AssignmentExpression

**赋值表达式节点。**

`operator` 属性表示一个赋值运算符, `left` 和 `right` 是赋值运算符左右的表达式。

```ts
interface AssignmentExpression extends Expression, Pattern {
  type: 'AssignmentExpression';
  operator: AssignmentOperator;
  left: Pattern | MemberExpression;
  right: Expression;
}
```

###### AssignmentOperator

**赋值运算符**

```ts
enum AssignmentOperator {
  | "="
  | "+=" | "-=" | "*=" | "/=" | "%="
  | "<<=" | ">>=" | ">>>="
  | "|=" | "^=" | "&="
}
```

##### ArrayExpression

**数组表达式节点**

`elements` 属性是一个数组，表示数组的多个元素，每一个元素都是一个表达式节点。

```ts
interface ArrayExpression extends Expression {
  type: 'ArrayExpression';
  elements: [Expression | null];
}
```

##### BinaryExpression

**二元运算表达式节点**

`left` 和 `right` 表示运算符左右的两个表达式, `operator` 表示一个二元运算符。

```ts
interface BinaryExpression extends Expression {
  type: 'BinaryExpression';
  operator: BinaryOperator;
  left: Expression;
  right: Expression;
}
```

###### BinaryOperator

二元运算符，所有值如下：

```ts
enum BinaryOperator {
  | "==" | "!=" | "===" | "!=="
  | "<" | "<=" | ">" | ">="
  | "<<" | ">>" | ">>>"
  | "+" | "-" | "*" | "/" | "%"
  | "|" | "^" | "&" | "in"
  | "instanceof"
}
```

##### CallExpression

**函数调用表达式**，即表示了 `func(1, 2)` 这一类型的语句。

`callee` 属性是一个表达式节点，表示函数，

`arguments` 是一个数组，元素是表达式节点，表示函数参数列表。

```ts
interface CallExpression extends Expression {
  type: 'CallExpression';
  callee: Expression;
  arguments: [Expression];
}
```

##### ConditionalExpression

条件表达式，通常我们称之为三元运算表达式，即 `boolean ? true : false`。属性参考条件语句。

```ts
interface ConditionalExpression extends Expression {
  type: 'ConditionalExpression';
  test: Expression;
  alternate: Expression;
  consequent: Expression;
}
```

##### FunctionExpression

**函数表达式节点。**

```ts
interface FunctionExpression extends Function, Expression {
    type: 'FunctionExpression';
}
```

##### LogicalExpression

**逻辑运算表达式节点**，和赋值或者二元运算类型，只不过 `operator` 是逻辑运算符类型。

```ts
interface LogicalExpression extends Expression {
  type: 'LogicalExpression';
  operator: LogicalOperator;
  left: Expression;
  right: Expression;
}
```

###### LogicalOperator

**逻辑运算符**，两种值，即与或。

```ts
enum LogicalOperator {
  "||" | "&&"
}
```

##### MemberExpression

成员表达式节点,即表示引用对象成员的语句。

`object` 是引用对象的表达式节点

`property` 是表示属性名称

`computed` 如果为 `false`，是表示 `.` 来引用成员，`property` 应该为一个 `Identifier` 节点，如果 `computed` 属性为 `true`，则是 `[]` 来进行引用，即 `property` 是一个 `Expression` 节点，名称是表达式的结果值。

```ts
interface MemberExpression extends Expression {
  type: 'MemberExpression';
  object: Expression | Super;
  property: Expression;
  computed: boolean;
  optional: boolean;
}
```

##### NewExpression

`new` 表达式。

```ts
interface NewExpression extends CallExpression {
  type: 'NewExpression';
}
```

##### ObjectExpression

**对象表达式节点**

`property` 属性是一个数组，表示对象的每一个键值对，每一个元素都是一个属性节点。

```ts
interface ObjectExpression extends Expression {
  type: 'ObjectExpression';
  properties: [Property];
}
```

###### Property

**对象表达式中的属性节点。**

`key` 表示键

`value` 表示值

`kind` 属性，用来表示是普通的初始化，或者是 `get/set`。

```ts
interface Property extends Node {
    type: 'Property';
    key: Literal | Identifier;
    value: Expression;
    kind: 'init' | 'get' | 'set';
}
```

##### SequenceExpression

**序列运算符**

`expressions` 属性为一个数组，由其他表达式组成的表达式，用[逗号运算符 `(,)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)分隔。

```ts
interface SequenceExpression extends Expression {
    type: 'SequenceExpression';
    expressions: [Expression];
}
```

[ESDoc - SequenceExpression](http://160.16.109.33/github.com/mason-lang/esast/class/src/ast.js~SequenceExpression.html)

##### ThisExpression

表示 `this`。

```ts
interface ThisExpression extends Expression {
  type: 'ThisExpression';
}
```

##### UnaryExpression

**一元运算表达式节点**（`++/--` 是 update 运算符，不在这个范畴内）

`operator` 表示运算符

`prefix` 表示是否为前缀运算符

`argument` 是要执行运算的表达式。

```ts
interface UnaryExpression extends Expression {
  type: 'UnaryExpression';
  operator: UnaryOperator;
  prefix: boolean;
  argument: Expression;
}
```

###### UnaryOperator

**一元运算符**

```ts
enum UnaryOperator {
  | "-" | "+" | "!" | "~"
  | "typeof" | "void" | "delete"
}
```

##### UpdateExpression

**update 运算表达式节点**

即 `++/--`，和一元运算符类似，只是 `operator` 指向的节点对象类型不同，这里是 `update` 运算符。

```ts
interface UpdateExpression extends Expression {
  type: 'UpdateExpression';
  operator: UpdateOperator;
  argument: Expression;
  prefix: boolean;
}
```

#### Declaration

**声明语句节点**

```ts
interface Declaration extends Statement { }
```

##### FunctionDeclaration

**函数声明**

`id` 不能为 `null`。

```ts
interface FunctionDeclaration extends Function, Declaration {
  type: "FunctionDeclaration";
  id: Identifier;
}
```

##### VariableDeclarator

**变量声明的描述**

`id` 表示变量名称节点，`init` 表示初始值的表达式，可以为 `null`。

```ts
interface VariableDeclarator {
  type: 'VariableDeclarator';
  id: Pattern;
  init?: Expression | null;
}
```

##### VariableDeclaration

**变量声明**

`kind` 属性表示声明类型

`declarations` 表示声明的多个描述

```ts
interface VariableDeclaration extends Declaration {
  type: 'VariableDeclaration';
  declarations: Array<VariableDeclarator>;
  kind: 'var' | 'let' | 'const';
}
```

#### Patterns

```ts
interface Pattern extends Node { }
```

#### 参考资料

[The ESTree Spec](https://github.com/estree/estree)

[使用 Acorn 来解析 JavaScript](https://juejin.cn/post/6844903450287800327)

[ESDoc](http://160.16.109.33/github.com/mason-lang/esast/class/src/ast.js~BlockStatement.html)

[meriyah](https://github.com/meriyah/meriyah)
