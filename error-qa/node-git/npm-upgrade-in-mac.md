# mac 下 npm 命令升级

```
 sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

```js
sudo chown -R $(whoami) ~/.npm
```
## 参考

[npm throws errors without sudo](https://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo)
