#### 问题1

```
exception in initAndListen: DBPathInUse: Unable to lock the lock file: (Unknown error). Another mongod instance is already running on the /data/db directory, terminating.
```

##### 原因

`mongodb` 非正常关闭，删除 `mongod.lock` 文件即可，然后重启

```sh
sudo rm /data/db/mongod.lock
```

#### 问题2

```
exception in initAndListen: NonExistentPath: Data directory /data/db not found., terminating
```

##### 原因

未加 `--config` 启动，使用的 `dbPath` 是 `/data/db` ，不存在或没有创建这个文件件的话或报这个错误。

```sh
sudo mkdir -p /data/db
```
