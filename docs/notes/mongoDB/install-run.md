#### 使用homebrew安装

**Note:** 安装 `homebrew` `or` 国内安装，请到 👉👉👉 [here](resources/mac-software?id=homebrew)

#### 安装

> 现MongoDB不再是开源，官方已经从Homebrew中移除，所以无法通过 brew install mongodb 安装，会提示 No available formula with the name "mongodb"，需使用最新的方法安装社区版。

首先使用 `brew tap` 命令设定到 `MongoDB` 第三方库

```sh
brew tap mongodb/brew

# 安装MongoDB社区服务器的最新可用生产版本
brew install mongodb-community

# 指定版本
brew install mongodb-community@4.4
```

#### 测试安装成功

```sh
mongo -version
```

#### 启动/停止

##### 启动

```sh
brew services start mongodb-community
```

##### 停止

```sh
brew services stop mongodb-community
```

##### 重启

```sh
brew services restart mongodb-community
```

##### 要手动运行MongoDB(即 mongod 进程)作为后台进程

```sh
mongod --config /usr/local/etc/mongod.conf --fork
```

#### 检查Redis是否启动

访问 `localhost:27017`

当然你可以通过 `alias` 来快捷启动，比如说我使用的是 `zsh`, 我可以在 `.zshrc or .bash_profile` 中如下配置

```sh
alias mongodb-start="brew services start mongodb-community"
alias mongodb-stop="brew services stop mongodb-community"
alias mongodb-restart="brew services restart mongodb-community"
```

#### 配置文件

- 配置文件 `/usr/local/etc/mongod.conf`

- 日志目录路径 `/usr/local/var/log/mongodb`

- 数据目录路径 `/usr/local/var/mongodb`

#### 参考资料

[官方安装指南](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
