# 全量引入

## 前言

```js
import React from 'react';

// VS

import * as React from 'react';
```

这两种方式有什么区别？

我们知道`React`实际上并没有使用`ES6`定义默认导入的方式，即不是 `ES Module`。我们发现在配置了 `TypeScript` 或者配置了 `Babel` 的项目中使用时，我们就可以把它当作 `ES Module default` 来导入，为什么呢？如何配置呢？

## Typescript 使用

`tsconfig.json` 文件中有一个选项叫做 `allowSyntheticDefaultImports`

当设置为 `true`， 并且模块**没有**显式指定默认导出时，`--allowSyntheticDefaultImports` 可以让你这样写导入：

```ts
import React from "react";
```

而不需要:

```ts
import * as React from "react";
```

## Typescript 是怎么实现的？

[src/compiler/utilities.ts: getAllowSyntheticDefaultImports](https://github.com/microsoft/TypeScript/blob/4d506240ded68cf099c952b889a3f93b09f703ed/src/compiler/utilities.ts#L5986)

```ts
export function getAllowSyntheticDefaultImports(compilerOptions: CompilerOptions) {
  const moduleKind = getEmitModuleKind(compilerOptions);
  return compilerOptions.allowSyntheticDefaultImports !== undefined
      ? compilerOptions.allowSyntheticDefaultImports
      : compilerOptions.esModuleInterop ||
      moduleKind === ModuleKind.System;
}
```

[src/services/codefixes/importFixes.ts: getExportEqualsImportKind](https://github.com/microsoft/TypeScript/blob/c497b487a78c049a11ba99b97dccf6126b2d492a/src/services/codefixes/importFixes.ts#L623)

```ts
function getExportEqualsImportKind(importingFile: SourceFile, compilerOptions: CompilerOptions): ImportKind {
    const allowSyntheticDefaults = getAllowSyntheticDefaultImports(compilerOptions);
    // 1. 'import =' will not work in es2015+, so the decision is between a default
    //    and a namespace import, based on allowSyntheticDefaultImports/esModuleInterop.
    if (getEmitModuleKind(compilerOptions) >= ModuleKind.ES2015) {
        return allowSyntheticDefaults ? ImportKind.Default : ImportKind.Namespace;
    }
    // 2. 'import =' will not work in JavaScript, so the decision is between a default
    //    and const/require.
    if (isInJSFile(importingFile)) {
        return isExternalModule(importingFile) ? ImportKind.Default : ImportKind.CommonJS;
    }
    // 3. At this point the most correct choice is probably 'import =', but people
    //    really hate that, so look to see if the importing file has any precedent
    //    on how to handle it.
    for (const statement of importingFile.statements) {
        if (isImportEqualsDeclaration(statement)) {
            return ImportKind.CommonJS;
        }
    }
    // 4. We have no precedent to go on, so just use a default import if
    //    allowSyntheticDefaultImports/esModuleInterop is enabled.
    return allowSyntheticDefaults ? ImportKind.Default : ImportKind.CommonJS;
}
```

`babel` 同理

>  `React`团队推荐使用 
>
> ```ts
> import * as React from 'react';
> import { useState } from 'react';
> ```



## 参考资料

[MDN - import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

[import * as React from 'react'; vs import React from 'react';](https://stackoverflow.com/questions/55285737/import-as-react-from-react-vs-import-react-from-react)

[import * as React vs. import React](https://www.reddit.com/r/typescript/comments/dy0ix8/import_as_react_vs_import_react/)

[TSconfig allowSyntheticDefaultImports](https://www.typescriptlang.org/zh/tsconfig#allowSyntheticDefaultImports)

[Github PR#26866 - Enable allowSyntheticDefaultImports if esModuleInterop is enabled](https://github.com/Microsoft/TypeScript/pull/26866/commits/aaa723e2d2ee393331ac9d8eba29d66b80f415fe)

[Github PR#18102 - Codemod to import * as React from "react"](https://github.com/facebook/react/pull/18102)

[spec - es modules](https://tc39.es/ecma262/#sec-modules)

