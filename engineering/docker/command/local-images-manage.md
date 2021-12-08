# 本地镜像管理

## `images` 命令

列出本地镜像。

```sh
docker images [OPTIONS] [REPOSITORY[:TAG]]
```

-   `--all` , `-a` : 列出本地所有的镜像 (含中间映像层，默认情况下，过滤掉中间映像层)
-   `--digests` : 显示镜像的摘要信息
-   `--filter` , `-f`: 显示满足条件的镜像
-   `--format` : 指定返回值的模板文件
-   `--no-trunc` : 显示完整的镜像信息
-   `--quiet` , `-q` : 只显示镜像 `ID`

```sh
$ docker images
REPOSITORY                TAG                 IMAGE ID            CREATED             SIZE
committ                   latest              b6fa739cedf5        19 hours ago        1.089 GB
docker                    latest              30557a29d5ab        20 hours ago        1.089 GB
```

## `image` 命令

管理镜像

```sh
docker image COMMAND
```

[子命令列表](https://docs.docker.com/engine/reference/commandline/image/)

## `build` 命令

用于使用 `Dockerfile` 创建镜像。

```sh
docker build [OPTIONS] PATH | URL | -
```

-   `--file`, `-f`： 指定要使用的`Dockerfile`路径

-   `--tag`, `-t`: 镜像的名字及标签，通常 `name:tag` 或者 `name` 格式；可以在一次构建中为一个镜像设置多个标签
-   `--memory`, `-m`: 设置内存最大值
-   `--no-cache`: 创建镜像的过程不使用缓存

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

## `history` 命令

```sh
docker history [OPTIONS] IMAGE
```

查看指定镜像的创建历史

- `--format`: 指定返回值的模板文件
- `--human` , `-H`: 以可读的格式打印镜像大小和日期，默认为`true`
- `--no-trunc`: 显示完整的提交记录
- `--quiet` , `-q`: 仅列出提交记录`ID`

```sh
docker history docker
```

## `import` 命令

从归档文件中创建镜像

```sh
docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]
```

- `--change` , `-c`: 应用 `docker` 指令创建镜像
- `--message` , `-m`: 提交时的说明文字
- `--platform`: 如果服务器支持多平台，则设置平台

```sh
$ docker import http://example.com/exampleimage.tgz
```

## `load` 命令

导入使用 [docker save](#save-命令) 命令导出的镜像

```sh
docker load [OPTIONS]
```

- `--input` , `-i` : 指定导入的文件，代替 `STDIN`
- `--quiet` , `-q` : 精简输出信息

```sh
$ docker image ls

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE

$ docker load < busybox.tar.gz

Loaded image: busybox:latest
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              769b9341d937        7 weeks ago         2.489 MB

$ docker load --input fedora.tar

Loaded image: fedora:rawhide

Loaded image: fedora:20

$ docker images

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
busybox             latest              769b9341d937        7 weeks ago         2.489 MB
fedora              rawhide             0d20aec6529d        7 weeks ago         387 MB
fedora              20                  58394af37342        7 weeks ago         385.5 MB
fedora              heisenbug           58394af37342        7 weeks ago         385.5 MB
fedora              latest              58394af37342        7 weeks ago         385.5 MB
```

## `save` 命令

将指定镜像保存成 `tar` 归档文件

```sh
docker save [OPTIONS] IMAGE [IMAGE...]
```

- `--output` , `-o`: 输出到的文件

```sh
$ docker save busybox > busybox.tar
$ ls -sh busybox.tar
2.7M busybox.tar
$ docker save --output busybox.tar busybox
$ ls -sh busybox.tar
2.7M busybox.tar
$ docker save -o fedora-all.tar fedora
$ docker save -o fedora-latest.tar fedora:latest
```



## `tag` 命令

标记本地镜像，将其归入某一仓库。

```sh
docker tag [OPTIONS] IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]
```

将镜像`ubuntu:15.10`标记为 `ubuntu:v3` 镜像。

```sh
docker tag ubuntu:15.10 ubuntu:v3
```

## `rmi` 命令

删除本地一个或多个镜像。

```sh
docker rmi [OPTIONS] IMAGE [IMAGE...]
```

- `--force` , `-f: 强制删除

- `--no-prune` : 不移除该镜像的过程镜像，默认移除

```sh
docker rmi -f ubuntu:v1
```

## 参考资料

[Docker commandline images](https://docs.docker.com/engine/reference/commandline/images/)

[Docker commandline build](https://docs.docker.com/engine/reference/commandline/build/)

[Docker commandline history](https://docs.docker.com/engine/reference/commandline/history/)

[Docker commandline import](https://docs.docker.com/engine/reference/commandline/import/)

[Docker commandline load](https://docs.docker.com/engine/reference/commandline/load/)

[Docker commandline tag](https://docs.docker.com/engine/reference/commandline/tag/)

[Docker commandline save](https://docs.docker.com/engine/reference/commandline/save/)

[Docker commandline rmi](https://docs.docker.com/engine/reference/commandline/rmi/)

