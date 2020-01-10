#### 前言

为什么要写这个呢？因为一直以来就想学习更多`Git`的相关知识，然后也因为某次演讲和公司大佬的分享，所以我想把我学习到的和理解的分享给大家。如果你也想一起学习`Git`，那就来和我一起学习吧!! `Let's Go` 😁

**Note**: 这个不太适合初学者，如果你想学习基础知识，请移步 [Git 官网](https://git-scm.com/) 以及[你必须知道的`Git`命令](notes/git-npm/you-must-know-git-commands.md)

要了解`Git`底层工作机制，就要先了解它是什么？它有什么？我们先来了解一下`.git`目录都有什么吧。

#### `.git`目录

```sh
cd .git
ls -al
```

![_git.png](./images/_git.png)

- `config`：存放各种设置文档, 包含项目特有的配置选项。

```sh
cat .git/config
```

包括默认`remote`,  `branch`, 个人账户等信息

```sh
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
	url = git@github.com:Rain120/study-notes.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[branch "note-template"]
	remote = origin
	merge = refs/heads/note-template
```



- `HEAD`：指向当前所在分支的指针文件路径，一般指向`refs`下的某文件



- `refs`：存储指向各个分支的指针`(SHA-1标识)`文件

  

- `hooks`：存储钩子的文件夹



- `logs`：存储日志的文件夹



- `objects`：存放`git`对象

#### 参考资料

[这才是真正的GIT——GIT内部原理](https://www.lzane.com/tech/git-internal/)

[这才是真正的GIT——GIT内部原理 - 视频](https://www.bilibili.com/video/av77252063?t=2070)

[Git - Wiki](https://en.wikipedia.org/wiki/Git)

[Git 官网](https://git-scm.com/)