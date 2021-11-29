---
title: QA
---

## interface 和 type 有什么异同点？

[interface-declarations](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#71-interface-declarations)

> An interface cannot declare a property with the same name as an inherited private or protected property.

[type-aliases](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#310-type-aliases)

> An interface can have multiple merged declarations, but a type alias for an object type literal cannot

### 相同点

- 描述一个对象或者函数

```typescript

export interface IUser {
    id: string | number;
    name: string;
    age?: number;
}

export interface IGetUser {
    (id: string | number): IUser;
}

export type User = {
    name: string;
    age?: number;
}

export type GetUser = (id: string | number): User;

```

- 允许类型拓展(`type`不能使用`extends`关键字)

```typescript
interface FE extends IUser {
    type: string;
}

type FE = { type: string; } & User;

```

### 不同点

- `type` 可以声明基本类型别名，联合类型，元组等类型

- `interface` 能够声明合并

```typescript
interface IUser {
    id: string | number;
}

interface IUser {
    name: string;
    age?: number;
}

=>
interface IUser {
    id: string | number;
    name: string;
    age?: number;
}
```

### 参考

[typescript-interfaces-vs-types](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)

## 泛型

**泛型**就是指定一个表示类型的变量，用它来代替某个实际的类型用于编程，而后再通过实际运行或推导的类型来对其进行替换，以达到一段使用泛型程序可以实际适应不同类型的目的。**「泛型就是不预先确定的数据类型，具体的类型在使用的时候再确定的一种类型约束规范」**。

泛型的好处:

- 函数和类可以轻松的支持多种类型，增强程序的扩展性
- 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
- 灵活控制类型之间的约束

## 参考

[Typescript 官方文档](https://www.tslang.cn/index.html)

[TypeScript Spec](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)

[TypeScript进阶 之 重难点梳理](https://mp.weixin.qq.com/s/xWaVvh5lXG8Nb_U6bmJamw)

