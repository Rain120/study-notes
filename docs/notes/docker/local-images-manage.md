#### `build` 命令

用于使用 `Dockerfile` 创建镜像。

##### 语法

```sh
docker build [OPTIONS] PATH | URL | -
```

- `--file`, `-f`： 指定要使用的`Dockerfile`路径

- `--tag`, `-t`: 镜像的名字及标签，通常 `name:tag` 或者 `name` 格式；可以在一次构建中为一个镜像设置多个标签
- `--memory`,  `-m`: 设置内存最大值
- `--no-cache`: 创建镜像的过程不使用缓存

```sh
docker build -t qq-music-api . 
```

使用 `URL` 的 `Dockerfile` 创建镜像

```sh
docker build github.com/creack/docker-firefox
```

通过 `-f Dockerfile` 文件的位置

```sh
docker build -f /path/to/a/Dockerfile .
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

#### 参考资料

[Docker commandline build](https://docs.docker.com/engine/reference/commandline/build/)

[Docker commandline tag](https://docs.docker.com/engine/reference/commandline/tag/)

