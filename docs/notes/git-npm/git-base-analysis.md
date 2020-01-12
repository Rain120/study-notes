#### 前言

为什么要写这个呢？因为一直以来就想学习更多`Git`的相关知识，然后也因为某次演讲和公司大佬的分享，所以我想把我学习到的和理解的分享给大家。如果你也想一起学习`Git`，那就来和我一起学习吧!! `Let's Go` 😁

**Note**: 这个不太适合初学者，如果你想学习基础知识，请移步 [Git 官网](https://git-scm.com/) 以及[你必须知道的`Git`命令](notes/git-npm/you-must-know-git-commands.md)

#### 前置知识

- 三个关键词: 本地仓库 `(local)`, 暂存区 `(index or stage)`, 远程 `(remote)`

要了解`Git`底层工作机制，就要先了解它是什么？它有什么？我们先来了解一下`.git`目录都有什么吧。

#### `.git`目录

```sh
cd .git
ls -al
```

![_git.png](./images/_git.png)

- `info`: 目录包含一个全局性排除 `(global exclude)` 文件，用以放置那些不希望被记录在 `.gitignore` 文件中的忽略模式 `(ignored patterns)`
- `description`: 文件仅供 `GitWeb` 程序使用，我们无需关心
- `index`: `stage`又称暂存区, 是一个索引
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

可以通过一下命令来查看 `or` 配置你的 `git`信息

```sh
# 系统配置
git config --system --list

# 全部配置
git config --global --list

# 当前仓库
git config --local --list

# 打开编辑器来修改指定的配置文件; --system, --global or repository (默认)
git config -e / --edit
```

详见

```sh
git config --help
```



- `HEAD`：指向当前所在分支`(current branch)`的指针文件路径`(Hash)`，一般指向`refs`下的某文件

![git-HEAD.png](./images/git-HEAD.png)

![git-HEAD-sourcetree.png](./images/git-HEAD-sourcetree.png)

- `refs`：存储指向各个分支的指针`(SHA-1标识)`文件, 包括分支和标签的引用

  ![git-refs.png](./images/git-refs.png)

  

  `heads`

  ![git-refs-heads.png](./images/git-refs-heads.png)

  `remotes`

  ![git-refs-remotes.png](./images/git-refs-remotes.png)

  `tags`

  ![git-tag-add.png](./images/git-tag-add.png)

  

  ![git-refs-tags.png](./images/git-refs-tags.png)

- `hooks`：包含客户端或服务端的钩子脚本 `(hooks scripts)`



- `logs`：存储日志的文件夹



- `objects`：存放`git`对象
- 

#### 参考资料

[Git 内部原理 - 底层命令和高层命令]([https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-%E5%BA%95%E5%B1%82%E5%91%BD%E4%BB%A4%E5%92%8C%E9%AB%98%E5%B1%82%E5%91%BD%E4%BB%A4](https://git-scm.com/book/zh/v2/Git-内部原理-底层命令和高层命令))

[这才是真正的GIT——GIT内部原理](https://www.lzane.com/tech/git-internal/)

[这才是真正的GIT——GIT内部原理 - 视频](https://www.bilibili.com/video/av77252063?t=2070)

[Git - Wiki](https://en.wikipedia.org/wiki/Git)

[Git 官网](https://git-scm.com/)

[A Visual Git Reference](https://marklodato.github.io/visual-git-guide/index-en.html)

[Git 资料学习](https://github.com/Rain120/Free-Source#Git)