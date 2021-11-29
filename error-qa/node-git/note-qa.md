#### 1. mac 下 npm 命令升级

```
 sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

```js
sudo chown -R $(whoami) ~/.npm
```

[npm throws errors without sudo](https://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo)

#### 2. npm Cannot find module 'slash'

```sh
npm ERR! code MODULE_NOT_FOUND
npm ERR! Cannot find module 'slash'
```

![npm-cannot-find-slate.png](../images/npm-cannot-find-slate.png)

解决办法:

```sh
rm -rf /usr/local/lib/node_modules/npm


# 安装任意一个node版本(node-version)即可
sudo npx n 10.10.0
```

#### 3. npm WARN: npm does not support Node.js v12.4.0

问题: 安装的 `node` 中 `npm` 的版本和当前安装的 `npm` 版本不一致。

解决办法

```sh
# 清除缓存
npm cache clean -f

# 安装最新版本
curl https://www.npmjs.com/install.sh | sudo sh

# 卸载
npm -g uninstall npm

# 安装node

brew install node
```

![](../images/npm-not-surpport.png)

[npm WARN: npm does not support Node.js v12.4.0](https://stackoverflow.com/questions/56805007/npm-warn-npm-does-not-support-node-js-v12-4-0)

[npm does not support Node.js v10.15.2 #1877](https://github.com/nodejs/help/issues/1877)
