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


### 参考

[Typescript 官方文档](https://www.tslang.cn/index.html)

[TypeScript Spec](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)

[TypeScript 入门教程](https://ts.xcatliu.com/introduction/what-is-typescript)

