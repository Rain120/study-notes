---
sidebar_position: 1
---

# 定义

**微前端** 是 `ThoughtWorks` 在 2016 年团队的技术雷达上, 借鉴微服务的架构理念提出来的一个概念。

:::tip 微前端定义 reference from [micro-frontends](https://micro-frontends.org/)
Techniques, strategies and recipes for building a modern web app with multiple teams that can ship features independently.

微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 Web 应用的 **技术手段及方法策略**。
:::

## 优点

-   独立开发, 独立部署
-   独立运行
    :::note
    每个微应用之间状态隔离, 运行时状态不共享
    :::

-   增量升级
-   技术栈无关

## 核心

微前端的核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用, 每个应用都可以 **独立开发**、 **独立运行**、 **独立部署**, 再将这些小型应用融合为一个完整的应用, 或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一, 又可以减少项目之间的耦合, 提升项目扩展性, 相比一整块的前端仓库, 微前端架构下的前端仓库倾向于更小更灵活。

### 核心概念

-   单实例
    :::tip
    当前页面 **只存在一个子应用**
    :::

-   多实例
    :::tip
    当前页面 **存在多个子应用**, 可以使用浏览器原生隔离方案, 比如 iframe 或者 WebComponent 这些
    :::

-   生命周期
    :::tip 更多详情
    - bootstrap
    - mount
    - unmount
    
    详细方案[参考](./lifecycle.md)
    :::

-   预加载
    :::tip 更多详情
    TODO
    :::

-   沙箱隔离
    :::tip 更多详情
    对 JavaScript和CSS进行代码隔离, 主要分为快照沙箱, Proxy(代理)沙箱。
    WIP
    :::

-   通信
    :::tip 更多详情
    类似 EventBus 通信逻辑
    TODO
    :::

-   路由
    :::tip 更多详情
    监听 history or hash 的变化来进行处理, 详细方案[参考](./route.md)
    :::

-   环境变量
    :::tip 更多详情
    TODO
    :::

## 框架

### Qiankun

:::tip 项目地址
https://github.com/umijs/qiankun
:::

qiankun 是一个基于 [single-spa](https://github.com/single-spa/single-spa) 的微前端实现库, 旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

### Garfish

:::tip 项目地址
https://garfish.top/
:::

Garfish 是一套微前端的解决方案, 主要用于解决现代 web 应用在前端生态繁荣和 web 应用日益复杂化两大背景下带来的跨团队协作、技术体系多样化、web 应用日益复杂化等问题。从架构层面出发将多个独立交付的前端应用组成整体, 这些前端应用能够「独立开发」、「独立测试」、「独立部署」, 但是最终在用户看来仍然是内聚的单个产品。

### EMP

:::tip 项目地址
https://emp2.netlify.app/
:::

Webpack 5 Module Federation (联邦模块)方案

### Luigi

:::tip 项目地址
https://github.com/SAP/luigi
:::

Luigi 可帮助您构建可模块化, 可扩展, 可伸缩和一致的 UI 和 Web 应用程序。在分布式开发环境中围绕复杂功能创建统一的用户体验。

[Playground](https://fiddle.luigi-project.io/)

更多 [你必须知道的 11 个微前端框架](https://www.infoq.cn/article/22ciyqbs3s0bhekvnorp)

## 参考地址
