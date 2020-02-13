#### 设置全局配置`path`

```sh
npm config set prefix 'path/'
```



#### 设置缓存

```sh
npm config set cache 'path/'
```



#### 删除 `npm`之后建议清除配置文件，以免重新安装出现其他问题

```sh
 rm -rf /usr/local/bin/node
 rm -rf /usr/local/bin/npm
 rm -rf /usr/local/bin/node_modules
```



#### nodejs 版本管理

```sh
# window 需要下载 nvm-windows release包即可

# mac

#n
npm install -g n

#nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

[安装n 详见 GitHub 相关信息](https://github.com/tj/n#installation)

[安装 nvm 详见 GitHub 相关信息](https://github.com/nvm-sh/nvm#installing-and-updating)

[安装 nvm windows 详见 GitHub 相关信息](https://github.com/coreybutler/nvm-windows)

