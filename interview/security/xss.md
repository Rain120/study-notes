# XSS

- 持久型
  - 常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。
- 非持久型(反射型 XSS)
  - 常见于通过 URL 传递参数的功能，如网站搜索、跳转等
- DOM 型
  - DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。

- HttpOnly
- 转义
- CSP Content-Security-Policy(内容安全协议) https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP

[前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)