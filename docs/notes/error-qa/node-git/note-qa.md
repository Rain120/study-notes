#### 1. mac下npm命令升级

```
 sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

```js
sudo chown -R $(whoami) ~/.npm
```

[npm throws errors without sudo](https://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo)





