#### 前言

```js
import React from 'react';

// VS

import * as React from 'react';
```

这两种方式有什么区别？

#### Tsconfig 设置

允许合成默认导入 - `allowSyntheticDefaultImports`

当设置为 `true`， 并且模块**没有**显式指定默认导出时，`--allowSyntheticDefaultImports` 可以让你这样写导入：

```
import React from "react";
```

而不是:

```
import * as React from "react";
```

#### 参考资料

[MDN - import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

[import * as React from 'react'; vs import React from 'react';](https://stackoverflow.com/questions/55285737/import-as-react-from-react-vs-import-react-from-react)

[TSconfig allowSyntheticDefaultImports](https://www.typescriptlang.org/zh/tsconfig#allowSyntheticDefaultImports)

