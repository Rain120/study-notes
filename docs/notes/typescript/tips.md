### 未知Object类型

```typescript
interface AnyObject {
    [key: string]: any;
}
```

### 自定义Object类型

```typescript
interface CustomObject<V> {
    [key: string]: V;
}
```

### 自定义Array类型

```typescript
export type ArrayMap<T> = T[];
```

#### typescript 中 ! ? + - 都是什么意思？

##### !

表达式不能为 `null` 或 `undefined` 的方式

> A new `!` post-fix expression operator may be used to assert that its operand is non-null and non-undefined in contexts where the type checker is unable to conclude that fact. Specifically, the operation `x!` produces a value of the type of `x` with `null` and `undefined` excluded. Similar to type assertions of the forms `<T>x` and `x as T`, the `!` non-null assertion operator is simply removed in the emitted JavaScript code.

```typescript
class C {
    foo!: number;
    // ^
    // Notice this '!' modifier.
    // This is the "definite assignment assertion"

    constructor() {
        this.initialize();
    }

    initialize() {
        this.foo = 0;
    }
}
```

[严格的属性初始化](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization)

[非null断言运算符](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)

[TypeScript 类属性检查](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/release-notes/TypeScript 2.7.html)

##### ?

- 定义属性用于 **可选属性定义**

```typescript
interface Profile {
  name: string;
  age?: number | string;
}
```

[optional-properties](https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties)

- 使用属性用于 **可选的属性访问**

**?.** 只会检查其左侧的值是否为 `null` 或 `undefined`，而不检查任何后续属性。

```ts
const x = foo?.bar.baz

// ===>

const x = (foo === null || foo === undefined)
	? undefined
  : foo.bar.baz();
```

**Note:** `typescript 3.7+`才支持。

[optional-chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html?#optional-chaining)

[Announcing TypeScript 3.7 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7-rc/) -> [译文](https://www.infoq.cn/article/d95pGayR9s4eucUGKSFP)

**??**

**空值合并运算符** 是即将推出的另一个 `ECMAScript 2020`功能，它与可选的链接并驾齐驱。

```ts
let x = foo ?? bar();

// ===>

let x = (foo !== null && foo !== undefined)
	? foo
  : bar();
```

[nullish-coalescing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing)

##### + -

`TypeScript 2.8` 为映射类型增加了增加或移除特定修饰符的能力。 特别地，映射类型里的`readonly`或`?`属性修饰符现在可以使用`+`或`-`前缀，来表示修饰符是添加还是移除。

```ts
type MutableRequired<T> = {
  -readonly [P in keyof T]-?: T[P]
};  // 移除readonly和?
type ReadonlyPartial<T> = {
  +readonly [P in keyof T]+?: T[P]
};  // 添加readonly和?
```

[改进对映射类型修饰符的控制](http://www.tslang.cn/docs/release-notes/typescript-2.8.html)

### 参考

[Typescript 官方文档](https://www.tslang.cn/index.html)

[TypeScript Spec](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)

[TypeScript 入门教程](https://ts.xcatliu.com/introduction/what-is-typescript)

[What's new in TypeScript](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)

