>  [Git](https://git-scm.com/) 是一个分布式版本控制软件, 最初目的是为更好地管理`Linux`内核开发而设计。
>
> 来源：[维基百科  - Git](https://zh.wikipedia.org/wiki/Git)

`Git`是一个软件，它允许你通过提交对一个系统（或一组）文件的历史进行注释。这些提交便是在给定时间点对系统做出的差异“快照”。

#### 1. `Git` 配置

```shell
--system #系统级别
--global #用户全局
--local #单独一个项目

git config --global user.name "xxxx" #用户名
git config --global user.email "xxxx@xxx.com" #邮箱

git config --list # 列举所有配置
```

#### 2. `Git` 分支

`master`: 默认开发分支

`HEAD`: 当前开发分支

`HEAD^[n]`: `HEAD`的第`n`次父提交提交, `^`相当于`^1`

`HEAD~[n]`: `HEAD`的第`n`个祖先提交

`origin`: 默认远程版本库

```shell
git branch # 查看分支

git branch <name> # 创建分支

git checkout <name> # 切换分支

git checkout -b <name> # 创建 + 切换分支

git merge <name> # 合并某分支到当前分支

git branch -d <name> # 删除分支
```

`Note`: `checkout`只会移动`HEAD`指针，`reset`会改变`HEAD`的引用值

[官网下载速度慢，可使用这个链接下载](https://github.com/Rain120/Free-Source/releases/tag/0.0.1) 或者[`Github`下载地址](https://github.com/Rain120/Free-Source/blob/master/Git%20Bash/README.md), 需要其他版本请提`issue`联系我。

参考资料

[Git Document](https://git-scm.com/docs)  [中文文档](https://git-scm.com/book/zh/v2)

[15-git-commands-you-may-not-know](https://zaiste.net/15-git-commands-you-may-not-know/)

