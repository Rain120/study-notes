1. 什么是`npm scripts`?

   `npm scripts`就是通过使用脚本来自动执行重复性任务。

2. 启动原理

3. `Path`

   如果依赖于定义可执行脚本的模块（如测试套件），那么这些可执行文件将添加到`path`以执行脚本。 所以，如果你的`package.json`有这个：

   ```javascript
   {
       "name": "webpack-demo",
       "dependencies": {
           "webpack": "4.1.0"
       },
       "scripts": {
           "build:dev": "webpack ./test"
       }
   }
   ```

   然后你可以运行`npm build:dev`来执行`webpack`脚本，它被导出到`npm install`上的`node_modules/.bin`目录中。

4. 参数

   向 `npm` 脚本传入参数，要使用`--`标明。

   可以直接执行命令，也可以将命令写成一条脚本命令执行。

5. 环境变量

6. 执行顺序

7. 钩子函数

   在 `npm script` 中存在两种类型的钩子，`pre-xxx` 和 `post-xxx`。

8. 生命周期事件

参考资料:

[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

[npm scripts: how npm handles the "scripts" field](https://docs.npmjs.com/misc/scripts)

