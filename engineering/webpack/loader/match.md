---
sidebar_position: 5
---

# Loader 匹配规则

当然，`webpack`可以通过引入模块的路径规则，来判断是否使用内联模式或者剔除一些前置`(pre)` `Loader`, 后置`(post)` , 普通`(normal)` `Loader`。规则如下:

**-!** : 剔除 配置中符合条件的 `pre` 和 `normal` `Loader`

**!** : 剔除 配置中符合条件的 `normal` `Loader`

**!!** : 剔除 配置中符合条件的 `pre` & `normal` & `post` `Loader`

```javascript
// Disable normal loaders
import { a } from '!./file1.js';

// Disable preloaders and normal loaders
import { b } from '-!./file2.js';

// Disable all loaders
import { c } from '!!./file3.js';
```

`webpack`代码逻辑解析规则如下`(5.0.0.beta.15 vs 4.43.0)`

```javascript
// ...
const firstChar = requestWithoutMatchResource.charCodeAt(0);
const secondChar = requestWithoutMatchResource.charCodeAt(1);
const noPreAutoLoaders = firstChar === 45 && secondChar === 33; // startsWith "-!"
const noAutoLoaders = noPreAutoLoaders || firstChar === 33; // startsWith "!"
const noPrePostAutoLoaders = firstChar === 33 && secondChar === 33; // startsWith "!!";
const rawElements = requestWithoutMatchResource
  .slice(noPreAutoLoaders || noPrePostAutoLoaders ? 2 : noAutoLoaders ? 1 : 0)
  .split(/!+/);
// ...
```

[详见 5.0.0 beta.15 webpack NormalModuleFactory.js](https://github.com/webpack/webpack/blob/2db705096bd9fa869e5cbe3e9fe5e09b0089c188/lib/NormalModuleFactory.js#L273)

```javascript
// ...
const noPreAutoLoaders = requestWithoutMatchResource.startsWith('-!');
const noAutoLoaders =
  noPreAutoLoaders || requestWithoutMatchResource.startsWith('!');
const noPrePostAutoLoaders = requestWithoutMatchResource.startsWith('!!');
let elements = requestWithoutMatchResource
  .replace(/^-?!+/, '')
  .replace(/!!+/g, '!')
  .split('!');
let resource = elements.pop();
elements = elements.map(identToLoaderRequest);
// ...
```

[详见 4.43.0 webpack NormalModuleFactory.js](https://github.com/webpack/webpack/blob/c9d4ff7b054fc581c96ce0e53432d44f9dd8ca72/lib/NormalModuleFactory.js#L180)
