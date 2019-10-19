![github-actions.jpg](./images/github-actions.jpg ":no-zoom")

### [GitHub Actions](https://github.com/features/actions)

> `GitHub Actions`是现今非常优秀的`CI / CD`工具，它使你可以轻松实现所有软件工作流程的自动化。你可以直接从`GitHub`中构建，测试和部署代码。按照你所希望的方式进行代码检查、分支管理和问题筛选工作。

### 申请权限`Github Actions bete`

![sign-for-git-actions-bate.png](./images/sign-for-git-actions-bate.png ":no-zoom")

![enabled-git-actions-bate.png](./images/enabled-git-actions-bate.png ":no-zoom")

#### 如何使用`Github Actions`

![git-actions](./images/git-actions.png ":no-zoom")

我们来做一个最简单的`CI`，就是在线`Build and Deploy`，我们使用的[Demo](https://github.com/Rain120/better-scroll-for-react-usage)只需要在用户`push`之后,进行`npm run build`即可。

首先我们选择`Node.js`

![set_node_yml.png](./images/set_node_yml.png ":no-zoom")



我们发现这个`workflow`会帮我们`check node`的版本以及提供一些简单的流程。

我们目前只要让他执行

```shell
npm install
npm run changelog
npm run build
```

所以我们的配置如下

![edit-node-yml.png](./images/edit-node-yml.png ":no-zoom")

![nodejs_yml.png](./images/nodejs_yml.png ":no-zoom")



设置完了之后，我们点击进入

![workflow.png](./images/workflow.png ":no-zoom")



👉有个执行按钮

![run_yml1.png](./images/run_yml1.png ":no-zoom")

`CI`完成状态

![run_yml.png](./images/run_yml.png ":no-zoom")

`commit`提示`CI`成功失败

![push_node_build.png](./images/push_node_build.png ":no-zoom")

### 参考资料

[GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

