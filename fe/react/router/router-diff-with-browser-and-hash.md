# BrowserRouter和HashRouter的区别?
## 区别

### BrowserRouter

- `BrowserRouter` 使用 `HTML5 history API`, 保证`UI界面`和`URL`保存同步
采用这种方式需要后端或者`Nginx`配置通配路由, 比如在某个路径下重定向到模板首页 否则路由刷新页面时会404

- 传值方式: url传值, 路由参数传值, 以及state

- 不支持历史记录功能

### HashRouter

- `HashRouter`使用 `URL`(即 `window.location.hash`) 的哈希部分来保持UI与URL同步的。哈希历史记录不支持`location.key`和`location.state` 用来支持旧版浏览器, 官方不建议使用

- 传值方式: url传值, 路由参数传值

## 参考

[BrowserRouter](https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router-dom/docs/api/BrowserRouter.md)

[HashRouter](https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router-dom/docs/api/HashRouter.md)

[MemoryRouter](https://github.com/ReactTraining/react-router/blob/b77283cb75/packages/react-router-dom/docs/api/MemoryRouter.md)

[history](https://github.com/ReactTraining/history)
