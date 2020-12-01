### 工具

[AST在线预览](https://astexplorer.net/)

### AST步骤(I/O)

- **I**
  - `Parse` -> 解析
  - `Traverse `-> 遍历
- **O**
  - `Manipulate` -> 操作
  - `Generate Code` -> 生成代码

### Acron

[acorn](https://github.com/acornjs/acorn) 是基于 `JavaScript` 开发的一个小型、快速的`JavaScript`解析器。

- [acorn](https://github.com/acornjs/acorn/blob/master/acorn/): 解析器
- [acorn-loose](https://github.com/acornjs/acorn/blob/master/acorn-loose/): 解析器`(宽松模式)`
- [acorn-walk](https://github.com/acornjs/acorn/blob/master/acorn-walk/): 遍历 `ast` 树 的 `node`

#### parse(input, options)

[Github acorn 官方英文文档](https://github.com/acornjs/acorn/blob/master/acorn/README.md)

输入参数是一个字符串, 选项必须是设置以下列出的一些选项的对象。返回值将是 [ESTree 规范](#EsTree规范) 指定的抽象语法树对象。

```js
let acorn = require("acorn");
console.log(acorn.parse("1 + 1", {ecmaVersion: 2020}));
```

遇到语法错误时, 解析器将引发带有有意义消息的 `SyntaxError` 对象。 错误对象将具有 `pos` 属性, 该属性指示发生错误的字符串偏移量, 以及一个 `loc` 对象, 其中包含引用同一位置的 `{line, column}` 对象。

选项由第二个参数提供, 该参数应该是包含以下任何字段的对象 **(仅ecmaVersion是必需的)**:

- `options`
  - `ecmaVersion` 

    指定要解析的`ECMAScript`版本。必须为3, 5, 6(2015), 7(2016), 8(2017), 9(2018), 10(2019), 11(2020)或12(2021, 部分支持)或 **最新**(该库支持的最新版本)。 这会影响对严格模式的支持, 保留字的设置以及对新语法功能的支持。
    **注意:** `Acorn` 只实现了 *阶段4(最终定稿)*的 `ECMAScript` 特性。其他提议的新特性必须通过插件来实现。

  - `sourceType`

     指定代码应该被解析的模式。可以是`script`或`module`。 这将影响全局的严格模式, 和解析 `import` 和 `export`的声明。

     **注意**: 如果设置为 `module`, 即使 `ecmaVersion`小于 `6`, 静态 `import` 和 `export`语法也将有效。

  - `onInsertedSemicolon` 

     如果有回调函数, 则只要解析器插入了一个缺少的分号, 就会调用该回调函数。 回调函数将被赋予插入分号的点的字符偏移量作为参数, 如果`locations`被设置, 则表示此位置的 `{line, column}` 对象。

  - `onTrailingComma` 

     类似onInsertedSemicolon`, 但是为了跟踪逗号插入。

  - `allowReserved`  

     如果为`false`, 则使用保留字会产生错误。 对于 `ecmaVersion 3`, 默认为`true`, 对于较高版本, 默认为`false`。 当 `value` 为 `never` 时, 保留字和关键字也不能用作属性名称 (如IE低版本浏览器) 

  - `allowReturnOutsideFunction`   

     默认情况下, 顶层的return语句会引发错误。 将其设置为`true`以接受此类代码。

  - `allowImportExportEverywhere` 

     默认情况下, 导入和导出声明只能显示在程序的顶层。 将此选项设置为`true`可以允许在允许语句的任何地方

  - `allowAwaitOutsideFunction`

     默认情况下, 等待表达式只能出现在异步函数中。 将此选项设置为`true`允许具有 `top level await`表达式。 不过, 非异步`(no-async)`功能仍不允许使用它们。

  - `allowHashBang`

     启用此功能 (默认情况下关闭) , 如果代码以`#!` 开始 (如在shellscript中) , 第一行将被视为注释。

  - `locations` 

     当为`true`时, 每个`Node`都有一个连接起始和终止子对象的`loc`对象, 每个对象包含`{line, column`}形式的一个行号和列号。 默认值为false。

  - `onToken`  
    
     如果为此选项传递了一个函数, 则每个发现的token将以与从`tokenizer() getToken()`返回的tokens相同的格式传递。
  如果参数是array, 则每个发现的token将被push到array中。
     注意不能从回调中调用解析器, 从而破坏其内部状态。
     
  - `onComment` 

    如果为此选项传递函数, 每当遇到注释时, 将使用以下参数调用该函数: 

    - `block`: 如果注释是块注释, 则为 `true`, 如果是行注释, 则为`false`。

    - `text`: 评论的内容。

    - `start`: 注释开头的字符偏移量。
    
    - `end`: 注释结尾的字符偏移量。
       当`locations`参数被设置时, 注释的开始和结束位置 `{line, column}` 将作为两个附加参数传递。当此选项是 `array` 时, 每个注释被 `push` 到它作为对象以 `Esprima` 格式: 
        ```json
        {
          "type": "Line" | "Block",
          "value": "comment text",
          "start": Number,
          "end": Number,
          // If `locations` option is on:
          "loc": {
            "start": {line: Number, column: Number}
            "end": {line: Number, column: Number}
          },
          // If `ranges` option is on:
          "range": [Number, Number]
        }
        ```
    
    **请注意**, 您不能从回调函数中调用解析器, 从而破坏其内部状态。

  - `ranges` 

     节点的起始和终止字符偏移记录在起始和结束属性中 (直接在节点上, 而不是保存行/列数据的`loc`对象) , 还要添加一个保持`[start, end]`数组的[半标准化(semi-standardized)](https://bugzilla.mozilla.org/show_bug.cgi?id=745678)范围属性, 使用相同的数字, 将`ranges`设置为`true`。

  - `program` 

     通过解析第一个文件生成的树, 作为后续解析中的程序选项传递多个文件, 可以将多个文件解析为单个 `AST`。 会将已解析的文件以 `top level` 形式添加到现有解析树的 `Program` **(program即顶部节点)** 节点。
  
  - `sourceFile` 
  
     当`locations`选项为`true`时, 您可以传递此选项以在每个节点的`loc`对象中添加一个源属性。 请注意, 此选项的内容不以任何方式进行检查或处理; 您可以随意使用您选择的任何格式。
  
  - `directSourceFile` 
  
     类似`sourceFile`一样, 但是一个`sourceFile`属性将直接添加到节点, 而不是`loc`对象。
  
  - `preserveParens`  
  
     如果此选项为`true`, 则括号表达式由 (非标准) 括号化表达式节点表示, 该节点具有包含括号内的表达式的单个表达式属性。

#### parseExpressionAt(input, offset, options)

将解析字符串中的单个表达式, 并返回其`AST`。 如果表达式之后还有更多的字符串, 不会去解析。

#### tokenizer(input, options)

返回具有`getToken`方法的对象, 该方法可以重复调用以获取下一个token和`{start, end, type, value}`对象 (启用了`location`选项时添加了`loc`属性, 并且启用了`ranges`选项时的`range`属性) 。 当令牌的类型为`tokTypes.eof`时, 您应该停止调用该方法, 因为它将永远返回相同的`token`。

在`ES6`环境中, 返回的结果可以用作任何其他符合协议的可迭代项

```jsx
for (let token of acorn.tokenizer(str)) {
  // iterate over the tokens
}

// transform code to array of tokens:
var tokens = [...acorn.tokenizer(str)];
```

`tokTypes` 有一个将`name`映射到`token object`的对象, 该对象最终在`token`的`type`属性中。

`getLineInfo(input, offset)` 可用于为给定的字符串和偏移量获取`{line, column}`对象。

#### Parse类

`Parser`类的实例包含所有驱动解析的状态和逻辑。 它具有静态方法`parse`, `parseExpressionAt`和`tokenizer`, 它们与同名的顶级函数匹配。

使用插件扩展解析器时, 需要在类的扩展版本上调用这些方法。 要使用插件扩展解析器, 可以使用其静态扩展方法。

```js
var acorn = require("acorn");
var jsx = require("acorn-jsx");
var JSXParser = acorn.Parser.extend(jsx());
JSXParser.parse("foo(<bar/>)", {ecmaVersion: 2020});
```

`expand` 方法采用任意数量的插件值, 并返回一个新的`Parser`类, 其中包括插件提供的额外的解析器逻辑。

### EsTree规范

[Here](notes/babel/ast/estree-spec.md)

#### 参考资料

[Vedio -> Master the Art of the AST and Take Control of Your JS](https://www.youtube.com/watch?v=C06MohLG_3s)

[Babel 插件手册 中文文档](https://github.com/Rain120/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

[Build a JS Interpreter in JavaScript Using Acorn as a Parser](https://blog.bitsrc.io/build-a-js-interpreter-in-javascript-using-acorn-as-a-parser-5487bb53390c)

