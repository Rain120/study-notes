### webpack 打包优化

#### moment 按需加载语言包

```javascript
// webpack.config.js => 只需要加载中文和英文语言包
plugins: [
  new webpack.ContextReplacementPlugin(
    /moment[/\\]locale$/,
    /zh-cn|en/
  ),
]
```

![moment](./images/moment.png)

#### Usage

```javascript
new webpack.ContextReplacementPlugin(
  resourceRegExp: RegExp,
  newContentResource?: string,
  newContentRecursive?: boolean,
  newContentRegExp?: RegExp
)
```

#### `Documentation`

[Webpack ContextReplacementPlugin](https://webpack.docschina.org/plugins/context-replacement-plugin/)

#### Lodash 按需加载

1. `cherry pick`

```javascript
import get from 'lodash/get'
```

2. `Plugin`: `babel-plugin-lodash` 

   ```javascript
   // .babelrc
   {
     "env": {
       "development": {
         plugins: [
           "lodash"
         ]  
       },
       "production": {
         plugins: [
           "lodash"
         ]  
       }
     }
   }
   ```

   #### `Documentation`

   [babel-plugin-import](https://github.com/ant-design/babel-plugin-import#options)

![lodash](./images/lodash.png)

### Webpack DefinePlugin 相关问题

`DefinePlugin` 允许创建一个在**编译**时可以配置的全局常量。这可能会对开发模式和生产模式的构建允许不同的行为非常有用。如果在开发构建中，而不在发布构建中执行日志记录，则可以使用全局常量来决定是否记录日志。这就是 `DefinePlugin` 的用处，设置它，就可以忘记开发环境和生产环境构建的规则。

```javascript
if (process.env.NODE_ENV !== 'production') {
 	require('moment')   
 }

const env = process.env;

if (env.NODE_ENV !== 'production') {
 	require('moment')   
 }

// webpack 转换成 => 
if (false) {}

// env.js
module.export = process.env;
if (require('env.js').NODE_ENV !== 'production') {
 	require('moment')   
 }

// webpack 不转换
```

#### `Documentation`

[Webpack DefinePlugin](https://webpack.docschina.org/plugins/define-plugin/)





