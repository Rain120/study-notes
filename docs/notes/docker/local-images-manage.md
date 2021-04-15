#### `build` 命令

用于使用 `Dockerfile` 创建镜像。

### 语法

```sh
docker build [OPTIONS] PATH | URL | -
```



#### `tag` 命令

标记本地镜像，将其归入某一仓库。

##### 语法

```sh
docker tag [OPTIONS] IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]
```

将镜像`ubuntu:15.10`标记为 `ubuntu:v3` 镜像。

```sh
docker tag ubuntu:15.10 ubuntu:v3
```

