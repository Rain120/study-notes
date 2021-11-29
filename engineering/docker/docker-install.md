#### [`Docker`](https://docs.docker.com/)安装

[`Mac install`](https://docs.docker.com/docker-for-mac/install/)

推荐使用[ `homebrew`](https://brew.sh/)安装

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```



```sh
brew cask install docker
```

[`Window Install`](https://docs.docker.com/docker-for-windows/install/)

下载安装包安装即可

#### 镜像加速

如果在使用过程中发现拉取 `Docker` 镜像十分缓慢，可以配置` Docker`国内镜像加速。

- [Azure 中国镜像](https://github.com/Azure/container-service-for-azure-china/blob/master/aks/README.md#22-container-registry-proxy)
- [阿里云加速器](https://cr.console.aliyun.com/cn-hangzhou/mirrors)
- [网易云加速器](https://www.163yun.com/help/documents/56918246390157312)

##### 配置

```json
# Perferences -> Docker Engine -> Apply & Restart
{
  "registry-mirrors": [
    "https://dockerhub.azk8s.cn",
    "https://hub-mirror.c.163.com"
  ]
}
```

##### 测试生效

```sh
docker info
```

#### 参考资料

[Docker Desktop for Mac user manual](https://docs.docker.com/docker-for-mac/)