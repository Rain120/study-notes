#### Git 如何同步Fork 项目的最新代码

```sh
git clone git@github.com:ant-design/ant-design.git

git remote add upstream git@github.com:ant-design/ant-design.git

git fetch upstream
```

以`Ant Desingn`为例

![git-fork-tips.png](./images/git-fork-tips.png)

![git-fetch-upstream.png](./images/git-fetch-upstream.png)

#### git pull 与 git pull --rebase的区别

```sh
git pull # => git fetch + git merge

git pull --rebase # => git fetch + git rebase
```



