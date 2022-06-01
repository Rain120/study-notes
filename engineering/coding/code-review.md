# Code Review

## CR 是什么

全称 Code Review, 代码审查。指对计算机源代码系统化地审查，常用软件同行评审的方式进行，其目的是在找出及修正在软件开发初期未发现的错误，提升软件质量及开发者的技术。

### 优势

1. 提升代码质量
2. 找出潜在 bug
3. 通过 review 代码学习

## 常用术语

-   PR: Pull Request
-   MR: Merge Request
-   CL: 变更列表 (changelist), 表示已提交到版本控制或正在进行代码审查的自包含更改。也可以叫做 patch (补丁)。
-   WIP: Work In Progress
-   LGTM 在我看来不错(Looks Good to Me)
-   ibid. 同上

## Developer

开发者需要注意 ⚠︎⚠️、思考 🤔 的点

### 定义好你的提交的类型

:::tip
可以使用一些 commit type 尽早变更可以避免在细节、修饰、文档等方面浪费精力。比如说 **WIP**, **doc**, blah, blah, blah... 更多 commit type 可以参考 [Commit Lint](https://github.com/conventional-changelog/commitlint#what-is-commitlint)
:::

### 尽可能小的 PR

:::tip
在做 Code Review 的时候，如果有大量的文件修改，那么 Review 起来是很困难的，比较费人。
如果 PR 比较小，相对就比较容易 Review，也容易发现代码中可能存在的问题。

如果你是一个比较大的改动，那么最好分批提交，以减轻 reviewer 的审查压力。

:::

Note: **我个人的习惯是，多 commit，每次 commit 会大致描述做了什么**

Eg:

```sh
git add common/components/wrapper/select

git commit -m 'feat(common): wrapper the component of select for expand it functions from the base'
```

### 写好 PR 的 CL

:::tip
CL 描述是进行了哪些更改以及为何更改的公开记录。CL 将作为版本控制系统中的永久记录，可能会在长时期内被除审查者之外的数百人阅读。
:::

#### 怎么才是一个好的 CL？

:::tip
一般一个 CL 会包括 **首行(First Line)**, **空行(Empty Line)**, **主体(Body)**。

**首行**主要是用来告诉 reviewer，本次的 PR 正在做什么的简短摘要，最好短小而精悍，类似于写一个 Summary

**空行**用来区分首行和主体部分，让 reviewer 可以着重于首行摘要信息

**主体**可能包括对正在解决的问题的简要描述，问题，解决思路，解决方案，为什么使用这种方案，blah,blah,blah ...

:::

**到了开心快乐的举栗子 🌰 环节了**

**🚀Good CL 描述**, 看完就 TM 一个词儿，清晰明白，言简意赅，倍爽儿~

> **功能更新**
>
> 在 heatmap 中添加 borderRadius 配置 (可以加粗或者设置为标题)
>
> 本次修改是从 issue#xxx 获取的，需要在 heatmap 上增加 borderRadius 配置，通过将组件的 borderRadius 透传给 zrender 来完成，blah, blah ...

详细参考 [echarts issue 16493](https://github.com/apache/echarts/pull/16493)

**Bad CL 描述(看完直接报警 🚓)**，需要看完你写的一堆东西，才知道你要干什么，更离谱的是，看完了也不知道你要干什么

-   remove something
-   build something
-   fix something
-   blah, blah, blah...

shit

### 求 CR，挑选合适的评审人

在生活中，良师益友益于行，要有一次高质量的 CR，必定需要找一个 **“好的 reviewer”**(PS: 不要抬杠，是不是要找大佬才可以，合适最最重要)。

:::tip
个人的建议是可以根据下面步骤去筛选到一个合适的同学

-   业务代码
    -   你需要有一个和你同处于一条业务线的同学，他在业务上的理解可以给你很大的帮助，能理解你的上下文关系，不需要过度的解释
-   通用代码 - 精通你正在使用的语言、框架或工具 - 对这一主题知之甚深，有自己的理解

:::


### 调整好你的心态

:::tip
我们知道，不同人的能力不同，而且程序员吗，很多人都很自负的，但是不要因为 CR 别人提了自己不少问题就影响自己的心情，然后就跟别人干起来，何必因为这个呢？take it easy，just be smile! 虚心接受别人的建议，说不定会对你有所帮助呢？

当别人花费大量的时间给你评论，也请你心平气和的与对方沟通交流，不要吝啬你的感谢，笔芯 or ❤ or 🤝
:::

:::danger
杠精自动跳过这条吧，待会你看完之后想跟我干架，那可不划算。
:::

**Note:** 我平常在提交之前会 review 一下自己改动的地方，比如说 console 要不要删啊，代码风格啊，能不能简单优化一些逻辑呀，blah，blah....

[Google Code Review Developer Guide](https://github.com/google/eng-practices/blob/master/review/developer/index.md)

## Reviewer

评审者需要注意 ⚠︎、思考 🤔 的点

### CR 过程

### CR 要点

- 设计模式

- 业务逻辑

- 测试

> **通用包建议关注** 

:::tip
代码是否具有正确且设计良好的自动化测试，[cypress](https://docs.cypress.io/) 了解一下
:::

- 风格

:::tip
参考 [代码风格](https://rain120.github.io/study-notes/engineering/coding/style)
:::

- 注释 文档

:::tip
参考 [代码注释](https://rain120.github.io/study-notes/engineering/coding/annotation)
:::

### 评论相关

在做 CR 时，我们会对代码进行评论，但是评论如果没有什么类目区分，大部分时候会成为一种负担，所以，我建议，我们要对评论进行分类处理。

:::tip
比如说，我们使用 emoji 来区分实现的好坏

-   🙁 我觉得这里有问题
-   😐 我能接受这种写法
-   😀 看着没什么问题
-   🤩 牛逼
-   👍 不错不错
-   ❤ 感谢

当然你们可以根据团队规范来制定类别，比如说缩写 前缀是[P0], [P1], [p2], [O] optional，[Q] question
:::

## CR 沉淀

好的东西，当然要记得分享了，CR 也是一样的，当出现了一个比较有代表性的 CR，比如说 **一个好的解决方案**，**一个比较有代表性的问题**，这类的 CR 就应该沉淀下来。他们有着天然的优势:

-   相同问题借鉴
-   反例示例
-   通用方案的抽离
-   blah, blah, blah ...

## 参考资料

[Code review](https://en.wikipedia.org/wiki/Code_review)

[Google 开发者代码审查指南 英文版](https://github.com/google/eng-practices)

[Google 开发者代码审查指南 中文版](https://jimmysong.io/eng-practices/docs/review/)

[CODE REVIEW 中的几个提示](https://coolshell.cn/articles/1302.html)
