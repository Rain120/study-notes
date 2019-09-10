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

