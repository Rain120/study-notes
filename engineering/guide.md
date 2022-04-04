---
sidebar_position: 1
title: Summary
---

:::tip
工程能力学习，包括 Coding, Git, Builder, etc....
:::

## 什么是工程能力

个人的一知半解，欢迎各位来辩。

:::tip
前端工程化最主要的目的还是提升业务效率。
:::

### 规范化

制定各项规范，让工作有章可循

- 统一编码规范，并与团队协作和代码维护
  - 目录结构
  - 文件命名
  - 代码规范
    - ESLint, TypeScript, Prettier
- 开发流程规范
  - 分支规范
  - CR规范
  - 工作流规范
- 文档规范
  - 前后端接口规范
- 版本管理
  - Git
  - commit message (husky + commitlint)

### 组件化

- 抽象能力的提升
- 框架的选择
  - CSS方案：CSS Modules, CSS in JS
  - 视图方案：react、Vue
  - 数据管理方案：redux、mobx, vuex
  - 路由：react-router、vue-router
  - 请求库：fetch、axios、SWR、umi-request

### 模块化

- 分离，解耦
  - ESM, CommonJS, AMD

### 自动化

- 打包构建
  - webpack
  :::tip
  增量更新, 构建速度快
  思路: git diff tag + 拓扑排序 + 构建, 参考 `lerna changed`
  待实践并对文档进行输出
  :::
  - rollup
- 优化构建流程，研发自动化工程工具，提升开发，部署效率
- 测试自动化
  - Jest
  - Mocha

## 参考资料

[从淘宝前端工程化演进，看工程化之路如何“私人订制”](https://www.infoq.cn/article/Kpd_C06scWePcO8fB7ex)
[前端工程化概述](https://juejin.cn/post/6844903588553048077)
[谁能介绍下web前端工程化？](https://www.zhihu.com/question/24558375)