---
sidebar_position: 1
---

# Lerna 入门篇

## 多包管理方案

- `multirepo`
  - 又称`multiple repository`, 多代码仓库
  - 优势
    - 允许多元化发展，各个`module`有各自的构建等方式
  - 痛点
    - `issue`管理混乱
    - `changelog`难以整合，需要人工梳理所有变动的仓库，并做整合
    - `core repo`版本更新麻烦，需要同步所有`module`更新其依赖的`core repo`版本
- `monorepo`
  - 又称 `monolithic repository`, 单代码仓库
  - 优势
    - 集中管理，减少不同仓库配置的差异带来的沟通成本
  - 痛点
    - `repo`体积较大
    - 统一构建工具，对构建工具提出了更高要求，要能构建各种相关`module`

![mono-vs-mutil.jpg](./images/mono-vs-mutil.jpg)

## lerna 是什么？

`Lerna`是一种工具，用于优化使用`git`和`npm`管理多包存储库的工作流程。

## 为什么要使用 lerna?

将大型代码库分成单独的独立版本化的软件包对于代码共享非常有用。 但是，跨许多存储库进行更改很麻烦且难以跟踪，并且跨存储库的测试变得非常复杂。

为了解决这些（以及许多其他）问题，某些项目会将其代码库组织到多包存储库中。 众多项目以及许多其他项目都在一个存储库中开发了所有软件包。

`lerna`可以让你在主项目下管理多个子项目，从而解决了多个包互相依赖，且发布时需要手动维护多个包的问题。

## 安装 lerna

```sh
npm install -g lerna

# yarn

yarn global add lerna
```

## 创建 lerna 仓库

```sh
git init lerna-repo && cd lerna-repo
```

## Lerna 常用命令

[详见 Lerna 命令](./lerna/commands.md)

## 参考资料

[Lerna 官方文档](https://lerna.js.org/)

[【PPT】白鹭引擎首席架构师@王泽：框架开发中的基础设施搭建 ](https://www.sohu.com/a/343217202_463970)

