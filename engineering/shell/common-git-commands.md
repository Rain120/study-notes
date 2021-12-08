# Shell 中常用的 Git 命令

## `Bash` 获取 `git`当前的分支名

```sh
git rev-parse --abbrev-ref HEAD
```

```sh
git symbolic-ref --short -q HEAD

git symbolic-ref HEAD | sed 's!refs\/heads\/!!'
```





