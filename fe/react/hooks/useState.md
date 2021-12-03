---
sidebar_position: 1
---

用于为函数组件引入状态 `(state)`。纯函数不能有状态，所以把状态放在钩子里面。

作用: 定义一个`state`

参数: 初始化 `state`

返回值: [当前 `state` , 更新 `state` 的函数] 

**Note**: 

- 返回一个数组
- `Hooks`的setState**不会合并**旧状态，而是**完全替代**了旧的状态

```jsx
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## function state vs class state

- `function state` 的颗粒度更细
- `function state` 保存的是快照，`class state`保存的是引用
- `function state` 必须保证是个新的引用， `class state`