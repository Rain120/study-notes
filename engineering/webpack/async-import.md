# 动态引入

Webpack 将动态引入的模块和它引用的所有子模块，会分割到一个单独的 chunk 中。

## 使用方式

1. 使用符合 [ECMAScript 提案](https://whatwg.github.io/loader/) 的 [import()](https://webpack.js.org/api/module-methods/#import-1) 语法 来实现动态导入，**推荐使用**。
2. 使用 webpack 特定的 [require.ensure](https://webpack.js.org/api/module-methods/#requireensure)，**webpack 的遗留功能。**

## import()原理

import() 函数返回是一个 promise。在浏览器宿主环境中一个import() 的参考实现如下:

```js
function import(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');

        // import 里面加入 webpackChunkName 的注释，来指定包文件名称。
        // 可以参考 Webpack 魔法注释 👈🏻 看菜单
        const chunkId = '__ModuleLoadingVariable'
            + Math.random().toString(32).substring(2);

        script.charset = 'utf-8';
        script.type = "module";
        script.textContent = `
            import * as installedChunkData from '${url}';
            window.${chunkId} = installedChunkData;
        `;

        // window[chunkId] => 会有状态: 加载失败、加载超时、从未加载过
        script.onload = () => {
            resolve(window[chunkId]);
            delete window[chunkId];
            script.remove();
        }

        script.onerror = () => {
            reject(
                new Error(`Failed to load module script with URL ${url}`)
            );
            delete window[chunkId];
            script.remove();
        }

        document.documentElement.appendChild(script);
    });
}
```

更多可参考源码分析👉🏻 [here](https://rain120.github.io/study-notes/engineering/webpack/build#%E5%BC%82%E6%AD%A5%E5%AF%BC%E5%85%A5)。

## 参考资料

[Webpack dynamic-imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
[TC39 proposal-dynamic-import](https://github.com/tc39/proposal-dynamic-import)
