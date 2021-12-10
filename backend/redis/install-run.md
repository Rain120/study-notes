# 安装启动
## 使用homebrew安装

**Note:** 安装 `homebrew` `or` 国内安装，请到 👉👉👉 [Homebrew](https://rain120.github.io/study-notes/resources/mac-software#homebrew)

```sh
brew install redis
```

## 启动

```sh
redis-server
```

## 启动/停止Redis服务器作为后台服务

### 服务列表

```sh
brew service list
```

### 启动

```sh
brew service start redis
```

### 停止

```sh
brew service stop redis
```

### 重启

```sh
brew service restart redis
```

## 检查Redis是否启动

```sh
redis-cli ping
```

命令`redis-cli ping` 响应`PONG` 说明服务正常启动。

当然你可以通过 `alias` 来快捷启动，比如说我使用的是 `zsh`, 我可以在 `.zshrc or .bash_profile` 中如下配置

```sh
alias redis-start="brew services start redis"
alias redis-stop="brew services stop redis"
alias redis-restart="brew services restart redis"
# 监视器 commandis 是一个超级有用的，它记录所有 redis 接收到的命令
alias redis-monitor="redis-cli monitor"
```

## 配置Redis

要配置`Redis`并更改默认值，请编辑`/usr/local/etc/redis.conf`文件，然后重新启动`Redis`服务器。

检查配置部分以了解更多信息，以配置用户检查 [`ACL`(访问控制列表)](https://redis.io/topics/acl)

## 卸载Redis及其文件

```sh
brew uninstall redis
rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```

## 异常处理

[redis 异常处理](./issue.md)
