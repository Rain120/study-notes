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

开发者需要注意 ⚠️、思考 🤔 的点

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

**🚀Good CL描述**, 看完就TM一个词儿，清晰明白，言简意赅，倍爽儿~

> **功能更新**
> 
> 在 heatmap 中添加 borderRadius 配置 (可以加粗或者设置为标题)
> 
> 本次修改是从 issue#xxx 获取的，需要在 heatmap 上增加 borderRadius 配置，通过将组件的 borderRadius 透传给 zrender 来完成，blah, blah ...

详细参考 [echarts issue 16493](https://github.com/apache/echarts/pull/16493)

**Bad CL描述(看完直接报警🚓)**，需要看完你写的一堆东西，才知道你要干什么，更离谱的是，看完了也不知道你要干什么

-   remove something
-   build something
-   fix something
-   blah, blah, blah...

shit

### 求 CR

当你在提交完代码之后，你可以通过发送群消息 or 个人消息请其他同学(业务上: 组内或者比较熟的同学, 工具包: 任何同学都可以)给你 CR

[Google Code Review Developer Guide](https://github.com/google/eng-practices/blob/master/review/developer/index.md)

## Reviewer

## CR 过程

## CR 沉淀

## 参考资料

[Code review](https://en.wikipedia.org/wiki/Code_review)

[Google 开发者代码审查指南 英文版](https://github.com/google/eng-practices)

[Google 开发者代码审查指南 中文版](https://jimmysong.io/eng-practices/docs/review/)

[CODE REVIEW 中的几个提示](https://coolshell.cn/articles/1302.html)
