#### `Centos`安装

```sh
# search
docker search centos

# install
docker pull centos:7
```



#### `Wget`安装

```sh
yum install wget
```

#### `Node`安装

```sh
# 下载 node 包
wget https://nodejs.org/dist/v10.18.0/node-v10.18.0-linux-x64.tar.xz

# 解压安装包

xz -d node-v10.18.0-linux-x64.tar.xz

tar -xf node-v10.18.0-linux-x64.tar

# nodejs创建软连接

ln -s /node-v10.18.0-linux-x64/bin/node /usr/bin/node

ln -s /node-v10.18.0-linux-x64/bin/npm /usr/bin/npm
```

#### 测试

```sh
node -v

npm -v
```

